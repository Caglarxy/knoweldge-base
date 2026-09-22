const $ = (selector) => document.querySelector(selector);
const sessionToken = localStorage.getItem("kb_token");
const state = {
  currentUser: null,
  users: [],
  knowledgeBases: [],
  systemSettings: null,
  editingUser: null,
  editingKnowledgeBase: null,
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function api(path, options = {}) {
  const headers = new Headers(options.headers || {});
  if (sessionToken) headers.set("Authorization", `Bearer ${sessionToken}`);
  const response = await fetch(`/api/v1${path}`, { ...options, headers });
  if (response.status === 204 || response.status === 205) return null;
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.detail || "请求失败");
  return body;
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
}

function setMessage(selector, message, isError = false) {
  const element = $(selector);
  element.textContent = message || "";
  element.className = `admin-message${isError ? " error" : ""}`;
}

function policyLabel(policy) {
  const labels = {
    "120m": "120 分钟",
    "1d": "1 天",
    "7d": "7 天",
    "30d": "30 天",
    "180d": "半年",
    long: "长期",
  };
  if (labels[policy]) return labels[policy];
  if (String(policy || "").startsWith("custom:")) {
    const minutes = Number(String(policy).split(":", 2)[1]);
    if (Number.isFinite(minutes)) {
      if (minutes % (24 * 60) === 0) return `自定义（${minutes / (24 * 60)} 天）`;
      if (minutes % 60 === 0) return `自定义（${minutes / 60} 小时）`;
      return `自定义（${minutes} 分钟）`;
    }
  }
  return "120 分钟";
}

function customPolicyParts(policy) {
  const minutes = Number(String(policy || "").split(":", 2)[1]);
  if (!Number.isInteger(minutes) || minutes < 1) {
    return { value: "", unit: "minute" };
  }
  if (minutes % (24 * 60) === 0) {
    return { value: minutes / (24 * 60), unit: "day" };
  }
  if (minutes % 60 === 0) {
    return { value: minutes / 60, unit: "hour" };
  }
  return { value: minutes, unit: "minute" };
}

function customPolicyFactor(unit) {
  return {
    minute: 1,
    hour: 60,
    day: 24 * 60,
  }[unit] || 1;
}

function updateCustomPolicyInputConstraints() {
  const unit = $("#admin-edit-custom-policy-unit").value;
  const maxValue = Math.floor(525600 / customPolicyFactor(unit));
  const unitLabels = { minute: "分钟", hour: "小时", day: "天" };
  const input = $("#admin-edit-custom-policy");
  input.max = String(maxValue);
  input.placeholder = `1~${maxValue} ${unitLabels[unit] || "分钟"}`;
}

function uploadPolicyLabel(policy) {
  return policy === "all_users"
    ? "所有可访问用户可上传"
    : "仅创建者可上传";
}

function viewPolicyLabel(policy) {
  return {
    owner_only: "仅创建者可查看",
    all_users: "所有用户可查看",
    selected_users: "指定用户可查看",
  }[policy] || "仅创建者可查看";
}

function renderUsers() {
  $("#admin-user-table").innerHTML = state.users.map((user) => `
    <tr>
      <td><strong>${escapeHtml(user.username)}</strong><small>#${user.id}${user.email ? ` · ${escapeHtml(user.email)}` : ""}</small></td>
      <td><span class="admin-role ${user.role === "admin" ? "is-admin" : ""}">${user.role === "admin" ? "管理员" : "普通用户"}</span></td>
      <td><span class="admin-status ${user.is_active ? "is-active" : "is-disabled"}">${user.is_active ? "启用" : "禁用"}</span></td>
      <td>${escapeHtml(policyLabel(user.mcp_token_expire_policy))}</td>
      <td>${user.active_mcp_token_count}</td>
      <td>${formatDate(user.created_at)}</td>
      <td><button class="link-button" data-edit-user="${user.id}" type="button">编辑</button></td>
    </tr>
  `).join("") || `<tr><td colspan="7" class="admin-empty">暂无用户</td></tr>`;
}

async function loadUsers() {
  setMessage("#admin-user-message", "正在加载...");
  try {
    state.users = await api("/admin/users");
    renderUsers();
    setMessage("#admin-user-message", `共 ${state.users.length} 个用户`);
  } catch (error) {
    setMessage("#admin-user-message", error.message, true);
  }
}

