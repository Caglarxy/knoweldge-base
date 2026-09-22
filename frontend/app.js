const state = {
  token: localStorage.getItem("kb_token"),
  currentUserId: null,
  currentUserRole: null,
  knowledgeBases: [],
  teamSpaces: [],
  folders: [],
  expandedFolders: new Set(),
  documents: [],
  documentCatalog: [],
  currentFolderId: null,
  folderTreeInitialized: false,
  folderDialogMode: "create",
  folderDialogFolderId: null,
  teamSpaceDialogMode: "create",
  teamSpaceDialogId: null,
  moveTargetType: null,
  moveTargetId: null,
  copySourceType: null,
  copySourceId: null,
  copyTargetType: "team",
  copyTargetId: null,
  copyTargetFolders: [],
  renameDocumentId: null,
  readerDocumentId: null,
  readerZoom: 1,
  readerKind: null,
  readerObjectUrl: null,
  readerPreview: null,
  readerPptxViewer: null,
  readerHtmlFrame: null,
  readerHtmlKind: null,
  readerHtmlSlides: [],
  readerHtmlPage: 0,
  readerHtmlParsed: null,
  readerHtmlWheelAt: 0,
  uploadXhr: null,
  uploadCancelled: false,
  view: "knowledge",
  selectedFileType: "all",
  teamSelectedFileTypes: new Set(["all"]),
  recycleItems: [],
  teamRecycleItems: [],
  teamDetailId: null,
  teamDetailSpace: null,
  teamTab: "all",
  teamMembers: [],
  teamMemberCandidates: [],
};

const $ = (selector) => document.querySelector(selector);
let previewModulePromise = null;
let pptxRendererModulePromise = null;

const FILE_TYPE_GROUPS = [
  { id: "image", label: "图片", icon: "▧", extensions: new Set(["png", "jpg", "jpeg", "gif", "webp"]) },
  { id: "document", label: "文档", icon: "▤", extensions: new Set(["pdf", "txt", "md", "markdown", "html", "htm", "ppt", "pptx", "doc", "docx", "xls", "xlsx"]) },
  { id: "video", label: "视频", icon: "▷", extensions: new Set(["mp4", "avi", "mov", "mkv", "webm"]) },
  { id: "audio", label: "音频", icon: "◖", extensions: new Set(["mp3", "wav", "flac", "aac", "m4a", "ogg"]) },
  { id: "other", label: "其它", icon: "…", extensions: new Set() },
];

function getFileTypeGroup(extension) {
  const normalized = String(extension || "").replace(".", "").toLowerCase();
  return FILE_TYPE_GROUPS.find((group) => group.extensions.has(normalized))?.id || "other";
}

function loadPreviewModule() {
  if (!previewModulePromise) {
    window.process = window.process || { env: {} };
    previewModulePromise = import("/vendor/vue-document-preview/preview.js?v=20260902-1");
  }
  return previewModulePromise;
}

function loadPptxRendererModule() {
  if (!pptxRendererModulePromise) {
    pptxRendererModulePromise = import("/vendor/pptx-renderer/aiden0z-pptx-renderer.browser.es.js?v=20260902-1");
  }
  return pptxRendererModulePromise;
}

