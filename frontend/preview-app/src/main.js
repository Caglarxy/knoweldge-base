import { createApp, h, ref } from "vue";
const componentLoaders = {
  docx: () => import("./office.js"),
  xlsx: () => import("./office.js"),
  pptx: () => import("./office.js"),
  pdf: () => import("./pdf.js"),
  markdown: () => import("./markdown.js"),
};
const componentNames = {
  docx: "VueOfficeDocx",
  xlsx: "VueOfficeExcel",
  pptx: "VueOfficePptx",
  pdf: "VuePdfToc",
  markdown: "Markdown",
};

let activeApp = null;

function errorMessage(error) {
  return error?.message || String(error || "文档渲染失败");
}

function renderPreview(config, state, Component, markdownLocale) {
  if (config.kind === "markdown") {
    return h(Component, {
      value: config.value || "",
      locale: markdownLocale,
      indicator: false,
    });
  }

  const componentProps = {
    src: config.src,
    onRendered: (payload) => {
      state.status.value = "ready";
      config.onRendered?.(payload);
    },
    onError: (error) => {
      state.status.value = "error";
      state.error.value = errorMessage(error);
      config.onError?.(error);
    },
  };

  if (config.kind === "pdf") {
    Object.assign(componentProps, {
      filename: config.filename || "document.pdf",
      showDownload: false,
      showPrint: true,
      loaderOptions: {
        rangeChunkSize: 256 * 1024,
        disableAutoFetch: true,
      },
    });
  } else if (config.kind === "docx") {
    componentProps.options = {
      breakPages: true,
      ignoreLastRenderedPageBreak: false,
      experimental: false,
      useBase64URL: true,
      renderHeaders: true,
      renderFooters: true,
      renderFootnotes: true,
      renderEndnotes: true,
      renderChanges: false,
      renderComments: false,
    };
  } else if (config.kind === "xlsx") {
    componentProps.options = {
      xls: Boolean(config.xls),
      showContextmenu: false,
    };
    componentProps.onSwitchSheet = config.onSwitchSheet;
    componentProps.onCellClick = config.onCellClick;
    componentProps.onCellSelected = config.onCellSelected;
  } else if (config.kind === "pptx") {
    componentProps.options = {
      showControls: true,
    };
    componentProps.onSlideChange = config.onSlideChange;
  }

  return h(Component, componentProps);
}

export async function mountPreview(container, config = {}) {
  unmountPreview();
  const module = await componentLoaders[config.kind]?.();
  const Component = module?.[componentNames[config.kind]];
  if (!Component) {
    throw new Error(`不支持的预览类型：${config.kind}`);
  }
  const markdownLocale = config.kind === "markdown" ? module.zhCN : undefined;
  const state = {
    status: ref(config.kind === "markdown" ? "ready" : "loading"),
    error: ref(""),
  };
  const root = {
    setup() {
      return () => h("div", { class: ["kb-preview-mount", `kb-preview-${config.kind || "unknown"}`] }, [
        state.status.value === "loading"
          ? h("div", { class: "kb-preview-loading" }, [
              h("div", { class: "kb-preview-spinner", "aria-hidden": "true" }),
              h("span", "正在渲染文档..."),
            ])
          : null,
        state.error.value
          ? h("div", { class: "kb-preview-error", role: "alert" }, [
              h("strong", "文档预览失败"),
              h("p", state.error.value),
            ])
          : null,
        state.error.value ? null : renderPreview(config, state, Component, markdownLocale),
      ]);
    },
  };
  activeApp = createApp(root);
  activeApp.mount(container);
  return activeApp;
}

export function unmountPreview() {
  if (activeApp) {
    activeApp.unmount();
    activeApp = null;
  }
}