function renderKnowledgeBases() {
  $("#admin-knowledge-base-table").innerHTML = state.knowledgeBases.map((knowledgeBase) => `
    <tr>
      <td>
        <strong>${escapeHtml(knowledgeBase.name)}</strong>
        <small>#${knowledgeBase.id}${knowledgeBase.description ? ` · ${escapeHtml(knowledgeBase.description)}` : ""}</small>
      </td>
      <td>${escapeHtml(knowledgeBase.owner_username || `用户 #${knowledgeBase.owner_id}`)}</td>
      <td>${knowledgeBase.document_count}</td>
      <td>
        <span class="admin-role ${knowledgeBase.view_policy === "all_users" ? "is-admin" : ""}">
          ${viewPolicyLabel(knowledgeBase.view_policy)}
        </span>
        ${knowledgeBase.view_policy === "selected_users" && knowledgeBase.viewer_usernames?.length
          ? `<small>${escapeHtml(knowledgeBase.viewer_usernames.join("、"))}</small>`
          : ""}
      </td>
      <td><span class="admin-role ${knowledgeBase.upload_policy === "all_users" ? "is-admin" : ""}">${uploadPolicyLabel(knowledgeBase.upload_policy)}</span></td>
      <td>${formatDate(knowledgeBase.updated_at || knowledgeBase.created_at)}</td>
      <td><button class="link-button" data-edit-knowledge-base="${knowledgeBase.id}" type="button">设置权限</button></td>
    </tr>
  `).join("") || `<tr><td colspan="7" class="admin-empty">暂无知识库</td></tr>`;
}

async function loadKnowledgeBases() {
  setMessage("#admin-knowledge-base-message", "正在加载...");
  try {
    state.knowledgeBases = await api("/admin/knowledge-bases");
    renderKnowledgeBases();
    setMessage("#admin-knowledge-base-message", `共 ${state.knowledgeBases.length} 个知识库`);
  } catch (error) {
    setMessage("#admin-knowledge-base-message", error.message, true);
  }
}

function renderLogRows(logs, selector, colspan, mode = "normal") {
  const actionLabels = {
    login: "登录",
    register: "注册",
    upload: "上传",
    preview: "预览",
    download: "下载",
    read: "阅读",
    create: "创建",
    update: "更新",
    move: "移动",
    delete: "删除",
    restore: "恢复",
    issue_mcp_token: "签发 MCP Token",
    admin_create_user: "创建用户",
    admin_update_user: "修改用户",
    mcp_call: "MCP 调用",
  };
  $(selector).innerHTML = logs.map((log) => {
    const client = log.ip_address || log.user_agent || "-";
    if (mode === "agent") {
      return `
        <tr>
          <td>${formatDate(log.created_at)}</td>
          <td>${escapeHtml(log.actor_username || `匿名（${log.actor_id ?? "-"}）`)}</td>
          <td><strong>${escapeHtml(log.resource_id || "-")}</strong><small>MCP 工具</small></td>
          <td>${escapeHtml([log.resource_type, log.resource_id].filter(Boolean).join(" / ") || "-")}</td>
          <td><span class="admin-status ${log.result === "success" ? "is-active" : "is-disabled"}">${log.result === "success" ? "成功" : "失败"}</span></td>
          <td title="${escapeHtml(log.user_agent || "")}">${escapeHtml(client)}</td>
          <td class="admin-error-cell">${escapeHtml(log.error_message || "-")}</td>
        </tr>`;
    }
    return `
      <tr>
        <td>${formatDate(log.created_at)}</td>
        <td>${escapeHtml(log.actor_username || `匿名（${log.actor_id ?? "-"}）`)}</td>
        <td>${escapeHtml(actionLabels[log.action] || log.action)}</td>
        <td>${escapeHtml([log.resource_type, log.resource_id].filter(Boolean).join(" / ") || "-")}</td>
        <td><span class="admin-status ${log.result === "success" ? "is-active" : "is-disabled"}">${log.result === "success" ? "成功" : "失败"}</span></td>
        <td title="${escapeHtml(log.user_agent || "")}">${escapeHtml(client)}</td>
      </tr>`;
  }).join("") || `<tr><td colspan="${colspan}" class="admin-empty">暂无记录</td></tr>`;
}

async function loadLogs() {
  setMessage("#admin-log-message", "正在加载...");
  try {
    const category = $("#log-category").value;
    const logs = await api(`/admin/logs?category=${encodeURIComponent(category)}`);
    renderLogRows(logs, "#admin-log-table", 6);
    setMessage("#admin-log-message", `显示 ${logs.length} 条记录`);
  } catch (error) {
    setMessage("#admin-log-message", error.message, true);
  }
}

async function loadAgentLogs() {
  setMessage("#admin-agent-message", "正在加载...");
  try {
    const logs = await api("/admin/logs?category=agent");
    renderLogRows(logs, "#admin-agent-table", 7, "agent");
    setMessage("#admin-agent-message", `显示 ${logs.length} 条调用记录`);
  } catch (error) {
    setMessage("#admin-agent-message", error.message, true);
  }
}

async function loadSystemSettings() {
  setMessage("#admin-settings-message", "正在加载...");
  try {
    state.systemSettings = await api("/admin/settings");
    const days = Number(state.systemSettings.recycle_bin_retention_days);
    const presetValues = ["7", "30", "90", "180", "365", "730"];
    $("#recycle-retention-select").value = presetValues.includes(String(days))
      ? String(days)
      : "custom";
    $("#recycle-retention-custom").value = days;
    $("#recycle-retention-custom-field").classList.toggle(
      "hidden",
      $("#recycle-retention-select").value !== "custom",
    );
    setMessage("#admin-settings-message", "配置已加载");
  } catch (error) {
    setMessage("#admin-settings-message", error.message, true);
  }
}

async function saveSystemSettings() {
  const selected = $("#recycle-retention-select").value;
  const days = selected === "custom"
    ? Number($("#recycle-retention-custom").value)
    : Number(selected);
  if (!Number.isInteger(days) || days < 1 || days > 3650) {
    setMessage("#admin-settings-message", "自定义保留天数必须为 1~3650 的整数", true);
    return;
  }
  try {
    state.systemSettings = await api("/admin/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recycle_bin_retention_days: days }),
    });
    const savedDays = String(state.systemSettings.recycle_bin_retention_days);
    $("#recycle-retention-select").value = ["7", "30", "90", "180", "365", "730"].includes(savedDays)
      ? savedDays
      : "custom";
    $("#recycle-retention-custom").value = savedDays;
    $("#recycle-retention-custom-field").classList.toggle(
      "hidden",
      $("#recycle-retention-select").value !== "custom",
    );
    setMessage("#admin-settings-message", "系统配置已保存");
  } catch (error) {
    setMessage("#admin-settings-message", error.message, true);
  }
}

function openEditDialog(user) {
  state.editingUser = user;
  $("#admin-user-dialog-title").textContent = "修改用户";
  $("#admin-edit-user-label").textContent = `用户 ID：${user.id}`;
  $("#admin-edit-username").value = user.username;
  $("#admin-edit-password").value = "";
  $("#admin-edit-password").removeAttribute("required");
  $("#admin-edit-role").value = user.role;
  $("#admin-edit-status").value = user.is_active ? "active" : "disabled";
  const policy = user.mcp_token_expire_policy || "120m";
  $("#admin-edit-policy").value = policy.startsWith("custom:") ? "custom" : policy;
  $("#admin-edit-custom-policy").value = policy.startsWith("custom:")
    ? customPolicyParts(policy).value
    : "";
  $("#admin-edit-custom-policy-unit").value = policy.startsWith("custom:")
    ? customPolicyParts(policy).unit
    : "minute";
  updateCustomPolicyInputConstraints();
  $("#admin-custom-policy-field").classList.toggle(
    "hidden",
    $("#admin-edit-policy").value !== "custom",
  );
  $("#admin-edit-error").textContent = "";
  $("#admin-user-dialog").showModal();
}

function openCreateDialog() {
  state.editingUser = null;
  $("#admin-user-dialog-title").textContent = "新建用户";
  $("#admin-edit-user-label").textContent = "创建后可使用该账号登录知识库";
  $("#admin-edit-username").value = "";
  $("#admin-edit-password").value = "";
  $("#admin-edit-password").setAttribute("required", "required");
  $("#admin-edit-role").value = "user";
  $("#admin-edit-status").value = "active";
  $("#admin-edit-policy").value = "120m";
  $("#admin-edit-custom-policy").value = "";
  $("#admin-edit-custom-policy-unit").value = "minute";
  updateCustomPolicyInputConstraints();
  $("#admin-custom-policy-field").classList.add("hidden");
  $("#admin-edit-error").textContent = "";
  $("#admin-user-dialog").showModal();
}

function openKnowledgeBaseDialog(knowledgeBase) {
  state.editingKnowledgeBase = knowledgeBase;
  $("#admin-edit-knowledge-base-label").textContent =
    `${knowledgeBase.name} · 创建者：${knowledgeBase.owner_username || `用户 #${knowledgeBase.owner_id}`}`;
  $("#admin-edit-knowledge-base-view-policy").value = knowledgeBase.view_policy || "all_users";
  const ownerId = knowledgeBase.owner_id;
  const viewerSelect = $("#admin-edit-knowledge-base-viewers");
  viewerSelect.innerHTML = state.users
    .filter((user) => user.id !== ownerId && user.is_active && user.status === "active")
    .map((user) => `<option value="${user.id}">${escapeHtml(user.username)}${user.email ? ` · ${escapeHtml(user.email)}` : ""}</option>`)
    .join("") || '<option value="">暂无可选择用户</option>';
  const selectedIds = new Set((knowledgeBase.viewer_ids || []).map((id) => String(id)));
  [...viewerSelect.options].forEach((option) => {
    option.selected = selectedIds.has(option.value);
  });
  viewerSelect.disabled = knowledgeBase.view_policy !== "selected_users";
  $("#admin-knowledge-base-viewers-field").classList.toggle(
    "hidden",
    knowledgeBase.view_policy !== "selected_users",
  );
  $("#admin-edit-knowledge-base-view-policy").dispatchEvent(new Event("change"));
  $("#admin-edit-knowledge-base-policy").value = knowledgeBase.upload_policy || "owner_only";
  $("#admin-knowledge-base-error").textContent = "";
  $("#admin-knowledge-base-dialog").showModal();
}

async function saveKnowledgeBasePolicy(event) {
  event.preventDefault();
  const knowledgeBase = state.editingKnowledgeBase;
  if (!knowledgeBase) return;
  try {
    await api(`/admin/knowledge-bases/${knowledgeBase.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        upload_policy: $("#admin-edit-knowledge-base-policy").value,
        view_policy: $("#admin-edit-knowledge-base-view-policy").value,
        viewer_ids: [...$("#admin-edit-knowledge-base-viewers").selectedOptions]
          .map((option) => Number(option.value))
          .filter(Boolean),
      }),
    });
    $("#admin-knowledge-base-dialog").close();
    await loadKnowledgeBases();
  } catch (error) {
    $("#admin-knowledge-base-error").textContent = error.message;
  }
}