function normalizeDocxTables(container) {
  const compactLayout = window.matchMedia("(max-width: 900px)").matches;
  container.querySelectorAll(".docx-wrapper section.docx, .docx-wrapper section.docx-preview").forEach((section) => {
    if (compactLayout) {
      section.style.setProperty("padding-left", "20px", "important");
      section.style.setProperty("padding-right", "20px", "important");
    }
  });
  container.querySelectorAll(".docx-wrapper table").forEach((table) => {
    table.style.setProperty("width", "100%", "important");
    table.style.setProperty("max-width", "100%", "important");
    table.style.setProperty("min-width", "0", "important");
    table.style.setProperty("table-layout", "fixed", "important");
    table.querySelectorAll("col").forEach((column) => {
      if (!column.dataset.kbOriginalStyle) {
        column.dataset.kbOriginalStyle = column.getAttribute("style") || "";
      }
      if (compactLayout) {
        column.style.setProperty("width", "0", "important");
      }
    });
  });
  container.querySelectorAll(".docx-wrapper td, .docx-wrapper th").forEach((cell) => {
    cell.style.setProperty("min-width", "0", "important");
    cell.style.setProperty("max-width", "100%", "important");
    cell.style.setProperty("box-sizing", "border-box");
    cell.style.setProperty("overflow-wrap", "anywhere");
    cell.style.setProperty("word-break", "break-word");
  });
  container.querySelectorAll(".docx-wrapper td > *, .docx-wrapper th > *").forEach((child) => {
    child.style.setProperty("max-width", "100%", "important");
  });
  container.querySelectorAll(".docx-wrapper img").forEach((image) => {
    image.style.setProperty("max-width", "100%", "important");
    image.style.setProperty("height", "auto");
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setMessage(message, isError = false) {
  const element = $("#app-message");
  element.textContent = message || "";
  element.className = message ? (isError ? "message error" : "message success") : "message";
}

async function api(path, options = {}) {
  const headers = new Headers(options.headers || {});
  if (state.token) headers.set("Authorization", `Bearer ${state.token}`);
  const response = await fetch(`/api/v1${path}`, { ...options, headers });
  if (response.status === 401) {
    logout();
    throw new Error("登录已过期");
  }
  if (response.status === 204 || response.status === 205) return null;
  const contentType = response.headers.get("content-type") || "";
  const body = contentType.includes("application/json") ? await response.json() : await response.text();
  if (!response.ok) {
    throw new Error(body?.detail || body || "请求失败");
  }
  return body;
}

async function submitAuth(event) {
  event.preventDefault();
  const payload = {
    username: $("#username").value.trim(),
    password: $("#password").value,
  };
  try {
    const result = await api("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    state.token = result.access_token;
    localStorage.setItem("kb_token", state.token);
    showApp(result.user);
  } catch (error) {
    $("#auth-error").textContent = error.message;
  }
}

function showApp(user) {
  state.currentUserId = user.id;
  state.currentUserRole = user.role;
  state.teamDetailId = null;
  state.teamDetailSpace = null;
  setView("knowledge");
  $("#auth-view").classList.add("hidden");
  $("#app-view").classList.remove("hidden");
  const initial = Array.from(String(user.username || "知").trim())[0] || "知";
  ["#user-avatar", "#user-menu-panel-avatar"].forEach((selector) => {
    $(selector).textContent = initial;
  });
  ["#user-menu-name", "#user-menu-panel-name"].forEach((selector) => {
    $(selector).textContent = user.username;
  });
  $("#admin-link").classList.toggle("hidden", user.role !== "admin");
  loadKnowledgeBases();
}

function logout() {
  state.token = null;
  state.currentUserId = null;
  state.currentUserRole = null;
  localStorage.removeItem("kb_token");
  closeUserMenu();
  $("#app-view").classList.add("hidden");
  $("#auth-view").classList.remove("hidden");
}

function closeUserMenu() {
  const panel = $("#user-menu-panel");
  const button = $("#user-menu-button");
  if (!panel || !button) return;
  panel.classList.add("hidden");
  button.setAttribute("aria-expanded", "false");
}

function toggleUserMenu() {
  const panel = $("#user-menu-panel");
  const button = $("#user-menu-button");
  if (!panel || !button) return;
  const isOpen = !panel.classList.contains("hidden");
  panel.classList.toggle("hidden", isOpen);
  button.setAttribute("aria-expanded", String(!isOpen));
}

function openPasswordDialog() {
  closeUserMenu();
  $("#current-password").value = "";
  $("#new-password").value = "";
  $("#confirm-password").value = "";
  $("#password-error").textContent = "";
  $("#password-dialog").showModal();
  $("#current-password").focus();
}

async function submitPasswordForm(event) {
  event.preventDefault();
  const newPassword = $("#new-password").value;
  const confirmPassword = $("#confirm-password").value;
  if (newPassword !== confirmPassword) {
    $("#password-error").textContent = "两次输入的新密码不一致";
    return;
  }
  try {
    await api("/auth/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        current_password: $("#current-password").value,
        new_password: newPassword,
      }),
    });
    $("#password-dialog").close();
    setMessage("密码已修改");
  } catch (error) {
    $("#password-error").textContent = error.message;
  }
}

async function loadKnowledgeBases() {
  try {
    state.knowledgeBases = await api("/knowledge-bases");
    const select = $("#knowledge-base-select");
    const options = state.knowledgeBases.length > 1
      ? ['<option value="all">全部</option>']
      : state.knowledgeBases.length === 0
        ? ['<option value="">暂无可访问的知识库</option>']
        : [];
    options.push(...state.knowledgeBases
      .map((item) => `<option value="${item.id}">${escapeHtml(item.name)}</option>`)
    );
    select.innerHTML = options.join("");
    select.value = state.knowledgeBases.length > 1
      ? "all"
      : state.knowledgeBases[0]?.id ? String(state.knowledgeBases[0].id) : "";
    state.selectedFileType = "all";
    $("#knowledge-all-files-button")?.classList.add("active");
    updateUploadAvailability();
    renderTeamDetailHeader();
    state.currentFolderId = null;
    state.folderTreeInitialized = false;
    state.expandedFolders.clear();
    await loadFolders();
    await loadDocuments();
  } catch (error) {
    setMessage(error.message, true);
  }
}

async function loadTeamSpaces() {
  try {
    state.teamSpaces = await api("/team-spaces");
    if (state.teamDetailId !== null) {
      state.teamDetailSpace = state.teamSpaces.find(
        (item) => String(item.id) === String(state.teamDetailId),
      ) || state.teamDetailSpace;
      renderTeamDetailHeader();
    }
    renderTeamSpaces();
  } catch (error) {
    setMessage(error.message, true);
  }
}

function setView(view) {
  state.view = view;
  const knowledgePanel = $("#knowledge-content-panel");
  const teamPanel = $("#team-space-view");
  const recyclePanel = $("#recycle-bin-view");
  const knowledgeSidebar = $("#knowledge-sidebar-content");
  const appBody = $("#app-body");
  const isKnowledgeContent = view === "knowledge" || view === "team-detail";
  appBody?.classList.remove("view-knowledge", "view-team", "view-team-detail", "view-recycle");
  appBody?.classList.add(`view-${view}`);
  appBody?.classList.toggle("workspace-layout", view !== "knowledge");
  knowledgePanel?.classList.toggle("hidden", !isKnowledgeContent);
  teamPanel?.classList.toggle("hidden", view !== "team");
  recyclePanel?.classList.toggle("hidden", view !== "recycle");
  knowledgeSidebar?.classList.toggle("hidden", view !== "knowledge");
  $("#team-detail-header")?.classList.toggle("hidden", view !== "team-detail");
  $("#team-new-folder-button")?.classList.toggle("hidden", view !== "team-detail");
  $("#team-file-type-filter")?.classList.toggle("hidden", view !== "team-detail");
  if (view !== "team-detail") closeTeamFileTypeMenu();
  document.querySelectorAll("[data-view]").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  if (view === "team") {
    renderTeamSpaces();
    loadTeamSpaces();
  }
  if (view === "recycle") loadRecycleBin();
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "-" : date.toLocaleString();
}

function renderTeamSpaces() {
  const cards = $("#team-space-cards");
  const empty = $("#team-space-empty");
  if (!cards || !empty) return;
  empty.classList.toggle("hidden", state.teamSpaces.length > 0);
  cards.innerHTML = state.teamSpaces.map((space) => {
    const initial = Array.from(String(space.name || "知").trim())[0] || "知";
    const canEdit = space.is_owner || state.currentUserRole === "admin";
    const editButton = canEdit
      ? `<button class="team-space-card-edit" data-team-action="edit" data-id="${space.id}" type="button" title="编辑空间信息" aria-label="编辑 ${escapeHtml(space.name)}">✎</button>`
      : "";
    return `
      <article class="team-space-card">
        <div class="team-space-card-header">
          <button class="team-space-card-main" data-team-action="open" data-id="${space.id}" type="button">
            <span class="team-space-card-avatar" aria-hidden="true">${escapeHtml(initial)}</span>
            <span class="team-space-card-content">
              <strong>${escapeHtml(space.name)}</strong>
            </span>
            <span class="team-space-card-arrow" aria-hidden="true">›</span>
          </button>
          ${editButton}
        </div>
        <div class="team-space-card-description">
          <small>${escapeHtml(space.description || "暂无描述")}</small>
          <span class="team-space-card-status">${space.is_owner ? "我创建的" : "已加入"}</span>
        </div>
        <div class="team-space-card-stats">
          <span><strong>${space.document_count ?? 0}</strong> 文档</span>
          <span><strong>${space.member_count ?? 1}</strong> 成员</span>
          <span class="team-space-card-created">创建于 ${escapeHtml(formatDate(space.created_at))}</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderTeamDetailHeader() {
  const space = state.teamDetailSpace;
  if (!space) return;
  const initial = Array.from(String(space.name || "知").trim())[0] || "知";
  $("#team-detail-avatar").textContent = initial;
  $("#team-detail-name").textContent = space.name;
  $("#team-detail-meta").textContent =
    `${space.owner_username || "未知用户"} · 文档 ${space.document_count ?? 0} · 成员 ${space.member_count ?? 1}`;
}

function setTeamDetailTab(tab) {
  if (state.view !== "team-detail") return;
  state.teamTab = tab;
  document.querySelectorAll("[data-team-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.teamTab === tab);
  });
  $("#team-detail-files")?.classList.toggle("hidden", tab !== "all");
  $("#team-members-panel")?.classList.toggle("hidden", tab !== "members");
  $("#team-recycle-panel")?.classList.toggle("hidden", tab !== "recycle");
  if (tab === "members") loadTeamMembers();
  if (tab === "recycle") loadTeamRecycleBin();
}

function canManageTeamSpace() {
  return Boolean(
    state.teamDetailSpace
    && (state.teamDetailSpace.is_owner || state.currentUserRole === "admin"),
  );
}

async function loadTeamMembers() {
  if (!state.teamDetailId) return;
  setTeamMembersMessage("正在加载...");
  try {
    state.teamMembers = await api(`/team-spaces/${state.teamDetailId}/members`);
    renderTeamMembers();
    setTeamMembersMessage(`共 ${state.teamMembers.length} 名成员`);
  } catch (error) {
    setTeamMembersMessage(error.message, true);
  }
}

function setTeamMembersMessage(message, isError = false) {
  const element = $("#team-members-message");
  if (!element) return;
  element.textContent = message || "";
  element.className = message ? (isError ? "message error" : "message success") : "message";
}

function renderTeamMembers() {
  const table = $("#team-members-table");
  if (!table) return;
  $("#add-team-member-button")?.classList.toggle("hidden", !canManageTeamSpace());
  table.innerHTML = state.teamMembers.map((member) => `
    <tr>
      <td>
        <div class="team-member-name">
          <span class="user-avatar" aria-hidden="true">${escapeHtml(Array.from(member.username || "知")[0] || "知")}</span>
          <span><strong>${escapeHtml(member.username)}</strong><small>${escapeHtml(member.email || `用户 #${member.user_id}`)}</small></span>
        </div>
      </td>
      <td><span class="admin-role ${member.is_owner ? "is-admin" : ""}">${member.is_owner ? "空间所有者" : "成员"}</span></td>
      <td>${formatDate(member.created_at)}</td>
      <td class="actions">${canManageTeamSpace() && !member.is_owner
        ? `<button class="link-button danger-text" data-team-member-action="remove" data-user-id="${member.user_id}" type="button">移除</button>`
        : ""}</td>
    </tr>
  `).join("") || `<tr><td colspan="4" class="empty-state">暂无成员</td></tr>`;
}

async function openTeamMemberDialog() {
  if (!state.teamDetailId || !canManageTeamSpace()) return;
  $("#team-member-error").textContent = "";
  try {
    state.teamMemberCandidates = await api(`/team-spaces/${state.teamDetailId}/member-candidates`);
    const select = $("#team-member-select");
    select.innerHTML = state.teamMemberCandidates.length
      ? state.teamMemberCandidates.map((user) =>
        `<option value="${user.user_id}">${escapeHtml(user.username)}${user.email ? ` · ${escapeHtml(user.email)}` : ""}</option>`,
      ).join("")
      : '<option value="">暂无可添加用户</option>';
    select.disabled = state.teamMemberCandidates.length === 0;
    $("#team-member-dialog").showModal();
  } catch (error) {
    setTeamMembersMessage(error.message, true);
  }
}

async function submitTeamMemberForm(event) {
  event.preventDefault();
  const userId = Number($("#team-member-select").value);
  if (!userId) {
    $("#team-member-error").textContent = "请选择用户";
    return;
  }
  try {
    await api(`/team-spaces/${state.teamDetailId}/members`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId }),
    });
    $("#team-member-dialog").close();
    await loadTeamMembers();
    await loadTeamSpaces();
    setMessage("成员已添加");
  } catch (error) {
    $("#team-member-error").textContent = error.message;
  }
}

async function removeTeamMember(userId) {
  if (!state.teamDetailId || !canManageTeamSpace()) return;
  const member = state.teamMembers.find((item) => item.user_id === userId);
  if (!member || !window.confirm(`确定移除成员“${member.username}”吗？`)) return;
  try {
    await api(`/team-spaces/${state.teamDetailId}/members/${userId}`, { method: "DELETE" });
    await loadTeamMembers();
    await loadTeamSpaces();
    setMessage("成员已移除");
  } catch (error) {
    setTeamMembersMessage(error.message, true);
  }
}

async function loadRecycleBin() {
  try {
    state.recycleItems = await api("/recycle-bin");
    renderRecycleBin(state.recycleItems, "#recycle-bin-table", "#recycle-bin-empty", "#empty-recycle-button");
  } catch (error) {
    setMessage(error.message, true);
  }
}

async function loadTeamRecycleBin() {
  const knowledgeBaseId = state.teamDetailSpace?.knowledge_base_id;
  if (!knowledgeBaseId) return;
  try {
    state.teamRecycleItems = await api(`/recycle-bin?knowledge_base_id=${knowledgeBaseId}`);
    renderRecycleBin(
      state.teamRecycleItems,
      "#team-recycle-table",
      "#team-recycle-empty",
      "#empty-team-recycle-button",
    );
    $("#team-recycle-message").textContent = `共 ${state.teamRecycleItems.length} 项`;
  } catch (error) {
    $("#team-recycle-message").textContent = error.message;
    $("#team-recycle-message").className = "message error";
  }
}

function recycleTypeIcon(item) {
  if (item.kind === "folder") {
    return '<span class="recycle-type-icon recycle-folder-icon" aria-hidden="true">📁</span>';
  }
  return documentTypeIcon(item.extension);
}

function recycleTypeLabel(item) {
  return item.kind === "folder" ? "文件夹" : item.extension || "文件";
}

function renderRecycleBin(
  items,
  tableSelector = "#recycle-bin-table",
  emptySelector = "#recycle-bin-empty",
  clearButtonSelector = "#empty-recycle-button",
) {
  const table = $(tableSelector);
  const empty = $(emptySelector);
  const clearButton = $(clearButtonSelector);
  const recycleScope = tableSelector === "#team-recycle-table" ? "team" : "global";
  if (!table || !empty) return;
  empty.classList.toggle("hidden", items.length > 0);
  if (clearButton) clearButton.disabled = items.length === 0;
  table.innerHTML = items.map((item) => `
    <tr>
      <td>
        <div class="document-name-cell recycle-name-cell">
          ${recycleTypeIcon(item)}
          <div class="document-name-content">
            <strong>${escapeHtml(item.name)}</strong>
          </div>
        </div>
      </td>
      <td>${escapeHtml(item.knowledge_base_name || "未知知识库")}</td>
      <td>${formatSize(item.size_bytes || 0)}</td>
      <td>${escapeHtml(recycleTypeLabel(item))}</td>
      <td>${formatDate(item.deleted_at)}</td>
      <td>${formatDate(item.expires_at)}</td>
      <td class="actions">
        <button class="link-button" data-recycle-scope="${recycleScope}" data-recycle-action="restore" data-kind="${item.kind}" data-id="${item.id}" type="button">恢复</button>
        <button class="link-button danger-text" data-recycle-scope="${recycleScope}" data-recycle-action="purge" data-kind="${item.kind}" data-id="${item.id}" type="button">彻底删除</button>
      </td>
    </tr>
  `).join("");
}

async function handleRecycleAction(event) {
  const button = event.target.closest("[data-recycle-action]");
  if (!button) return;
  const { recycleAction, kind, id } = button.dataset;
  const scope = button.dataset.recycleScope || "global";
  const items = scope === "team" ? state.teamRecycleItems : state.recycleItems;
  const item = items.find((entry) => String(entry.id) === String(id) && entry.kind === kind);
  if (!item) return;
  try {
    if (recycleAction === "restore") {
      await api(`/recycle-bin/${kind}/${id}/restore`, { method: "POST" });
      setMessage(`${item.name} 已恢复`);
    } else if (recycleAction === "purge") {
      if (!window.confirm(`确定彻底删除“${item.name}”吗？此操作不可恢复。`)) return;
      await api(`/recycle-bin/${kind}/${id}`, { method: "DELETE" });
      setMessage(`${item.name} 已彻底删除`);
    }
    if (scope === "team") {
      await loadTeamRecycleBin();
      await loadTeamSpaces();
    } else {
      await loadRecycleBin();
      await loadKnowledgeBases();
    }
  } catch (error) {
    setMessage(error.message, true);
  }
}

async function emptyTeamRecycleBin() {
  const knowledgeBaseId = state.teamDetailSpace?.knowledge_base_id;
  if (!knowledgeBaseId || !state.teamRecycleItems.length) return;
  if (!window.confirm("确定清空本空间回收站吗？所有内容将被彻底删除且不可恢复。")) return;
  try {
    await api(`/recycle-bin?knowledge_base_id=${knowledgeBaseId}`, { method: "DELETE" });
    await loadTeamRecycleBin();
    await loadTeamSpaces();
    setMessage("空间回收站已清空");
  } catch (error) {
    setMessage(error.message, true);
  }
}

async function emptyRecycleBin() {
  if (!state.recycleItems.length) return;
  if (!window.confirm("确定清空回收站吗？所有内容将被彻底删除且不可恢复。")) return;
  try {
    await api("/recycle-bin", { method: "DELETE" });
    setMessage("回收站已清空");
    await loadRecycleBin();
  } catch (error) {
    setMessage(error.message, true);
  }
}

async function openTeamKnowledgeBase(id) {
  const space = state.teamSpaces.find((item) => String(item.id) === String(id));
  if (!space) return;
  state.teamDetailId = space.id;
  state.teamDetailSpace = space;
  state.teamTab = "all";
  state.selectedFileType = "all";
  state.teamSelectedFileTypes = new Set(["all"]);
  renderTeamDetailHeader();
  setView("team-detail");
  state.currentFolderId = null;
  state.folderTreeInitialized = false;
  state.expandedFolders.clear();
  updateUploadAvailability();
  renderTeamDetailHeader();
  setTeamDetailTab("all");
  await loadFolders();
  await loadDocuments();
}

function openTeamSpaceDialog(space = null) {
  state.teamSpaceDialogMode = space ? "edit" : "create";
  state.teamSpaceDialogId = space?.id ?? null;
  $("#team-space-dialog-title").textContent = space ? "编辑团队空间" : "创建团队空间";
  $("#team-space-submit").textContent = space ? "保存修改" : "创建空间";
  $("#team-space-name").value = space?.name || "";
  $("#team-space-description").value = space?.description || "";
  $("#team-space-error").textContent = "";
  $("#team-space-dialog").showModal();
  $("#team-space-name").focus();
}

async function submitTeamSpaceForm(event) {
  event.preventDefault();
  const name = $("#team-space-name").value.trim();
  if (!name) {
    $("#team-space-error").textContent = "请输入团队空间名称";
    return;
  }
  try {
    const isEdit = state.teamSpaceDialogMode === "edit";
    const space = await api(
      isEdit ? `/team-spaces/${state.teamSpaceDialogId}` : "/team-spaces",
      {
        method: isEdit ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description: $("#team-space-description").value.trim() || null,
        }),
      },
    );
    $("#team-space-dialog").close();
    setMessage(isEdit ? "团队空间信息已保存" : "团队空间已创建");
    await loadTeamSpaces();
    if (!isEdit) {
      await openTeamKnowledgeBase(space.id);
    } else if (state.teamDetailId === space.id) {
      state.teamDetailSpace = space;
      renderTeamDetailHeader();
    }
  } catch (error) {
    $("#team-space-error").textContent = error.message;
  }
}

function handleTeamSpaceAction(event) {
  const button = event.target.closest("[data-team-action]");
  if (!button) return;
  const spaceId = Number(button.dataset.id);
  const space = state.teamSpaces.find((item) => item.id === spaceId);
  if (!space) return;
  if (button.dataset.teamAction === "edit") {
    if (space.is_owner || state.currentUserRole === "admin") {
      openTeamSpaceDialog(space);
    }
    return;
  }
  if (button.dataset.teamAction === "open") {
    openTeamKnowledgeBase(spaceId);
  }
}

function updateUploadAvailability() {
  const select = $("#knowledge-base-select");
  const uploadButton = $("#upload-button");
  const fileInput = $("#file-input");
  const label = $("#upload-button-label");
  if (!select || !uploadButton || !fileInput || !label) return;

  const knowledgeBase = getActiveKnowledgeBase();
  const canUpload = state.view === "team-detail"
    ? Boolean(state.teamDetailSpace?.can_upload)
    : Boolean(
      knowledgeBase
      && (
        knowledgeBase.owner_id === state.currentUserId
        || (
          knowledgeBase.visibility === "public"
          && knowledgeBase.upload_policy === "all_users"
        )
      ),
    );
  fileInput.disabled = !canUpload;
  uploadButton.classList.toggle("disabled", !canUpload);
  uploadButton.title = canUpload
    ? `上传到知识库：${knowledgeBase.name}`
    : knowledgeBase
      ? "当前知识库仅允许创建者上传"
      : "请选择具体知识库后上传";
  label.textContent = canUpload
    ? "上传文件"
    : knowledgeBase
      ? "无上传权限"
      : "请选择知识库";
  uploadButton.innerHTML = `<span aria-hidden="true">↑</span><span id="upload-button-label">${escapeHtml(label.textContent)}</span>`;
  uploadButton.appendChild(fileInput);
}

function getActiveKnowledgeBaseId() {
  if (state.view === "team-detail") {
    return state.teamDetailSpace?.knowledge_base_id ?? null;
  }
  const value = $("#knowledge-base-select")?.value;
  return value && value !== "all" ? Number(value) : value || null;
}

function getActiveKnowledgeBase() {
  const id = getActiveKnowledgeBaseId();
  if (state.view === "team-detail") {
    return state.teamDetailSpace
      ? {
        id: state.teamDetailSpace.knowledge_base_id,
        name: state.teamDetailSpace.name,
        owner_id: state.teamDetailSpace.owner_id,
        visibility: "public",
        upload_policy: "all_users",
      }
      : null;
  }
  return state.knowledgeBases.find((item) => String(item.id) === String(id)) || null;
}

async function loadFolders() {
  const knowledgeBaseId = getActiveKnowledgeBaseId();
  const teamSpaceId = state.view === "team-detail"
    ? state.teamDetailId
    : null;
  if (!knowledgeBaseId && !teamSpaceId) {
    state.folders = [];
    renderFileTypeTree();
    return;
  }
  try {
    const path = teamSpaceId
      ? `/folders?team_space_id=${teamSpaceId}`
      : knowledgeBaseId === "all"
      ? "/folders"
      : `/folders?knowledge_base_id=${knowledgeBaseId}`;
    state.folders = await api(path);
    if (state.currentFolderId && !state.folders.some((folder) => folder.id === state.currentFolderId)) {
      state.currentFolderId = null;
    }
    if (!state.folderTreeInitialized) {
      const parentIds = new Set(state.folders.map((folder) => folder.parent_id).filter(Boolean));
      parentIds.forEach((folderId) => state.expandedFolders.add(folderId));
      state.folderTreeInitialized = true;
    }
    renderFileTypeTree();
    renderBreadcrumb();
  } catch (error) {
    setMessage(error.message, true);
  }
}

async function loadDocuments() {
  const knowledgeBaseId = getActiveKnowledgeBaseId();
  if (!knowledgeBaseId) {
    state.documents = [];
    state.documentCatalog = [];
    renderFileTypeTree();
    renderTeamFileTypeMenu();
    renderDocuments();
    return;
  }
  const baseQuery = new URLSearchParams();
  if (knowledgeBaseId !== "all") baseQuery.set("knowledge_base_id", knowledgeBaseId);
  if (state.view !== "team-detail") baseQuery.set("exclude_team_spaces", "true");
  const listQuery = new URLSearchParams(baseQuery);
  const search = $("#search-input").value.trim();
  const teamTypeFilterActive = state.view === "team-detail"
    && !state.teamSelectedFileTypes.has("all");
  const knowledgeTypeFilterActive = state.view !== "team-detail"
    && state.selectedFileType !== "all";
  if (!search && !teamTypeFilterActive && !knowledgeTypeFilterActive) {
    if (state.currentFolderId !== null) {
      listQuery.set("folder_id", state.currentFolderId);
    } else {
      listQuery.set("root", "true");
    }
  }
  if (search) listQuery.set("q", search);
  try {
    const [catalog, documents] = await Promise.all([
      api(`/documents?${baseQuery.toString()}`),
      api(`/documents?${listQuery.toString()}`),
    ]);
    state.documentCatalog = catalog;
    state.documents = documents;
    renderFileTypeTree();
    renderTeamFileTypeMenu();
    renderDocuments();
  } catch (error) {
    setMessage(error.message, true);
  }
}

function renderFileTypeTree() {
  const tree = $("#file-type-tree");
  if (!tree) return;
  const typeCounts = new Map(FILE_TYPE_GROUPS.map((group) => [group.id, 0]));
  state.documentCatalog.forEach((document) => {
    const groupId = getFileTypeGroup(document.extension);
    typeCounts.set(groupId, (typeCounts.get(groupId) || 0) + 1);
  });
  tree.innerHTML = FILE_TYPE_GROUPS.map((group) => `
    <button class="file-type-item${state.selectedFileType === group.id ? " selected" : ""}" data-file-type="${group.id}" type="button">
      <span class="file-type-icon" aria-hidden="true">${group.icon}</span>
      <span class="file-type-name">${group.label}</span>
      <small>${typeCounts.get(group.id) || 0}</small>
    </button>
  `).join("");
}

function renderTeamFileTypeMenu() {
  const menu = $("#team-file-type-menu");
  if (!menu) return;
  const typeCounts = new Map(FILE_TYPE_GROUPS.map((group) => [group.id, 0]));
  state.documentCatalog.forEach((document) => {
    const groupId = getFileTypeGroup(document.extension);
    typeCounts.set(groupId, (typeCounts.get(groupId) || 0) + 1);
  });
  const selected = state.teamSelectedFileTypes;
  menu.innerHTML = `
    <label class="team-file-type-option">
      <input type="checkbox" data-team-file-type="all" ${selected.has("all") ? "checked" : ""}>
      <span>全部</span>
      <small>${state.documentCatalog.length}</small>
    </label>
    ${FILE_TYPE_GROUPS.map((group) => `
      <label class="team-file-type-option">
        <input type="checkbox" data-team-file-type="${group.id}" ${selected.has(group.id) ? "checked" : ""}>
        <span class="file-type-option-icon" aria-hidden="true">${group.icon}</span>
        <span>${group.label}</span>
        <small>${typeCounts.get(group.id) || 0}</small>
      </label>
    `).join("")}
  `;
}

function closeTeamFileTypeMenu() {
  const menu = $("#team-file-type-menu");
  const button = $("#team-file-type-button");
  if (!menu || !button) return;
  menu.classList.add("hidden");
  button.setAttribute("aria-expanded", "false");
}

function toggleTeamFileTypeMenu() {
  const menu = $("#team-file-type-menu");
  const button = $("#team-file-type-button");
  if (!menu || !button || state.view !== "team-detail") return;
  const isOpen = !menu.classList.contains("hidden");
  menu.classList.toggle("hidden", isOpen);
  button.setAttribute("aria-expanded", String(!isOpen));
}

async function toggleTeamFileType(type) {
  if (type !== "all" && !FILE_TYPE_GROUPS.some((group) => group.id === type)) return;
  const selected = new Set(state.teamSelectedFileTypes);
  if (type === "all") {
    selected.clear();
    selected.add("all");
  } else {
    selected.delete("all");
    if (selected.has(type)) selected.delete(type);
    else selected.add(type);
    if (!selected.size) selected.add("all");
  }
  state.teamSelectedFileTypes = selected;
  state.currentFolderId = null;
  renderBreadcrumb();
  renderTeamFileTypeMenu();
  await loadDocuments();
}

function selectFileType(type) {
  if (type !== "all" && !FILE_TYPE_GROUPS.some((group) => group.id === type)) return;
  state.selectedFileType = type;
  state.currentFolderId = null;
  $("#knowledge-all-files-button")?.classList.toggle("active", type === "all");
  renderFileTypeTree();
  renderBreadcrumb();
  loadDocuments();
}

function renderBreadcrumb() {
  const breadcrumbPath = $("#breadcrumb-path");
  if (!breadcrumbPath) return;
  const current = state.folders.find((folder) => folder.id === state.currentFolderId);
  const parts = [`<button class="breadcrumb-link" data-folder-id="" type="button">全部文件</button>`];
  const chain = [];
  let folder = current;
  while (folder) {
    chain.unshift(folder);
    folder = state.folders.find((item) => item.id === folder.parent_id);
  }
  chain.forEach((item) => {
    parts.push(`<span class="breadcrumb-separator">/</span>`);
    parts.push(`<button class="breadcrumb-link" data-folder-id="${item.id}" type="button">${escapeHtml(item.name)}</button>`);
  });
  breadcrumbPath.innerHTML = parts.join("");
}

function selectFolder(folderId) {
  state.currentFolderId = folderId ? Number(folderId) : null;
  renderBreadcrumb();
  loadDocuments();
}

function getFolderPath(folderId) {
  const parts = [];
  const visited = new Set();
  let folder = state.folders.find((item) => item.id === folderId);
  while (folder && !visited.has(folder.id)) {
    visited.add(folder.id);
    parts.unshift(folder.name);
    folder = state.folders.find((item) => item.id === folder.parent_id);
  }
  return parts.join(" / ");
}

function isDescendantFolder(folderId, ancestorId) {
  let folder = state.folders.find((item) => item.id === folderId);
  const visited = new Set();
  while (folder && folder.parent_id !== null && !visited.has(folder.id)) {
    if (folder.parent_id === ancestorId) return true;
    visited.add(folder.id);
    folder = state.folders.find((item) => item.id === folder.parent_id);
  }
  return false;
}

function renderMoveDestinations(type, target) {
  const knowledgeBaseId = target.knowledge_base_id;
  const excludedFolderId = type === "folder" ? target.id : null;
  const destinations = state.folders
    .filter((folder) => state.view !== "team-detail"
      ? folder.team_space_id == null && folder.knowledge_base_id === knowledgeBaseId
      : folder.team_space_id === state.teamDetailId)
    .filter((folder) => folder.id !== excludedFolderId)
    .filter((folder) => !excludedFolderId || !isDescendantFolder(folder.id, excludedFolderId));
  const options = ['<option value="">根目录（全部文件）</option>'];
  destinations.forEach((folder) => {
    options.push(`<option value="${folder.id}">${escapeHtml(getFolderPath(folder.id))}</option>`);
  });
  $("#move-destination").innerHTML = options.join("");
  const currentFolderId = type === "folder" ? target.parent_id : target.folder_id;
  $("#move-destination").value = currentFolderId === null ? "" : String(currentFolderId);
}

function getCopyTargetOptions(type) {
  if (type === "team") {
    return state.teamSpaces.map((space) => ({
      id: space.id,
      name: space.name,
    }));
  }
  return state.knowledgeBases
    .filter((knowledgeBase) => !knowledgeBase.is_team_space)
    .map((knowledgeBase) => ({
      id: knowledgeBase.id,
      name: knowledgeBase.name,
    }));
}

function getFolderPathFromList(folderId, folders) {
  const parts = [];
  const visited = new Set();
  let folder = folders.find((item) => item.id === folderId);
  while (folder && !visited.has(folder.id)) {
    visited.add(folder.id);
    parts.unshift(folder.name);
    folder = folders.find((item) => item.id === folder.parent_id);
  }
  return parts.join(" / ");
}

async function loadCopyDestinationFolders() {
  const targetSelect = $("#copy-target-select");
  const folderSelect = $("#copy-folder-select");
  const targetType = $("#copy-target-type").value;
  const targetId = Number(targetSelect.value);
  if (!targetId) {
    state.copyTargetFolders = [];
    folderSelect.innerHTML = '<option value="">根目录（全部文件）</option>';
    folderSelect.disabled = true;
    return;
  }
  try {
    const path = targetType === "team"
      ? `/folders?team_space_id=${targetId}`
      : `/folders?knowledge_base_id=${targetId}`;
    state.copyTargetFolders = await api(path);
    const options = ['<option value="">根目录（全部文件）</option>'];
    state.copyTargetFolders
      .sort((left, right) =>
        getFolderPathFromList(left.id, state.copyTargetFolders)
          .localeCompare(getFolderPathFromList(right.id, state.copyTargetFolders)),
      )
      .forEach((folder) => {
        options.push(
          `<option value="${folder.id}">${escapeHtml(getFolderPathFromList(folder.id, state.copyTargetFolders))}</option>`,
        );
      });
    folderSelect.innerHTML = options.join("");
    folderSelect.disabled = false;
  } catch (error) {
    $("#copy-error").textContent = error.message;
  }
}

async function renderCopyTargets() {
  const type = $("#copy-target-type").value;
  const options = getCopyTargetOptions(type);
  const targetSelect = $("#copy-target-select");
  $("#copy-target-label-text").textContent =
    type === "team" ? "目标团队空间" : "目标个人知识库";
  targetSelect.innerHTML = options.length
    ? options.map((item) => `<option value="${item.id}">${escapeHtml(item.name)}</option>`).join("")
    : '<option value="">暂无可用目标</option>';
  targetSelect.disabled = options.length === 0;
  state.copyTargetId = options[0]?.id ?? null;
  await loadCopyDestinationFolders();
}

async function openCopyDialog(type, id) {
  const source = (type === "folder" ? state.folders : state.documents)
    .find((item) => String(item.id) === String(id));
  if (!source) return;
  try {
    state.teamSpaces = await api("/team-spaces");
  } catch (error) {
    setMessage(error.message, true);
    return;
  }
  state.copySourceType = type;
  state.copySourceId = Number(id);
  const sourceIsTeam = type === "folder"
    ? source.team_space_id != null
    : state.view === "team-detail";
  const preferredType = sourceIsTeam ? "personal" : "team";
  const availableTypes = ["team", "personal"].filter(
    (targetType) => getCopyTargetOptions(targetType).length > 0,
  );
  state.copyTargetType = availableTypes.includes(preferredType)
    ? preferredType
    : availableTypes[0] || preferredType;
  $("#copy-target-type").value = state.copyTargetType;
  $("#copy-dialog-title").textContent = type === "folder" ? "复制文件夹" : "复制文档";
  $("#copy-error").textContent = "";
  $("#copy-dialog").showModal();
  await renderCopyTargets();
}

async function submitCopy(event) {
  event.preventDefault();
  if (!state.copySourceType || !state.copySourceId) return;
  const targetType = $("#copy-target-type").value;
  const targetId = Number($("#copy-target-select").value);
  if (!targetId) {
    $("#copy-error").textContent = "请选择复制目标";
    return;
  }
  const folderValue = $("#copy-folder-select").value;
  const payload = {
    ...(targetType === "team"
      ? { team_space_id: targetId }
      : { knowledge_base_id: targetId }),
    folder_id: folderValue ? Number(folderValue) : null,
  };
  const endpoint = state.copySourceType === "folder"
    ? `/folders/${state.copySourceId}/copy`
    : `/documents/${state.copySourceId}/copy`;
  try {
    const result = await api(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    $("#copy-dialog").close();
    setMessage(
      result.kind === "folder"
        ? `文件夹已复制，包含 ${result.copied_documents} 个文档`
        : "文档已复制",
    );
    await loadFolders();
    await loadDocuments();
    await loadTeamSpaces();
  } catch (error) {
    $("#copy-error").textContent = error.message;
  }
}

function openMoveDialog(type, id) {
  const target = (type === "folder" ? state.folders : state.documents)
    .find((item) => item.id === id);
  if (!target || !target.is_owner) return;
  state.moveTargetType = type;
  state.moveTargetId = id;
  $("#move-dialog-title").textContent = type === "folder" ? "移动文件夹" : "移动文件";
  $("#move-error").textContent = "";
  renderMoveDestinations(type, target);
  $("#move-dialog").showModal();
  $("#move-destination").focus();
}

async function submitMove(event) {
  event.preventDefault();
  if (!state.moveTargetType || !state.moveTargetId) return;
  const destination = $("#move-destination").value;
  const folderId = destination ? Number(destination) : null;
  const endpoint = state.moveTargetType === "folder"
    ? `/folders/${state.moveTargetId}`
    : `/documents/${state.moveTargetId}`;
  const body = state.moveTargetType === "folder"
    ? { parent_id: folderId }
    : { folder_id: folderId };
  try {
    await api(endpoint, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (folderId !== null) state.expandedFolders.add(folderId);
    $("#move-dialog").close();
    setMessage(state.moveTargetType === "folder" ? "文件夹已移动" : "文件已移动");
    await loadFolders();
    await loadDocuments();
  } catch (error) {
    $("#move-error").textContent = error.message;
  }
}

function openDocumentRenameDialog(documentId) {
  const documentInfo = state.documents.find(
    (item) => String(item.id) === String(documentId),
  );
  if (!documentInfo || !documentInfo.is_owner) return;
  state.renameDocumentId = Number(documentId);
  $("#document-rename-name").value =
    documentInfo.name || documentInfo.original_filename || "";
  $("#document-rename-error").textContent = "";
  $("#document-rename-dialog").showModal();
  $("#document-rename-name").focus();
  $("#document-rename-name").select();
}

async function submitDocumentRename(event) {
  event.preventDefault();
  if (!state.renameDocumentId) return;
  const name = $("#document-rename-name").value.trim();
  if (!name) {
    $("#document-rename-error").textContent = "请输入文档名称";
    return;
  }
  try {
    await api(`/documents/${state.renameDocumentId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    $("#document-rename-dialog").close();
    setMessage("文档名称已更新");
    await loadDocuments();
  } catch (error) {
    $("#document-rename-error").textContent = error.message;
  }
}

async function deleteFolder(folderId) {
  const folder = state.folders.find((item) => item.id === folderId);
  if (!folder || !folder.is_owner) return;
  if (!window.confirm(`确定删除文件夹“${folder.name}”吗？只能删除空文件夹。`)) return;
  try {
    await api(`/folders/${folderId}`, { method: "DELETE" });
    if (state.currentFolderId === folderId) state.currentFolderId = null;
    state.expandedFolders.delete(folderId);
    setMessage("文件夹已删除");
    await loadFolders();
    await loadDocuments();
  } catch (error) {
    setMessage(error.message, true);
  }
}

function openFolderDialog(mode, folderId = null) {
  state.folderDialogMode = mode;
  state.folderDialogFolderId = folderId;
  $("#folder-name").value = "";
  $("#folder-error").textContent = "";
  $("#folder-dialog-title").textContent = mode === "rename" ? "重命名文件夹" : "新建文件夹";
  $("#folder-submit").textContent = mode === "rename" ? "保存" : "创建";

  if (mode === "rename") {
    const folder = state.folders.find((item) => item.id === folderId);
    if (!folder || !folder.is_owner) return;
    $("#folder-name").value = folder.name;
    $("#folder-kb-field").classList.add("hidden");
    $("#folder-dialog").showModal();
    $("#folder-name").focus();
    return;
  }

  const parentFolder = state.folders.find((folder) => folder.id === state.currentFolderId);
  const parentKnowledgeBase = parentFolder ? getActiveKnowledgeBase() : null;
  if (parentKnowledgeBase && state.view !== "team-detail" && parentKnowledgeBase.owner_id !== state.currentUserId) {
    setMessage("只能在自己的知识库下新建文件夹", true);
    return;
  }
  const folderKnowledgeBaseSelect = $("#folder-kb-select");
  const ownedKnowledgeBases = state.knowledgeBases.filter(
    (item) => item.owner_id === state.currentUserId,
  );
  folderKnowledgeBaseSelect.innerHTML = ownedKnowledgeBases
    .map((item) => `<option value="${item.id}">${escapeHtml(item.name)}</option>`)
    .join("");
  if (parentFolder) {
    folderKnowledgeBaseSelect.value = String(parentFolder.knowledge_base_id);
  } else if ($("#knowledge-base-select").value !== "all") {
    folderKnowledgeBaseSelect.value = $("#knowledge-base-select").value;
  }
  if (state.view === "team-detail") {
    folderKnowledgeBaseSelect.innerHTML = `<option value="">${escapeHtml(state.teamDetailSpace.name)}</option>`;
    folderKnowledgeBaseSelect.value = "";
  }
  $("#folder-kb-field").classList.toggle(
    "hidden",
    state.view === "team-detail" || Boolean(parentFolder) || $("#knowledge-base-select").value !== "all",
  );
  $("#folder-dialog").showModal();
  $("#folder-name").focus();
}

function openNewFolderDialog() {
  openFolderDialog("create");
}

async function submitFolderForm(event) {
  event.preventDefault();
  const name = $("#folder-name").value.trim();
  if (!name) {
    $("#folder-error").textContent = "请输入文件夹名称";
    return;
  }
  try {
    if (state.folderDialogMode === "rename") {
      await api(`/folders/${state.folderDialogFolderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      $("#folder-dialog").close();
      setMessage("文件夹已重命名");
      await loadFolders();
      await loadDocuments();
      return;
    }

    const parentFolder = state.folders.find((folder) => folder.id === state.currentFolderId);
    const teamSpaceId = state.view === "team-detail" ? state.teamDetailId : null;
    const selectedKnowledgeBaseValue = $("#knowledge-base-select").value;
    const selectedKnowledgeBaseId = selectedKnowledgeBaseValue && selectedKnowledgeBaseValue !== "all"
      ? Number(selectedKnowledgeBaseValue)
      : null;
    const knowledgeBaseId = parentFolder?.knowledge_base_id
      || (state.view === "team-detail" ? null : selectedKnowledgeBaseId)
      || Number($("#folder-kb-select").value)
      || null;
    if (!teamSpaceId && !knowledgeBaseId) {
      $("#folder-error").textContent = "请选择所属知识库";
      return;
    }
    const knowledgeBase = state.knowledgeBases.find(
      (item) => String(item.id) === String(knowledgeBaseId),
    ) || null;
    const canCreate = state.view === "team-detail"
      ? Boolean(state.teamDetailSpace?.can_upload)
      : Boolean(knowledgeBase && knowledgeBase.owner_id === state.currentUserId);
    if ((!teamSpaceId && !knowledgeBase) || !canCreate) {
      $("#folder-error").textContent = teamSpaceId
        ? "当前没有在本空间新建文件夹的权限"
        : "只能在自己的知识库下新建文件夹";
      return;
    }
    await api("/folders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...(teamSpaceId ? { team_space_id: teamSpaceId } : { knowledge_base_id: knowledgeBaseId }),
        name,
        parent_id: state.currentFolderId,
      }),
    });
    $("#folder-dialog").close();
    setMessage("文件夹已创建");
    await loadFolders();
    await loadDocuments();
  } catch (error) {
    $("#folder-error").textContent = error.message;
  }
}

function formatSize(size) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function documentTypeIcon(extension) {
  const normalized = String(extension || "").replace(".", "").toLowerCase();
  const labels = {
    pdf: "PDF",
    doc: "DOC",
    docx: "DOC",
    ppt: "PPT",
    pptx: "PPT",
    xls: "XLS",
    xlsx: "XLS",
    md: "MD",
    markdown: "MD",
    html: "HTML",
    htm: "HTML",
    txt: "TXT",
    png: "IMG",
    jpg: "IMG",
    jpeg: "IMG",
    gif: "IMG",
    webp: "IMG",
  };
  const label = labels[normalized] || normalized.slice(0, 4).toUpperCase() || "FILE";
  const className = normalized ? ` document-type-${normalized}` : "";
  return `<span class="document-type-icon${className}" aria-hidden="true">${escapeHtml(label)}</span>`;
}

function folderListIcon() {
  return '<span class="folder-list-icon" aria-hidden="true">📁</span>';
}

function rowActionButton(action, id, inMenu = false) {
  const className = inMenu ? "row-action row-menu-action" : "row-action";
  const label = escapeHtml(action.title);
  return `<button class="${className}${action.className ? ` ${action.className}` : ""}" data-action="${action.action}" data-id="${id}" type="button" title="${label}" aria-label="${label}">
    <span aria-hidden="true">${action.icon}</span>${inMenu ? `<span>${label}</span>` : ""}
  </button>`;
}

function renderRowActions(actions, id) {
  const visibleActions = actions.slice(0, 4);
  const overflowActions = actions.slice(4);
  return `<div class="row-actions">
    ${visibleActions.map((action) => rowActionButton(action, id)).join("")}
    ${overflowActions.length
      ? `<div class="row-more-wrap">
          <button class="row-action row-more-button" type="button" title="更多操作" aria-label="更多操作" aria-haspopup="true">
            <span aria-hidden="true">…</span>
          </button>
          <div class="row-more-menu">${overflowActions.map((action) => rowActionButton(action, id, true)).join("")}</div>
        </div>`
      : ""}
  </div>`;
}

function renderDocuments() {
  const table = $("#document-table");
  const sidebarCount = $("#sidebar-document-count");
  if (sidebarCount) sidebarCount.textContent = state.documentCatalog.length;
  const search = $("#search-input").value.trim().toLowerCase();
  const teamTypeFilterActive = state.view === "team-detail"
    && !state.teamSelectedFileTypes.has("all");
  const knowledgeTypeFilterActive = state.view !== "team-detail"
    && state.selectedFileType !== "all";
  const showFolders = !teamTypeFilterActive && !knowledgeTypeFilterActive;
  const folders = showFolders
    ? state.folders
      .filter((folder) => search
        ? folder.name.toLowerCase().includes(search)
        : folder.parent_id === state.currentFolderId)
      .sort((left, right) => {
        const leftTime = new Date(left.updated_at || left.created_at || 0).getTime();
        const rightTime = new Date(right.updated_at || right.created_at || 0).getTime();
        return rightTime - leftTime || left.name.localeCompare(right.name);
      })
    : [];
  let documents = state.documents;
  if (knowledgeTypeFilterActive) {
    documents = documents.filter(
      (document) => getFileTypeGroup(document.extension) === state.selectedFileType,
    );
  }
  if (teamTypeFilterActive) {
    documents = documents.filter((document) =>
      state.teamSelectedFileTypes.has(getFileTypeGroup(document.extension)),
    );
  }
  $("#empty-state").classList.toggle(
    "hidden",
    documents.length > 0 || folders.length > 0,
  );
  const folderRows = folders.map((folder) => {
    const actions = [
      { action: "copy-folder", icon: "⧉", title: "复制" },
    ];
    if (folder.is_owner) {
      actions.push(
        { action: "rename-folder", icon: "✎", title: "重命名" },
        { action: "move-folder", icon: "↗", title: "移动" },
        { action: "delete-folder", icon: "×", title: "删除", className: "danger-action" },
      );
    }
    return `<tr class="folder-list-row">
      <td>
        <div class="document-name-cell">
          ${folderListIcon()}
          <button class="document-name-link" data-action="open-folder" data-id="${folder.id}" type="button" title="打开文件夹" aria-label="打开文件夹 ${escapeHtml(folder.name)}">
            <span class="document-name-content">
              <strong>${escapeHtml(folder.name)}</strong>
            </span>
          </button>
          ${renderRowActions(actions, folder.id)}
        </div>
      </td>
      <td>文件夹</td>
      <td>-</td>
      <td>${escapeHtml(folder.owner_username || "未知用户")}</td>
      <td>${formatDate(folder.updated_at || folder.created_at)}</td>
    </tr>`;
  });
  const documentRows = documents.map((document) => {
    const displayName = document.name || document.original_filename || "未命名文件";
    const actions = [{ action: "download", icon: "↓", title: "下载" }];
    if (document.is_owner) {
      actions.push({ action: "rename-document", icon: "✎", title: "重命名" });
      actions.push({ action: "move", icon: "↗", title: "移动" });
      actions.push({ action: "delete", icon: "×", title: "删除", className: "danger-action" });
    }
    actions.push({ action: "copy", icon: "⧉", title: "复制" });
    return `<tr>
      <td>
        <div class="document-name-cell">
          ${documentTypeIcon(document.extension)}
          <button class="document-name-link" data-action="preview" data-id="${document.id}" type="button" title="打开预览" aria-label="预览 ${escapeHtml(displayName)}">
            <span class="document-name-content">
              <strong>${escapeHtml(displayName)}</strong>
            </span>
          </button>
          ${renderRowActions(actions, document.id)}
        </div>
      </td>
      <td>${escapeHtml(document.extension)}</td>
      <td>${formatSize(document.size_bytes)}</td>
      <td>${escapeHtml(document.uploader_username || "未知用户")}</td>
      <td>${new Date(document.created_at).toLocaleString()}</td>
    </tr>`;
  });
  table.innerHTML = [...folderRows, ...documentRows].join("");
}

function setUploadProgress(visible, { title = "", percent = 0, file = "", count = "" } = {}) {
  const panel = $("#upload-progress");
  panel.classList.toggle("hidden", !visible);
  if (!visible) return;
  const safePercent = Math.max(0, Math.min(100, Math.round(percent)));
  $("#upload-progress-title").textContent = title;
  $("#upload-progress-percent").textContent = `${safePercent}%`;
  $("#upload-progress-bar").style.width = `${safePercent}%`;
  $("#upload-progress-file").textContent = file;
  $("#upload-progress-count").textContent = count;
}

function uploadSingleFile(file, fields, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    state.uploadXhr = xhr;
    xhr.open("POST", "/api/v1/documents/upload");
    if (state.token) xhr.setRequestHeader("Authorization", `Bearer ${state.token}`);
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) onProgress(event.loaded, event.total);
    });
    xhr.addEventListener("load", () => {
      const contentType = xhr.getResponseHeader("content-type") || "";
      let body = xhr.responseText;
      if (contentType.includes("application/json")) {
        try {
          body = JSON.parse(xhr.responseText);
        } catch {
          body = {};
        }
      }
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(body);
      } else {
        reject(new Error(body?.detail || body || "上传失败"));
      }
    });
    xhr.addEventListener("error", () => reject(new Error("网络错误，上传失败")));
    xhr.addEventListener("abort", () => reject(new Error("上传已取消")));
    const form = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") form.append(key, value);
    });
    form.append("file", file);
    xhr.send(form);
  });
}

async function uploadFiles(event) {
  const files = [...event.target.files];
  event.target.value = "";
  const currentFolder = state.folders.find((folder) => folder.id === state.currentFolderId);
  const knowledgeBaseId = currentFolder?.knowledge_base_id || getActiveKnowledgeBaseId();
  const knowledgeBase = currentFolder
    ? state.knowledgeBases.find(
      (item) => String(item.id) === String(currentFolder.knowledge_base_id),
    ) || (state.view === "team-detail" ? getActiveKnowledgeBase() : null)
    : getActiveKnowledgeBase();
  if (!files.length) return;
  const canUpload = state.view === "team-detail"
    ? Boolean(state.teamDetailSpace?.can_upload)
    : Boolean(
      knowledgeBase
      && (
        knowledgeBase.owner_id === state.currentUserId
        || (
          knowledgeBase.visibility === "public"
          && knowledgeBase.upload_policy === "all_users"
        )
      ),
    );
  if (!knowledgeBaseId || !knowledgeBase || !canUpload) {
    setMessage("当前知识库不允许你上传文件，请先选择可上传的具体知识库", true);
    updateUploadAvailability();
    return;
  }
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0) || 1;
  let completedBytes = 0;
  let completedCount = 0;
  let failedCount = 0;
  state.uploadCancelled = false;
  setUploadProgress(true, {
    title: `正在上传 ${files.length} 个文件`,
    file: files[0].name,
    count: `已完成 0 / ${files.length}`,
  });
  for (const file of files) {
    if (state.uploadCancelled) break;
    try {
      await uploadSingleFile(
        file,
        {
          knowledge_base_id: knowledgeBaseId,
          folder_id: currentFolder?.id,
        },
        (loaded) => {
          const percent = ((completedBytes + loaded) / totalBytes) * 100;
          setUploadProgress(true, {
            title: `正在上传 ${files.length} 个文件`,
            percent,
            file: file.name,
            count: `已完成 ${completedCount} / ${files.length}`,
          });
        },
      );
      completedBytes += file.size;
      completedCount += 1;
    } catch (error) {
      failedCount += 1;
      if (error.message === "上传已取消") break;
      setMessage(`${file.name}：${error.message}`, true);
    }
  }
  state.uploadXhr = null;
  if (state.uploadCancelled) {
    setUploadProgress(false);
    setMessage(`已取消上传，已完成 ${completedCount} 个文件`, true);
  } else {
    setUploadProgress(true, {
      title: failedCount ? "上传完成，但有文件失败" : "上传完成",
      percent: completedCount === files.length ? 100 : (completedBytes / totalBytes) * 100,
      file: failedCount ? `${failedCount} 个文件失败` : "全部文件已上传",
      count: `已完成 ${completedCount} / ${files.length}`,
    });
    setMessage(
      failedCount
        ? `已上传 ${completedCount} 个文件，${failedCount} 个失败`
        : `已上传 ${completedCount} 个文件`,
      failedCount > 0,
    );
    await loadFolders();
    await loadDocuments();
    window.setTimeout(() => setUploadProgress(false), 1800);
  }
}

async function handleDocumentAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const id = button.dataset.id;
  const action = button.dataset.action;
  try {
    if (action === "open-folder") {
      selectFolder(Number(id));
      return;
    }
    if (action === "rename-folder") {
      openFolderDialog("rename", Number(id));
      return;
    }
    if (action === "move-folder") {
      openMoveDialog("folder", Number(id));
      return;
    }
    if (action === "copy-folder") {
      await openCopyDialog("folder", Number(id));
      return;
    }
    if (action === "delete-folder") {
      await deleteFolder(Number(id));
      return;
    }
    if (action === "preview") await openDocumentFile(id, false);
    if (action === "download") await openDocumentFile(id, true);
    if (action === "move") openMoveDialog("document", Number(id));
    if (action === "rename-document") {
      openDocumentRenameDialog(Number(id));
      return;
    }
    if (action === "copy") await openCopyDialog("document", Number(id));
    if (action === "tags") {
      const currentDocument = state.documents.find((item) => String(item.id) === String(id));
      const currentTags = currentDocument?.tags?.join(", ") || "";
      const tags = window.prompt("标签名称（多个标签用逗号分隔）", currentTags);
      if (tags === null) return;
      await api(`/documents/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tags: tags ? tags.split(",") : [] }),
      });
      setMessage("标签已更新");
      await loadDocuments();
    }
    if (action === "delete") {
      if (!window.confirm("确定删除这个文档吗？")) return;
      await api(`/documents/${id}`, { method: "DELETE" });
      setMessage("文档已移入回收站");
      await loadDocuments();
    }
  } catch (error) {
    setMessage(error.message, true);
  }
}

