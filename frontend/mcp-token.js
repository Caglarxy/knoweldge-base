const $ = (selector) => document.querySelector(selector);

const state = {
  sessionToken: null,
  mcpToken: null,
  user: null,
  tokenInfo: null,
  serverInfo: null,
};

function getSessionToken() {
  return localStorage.getItem("kb_token");
}

function syncSessionToken() {
  state.sessionToken = getSessionToken();
  return state.sessionToken;
}

function setError(message = "") {
  $("#token-error").textContent = message;
}

function formatExpiry(expiresIn, expiresAt, policyLabel) {
  if (policyLabel === "长期") return "长期有效（可由管理员撤销）";
  if (expiresAt) {
    const date = new Date(expiresAt);
    if (!Number.isNaN(date.getTime())) {
      return `${policyLabel || "已设置"}，到期：${date.toLocaleString()}`;
    }
  }
  if (!expiresIn) return policyLabel || "已设置有效期";
  const minutes = Math.round(Number(expiresIn) / 60);
  return minutes < 60 ? `有效期约 ${minutes} 分钟` : `有效期约 ${Math.round(minutes / 60)} 小时`;
}

function serverHost() {
  return window.location.hostname || window.location.host.split(":")[0];
}

function getEndpoints() {
  const host = state.serverInfo?.lan_ip || serverHost();
  const remoteProtocol = window.location.protocol === "https:" ? "https:" : "http:";
  return {
    remote: `${remoteProtocol}//${host}:8020/mcp`,
    dialogue: `https://${host}:8024/mcp-dialogue`,
  };
}

function updateConfigPreviews() {
  const endpoints = getEndpoints();
  $("#mcp-endpoint").value = endpoints.remote;
  $("#dialogue-endpoint").value = endpoints.dialogue;
  const token = state.mcpToken || "点击上方按钮生成 access_token";
  $("#mcp-config-preview").textContent = JSON.stringify(
    {
      mcpServers: {
        "knowledge-base-remote": {
          url: endpoints.remote,
          headers: { Authorization: `Bearer ${token}` },
        },
      },
    },
    null,
    2,
  );
  $("#dialogue-config-preview").textContent = JSON.stringify(
    {
      mcpServers: {
        "knowledge-base-oauth": {
          url: endpoints.dialogue,
        },
      },
    },
    null,
    2,
  );
}

function showTokenResult() {
  if (!state.mcpToken || !state.tokenInfo) {
    $("#token-result").classList.add("hidden");
    updateConfigPreviews();
    return;
  }
  $("#token-result").classList.remove("hidden");
  $("#access-token").value = state.mcpToken;
  $("#token-expiry").textContent = formatExpiry(
    state.tokenInfo.expires_in,
    state.tokenInfo.expires_at,
    state.tokenInfo.policy_label,
  );
  updateConfigPreviews();
}

async function loadCurrentSession() {
  syncSessionToken();
  if (!state.sessionToken) {
    $("#token-login-state").textContent = "当前浏览器未登录";
    $("#token-user-label").textContent = "请先返回知识库登录";
    $("#session-hint").textContent = "当前浏览器没有登录凭证，无法签发 Token。";
    return;
  }
  const tokenUsedForRequest = state.sessionToken;
  const response = await fetch("/api/v1/auth/me", {
    headers: { Authorization: `Bearer ${tokenUsedForRequest}` },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    // A previous request can finish after another tab has completed login.
    // Never remove a newer token written by that login.
    if (getSessionToken() !== tokenUsedForRequest) {
      await loadCurrentSession();
      return;
    }
    localStorage.removeItem("kb_token");
    state.sessionToken = null;
    $("#token-login-state").textContent = "当前登录已过期";
    $("#token-user-label").textContent = "请先返回知识库重新登录";
    $("#session-hint").textContent = "登录后再打开此页面即可获取 Token。";
    return;
  }
  state.user = body;
  $("#token-login-state").textContent = "当前浏览器已登录";
  $("#token-user-label").textContent = `账号：${body.username}`;
  $("#current-username").textContent = body.username;
  $("#token-submit").disabled = false;
  $("#session-hint").textContent = "有效期策略由管理员在后台用户管理中设置。";
  if (body.role === "admin") $("#admin-link").classList.remove("hidden");
  await loadServerInfo();
}

async function loadServerInfo() {
  const response = await fetch("/api/v1/auth/server-info", {
    headers: { Authorization: `Bearer ${state.sessionToken}` },
  });
  if (!response.ok) return;
  state.serverInfo = await response.json().catch(() => null);
  updateConfigPreviews();
}

async function issueToken() {
  const response = await fetch("/api/v1/auth/mcp-token", {
    method: "POST",
    headers: { Authorization: `Bearer ${state.sessionToken}` },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.detail || "获取 Token 失败");
  state.mcpToken = body.access_token;
  state.tokenInfo = body;
  setError("");
  showTokenResult();
}

async function copyText(text, messageSelector) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const temporary = document.createElement("textarea");
    temporary.value = text;
    document.body.appendChild(temporary);
    temporary.select();
    document.execCommand("copy");
    temporary.remove();
  }
  $(messageSelector).textContent = "已复制到剪贴板";
}

function clearToken() {
  state.mcpToken = null;
  state.tokenInfo = null;
  $("#copy-state").textContent = "";
  showTokenResult();
}

window.addEventListener("storage", (event) => {
  if (event.key !== "kb_token") return;
  state.mcpToken = null;
  state.tokenInfo = null;
  loadCurrentSession().catch((error) => setError(error.message));
});

$("#token-submit").addEventListener("click", async () => {
  const button = $("#token-submit");
  button.disabled = true;
  button.textContent = "正在签发...";
  setError("");
  try {
    await issueToken();
  } catch (error) {
    setError(error.message);
  } finally {
    button.disabled = !state.user;
    button.textContent = "获取 access_token";
  }
});

$("#copy-token-button").addEventListener("click", () => {
  if (state.mcpToken) copyText(state.mcpToken, "#copy-state");
});
$("#clear-token-button").addEventListener("click", clearToken);
$("#copy-remote-config").addEventListener("click", () => {
  copyText($("#mcp-config-preview").textContent, "#session-hint");
});
$("#copy-dialogue-config").addEventListener("click", () => {
  copyText($("#dialogue-config-preview").textContent, "#session-hint");
});

updateConfigPreviews();
loadCurrentSession().catch((error) => setError(error.message));