async function saveUser(event) {
  event.preventDefault();
  const user = state.editingUser;
  const password = $("#admin-edit-password").value;
  const policyType = $("#admin-edit-policy").value;
  const customValue = Number($("#admin-edit-custom-policy").value);
  const customUnit = $("#admin-edit-custom-policy-unit").value;
  const customMinutes = customValue * customPolicyFactor(customUnit);
  const payload = {
    username: $("#admin-edit-username").value.trim(),
    role: $("#admin-edit-role").value,
    status: $("#admin-edit-status").value,
    mcp_token_expire_policy: policyType === "custom"
      ? `custom:${customMinutes}`
      : policyType,
  };
  if (
    policyType === "custom"
    && (!Number.isInteger(customValue)
      || customValue < 1
      || customMinutes > 525600)
  ) {
    $("#admin-edit-error").textContent = "自定义 Token 时长超出范围，最大为 365 天";
    return;
  }
  if (user && password) payload.password = password;
  if (!user) payload.password = password;
  try {
    await api(user ? `/admin/users/${user.id}` : "/admin/users", {
      method: user ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    $("#admin-user-dialog").close();
    await loadUsers();
  } catch (error) {
    $("#admin-edit-error").textContent = error.message;
  }
}

function switchTab(tab) {
  const settings = {
    users: ["用户管理", "管理用户状态、MCP Token 有效期和账号权限。"],
    "knowledge-bases": ["知识库权限", "配置知识库的上传权限，权限由管理员统一管理。"],
    agent: ["智能体调用", "查看 MCP 智能体调用的用户、工具、结果和客户端信息。"],
    settings: ["系统配置", "配置回收站保留时间等系统业务参数。"],
    logs: ["操作日志", "查看登录、上传、预览、下载和管理员变更记录。"],
  };
  document.querySelectorAll(".admin-nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminTab === tab);
  });
  ["users", "knowledge-bases", "agent", "settings", "logs"].forEach((name) => {
    $(`#admin-${name}-view`).classList.toggle("hidden", tab !== name);
  });
  $("#admin-page-title").textContent = settings[tab][0];
  $("#admin-page-description").textContent = settings[tab][1];
  if (tab === "knowledge-bases") loadKnowledgeBases();
  if (tab === "agent") loadAgentLogs();
  if (tab === "settings") loadSystemSettings();
  if (tab === "logs") loadLogs();
}

async function bootstrap() {
  if (!sessionToken) {
    $("#admin-denied").classList.remove("hidden");
    return;
  }
  try {
    state.currentUser = await api("/auth/me");
    $("#admin-current-user").textContent = state.currentUser.username;
    if (state.currentUser.role !== "admin") {
      $("#admin-denied").classList.remove("hidden");
      return;
    }
    $("#admin-content").classList.remove("hidden");
    await loadUsers();
  } catch {
    $("#admin-denied").classList.remove("hidden");
  }
}

document.querySelectorAll(".admin-nav-item").forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.adminTab));
});
$("#refresh-users").addEventListener("click", loadUsers);
$("#refresh-knowledge-bases").addEventListener("click", loadKnowledgeBases);
$("#create-user").addEventListener("click", openCreateDialog);
$("#refresh-logs").addEventListener("click", loadLogs);
$("#refresh-agent-logs").addEventListener("click", loadAgentLogs);
$("#refresh-settings").addEventListener("click", loadSystemSettings);
$("#save-settings").addEventListener("click", saveSystemSettings);
$("#recycle-retention-select").addEventListener("change", (event) => {
  $("#recycle-retention-custom-field").classList.toggle(
    "hidden",
    event.target.value !== "custom",
  );
});
$("#admin-edit-policy").addEventListener("change", (event) => {
  $("#admin-custom-policy-field").classList.toggle(
    "hidden",
    event.target.value !== "custom",
  );
});
$("#admin-edit-custom-policy-unit").addEventListener(
  "change",
  updateCustomPolicyInputConstraints,
);
$("#log-category").addEventListener("change", loadLogs);
$("#admin-user-table").addEventListener("click", (event) => {
  const button = event.target.closest("[data-edit-user]");
  if (button) openEditDialog(state.users.find((user) => user.id === Number(button.dataset.editUser)));
});
$("#admin-knowledge-base-table").addEventListener("click", (event) => {
  const button = event.target.closest("[data-edit-knowledge-base]");
  if (button) {
    const knowledgeBase = state.knowledgeBases.find(
      (item) => item.id === Number(button.dataset.editKnowledgeBase),
    );
    if (knowledgeBase) openKnowledgeBaseDialog(knowledgeBase);
  }
});
$("#admin-user-form").addEventListener("submit", saveUser);
$("#admin-edit-cancel").addEventListener("click", () => $("#admin-user-dialog").close());
$("#admin-knowledge-base-form").addEventListener("submit", saveKnowledgeBasePolicy);
$("#admin-knowledge-base-cancel").addEventListener("click", () => $("#admin-knowledge-base-dialog").close());
$("#admin-edit-knowledge-base-view-policy").addEventListener("change", (event) => {
  const selectedUsers = event.target.value === "selected_users";
  $("#admin-knowledge-base-viewers-field").classList.toggle("hidden", !selectedUsers);
  $("#admin-edit-knowledge-base-viewers").disabled = !selectedUsers;
});
bootstrap();