async function openDocumentFile(id, download) {
  if (!download) {
    await openReader(id);
    return;
  }
  const response = await fetch(`/api/v1/documents/${id}/${download ? "download" : "preview"}`, {
    headers: { Authorization: `Bearer ${state.token}` },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.detail || "文件操作失败");
  }
  const documentInfo = state.documents.find((item) => String(item.id) === String(id));
  const buffer = await response.arrayBuffer();
  if (download) {
    const blobUrl = URL.createObjectURL(new Blob([buffer], { type: response.headers.get("content-type") || "application/octet-stream" }));
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = documentInfo?.original_filename || "download";
    link.click();
    URL.revokeObjectURL(blobUrl);
  }
}

function renderReaderTable(rows) {
  return `<div class="reader-table-scroll"><table class="reader-table"><tbody>${rows.map((row, rowIndex) => `
    <tr>${row.map((cell) => `<${rowIndex === 0 ? "th" : "td"}>${escapeHtml(cell)}</${rowIndex === 0 ? "th" : "td"}>`).join("")}</tr>
  `).join("")}</tbody></table></div>`;
}

function renderReaderBlock(block) {
  if (block.type === "table") return renderReaderTable(block.rows || []);
  if (block.type === "paragraph") return `<p class="reader-paragraph">${escapeHtml(block.content)}</p>`;
  return `<pre class="reader-text">${escapeHtml(block.content || "")}</pre>`;
}

function pptxNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function pptxPercent(value) {
  return `${Math.max(0, Math.min(100, pptxNumber(value) * 100))}%`;
}

function pptxColor(value, fallback = "transparent") {
  return /^#[0-9a-f]{6}$/i.test(String(value || "")) ? value : fallback;
}

function pptxFontName(value) {
  const name = String(value || "").replace(/["'\\;{}]/g, "").trim().slice(0, 120);
  return name ? `"${name}"` : "";
}

function pptxShapeStyle(shape) {
  const style = shape.style || {};
  const rules = [
    `left:${pptxPercent(shape.left)}`,
    `top:${pptxPercent(shape.top)}`,
    `width:${pptxPercent(shape.width)}`,
    `height:${pptxPercent(shape.height)}`,
  ];
  const rotation = pptxNumber(style.rotation);
  if (rotation) rules.push(`transform:rotate(${rotation}deg)`, "transform-origin:center center");
  if (shape.geometry === "oval") rules.push("border-radius:50%");
  if (shape.geometry === "rounded") rules.push("border-radius:8%");
  if (style.fill) rules.push(`background-color:${pptxColor(style.fill)}`);
  if (style.line) {
    const lineWidth = Math.max(0.5, Math.min(20, pptxNumber(style.line_width, 1)));
    rules.push(`border:${lineWidth}px solid ${pptxColor(style.line)}`);
  }
  return rules.join(";");
}

function renderPptxRun(run) {
  const style = run.style || {};
  const rules = [];
  const fontName = pptxFontName(style.font_name);
  if (fontName) rules.push(`font-family:${fontName}`);
  if (style.bold) rules.push("font-weight:700");
  if (style.italic) rules.push("font-style:italic");
  if (style.underline) rules.push("text-decoration:underline");
  if (style.color) rules.push(`color:${pptxColor(style.color, "inherit")}`);
  const fontSize = pptxNumber(style.font_size);
  const attributes = fontSize ? ` data-font-size="${fontSize}"` : "";
  if (fontSize) rules.push(`font-size:${fontSize}px`);
  return `<span class="pptx-run"${attributes}${rules.length ? ` style="${rules.join(";")}"` : ""}>${escapeHtml(run.text || "")}</span>`;
}

function renderPptxText(shape) {
  const textStyle = shape.text_style || {};
  const paragraphs = (shape.paragraphs || []).map((paragraph) => {
    const paragraphStyle = paragraph.style || {};
    const alignment = ["left", "center", "right", "justify"].includes(paragraph.alignment)
      ? ` text-align:${paragraph.alignment};`
      : "";
    const indent = Math.max(0, Math.min(9, pptxNumber(paragraph.level))) * 2;
    const attributes = [
      `data-space-before="${pptxNumber(paragraphStyle.space_before)}"`,
      `data-space-after="${pptxNumber(paragraphStyle.space_after)}"`,
      `data-line-spacing-pt="${pptxNumber(paragraphStyle.line_spacing_pt)}"`,
      `data-line-spacing-multiple="${pptxNumber(paragraphStyle.line_spacing_multiple)}"`,
    ].join(" ");
    return `<div class="pptx-paragraph" ${attributes} style="${alignment}padding-left:${indent}em">${(paragraph.runs || []).map(renderPptxRun).join("")}</div>`;
  }).join("");
  const attributes = [
    `data-margin-left="${pptxNumber(textStyle.margin_left)}"`,
    `data-margin-right="${pptxNumber(textStyle.margin_right)}"`,
    `data-margin-top="${pptxNumber(textStyle.margin_top)}"`,
    `data-margin-bottom="${pptxNumber(textStyle.margin_bottom)}"`,
  ].join(" ");
  const rules = [];
  if (textStyle.vertical_alignment) {
    if (textStyle.vertical_alignment.includes("middle")) rules.push("justify-content:center");
    if (textStyle.vertical_alignment.includes("bottom")) rules.push("justify-content:flex-end");
  }
  if (textStyle.word_wrap === false) rules.push("white-space:nowrap");
  return `<div class="pptx-shape pptx-text" ${attributes} style="${pptxShapeStyle(shape)};${rules.join(";")}">${paragraphs}</div>`;
}

function renderPptxTable(shape) {
  const rows = (shape.rows || []).map((row, rowIndex) => `
    <tr>${(row || []).map((cell) => `<${rowIndex === 0 ? "th" : "td"}>${escapeHtml(cell)}</${rowIndex === 0 ? "th" : "td"}>`).join("")}</tr>
  `).join("");
  return `<div class="pptx-shape pptx-table" style="${pptxShapeStyle(shape)}"><table><tbody>${rows}</tbody></table></div>`;
}

function renderPptxShape(shape) {
  if (shape.type === "text") return renderPptxText(shape);
  if (shape.type === "table") return renderPptxTable(shape);
  if (shape.type === "image") {
    return `<img class="pptx-shape pptx-image" src="${escapeHtml(shape.data_uri || "")}" alt="" style="${pptxShapeStyle(shape)}">`;
  }
  const className = shape.geometry === "line" ? "pptx-shape pptx-line" : "pptx-shape";
  return `<div class="${className}" style="${pptxShapeStyle(shape)}"></div>`;
}

function renderPptxSlide(page) {
  const width = Math.max(1, pptxNumber(page.width, 1));
  const height = Math.max(1, pptxNumber(page.height, 1));
  const background = page.background ? `;background-color:${pptxColor(page.background, "#ffffff")}` : "";
  return `
    <div class="reader-slide-wrap" data-slide-width="${width}" data-slide-height="${height}">
      <article class="reader-slide" style="--slide-ratio:${width} / ${height}${background}">
        ${(page.shapes || []).map(renderPptxShape).join("")}
      </article>
      ${page.number ? `<div class="reader-page-number">第 ${page.number} 页</div>` : ""}
    </div>
  `;
}

function renderReader(data) {
  const documentInfo = data.document || {};
  const pages = data.pages || [];
  state.readerKind = data.kind || "text";
  setReaderZoomControls(true);
  $("#reader-title").textContent = documentInfo.name || "文档阅读";
  $("#reader-meta").textContent = `${documentInfo.extension || ""} · ${pages.length || 1} 页`;
  $("#reader-body").className = `reader-body reader-kind-${data.kind || "text"}`;
  if (data.kind === "image") {
    $("#reader-body").innerHTML = `<div class="reader-image-stage"><img src="${data.data_uri}" alt="${escapeHtml(documentInfo.name || "文档图片")}"></div>`;
  } else if (data.kind === "pptx") {
    $("#reader-body").innerHTML = `<div class="reader-pptx-stage">${pages.map(renderPptxSlide).join("")}</div>`;
  } else {
    $("#reader-body").innerHTML = pages.map((page) => `
      <article class="reader-page">
        ${page.title ? `<h2 class="reader-page-title">${escapeHtml(page.title)}</h2>` : ""}
        <div class="reader-page-content">
          ${(page.blocks || []).map(renderReaderBlock).join("") || '<p class="reader-empty-page">本页没有可提取的文字内容</p>'}
        </div>
        ${pages.length > 1 ? `<div class="reader-page-number">第 ${page.number} 页</div>` : ""}
      </article>
    `).join("");
  }
  applyReaderZoom();
}

const VUE_PREVIEW_EXTENSIONS = new Set([".pdf", ".docx", ".pptx", ".xlsx", ".xls"]);
const MARKDOWN_EXTENSIONS = new Set([".md", ".markdown"]);
const HTML_EXTENSIONS = new Set([".html", ".htm"]);

function setReaderZoomControls(visible) {
  ["#reader-zoom-out", "#reader-zoom-label", "#reader-zoom-in"].forEach((selector) => {
    $(selector).classList.toggle("hidden", !visible);
  });
}

async function openVuePreview(id, documentInfo, kind) {
  const response = await fetch(`/api/v1/documents/${id}/preview`, {
    headers: { Authorization: `Bearer ${state.token}` },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.detail || "文档预览失败");
  }
  const filename = documentInfo?.original_filename || documentInfo?.name || "document";
  const previewModule = await loadPreviewModule();
  const body = $("#reader-body");
  const mountPoint = document.createElement("div");
  mountPoint.className = "kb-preview-host";
  body.replaceChildren(mountPoint);
  state.readerPreview = previewModule;
  state.readerKind = "vue-preview";
  setReaderZoomControls(false);
  $("#reader-title").textContent = documentInfo?.name || "文档阅读";
  $("#reader-meta").textContent = `${documentInfo?.extension || ""} · 组件预览`;
  body.className = `reader-body reader-kind-vue-preview reader-kind-${kind}`;

  const config = {
    kind,
    filename,
    onRendered: () => {
      if (kind === "docx") normalizeDocxTables(mountPoint);
      setMessage("");
    },
    onError: (error) => setMessage(error?.message || "文档预览失败", true),
  };
  if (kind === "markdown") {
    config.value = await response.text();
  } else {
    config.src = await response.blob();
    if (kind === "xlsx") config.xls = documentInfo?.extension === ".xls";
  }
  await previewModule.mountPreview(mountPoint, config);
}

async function openHtmlPreview(id, documentInfo) {
  const response = await fetch(`/api/v1/documents/${id}/preview`, {
    headers: { Authorization: `Bearer ${state.token}` },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.detail || "HTML 预览失败");
  }
  const source = await response.text();
  const parsed = new DOMParser().parseFromString(source, "text/html");
  const previewKind = detectHtmlPreviewKind(parsed);
  prepareHtmlPreviewDocument(parsed, previewKind);
  const iframe = document.createElement("iframe");
  iframe.className = "html-reader-frame";
  iframe.title = documentInfo?.name || "HTML 文档预览";
  iframe.setAttribute(
    "sandbox",
    "allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-scripts",
  );
  iframe.setAttribute("allow", "fullscreen; picture-in-picture");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("scrolling", "auto");
  iframe.srcdoc = `<!doctype html>${parsed.documentElement.outerHTML}`;
  const body = $("#reader-body");
  body.replaceChildren(iframe);
  state.readerHtmlFrame = iframe;
  state.readerHtmlKind = previewKind;
  state.readerHtmlSlides = [];
  state.readerHtmlPage = 0;
  state.readerHtmlParsed = parsed;
  state.readerKind = "html";
  setReaderZoomControls(false);
  $("#reader-html-tools").classList.add("hidden");
  $("#reader-title").textContent = documentInfo?.name || "文档阅读";
  $("#reader-meta").textContent = `${documentInfo?.extension || ".html"} · 原生交互预览`;
  body.className = `reader-body reader-kind-html reader-html-layout-${previewKind}`;
}

function detectHtmlPreviewKind(parsed) {
  const slideCount = parsed.querySelectorAll(".slide").length;
  const hasDeckContainer = Boolean(
    parsed.querySelector(".slide-container, .deck-container, .slides-wrapper, [data-slide-container]"),
  );
  const hasSlideNavigation = Boolean(
    parsed.querySelector(
      ".nav-controls, [id*='prev' i], [id*='next' i], [id*='progress' i], [id*='counter' i]",
    ),
  );
  return hasDeckContainer || (slideCount >= 2 && hasSlideNavigation) ? "slides" : "web";
}

function prepareHtmlPreviewDocument(parsed, previewKind) {
  const root = parsed.documentElement;
  root.dataset.kbPreviewKind = previewKind;
  root.dataset.kbPreviewDocument = "true";

  // Add only a host-level compatibility layer. The uploaded document remains
  // the source of truth for its own layout, scripts, controls, and styles.
  const style = parsed.createElement("style");
  style.dataset.kbPreviewStyle = "true";
  style.textContent = previewKind === "slides"
    ? `
      html[data-kb-preview-kind="slides"],
      html[data-kb-preview-kind="slides"] body {
        width: 100%;
        max-width: none;
      }
      html[data-kb-preview-kind="slides"] body {
        min-width: 0;
        min-height: 100%;
      }
    `
    : `
      html[data-kb-preview-kind="web"] {
        min-height: 100%;
        height: auto;
        overflow-x: hidden !important;
        overflow-y: auto !important;
      }
      html[data-kb-preview-kind="web"] body {
        min-height: 100%;
        height: auto;
        max-width: 100%;
        overflow-x: hidden !important;
        overflow-y: auto !important;
      }
      html[data-kb-preview-kind="web"] img,
      html[data-kb-preview-kind="web"] video,
      html[data-kb-preview-kind="web"] canvas,
      html[data-kb-preview-kind="web"] svg {
        max-width: 100%;
      }
    `;
  parsed.head.appendChild(style);
}

async function openPptxRendererPreview(id, documentInfo) {
  const response = await fetch(`/api/v1/documents/${id}/preview`, {
    headers: { Authorization: `Bearer ${state.token}` },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.detail || "PPT 预览失败");
  }

  const { PptxViewer, RECOMMENDED_ZIP_LIMITS } = await loadPptxRendererModule();
  const body = $("#reader-body");
  const mountPoint = document.createElement("div");
  mountPoint.className = "kb-pptx-renderer-host";
  body.replaceChildren(mountPoint);
  state.readerPptxViewer?.destroy();
  state.readerPptxViewer = null;
  state.readerPreview = null;
  state.readerKind = "pptx-renderer";
  setReaderZoomControls(true);
  $("#reader-title").textContent = documentInfo?.name || "文档阅读";
  $("#reader-meta").textContent = `${documentInfo?.extension || ".pptx"} · 正在解析`;
  body.className = "reader-body reader-kind-pptx-renderer";

  let viewer = null;
  viewer = await PptxViewer.open(await response.arrayBuffer(), mountPoint, {
    fitMode: "contain",
    renderMode: "list",
    lazySlides: true,
    lazyMedia: true,
    zipLimits: RECOMMENDED_ZIP_LIMITS,
    scrollContainer: body,
    listOptions: {
      windowed: true,
      initialSlides: 4,
      batchSize: 4,
      showSlideLabels: true,
    },
    onSlideChange: (index) => {
      const total = viewer?.slideCount || state.readerPptxViewer?.slideCount;
      $("#reader-meta").textContent = total
        ? `${documentInfo?.extension || ".pptx"} · 第 ${index + 1} / ${total} 页`
        : `${documentInfo?.extension || ".pptx"} · 第 ${index + 1} 页`;
    },
    onRenderComplete: () => setMessage(""),
    onSlideError: (index, error) => {
      console.error(`PPT 第 ${index + 1} 页渲染失败`, error);
    },
  });

  state.readerPptxViewer = viewer;
  $("#reader-meta").textContent = `${documentInfo?.extension || ".pptx"} · 共 ${viewer.slideCount} 页`;
  await applyReaderZoom();
}

async function applyReaderZoom() {
  $("#reader-zoom-label").textContent = `${Math.round(state.readerZoom * 100)}%`;
  $("#reader-body").style.setProperty("--reader-scale", state.readerZoom);
  if (state.readerKind === "pptx-renderer") {
    await state.readerPptxViewer?.setZoom(Math.round(state.readerZoom * 100));
    return;
  }
  if (state.readerKind !== "pptx") return;
  const body = $("#reader-body");
  const styles = getComputedStyle(body);
  const availableWidth = Math.max(
    1,
    body.clientWidth - Number.parseFloat(styles.paddingLeft) - Number.parseFloat(styles.paddingRight),
  );
  const baseWidth = Math.min(1280, availableWidth);
  body.querySelectorAll(".reader-slide-wrap").forEach((wrapper) => {
    const slideWidth = Math.max(1, pptxNumber(wrapper.dataset.slideWidth, 1));
    const width = baseWidth * state.readerZoom;
    wrapper.style.width = `${width}px`;
    const pointScale = width * 914400 / slideWidth / 72;
    wrapper.querySelector(".reader-slide").style.setProperty("--pptx-point-scale", pointScale);
    wrapper.querySelectorAll("[data-font-size]").forEach((run) => {
      run.style.fontSize = `${pptxNumber(run.dataset.fontSize) * pointScale}px`;
    });
    wrapper.querySelectorAll(".pptx-text").forEach((text) => {
      const margins = [
        ["marginLeft", "marginLeft"],
        ["marginRight", "marginRight"],
        ["marginTop", "marginTop"],
        ["marginBottom", "marginBottom"],
      ];
      margins.forEach(([property, datasetKey]) => {
        const value = pptxNumber(text.dataset[datasetKey]);
        text.style[property] = `${value * pointScale}px`;
      });
      text.querySelectorAll(".pptx-paragraph").forEach((paragraph) => {
        const spaceBefore = pptxNumber(paragraph.dataset.spaceBefore);
        const spaceAfter = pptxNumber(paragraph.dataset.spaceAfter);
        const lineSpacingPt = pptxNumber(paragraph.dataset.lineSpacingPt);
        const lineSpacingMultiple = pptxNumber(paragraph.dataset.lineSpacingMultiple);
        paragraph.style.marginTop = `${spaceBefore * pointScale}px`;
        paragraph.style.marginBottom = `${spaceAfter * pointScale}px`;
        if (lineSpacingPt) paragraph.style.lineHeight = `${lineSpacingPt * pointScale}px`;
        else if (lineSpacingMultiple) paragraph.style.lineHeight = String(lineSpacingMultiple);
      });
    });
  });
}

async function openReader(id) {
  setMessage("正在打开文档...");
  try {
    const documentInfo = state.documents.find((item) => String(item.id) === String(id)) || {};
    const extension = String(documentInfo.extension || "").toLowerCase();
    if (HTML_EXTENSIONS.has(extension)) {
      state.readerDocumentId = Number(id);
      state.readerZoom = 1;
      $("#reader-view").classList.remove("hidden");
      document.body.classList.add("reader-open");
      await openHtmlPreview(id, documentInfo);
      setMessage("");
      return;
    }
    const componentKind = extension === ".pdf"
      ? "pdf"
      : MARKDOWN_EXTENSIONS.has(extension)
        ? "markdown"
        : extension === ".docx"
          ? "docx"
          : extension === ".pptx"
            ? "pptx"
            : extension === ".xlsx" || extension === ".xls"
              ? "xlsx"
              : null;
    if (componentKind === "pptx") {
      state.readerDocumentId = Number(id);
      state.readerZoom = 1;
      $("#reader-view").classList.remove("hidden");
      document.body.classList.add("reader-open");
      await openPptxRendererPreview(id, documentInfo);
      setMessage("");
      return;
    }
    if (componentKind && (VUE_PREVIEW_EXTENSIONS.has(extension) || MARKDOWN_EXTENSIONS.has(extension))) {
      state.readerDocumentId = Number(id);
      state.readerZoom = 1;
      $("#reader-view").classList.remove("hidden");
      document.body.classList.add("reader-open");
      await openVuePreview(id, documentInfo, componentKind);
      setMessage("");
      return;
    }
    const data = await api(`/documents/${id}/reader`);
    state.readerDocumentId = Number(id);
    state.readerZoom = 1;
    $("#reader-view").classList.remove("hidden");
    document.body.classList.add("reader-open");
    renderReader(data);
    setMessage("");
  } catch (error) {
    setMessage(error.message, true);
  }
}

function closeReader() {
  state.readerPreview?.unmountPreview?.();
  state.readerPptxViewer?.destroy();
  state.readerPreview = null;
  state.readerPptxViewer = null;
  state.readerHtmlFrame = null;
  state.readerHtmlKind = null;
  state.readerHtmlSlides = [];
  state.readerHtmlPage = 0;
  state.readerHtmlParsed = null;
  $("#reader-html-tools").classList.add("hidden");
  $("#reader-view").classList.add("hidden");
  document.body.classList.remove("reader-open");
  $("#reader-body").innerHTML = "";
  state.readerObjectUrl = null;
  state.readerDocumentId = null;
  state.readerKind = null;
  setReaderZoomControls(true);
}

function changeReaderZoom(delta) {
  state.readerZoom = Math.min(1.5, Math.max(.7, Number((state.readerZoom + delta).toFixed(2))));
  applyReaderZoom();
}

$("#auth-form").addEventListener("submit", submitAuth);
$("#logout-button").addEventListener("click", logout);
$("#user-menu-button").addEventListener("click", (event) => {
  event.stopPropagation();
  toggleUserMenu();
});
$("#change-password-button").addEventListener("click", openPasswordDialog);
$("#cancel-password-button").addEventListener("click", () => $("#password-dialog").close());
$("#password-form").addEventListener("submit", submitPasswordForm);
document.addEventListener("click", (event) => {
  if (!event.target.closest("#user-menu")) closeUserMenu();
});
document.querySelectorAll("[data-view]").forEach((item) => {
  item.addEventListener("click", () => {
    setView(item.dataset.view);
    if (item.dataset.view === "knowledge") loadKnowledgeBases();
  });
});
$("#knowledge-base-select").addEventListener("change", async () => {
  state.teamDetailId = null;
  setView("knowledge");
  state.currentFolderId = null;
  state.selectedFileType = "all";
  state.folderTreeInitialized = false;
  state.expandedFolders.clear();
  updateUploadAvailability();
  await loadFolders();
  await loadDocuments();
});
$("#search-input").addEventListener("input", loadDocuments);
$("#refresh-button").addEventListener("click", loadDocuments);
$("#create-team-space-button").addEventListener("click", openTeamSpaceDialog);
$("#cancel-team-space-button").addEventListener("click", () => $("#team-space-dialog").close());
$("#team-space-form").addEventListener("submit", submitTeamSpaceForm);
$("#team-refresh-button").addEventListener("click", loadTeamSpaces);
document.querySelectorAll("[data-team-tab]").forEach((button) => {
  button.addEventListener("click", () => setTeamDetailTab(button.dataset.teamTab));
});
$("#recycle-refresh-button").addEventListener("click", loadRecycleBin);
$("#empty-recycle-button").addEventListener("click", emptyRecycleBin);
$("#new-folder-button").addEventListener("click", openNewFolderDialog);
$("#team-new-folder-button").addEventListener("click", openNewFolderDialog);
$("#add-team-member-button").addEventListener("click", openTeamMemberDialog);
$("#cancel-team-member-button").addEventListener("click", () => $("#team-member-dialog").close());
$("#team-member-form").addEventListener("submit", submitTeamMemberForm);
$("#folder-form").addEventListener("submit", submitFolderForm);
$("#cancel-folder-button").addEventListener("click", () => $("#folder-dialog").close());
$("#move-form").addEventListener("submit", submitMove);
$("#cancel-move-button").addEventListener("click", () => $("#move-dialog").close());
$("#document-rename-form").addEventListener("submit", submitDocumentRename);
$("#cancel-document-rename-button").addEventListener(
  "click",
  () => $("#document-rename-dialog").close(),
);
$("#copy-form").addEventListener("submit", submitCopy);
$("#cancel-copy-button").addEventListener("click", () => $("#copy-dialog").close());
$("#copy-target-type").addEventListener("change", async () => {
  state.copyTargetType = $("#copy-target-type").value;
  await renderCopyTargets();
});
$("#copy-target-select").addEventListener("change", async () => {
  state.copyTargetId = Number($("#copy-target-select").value) || null;
  await loadCopyDestinationFolders();
});
$("#reader-close-button").addEventListener("click", closeReader);
$("#reader-zoom-out").addEventListener("click", () => changeReaderZoom(-0.1));
$("#reader-zoom-in").addEventListener("click", () => changeReaderZoom(0.1));
$("#reader-download-button").addEventListener("click", () => {
  if (state.readerDocumentId) openDocumentFile(state.readerDocumentId, true);
});
window.addEventListener("resize", applyReaderZoom);
$("#file-input").addEventListener("change", uploadFiles);
$("#cancel-upload-button").addEventListener("click", () => {
  state.uploadCancelled = true;
  state.uploadXhr?.abort();
});
$("#document-table").addEventListener("click", handleDocumentAction);
$("#team-space-cards").addEventListener("click", handleTeamSpaceAction);
$("#recycle-bin-table").addEventListener("click", handleRecycleAction);
$("#team-recycle-table").addEventListener("click", handleRecycleAction);
$("#empty-team-recycle-button").addEventListener("click", emptyTeamRecycleBin);
$("#team-members-table").addEventListener("click", (event) => {
  const button = event.target.closest("[data-team-member-action='remove']");
  if (button) removeTeamMember(Number(button.dataset.userId));
});
$("#team-detail-back").addEventListener("click", () => {
  state.teamDetailId = null;
  state.teamDetailSpace = null;
  setView("team");
});
$("#file-type-tree").addEventListener("click", (event) => {
  const item = event.target.closest("[data-file-type]");
  if (item) selectFileType(item.dataset.fileType);
});
$("#knowledge-all-files-button").addEventListener("click", () => selectFileType("all"));
$("#team-file-type-button").addEventListener("click", (event) => {
  event.stopPropagation();
  toggleTeamFileTypeMenu();
});
$("#team-file-type-menu").addEventListener("change", (event) => {
  const input = event.target.closest("[data-team-file-type]");
  if (input) toggleTeamFileType(input.dataset.teamFileType);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("#team-file-type-filter")) closeTeamFileTypeMenu();
});
$("#breadcrumb").addEventListener("click", (event) => {
  const item = event.target.closest("[data-folder-id]");
  if (item) selectFolder(item.dataset.folderId);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !$("#reader-view").classList.contains("hidden")) closeReader();
});

if (state.token) {
  api("/auth/me").then(showApp).catch(() => logout());
}
