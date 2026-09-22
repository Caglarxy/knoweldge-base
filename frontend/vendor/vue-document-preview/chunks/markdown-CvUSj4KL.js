import { G as Ae, r as E, g as _, u as Pn, H as Ot, x as wi, I as Fi, w as $, o as te, l as _e, k as z, d as H, J as ke, p as m, K as Yn, B as pe, m as Ct, e as ce, v as he, C as De, s as dt, i as fe, L as Yl, A as Ed, z as Ke, T as Bd, M as xd, N as rl, F as vt, O as _d, E as Sd, P as Id, a as Ut, c as sn, q as Md, b as Ea, f as Bn, Q as Nd, h as Td, n as dr, j as Cs, t as bs } from "./main-BwbGundo.js";
import { c as Od, g as ki } from "./_commonjs-dynamic-modules-BAefz3vp.js";
var Rd = {
  name: "en-US",
  client: {
    common: {
      close: "Close",
      invalidSidebar: "Invalid sidebar resource",
      loading: "Loading…",
      poweredBy: "Powered by @deot/docs",
      resourceRequestFailed: "Resource request failed",
      yes: "Yes"
    },
    footer: {
      resources: "Resources",
      vueComponents: "@deot/vc | Vue component library",
      http: "@deot/http | HTTP library",
      style: "@deot/style | Style library",
      helper: "@deot/helper | Utilities",
      env: "@deot/env | Web scaffold",
      uni: "@deot/uni | Uni scaffold",
      community: "Community",
      github: "Github",
      feedback: "Feedback",
      reportIssue: "Report an issue",
      requestFeature: "Request a feature",
      changelog: "Changelog",
      more: "More",
      moreResources: "More resources"
    },
    header: {
      brand: "@deot/docs",
      nav: "Navigation",
      openSidebar: "Open sidebar",
      closeSidebar: "Close sidebar",
      database: "Open resource database",
      playgroundResource: "Manage Playground resources",
      editor: "Customize this page",
      tools: "Tools",
      language: "Switch language",
      repository: "Open repository",
      switchToDark: "Switch to dark theme",
      switchToLight: "Switch to light theme"
    },
    home: {},
    demos: {
      title: "Renderer demos",
      subtitle: "Reference compositions of built-in modules. Open a card to enter Combo.",
      open: "Open demo",
      openEditor: "Open editor",
      editor: "Blank editor",
      editorHint: "Open the Renderer editor on an empty canvas.",
      back: "Back to catalog"
    },
    search: {
      trigger: "Search docs",
      untitled: "Untitled",
      dialogLabel: "Search documentation",
      placeholder: "Search docs",
      clearQuery: "Clear query",
      close: "Close search",
      searching: "Searching…",
      documentation: "Documentation",
      noResults: "No results found.",
      noCachedDocuments: "No cached documents yet.",
      recent: "Recent",
      noRecent: "No recent searches.",
      pin: "Pin history",
      unpin: "Unpin history",
      remove: "Remove history",
      navigateHint: "to navigate",
      selectHint: "to select",
      closeHint: "to close",
      historyLoadFailed: "Unable to load search history.",
      queryFailed: "Unable to search cached documents.",
      historyUpdateFailed: "Unable to update search history.",
      historyRemoveFailed: "Unable to remove search history."
    },
    database: {
      title: "IndexedDB Resources",
      back: "Back",
      home: "Home",
      records: "{count} records",
      cache: "cache {size}",
      columns: "Columns",
      refresh: "Refresh",
      updateAll: "Update all",
      prefetch: "Prefetch",
      clear: "Clear",
      prune: "Prune",
      url: "URL",
      source: "Source",
      contentStatus: "Content Status",
      requestStatus: "Request Status",
      namespace: "Namespace",
      language: "Language",
      type: "Type",
      hash: "Hash",
      content: "Content",
      updated: "Updated",
      checked: "Checked",
      accessed: "Accessed",
      previous: "Previous",
      actions: "Actions",
      update: "Update",
      delete: "Delete",
      loadFailed: "Load failed",
      operationFailed: "Operation failed",
      refreshed: "Refreshed",
      reloadFailed: "Reload failed",
      updatedSource: "{source} updated",
      deletedSource: "{source} deleted",
      updatedAll: "Updated all",
      clearedAll: "Cleared all",
      prefetchSummary: "Prefetch: {fulfilled} ok, {rejected} failed",
      prefetched: "Prefetched {total}",
      prefetchFailed: "Prefetch failed",
      pruned: "Pruned {count}",
      pruneFailed: "Garbage cleanup failed"
    },
    playgroundResource: {
      title: "Playground Resource",
      records: "{count} entries",
      cache: "cache {size}",
      hint: "Override module imports and preview CSS. `$docs.modules` and `$docs.styles` are this page's site defaults. Default URLs and probe results are stored locally; a row is overridden only when its current URL differs from the default. Saved overrides apply to newly opened Playgrounds; mounted previews do not hot-reload. Rolling back an override restores the default URL.",
      back: "Back",
      home: "Home",
      columns: "Columns",
      refresh: "Refresh",
      prefetch: "Prefetch",
      clear: "Clear",
      kind: "Type",
      kindImport: "Import",
      kindStyle: "CSS",
      alias: "Name",
      defaultUrl: "Default URL",
      currentUrl: "Current URL",
      status: "Override",
      overridden: "Overridden",
      default: "Default",
      requestStatus: "Request status",
      updated: "Updated",
      checked: "Checked",
      actions: "Actions",
      edit: "Edit",
      save: "Save",
      rollback: "Rollback",
      rollbackSkipped: "Already using the default URL",
      retry: "Retry",
      urlPlaceholder: "https://cdn.example.com/pkg/index.js",
      editTitle: "Edit URL",
      loadFailed: "Load failed",
      operationFailed: "Operation failed",
      saveFailed: "Save failed",
      rollbackFailed: "Rollback failed",
      retryFailed: "Retry failed",
      prefetchFailed: "Prefetch failed",
      probeFailed: "Probe failed",
      refreshed: "Refreshed",
      cleared: "Cleared overrides",
      saved: "{alias} saved",
      rollbackDone: "{alias} rolled back",
      retried: "{alias} retried",
      prefetched: "Prefetched {total} entries",
      prefetchSummary: "Prefetch: {fulfilled} succeeded, {rejected} failed"
    },
    paging: {
      search: "Search",
      reset: "Reset",
      enter: "Enter",
      select: "Select",
      pickDate: "Pick date",
      min: "Min",
      max: "Max"
    }
  },
  markdown: { indicator: {
    label: "Document indicator",
    untitled: "Untitled section",
    document: "Document"
  } },
  playground: {
    common: {
      copy: "Copy",
      copyCode: "Copy code",
      copyCurrentFile: "Copy current file",
      close: "Close"
    },
    runtime: {
      preview: "Runtime preview",
      files: "File preview",
      auto: "Auto",
      viewport: "Viewport: {value}",
      viewportMenu: "Runtime viewport",
      refresh: "Reload preview",
      editFiles: "Edit files",
      importMapTip: "Check the import path, or add an Import Map entry for this dependency."
    },
    files: { entry: "Entry" },
    editor: {
      entry: "Entry file",
      entryCannotDelete: "The entry file cannot be deleted",
      confirmDelete: "Delete {filename}?",
      deleteFile: "Delete file",
      createFile: "Create file",
      setEntry: "Set as entry"
    },
    validation: {
      entryMissing: "Entry file {filename} does not exist",
      filenameRequired: "Enter a filename",
      filenameRelative: "The filename must be a relative POSIX path",
      filenameSegments: "The path cannot contain empty, . or .. segments",
      fileTypeUnsupported: "Unsupported file type",
      filenameExists: "The filename already exists"
    }
  },
  renderer: {
    common: {
      loading: "Loading…",
      unknownModule: "Unknown module: {type}",
      unsupportedVersion: "Unsupported module version: {version}",
      migrationUnavailable: "Module migration is unavailable",
      back: "Back",
      untitledPage: "Untitled Page",
      undo: "Undo",
      redo: "Redo",
      import: "Import",
      export: "Export",
      preview: "Preview",
      save: "Save",
      saved: "Saved",
      page: "Page",
      blocks: "{count} blocks",
      close: "Close",
      validationFailed: "Document validation failed",
      draftRestoreFailed: "Unable to restore the local draft",
      clearDraft: "Clear draft",
      draftCleared: "Local draft cleared",
      draftClearFailed: "Unable to clear the local draft"
    },
    modules: {
      title: "Modules",
      basicGroup: "Basic",
      docsGroup: "Docs",
      customGroup: "Custom",
      addFailed: "Unable to add this module",
      maxInstances: "Only {count} {type} module(s) are allowed",
      dragTip: "Drag modules below onto the canvas to place them",
      space: "Space",
      titleModule: "Title",
      text: "Text",
      list: "List",
      image: "Image",
      area: "Image hotspots",
      actions: "Actions",
      hero: "Hero",
      features: "Features",
      steps: "Steps",
      faq: "FAQ",
      cta: "Call to action",
      ads: "Ads",
      page: "Page",
      selection: "Selection",
      markdown: "Markdown",
      sfc: "Remote SFC"
    },
    inspector: {
      title: "Properties",
      page: "Page",
      spacing: "Spacing",
      placement: "Placement",
      module: "Module",
      margin: "Margin",
      padding: "Padding",
      position: "Position",
      dimensions: "Dimensions",
      marginTop: "Margin top",
      marginBottom: "Margin bottom",
      paddingTop: "Padding top",
      paddingBottom: "Padding bottom",
      paddingLeft: "Padding left",
      paddingRight: "Padding right",
      fullWidth: "Fill screen",
      layout: "Layout",
      appearance: "Appearance",
      borderRadius: "Corner radius",
      independentCorners: "Independent corners",
      borderRadiusTopLeft: "Top left radius",
      borderRadiusTopRight: "Top right radius",
      borderRadiusBottomRight: "Bottom right radius",
      borderRadiusBottomLeft: "Bottom left radius",
      delete: "Delete",
      loading: "Loading…",
      selection: "Group"
    },
    editor: {
      addItem: "Add item",
      removeItem: "Remove item",
      reorder: "Reorder",
      mode: "Mode",
      sortable: "Sortable",
      draggable: "Draggable",
      maxWidth: "Maximum width",
      referenceWidth: "Reference width",
      minHeight: "Minimum height",
      canvasWidth: "Canvas width",
      canvasHeight: "Canvas height",
      background: "Background",
      actions: "Actions",
      label: "Label",
      target: "Target",
      variant: "Variant",
      columns: "Columns",
      gap: "Gap",
      cards: "Cards",
      title: "Title",
      description: "Description",
      eyebrow: "Tag",
      source: "Source",
      sourceHint: "Path, https or base64",
      markdownSourceHint: "Relative path or https URL",
      markdownContent: "Markdown content",
      markdownContentHint: "Inline Markdown, used instead of the source",
      paintAreas: "Draw hotspots",
      areas: "Hotspots",
      areaItem: "Hotspot {index}",
      areaMax: "Up to {count}",
      areaNeedImage: "Upload an image first",
      addArea: "Add hotspot",
      darkSource: "Dark source",
      alt: "Alternative text",
      fit: "Fit",
      borderRadius: "Border radius",
      eager: "Eager loading",
      ordered: "Ordered",
      items: "Items",
      height: "Height",
      text: "Text",
      fontSize: "Font size",
      fontWeight: "Font weight",
      lineHeight: "Line height",
      letterSpacing: "Letter spacing",
      color: "Color",
      align: "Align",
      left: "Left",
      center: "Center",
      heading: "Heading",
      accent: "Accent",
      accentSecondary: "Secondary accent",
      showVisual: "Show visual",
      highlights: "Highlights",
      value: "Value",
      badge: "Badge",
      icon: "Icon",
      iconHint: "Type, https or base64",
      pickImage: "Upload image",
      steps: "Steps",
      question: "Question",
      answer: "Answer",
      solid: "Solid",
      outline: "Outline",
      ghost: "Ghost",
      link: "Link",
      size: "Size",
      small: "Small",
      medium: "Medium",
      large: "Large",
      textColor: "Text color",
      layout: "Layout",
      tile: "Tile",
      scroll: "Scroll",
      banner: "Banner",
      card: "Card",
      poster: "Poster",
      notice: "Notice",
      speed: "Scroll interval",
      ads: "Ads"
    },
    canvas: {
      scale: "Scale",
      layers: "Layers",
      forward: "Move forward",
      backward: "Move backward",
      fit: "Fit",
      grid: "Grid",
      ruler: "Ruler",
      guides: "Guides",
      showGuidesHint: "Click to show guides",
      hideGuidesHint: "Click to hide guides",
      deleteGuide: "Double-click to delete the guide",
      map: "Map",
      dropModules: "Drop modules here",
      releaseToInsert: "Release to insert the module here",
      resize: "Resize {handle}",
      rotate: "Rotate",
      bringToFront: "Bring to front",
      sendToBack: "Send to back",
      ungroup: "Ungroup",
      lock: "Lock",
      unlock: "Unlock",
      copy: "Copy",
      paste: "Paste",
      alreadyTop: "Already at the top",
      alreadyBottom: "Already at the bottom"
    },
    json: {
      title: "Document JSON",
      tree: "Tree",
      source: "Source",
      apply: "Apply",
      cancel: "Cancel",
      duplicateKey: "Duplicate key: {key}",
      keyLocked: "This protocol key cannot be renamed",
      valueLocked: "This value cannot be changed",
      kindLocked: "This type cannot be changed",
      requiredField: "This required field cannot be removed",
      rootLocked: "Document root keys cannot be added or removed"
    }
  }
}, Pd = {
  name: "zh-CN",
  client: {
    common: {
      close: "关闭",
      invalidSidebar: "侧边栏数据无效",
      loading: "加载中…",
      poweredBy: "由 @deot/docs 提供支持",
      resourceRequestFailed: "资源请求失败",
      yes: "是"
    },
    footer: {
      resources: "资源",
      vueComponents: "@deot/vc | Vue组件库",
      http: "@deot/http | 网络库",
      style: "@deot/style | 样式库",
      helper: "@deot/helper | 工具库",
      env: "@deot/env | Web脚手架",
      uni: "@deot/uni | Uni脚手架",
      community: "社区",
      github: "Github",
      feedback: "反馈",
      reportIssue: "反馈问题",
      requestFeature: "提交需求",
      changelog: "Changelog",
      more: "更多",
      moreResources: "更多资源"
    },
    header: {
      brand: "@deot/docs",
      nav: "导航",
      openSidebar: "打开侧边栏",
      closeSidebar: "关闭侧边栏",
      database: "打开资源数据库",
      playgroundResource: "管理 Playground 资源",
      editor: "装修当前页面",
      tools: "工具",
      language: "切换语言",
      repository: "打开仓库",
      switchToDark: "切换至深色主题",
      switchToLight: "切换至浅色主题"
    },
    home: {},
    demos: {
      title: "Renderer 演示",
      subtitle: "对照内置模块组合。点击卡片进入 Combo。",
      open: "打开演示",
      openEditor: "打开编辑器",
      editor: "空白编辑器",
      editorHint: "进入 Renderer 编辑器，从空画布开始。",
      back: "返回目录"
    },
    search: {
      trigger: "搜索文档",
      untitled: "未命名文档",
      dialogLabel: "搜索文档",
      placeholder: "搜索文档",
      clearQuery: "清空",
      close: "关闭搜索",
      searching: "搜索中…",
      documentation: "文档",
      noResults: "未找到结果。",
      noCachedDocuments: "暂无已缓存文档。",
      recent: "最近访问",
      noRecent: "暂无搜索历史。",
      pin: "收藏历史",
      unpin: "取消收藏",
      remove: "删除历史",
      navigateHint: "切换",
      selectHint: "选择",
      closeHint: "关闭",
      historyLoadFailed: "无法加载搜索历史。",
      queryFailed: "无法搜索已缓存文档。",
      historyUpdateFailed: "无法更新搜索历史。",
      historyRemoveFailed: "无法删除搜索历史。"
    },
    database: {
      title: "IndexedDB 资源",
      back: "返回",
      home: "回到首页",
      records: "{count} 条记录",
      cache: "缓存 {size}",
      columns: "列",
      refresh: "刷新",
      updateAll: "全部更新",
      prefetch: "预加载",
      clear: "清空",
      prune: "清理垃圾",
      url: "URL",
      source: "来源",
      contentStatus: "内容状态",
      requestStatus: "请求状态",
      namespace: "命名空间",
      language: "语言",
      type: "类型",
      hash: "Hash",
      content: "内容",
      updated: "更新时间",
      checked: "检查时间",
      accessed: "访问时间",
      previous: "历史版本",
      actions: "操作",
      update: "更新",
      delete: "删除",
      loadFailed: "加载失败",
      operationFailed: "操作失败",
      refreshed: "已刷新",
      reloadFailed: "更新失败",
      updatedSource: "{source} 已更新",
      deletedSource: "{source} 已删除",
      updatedAll: "已全部更新",
      clearedAll: "已全部清空",
      prefetchSummary: "预加载：{fulfilled} 个成功，{rejected} 个失败",
      prefetched: "已预加载 {total} 个资源",
      prefetchFailed: "预加载失败",
      pruned: "已清理 {count} 个资源",
      pruneFailed: "垃圾清理失败"
    },
    playgroundResource: {
      title: "Playground 资源",
      records: "{count} 项",
      cache: "缓存 {size}",
      hint: "可覆盖模块 import 与预览 CSS。$docs.modules 与 $docs.styles 是本页的站点默认；默认地址与探测结果都会写入本地库；当前地址与默认不同才算覆盖。保存后对新打开的 Playground 生效，已挂载的预览不会热更新。回滚覆盖后回退默认地址。",
      back: "返回",
      home: "回到首页",
      columns: "列",
      refresh: "刷新",
      prefetch: "探测",
      clear: "清空",
      kind: "类型",
      kindImport: "Import",
      kindStyle: "CSS",
      alias: "名称",
      defaultUrl: "默认地址",
      currentUrl: "当前地址",
      status: "覆盖状态",
      overridden: "已覆盖",
      default: "默认",
      requestStatus: "探测状态",
      updated: "更新时间",
      checked: "探测时间",
      actions: "操作",
      edit: "编辑",
      save: "保存",
      rollback: "回滚",
      rollbackSkipped: "当前已是默认地址，无需回滚",
      retry: "重试",
      urlPlaceholder: "https://cdn.example.com/pkg/index.js",
      editTitle: "编辑地址",
      loadFailed: "加载失败",
      operationFailed: "操作失败",
      saveFailed: "保存失败",
      rollbackFailed: "回滚失败",
      retryFailed: "重试失败",
      prefetchFailed: "探测失败",
      probeFailed: "探测失败",
      refreshed: "已刷新",
      cleared: "已清空覆盖",
      saved: "{alias} 已保存",
      rollbackDone: "{alias} 已回滚",
      retried: "{alias} 已重试",
      prefetched: "已探测 {total} 项",
      prefetchSummary: "探测：{fulfilled} 个成功，{rejected} 个失败"
    },
    paging: {
      search: "搜索",
      reset: "重置",
      enter: "请输入",
      select: "请选择",
      pickDate: "选择日期",
      min: "最小值",
      max: "最大值"
    }
  },
  markdown: { indicator: {
    label: "文档指示器",
    untitled: "未命名章节",
    document: "文档"
  } },
  playground: {
    common: {
      copy: "复制",
      copyCode: "复制代码",
      copyCurrentFile: "复制当前文件",
      close: "关闭"
    },
    runtime: {
      preview: "运行时预览",
      files: "文件预览",
      auto: "自适应",
      viewport: "视口：{value}",
      viewportMenu: "运行时视口",
      refresh: "重新加载预览",
      editFiles: "编辑文件",
      importMapTip: "请检查导入路径，或为该依赖补充 Import Map。"
    },
    files: { entry: "入口" },
    editor: {
      entry: "入口文件",
      entryCannotDelete: "入口文件不能删除",
      confirmDelete: "确认删除 {filename}？",
      deleteFile: "删除文件",
      createFile: "新建文件",
      setEntry: "设为入口"
    },
    validation: {
      entryMissing: "入口文件 {filename} 不存在",
      filenameRequired: "请输入文件名",
      filenameRelative: "文件名必须是相对 POSIX 路径",
      filenameSegments: "文件路径不能包含空段、. 或 ..",
      fileTypeUnsupported: "不支持该文件类型",
      filenameExists: "文件名已存在"
    }
  },
  renderer: {
    common: {
      loading: "加载中…",
      unknownModule: "未知模块：{type}",
      unsupportedVersion: "不支持的模块版本：{version}",
      migrationUnavailable: "模块缺少迁移能力",
      back: "返回",
      untitledPage: "未命名页面",
      undo: "撤销",
      redo: "重做",
      import: "导入",
      export: "导出",
      preview: "预览",
      save: "保存",
      saved: "已保存",
      page: "页面",
      blocks: "{count} 个模块",
      close: "关闭",
      validationFailed: "页面校验失败",
      draftRestoreFailed: "无法恢复本地草稿",
      clearDraft: "清除草稿",
      draftCleared: "已清除本地草稿",
      draftClearFailed: "无法清除本地草稿"
    },
    modules: {
      title: "模块",
      basicGroup: "基础模块",
      docsGroup: "文档模块",
      customGroup: "业务模块",
      addFailed: "无法添加该模块",
      maxInstances: "{type} 模块最多允许 {count} 个",
      dragTip: "请拖动下方组件到指定位置设置",
      space: "间距",
      titleModule: "标题",
      text: "文本",
      list: "列表",
      image: "图片",
      area: "图片热区",
      actions: "操作区",
      hero: "首屏",
      features: "特性",
      steps: "步骤",
      faq: "问答",
      cta: "行动条",
      ads: "广告位",
      page: "页面",
      selection: "组合",
      markdown: "Markdown",
      sfc: "远程 SFC"
    },
    inspector: {
      title: "属性",
      page: "页面",
      spacing: "间距",
      placement: "位置",
      module: "模块",
      margin: "外边距",
      padding: "内边距",
      position: "坐标",
      dimensions: "尺寸",
      marginTop: "上外边距",
      marginBottom: "下外边距",
      paddingTop: "上内边距",
      paddingBottom: "下内边距",
      paddingLeft: "左内边距",
      paddingRight: "右内边距",
      fullWidth: "铺满屏幕",
      layout: "布局",
      appearance: "外观",
      borderRadius: "圆角",
      independentCorners: "独立圆角",
      borderRadiusTopLeft: "左上圆角",
      borderRadiusTopRight: "右上圆角",
      borderRadiusBottomRight: "右下圆角",
      borderRadiusBottomLeft: "左下圆角",
      delete: "删除",
      loading: "加载中…",
      selection: "组合选中"
    },
    editor: {
      addItem: "添加一项",
      removeItem: "删除该项",
      reorder: "拖动排序",
      mode: "布局模式",
      sortable: "排序布局",
      draggable: "自由布局",
      maxWidth: "最大宽度",
      referenceWidth: "参考宽度",
      minHeight: "最小高度",
      canvasWidth: "画布宽度",
      canvasHeight: "画布高度",
      background: "背景",
      actions: "操作项",
      label: "文案",
      target: "目标",
      variant: "样式",
      columns: "列数",
      gap: "间距",
      cards: "卡片",
      title: "标题",
      description: "描述",
      eyebrow: "标签",
      source: "资源地址",
      sourceHint: "路径、https 或 base64",
      markdownSourceHint: "相对路径或 https 地址",
      markdownContent: "Markdown 内容",
      markdownContentHint: "直接填写 Markdown，优先于资源地址",
      paintAreas: "绘制热区",
      areas: "热区",
      areaItem: "热区{index}",
      areaMax: "最多 {count} 个",
      areaNeedImage: "请先上传图片",
      addArea: "添加热区",
      darkSource: "暗色图片",
      alt: "替代文本",
      fit: "填充方式",
      borderRadius: "圆角",
      eager: "立即加载",
      ordered: "有序列表",
      items: "列表项",
      height: "高度",
      text: "文本",
      fontSize: "字号",
      fontWeight: "字重",
      lineHeight: "行高",
      letterSpacing: "字间距",
      color: "颜色",
      align: "对齐",
      left: "居左",
      center: "居中",
      heading: "标题级别",
      accent: "强调色",
      accentSecondary: "辅助色",
      showVisual: "装饰图形",
      highlights: "数据要点",
      value: "数值",
      badge: "标签",
      icon: "图标",
      iconHint: "类型、https 或 base64",
      pickImage: "上传图片",
      steps: "步骤",
      question: "问题",
      answer: "回答",
      solid: "实心",
      outline: "描边",
      ghost: "浅底",
      link: "链接",
      size: "尺寸",
      small: "小",
      medium: "中",
      large: "大",
      textColor: "文字色",
      layout: "排列",
      tile: "平铺",
      scroll: "滚动",
      banner: "横幅",
      card: "卡片",
      poster: "海报",
      notice: "通知条",
      speed: "滚动间隔",
      ads: "广告"
    },
    canvas: {
      scale: "缩放",
      layers: "图层",
      forward: "上移一层",
      backward: "下移一层",
      fit: "适应",
      grid: "网格",
      ruler: "标尺",
      guides: "辅助线",
      showGuidesHint: "单击显示辅助线",
      hideGuidesHint: "单击隐藏辅助线",
      deleteGuide: "双击删除参考线",
      map: "缩略图",
      dropModules: "拖入模块到这里",
      releaseToInsert: "释放鼠标将模块添加到此处",
      resize: "缩放 {handle}",
      rotate: "旋转",
      bringToFront: "置顶",
      sendToBack: "置底",
      ungroup: "取消组合",
      lock: "锁定",
      unlock: "取消锁定",
      copy: "复制",
      paste: "粘贴",
      alreadyTop: "已经置顶，无需操作",
      alreadyBottom: "已经置底，无需操作"
    },
    json: {
      title: "页面 JSON",
      tree: "树形",
      source: "源码",
      apply: "应用",
      cancel: "取消",
      duplicateKey: "键名重复：{key}",
      keyLocked: "协议键名不可修改",
      valueLocked: "该值不可修改",
      kindLocked: "该类型不可修改",
      requiredField: "必填字段不可删除",
      rootLocked: "文档根键不可增删"
    }
  }
}, Yd = /* @__PURE__ */ new Set([
  "client",
  "markdown",
  "playground",
  "renderer"
]), Hd = (e, t, n) => {
  const a = e.split(".");
  if (!Yd.has(a[0])) return e;
  let r = n;
  for (const l of a) {
    if (!r || typeof r != "object") return e;
    r = r[l];
  }
  return typeof r != "string" ? e : r.replace(/\{(\w+)\}/gu, (l, s) => `${t?.[s] ?? `{${s}}`}`);
}, Wd = (e) => (t, n) => Hd(t, n, Pn(e)), $d = (e) => {
  const t = wi(e) ? e : E(e);
  return {
    locale: t,
    lang: _(() => t.value.name),
    t: Wd(t)
  };
}, Ei = Symbol("docsLocaleContextKey"), Vd = (e, t) => {
  const n = wi(e) ? e : E(e);
  return Ot(Ei, n), n;
}, Bi = (e) => {
  const t = Ae(Ei, E());
  return $d(_(() => Pn(e) || t.value || Rd));
}, hr, ws;
function Ld() {
  if (ws) return hr;
  ws = 1;
  var e = function(h) {
    return t(h) && !n(h);
  };
  function t(g) {
    return !!g && typeof g == "object";
  }
  function n(g) {
    var h = Object.prototype.toString.call(g);
    return h === "[object RegExp]" || h === "[object Date]" || l(g);
  }
  var a = typeof Symbol == "function" && Symbol.for, r = a ? Symbol.for("react.element") : 60103;
  function l(g) {
    return g.$$typeof === r;
  }
  function s(g) {
    return Array.isArray(g) ? [] : {};
  }
  function o(g, h) {
    var f = h && h.clone === !0;
    return f && e(g) ? c(s(g), g, h) : g;
  }
  function i(g, h, f) {
    var p = g.slice();
    return h.forEach(function(A, v) {
      typeof p[v] > "u" ? p[v] = o(A, f) : e(A) ? p[v] = c(g[v], A, f) : g.indexOf(A) === -1 && p.push(o(A, f));
    }), p;
  }
  function u(g, h, f) {
    var p = {};
    return e(g) && Object.keys(g).forEach(function(A) {
      p[A] = o(g[A], f);
    }), Object.keys(h).forEach(function(A) {
      !e(h[A]) || !g[A] ? p[A] = o(h[A], f) : p[A] = c(g[A], h[A], f);
    }), p;
  }
  function c(g, h, f) {
    var p = Array.isArray(h), A = Array.isArray(g), v = f || { arrayMerge: i }, b = p === A;
    if (b)
      if (p) {
        var C = v.arrayMerge || i;
        return C(g, h, f);
      } else
        return u(g, h, f);
    else return o(h, f);
  }
  c.all = function(h, f) {
    if (!Array.isArray(h) || h.length < 2)
      throw new Error("first argument should be an array with at least two elements");
    return h.reduce(function(p, A) {
      return c(p, A, f);
    });
  };
  var d = c;
  return hr = d, hr;
}
var fr, Fs;
function Qd() {
  return Fs || (Fs = 1, fr = class {
    constructor(e) {
      this.parent = e;
    }
    batch(e) {
      return e(this), this;
    }
    end() {
      return this.parent;
    }
  }), fr;
}
var Ar, ks;
function Hl() {
  if (ks) return Ar;
  ks = 1;
  const e = Ld(), t = Qd();
  return Ar = class extends t {
    constructor(n) {
      super(n), this.store = /* @__PURE__ */ new Map();
    }
    extend(n) {
      return this.shorthands = n, n.forEach((a) => {
        this[a] = (r) => this.set(a, r);
      }), this;
    }
    clear() {
      return this.store.clear(), this;
    }
    delete(n) {
      return this.store.delete(n), this;
    }
    order() {
      const n = [...this.store].reduce((l, [s, o]) => (l[s] = o, l), {}), a = Object.keys(n), r = [...a];
      return a.forEach((l) => {
        if (!n[l])
          return;
        const { __before: s, __after: o } = n[l];
        s && r.includes(s) ? (r.splice(r.indexOf(l), 1), r.splice(r.indexOf(s), 0, l)) : o && r.includes(o) && (r.splice(r.indexOf(l), 1), r.splice(r.indexOf(o) + 1, 0, l));
      }), { entries: n, order: r };
    }
    entries() {
      const { entries: n, order: a } = this.order();
      if (a.length)
        return n;
    }
    values() {
      const { entries: n, order: a } = this.order();
      return a.map((r) => n[r]);
    }
    get(n) {
      return this.store.get(n);
    }
    getOrCompute(n, a) {
      return this.has(n) || this.set(n, a()), this.get(n);
    }
    has(n) {
      return this.store.has(n);
    }
    set(n, a) {
      return this.store.set(n, a), this;
    }
    merge(n, a = []) {
      return Object.keys(n).forEach((r) => {
        if (a.includes(r))
          return;
        const l = n[r];
        !Array.isArray(l) && typeof l != "object" || l === null || !this.has(r) ? this.set(r, l) : this.set(r, e(this.get(r), l));
      }), this;
    }
    clean(n) {
      return Object.keys(n).reduce((a, r) => {
        const l = n[r];
        return l === void 0 || Array.isArray(l) && !l.length || Object.prototype.toString.call(l) === "[object Object]" && !Object.keys(l).length || (a[r] = l), a;
      }, {});
    }
    when(n, a = Function.prototype, r = Function.prototype) {
      return n ? a(this) : r(this), this;
    }
  }, Ar;
}
var gr, Es;
function Kd() {
  return Es || (Es = 1, gr = (e) => class extends e {
    before(t) {
      if (this.__after)
        throw new Error(
          `Unable to set .before(${JSON.stringify(
            t
          )}) with existing value for .after()`
        );
      return this.__before = t, this;
    }
    after(t) {
      if (this.__before)
        throw new Error(
          `Unable to set .after(${JSON.stringify(
            t
          )}) with existing value for .before()`
        );
      return this.__after = t, this;
    }
    merge(t, n = []) {
      return t.before && this.before(t.before), t.after && this.after(t.after), super.merge(t, [...n, "before", "after"]);
    }
  }), gr;
}
var mr, Bs;
function Gd() {
  if (Bs) return mr;
  Bs = 1;
  const e = Hl();
  return mr = Kd()(class extends e {
    constructor(a) {
      super(a), this.extend(["init"]), this.init((r, l = []) => ({ plugin: r, args: l }));
    }
    use(a, r = []) {
      return this.set("plugin", a).set("args", r);
    }
    tap(a) {
      return this.set("args", a(this.get("args") || [])), this;
    }
    merge(a, r = []) {
      return "plugin" in a && this.set("plugin", a.plugin), "args" in a && this.set("args", a.args), super.merge(a, [...r, "args", "plugin"]);
    }
    toConfig() {
      return this.get("init")(this.get("plugin"), this.get("args"));
    }
  }), mr;
}
var pr, xs;
function jd() {
  if (xs) return pr;
  xs = 1;
  const e = Hl();
  return pr = class extends e {
    constructor(t) {
      super(t), this.extend([
        "html",
        "xhtmlOut",
        "breaks",
        "langPrefix",
        "linkify",
        "typographer",
        "quotes",
        "highlight"
      ]);
    }
  }, pr;
}
var vr, _s;
function Ud() {
  if (_s) return vr;
  _s = 1;
  const e = Hl(), t = Gd(), n = jd();
  return vr = class extends e {
    constructor() {
      super(), this.options = new n(this), this.plugins = new e(this);
    }
    toConfig() {
      return this.clean(Object.assign(this.entries() || {}, {
        options: this.options.entries(),
        plugins: this.plugins.values().map((r) => r.toConfig())
      }));
    }
    plugin(r) {
      return this.plugins.has(r) || this.plugins.set(r, new t(this)), this.plugins.get(r);
    }
    toMd(r, l = {}) {
      const { options: s, plugins: o } = this.toConfig();
      if (!r) {
        try {
          r = require.resolve("markdown-it");
        } catch {
          throw new Error("Failed to detect markdown-it has been installed");
        }
        r = Od(r);
      }
      const i = r(Object.assign(l, s));
      return o.reduce((u, { plugin: c, args: d }) => u.use(c, ...d), i);
    }
  }, vr;
}
var Zd = Ud();
const Jd = /* @__PURE__ */ ki(Zd);
var Ss = !1, hn = { false: "push", true: "unshift", after: "push", before: "unshift" }, Ia = { isPermalinkSymbol: !0 };
function ll(e, t, n, a) {
  var r;
  if (!Ss) {
    var l = "Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#permalinks";
    typeof process == "object" && process && process.emitWarning ? process.emitWarning(l) : console.warn(l), Ss = !0;
  }
  var s = [Object.assign(new n.Token("link_open", "a", 1), { attrs: [].concat(t.permalinkClass ? [["class", t.permalinkClass]] : [], [["href", t.permalinkHref(e, n)]], Object.entries(t.permalinkAttrs(e, n))) }), Object.assign(new n.Token("html_block", "", 0), { content: t.permalinkSymbol, meta: Ia }), new n.Token("link_close", "a", -1)];
  t.permalinkSpace && n.tokens[a + 1].children[hn[t.permalinkBefore]](Object.assign(new n.Token("text", "", 0), { content: " " })), (r = n.tokens[a + 1].children)[hn[t.permalinkBefore]].apply(r, s);
}
function xi(e) {
  return "#" + e;
}
function _i(e) {
  return {};
}
var zd = { class: "header-anchor", symbol: "#", renderHref: xi, renderAttrs: _i };
function ta(e) {
  function t(n) {
    return n = Object.assign({}, t.defaults, n), function(a, r, l, s) {
      return e(a, n, r, l, s);
    };
  }
  return t.defaults = Object.assign({}, zd), t.renderPermalinkImpl = e, t;
}
function Wl(e) {
  var t = [], n = e.filter(function(a) {
    if (a[0] !== "class") return !0;
    t.push(a[1]);
  });
  return t.length > 0 && n.unshift(["class", t.join(" ")]), n;
}
var Ka = ta(function(e, t, n, a, r) {
  var l, s = [Object.assign(new a.Token("link_open", "a", 1), { attrs: Wl([].concat(t.class ? [["class", t.class]] : [], [["href", t.renderHref(e, a)]], t.ariaHidden ? [["aria-hidden", "true"]] : [], Object.entries(t.renderAttrs(e, a)))) }), Object.assign(new a.Token("html_inline", "", 0), { content: t.symbol, meta: Ia }), new a.Token("link_close", "a", -1)];
  if (t.space) {
    var o = typeof t.space == "string" ? t.space : " ";
    a.tokens[r + 1].children[hn[t.placement]](Object.assign(new a.Token(typeof t.space == "string" ? "html_inline" : "text", "", 0), { content: o }));
  }
  (l = a.tokens[r + 1].children)[hn[t.placement]].apply(l, s);
});
Object.assign(Ka.defaults, { space: !0, placement: "after", ariaHidden: !1 });
var Gt = ta(Ka.renderPermalinkImpl);
Gt.defaults = Object.assign({}, Ka.defaults, { ariaHidden: !0 });
var Si = ta(function(e, t, n, a, r) {
  var l = [Object.assign(new a.Token("link_open", "a", 1), { attrs: Wl([].concat(t.class ? [["class", t.class]] : [], [["href", t.renderHref(e, a)]], Object.entries(t.renderAttrs(e, a)))) })].concat(t.safariReaderFix ? [new a.Token("span_open", "span", 1)] : [], a.tokens[r + 1].children, t.safariReaderFix ? [new a.Token("span_close", "span", -1)] : [], [new a.Token("link_close", "a", -1)]);
  a.tokens[r + 1].children = l;
});
Object.assign(Si.defaults, { safariReaderFix: !1 });
var Is = ta(function(e, t, n, a, r) {
  var l;
  if (!["visually-hidden", "aria-label", "aria-describedby", "aria-labelledby"].includes(t.style)) throw new Error("`permalink.linkAfterHeader` called with unknown style option `" + t.style + "`");
  if (!["aria-describedby", "aria-labelledby"].includes(t.style) && !t.assistiveText) throw new Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `" + t.style + "` style");
  if (t.style === "visually-hidden" && !t.visuallyHiddenClass) throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");
  var s = a.tokens[r + 1].children.filter(function(d) {
    return d.type === "text" || d.type === "code_inline";
  }).reduce(function(d, g) {
    return d + g.content;
  }, ""), o = [], i = [];
  if (t.class && i.push(["class", t.class]), i.push(["href", t.renderHref(e, a)]), i.push.apply(i, Object.entries(t.renderAttrs(e, a))), t.style === "visually-hidden") {
    if (o.push(Object.assign(new a.Token("span_open", "span", 1), { attrs: [["class", t.visuallyHiddenClass]] }), Object.assign(new a.Token("text", "", 0), { content: t.assistiveText(s) }), new a.Token("span_close", "span", -1)), t.space) {
      var u = typeof t.space == "string" ? t.space : " ";
      o[hn[t.placement]](Object.assign(new a.Token(typeof t.space == "string" ? "html_inline" : "text", "", 0), { content: u }));
    }
    o[hn[t.placement]](Object.assign(new a.Token("span_open", "span", 1), { attrs: [["aria-hidden", "true"]] }), Object.assign(new a.Token("html_inline", "", 0), { content: t.symbol, meta: Ia }), new a.Token("span_close", "span", -1));
  } else o.push(Object.assign(new a.Token("html_inline", "", 0), { content: t.symbol, meta: Ia }));
  t.style === "aria-label" ? i.push(["aria-label", t.assistiveText(s)]) : ["aria-describedby", "aria-labelledby"].includes(t.style) && i.push([t.style, e]);
  var c = [Object.assign(new a.Token("link_open", "a", 1), { attrs: Wl(i) })].concat(o, [new a.Token("link_close", "a", -1)]);
  (l = a.tokens).splice.apply(l, [r + 3, 0].concat(c)), t.wrapper && (a.tokens.splice(r, 0, Object.assign(new a.Token("html_block", "", 0), { content: t.wrapper[0] + `
` })), a.tokens.splice(r + 3 + c.length + 1, 0, Object.assign(new a.Token("html_block", "", 0), { content: t.wrapper[1] + `
` })));
});
function Ms(e, t, n, a) {
  var r = e, l = a;
  if (n && Object.prototype.hasOwnProperty.call(t, r)) throw new Error("User defined `id` attribute `" + e + "` is not unique. Please fix it in your Markdown to continue.");
  for (; Object.prototype.hasOwnProperty.call(t, r); ) r = e + "-" + l, l += 1;
  return t[r] = !0, r;
}
function Zt(e, t) {
  t = Object.assign({}, Zt.defaults, t), e.core.ruler.push("anchor", function(n) {
    for (var a, r = {}, l = n.tokens, s = Array.isArray(t.level) ? (a = t.level, function(d) {
      return a.includes(d);
    }) : /* @__PURE__ */ (function(d) {
      return function(g) {
        return g >= d;
      };
    })(t.level), o = 0; o < l.length; o++) {
      var i = l[o];
      if (i.type === "heading_open" && s(Number(i.tag.substr(1)))) {
        var u = t.getTokensText(l[o + 1].children), c = i.attrGet("id");
        c = c == null ? Ms(c = t.slugifyWithState ? t.slugifyWithState(u, n) : t.slugify(u), r, !1, t.uniqueSlugStartIndex) : Ms(c, r, !0, t.uniqueSlugStartIndex), i.attrSet("id", c), t.tabIndex !== !1 && i.attrSet("tabindex", "" + t.tabIndex), typeof t.permalink == "function" ? t.permalink(c, t, n, o) : (t.permalink || t.renderPermalink && t.renderPermalink !== ll) && t.renderPermalink(c, t, n, o), o = l.indexOf(i), t.callback && t.callback(i, { slug: c, title: u });
      }
    }
  });
}
Object.assign(Is.defaults, { style: "visually-hidden", space: !0, placement: "after", wrapper: null }), Zt.permalink = { __proto__: null, legacy: ll, renderHref: xi, renderAttrs: _i, makePermalink: ta, linkInsideHeader: Ka, ariaHidden: Gt, headerLink: Si, linkAfterHeader: Is }, Zt.defaults = { level: 1, slugify: function(e) {
  return encodeURIComponent(String(e).trim().toLowerCase().replace(/\s+/g, "-"));
}, uniqueSlugStartIndex: 1, tabIndex: "-1", getTokensText: function(e) {
  return e.filter(function(t) {
    return ["text", "code_inline"].includes(t.type);
  }).map(function(t) {
    return t.content;
  }).join("");
}, permalink: !1, renderPermalink: ll, permalinkClass: Gt.defaults.class, permalinkSpace: Gt.defaults.space, permalinkSymbol: "¶", permalinkBefore: Gt.defaults.placement === "before", permalinkHref: Gt.defaults.renderHref, permalinkAttrs: Gt.defaults.renderAttrs }, Zt.default = Zt;
function yr(e, t, n) {
  function a(g) {
    return g.trim().split(" ", 2)[0] === t;
  }
  function r(g, h, f, p, A) {
    return g[h].nesting === 1 && g[h].attrJoin("class", t), A.renderToken(g, h, f, p, A);
  }
  n = n || {};
  const l = 3, s = n.marker || ":", o = s.charCodeAt(0), i = s.length, u = n.validate || a, c = n.render || r;
  function d(g, h, f, p) {
    let A, v = !1, b = g.bMarks[h] + g.tShift[h], C = g.eMarks[h];
    if (o !== g.src.charCodeAt(b))
      return !1;
    for (A = b + 1; A <= C && s[(A - b) % i] === g.src[A]; A++)
      ;
    const D = Math.floor((A - b) / i);
    if (D < l)
      return !1;
    A -= (A - b) % i;
    const B = g.src.slice(b, A), y = g.src.slice(A, C);
    if (!u(y, B))
      return !1;
    if (p)
      return !0;
    let x = h;
    for (; x++, !(x >= f || (b = g.bMarks[x] + g.tShift[x], C = g.eMarks[x], b < C && g.sCount[x] < g.blkIndent)); )
      if (o === g.src.charCodeAt(b) && !(g.sCount[x] - g.blkIndent >= 4)) {
        for (A = b + 1; A <= C && s[(A - b) % i] === g.src[A]; A++)
          ;
        if (!(Math.floor((A - b) / i) < D) && (A -= (A - b) % i, A = g.skipSpaces(A), !(A < C))) {
          v = !0;
          break;
        }
      }
    const S = g.parentType, I = g.lineMax;
    g.parentType = "container", g.lineMax = x;
    const P = g.push("container_" + t + "_open", "div", 1);
    P.markup = B, P.block = !0, P.info = y, P.map = [h, x], g.md.block.tokenize(g, h + 1, x);
    const W = g.push("container_" + t + "_close", "div", -1);
    return W.markup = g.src.slice(b, A), W.block = !0, g.parentType = S, g.lineMax = I, g.line = x + (v ? 1 : 0), !0;
  }
  e.block.ruler.before("fence", "container_" + t, d, {
    alt: ["paragraph", "reference", "blockquote", "list"]
  }), e.renderer.rules["container_" + t + "_open"] = c, e.renderer.rules["container_" + t + "_close"] = c;
}
const Ns = {};
function Xd(e) {
  let t = Ns[e];
  if (t)
    return t;
  t = Ns[e] = [];
  for (let n = 0; n < 128; n++) {
    const a = String.fromCharCode(n);
    t.push(a);
  }
  for (let n = 0; n < e.length; n++) {
    const a = e.charCodeAt(n);
    t[a] = "%" + ("0" + a.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function fn(e, t) {
  typeof t != "string" && (t = fn.defaultChars);
  const n = Xd(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(a) {
    let r = "";
    for (let l = 0, s = a.length; l < s; l += 3) {
      const o = parseInt(a.slice(l + 1, l + 3), 16);
      if (o < 128) {
        r += n[o];
        continue;
      }
      if ((o & 224) === 192 && l + 3 < s) {
        const i = parseInt(a.slice(l + 4, l + 6), 16);
        if ((i & 192) === 128) {
          const u = o << 6 & 1984 | i & 63;
          u < 128 ? r += "��" : r += String.fromCharCode(u), l += 3;
          continue;
        }
      }
      if ((o & 240) === 224 && l + 6 < s) {
        const i = parseInt(a.slice(l + 4, l + 6), 16), u = parseInt(a.slice(l + 7, l + 9), 16);
        if ((i & 192) === 128 && (u & 192) === 128) {
          const c = o << 12 & 61440 | i << 6 & 4032 | u & 63;
          c < 2048 || c >= 55296 && c <= 57343 ? r += "���" : r += String.fromCharCode(c), l += 6;
          continue;
        }
      }
      if ((o & 248) === 240 && l + 9 < s) {
        const i = parseInt(a.slice(l + 4, l + 6), 16), u = parseInt(a.slice(l + 7, l + 9), 16), c = parseInt(a.slice(l + 10, l + 12), 16);
        if ((i & 192) === 128 && (u & 192) === 128 && (c & 192) === 128) {
          let d = o << 18 & 1835008 | i << 12 & 258048 | u << 6 & 4032 | c & 63;
          d < 65536 || d > 1114111 ? r += "����" : (d -= 65536, r += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), l += 9;
          continue;
        }
      }
      r += "�";
    }
    return r;
  });
}
fn.defaultChars = ";/?:@&=+$,#";
fn.componentChars = "";
const Ts = {};
function qd(e) {
  let t = Ts[e];
  if (t)
    return t;
  t = Ts[e] = [];
  for (let n = 0; n < 128; n++) {
    const a = String.fromCharCode(n);
    /^[0-9a-z]$/i.test(a) ? t.push(a) : t.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  }
  for (let n = 0; n < e.length; n++)
    t[e.charCodeAt(n)] = e[n];
  return t;
}
function ht(e, t, n) {
  typeof t != "string" && (n = t, t = ht.defaultChars), typeof n > "u" && (n = !0);
  const a = qd(t);
  let r = "";
  for (let l = 0, s = e.length; l < s; l++) {
    const o = e.charCodeAt(l);
    if (n && o === 37 && l + 2 < s && /^[0-9a-f]{2}$/i.test(e.slice(l + 1, l + 3))) {
      r += e.slice(l, l + 3), l += 2;
      continue;
    }
    if (o < 128) {
      r += a[o];
      continue;
    }
    if (o >= 55296 && o <= 57343) {
      if (o >= 55296 && o <= 56319 && l + 1 < s) {
        const i = e.charCodeAt(l + 1);
        if (i >= 56320 && i <= 57343) {
          r += encodeURIComponent(e[l] + e[l + 1]), l++;
          continue;
        }
      }
      r += "%EF%BF%BD";
      continue;
    }
    r += encodeURIComponent(e[l]);
  }
  return r;
}
ht.defaultChars = ";/?:@&=+$,-_.!~*'()#";
ht.componentChars = "-_.!~*'()";
function sl(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function Ma() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const eh = /^([a-z0-9.+-]+:)/i, th = /:[0-9]*$/, nh = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, ah = ["<", ">", '"', "`", " ", "\r", `
`, "	"], rh = ["{", "}", "|", "\\", "^", "`"].concat(ah), lh = ["'"].concat(rh), Os = ["%", "/", "?", ";", "#"].concat(lh), Rs = ["/", "?", "#"], sh = 255, Ps = /^[+a-z0-9A-Z_-]{0,63}$/, oh = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Ys = {
  javascript: !0,
  "javascript:": !0
}, Hs = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function ol(e, t) {
  if (e && e instanceof Ma) return e;
  const n = new Ma();
  return n.parse(e, t), n;
}
Ma.prototype.parse = function(e, t) {
  let n, a, r, l = e;
  if (l = l.trim(), !t && e.split("#").length === 1) {
    const u = nh.exec(l);
    if (u)
      return this.pathname = u[1], u[2] && (this.search = u[2]), this;
  }
  let s = eh.exec(l);
  if (s && (s = s[0], n = s.toLowerCase(), this.protocol = s, l = l.substr(s.length)), (t || s || l.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = l.substr(0, 2) === "//", r && !(s && Ys[s]) && (l = l.substr(2), this.slashes = !0)), !Ys[s] && (r || s && !Hs[s])) {
    let u = -1;
    for (let f = 0; f < Rs.length; f++)
      a = l.indexOf(Rs[f]), a !== -1 && (u === -1 || a < u) && (u = a);
    let c, d;
    u === -1 ? d = l.lastIndexOf("@") : d = l.lastIndexOf("@", u), d !== -1 && (c = l.slice(0, d), l = l.slice(d + 1), this.auth = c), u = -1;
    for (let f = 0; f < Os.length; f++)
      a = l.indexOf(Os[f]), a !== -1 && (u === -1 || a < u) && (u = a);
    u === -1 && (u = l.length), l[u - 1] === ":" && u--;
    const g = l.slice(0, u);
    l = l.slice(u), this.parseHost(g), this.hostname = this.hostname || "";
    const h = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!h) {
      const f = this.hostname.split(/\./);
      for (let p = 0, A = f.length; p < A; p++) {
        const v = f[p];
        if (v && !v.match(Ps)) {
          let b = "";
          for (let C = 0, D = v.length; C < D; C++)
            v.charCodeAt(C) > 127 ? b += "x" : b += v[C];
          if (!b.match(Ps)) {
            const C = f.slice(0, p), D = f.slice(p + 1), B = v.match(oh);
            B && (C.push(B[1]), D.unshift(B[2])), D.length && (l = D.join(".") + l), this.hostname = C.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > sh && (this.hostname = ""), h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const o = l.indexOf("#");
  o !== -1 && (this.hash = l.substr(o), l = l.slice(0, o));
  const i = l.indexOf("?");
  return i !== -1 && (this.search = l.substr(i), l = l.slice(0, i)), l && (this.pathname = l), Hs[n] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Ma.prototype.parseHost = function(e) {
  let t = th.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const ih = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: fn,
  encode: ht,
  format: sl,
  parse: ol
}, Symbol.toStringTag, { value: "Module" })), Ii = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Mi = /[\0-\x1F\x7F-\x9F]/, uh = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, $l = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDED0\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]/, Ni = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD803[\uDD8E\uDD8F\uDED1-\uDED8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA]/, Ti = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Ii,
  Cc: Mi,
  Cf: uh,
  P: $l,
  S: Ni,
  Z: Ti
}, Symbol.toStringTag, { value: "Module" })), dh = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
function hh(e) {
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : dh.get(e) ?? e;
}
function fh(e) {
  const t = atob(e), n = t.length & -2, a = new Uint16Array(n / 2);
  for (let r = 0, l = 0; r < n; r += 2) {
    const s = t.charCodeAt(r), o = t.charCodeAt(r + 1);
    a[l++] = s | o << 8;
  }
  return a;
}
const Ah = /* @__PURE__ */ fh("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWlsN2E6ZHIAAOA12CjdciJlZW4AOGFjAHkARWRjAHkAXGRwAGYAAOA12FzdYwByAADgNdjA3IALQUJFSGFiY2RlZmdoamxtbm9wcnN0dXYAXhxtHHEcdRx5HN8cBx0dHTwd3B3tHfEdAR4EHh0eLB5FHrwewx7hHgkfPR9LH4ABYXJ0AGQcZxxpHHIA8gBvB/IAxQLhIWlsAKAbKeEhcnIAoA4pZ6BmIgCgiyphAHIAAKBiKWMJjRwAAJAcAACVHAAAAAAAAAAAAACZHJwcAACmHKgcrRwAANIc9SF0ZTph7SJwdHl2AKC0KXIAYQDuAFoG4iFkYbtjZwAAoegnZGyhHKMcAKCRKeUAiwYAoIUqdQBvADuAqwCrQHIAgKOQIWJmaGxwc3QAuhy/HMIcxBzHHMoczhxmoOQhcwAAoB8pcwAAoB0p6wCyGnAAAKCrIWwAAKA5KWkAbQAAoHMpbAAAoKIhAKGrKmFl1hzaHGkAbAAAoBkpc6CtKgDgrSoA/oABYWJyAOUc6RztHHIAcgAAoAwpcgBrAACgcicAAWFr8Rz4HGMAAAFla/Yc9xx7YFtgAAFlc/wc/hwAoIspbAAAAWR1Ax0FHQCgjykAoI0pAAJhZXV5Dh0RHRodHB3yIW9uPmEAAWRpFR0YHWkAbAA8YewAowbiAPccO2QAAmNxcnMkHScdLB05HWEAAKA2KXUAbwDyoBwgqhEAAWR1MB00HeghYXIAoGcpcyJoYXIAAKBLKWgAAKCyIQCiZCJmZ3FzRB1FB5Qdnh10AIACYWhscnQATh1WHWUdbB2NHXIicm93AHSgkCFhAOkAzxxhI3Jwb29uAAABZHVeHWId7yF3bgCgvSFwAACgvCHlJGZ0YXJyb3dzAKDHIWkiZ2h0AIABYWhzAHUdex2DHXIicm93APOglCGdBmEAcgBwAG8AbwBuAPMAzgtxAHUAaQBnAGEAcgByAG8A9wBlGugkcmVldGltZXMAoMsi8aFkIk0HAACaHWwAYQBuAPQAXgcAon0qY2Rnc6YdqR2xHbcdYwAAoKgqbwB0AG+gfypyoIEqAKCDKmXg2iIA/nMAAKCTKoACYWRlZ3MAwB3GHcod1h3ZHXAAcAByAG8A+ACmHG8AdAAAoNYicQAAAWdxzx3SHXQA8gBGB2cAdADyAHQcdADyAFMHaQDtAGMHgAFpbHIA4h3mHeod8yFodACgfClvAG8A8gDKBgDgNdgp3UWgdiIAoJEqYQH1Hf4dcgAAAWR1YB35HWygvCEAoGopbABrAACghCVjAHkAWWQAomoiYWNodAweDx4VHhkecgDyAGsdbwByAG4AZQDyAGAW4SFyZACgaylyAGkAAKD6JQABaW8hHiQe5CFvdEBh9SFzdGGgsCPjIWhlAKCwIwACRWFlczMeNR48HkEeAKBoInAAcKCJKvIhb3gAoIkqcaCHKvGghyo0HmkAbQAAoOYiAARhYm5vcHR3elIeXB5fHoUelh6mHqsetB4AAW5yVh5ZHmcAAKDsJ3IAAKD9IXIA6wCwBmcAgAFsbXIAZh52Hnse5SFmdAABYXKIB2weaQBnAGgAdABhAHIAcgBvAPcAkwfhInBzdG8AoPwnaQBnAGgAdABhAHIAcgBvAPcAmgdwI2Fycm93AAABbHKNHpEeZQBmAPQAxhxpImdodAAAoKwhgAFhZmwAnB6fHqIecgAAoIUpAOA12F3ddQBzAACgLSppIm1lcwAAoDQqYQGvHrMecwB0AACgFyLhAIoOZaHKJbkeRhLuIWdlAKDKJWEAcgBsoCgAdAAAoJMpgAJhY2htdADMHs8e1R7bHt0ecgDyAJ0GbwByAG4AZQDyANYWYQByAGSgyyEAoG0pAKAOIHIAaQAAoL8iAANhY2hpcXTrHu8e1QfzHv0eBh/xIXVvAKA5IHIAAOA12MHcbQDloXIi+h4AAPweAKCNKgCgjyoAAWJ19xwBH28AcqAYIACgGiDyIW9rQmEAhDwAO2NkaGlscXJCBhcfxh0gHyQfKB8sHzEfAAFjaRsfHR8AoKYqcgAAoHkqcgBlAOUAkx3tIWVzAKDJIuEhcnIAoHYpdSJlc3QAAKB7KgABUGk1HzkfYQByAACglillocMlAgdfEnIAAAFkdUIfRx9zImhhcgAAoEop6CFhcgCgZikAAWVuTx9WH3IjdG5lcXEAAOBoIgD+xQBUHwAHRGFjZGVmaGlsbm9wc3VuH3Ifoh+rH68ftx+7H74f5h/uH/MfBwj/HwsgxCFvdACgOiIAAmNscHJ5H30fiR+eH3IAO4CvAK9AAAFldIEfgx8AoEImZaAgJ3MAZQAAoCAnc6CmIXQAbwCAoaYhZGx1AJQfmB+cH28AdwDuAHkDZQBmAPQA6gbwAOkO6yFlcgCgriUAAW95ph+qH+0hbWEAoCkqPGThIXNoAKAUIOElc3VyZWRhbmdsZQCgISJyAADgNdgq3W8AAKAnIYABY2RuAMQfyR/bH3IAbwA7gLUAtUBhoiMi0B8AANMf1x9zAPQAKxFpAHIAAKDwKm8AdAA7gLcAt0B1AHMA4qESIh4TAADjH3WgOCIAoCoqYwHqH+0fcAAAoNsq8gB+GnAAbAB1APMACAgAAWRw9x/7H+UhbHMAoKciZgAA4DXYXt0AAWN0AyAHIHIAAOA12MLc8CFvcwCgPiJsobwDECAVIPQiaW1hcACguCJhAPAAEyAADEdMUlZhYmNkZWZnaGlqbG1vcHJzdHV2dzwgRyBmIG0geSCqILgg2iDeIBEhFSEyIUMhTSFQIZwhnyHSIQAiIyKLIrEivyIUIwABZ3RAIEMgAODZIjgD9uBrItIgBwmAAWVsdABNIF8gYiBmAHQAAAFhclMgWCByInJvdwAAoM0h6SRnaHRhcnJvdwCgziEA4NgiOAP24Goi0iBfCekkZ2h0YXJyb3cAoM8hAAFEZHEgdSDhIXNoAKCvIuEhc2gAoK4igAJiY25wdACCIIYgiSCNIKIgbABhAACgByL1IXRlRGFnAADgICLSIACiSSJFaW9wlSCYIJwgniAA4HAqOANkAADgSyI4A3MASWFyAG8A+AAyCnUAcgBhoG4mbADzoG4mmwjzAa8gAACzIHAAO4CgAKBAbQBwAOXgTiI4AyoJgAJhZW91eQDBIMogzSDWINkg8AHGIAAAyCAAoEMqbwBuAEhh5CFpbEZhbgBnAGSgRyJvAHQAAOBtKjgDcAAAoEIqPWThIXNoAKATIACjYCJBYWRxc3jpIO0g+SD+IAIhDCFyAHIAAKDXIXIAAAFocvIg9SBrAACgJClvoJch9wAGD28AdAAA4FAiOAN1AGkA9gC7CAABZWkGIQohYQByAACgKCntAN8I6SFzdPOgBCLlCHIAAOA12CvdAAJFZXN0/wgcISshLiHxoXEiIiEAABMJ8aFxIgAJAAAnIWwAYQBuAPQAEwlpAO0AGQlyoG8iAKBvIoABQWFwADghOyE/IXIA8gBeIHIAcgAAoK4hYQByAACg8ipzogsiSiEAAAAAxwtkoPwiAKD6ImMAeQBaZIADQUVhZGVzdABcIV8hYiFmIWkhkyGWIXIA8gBXIADgZiI4A3IAcgAAoJohcgAAoCUggKFwImZxcwBwIYQhjiF0AAABYXJ1IXohcgByAG8A9wBlIWkAZwBoAHQAYQByAHIAbwD3AD4h8aFwImAhAACKIWwAYQBuAPQAZwlz4H0qOAMAoG4iaQDtAG0JcqBuImkA5aDqIkUJaQDkADoKAAFwdKMhpyFmAADgNdhf3YCBrAA7aW4AriGvIcchrEBuAIChCSJFZHYAtyG6Ib8hAOD5IjgDbwB0AADg9SI4A+EB1gjEIcYhAKD3IgCg9iJpAHagDCLhAagJzyHRIQCg/iIAoP0igAFhb3IA2CHsIfEhcgCAoSYiYXN0AOAh5SHpIWwAbABlAOwAywhsAADg/SrlIADgAiI4A2wiaW50AACgFCrjoYAi9yEAAPohdQDlAJsJY+CvKjgDZaCAIvEAkwkAAkFhaXQHIgoiFyIeInIA8gBsIHIAcgAAoZshY3cRIhQiAOAzKTgDAOCdITgDZyRodGFycm93AACgmyFyAGkA5aDrIr4JgANjaGltcHF1AC8iPCJHIpwhTSJQIloigKGBImNlcgA2Iv0JOSJ1AOUABgoA4DXYw9zvIXJ0bQKdIQAAAABEImEAcgDhAOEhbQBloEEi8aBEIiYKYQDyAMsIcwB1AAABYnBWIlgi5QDUCeUA3wmAAWJjcABgInMieCKAoYQiRWVzAGci7glqIgDgxSo4A2UAdABl4IIi0iBxAPGgiCJoImMAZaCBIvEA/gmAoYUiRWVzAH8iFgqCIgDgxio4A2UAdABl4IMi0iBxAPGgiSKAIgACZ2lscpIilCKaIpwi7AAMCWwAZABlADuA8QDxQOcAWwlpI2FuZ2xlAAABbHKkIqoi5SFmdGWg6iLxAEUJaSJnaHQAZaDrIvEAvgltoL0DAKEjAGVzuCK8InIAbwAAoBYhcAAAoAcggARESGFkZ2lscnMAziLSItYi2iLeIugi7SICIw8j4SFzaACgrSLhIXJyAKAEKXAAAOBNItIg4SFzaACgrCIAAWV04iLlIgDgZSLSIADgPgDSIG4iZmluAACg3imAAUFldADzIvci+iJyAHIAAKACKQDgZCLSIHLgPADSIGkAZQAA4LQi0iAAAUF0BiMKI3IAcgAAoAMp8iFpZQDgtSLSIGkAbQAA4Dwi0iCAAUFhbgAaIx4jKiNyAHIAAKDWIXIAAAFociMjJiNrAACgIylvoJYh9wD/DuUhYXIAoCcpUxJqFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVCMAAF4jaSN/I4IjjSOeI8AUAAAAAKYjwCMAANoj3yMAAO8jHiQvJD8kRCQAAWNzVyNsFHUAdABlADuA8wDzQAABaXlhI2cjcgBjoJoiO4D0APRAPmSAAmFiaW9zAHEjdCN3I3EBeiNzAOgAdhTsIWFjUWF2AACgOCrvIWxkAKC8KewhaWdTYQABY3KFI4kjaQByAACgvykA4DXYLN1vA5QjAAAAAJYjAACcI24A22JhAHYAZQA7gPIA8kAAoMEpAAFibaEjjAphAHIAAKC1KQACYWNpdKwjryO6I70jcgDyAFkUAAFpcrMjtiNyAACgvinvIXNzAKC7KW4A5QDZCgCgwCmAAWFlaQDFI8gjyyNjAHIATWFnAGEAyWOAAWNkbgDRI9Qj1iPyIW9uv2MAoLYpdQDzAHgBcABmAADgNdhg3YABYWVsAOQj5yPrI3IAAKC3KXIAcAAAoLkpdQDzAHwBAKMoImFkaW9zdvkj/CMPJBMkFiQbJHIA8gBeFIChXSplZm0AAyQJJAwkcgBvoDQhZgAAoDQhO4CqAKpAO4C6ALpA5yFvZgCgtiJyAACgVipsIm9wZQAAoFcqAKBbKoABY2xvACMkJSQrJPIACCRhAHMAaAA7gPgA+EBsAACgmCJpAGwBMyQ4JGQAZQA7gPUA9UBlAHMAYaCXInMAAKA2Km0AbAA7gPYA9kDiIWFyAKA9I+EKXiQAAHokAAB8JJQkAACYJKkkAAAAALUkEQsAAPAkAAAAAAQleiUAAIMlcgCAoSUiYXN0AGUkbyQBCwCBtgA7bGokayS2QGwAZQDsABgDaQJ1JAAAAAB4JG0AAKDzKgCg/Sp5AD9kcgCAAmNpbXB0AIUkiCSLJJkSjyRuAHQAJWBvAGQALmBpAGwAAKAwIOUhbmsAoDEgcgAA4DXYLd2AAWltbwCdJKAkpCR2oMYD1WNtAGEA9AD+B24AZQAAoA4m9KHAA64kAAC0JGMjaGZvcmsAAKDUItZjAAFhdbgkxCRuAAABY2u9JMIkawBooA8hAKAOIfYAaRpzAACkKwBhYmNkZW1zdNMkIRPXJNsk4STjJOck6yTjIWlyAKAjKmkAcgAAoCIqAAFvdYsW3yQAoCUqAKByKm4AO4CxALFAaQBtAACgJip3AG8AAKAnKoABaXB1APUk+iT+JO4idGludACgFSpmAADgNdhh3W4AZAA7gKMAo0CApHoiRWFjZWlub3N1ABMlFSUYJRslTCVRJVklSSV1JQCgsypwAACgtyp1AOUAPwtjoK8qgKJ6ImFjZW5zACclLSU0JTYlSSVwAHAAcgBvAPgAFyV1AHIAbAB5AGUA8QA/C/EAOAuAAWFlcwA8JUElRSXwInByb3gAoLkqcQBxAACgtSppAG0AAKDoImkA7QBEC20AZQDzoDIgIguAAUVhcwBDJVclRSXwAEAlgAFkZnAATwtfJXElgAFhbHMAZSVpJW0l7CFhcgCgLiPpIW5lAKASI/UhcmYAoBMjdKAdIu8AWQvyIWVsAKCwIgABY2l9JYElcgAA4DXYxdzIY24iY3NwAACgCCAAA2Zpb3BzdZElKxuVJZolnyWkJXIAAOA12C7dcABmAADgNdhi3XIiaW1lAACgVyBjAHIAAOA12MbcgAFhZW8AqiW6JcAldAAAAWVpryW2JXIAbgBpAG8AbgDzABkFbgB0AACgFipzAHQAZaA/APEACRj0AG0LgApBQkhhYmNkZWZoaWxtbm9wcnN0dXgA4yXyJfYl+iVpJpAmpia9JtUm5ib4JlonaCdxJ3UnnietJ7EnyCfiJ+cngAFhcnQA6SXsJe4lcgDyAJkM8gD6AuEhaWwAoBwpYQByAPIA3BVhAHIAAKBkKYADY2RlbnFydAAGJhAmEyYYJiYmKyZaJgABZXUKJg0mAOA9IjEDdABlAFVhaQDjACAN7SJwdHl2AKCzKWcAgKHpJ2RlbAAgJiImJCYAoJIpAKClKeUA9wt1AG8AO4C7ALtAcgAApZIhYWJjZmhscHN0dz0mQCZFJkcmSiZMJk4mUSZVJlgmcAAAoHUpZqDlIXMAAKAgKQCgMylzAACgHinrALka8ACVHmwAAKBFKWkAbQAAoHQpbAAAoKMhAKCdIQABYWleJmImaQBsAACgGilvAG6gNiJhAGwA8wB2C4ABYWJyAG8mciZ2JnIA8gAvEnIAawAAoHMnAAFha3omgSZjAAABZWt/JoAmfWBdYAABZXOFJocmAKCMKWwAAAFkdYwmjiYAoI4pAKCQKQACYWV1eZcmmiajJqUm8iFvbllhAAFkaZ4moSZpAGwAV2HsAA8M4gCAJkBkAAJjbHFzrSawJrUmuiZhAACgNylkImhhcgAAoGkpdQBvAPKgHSCjAWgAAKCzIYABYWNnAMMm0iaUC2wAgKEcIWlwcwDLJs4migxuAOUAoAxhAHIA9ADaC3QAAKCtJYABaWxyANsm3ybjJvMhaHQAoH0pbwBvAPIANgwA4DXYL90AAWFv6ib1JnIAAAFkde8m8SYAoMEhbKDAIQCgbCl2oMED8WOAAWducwD+Jk4nUCdoAHQAAANhaGxyc3QKJxInISc1Jz0nRydyInJvdwB0oJIhYQDpAFYmYSNycG9vbgAAAWR1GiceJ28AdwDuAPAmcAAAoMAh5SFmdAABYWgnJy0ncgByAG8AdwDzAAkMYQByAHAAbwBvAG4A8wATBGklZ2h0YXJyb3dzAACgySFxAHUAaQBnAGEAcgByAG8A9wBZJugkcmVldGltZXMAoMwiZwDaYmkAbgBnAGQAbwB0AHMAZQDxABwYgAFhaG0AYCdjJ2YncgDyAAkMYQDyABMEAKAPIG8idXN0AGGgsSPjIWhlAKCxI+0haWQAoO4qAAJhYnB0fCeGJ4knmScAAW5ygCeDJ2cAAKDtJ3IAAKD+IXIA6wAcDIABYWZsAI8nkieVJ3IAAKCGKQDgNdhj3XUAcwAAoC4qaSJtZXMAAKA1KgABYXCiJ6gncgBnoCkAdAAAoJQp7yJsaW50AKASKmEAcgDyADwnAAJhY2hxuCe8J6EMwCfxIXVvAKA6IHIAAOA12MfcAAFidYAmxCdvAPKgGSCoAYABaGlyAM4n0ifWJ3IAZQDlAE0n7SFlcwCgyiJpAIChuSVlZmwAXAxjEt4n9CFyaQCgzinsInVoYXIAoGgpAKAeIWENBSgJKA0oSyhVKIYoAACLKLAoAAAAAOMo5ygAABApJCkxKW0pcSmHKaYpAACYKgAAAACxKmMidXRlAFthcQB1AO8ABR+ApHsiRWFjZWlucHN5ABwoHignKCooLygyKEEoRihJKACgtCrwASMoAAAlKACguCpvAG4AYWF1AOUAgw1koLAqaQBsAF9hcgBjAF1hgAFFYXMAOCg6KD0oAKC2KnAAAKC6KmkAbQAAoOki7yJsaW50AKATKmkA7QCIDUFkbwB0AGKixSKRFgAAAABTKACgZiqAA0FhY21zdHgAYChkKG8ocyh1KHkogihyAHIAAKDYIXIAAAFocmkoayjrAJAab6CYIfcAzAd0ADuApwCnQGkAO2D3IWFyAKApKW0AAAFpbn4ozQBuAHUA8wDOAHQAAKA2J3IA7+A12DDdIxkAAmFjb3mRKJUonSisKHIAcAAAoG8mAAFoeZkonChjAHkASWRIZHIAdABtAqUoAAAAAKgoaQDkAFsPYQByAGEA7ABsJDuArQCtQAABZ22zKLsobQBhAAChwwNmdroouijCY4CjPCJkZWdsbnByAMgozCjPKNMo1yjaKN4obwB0AACgairxoEMiCw5FoJ4qAKCgKkWgnSoAoJ8qZQAAoEYi7CF1cwCgJCrhIXJyAKByKWEAcgDyAPwMAAJhZWl07Sj8KAEpCCkAAWxz8Sj4KGwAcwBlAHQAbQDpAH8oaABwAACgMyrwImFyc2wAoOQpAAFkbFoPBSllAACgIyNloKoqc6CsKgDgrCoA/oABZmxwABUpGCkfKfQhY3lMZGKgLwBhoMQpcgAAoD8jZgAA4DXYZN1hAAABZHIoKRcDZQBzAHWgYCZpAHQAAKBgJoABY3N1ADYpRilhKQABYXU6KUApcABzoJMiAOCTIgD+cABzoJQiAOCUIgD+dQAAAWJwSylWKQChjyJlcz4NUCllAHQAZaCPIvEAPw0AoZAiZXNIDVspZQB0AGWgkCLxAEkNAKGhJWFmZilbBHIAZQFrKVwEAKChJWEAcgDyAAMNAAJjZW10dyl7KX8pgilyAADgNdjI3HQAbQDuAM4AaQDsAAYpYQByAOYAVw0AAWFyiimOKXIA5qAGJhESAAFhbpIpoylpImdodAAAAWVwmSmgKXAAcwBpAGwAbwDuANkXaADpAKAkcwCvYIACYmNtbnAArin8KY4NJSooKgCkgiJFZGVtbnByc7wpvinCKcgpzCnUKdgp3CkAoMUqbwB0AACgvSpkoIYibwB0AACgwyr1IWx0AKDBKgABRWXQKdIpAKDLKgCgiiLsIXVzAKC/KuEhcnIAoHkpgAFlaXUA4inxKfQpdAAAoYIiZW7oKewpcQDxoIYivSllAHEA8aCKItEpbQAAoMcqAAFicPgp+ikAoNUqAKDTKmMAgKJ7ImFjZW5zAAcqDSoUKhYqRihwAHAAcgBvAPgAIyh1AHIAbAB5AGUA8QCDDfEAfA2AAWFlcwAcKiIqPShwAHAAcgBvAPgAPChxAPEAOShnAACgaiYApoMiMTIzRWRlaGxtbnBzPCo/KkIqRSpHKlIqWCpjKmcqaypzKncqO4C5ALlAO4CyALJAO4CzALNAAKDGKgABb3NLKk4qdAAAoL4qdQBiAACg2CpkoIcibwB0AACgxCpzAAABb3VdKmAqbAAAoMknYgAAoNcq4SFycgCgeyn1IWx0AKDCKgABRWVvKnEqAKDMKgCgiyLsIXVzAKDAKoABZWl1AH0qjCqPKnQAAKGDImVugyqHKnEA8aCHIkYqZQBxAPGgiyJwKm0AAKDIKgABYnCTKpUqAKDUKgCg1iqAAUFhbgCdKqEqrCpyAHIAAKDZIXIAAAFocqYqqCrrAJUab6CZIfcAxQf3IWFyAKAqKWwAaQBnADuA3wDfQOELzyrZKtwq6SrsKvEqAAD1KjQrAAAAAAAAAAAAAEwrbCsAAHErvSsAAAAAAADRK3IC1CoAAAAA2CrnIWV0AKAWI8RjcgDrAOUKgAFhZXkA4SrkKucq8iFvbmVh5CFpbGNhQmRvAPQAIg5sInJlYwAAoBUjcgAA4DXYMd0AAmVpa2/7KhIrKCsuK/IBACsAAAkrZQAAATRm6g0EK28AcgDlAOsNYQBzorgDECsAAAAAEit5AG0A0WMAAWNuFislK2sAAAFhcxsrIStwAHAAcgBvAPgAFw5pAG0AAKA8InMA8AD9DQABYXMsKyEr8AAXDnIAbgA7gP4A/kDsATgrOyswG2QA5QBnAmUAcwCAgdcAO2JkAEMrRCtJK9dAYaCgInIAAKAxKgCgMCqAAWVwcwBRK1MraSvhAAkh4qKkIlsrXysAAAAAYytvAHQAAKA2I2kAcgAAoPEqb+A12GXdcgBrAACg2irhAHgociJpbWUAAKA0IIABYWlwAHYreSu3K2QA5QC+DYADYWRlbXBzdACFK6MrmiunK6wrsCuzK24iZ2xlAACitSVkbHFykCuUK5ornCvvIXduAKC/JeUhZnRloMMl8QACBwCgXCJpImdodABloLkl8QBdDG8AdAAAoOwlaSJudXMAAKA6KuwhdXMAoDkqYgAAoM0p6SFtZQCgOyrlInppdW0AoOIjgAFjaHQAwivKK80rAAFyecYrySsA4DXYydxGZGMAeQBbZPIhb2tnYQABaW/UK9creAD0ANERaCJlYWQAAAFsct4r5ytlAGYAdABhAHIAcgBvAPcAXQbpJGdodGFycm93AKCgIQAJQUhhYmNkZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");
var Ie;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.FLAG13 = 8192] = "FLAG13", e[e.BRANCH_LENGTH = 8064] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Ie || (Ie = {}));
var me;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(me || (me = {}));
const Ws = 32;
function il(e) {
  return e >= me.ZERO && e <= me.NINE;
}
function gh(e) {
  return e >= me.UPPER_A && e <= me.UPPER_F || e >= me.LOWER_A && e <= me.LOWER_F;
}
function mh(e) {
  return e >= me.UPPER_A && e <= me.UPPER_Z || e >= me.LOWER_A && e <= me.LOWER_Z || il(e);
}
function ph(e) {
  return e === me.EQUALS || mh(e);
}
var we;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(we || (we = {}));
var St;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(St || (St = {}));
class vh {
  decodeTree;
  emitCodePoint;
  errors;
  constructor(t, n, a) {
    this.decodeTree = t, this.emitCodePoint = n, this.errors = a;
  }
  /** The current state of the decoder. */
  state = we.EntityStart;
  /** Characters that were consumed while parsing an entity. */
  consumed = 1;
  /**
   * The result of the entity.
   *
   * Either the result index of a numeric entity, or the codepoint of a
   * numeric entity.
   */
  result = 0;
  /** The current index in the decode tree. */
  treeIndex = 0;
  /** The number of characters that were consumed in excess. */
  excess = 1;
  /** The mode in which the decoder is operating. */
  decodeMode = St.Strict;
  /** The number of characters that have been consumed in the current run. */
  runConsumed = 0;
  /**
   * Resets the instance to make it reusable.
   * @param decodeMode Entity decoding mode to use.
   */
  startEntity(t) {
    this.decodeMode = t, this.state = we.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1, this.runConsumed = 0;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, n) {
    switch (this.state) {
      case we.EntityStart:
        return t.charCodeAt(n) === me.NUM ? (this.state = we.NumericStart, this.consumed += 1, this.stateNumericStart(t, n + 1)) : (this.state = we.NamedEntity, this.stateNamedEntity(t, n));
      case we.NumericStart:
        return this.stateNumericStart(t, n);
      case we.NumericDecimal:
        return this.stateNumericDecimal(t, n);
      case we.NumericHex:
        return this.stateNumericHex(t, n);
      case we.NamedEntity:
        return this.stateNamedEntity(t, n);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, n) {
    return n >= t.length ? -1 : (t.charCodeAt(n) | Ws) === me.LOWER_X ? (this.state = we.NumericHex, this.consumed += 1, this.stateNumericHex(t, n + 1)) : (this.state = we.NumericDecimal, this.stateNumericDecimal(t, n));
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, n) {
    for (; n < t.length; ) {
      const a = t.charCodeAt(n);
      if (il(a) || gh(a)) {
        const r = a <= me.NINE ? a - me.ZERO : (a | Ws) - me.LOWER_A + 10;
        this.result = this.result * 16 + r, this.consumed++, n++;
      } else
        return this.emitNumericEntity(a, 3);
    }
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, n) {
    for (; n < t.length; ) {
      const a = t.charCodeAt(n);
      if (il(a))
        this.result = this.result * 10 + (a - me.ZERO), this.consumed++, n++;
      else
        return this.emitNumericEntity(a, 2);
    }
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, n) {
    if (this.consumed <= n)
      return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === me.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === St.Strict)
      return 0;
    return this.emitCodePoint(hh(this.result), this.consumed), this.errors && (t !== me.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, n) {
    const { decodeTree: a } = this;
    let r = a[this.treeIndex], l = (r & Ie.VALUE_LENGTH) >> 14;
    for (; n < t.length; ) {
      if (l === 0 && (r & Ie.FLAG13) !== 0) {
        const o = (r & Ie.BRANCH_LENGTH) >> 7;
        if (this.runConsumed === 0) {
          const i = r & Ie.JUMP_TABLE;
          if (t.charCodeAt(n) !== i)
            return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
          n++, this.excess++, this.runConsumed++;
        }
        for (; this.runConsumed < o; ) {
          if (n >= t.length)
            return -1;
          const i = this.runConsumed - 1, u = a[this.treeIndex + 1 + (i >> 1)], c = i % 2 === 0 ? u & 255 : u >> 8 & 255;
          if (t.charCodeAt(n) !== c)
            return this.runConsumed = 0, this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
          n++, this.excess++, this.runConsumed++;
        }
        this.runConsumed = 0, this.treeIndex += 1 + (o >> 1), r = a[this.treeIndex], l = (r & Ie.VALUE_LENGTH) >> 14;
      }
      if (n >= t.length)
        break;
      const s = t.charCodeAt(n);
      if (s === me.SEMI && l !== 0 && (r & Ie.FLAG13) !== 0)
        return this.emitNamedEntityData(this.treeIndex, l, this.consumed + this.excess);
      if (this.treeIndex = Dh(a, r, this.treeIndex + Math.max(1, l), s), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === St.Attribute && // We shouldn't have consumed any characters after the entity,
        (l === 0 || // And there should be no invalid characters.
        ph(s)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = a[this.treeIndex], l = (r & Ie.VALUE_LENGTH) >> 14, l !== 0) {
        if (s === me.SEMI)
          return this.emitNamedEntityData(this.treeIndex, l, this.consumed + this.excess);
        this.decodeMode !== St.Strict && (r & Ie.FLAG13) === 0 && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
      n++, this.excess++;
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    const { result: t, decodeTree: n } = this, a = (n[t] & Ie.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, a, this.consumed), this.errors?.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, n, a) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(n === 1 ? r[t] & ~(Ie.VALUE_LENGTH | Ie.FLAG13) : r[t + 1], a), n === 3 && this.emitCodePoint(r[t + 2], a), a;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   * @returns The number of characters consumed.
   */
  end() {
    switch (this.state) {
      case we.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== St.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case we.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case we.NumericHex:
        return this.emitNumericEntity(0, 3);
      case we.NumericStart:
        return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case we.EntityStart:
        return 0;
    }
  }
}
function yh(e) {
  let t = "";
  const n = new vh(e, (a) => t += String.fromCodePoint(a));
  return function(r, l) {
    let s = 0, o = 0;
    for (; (o = r.indexOf("&", o)) >= 0; ) {
      t += r.slice(s, o), n.startEntity(l);
      const u = n.write(
        r,
        // Skip the "&"
        o + 1
      );
      if (u < 0) {
        s = o + n.end();
        break;
      }
      s = o + u, o = u === 0 ? s + 1 : s;
    }
    const i = t + r.slice(s);
    return t = "", i;
  };
}
function Dh(e, t, n, a) {
  const r = (t & Ie.BRANCH_LENGTH) >> 7, l = t & Ie.JUMP_TABLE;
  if (r === 0)
    return l !== 0 && a === l ? n : -1;
  if (l) {
    const u = a - l;
    return u < 0 || u >= r ? -1 : e[n + u] - 1;
  }
  const s = r + 1 >> 1;
  let o = 0, i = r - 1;
  for (; o <= i; ) {
    const u = o + i >>> 1, c = u >> 1, g = e[n + c] >> (u & 1) * 8 & 255;
    if (g < a)
      o = u + 1;
    else if (g > a)
      i = u - 1;
    else
      return e[n + s + u];
  }
  return -1;
}
const Ch = /* @__PURE__ */ yh(Ah);
function Oi(e) {
  return Ch(e, St.Strict);
}
var bh = class {
  src_Any = Ii.source;
  src_Cc = Mi.source;
  src_Z = Ti.source;
  src_P = $l.source;
  src_ZPCc = [
    this.src_Z,
    this.src_P,
    this.src_Cc
  ].join("|");
  src_ZCc = [this.src_Z, this.src_Cc].join("|");
  cache = {};
  opts = {
    maxLength: 1e4,
    urlAuth: !1,
    schema_names: []
  };
  constructor(e = {}) {
    this.opts = {
      ...this.opts,
      ...e
    };
  }
  set(e = {}) {
    return this.opts = {
      ...this.opts,
      ...e
    }, this.cache = {}, this;
  }
  escapeRE(e) {
    return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  nestedPairRE(e, t, n = 4) {
    const a = this.escapeRE(e), r = this.escapeRE(t), l = `(?:(?!${this.src_ZCc}|${a}|${r}).)`;
    let s = `${a}${l}{0,1000}${r}`;
    for (let o = 2; o <= n; o++) s = `${a}(?:${l}|${s}){0,1000}${r}`;
    return s;
  }
  get_text_separators() {
    return this.cache.text_separators ??= /[><\uff5c]/;
  }
  get_pseudo_letter() {
    return this.cache.src_pseudo_letter ??= new RegExp(`(?:(?!${this.get_text_separators().source}|${this.src_ZPCc})${this.src_Any})`);
  }
  get_ipv4_addr() {
    return this.cache.src_ip4 ??= /* @__PURE__ */ new RegExp("(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])[.]){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])");
  }
  get_ipv6_addr() {
    const e = "[0-9A-Fa-f]{1,4}", t = `(?:(?:${e}:${e})|${this.get_ipv4_addr().source})`;
    return this.cache.src_ip6_addr ??= new RegExp(`(?:(?:${e}:){6}${t}|::(?:${e}:){5}${t}|(?:${e})?::(?:${e}:){4}${t}|(?:(?:${e}:){0,1}${e})?::(?:${e}:){3}${t}|(?:(?:${e}:){0,2}${e})?::(?:${e}:){2}${t}|(?:(?:${e}:){0,3}${e})?::${e}:${t}|(?:(?:${e}:){0,4}${e})?::${t}|(?:(?:${e}:){0,5}${e})?::${e}|(?:(?:${e}:){0,6}${e})?::)`);
  }
  get_ipv6_url_host() {
    return this.cache.src_ip6_host ??= new RegExp(`\\[${this.get_ipv6_addr().source}\\]`);
  }
  get_ipv6_mail_host() {
    return this.cache.src_ipv6_mail_host ??= new RegExp(`\\[IPv6:${this.get_ipv6_addr().source}\\]`);
  }
  get_auth() {
    return this.cache.src_auth ??= new RegExp(`(?:(?:(?!${this.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`);
  }
  get_port() {
    return this.cache.src_port ??= /* @__PURE__ */ new RegExp("(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?");
  }
  get_host_terminator() {
    return this.cache.src_host_terminator ??= new RegExp(`(?=$|${this.get_text_separators().source}|${this.src_ZPCc})(?!${this.opts["---"] ? "-(?!--)|" : "-|"}_|:\\d|\\.-|\\.(?!$|${this.src_ZPCc}))`);
  }
  get_path_terminator() {
    return this.cache.src_path_terminator ??= new RegExp(`${this.src_ZPCc}|${this.get_text_separators().source}`);
  }
  get_path() {
    return this.cache.src_path ??= new RegExp(`(?:[/?#](?:${this.nestedPairRE("[", "]")}|${this.nestedPairRE("(", ")")}|${this.nestedPairRE("{", "}")}|\\"(?:(?!${this.src_ZCc}|["]).){1,100}\\"|\\'(?:(?!${this.src_ZCc}|[']).){1,100}\\'|\\'(?=${this.get_pseudo_letter().source}|[-])|\\.{2,20}[:]?[a-zA-Z0-9%/&]|\\.(?!${this.src_ZCc}|[.]|$)|` + (this.opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-{0,19})|" : "\\-{1,20}|") + `,(?!${this.src_ZCc}|$)|;(?!${this.src_ZCc}|$)|\\!{1,20}(?!${this.src_ZCc}|[!]|$)|\\?(?!${this.src_ZCc}|[?]|$)|` + this.get_path_extra().source + `[\\\\/:%@#&=_~*]|(?!${this.get_path_terminator().source}).){1,${this.opts.maxLength}}|\\/)?`);
  }
  get_mail_name() {
    return this.cache.src_mail_name ??= /* @__PURE__ */ new RegExp("[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9](?:[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9]|[.](?=[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9])){0,63}");
  }
  get_xn() {
    return this.cache.src_xn ??= /* @__PURE__ */ new RegExp("xn--[a-z0-9\\-]{1,59}");
  }
  get_tld() {
    if (this.cache.tld) return this.cache.tld;
    const e = [...new Set(this.opts.tlds || [])].sort().reverse().join("|");
    return this.cache.tld = new RegExp(`${e || "$#none#$"}|${this.get_xn().source}`), this.cache.tld;
  }
  get_domain_root() {
    return this.cache.src_domain_root ??= new RegExp("(?:" + this.get_xn().source + `|${this.get_pseudo_letter().source}{1,63})`);
  }
  get_domain() {
    return this.cache.src_domain ??= new RegExp("(?:" + this.get_xn().source + `|(?:${this.get_pseudo_letter().source})|(?:${this.get_pseudo_letter().source}(?:-|${this.get_pseudo_letter().source}){0,61}${this.get_pseudo_letter().source}))`);
  }
  get_url_host_port() {
    return this.cache.url_host_port ??= new RegExp("(?:" + this.get_ipv6_url_host().source + `|(?:(?:(?:${this.get_domain().source})\\.){0,10}${this.get_domain().source}))` + this.get_port().source + this.get_host_terminator().source);
  }
  get_fuzzy_url_host_port() {
    return this.cache.fuzzy_url_host_port ??= new RegExp("(?:" + (this.opts.fuzzyIP ? this.get_ipv4_addr().source + "|" : "") + `(?:(?:(?:${this.get_domain().source})\\.){1,10}(?:${this.get_tld().source})))` + this.get_host_terminator().source);
  }
  get_mail_host() {
    return this.cache.src_mail_host ??= new RegExp("(?:" + this.get_ipv6_mail_host().source + `|(?:(?:(?:${this.get_domain().source})\\.){0,4}${this.get_domain().source}))` + this.get_host_terminator().source);
  }
  get_fuzzy_mail_host() {
    return this.cache.src_fuzzy_mail_host ??= new RegExp("(?:" + this.get_ipv6_mail_host().source + `|(?:(?:(?:${this.get_domain().source})[.]){1,4}${this.get_domain_root().source}))` + this.get_host_terminator().source);
  }
  get_path_extra() {
    return this.cache.src_path_extra ??= /* @__PURE__ */ new RegExp("");
  }
  get_fuzzy_mail_host_search() {
    return this.cache.mail_fuzzy_host_search ??= new RegExp(`@${this.get_fuzzy_mail_host().source}`, "ig");
  }
  get_fuzzy_link_search() {
    return this.cache.link_fuzzy_search ??= new RegExp(`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${this.src_ZPCc}))(?:(?![$+<=>^\`|｜])${this.get_fuzzy_url_host_port().source}${this.get_path().source})`, "ig");
  }
  get_http_validator() {
    return this.cache.http_validator ??= new RegExp("\\/\\/" + (this.opts.urlAuth ? this.get_auth().source : "") + this.get_url_host_port().source + this.get_path().source, "iy");
  }
  get_relative_proto_validator() {
    return this.cache.relative_proto_validator ??= new RegExp((this.opts.urlAuth ? this.get_auth().source : "") + `(?:localhost|${this.get_ipv6_url_host().source}|(?:(?:${this.get_domain().source})[.]){1,10}${this.get_domain_root().source})` + this.get_port().source + this.get_host_terminator().source + this.get_path().source, "iy");
  }
  get_mail_name_validator() {
    return this.cache.mail_name_validator ??= new RegExp(`(?:^|${this.get_text_separators().source}|"|\\(|${this.src_ZCc})(${this.get_mail_name().source})$`);
  }
  get_mailto_validator() {
    return this.cache.mailto_validator ??= new RegExp(`${this.get_mail_name().source}@${this.get_mail_host().source}`, "iy");
  }
  get_schema_names() {
    return this.cache.schema_names ??= new RegExp((this.opts.schema_names || []).map((e) => this.escapeRE(e)).join("|"));
  }
  get_schema_search() {
    return this.cache.schema_search ??= new RegExp(`(^|(?!_)(?:[><｜]|${this.src_ZPCc}))(${this.get_schema_names().source})`, "ig");
  }
  get_schema_at_start() {
    return this.cache.schema_at_start ??= new RegExp(`^${this.get_schema_search().source}`, "i");
  }
}, Dr = {
  validate: (e, t, n) => {
    const a = n.re.get_http_validator();
    a.lastIndex = t;
    const r = a.exec(e);
    return r ? r[0].length : 0;
  },
  normalize: (e, t) => t.normalize(e)
}, wh = {
  "http:": Dr,
  "https:": Dr,
  "ftp:": Dr,
  "//": {
    validate: function(e, t, n) {
      const a = n.re.get_relative_proto_validator();
      a.lastIndex = t;
      const r = a.exec(e);
      return r ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : r[0].length : 0;
    },
    normalize: (e, t) => t.normalize(e)
  },
  "mailto:": {
    validate: function(e, t, n) {
      const a = n.re.get_mailto_validator();
      a.lastIndex = t;
      const r = a.exec(e);
      return r ? r[0].length : 0;
    },
    normalize: (e, t) => t.normalize(e)
  }
}, Fh = "a:cdefgilmnoqrstuwxz|b:abdefghijmnorstvwyz|c:acdfghiklmnoruvwxyz|d:ejkmoz|e:cegrstu|f:ijkmor|g:abdefghilmnpqrstuwy|h:kmnrtu|i:delmnoqrst|j:emop|k:eghimnprwyz|l:abcikrstuvy|m:acdeghklmnopqrstuvwxyz|n:acefgilopruz|o:m|p:aefghklmnrstwy|q:a|r:eosuw|s:abcdeghijklmnortuvxyz|t:cdfghjklmnortvwz|u:agksyz|v:aceginu|w:fs|y:et|z:amw", kh = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф";
function Eh() {
  const e = kh.split("|");
  return Fh.split("|").forEach((t) => {
    const n = t.indexOf(":"), a = t.slice(0, n);
    for (const r of t.slice(n + 1)) e.push(a + r);
  }), e;
}
var Bh = {
  fuzzyLink: !1,
  fuzzyEmail: !0,
  fuzzyIP: !1,
  "---": !1,
  tlds: Eh(),
  urlAuth: !1,
  maxLength: 1e4
}, $s = class {
  /** Prefix (protocol) for matched string. Empty for fuzzy links. */
  schema;
  /** First position of matched string. */
  index;
  /** Next position after matched string. */
  lastIndex;
  /** Matched string. */
  raw;
  /** Normalized text of matched string. */
  text;
  /** Normalized URL of matched string. */
  url;
  constructor(e, t, n, a) {
    const r = e.slice(n, a);
    this.schema = t.toLowerCase(), this.index = n, this.lastIndex = a, this.raw = r, this.text = r, this.url = r;
  }
}, xh = class {
  __opts__;
  __schemas__;
  re;
  /**
  * Creates new linkifier instance.
  *
  * By default understands:
  *
  * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
  * - "fuzzy" emails (foo@bar.com).
  *
  * See {@link LinkifyConstructorOptions} for available options.
  *
  * @param options Recognition options.
  *
  * @example
  * ```javascript
  * import { LinkifyIt } from 'linkify-it'
  *
  * const linkify = new LinkifyIt({ fuzzyLink: true })
  *
  * linkify
  *   .tlds(require('tlds'))       // Reload with full TLD list
  *   .tlds('onion', true)         // Add unofficial `.onion` domain
  *   .add('ftp:', null)           // Disable `ftp:` protocol
  *   .set({ fuzzyIP: true })      // Enable IPs in fuzzy links
  *
  * console.log(linkify.test('Site github.com!')) // true
  * console.log(linkify.match('Site github.com!'))
  * ```
  */
  constructor(e = {}) {
    const { rebuilder: t, ...n } = e;
    this.__opts__ = {
      ...Bh,
      ...n
    }, this.__schemas__ = { ...wh }, this.re = t || new bh(), this.re.set({
      ...this.__opts__,
      schema_names: Object.keys(this.__schemas__)
    });
  }
  /**
  * Add new rule definition.
  *
  * `schema` is a link prefix (usually, protocol name with `:` at the end,
  * `skype:` for example). `linkify-it` makes sure that prefix is not
  * preceded with alphanumeric char and symbols. Only whitespaces and
  * punctuation allowed.
  *
  * `definition` is a rule to check tail after link prefix. To disable an
  * existing rule, pass `null`.
  *
  * @param schema Rule name (fixed pattern prefix).
  * @param definition Schema definition, or `null` to disable the rule.
  *
  * See [twitter mentions example](https://github.com/markdown-it/linkify-it/blob/master/examples/twitter.mjs).
  */
  add(e, t = null) {
    if (!t) delete this.__schemas__[e];
    else {
      const n = {
        normalize: (a, r) => r.normalize(a),
        ...t
      };
      this.__schemas__[e] = n;
    }
    return this.re.set({
      ...this.__opts__,
      schema_names: Object.keys(this.__schemas__)
    }), this;
  }
  /**
  * Set recognition options for links without schema.
  *
  * @param options Recognition options.
  */
  set(e = {}) {
    return this.__opts__ = {
      ...this.__opts__,
      ...e
    }, this.re.set({
      ...this.__opts__,
      schema_names: Object.keys(this.__schemas__)
    }), this;
  }
  /**
  * Searches linkifiable pattern and returns `true` on success or `false` on fail.
  *
  * @param text Text to scan.
  */
  test(e) {
    if (!e.length) return !1;
    let t, n;
    for (n = this.re.get_schema_search(), n.lastIndex = 0; (t = n.exec(e)) !== null; ) if (this.testSchemaAt(e, t[2], n.lastIndex)) return !0;
    if (this.__opts__.fuzzyLink && this.__schemas__["http:"] && (n = this.re.get_fuzzy_link_search(), n.lastIndex = 0, n.exec(e) !== null))
      return !0;
    if (this.__opts__.fuzzyEmail && this.__schemas__["mailto:"] && e.indexOf("@") >= 0) {
      const a = this.re.get_fuzzy_mail_host_search(), r = this.re.get_mail_name_validator();
      for (a.lastIndex = 0; (t = a.exec(e)) !== null; ) {
        const l = e.slice(Math.max(0, t.index - 65), t.index);
        if (r.test(l)) return !0;
      }
    }
    return !1;
  }
  /**
  * Similar to {@link LinkifyIt.test} but checks only specific protocol tail exactly
  * at given position. Returns length of found pattern (0 on fail).
  *
  * @param text Text to scan.
  * @param schema Rule (schema) name.
  * @param pos Text offset to check from.
  */
  testSchemaAt(e, t, n) {
    return this.__schemas__[t.toLowerCase()] ? this.__schemas__[t.toLowerCase()].validate(e.slice(0, n + this.__opts__.maxLength), n, this) : 0;
  }
  /**
  * Returns array of found link descriptions or `null` on fail. We strongly
  * recommend to use {@link LinkifyIt.test} first, for best speed.
  *
  * @param text Text to scan.
  */
  match(e) {
    const t = [], n = this.re.get_schema_search();
    let a, r, l, s, o, i, u = !1, c = !1, d = !1, g = 0;
    if (!e.length) return null;
    for (n.lastIndex = 0, this.__opts__.fuzzyLink && this.__schemas__["http:"] && (a = this.re.get_fuzzy_link_search(), a.lastIndex = 0), this.__opts__.fuzzyEmail && this.__schemas__["mailto:"] && (r = this.re.get_fuzzy_mail_host_search(), r.lastIndex = 0, l = this.re.get_mail_name_validator()); ; ) {
      const h = Math.max(g - 1, 0);
      if (r && l && !d && (!o || o.index < g))
        for (r.lastIndex < h && (r.lastIndex = h); ; ) {
          const b = r.exec(e);
          if (!b) {
            d = !0, o = void 0;
            break;
          }
          const C = l.exec(e.slice(Math.max(0, b.index - 65), b.index));
          if (C) {
            if (o = {
              schema: "mailto:",
              index: b.index - C[1].length,
              lastIndex: b.index + b[0].length
            }, o.index >= g) break;
            r.lastIndex < h && (r.lastIndex = h);
          }
        }
      if (a && !c && (!s || s.index < g))
        for (a.lastIndex < h && (a.lastIndex = h); ; ) {
          const b = a.exec(e);
          if (!b) {
            c = !0, s = void 0;
            break;
          }
          if (s = {
            schema: "",
            index: b.index + b[1].length,
            lastIndex: b.index + b[0].length
          }, s.index >= g) break;
          a.lastIndex < h && (a.lastIndex = h);
        }
      let f = o;
      (!f || s && (s.index < f.index || s.index === f.index && s.lastIndex > f.lastIndex)) && (f = s);
      let p;
      if (!u) for (; ; ) {
        if (!i) {
          n.lastIndex < h && (n.lastIndex = h);
          const D = n.exec(e);
          if (!D) {
            u = !0;
            break;
          }
          i = {
            schema: D[2],
            index: D.index + D[1].length,
            lastIndex: D.index + D[0].length
          };
        }
        if (i.index < g) {
          i = void 0;
          continue;
        }
        if (f && i.index > f.index) break;
        const b = i;
        i = void 0;
        const C = this.testSchemaAt(e, b.schema, b.lastIndex);
        if (C) {
          p = {
            schema: b.schema,
            index: b.index,
            lastIndex: b.lastIndex + C
          };
          break;
        }
      }
      let A = p;
      if ((!A || o && (o.index < A.index || o.index === A.index && o.lastIndex > A.lastIndex)) && (A = o), (!A || s && (s.index < A.index || s.index === A.index && s.lastIndex > A.lastIndex)) && (A = s), !A) break;
      A === o ? o = void 0 : A === s && (s = void 0);
      const v = new $s(e, A.schema, A.index, A.lastIndex);
      v.schema ? this.__schemas__[v.schema].normalize(v, this) : this.normalize(v), t.push(v), g = A.lastIndex;
    }
    return t.length ? t : null;
  }
  /**
  * Returns fully-formed (not fuzzy) link if it starts at the beginning
  * of the string, and null otherwise.
  *
  * @param text Text to scan.
  */
  matchAtStart(e) {
    if (!e.length) return null;
    const t = this.re.get_schema_at_start().exec(e);
    if (!t) return null;
    const n = this.testSchemaAt(e, t[2], t[0].length);
    if (!n) return null;
    const a = new $s(e, t[2], t.index + t[1].length, t.index + t[0].length + n);
    return this.__schemas__[a.schema].normalize(a, this), a;
  }
  /**
  * Load (or merge) new TLDs list. Those are used for fuzzy links (without
  * prefix) to avoid false positives. By default this algorithm is used:
  *
  * - hostname with any 2-letter root zones are ok.
  * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
  *   are ok.
  * - encoded (`xn--...`) root zones are ok.
  *
  * If list is replaced, then exact match for 2-chars root zones will be checked.
  *
  * @param list List of TLDs.
  * @param keepOld Merge with current list if `true` (`false` by default).
  */
  tlds(e, t = !1) {
    return e = Array.isArray(e) ? e : [e], t ? this.__opts__.tlds = this.__opts__.tlds.concat(e) : this.__opts__.tlds = e, this.re.set({
      ...this.__opts__,
      schema_names: Object.keys(this.__schemas__)
    }), this;
  }
  /**
  * Default normalizer (if schema does not define its own).
  *
  * @param match Match to normalize.
  */
  normalize(e) {
    e.schema || (e.url = `http://${e.url}`), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = `mailto:${e.url}`);
  }
};
const un = 2147483647, nt = 36, Vl = 1, Hn = 26, _h = 38, Sh = 700, Ri = 72, Pi = 128, Yi = "-", Ih = /^xn--/, Mh = /[^\0-\x7F]/, Nh = /[\x2E\u3002\uFF0E\uFF61]/g, Th = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Cr = nt - Vl, at = Math.floor, br = String.fromCharCode;
function _t(e) {
  throw new RangeError(Th[e]);
}
function Oh(e, t) {
  const n = [];
  let a = e.length;
  for (; a--; )
    n[a] = t(e[a]);
  return n;
}
function Hi(e, t) {
  const n = e.split("@");
  let a = "";
  n.length > 1 && (a = n[0] + "@", e = n[1]), e = e.replace(Nh, ".");
  const r = e.split("."), l = Oh(r, t).join(".");
  return a + l;
}
function Wi(e) {
  const t = [];
  let n = 0;
  const a = e.length;
  for (; n < a; ) {
    const r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      const l = e.charCodeAt(n++);
      (l & 64512) == 56320 ? t.push(((r & 1023) << 10) + (l & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
const Rh = (e) => String.fromCodePoint(...e), Ph = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : nt;
}, Vs = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, $i = function(e, t, n) {
  let a = 0;
  for (e = n ? at(e / Sh) : e >> 1, e += at(e / t); e > Cr * Hn >> 1; a += nt)
    e = at(e / Cr);
  return at(a + (Cr + 1) * e / (e + _h));
}, Vi = function(e) {
  const t = [], n = e.length;
  let a = 0, r = Pi, l = Ri, s = e.lastIndexOf(Yi);
  s < 0 && (s = 0);
  for (let o = 0; o < s; ++o)
    e.charCodeAt(o) >= 128 && _t("not-basic"), t.push(e.charCodeAt(o));
  for (let o = s > 0 ? s + 1 : 0; o < n; ) {
    const i = a;
    for (let c = 1, d = nt; ; d += nt) {
      o >= n && _t("invalid-input");
      const g = Ph(e.charCodeAt(o++));
      g >= nt && _t("invalid-input"), g > at((un - a) / c) && _t("overflow"), a += g * c;
      const h = d <= l ? Vl : d >= l + Hn ? Hn : d - l;
      if (g < h)
        break;
      const f = nt - h;
      c > at(un / f) && _t("overflow"), c *= f;
    }
    const u = t.length + 1;
    l = $i(a - i, u, i == 0), at(a / u) > un - r && _t("overflow"), r += at(a / u), a %= u, t.splice(a++, 0, r);
  }
  return String.fromCodePoint(...t);
}, Li = function(e) {
  const t = [];
  e = Wi(e);
  const n = e.length;
  let a = Pi, r = 0, l = Ri;
  for (const i of e)
    i < 128 && t.push(br(i));
  const s = t.length;
  let o = s;
  for (s && t.push(Yi); o < n; ) {
    let i = un;
    for (const c of e)
      c >= a && c < i && (i = c);
    const u = o + 1;
    i - a > at((un - r) / u) && _t("overflow"), r += (i - a) * u, a = i;
    for (const c of e)
      if (c < a && ++r > un && _t("overflow"), c === a) {
        let d = r;
        for (let g = nt; ; g += nt) {
          const h = g <= l ? Vl : g >= l + Hn ? Hn : g - l;
          if (d < h)
            break;
          const f = d - h, p = nt - h;
          t.push(
            br(Vs(h + f % p, 0))
          ), d = at(f / p);
        }
        t.push(br(Vs(d, 0))), l = $i(r, u, o === s), r = 0, ++o;
      }
    ++r, ++a;
  }
  return t.join("");
}, Yh = function(e) {
  return Hi(e, function(t) {
    return Ih.test(t) ? Vi(t.slice(4).toLowerCase()) : t;
  });
}, Hh = function(e) {
  return Hi(e, function(t) {
    return Mh.test(t) ? "xn--" + Li(t) : t;
  });
}, Ls = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Wi,
    encode: Rh
  },
  decode: Vi,
  encode: Li,
  toASCII: Hh,
  toUnicode: Yh
};
/*! markdown-it 15.0.1 https://github.com/markdown-it/markdown-it @license MIT */
var Qs = Object.defineProperty, Qi = (e, t) => {
  let n = {};
  for (var a in e) Qs(n, a, {
    get: e[a],
    enumerable: !0
  });
  return Qs(n, Symbol.toStringTag, { value: "Module" }), n;
}, Wh = /* @__PURE__ */ Qi({
  arrayReplaceAt: () => $h,
  asciiTrim: () => ja,
  callable: () => Ki,
  escapeHtml: () => Nt,
  escapeRE: () => zh,
  fromCodePoint: () => Wn,
  isMdAsciiPunct: () => Ln,
  isPunctChar: () => ji,
  isPunctCharCode: () => Vn,
  isSpace: () => se,
  isValidEntityCode: () => Ll,
  isWhiteSpace: () => $n,
  lib: () => Xh,
  normalizeReference: () => Ga,
  unescapeAll: () => An,
  unescapeMd: () => Kh
});
function Ki(e) {
  const t = function(...n) {
    return Reflect.construct(e, n, new.target && new.target !== t ? new.target : e);
  };
  return Object.defineProperty(t, "name", { value: e.name }), Object.setPrototypeOf(t, e), t.prototype = e.prototype, t;
}
function $h(e, t, n) {
  return [].concat(e.slice(0, t), n, e.slice(t + 1));
}
function Ll(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function Wn(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), n = 56320 + (e & 1023);
    return String.fromCharCode(t, n);
  }
  return String.fromCharCode(e);
}
var Gi = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Vh = new RegExp(`${Gi.source}|${/&([a-z#][a-z0-9]{1,31});/gi.source}`, "gi"), Lh = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Qh(e, t) {
  if (t.charCodeAt(0) === 35 && Lh.test(t)) {
    const a = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return Ll(a) ? Wn(a) : e;
  }
  const n = Oi(e);
  return n !== e ? n : e;
}
function Kh(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(Gi, "$1");
}
function An(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(Vh, function(t, n, a) {
    return n || Qh(t, a);
  });
}
var Gh = /[&<>"]/, jh = /[&<>"]/g, Uh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Zh(e) {
  return Uh[e];
}
function Nt(e) {
  return Gh.test(e) ? e.replace(jh, Zh) : e;
}
var Jh = /[.?*+^$[\]\\(){}|-]/g;
function zh(e) {
  return e.replace(Jh, "\\$&");
}
function se(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function $n(e) {
  if (e >= 8192 && e <= 8202) return !0;
  switch (e) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function ji(e) {
  return $l.test(e) || Ni.test(e);
}
function Vn(e) {
  return ji(Wn(e));
}
function Ln(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Ga(e) {
  return e = e.trim().replace(/\s+/g, " "), e.toLowerCase().toUpperCase();
}
function Ks(e) {
  return e === 32 || e === 9 || e === 10 || e === 13;
}
function ja(e) {
  let t = 0;
  for (; t < e.length && Ks(e.charCodeAt(t)); t++) ;
  let n = e.length - 1;
  for (; n >= t && Ks(e.charCodeAt(n)); n--) ;
  return e.slice(t, n + 1);
}
var Xh = {
  mdurl: ih,
  ucmicro: ch
};
function qh(e, t, n) {
  let a, r, l, s;
  const o = e.posMax, i = e.pos;
  for (e.pos = t + 1, a = 1; e.pos < o; ) {
    if (l = e.src.charCodeAt(e.pos), l === 93 && (a--, a === 0)) {
      r = !0;
      break;
    }
    if (s = e.pos, e.md.inline.skipToken(e), l === 91) {
      if (s === e.pos - 1) a++;
      else if (n)
        return e.pos = i, -1;
    }
  }
  let u = -1;
  return r && (u = e.pos), e.pos = i, u;
}
function ef(e, t, n) {
  let a, r = t;
  const l = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(r) === 60) {
    for (r++; r < n; ) {
      if (a = e.charCodeAt(r), a === 10 || a === 60) return l;
      if (a === 62)
        return l.pos = r + 1, l.str = An(e.slice(t + 1, r)), l.ok = !0, l;
      if (a === 92 && r + 1 < n) {
        r += 2;
        continue;
      }
      r++;
    }
    return l;
  }
  let s = 0;
  for (; r < n && (a = e.charCodeAt(r), !(a === 32 || a < 32 || a === 127)); ) {
    if (a === 92 && r + 1 < n) {
      if (e.charCodeAt(r + 1) === 32) {
        r++;
        continue;
      }
      r += 2;
      continue;
    }
    if (a === 40 && (s++, s > 32))
      return l;
    if (a === 41) {
      if (s === 0) break;
      s--;
    }
    r++;
  }
  return t === r || s !== 0 || (l.str = An(e.slice(t, r)), l.pos = r, l.ok = !0), l;
}
function tf(e, t, n, a) {
  let r, l = t;
  const s = {
    ok: !1,
    can_continue: !1,
    pos: 0,
    str: "",
    marker: 0
  };
  if (a)
    s.str = a.str, s.marker = a.marker;
  else {
    if (l >= n) return s;
    let o = e.charCodeAt(l);
    if (o !== 34 && o !== 39 && o !== 40) return s;
    t++, l++, o === 40 && (o = 41), s.marker = o;
  }
  for (; l < n; ) {
    if (r = e.charCodeAt(l), r === s.marker)
      return s.pos = l + 1, s.str += An(e.slice(t, l)), s.ok = !0, s;
    if (r === 40 && s.marker === 41) return s;
    r === 92 && l + 1 < n && l++, l++;
  }
  return s.can_continue = !0, s.str += An(e.slice(t, l)), s;
}
var nf = /* @__PURE__ */ Qi({
  parseLinkDestination: () => ef,
  parseLinkLabel: () => qh,
  parseLinkTitle: () => tf
});
function Qn(e) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qn(e);
}
function af(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t);
    if (Qn(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rf(e) {
  var t = af(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function Q(e, t, n) {
  return (t = rf(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Jt = class {
  constructor(e, t, n) {
    Q(
      this,
      /**
      * Source map info. Format: `[ line_begin, line_end ]`
      */
      "map",
      null
    ), Q(
      this,
      /**
      * nesting level, the same as `state.level`
      */
      "level",
      0
    ), Q(
      this,
      /**
      * An array of child nodes (inline and img tokens)
      */
      "children",
      null
    ), Q(
      this,
      /**
      * In a case of self-closing tag (code, html, fence, etc.),
      * it has contents of this tag.
      */
      "content",
      ""
    ), Q(
      this,
      /**
      * '*' or '_' for emphasis, fence string for fence, etc.
      */
      "markup",
      ""
    ), Q(
      this,
      /**
      * Additional information:
      *
      * - Info string for "fence" tokens
      * - The value "auto" for autolink "link_open" and "link_close" tokens
      * - The string value of the item marker for ordered-list "list_item_open" tokens
      */
      "info",
      ""
    ), Q(
      this,
      /**
      * True for block-level tokens, false for inline tokens.
      * Used in renderer to calculate line breaks
      */
      "block",
      !1
    ), Q(
      this,
      /**
      * If it's true, ignore this element when rendering. Used for tight lists
      * to hide paragraphs.
      */
      "hidden",
      !1
    ), this.type = e, this.tag = t, this.attrs = null, this.nesting = n, this.meta = null;
  }
  /**
  * Search attribute index by name.
  */
  attrIndex(e) {
    if (!this.attrs) return -1;
    const t = this.attrs;
    for (let n = 0, a = t.length; n < a; n++) if (t[n][0] === e) return n;
    return -1;
  }
  /**
  * Add `[ name, value ]` attribute to list. Init attrs if necessary
  */
  attrPush(e) {
    this.attrs ? this.attrs.push(e) : this.attrs = [e];
  }
  /**
  * Set `name` attribute to `value`. Override old value if exists.
  */
  attrSet(e, t) {
    const n = this.attrIndex(e), a = [e, t];
    n < 0 ? this.attrPush(a) : this.attrs[n] = a;
  }
  /**
  * Get the value of attribute `name`, or null if it does not exist.
  */
  attrGet(e) {
    const t = this.attrIndex(e);
    let n = null;
    return t >= 0 && (n = this.attrs[t][1]), n;
  }
  /**
  * Join value to existing attribute via space. Or create new attribute if not
  * exists. Useful to operate with token classes.
  */
  attrJoin(e, t) {
    const n = this.attrIndex(e);
    n < 0 ? this.attrPush([e, t]) : this.attrs[n][1] = `${this.attrs[n][1]} ${t}`;
  }
}, Kn = class {
  constructor() {
    Q(
      this,
      /** @internal */
      "__rules__",
      []
    ), Q(
      this,
      /** @internal */
      "__cache__",
      null
    );
  }
  /** @internal */
  __find__(e) {
    for (let t = 0; t < this.__rules__.length; t++) if (this.__rules__[t].name === e) return t;
    return -1;
  }
  /** @internal */
  __compile__() {
    const e = /* @__PURE__ */ new Set();
    this.__rules__.forEach((t) => {
      t.enabled && t.alt.forEach((n) => {
        n && e.add(n);
      });
    }), this.__cache__ = /* @__PURE__ */ Object.create(null), this.__cache__[""] = [], this.__rules__.forEach((t) => {
      t.enabled && this.__cache__[""].push(t.fn);
    }), e.forEach((t) => {
      this.__cache__[t] = [], this.__rules__.forEach((n) => {
        n.enabled && n.alt.indexOf(t) >= 0 && this.__cache__[t].push(n.fn);
      });
    });
  }
  /**
  * Replace rule by name with new function & options. Throws error if name not
  * found.
  *
  * @example Replace existing typographer replacement rule with new one
  * ```javascript
  * import MarkdownIt from 'markdown-it'
  * const md = new MarkdownIt()
  *
  * md.core.ruler.at('replacements', function replace(state) {
  *   //...
  * });
  * ```
  */
  at(e, t, n = {}) {
    const a = this.__find__(e);
    if (a === -1) throw new Error(`Parser rule not found: ${e}`);
    this.__rules__[a].fn = t, this.__rules__[a].alt = n.alt || [], this.__cache__ = null;
  }
  /**
  * Add new rule to chain before one with given name. See also
  * {@link Ruler.after}, {@link Ruler.push}.
  *
  * @example
  * ```javascript
  * import MarkdownIt from 'markdown-it'
  * const md = new MarkdownIt()
  *
  * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
  *   //...
  * });
  * ```
  */
  before(e, t, n, a = {}) {
    const r = this.__find__(e);
    if (r === -1) throw new Error(`Parser rule not found: ${e}`);
    this.__rules__.splice(r, 0, {
      name: t,
      enabled: !0,
      fn: n,
      alt: a.alt || []
    }), this.__cache__ = null;
  }
  /**
  * Add new rule to chain after one with given name. See also
  * {@link Ruler.before}, {@link Ruler.push}.
  *
  * @example
  * ```javascript
  * import MarkdownIt from 'markdown-it'
  * const md = new MarkdownIt()
  *
  * md.inline.ruler.after('text', 'my_rule', function replace(state) {
  *   //...
  * });
  * ```
  */
  after(e, t, n, a = {}) {
    const r = this.__find__(e);
    if (r === -1) throw new Error(`Parser rule not found: ${e}`);
    this.__rules__.splice(r + 1, 0, {
      name: t,
      enabled: !0,
      fn: n,
      alt: a.alt || []
    }), this.__cache__ = null;
  }
  /**
  * Push new rule to the end of chain. See also
  * {@link Ruler.before}, {@link Ruler.after}.
  *
  * @example
  * ```javascript
  * import MarkdownIt from 'markdown-it'
  * const md = new MarkdownIt()
  *
  * md.core.ruler.push('my_rule', function replace(state) {
  *   //...
  * });
  * ```
  */
  push(e, t, n = {}) {
    this.__rules__.push({
      name: e,
      enabled: !0,
      fn: t,
      alt: n.alt || []
    }), this.__cache__ = null;
  }
  /**
  * Enable rules with given names. If any rule name not found - throw Error.
  * Errors can be disabled by second param.
  *
  * See also {@link Ruler.disable}, {@link Ruler.enableOnly}.
  *
  * Returns list of found rule names (if no exception happened).
  */
  enable(e, t = !1) {
    Array.isArray(e) || (e = [e]);
    const n = [];
    return e.forEach((a) => {
      const r = this.__find__(a);
      if (r < 0) {
        if (t) return;
        throw new Error(`Rules manager: invalid rule name ${a}`);
      }
      this.__rules__[r].enabled = !0, n.push(a);
    }), this.__cache__ = null, n;
  }
  /**
  * Enable rules with given names, and disable everything else. If any rule name
  * not found - throw Error. Errors can be disabled by second param.
  *
  * See also {@link Ruler.disable}, {@link Ruler.enable}.
  */
  enableOnly(e, t = !1) {
    Array.isArray(e) || (e = [e]), this.__rules__.forEach((n) => {
      n.enabled = !1;
    }), this.enable(e, t);
  }
  /**
  * Disable rules with given names. If any rule name not found - throw Error.
  * Errors can be disabled by second param.
  *
  * See also {@link Ruler.enable}, {@link Ruler.enableOnly}.
  *
  * Returns list of found rule names (if no exception happened).
  */
  disable(e, t = !1) {
    Array.isArray(e) || (e = [e]);
    const n = [];
    return e.forEach((a) => {
      const r = this.__find__(a);
      if (r < 0) {
        if (t) return;
        throw new Error(`Rules manager: invalid rule name ${a}`);
      }
      this.__rules__[r].enabled = !1, n.push(a);
    }), this.__cache__ = null, n;
  }
  /**
  * Return array of active functions (rules) for given chain name. It analyzes
  * rules configuration, compiles caches if not exists and returns result.
  *
  * Default chain name is `''` (empty string). It can't be skipped. That's
  * done intentionally, to keep signature monomorphic for high speed.
  */
  getRules(e) {
    return this.__cache__ || this.__compile__(), this.__cache__[e] || [];
  }
}, it = {};
it.code_inline = function(e, t, n, a, r) {
  const l = e[t];
  return `<code${r.renderAttrs(l)}>${Nt(l.content)}</code>`;
};
it.code_block = function(e, t, n, a, r) {
  const l = e[t];
  return `<pre${r.renderAttrs(l)}><code>${Nt(e[t].content)}</code></pre>
`;
};
it.fence = function(e, t, n, a, r) {
  const l = e[t], s = l.info ? An(l.info).trim() : "";
  let o = "", i = "";
  if (s) {
    const c = s.split(/(\s+)/g);
    o = c[0], i = c.slice(2).join("");
  }
  let u;
  if (n.highlight ? u = n.highlight(l.content, o, i) || Nt(l.content) : u = Nt(l.content), u.indexOf("<pre") === 0) return u + `
`;
  if (s) {
    const c = l.attrIndex("class"), d = l.attrs ? l.attrs.slice() : [];
    c < 0 ? d.push(["class", `${n.langPrefix}${o}`]) : (d[c] = [d[c][0], d[c][1]], d[c][1] += ` ${n.langPrefix}${o}`);
    const g = { attrs: d };
    return `<pre><code${r.renderAttrs(g)}>${u}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(l)}>${u}</code></pre>
`;
};
it.image = function(e, t, n, a, r) {
  const l = e[t];
  return l.attrs[l.attrIndex("alt")][1] = r.renderInlineAsText(l.children, n, a), r.renderToken(e, t, n);
};
it.hardbreak = function(e, t, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
it.softbreak = function(e, t, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
it.text = function(e, t) {
  return Nt(e[t].content);
};
it.html_block = function(e, t) {
  return e[t].content;
};
it.html_inline = function(e, t) {
  return e[t].content;
};
var Ui = class {
  constructor() {
    Q(
      this,
      /**
      * Contains render rules for tokens. Can be updated and extended.
      *
      * See [source code](https://github.com/markdown-it/markdown-it/blob/master/src/renderer.ts)
      * for more details and examples.
      *
      * @example Custom render rules
      * ```javascript
      * import MarkdownIt from 'markdown-it'
      * const md = new MarkdownIt()
      *
      * md.renderer.rules.strong_open  = function () { return '<b>'; };
      * md.renderer.rules.strong_close = function () { return '</b>'; };
      *
      * const result = md.renderInline(...);
      * ```
      *
      * @example Each rule is called as independent static function with fixed signature
      * ```javascript
      * function my_token_render(tokens, idx, options, env, renderer) {
      *   // ...
      *   return renderedHTML;
      * }
      * ```
      */
      "rules",
      Object.assign({}, it)
    );
  }
  /**
  * Render token attributes to string.
  */
  renderAttrs(e) {
    let t, n, a;
    if (!e.attrs) return "";
    for (a = "", t = 0, n = e.attrs.length; t < n; t++) a += ` ${Nt(e.attrs[t][0])}="${Nt(String(e.attrs[t][1]))}"`;
    return a;
  }
  /**
  * Default token renderer. Can be overriden by custom function
  * in {@link Renderer.rules}.
  */
  renderToken(e, t, n) {
    const a = e[t];
    let r = "";
    if (a.hidden) return "";
    let l = t - 1;
    for (; l >= 0 && e[l].hidden && e[l].nesting === 0; ) l--;
    a.block && a.nesting !== -1 && l >= 0 && e[l].hidden && e[l].nesting === -1 && (r += `
`), r += (a.nesting === -1 ? "</" : "<") + a.tag, r += this.renderAttrs(a), a.nesting === 0 && n.xhtmlOut && (r += " /");
    let s = !1;
    if (a.block && (s = !0, a.nesting === 1)) {
      let o = t + 1;
      for (; o < e.length && e[o].hidden && e[o].nesting === 0; ) o++;
      if (o < e.length) {
        const i = e[o];
        (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === a.tag) && (s = !1);
      }
    }
    return r += s ? `>
` : ">", r;
  }
  /**
  * The same as {@link Renderer.render}, but for single token of `inline` type.
  */
  renderInline(e, t, n) {
    let a = "";
    const r = this.rules;
    for (let l = 0, s = e.length; l < s; l++) {
      const o = e[l].type;
      typeof r[o] < "u" ? a += r[o](e, l, t, n, this) : a += this.renderToken(e, l, t);
    }
    return a;
  }
  /**
  * Special kludge for image `alt` attributes to conform CommonMark spec.
  * Don't try to use it! Spec requires to show `alt` content with stripped markup,
  * instead of simple escaping.
  */
  renderInlineAsText(e, t, n) {
    let a = "";
    for (let r = 0, l = e.length; r < l; r++) switch (e[r].type) {
      case "text":
      case "code_inline":
        a += e[r].content;
        break;
      case "image":
        a += this.renderInlineAsText(e[r].children, t, n);
        break;
      case "html_inline":
      case "html_block":
        a += e[r].content;
        break;
      case "softbreak":
      case "hardbreak":
        a += `
`;
    }
    return a;
  }
  /**
  * Takes token stream and generates HTML. Probably, you will never need to call
  * this method directly.
  */
  render(e, t, n) {
    let a = "";
    const r = this.rules;
    for (let l = 0, s = e.length; l < s; l++) {
      const o = e[l].type;
      o === "inline" ? a += this.renderInline(e[l].children, t, n) : typeof r[o] < "u" ? a += r[o](e, l, t, n, this) : a += this.renderToken(e, l, t);
    }
    return a;
  }
}, Zi = class {
  constructor(e, t, n) {
    Q(this, "tokens", []), Q(this, "inlineMode", !1), Q(this, "Token", Jt), this.src = e, this.env = n, this.md = t;
  }
}, lf = /\r\n?/g, sf = /\0/g;
function of(e) {
  let t;
  t = e.src.replace(lf, `
`), t = t.replace(sf, "�"), e.src = t;
}
function uf(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function cf(e) {
  const t = e.tokens;
  let n = 0;
  for (let a = 0; a < t.length; a++)
    t[a].type !== "reference_definition" && (a !== n && (t[n] = t[a]), n++);
  t.length !== n && (t.length = n);
}
function df(e) {
  const t = e.tokens;
  for (let n = 0, a = t.length; n < a; n++) {
    const r = t[n];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function hf(e) {
  return /^<a[>\s]/i.test(e);
}
function ff(e) {
  return /^<\/a\s*>/i.test(e);
}
function Af(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let n = 0, a = t.length; n < a; n++) {
      if (t[n].type !== "inline" || !e.md.linkify.test(t[n].content)) continue;
      const r = t[n].children, l = [];
      let s = 0;
      for (let o = r.length - 1; o >= 0; o--) {
        const i = r[o];
        if (i.type === "link_close") {
          for (o--; r[o].level !== i.level && r[o].type !== "link_open"; ) o--;
          continue;
        }
        if (i.type === "html_inline" && (hf(i.content) && s > 0 && s--, ff(i.content) && s++), !(s > 0) && i.type === "text" && e.md.linkify.test(i.content)) {
          const u = i.content;
          let c = e.md.linkify.match(u);
          const d = [];
          let g = i.level, h = 0;
          c.length > 0 && c[0].index === 0 && o > 0 && r[o - 1].type === "text_special" && (c = c.slice(1));
          for (let f = 0; f < c.length; f++) {
            const p = c[f].url, A = e.md.normalizeLink(p);
            if (!e.md.validateLink(A)) continue;
            let v = c[f].text;
            c[f].schema ? c[f].schema === "mailto:" && !/^mailto:/i.test(v) ? v = e.md.normalizeLinkText(`mailto:${v}`).replace(/^mailto:/, "") : v = e.md.normalizeLinkText(v) : v = e.md.normalizeLinkText(`http://${v}`).replace(/^http:\/\//, "");
            const b = c[f].index;
            if (b > h) {
              const y = new e.Token("text", "", 0);
              y.content = u.slice(h, b), y.level = g, d.push(y);
            }
            const C = new e.Token("link_open", "a", 1);
            C.attrs = [["href", A]], C.level = g++, C.markup = "linkify", C.info = "auto", d.push(C);
            const D = new e.Token("text", "", 0);
            D.content = v, D.level = g, d.push(D);
            const B = new e.Token("link_close", "a", -1);
            B.level = --g, B.markup = "linkify", B.info = "auto", d.push(B), h = c[f].lastIndex;
          }
          if (h < u.length) {
            const f = new e.Token("text", "", 0);
            f.content = u.slice(h), f.level = g, d.push(f);
          }
          l.push({
            index: o,
            nodes: d
          });
        }
      }
      if (l.length > 0) {
        let o = r.length;
        for (const d of l) o += d.nodes.length - 1;
        const i = new Array(o);
        let u = 0, c = 0;
        l.reverse();
        for (let d = 0; d < r.length; d++) {
          const g = l[u];
          if (g?.index === d) {
            for (const h of g.nodes) i[c++] = h;
            u++;
          } else i[c++] = r[d];
        }
        t[n].children = i;
      }
    }
}
var Ji = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, gf = /\((c|tm|r)\)/i, mf = /\((c|tm|r)\)/gi, pf = {
  c: "©",
  r: "®",
  tm: "™"
};
function vf(e, t) {
  return pf[t.toLowerCase()];
}
function yf(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const a = e[n];
    a.type === "text" && !t && (a.content = a.content.replace(mf, vf)), a.type === "link_open" && a.info === "auto" && t--, a.type === "link_close" && a.info === "auto" && t++;
  }
}
function Df(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const a = e[n];
    a.type === "text" && !t && Ji.test(a.content) && (a.content = a.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")), a.type === "link_open" && a.info === "auto" && t--, a.type === "link_close" && a.info === "auto" && t++;
  }
}
function Cf(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (gf.test(e.tokens[t].content) && yf(e.tokens[t].children), Ji.test(e.tokens[t].content) && Df(e.tokens[t].children));
}
var bf = /['"]/, Gs = /['"]/g, js = "’";
function ha(e, t, n, a) {
  e[t] || (e[t] = []), e[t].push({
    pos: n,
    ch: a
  });
}
function wf(e, t) {
  let n = "", a = 0;
  t.sort((r, l) => r.pos - l.pos);
  for (let r = 0; r < t.length; r++) {
    const l = t[r];
    n += e.slice(a, l.pos) + l.ch, a = l.pos + 1;
  }
  return n + e.slice(a);
}
function Ff(e, t) {
  let n;
  const a = [], r = {};
  for (let l = 0; l < e.length; l++) {
    const s = e[l], o = e[l].level;
    for (n = a.length - 1; n >= 0 && !(a[n].level <= o); n--) ;
    if (a.length = n + 1, s.type !== "text") continue;
    const i = s.content;
    let u = 0;
    const c = i.length;
    e: for (; u < c; ) {
      Gs.lastIndex = u;
      const d = Gs.exec(i);
      if (!d) break;
      let g = !0, h = !0;
      u = d.index + 1;
      const f = d[0] === "'";
      let p = 32;
      if (d.index - 1 >= 0) p = i.charCodeAt(d.index - 1);
      else for (n = l - 1; n >= 0 && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n--)
        if (e[n].content) {
          p = e[n].content.charCodeAt(e[n].content.length - 1);
          break;
        }
      let A = 32;
      if (u < c) A = i.charCodeAt(u);
      else for (n = l + 1; n < e.length && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n++)
        if (e[n].content) {
          A = e[n].content.charCodeAt(0);
          break;
        }
      const v = Ln(p) || Vn(p), b = Ln(A) || Vn(A), C = $n(p), D = $n(A);
      if (D ? g = !1 : b && (C || v || (g = !1)), C ? h = !1 : v && (D || b || (h = !1)), A === 34 && d[0] === '"' && p >= 48 && p <= 57 && (h = g = !1), g && h && (g = v, h = b), !g && !h) {
        f && ha(r, l, d.index, js);
        continue;
      }
      if (h) for (n = a.length - 1; n >= 0; n--) {
        let B = a[n];
        if (a[n].level < o) break;
        if (B.single === f && a[n].level === o) {
          B = a[n];
          let y, x;
          f ? (y = t.md.options.quotes[2], x = t.md.options.quotes[3]) : (y = t.md.options.quotes[0], x = t.md.options.quotes[1]), ha(r, l, d.index, x), ha(r, B.token, B.pos, y), a.length = n;
          continue e;
        }
      }
      g ? a.push({
        token: l,
        pos: d.index,
        single: f,
        level: o
      }) : h && f && ha(r, l, d.index, js);
    }
  }
  Object.keys(r).forEach(function(l) {
    const s = Number(l);
    e[s].content = wf(e[s].content, r[l]);
  });
}
function kf(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !bf.test(e.tokens[t].content) || Ff(e.tokens[t].children, e);
}
function Ef(e) {
  let t, n;
  const a = e.length;
  for (t = 0; t < a; t++) e[t].type === "text_special" && (e[t].type = "text");
  for (t = n = 0; t < a; t++) e[t].type === "text" && t + 1 < a && e[t + 1].type === "text" ? e[t + 1].content = e[t].content + e[t + 1].content : (t !== n && (e[n] = e[t]), n++);
  t !== n && (e.length = n);
}
function Bf(e) {
  let t, n;
  const a = e.tokens, r = a.length;
  for (let l = 0; l < r; l++) {
    if (a[l].type !== "inline") continue;
    const s = a[l].children, o = s.length;
    for (t = 0; t < o; t++)
      s[t].type === "text_special" && (s[t].type = "text"), s[t].children && Ef(s[t].children);
    for (t = n = 0; t < o; t++) s[t].type === "text" && t + 1 < o && s[t + 1].type === "text" ? s[t + 1].content = s[t].content + s[t + 1].content : (t !== n && (s[n] = s[t]), n++);
    t !== n && (s.length = n);
  }
}
var wr = [
  ["normalize", of],
  ["block", uf],
  ["strip_references", cf],
  ["inline", df],
  ["linkify", Af],
  ["replacements", Cf],
  ["smartquotes", kf],
  ["text_join", Bf]
], zi = class {
  constructor() {
    Q(
      this,
      /**
      * {@link Ruler} instance. Keep configuration of core rules.
      */
      "ruler",
      new Kn()
    ), Q(this, "State", Zi);
    for (let e = 0; e < wr.length; e++) this.ruler.push(wr[e][0], wr[e][1]);
  }
  /**
  * Executes core chain rules.
  */
  process(e) {
    const t = this.ruler.getRules("");
    for (let n = 0, a = t.length; n < a; n++) t[n](e);
  }
}, Xi = class {
  constructor(e, t, n, a) {
    Q(this, "bMarks", []), Q(this, "eMarks", []), Q(this, "tShift", []), Q(this, "sCount", []), Q(this, "bsCount", []), Q(this, "blkIndent", 0), Q(this, "line", 0), Q(this, "lineMax", 0), Q(this, "tight", !1), Q(this, "listIndent", -1), Q(this, "parentType", "root"), Q(this, "level", 0), Q(this, "Token", Jt), this.src = e, this.md = t, this.env = n, this.tokens = a;
    const r = this.src;
    for (let l = 0, s = 0, o = 0, i = 0, u = r.length, c = !1; s < u; s++) {
      const d = r.charCodeAt(s);
      if (!c) if (se(d)) {
        o++, d === 9 ? i += 4 - i % 4 : i++;
        continue;
      } else c = !0;
      (d === 10 || s === u - 1) && (d !== 10 && s++, this.bMarks.push(l), this.eMarks.push(s), this.tShift.push(o), this.sCount.push(i), this.bsCount.push(0), c = !1, o = 0, i = 0, l = s + 1);
    }
    this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  push(e, t, n) {
    const a = new Jt(e, t, n);
    return a.block = !0, n < 0 && this.level--, a.level = this.level, n > 0 && this.level++, this.tokens.push(a), a;
  }
  isEmpty(e) {
    return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
  }
  skipEmptyLines(e) {
    for (let t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++) ;
    return e;
  }
  skipSpaces(e) {
    for (let t = this.src.length; e < t && se(this.src.charCodeAt(e)); e++) ;
    return e;
  }
  skipSpacesBack(e, t) {
    if (e <= t) return e;
    for (; e > t; ) if (!se(this.src.charCodeAt(--e))) return e + 1;
    return e;
  }
  skipChars(e, t) {
    for (let n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++) ;
    return e;
  }
  skipCharsBack(e, t, n) {
    if (e <= n) return e;
    for (; e > n; ) if (t !== this.src.charCodeAt(--e)) return e + 1;
    return e;
  }
  getLines(e, t, n, a) {
    if (e >= t) return "";
    const r = new Array(t - e);
    for (let l = 0, s = e; s < t; s++, l++) {
      let o = 0;
      const i = this.bMarks[s];
      let u = i, c;
      for (s + 1 < t || a ? c = this.eMarks[s] + 1 : c = this.eMarks[s]; u < c && o < n; ) {
        const d = this.src.charCodeAt(u);
        if (se(d)) d === 9 ? o += 4 - (o + this.bsCount[s]) % 4 : o++;
        else if (u - i < this.tShift[s]) o++;
        else break;
        u++;
      }
      o > n ? r[l] = new Array(o - n + 1).join(" ") + this.src.slice(u, c) : r[l] = this.src.slice(u, c);
    }
    return r.join("");
  }
}, xf = 65536;
function Fr(e, t) {
  const n = e.bMarks[t] + e.tShift[t], a = e.eMarks[t];
  return e.src.slice(n, a);
}
function Us(e) {
  const t = [], n = e.length;
  let a = 0, r = e.charCodeAt(a), l = !1, s = 0, o = "";
  for (; a < n; )
    r === 124 && (l ? (o += e.substring(s, a - 1), s = a) : (t.push(o + e.substring(s, a)), o = "", s = a + 1)), l = r === 92, a++, r = e.charCodeAt(a);
  return t.push(o + e.substring(s)), t;
}
function _f(e, t, n, a) {
  if (t + 2 > n) return !1;
  let r = t + 1;
  if (e.sCount[r] < e.blkIndent || e.sCount[r] - e.blkIndent >= 4) return !1;
  let l = e.bMarks[r] + e.tShift[r];
  if (l >= e.eMarks[r]) return !1;
  const s = e.src.charCodeAt(l++);
  if (s !== 124 && s !== 45 && s !== 58 || l >= e.eMarks[r]) return !1;
  const o = e.src.charCodeAt(l++);
  if (o !== 124 && o !== 45 && o !== 58 && !se(o) || s === 45 && se(o)) return !1;
  for (; l < e.eMarks[r]; ) {
    const D = e.src.charCodeAt(l);
    if (D !== 124 && D !== 45 && D !== 58 && !se(D)) return !1;
    l++;
  }
  let i = Fr(e, t + 1), u = i.split("|");
  const c = [];
  for (let D = 0; D < u.length; D++) {
    const B = u[D].trim();
    if (!B) {
      if (D === 0 || D === u.length - 1) continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(B)) return !1;
    B.charCodeAt(B.length - 1) === 58 ? c.push(B.charCodeAt(0) === 58 ? "center" : "right") : B.charCodeAt(0) === 58 ? c.push("left") : c.push("");
  }
  if (i = Fr(e, t).trim(), i.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4) return !1;
  u = Us(i), u.length && u[0] === "" && u.shift(), u.length && u[u.length - 1] === "" && u.pop();
  const d = u.length;
  if (d === 0 || d !== c.length) return !1;
  if (a) return !0;
  const g = e.parentType;
  e.parentType = "table";
  const h = e.md.block.ruler.getRules("blockquote"), f = e.push("table_open", "table", 1), p = [t, 0];
  f.map = p;
  const A = e.push("thead_open", "thead", 1);
  A.map = [t, t + 1];
  const v = e.push("tr_open", "tr", 1);
  v.map = [t, t + 1];
  for (let D = 0; D < u.length; D++) {
    const B = e.push("th_open", "th", 1);
    c[D] && (B.attrs = [["style", `text-align:${c[D]}`]]);
    const y = e.push("inline", "", 0);
    y.content = u[D].trim(), y.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let b, C = 0;
  for (r = t + 2; r < n && !(e.sCount[r] < e.blkIndent); r++) {
    let D = !1;
    for (let y = 0, x = h.length; y < x; y++) if (h[y](e, r, n, !0)) {
      D = !0;
      break;
    }
    if (D || (i = Fr(e, r).trim(), !i) || e.sCount[r] - e.blkIndent >= 4 || (u = Us(i), u.length && u[0] === "" && u.shift(), u.length && u[u.length - 1] === "" && u.pop(), C += d - u.length, C > xf)) break;
    if (r === t + 2) {
      const y = e.push("tbody_open", "tbody", 1);
      y.map = b = [t + 2, 0];
    }
    const B = e.push("tr_open", "tr", 1);
    B.map = [r, r + 1];
    for (let y = 0; y < d; y++) {
      const x = e.push("td_open", "td", 1);
      c[y] && (x.attrs = [["style", `text-align:${c[y]}`]]);
      const S = e.push("inline", "", 0);
      S.content = u[y] ? u[y].trim() : "", S.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return b && (e.push("tbody_close", "tbody", -1), b[1] = r), e.push("table_close", "table", -1), p[1] = r, e.parentType = g, e.line = r, !0;
}
function Sf(e, t, n) {
  if (e.sCount[t] - e.blkIndent < 4) return !1;
  let a = t + 1, r = a;
  for (; a < n; ) {
    if (e.isEmpty(a)) {
      a++;
      continue;
    }
    if (e.sCount[a] - e.blkIndent >= 4) {
      a++, r = a;
      continue;
    }
    break;
  }
  e.line = r;
  const l = e.push("code_block", "code", 0);
  return l.content = e.getLines(t, r, 4 + e.blkIndent, !1) + `
`, l.map = [t, e.line], !0;
}
function If(e, t, n, a) {
  let r = e.bMarks[t] + e.tShift[t], l = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || r + 3 > l) return !1;
  const s = e.src.charCodeAt(r);
  if (s !== 126 && s !== 96) return !1;
  let o = r;
  r = e.skipChars(r, s);
  let i = r - o;
  if (i < 3) return !1;
  const u = e.src.slice(o, r), c = e.src.slice(r, l);
  if (s === 96 && c.indexOf(String.fromCharCode(s)) >= 0)
    return !1;
  if (a) return !0;
  let d = t, g = !1;
  for (; d++, !(d >= n || (r = o = e.bMarks[d] + e.tShift[d], l = e.eMarks[d], r < l && e.sCount[d] < e.blkIndent)); )
    if (e.src.charCodeAt(r) === s && !(e.sCount[d] - e.blkIndent >= 4) && (r = e.skipChars(r, s), !(r - o < i) && (r = e.skipSpaces(r), !(r < l)))) {
      g = !0;
      break;
    }
  i = e.sCount[t], e.line = d + (g ? 1 : 0);
  const h = e.push("fence", "code", 0);
  return h.info = c, h.content = e.getLines(t + 1, d, i, !0), h.markup = u, h.map = [t, e.line], !0;
}
function Mf(e, t, n, a) {
  let r = e.bMarks[t] + e.tShift[t], l = e.eMarks[t];
  const s = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62) return !1;
  if (a) return !0;
  const o = [], i = [], u = [], c = [], d = e.md.block.ruler.getRules("blockquote"), g = e.parentType;
  e.parentType = "blockquote";
  let h = !1, f;
  for (f = t; f < n; f++) {
    const C = e.sCount[f] < e.blkIndent;
    if (r = e.bMarks[f] + e.tShift[f], l = e.eMarks[f], r >= l) break;
    if (e.src.charCodeAt(r++) === 62 && !C) {
      let B = e.sCount[f] + 1, y, x;
      e.src.charCodeAt(r) === 32 ? (r++, B++, x = !1, y = !0) : e.src.charCodeAt(r) === 9 ? (y = !0, (e.bsCount[f] + B) % 4 === 3 ? (r++, B++, x = !1) : x = !0) : y = !1;
      let S = B;
      for (o.push(e.bMarks[f]), e.bMarks[f] = r; r < l; ) {
        const I = e.src.charCodeAt(r);
        if (se(I)) I === 9 ? S += 4 - (S + e.bsCount[f] + (x ? 1 : 0)) % 4 : S++;
        else break;
        r++;
      }
      h = r >= l, i.push(e.bsCount[f]), e.bsCount[f] = e.sCount[f] + 1 + (y ? 1 : 0), u.push(e.sCount[f]), e.sCount[f] = S - B, c.push(e.tShift[f]), e.tShift[f] = r - e.bMarks[f];
      continue;
    }
    if (h) break;
    let D = !1;
    for (let B = 0, y = d.length; B < y; B++) if (d[B](e, f, n, !0)) {
      D = !0;
      break;
    }
    if (D) {
      e.lineMax = f, e.blkIndent !== 0 && (o.push(e.bMarks[f]), i.push(e.bsCount[f]), c.push(e.tShift[f]), u.push(e.sCount[f]), e.sCount[f] -= e.blkIndent);
      break;
    }
    o.push(e.bMarks[f]), i.push(e.bsCount[f]), c.push(e.tShift[f]), u.push(e.sCount[f]), e.sCount[f] = -1;
  }
  const p = e.blkIndent;
  e.blkIndent = 0;
  const A = e.push("blockquote_open", "blockquote", 1);
  A.markup = ">";
  const v = [t, 0];
  A.map = v, e.md.block.tokenize(e, t, f);
  const b = e.push("blockquote_close", "blockquote", -1);
  b.markup = ">", e.lineMax = s, e.parentType = g, v[1] = e.line;
  for (let C = 0; C < c.length; C++)
    e.bMarks[C + t] = o[C], e.tShift[C + t] = c[C], e.sCount[C + t] = u[C], e.bsCount[C + t] = i[C];
  return e.blkIndent = p, !0;
}
function Nf(e, t, n, a) {
  const r = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4) return !1;
  let l = e.bMarks[t] + e.tShift[t];
  const s = e.src.charCodeAt(l++);
  if (s !== 42 && s !== 45 && s !== 95) return !1;
  let o = 1;
  for (; l < r; ) {
    const u = e.src.charCodeAt(l++);
    if (u !== s && !se(u)) return !1;
    u === s && o++;
  }
  if (o < 3) return !1;
  if (a) return !0;
  e.line = t + 1;
  const i = e.push("hr", "hr", 0);
  return i.map = [t, e.line], i.markup = Array(o + 1).join(String.fromCharCode(s)), !0;
}
function Zs(e, t) {
  const n = e.eMarks[t];
  let a = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(a++);
  return r !== 42 && r !== 45 && r !== 43 || a < n && !se(e.src.charCodeAt(a)) ? -1 : a;
}
function Js(e, t) {
  const n = e.bMarks[t] + e.tShift[t], a = e.eMarks[t];
  let r = n;
  if (r + 1 >= a) return -1;
  let l = e.src.charCodeAt(r++);
  if (l < 48 || l > 57) return -1;
  for (; ; ) {
    if (r >= a) return -1;
    if (l = e.src.charCodeAt(r++), l >= 48 && l <= 57) {
      if (r - n >= 10) return -1;
      continue;
    }
    if (l === 41 || l === 46) break;
    return -1;
  }
  return r < a && (l = e.src.charCodeAt(r), !se(l)) ? -1 : r;
}
function Tf(e, t) {
  const n = e.level + 2;
  for (let a = t + 2, r = e.tokens.length - 2; a < r; a++) e.tokens[a].level === n && e.tokens[a].type === "paragraph_open" && (e.tokens[a + 2].hidden = !0, e.tokens[a].hidden = !0, a += 2);
}
function Of(e, t, n, a) {
  let r, l, s, o, i = t, u = !0;
  if (e.sCount[i] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[i] - e.listIndent >= 4 && e.sCount[i] < e.blkIndent) return !1;
  let c = !1;
  a && e.parentType === "paragraph" && e.sCount[i] >= e.blkIndent && (c = !0);
  let d, g, h;
  if ((h = Js(e, i)) >= 0) {
    if (d = !0, s = e.bMarks[i] + e.tShift[i], g = Number(e.src.slice(s, h - 1)), c && g !== 1) return !1;
  } else if ((h = Zs(e, i)) >= 0) d = !1;
  else return !1;
  if (c && e.skipSpaces(h) >= e.eMarks[i])
    return !1;
  if (a) return !0;
  const f = e.src.charCodeAt(h - 1), p = e.tokens.length;
  d ? (o = e.push("ordered_list_open", "ol", 1), g !== 1 && (o.attrs = [["start", g]])) : o = e.push("bullet_list_open", "ul", 1);
  const A = [i, 0];
  o.map = A, o.markup = String.fromCharCode(f);
  let v = !1;
  const b = e.md.block.ruler.getRules("list"), C = e.parentType;
  for (e.parentType = "list"; i < n; ) {
    l = h, r = e.eMarks[i];
    const D = e.sCount[i] + h - (e.bMarks[i] + e.tShift[i]);
    let B = D;
    for (; l < r; ) {
      const M = e.src.charCodeAt(l);
      if (M === 9) B += 4 - (B + e.bsCount[i]) % 4;
      else if (M === 32) B++;
      else break;
      l++;
    }
    const y = l;
    let x;
    y >= r ? x = 1 : x = B - D, x > 4 && (x = 1);
    const S = D + x;
    o = e.push("list_item_open", "li", 1), o.markup = String.fromCharCode(f);
    const I = [i, 0];
    o.map = I, d && (o.info = e.src.slice(s, h - 1));
    const P = e.tight, W = e.tShift[i], O = e.sCount[i], k = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = S, e.tight = !0, e.tShift[i] = y - e.bMarks[i], e.sCount[i] = B, y >= r && e.isEmpty(i + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, i, n), (!e.tight || v) && (u = !1), v = e.line - i > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = k, e.tShift[i] = W, e.sCount[i] = O, e.tight = P, o = e.push("list_item_close", "li", -1), o.markup = String.fromCharCode(f), i = e.line, I[1] = i, i >= n || e.sCount[i] < e.blkIndent || e.sCount[i] - e.blkIndent >= 4) break;
    let w = !1;
    for (let M = 0, F = b.length; M < F; M++) if (b[M](e, i, n, !0)) {
      w = !0;
      break;
    }
    if (w) break;
    if (d) {
      if (h = Js(e, i), h < 0) break;
      s = e.bMarks[i] + e.tShift[i];
    } else if (h = Zs(e, i), h < 0) break;
    if (f !== e.src.charCodeAt(h - 1)) break;
  }
  return d ? o = e.push("ordered_list_close", "ol", -1) : o = e.push("bullet_list_close", "ul", -1), o.markup = String.fromCharCode(f), A[1] = i, e.line = i, e.parentType = C, u && Tf(e, p), !0;
}
function Rf(e, t, n, a) {
  let r = e.bMarks[t] + e.tShift[t], l = e.eMarks[t], s = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91) return !1;
  function o(D) {
    const B = e.lineMax;
    if (D >= B || e.isEmpty(D)) return null;
    let y = !1;
    if (e.sCount[D] - e.blkIndent > 3 && (y = !0), e.sCount[D] < 0 && (y = !0), !y) {
      const I = e.md.block.ruler.getRules("reference"), P = e.parentType;
      e.parentType = "reference";
      let W = !1;
      for (let O = 0, k = I.length; O < k; O++) if (I[O](e, D, B, !0)) {
        W = !0;
        break;
      }
      if (e.parentType = P, W) return null;
    }
    const x = e.bMarks[D] + e.tShift[D], S = e.eMarks[D];
    return e.src.slice(x, S + 1);
  }
  let i = e.src.slice(r, l + 1);
  l = i.length;
  let u = -1;
  for (r = 1; r < l; r++) {
    const D = i.charCodeAt(r);
    if (D === 91) return !1;
    if (D === 93) {
      u = r;
      break;
    } else if (D === 10) {
      const B = o(s);
      B !== null && (i += B, l = i.length, s++);
    } else if (D === 92 && (r++, r < l && i.charCodeAt(r) === 10)) {
      const B = o(s);
      B !== null && (i += B, l = i.length, s++);
    }
  }
  if (u < 0 || i.charCodeAt(u + 1) !== 58) return !1;
  for (r = u + 2; r < l; r++) {
    const D = i.charCodeAt(r);
    if (D === 10) {
      const B = o(s);
      B !== null && (i += B, l = i.length, s++);
    } else if (!se(D)) break;
  }
  const c = e.md.helpers.parseLinkDestination(i, r, l);
  if (!c.ok) return !1;
  const d = e.md.normalizeLink(c.str);
  if (!e.md.validateLink(d)) return !1;
  r = c.pos;
  const g = r, h = s, f = r;
  for (; r < l; r++) {
    const D = i.charCodeAt(r);
    if (D === 10) {
      const B = o(s);
      B !== null && (i += B, l = i.length, s++);
    } else if (!se(D)) break;
  }
  let p = e.md.helpers.parseLinkTitle(i, r, l);
  for (; p.can_continue; ) {
    const D = o(s);
    if (D === null) break;
    i += D, r = l, l = i.length, s++, p = e.md.helpers.parseLinkTitle(i, r, l, p);
  }
  let A;
  for (r < l && f !== r && p.ok ? (A = p.str, r = p.pos) : (A = "", r = g, s = h); r < l && se(i.charCodeAt(r)); )
    r++;
  if (r < l && i.charCodeAt(r) !== 10 && A)
    for (A = "", r = g, s = h; r < l && se(i.charCodeAt(r)); )
      r++;
  if (r < l && i.charCodeAt(r) !== 10) return !1;
  const v = Ga(i.slice(1, u));
  if (!v) return !1;
  if (a) return !0;
  typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[v] > "u" && (e.env.references[v] = {
    title: A,
    href: d
  });
  const b = e.push("reference_definition", "", 0);
  b.map = [t, s], b.hidden = !0;
  const C = /* @__PURE__ */ Object.create(null);
  return C.label = v, b.meta = C, e.line = s, !0;
}
var Pf = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], qi = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`, eu = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Yf = new RegExp(`^(?:${qi}|${eu}|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`), Hf = new RegExp(`^(?:${qi}|${eu})`), Yt = [
  [
    /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
    /<\/(script|pre|style|textarea)>/i,
    !0
  ],
  [
    /^<!--/,
    /-->/,
    !0
  ],
  [
    /^<\?/,
    /\?>/,
    !0
  ],
  [
    /^<![A-Za-z]/,
    />/,
    !0
  ],
  [
    /^<!\[CDATA\[/,
    /\]\]>/,
    !0
  ],
  [
    new RegExp(`^</?(${Pf.join("|")})(?=(\\s|/?>|$))`, "i"),
    /^$/,
    !0
  ],
  [
    new RegExp(`${Hf.source}\\s*$`),
    /^$/,
    !1
  ]
];
function Wf(e, t, n, a) {
  let r = e.bMarks[t] + e.tShift[t], l = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60) return !1;
  let s = e.src.slice(r, l), o = 0;
  for (; o < Yt.length && !Yt[o][0].test(s); o++) ;
  if (o === Yt.length) return !1;
  if (a) return Yt[o][2];
  let i = t + 1;
  const u = Yt[o][1].test("");
  if (!Yt[o][1].test(s)) {
    for (; i < n && !(e.sCount[i] < e.blkIndent && (u || !e.isEmpty(i))); i++)
      if (r = e.bMarks[i] + e.tShift[i], l = e.eMarks[i], s = e.src.slice(r, l), Yt[o][1].test(s)) {
        s.length !== 0 && i++;
        break;
      }
  }
  e.line = i;
  const c = e.push("html_block", "", 0);
  return c.map = [t, i], c.content = e.getLines(t, i, e.blkIndent, !0), !0;
}
function $f(e, t, n, a) {
  let r = e.bMarks[t] + e.tShift[t], l = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4) return !1;
  let s = e.src.charCodeAt(r);
  if (s !== 35 || r >= l) return !1;
  let o = 1;
  for (s = e.src.charCodeAt(++r); s === 35 && r < l && o <= 6; )
    o++, s = e.src.charCodeAt(++r);
  if (o > 6 || r < l && !se(s)) return !1;
  if (a) return !0;
  l = e.skipSpacesBack(l, r);
  const i = e.skipCharsBack(l, 35, r);
  i > r && se(e.src.charCodeAt(i - 1)) && (l = i), e.line = t + 1;
  const u = e.push("heading_open", `h${o}`, 1);
  u.markup = "########".slice(0, o), u.map = [t, e.line];
  const c = e.push("inline", "", 0);
  c.content = ja(e.src.slice(r, l)), c.map = [t, e.line], c.children = [];
  const d = e.push("heading_close", `h${o}`, -1);
  return d.markup = "########".slice(0, o), !0;
}
function Vf(e, t, n) {
  const a = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4) return !1;
  const r = e.parentType;
  e.parentType = "paragraph";
  let l = 0, s, o = t + 1;
  for (; o < n && !e.isEmpty(o); o++) {
    if (e.sCount[o] - e.blkIndent > 3) continue;
    if (e.sCount[o] >= e.blkIndent) {
      let h = e.bMarks[o] + e.tShift[o];
      const f = e.eMarks[o];
      if (h < f && (s = e.src.charCodeAt(h), (s === 45 || s === 61) && (h = e.skipChars(h, s), h = e.skipSpaces(h), h >= f))) {
        l = s === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[o] < 0) continue;
    let g = !1;
    for (let h = 0, f = a.length; h < f; h++) if (a[h](e, o, n, !0)) {
      g = !0;
      break;
    }
    if (g) break;
  }
  if (!l)
    return e.parentType = r, !1;
  const i = ja(e.getLines(t, o, e.blkIndent, !1));
  e.line = o + 1;
  const u = e.push("heading_open", `h${l}`, 1);
  u.markup = String.fromCharCode(s), u.map = [t, e.line];
  const c = e.push("inline", "", 0);
  c.content = i, c.map = [t, e.line - 1], c.children = [];
  const d = e.push("heading_close", `h${l}`, -1);
  return d.markup = String.fromCharCode(s), e.parentType = r, !0;
}
function Lf(e, t, n) {
  const a = e.md.block.ruler.getRules("paragraph"), r = e.parentType;
  let l = t + 1;
  for (e.parentType = "paragraph"; l < n && !e.isEmpty(l); l++) {
    if (e.sCount[l] - e.blkIndent > 3 || e.sCount[l] < 0) continue;
    let u = !1;
    for (let c = 0, d = a.length; c < d; c++) if (a[c](e, l, n, !0)) {
      u = !0;
      break;
    }
    if (u) break;
  }
  const s = ja(e.getLines(t, l, e.blkIndent, !1));
  e.line = l;
  const o = e.push("paragraph_open", "p", 1);
  o.map = [t, e.line];
  const i = e.push("inline", "", 0);
  return i.content = s, i.map = [t, e.line], i.children = [], e.push("paragraph_close", "p", -1), e.parentType = r, !0;
}
var fa = [
  [
    "table",
    _f,
    ["paragraph", "reference"]
  ],
  ["code", Sf],
  [
    "fence",
    If,
    [
      "paragraph",
      "reference",
      "blockquote",
      "list"
    ]
  ],
  [
    "blockquote",
    Mf,
    [
      "paragraph",
      "reference",
      "blockquote",
      "list"
    ]
  ],
  [
    "hr",
    Nf,
    [
      "paragraph",
      "reference",
      "blockquote",
      "list"
    ]
  ],
  [
    "list",
    Of,
    [
      "paragraph",
      "reference",
      "blockquote"
    ]
  ],
  ["reference", Rf],
  [
    "html_block",
    Wf,
    [
      "paragraph",
      "reference",
      "blockquote"
    ]
  ],
  [
    "heading",
    $f,
    [
      "paragraph",
      "reference",
      "blockquote"
    ]
  ],
  ["lheading", Vf],
  ["paragraph", Lf]
], tu = class {
  constructor() {
    Q(
      this,
      /**
      * {@link Ruler} instance. Keep configuration of block rules.
      */
      "ruler",
      new Kn()
    ), Q(this, "State", Xi);
    for (let e = 0; e < fa.length; e++) this.ruler.push(fa[e][0], fa[e][1], { alt: (fa[e][2] || []).slice() });
  }
  tokenize(e, t, n) {
    const a = this.ruler.getRules(""), r = a.length, l = e.md.options.maxNesting;
    let s = t, o = !1;
    for (; s < n && (e.line = s = e.skipEmptyLines(s), !(s >= n || e.sCount[s] < e.blkIndent)); ) {
      if (e.level >= l) {
        e.line = n;
        break;
      }
      const i = e.line;
      let u = !1;
      for (let c = 0; c < r; c++)
        if (u = a[c](e, s, n, !1), u) {
          if (i >= e.line) throw new Error("block rule didn't increment state.line");
          break;
        }
      if (!u) throw new Error("none of the block rules matched");
      e.tight = !o, e.isEmpty(e.line - 1) && (o = !0), s = e.line, s < n && e.isEmpty(s) && (o = !0, s++, e.line = s);
    }
  }
  /**
  * Process input string and push block tokens into `outTokens`
  */
  parse(e, t, n, a) {
    if (!e) return;
    const r = new this.State(e, t, n, a);
    this.tokenize(r, r.line, r.lineMax);
  }
}, nu = class {
  constructor(e, t, n, a) {
    Q(this, "pos", 0), Q(this, "level", 0), Q(this, "pending", ""), Q(this, "pendingLevel", 0), Q(this, "cache", {}), Q(this, "backticks", {}), Q(this, "backticksScanned", !1), Q(this, "linkLevel", 0), Q(this, "delimiters", []), Q(this, "_prev_delimiters", []), Q(this, "Token", Jt), this.src = e, this.env = n, this.md = t, this.tokens = a, this.tokens_meta = Array(a.length), this.posMax = this.src.length;
  }
  pushPending() {
    const e = new Jt("text", "", 0);
    return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
  }
  push(e, t, n) {
    this.pending && this.pushPending();
    const a = new Jt(e, t, n);
    let r;
    return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), a.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(a), this.tokens_meta.push(r), a;
  }
  scanDelims(e, t) {
    const n = this.posMax, a = this.src.charCodeAt(e);
    let r;
    if (e === 0) r = 32;
    else if (e === 1)
      r = this.src.charCodeAt(0), (r & 63488) === 55296 && (r = 65533);
    else if (r = this.src.charCodeAt(e - 1), (r & 64512) === 56320) {
      const f = this.src.charCodeAt(e - 2);
      r = (f & 64512) === 55296 ? 65536 + (f - 55296 << 10) + (r - 56320) : 65533;
    } else (r & 64512) === 55296 && (r = 65533);
    let l = e;
    for (; l < n && this.src.charCodeAt(l) === a; ) l++;
    const s = l - e;
    let o = l < n ? this.src.charCodeAt(l) : 32;
    if ((o & 64512) === 55296) {
      const f = this.src.charCodeAt(l + 1);
      o = (f & 64512) === 56320 ? 65536 + (o - 55296 << 10) + (f - 56320) : 65533;
    } else (o & 64512) === 56320 && (o = 65533);
    const i = Ln(r) || Vn(r), u = Ln(o) || Vn(o), c = $n(r), d = $n(o), g = !d && (!u || c || i), h = !c && (!i || d || u);
    return {
      can_open: g && (t || !h || i),
      can_close: h && (t || !g || u),
      length: s
    };
  }
};
function Qf(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Kf(e, t) {
  let n = e.pos;
  for (; n < e.posMax && !Qf(e.src.charCodeAt(n)); ) n++;
  return n === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0);
}
function Gf(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function jf(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 45 || e === 46;
}
function Uf(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const n = e.pos, a = e.posMax;
  if (n + 3 > a || e.src.charCodeAt(n) !== 58 || e.src.charCodeAt(n + 1) !== 47 || e.src.charCodeAt(n + 2) !== 47) return !1;
  const r = n - Math.min(10, e.pending.length, n);
  let l = n;
  for (; l > r && jf(e.src.charCodeAt(l - 1)); ) l--;
  if (l === n || !Gf(e.src.charCodeAt(l))) return !1;
  const s = n - l, o = e.md.linkify.matchAtStart(e.src.slice(l));
  if (!o) return !1;
  let i = o.url;
  if (i.length <= s) return !1;
  let u = i.length;
  for (; u > 0 && i.charCodeAt(u - 1) === 42; ) u--;
  u !== i.length && (i = i.slice(0, u));
  const c = e.md.normalizeLink(i);
  if (!e.md.validateLink(c)) return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -s);
    const d = e.push("link_open", "a", 1);
    d.attrs = [["href", c]], d.markup = "linkify", d.info = "auto";
    const g = e.push("text", "", 0);
    g.content = e.md.normalizeLinkText(i);
    const h = e.push("link_close", "a", -1);
    h.markup = "linkify", h.info = "auto";
  }
  return e.pos += i.length - s, !0;
}
function Zf(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 10) return !1;
  const a = e.pending.length - 1, r = e.posMax;
  if (!t) if (a >= 0 && e.pending.charCodeAt(a) === 32) if (a >= 1 && e.pending.charCodeAt(a - 1) === 32) {
    let l = a - 1;
    for (; l >= 1 && e.pending.charCodeAt(l - 1) === 32; ) l--;
    e.pending = e.pending.slice(0, l), e.push("hardbreak", "br", 0);
  } else
    e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
  else e.push("softbreak", "br", 0);
  for (n++; n < r && se(e.src.charCodeAt(n)); ) n++;
  return e.pos = n, !0;
}
var Ql = [];
for (let e = 0; e < 256; e++) Ql.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  Ql[e.charCodeAt(0)] = 1;
});
function Jf(e, t) {
  let n = e.pos;
  const a = e.posMax;
  if (e.src.charCodeAt(n) !== 92 || (n++, n >= a)) return !1;
  let r = e.src.charCodeAt(n);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), n++; n < a && (r = e.src.charCodeAt(n), !!se(r)); )
      n++;
    return e.pos = n, !0;
  }
  if (r === 32) {
    if (!t) {
      const o = e.push("text_special", "", 0);
      o.content = "\\", o.markup = "\\", o.info = "escape";
    }
    return e.pos = n, !0;
  }
  let l = e.src[n];
  if (r >= 55296 && r <= 56319 && n + 1 < a) {
    const o = e.src.charCodeAt(n + 1);
    o >= 56320 && o <= 57343 && (l += e.src[n + 1], n++);
  }
  const s = "\\" + l;
  if (!t) {
    const o = e.push("text_special", "", 0);
    r < 256 && Ql[r] !== 0 ? o.content = l : o.content = s, o.markup = s, o.info = "escape";
  }
  return e.pos = n + 1, !0;
}
function zf(e) {
  const t = {};
  let n = 0;
  for (; (n = e.indexOf("`", n)) !== -1; ) {
    const a = n;
    for (; e.charCodeAt(++n) === 96; ) ;
    t[n - a] = a;
  }
  return t;
}
function Xf(e, t) {
  var n;
  const a = e.pos;
  if (e.src.charCodeAt(a) !== 96) return !1;
  const r = e.posMax;
  let l = a + 1;
  for (; l < r && e.src.charCodeAt(l) === 96; ) l++;
  const s = e.src.slice(a, l), o = s.length;
  if (e.backticksScanned || (e.backticks = zf(e.src), e.backticksScanned = !0), ((n = e.backticks[o]) !== null && n !== void 0 ? n : -1) >= l) {
    let i = l, u;
    for (; (u = e.src.indexOf("`", i)) !== -1 && u < r; ) {
      for (i = u + 1; e.src.charCodeAt(i) === 96; ) i++;
      if (i > r) break;
      if (i - u === o) {
        if (!t) {
          const c = e.push("code_inline", "code", 0);
          c.markup = s;
          let d = e.src.slice(l, u).replace(/\n/g, " ");
          d.startsWith(" ") && d.endsWith(" ") && /[^ ]/.test(d) && (d = d.slice(1, -1)), c.content = d;
        }
        return e.pos = i, !0;
      }
    }
  }
  return t || (e.pending += s), e.pos = l, !0;
}
function qf(e, t) {
  const n = e.pos, a = e.src.charCodeAt(n);
  if (t || a !== 126) return !1;
  const r = e.scanDelims(e.pos, !0);
  let l = r.length;
  const s = String.fromCharCode(a);
  if (l < 2) return !1;
  let o;
  l % 2 && (o = e.push("text", "", 0), o.content = s, l--);
  for (let i = 0; i < l; i += 2)
    o = e.push("text", "", 0), o.content = s + s, e.delimiters.push({
      marker: a,
      length: 0,
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
}
function zs(e, t) {
  let n;
  const a = [], r = t.length;
  for (let l = 0; l < r; l++) {
    const s = t[l];
    if (s.marker !== 126 || s.end === -1) continue;
    const o = t[s.end];
    n = e.tokens[s.token], n.type = "s_open", n.tag = "s", n.nesting = 1, n.markup = "~~", n.content = "", n = e.tokens[o.token], n.type = "s_close", n.tag = "s", n.nesting = -1, n.markup = "~~", n.content = "", e.tokens[o.token - 1].type === "text" && e.tokens[o.token - 1].content === "~" && a.push(o.token - 1);
  }
  for (; a.length; ) {
    const l = a.pop();
    let s = l + 1;
    for (; s < e.tokens.length && e.tokens[s].type === "s_close"; ) s++;
    s--, l !== s && (n = e.tokens[s], e.tokens[s] = e.tokens[l], e.tokens[l] = n);
  }
}
function eA(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  zs(e, e.delimiters);
  for (let r = 0; r < n; r++) {
    var a;
    const l = (a = t[r]) === null || a === void 0 ? void 0 : a.delimiters;
    l && zs(e, l);
  }
}
var au = {
  tokenize: qf,
  postProcess: eA
};
function tA(e, t) {
  const n = e.pos, a = e.src.charCodeAt(n);
  if (t || a !== 95 && a !== 42) return !1;
  const r = e.scanDelims(e.pos, a === 42);
  for (let l = 0; l < r.length; l++) {
    const s = e.push("text", "", 0);
    s.content = String.fromCharCode(a), e.delimiters.push({
      marker: a,
      length: r.length,
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  }
  return e.pos += r.length, !0;
}
function Xs(e, t) {
  const n = t.length;
  for (let a = n - 1; a >= 0; a--) {
    const r = t[a];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1) continue;
    const l = t[r.end], s = a > 0 && t[a - 1].end === r.end + 1 && t[a - 1].marker === r.marker && t[a - 1].token === r.token - 1 && t[r.end + 1].token === l.token + 1, o = String.fromCharCode(r.marker), i = e.tokens[r.token];
    i.type = s ? "strong_open" : "em_open", i.tag = s ? "strong" : "em", i.nesting = 1, i.markup = s ? o + o : o, i.content = "";
    const u = e.tokens[l.token];
    u.type = s ? "strong_close" : "em_close", u.tag = s ? "strong" : "em", u.nesting = -1, u.markup = s ? o + o : o, u.content = "", s && (e.tokens[t[a - 1].token].content = "", e.tokens[t[r.end + 1].token].content = "", a--);
  }
}
function nA(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  Xs(e, e.delimiters);
  for (let r = 0; r < n; r++) {
    var a;
    const l = (a = t[r]) === null || a === void 0 ? void 0 : a.delimiters;
    l && Xs(e, l);
  }
}
var ru = {
  tokenize: tA,
  postProcess: nA
};
function aA(e, t) {
  let n, a, r, l, s = "", o = "", i = e.pos, u = !0;
  if (e.src.charCodeAt(e.pos) !== 91) return !1;
  const c = e.pos, d = e.posMax, g = e.pos + 1, h = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (h < 0) return !1;
  let f = h + 1;
  if (f < d && e.src.charCodeAt(f) === 40) {
    for (u = !1, f++; f < d && (n = e.src.charCodeAt(f), !(!se(n) && n !== 10)); f++)
      ;
    if (f >= d) return !1;
    if (i = f, r = e.md.helpers.parseLinkDestination(e.src, f, e.posMax), r.ok) {
      for (s = e.md.normalizeLink(r.str), e.md.validateLink(s) ? f = r.pos : s = "", i = f; f < d && (n = e.src.charCodeAt(f), !(!se(n) && n !== 10)); f++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, f, e.posMax), f < d && i !== f && r.ok)
        for (o = r.str, f = r.pos; f < d && (n = e.src.charCodeAt(f), !(!se(n) && n !== 10)); f++)
          ;
    }
    (f >= d || e.src.charCodeAt(f) !== 41) && (u = !0), f++;
  }
  if (u) {
    if (typeof e.env.references > "u") return !1;
    if (f < d && e.src.charCodeAt(f) === 91 ? (i = f + 1, f = e.md.helpers.parseLinkLabel(e, f), f >= 0 ? a = e.src.slice(i, f++) : f = h + 1) : f = h + 1, a || (a = e.src.slice(g, h)), a = Ga(a), l = e.env.references[a], !l)
      return e.pos = c, !1;
    s = l.href, o = l.title;
  }
  if (!t) {
    e.pos = g, e.posMax = h;
    const p = e.push("link_open", "a", 1), A = [["href", s]];
    if (p.attrs = A, o && A.push(["title", o]), a) {
      const v = /* @__PURE__ */ Object.create(null);
      v.label = a, p.meta = v;
    }
    e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = f, e.posMax = d, !0;
}
function rA(e, t) {
  let n, a, r, l, s, o, i, u, c = "";
  const d = e.pos, g = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91) return !1;
  const h = e.pos + 2, f = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (f < 0) return !1;
  if (l = f + 1, l < g && e.src.charCodeAt(l) === 40) {
    for (l++; l < g && (n = e.src.charCodeAt(l), !(!se(n) && n !== 10)); l++)
      ;
    if (l >= g) return !1;
    for (u = l, o = e.md.helpers.parseLinkDestination(e.src, l, e.posMax), o.ok && (c = e.md.normalizeLink(o.str), e.md.validateLink(c) ? l = o.pos : c = ""), u = l; l < g && (n = e.src.charCodeAt(l), !(!se(n) && n !== 10)); l++)
      ;
    if (o = e.md.helpers.parseLinkTitle(e.src, l, e.posMax), l < g && u !== l && o.ok)
      for (i = o.str, l = o.pos; l < g && (n = e.src.charCodeAt(l), !(!se(n) && n !== 10)); l++)
        ;
    else i = "";
    if (l >= g || e.src.charCodeAt(l) !== 41)
      return e.pos = d, !1;
    l++;
  } else {
    if (typeof e.env.references > "u") return !1;
    if (l < g && e.src.charCodeAt(l) === 91 ? (u = l + 1, l = e.md.helpers.parseLinkLabel(e, l), l >= 0 ? r = e.src.slice(u, l++) : l = f + 1) : l = f + 1, r || (r = e.src.slice(h, f)), r = Ga(r), s = e.env.references[r], !s)
      return e.pos = d, !1;
    c = s.href, i = s.title;
  }
  if (!t) {
    a = e.src.slice(h, f);
    const p = [];
    e.md.inline.parse(a, e.md, e.env, p);
    const A = e.push("image", "img", 0), v = [["src", c], ["alt", ""]];
    if (A.attrs = v, A.children = p, A.content = a, i && v.push(["title", i]), r) {
      const b = /* @__PURE__ */ Object.create(null);
      b.label = r, A.meta = b;
    }
  }
  return e.pos = l, e.posMax = g, !0;
}
var lA = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, sA = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function oA(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 60) return !1;
  const a = e.pos, r = e.posMax;
  for (; ; ) {
    if (++n >= r) return !1;
    const s = e.src.charCodeAt(n);
    if (s === 60) return !1;
    if (s === 62) break;
  }
  const l = e.src.slice(a + 1, n);
  if (sA.test(l)) {
    const s = e.md.normalizeLink(l);
    if (!e.md.validateLink(s)) return !1;
    if (!t) {
      const o = e.push("link_open", "a", 1);
      o.attrs = [["href", s]], o.markup = "autolink", o.info = "auto";
      const i = e.push("text", "", 0);
      i.content = e.md.normalizeLinkText(l);
      const u = e.push("link_close", "a", -1);
      u.markup = "autolink", u.info = "auto";
    }
    return e.pos += l.length + 2, !0;
  }
  if (lA.test(l)) {
    const s = e.md.normalizeLink(`mailto:${l}`);
    if (!e.md.validateLink(s)) return !1;
    if (!t) {
      const o = e.push("link_open", "a", 1);
      o.attrs = [["href", s]], o.markup = "autolink", o.info = "auto";
      const i = e.push("text", "", 0);
      i.content = e.md.normalizeLinkText(l);
      const u = e.push("link_close", "a", -1);
      u.markup = "autolink", u.info = "auto";
    }
    return e.pos += l.length + 2, !0;
  }
  return !1;
}
function iA(e) {
  return /^<a[>\s]/i.test(e);
}
function uA(e) {
  return /^<\/a\s*>/i.test(e);
}
function cA(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function dA(e, t) {
  if (!e.md.options.html) return !1;
  const n = e.posMax, a = e.pos;
  if (e.src.charCodeAt(a) !== 60 || a + 2 >= n) return !1;
  const r = e.src.charCodeAt(a + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !cA(r)) return !1;
  const l = e.src.slice(a).match(Yf);
  if (!l) return !1;
  if (!t) {
    const s = e.push("html_inline", "", 0);
    s.content = l[0], iA(s.content) && e.linkLevel++, uA(s.content) && e.linkLevel--;
  }
  return e.pos += l[0].length, !0;
}
var hA = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, fA = /^&([a-z][a-z0-9]{1,31});/i;
function AA(e, t) {
  const n = e.pos, a = e.posMax;
  if (e.src.charCodeAt(n) !== 38 || n + 1 >= a) return !1;
  if (e.src.charCodeAt(n + 1) === 35) {
    const r = e.src.slice(n).match(hA);
    if (r) {
      if (!t) {
        const l = r[1][0].toLowerCase() === "x" ? parseInt(r[1].slice(1), 16) : parseInt(r[1], 10), s = e.push("text_special", "", 0);
        s.content = Ll(l) ? Wn(l) : Wn(65533), s.markup = r[0], s.info = "entity";
      }
      return e.pos += r[0].length, !0;
    }
  } else {
    const r = e.src.slice(n).match(fA);
    if (r) {
      const l = Oi(r[0]);
      if (l !== r[0]) {
        if (!t) {
          const s = e.push("text_special", "", 0);
          s.content = l, s.markup = r[0], s.info = "entity";
        }
        return e.pos += r[0].length, !0;
      }
    }
  }
  return !1;
}
function qs(e) {
  const t = {}, n = e.length;
  if (!n) return;
  let a = 0, r = -2;
  const l = [];
  for (let s = 0; s < n; s++) {
    const o = e[s];
    if (l.push(0), (e[a].marker !== o.marker || r !== o.token - 1) && (a = s), r = o.token, o.length = o.length || 0, !o.close) continue;
    t.hasOwnProperty(o.marker) || (t[o.marker] = [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ]);
    const i = t[o.marker][(o.open ? 3 : 0) + o.length % 3];
    let u = a - l[a] - 1, c = u;
    for (; u > i; u -= l[u] + 1) {
      const d = e[u];
      if (d.marker === o.marker && d.open && d.end < 0) {
        let g = !1;
        if ((d.close || o.open) && (d.length + o.length) % 3 === 0 && (d.length % 3 !== 0 || o.length % 3 !== 0) && (g = !0), !g) {
          const h = u > 0 && !e[u - 1].open ? l[u - 1] + 1 : 0;
          l[s] = s - u + h, l[u] = h, o.open = !1, d.end = s, d.close = !1, c = -1, r = -2;
          break;
        }
      }
    }
    c !== -1 && (t[o.marker][(o.open ? 3 : 0) + (o.length || 0) % 3] = c);
  }
}
function gA(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  qs(e.delimiters);
  for (let r = 0; r < n; r++) {
    var a;
    const l = (a = t[r]) === null || a === void 0 ? void 0 : a.delimiters;
    l && qs(l);
  }
}
function mA(e) {
  let t, n, a = 0;
  const r = e.tokens, l = e.tokens.length;
  for (t = n = 0; t < l; t++)
    r[t].nesting < 0 && a--, r[t].level = a, r[t].nesting > 0 && a++, r[t].type === "text" && t + 1 < l && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== n && (r[n] = r[t]), n++);
  t !== n && (r.length = n);
}
var kr = [
  ["text", Kf],
  ["linkify", Uf],
  ["newline", Zf],
  ["escape", Jf],
  ["backticks", Xf],
  ["strikethrough", au.tokenize],
  ["emphasis", ru.tokenize],
  ["link", aA],
  ["image", rA],
  ["autolink", oA],
  ["html_inline", dA],
  ["entity", AA]
], Er = [
  ["balance_pairs", gA],
  ["strikethrough", au.postProcess],
  ["emphasis", ru.postProcess],
  ["fragments_join", mA]
], lu = class {
  constructor() {
    Q(
      this,
      /**
      * {@link Ruler} instance. Keep configuration of inline rules.
      */
      "ruler",
      new Kn()
    ), Q(
      this,
      /**
      * {@link Ruler} instance. Second ruler used for post-processing
      * (e.g. in emphasis-like rules).
      */
      "ruler2",
      new Kn()
    ), Q(this, "State", nu);
    for (let e = 0; e < kr.length; e++) this.ruler.push(kr[e][0], kr[e][1]);
    for (let e = 0; e < Er.length; e++) this.ruler2.push(Er[e][0], Er[e][1]);
  }
  skipToken(e) {
    const t = e.pos, n = this.ruler.getRules(""), a = n.length, r = e.md.options.maxNesting, l = e.cache;
    if (typeof l[t] < "u") {
      e.pos = l[t];
      return;
    }
    let s = !1;
    if (e.level < r) {
      for (let o = 0; o < a; o++)
        if (e.level++, s = n[o](e, !0), e.level--, s) {
          if (t >= e.pos) throw new Error("inline rule didn't increment state.pos");
          break;
        }
    } else e.pos = e.posMax;
    s || e.pos++, l[t] = e.pos;
  }
  tokenize(e) {
    const t = this.ruler.getRules(""), n = t.length, a = e.posMax, r = e.md.options.maxNesting;
    for (; e.pos < a; ) {
      const l = e.pos;
      let s = !1;
      if (e.level < r) {
        for (let o = 0; o < n; o++)
          if (s = t[o](e, !1), s) {
            if (l >= e.pos) throw new Error("inline rule didn't increment state.pos");
            break;
          }
      }
      if (s) {
        if (e.pos >= a) break;
        continue;
      }
      e.pending += e.src[e.pos++];
    }
    e.pending && e.pushPending();
  }
  /**
  * Process input string and push inline tokens into `outTokens`
  */
  parse(e, t, n, a) {
    const r = new this.State(e, t, n, a);
    this.tokenize(r);
    const l = this.ruler2.getRules(""), s = l.length;
    for (let o = 0; o < s; o++) l[o](r);
  }
}, pA = {
  default: {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 100
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  },
  zero: {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: { rules: [
        "normalize",
        "block",
        "strip_references",
        "inline",
        "text_join"
      ] },
      block: { rules: ["paragraph"] },
      inline: {
        rules: ["text"],
        rules2: ["balance_pairs", "fragments_join"]
      }
    }
  },
  commonmark: {
    options: {
      html: !0,
      xhtmlOut: !0,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: { rules: [
        "normalize",
        "block",
        "strip_references",
        "inline",
        "text_join"
      ] },
      block: { rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ] },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text"
        ],
        rules2: [
          "balance_pairs",
          "emphasis",
          "fragments_join"
        ]
      }
    }
  }
}, vA = /^(vbscript|javascript|file|data):/, yA = /^data:image\/(gif|png|jpeg|webp);/, eo = [
  "http:",
  "https:",
  "mailto:"
], ut = class {
  /**
  * Link validation function. CommonMark allows too much in links. By default
  * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
  * except some embedded image types.
  *
  * You can change this behaviour:
  *
  * @example
  * ```javascript
  * import MarkdownIt from 'markdown-it'
  * const md = new MarkdownIt()
  *
  * // enable everything
  * md.validateLink = function () { return true; }
  * ```
  */
  validateLink(e) {
    const t = e.trim().toLowerCase();
    return vA.test(t) ? yA.test(t) : !0;
  }
  /**
  * Function used to encode link url to a machine-readable format,
  * which includes url-encoding, punycode, etc.
  */
  normalizeLink(e) {
    const t = ol(e, !0);
    if (t.hostname && (!t.protocol || eo.indexOf(t.protocol) >= 0))
      try {
        t.hostname = Ls.toASCII(t.hostname);
      } catch {
      }
    return t.auth && (t.auth = ht(t.auth)), t.hostname && (t.hostname = ht(t.hostname)), t.pathname && (t.pathname = ht(t.pathname)), t.search && (t.search = ht(t.search)), t.hash && (t.hash = ht(t.hash)), sl(t);
  }
  /**
  * Function used to decode link url to a human-readable format`
  */
  normalizeLinkText(e) {
    const t = ol(e, !0);
    if (t.hostname && (!t.protocol || eo.indexOf(t.protocol) >= 0))
      try {
        t.hostname = Ls.toUnicode(t.hostname);
      } catch {
      }
    return fn(sl(t), fn.defaultChars + "%");
  }
  constructor(...e) {
    Q(
      this,
      /**
      * Instance of {@link ParserInline}. You may need it to add new rules when
      * writing plugins. For simple rules control use {@link MarkdownIt.disable}
      * and {@link MarkdownIt.enable}.
      */
      "inline",
      new lu()
    ), Q(
      this,
      /**
      * Instance of {@link ParserBlock}. You may need it to add new rules when
      * writing plugins. For simple rules control use {@link MarkdownIt.disable}
      * and {@link MarkdownIt.enable}.
      */
      "block",
      new tu()
    ), Q(
      this,
      /**
      * Instance of {@link ParserCore} chain executor. You may need it to add new
      * rules when writing plugins. For simple rules control use
      * {@link MarkdownIt.disable} and {@link MarkdownIt.enable}.
      */
      "core",
      new zi()
    ), Q(
      this,
      /**
      * Instance of {@link Renderer}. Use it to modify output look. Or to add rendering
      * rules for new token types, generated by plugins.
      *
      * See {@link Renderer} docs and
      * [source code](https://github.com/markdown-it/markdown-it/blob/master/src/renderer.ts).
      *
      * @example
      * ```javascript
      * import MarkdownIt from 'markdown-it'
      * const md = new MarkdownIt()
      *
      * function myToken(tokens, idx, options, env, self) {
      *   //...
      *   return result;
      * };
      *
      * md.renderer.rules['my_token'] = myToken
      * ```
      */
      "renderer",
      new Ui()
    ), Q(
      this,
      /**
      * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
      * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/src/rules_core/linkify.ts)
      * rule.
      */
      "linkify",
      new xh()
    ), Q(
      this,
      /**
      * Assorted utility functions, useful to write plugins. See details
      * [here](https://github.com/markdown-it/markdown-it/blob/master/src/common/utils.ts).
      */
      "utils",
      Wh
    ), Q(
      this,
      /**
      * Link components parser functions, useful to write plugins. See details
      * [here](https://github.com/markdown-it/markdown-it/blob/master/src/helpers).
      */
      "helpers",
      Object.assign({}, nf)
    );
    const [t, n] = e;
    typeof t == "string" ? (this.configure(t), n && this.set(n)) : (this.configure("default"), this.set(t || {}));
  }
  /**
  * Set parser options (in the same format as in constructor). Probably, you
  * will never need it, but you can change options after constructor call.
  *
  * __Note:__ To achieve the best possible performance, don't modify a
  * `markdown-it` instance options on the fly. If you need multiple configurations
  * it's best to create multiple instances and initialize each with separate
  * config.
  *
  * @example
  * ```javascript
  * import MarkdownIt from 'markdown-it'
  *
  * const md = new MarkdownIt()
  *   .set({ html: true, breaks: true })
  *   .set({ typographer: true })
  * ```
  */
  set(e) {
    return Object.assign(this.options, e), this;
  }
  /**
  * Batch load of all options and compenent settings. This is internal method,
  * and you probably will not need it. But if you will - see available presets
  * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/src/presets)
  *
  * We strongly recommend to use presets instead of direct config loads. That
  * will give better compatibility with next versions.
  */
  configure(e) {
    let t;
    if (typeof e == "string") {
      const r = e;
      if (t = pA[r], !t) throw new Error(`Wrong 'markdown-it' preset "${r}", check name`);
    } else t = e;
    if (!t) throw new Error("Wrong `markdown-it` preset, can't be empty");
    t.options && (this.options = { ...t.options });
    const n = t.components;
    if (n) {
      var a;
      [
        "core",
        "block",
        "inline"
      ].forEach((l) => {
        var s;
        const o = (s = n[l]) === null || s === void 0 ? void 0 : s.rules;
        o && this[l].ruler.enableOnly(o);
      });
      const r = (a = n.inline) === null || a === void 0 ? void 0 : a.rules2;
      r && this.inline.ruler2.enableOnly(r);
    }
    return this;
  }
  /**
  * Enable list or rules. It will automatically find appropriate components,
  * containing rules with given names. If rule not found, and `ignoreInvalid`
  * not set - throws exception.
  *
  * @example
  * ```javascript
  * import MarkdownIt from 'markdown-it'
  *
  * const md = new MarkdownIt()
  *   .enable(['sub', 'sup'])
  *   .disable('smartquotes')
  * ```
  */
  enable(e, t = !1) {
    let n = [];
    Array.isArray(e) || (e = [e]), [
      "core",
      "block",
      "inline"
    ].forEach((r) => {
      n = n.concat(this[r].ruler.enable(e, !0));
    }), n = n.concat(this.inline.ruler2.enable(e, !0));
    const a = e.filter((r) => n.indexOf(r) < 0);
    if (a.length && !t) throw new Error(`MarkdownIt. Failed to enable unknown rule(s): ${a}`);
    return this;
  }
  /**
  * The same as {@link MarkdownIt.enable}, but turn specified rules off.
  */
  disable(e, t = !1) {
    let n = [];
    Array.isArray(e) || (e = [e]), [
      "core",
      "block",
      "inline"
    ].forEach((r) => {
      n = n.concat(this[r].ruler.disable(e, !0));
    }), n = n.concat(this.inline.ruler2.disable(e, !0));
    const a = e.filter((r) => n.indexOf(r) < 0);
    if (a.length && !t) throw new Error(`MarkdownIt. Failed to disable unknown rule(s): ${a}`);
    return this;
  }
  /**
  * Load specified plugin with given params into current parser instance.
  * It's just a sugar to call `plugin(md, params)` with curring.
  *
  * @example
  * ```javascript
  * import MarkdownIt from 'markdown-it'
  * import iterator from 'markdown-it-for-inline'
  *
  * const md = new MarkdownIt()
  *   .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
  *     tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar')
  *   })
  * ```
  */
  use(e, ...t) {
    return e.apply(e, [this, ...t]), this;
  }
  /**
  * Parse input string and return list of block tokens (special token type
  * "inline" will contain list of inline tokens). You should not call this
  * method directly, until you write custom renderer (for example, to produce
  * AST).
  *
  * `env` is used to pass data between "distributed" rules and return additional
  * metadata like reference info, needed for the renderer. It also can be used to
  * inject data in specific cases. Usually, you will be ok to pass `{}`,
  * and then pass updated object to renderer.
  */
  parse(e, t) {
    if (typeof e != "string") throw new Error("Input data should be a String");
    const n = new this.core.State(e, this, t);
    return this.core.process(n), n.tokens;
  }
  /**
  * Render markdown string into html. It does all magic for you :).
  *
  * `env` can be used to inject additional metadata (`{}` by default).
  * But you will not need it with high probability. See also comment
  * in {@link MarkdownIt.parse}.
  */
  render(e, t = {}) {
    return this.renderer.render(this.parse(e, t), this.options, t);
  }
  /**
  * The same as {@link MarkdownIt.parse} but skip all block rules. It returns
  * the block tokens list with the single `inline` element, containing parsed
  * inline tokens in `children` property. Also updates `env` object.
  */
  parseInline(e, t) {
    const n = new this.core.State(e, this, t);
    return n.inlineMode = !0, this.core.process(n), n.tokens;
  }
  /**
  * Similar to {@link MarkdownIt.render} but for single paragraph content.
  * Result will NOT be wrapped into `<p>` tags.
  */
  renderInline(e, t = {}) {
    return this.renderer.render(this.parseInline(e, t), this.options, t);
  }
};
Q(ut, "Token", Jt);
Q(ut, "Ruler", Kn);
Q(ut, "Renderer", Ui);
Q(ut, "ParserCore", zi);
Q(ut, "StateCore", Zi);
Q(ut, "ParserBlock", tu);
Q(ut, "StateBlock", Xi);
Q(ut, "ParserInline", lu);
Q(ut, "StateInline", nu);
var DA = Ki(ut), CA = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/, bA = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, wA = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/, Br = {
  Space_Separator: CA,
  ID_Start: bA,
  ID_Continue: wA
}, ve = {
  isSpaceSeparator(e) {
    return typeof e == "string" && Br.Space_Separator.test(e);
  },
  isIdStartChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "$" || e === "_" || Br.ID_Start.test(e));
  },
  isIdContinueChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "$" || e === "_" || e === "‌" || e === "‍" || Br.ID_Continue.test(e));
  },
  isDigit(e) {
    return typeof e == "string" && /[0-9]/.test(e);
  },
  isHexDigit(e) {
    return typeof e == "string" && /[0-9A-Fa-f]/.test(e);
  }
};
let ul, Me, ft, Na, Tt, Ge, Fe, Kl, Mn;
var FA = function(t, n) {
  ul = String(t), Me = "start", ft = [], Na = 0, Tt = 1, Ge = 0, Fe = void 0, Kl = void 0, Mn = void 0;
  do
    Fe = kA(), xA[Me]();
  while (Fe.type !== "eof");
  return typeof n == "function" ? cl({ "": Mn }, "", n) : Mn;
};
function cl(e, t, n) {
  const a = e[t];
  if (a != null && typeof a == "object")
    if (Array.isArray(a))
      for (let r = 0; r < a.length; r++) {
        const l = String(r), s = cl(a, l, n);
        s === void 0 ? delete a[l] : Object.defineProperty(a, l, {
          value: s,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
    else
      for (const r in a) {
        const l = cl(a, r, n);
        l === void 0 ? delete a[r] : Object.defineProperty(a, r, {
          value: l,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
  return n.call(e, t, a);
}
let U, j, xn, ct, J;
function kA() {
  for (U = "default", j = "", xn = !1, ct = 1; ; ) {
    J = gt();
    const e = su[U]();
    if (e)
      return e;
  }
}
function gt() {
  if (ul[Na])
    return String.fromCodePoint(ul.codePointAt(Na));
}
function R() {
  const e = gt();
  return e === `
` ? (Tt++, Ge = 0) : e ? Ge += e.length : Ge++, e && (Na += e.length), e;
}
const su = {
  default() {
    switch (J) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case " ":
      case "\uFEFF":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        R();
        return;
      case "/":
        R(), U = "comment";
        return;
      case void 0:
        return R(), oe("eof");
    }
    if (ve.isSpaceSeparator(J)) {
      R();
      return;
    }
    return su[Me]();
  },
  comment() {
    switch (J) {
      case "*":
        R(), U = "multiLineComment";
        return;
      case "/":
        R(), U = "singleLineComment";
        return;
    }
    throw ie(R());
  },
  multiLineComment() {
    switch (J) {
      case "*":
        R(), U = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw ie(R());
    }
    R();
  },
  multiLineCommentAsterisk() {
    switch (J) {
      case "*":
        R();
        return;
      case "/":
        R(), U = "default";
        return;
      case void 0:
        throw ie(R());
    }
    R(), U = "multiLineComment";
  },
  singleLineComment() {
    switch (J) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        R(), U = "default";
        return;
      case void 0:
        return R(), oe("eof");
    }
    R();
  },
  value() {
    switch (J) {
      case "{":
      case "[":
        return oe("punctuator", R());
      case "n":
        return R(), Ht("ull"), oe("null", null);
      case "t":
        return R(), Ht("rue"), oe("boolean", !0);
      case "f":
        return R(), Ht("alse"), oe("boolean", !1);
      case "-":
      case "+":
        R() === "-" && (ct = -1), U = "sign";
        return;
      case ".":
        j = R(), U = "decimalPointLeading";
        return;
      case "0":
        j = R(), U = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        j = R(), U = "decimalInteger";
        return;
      case "I":
        return R(), Ht("nfinity"), oe("numeric", 1 / 0);
      case "N":
        return R(), Ht("aN"), oe("numeric", NaN);
      case '"':
      case "'":
        xn = R() === '"', j = "", U = "string";
        return;
    }
    throw ie(R());
  },
  identifierNameStartEscape() {
    if (J !== "u")
      throw ie(R());
    R();
    const e = dl();
    switch (e) {
      case "$":
      case "_":
        break;
      default:
        if (!ve.isIdStartChar(e))
          throw to();
        break;
    }
    j += e, U = "identifierName";
  },
  identifierName() {
    switch (J) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        j += R();
        return;
      case "\\":
        R(), U = "identifierNameEscape";
        return;
    }
    if (ve.isIdContinueChar(J)) {
      j += R();
      return;
    }
    return oe("identifier", j);
  },
  identifierNameEscape() {
    if (J !== "u")
      throw ie(R());
    R();
    const e = dl();
    switch (e) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!ve.isIdContinueChar(e))
          throw to();
        break;
    }
    j += e, U = "identifierName";
  },
  sign() {
    switch (J) {
      case ".":
        j = R(), U = "decimalPointLeading";
        return;
      case "0":
        j = R(), U = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        j = R(), U = "decimalInteger";
        return;
      case "I":
        return R(), Ht("nfinity"), oe("numeric", ct * (1 / 0));
      case "N":
        return R(), Ht("aN"), oe("numeric", NaN);
    }
    throw ie(R());
  },
  zero() {
    switch (J) {
      case ".":
        j += R(), U = "decimalPoint";
        return;
      case "e":
      case "E":
        j += R(), U = "decimalExponent";
        return;
      case "x":
      case "X":
        j += R(), U = "hexadecimal";
        return;
    }
    return oe("numeric", ct * 0);
  },
  decimalInteger() {
    switch (J) {
      case ".":
        j += R(), U = "decimalPoint";
        return;
      case "e":
      case "E":
        j += R(), U = "decimalExponent";
        return;
    }
    if (ve.isDigit(J)) {
      j += R();
      return;
    }
    return oe("numeric", ct * Number(j));
  },
  decimalPointLeading() {
    if (ve.isDigit(J)) {
      j += R(), U = "decimalFraction";
      return;
    }
    throw ie(R());
  },
  decimalPoint() {
    switch (J) {
      case "e":
      case "E":
        j += R(), U = "decimalExponent";
        return;
    }
    if (ve.isDigit(J)) {
      j += R(), U = "decimalFraction";
      return;
    }
    return oe("numeric", ct * Number(j));
  },
  decimalFraction() {
    switch (J) {
      case "e":
      case "E":
        j += R(), U = "decimalExponent";
        return;
    }
    if (ve.isDigit(J)) {
      j += R();
      return;
    }
    return oe("numeric", ct * Number(j));
  },
  decimalExponent() {
    switch (J) {
      case "+":
      case "-":
        j += R(), U = "decimalExponentSign";
        return;
    }
    if (ve.isDigit(J)) {
      j += R(), U = "decimalExponentInteger";
      return;
    }
    throw ie(R());
  },
  decimalExponentSign() {
    if (ve.isDigit(J)) {
      j += R(), U = "decimalExponentInteger";
      return;
    }
    throw ie(R());
  },
  decimalExponentInteger() {
    if (ve.isDigit(J)) {
      j += R();
      return;
    }
    return oe("numeric", ct * Number(j));
  },
  hexadecimal() {
    if (ve.isHexDigit(J)) {
      j += R(), U = "hexadecimalInteger";
      return;
    }
    throw ie(R());
  },
  hexadecimalInteger() {
    if (ve.isHexDigit(J)) {
      j += R();
      return;
    }
    return oe("numeric", ct * Number(j));
  },
  string() {
    switch (J) {
      case "\\":
        R(), j += EA();
        return;
      case '"':
        if (xn)
          return R(), oe("string", j);
        j += R();
        return;
      case "'":
        if (!xn)
          return R(), oe("string", j);
        j += R();
        return;
      case `
`:
      case "\r":
        throw ie(R());
      case "\u2028":
      case "\u2029":
        _A(J);
        break;
      case void 0:
        throw ie(R());
    }
    j += R();
  },
  start() {
    switch (J) {
      case "{":
      case "[":
        return oe("punctuator", R());
    }
    U = "value";
  },
  beforePropertyName() {
    switch (J) {
      case "$":
      case "_":
        j = R(), U = "identifierName";
        return;
      case "\\":
        R(), U = "identifierNameStartEscape";
        return;
      case "}":
        return oe("punctuator", R());
      case '"':
      case "'":
        xn = R() === '"', U = "string";
        return;
    }
    if (ve.isIdStartChar(J)) {
      j += R(), U = "identifierName";
      return;
    }
    throw ie(R());
  },
  afterPropertyName() {
    if (J === ":")
      return oe("punctuator", R());
    throw ie(R());
  },
  beforePropertyValue() {
    U = "value";
  },
  afterPropertyValue() {
    switch (J) {
      case ",":
      case "}":
        return oe("punctuator", R());
    }
    throw ie(R());
  },
  beforeArrayValue() {
    if (J === "]")
      return oe("punctuator", R());
    U = "value";
  },
  afterArrayValue() {
    switch (J) {
      case ",":
      case "]":
        return oe("punctuator", R());
    }
    throw ie(R());
  },
  end() {
    throw ie(R());
  }
};
function oe(e, t) {
  return {
    type: e,
    value: t,
    line: Tt,
    column: Ge
  };
}
function Ht(e) {
  for (const t of e) {
    if (gt() !== t)
      throw ie(R());
    R();
  }
}
function EA() {
  switch (gt()) {
    case "b":
      return R(), "\b";
    case "f":
      return R(), "\f";
    case "n":
      return R(), `
`;
    case "r":
      return R(), "\r";
    case "t":
      return R(), "	";
    case "v":
      return R(), "\v";
    case "0":
      if (R(), ve.isDigit(gt()))
        throw ie(R());
      return "\0";
    case "x":
      return R(), BA();
    case "u":
      return R(), dl();
    case `
`:
    case "\u2028":
    case "\u2029":
      return R(), "";
    case "\r":
      return R(), gt() === `
` && R(), "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw ie(R());
    case void 0:
      throw ie(R());
  }
  return R();
}
function BA() {
  let e = "", t = gt();
  if (!ve.isHexDigit(t) || (e += R(), t = gt(), !ve.isHexDigit(t)))
    throw ie(R());
  return e += R(), String.fromCodePoint(parseInt(e, 16));
}
function dl() {
  let e = "", t = 4;
  for (; t-- > 0; ) {
    const n = gt();
    if (!ve.isHexDigit(n))
      throw ie(R());
    e += R();
  }
  return String.fromCodePoint(parseInt(e, 16));
}
const xA = {
  start() {
    if (Fe.type === "eof")
      throw Wt();
    xr();
  },
  beforePropertyName() {
    switch (Fe.type) {
      case "identifier":
      case "string":
        Kl = Fe.value, Me = "afterPropertyName";
        return;
      case "punctuator":
        Aa();
        return;
      case "eof":
        throw Wt();
    }
  },
  afterPropertyName() {
    if (Fe.type === "eof")
      throw Wt();
    Me = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (Fe.type === "eof")
      throw Wt();
    xr();
  },
  beforeArrayValue() {
    if (Fe.type === "eof")
      throw Wt();
    if (Fe.type === "punctuator" && Fe.value === "]") {
      Aa();
      return;
    }
    xr();
  },
  afterPropertyValue() {
    if (Fe.type === "eof")
      throw Wt();
    switch (Fe.value) {
      case ",":
        Me = "beforePropertyName";
        return;
      case "}":
        Aa();
    }
  },
  afterArrayValue() {
    if (Fe.type === "eof")
      throw Wt();
    switch (Fe.value) {
      case ",":
        Me = "beforeArrayValue";
        return;
      case "]":
        Aa();
    }
  },
  end() {
  }
};
function xr() {
  let e;
  switch (Fe.type) {
    case "punctuator":
      switch (Fe.value) {
        case "{":
          e = {};
          break;
        case "[":
          e = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      e = Fe.value;
      break;
  }
  if (Mn === void 0)
    Mn = e;
  else {
    const t = ft[ft.length - 1];
    Array.isArray(t) ? t.push(e) : Object.defineProperty(t, Kl, {
      value: e,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  }
  if (e !== null && typeof e == "object")
    ft.push(e), Array.isArray(e) ? Me = "beforeArrayValue" : Me = "beforePropertyName";
  else {
    const t = ft[ft.length - 1];
    t == null ? Me = "end" : Array.isArray(t) ? Me = "afterArrayValue" : Me = "afterPropertyValue";
  }
}
function Aa() {
  ft.pop();
  const e = ft[ft.length - 1];
  e == null ? Me = "end" : Array.isArray(e) ? Me = "afterArrayValue" : Me = "afterPropertyValue";
}
function ie(e) {
  return Ta(e === void 0 ? `JSON5: invalid end of input at ${Tt}:${Ge}` : `JSON5: invalid character '${ou(e)}' at ${Tt}:${Ge}`);
}
function Wt() {
  return Ta(`JSON5: invalid end of input at ${Tt}:${Ge}`);
}
function to() {
  return Ge -= 5, Ta(`JSON5: invalid identifier character at ${Tt}:${Ge}`);
}
function _A(e) {
  console.warn(`JSON5: '${ou(e)}' in strings is not valid ECMAScript; consider escaping`);
}
function ou(e) {
  const t = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (t[e])
    return t[e];
  if (e < " ") {
    const n = e.charCodeAt(0).toString(16);
    return "\\x" + ("00" + n).substring(n.length);
  }
  return e;
}
function Ta(e) {
  const t = new SyntaxError(e);
  return t.lineNumber = Tt, t.columnNumber = Ge, t;
}
var SA = function(t, n, a) {
  const r = [];
  let l = "", s, o, i = "", u;
  if (n != null && typeof n == "object" && !Array.isArray(n) && (a = n.space, u = n.quote, n = n.replacer), typeof n == "function")
    o = n;
  else if (Array.isArray(n)) {
    s = [];
    for (const p of n) {
      let A;
      typeof p == "string" ? A = p : (typeof p == "number" || p instanceof String || p instanceof Number) && (A = String(p)), A !== void 0 && s.indexOf(A) < 0 && s.push(A);
    }
  }
  return a instanceof Number ? a = Number(a) : a instanceof String && (a = String(a)), typeof a == "number" ? a > 0 && (a = Math.min(10, Math.floor(a)), i = "          ".substr(0, a)) : typeof a == "string" && (i = a.substr(0, 10)), c("", { "": t });
  function c(p, A) {
    let v = A[p];
    switch (v != null && (typeof v.toJSON5 == "function" ? v = v.toJSON5(p) : typeof v.toJSON == "function" && (v = v.toJSON(p))), o && (v = o.call(A, p, v)), v instanceof Number ? v = Number(v) : v instanceof String ? v = String(v) : v instanceof Boolean && (v = v.valueOf()), v) {
      case null:
        return "null";
      case !0:
        return "true";
      case !1:
        return "false";
    }
    if (typeof v == "string")
      return d(v);
    if (typeof v == "number")
      return String(v);
    if (typeof v == "object")
      return Array.isArray(v) ? f(v) : g(v);
  }
  function d(p) {
    const A = {
      "'": 0.1,
      '"': 0.2
    }, v = {
      "'": "\\'",
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\v": "\\v",
      "\0": "\\0",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    let b = "";
    for (let D = 0; D < p.length; D++) {
      const B = p[D];
      switch (B) {
        case "'":
        case '"':
          A[B]++, b += B;
          continue;
        case "\0":
          if (ve.isDigit(p[D + 1])) {
            b += "\\x00";
            continue;
          }
      }
      if (v[B]) {
        b += v[B];
        continue;
      }
      if (B < " ") {
        let y = B.charCodeAt(0).toString(16);
        b += "\\x" + ("00" + y).substring(y.length);
        continue;
      }
      b += B;
    }
    const C = u || Object.keys(A).reduce((D, B) => A[D] < A[B] ? D : B);
    return b = b.replace(new RegExp(C, "g"), v[C]), C + b + C;
  }
  function g(p) {
    if (r.indexOf(p) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    r.push(p);
    let A = l;
    l = l + i;
    let v = s || Object.keys(p), b = [];
    for (const D of v) {
      const B = c(D, p);
      if (B !== void 0) {
        let y = h(D) + ":";
        i !== "" && (y += " "), y += B, b.push(y);
      }
    }
    let C;
    if (b.length === 0)
      C = "{}";
    else {
      let D;
      if (i === "")
        D = b.join(","), C = "{" + D + "}";
      else {
        let B = `,
` + l;
        D = b.join(B), C = `{
` + l + D + `,
` + A + "}";
      }
    }
    return r.pop(), l = A, C;
  }
  function h(p) {
    if (p.length === 0)
      return d(p);
    const A = String.fromCodePoint(p.codePointAt(0));
    if (!ve.isIdStartChar(A))
      return d(p);
    for (let v = A.length; v < p.length; v++)
      if (!ve.isIdContinueChar(String.fromCodePoint(p.codePointAt(v))))
        return d(p);
    return p;
  }
  function f(p) {
    if (r.indexOf(p) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    r.push(p);
    let A = l;
    l = l + i;
    let v = [];
    for (let C = 0; C < p.length; C++) {
      const D = c(String(C), p);
      v.push(D !== void 0 ? D : "null");
    }
    let b;
    if (v.length === 0)
      b = "[]";
    else if (i === "")
      b = "[" + v.join(",") + "]";
    else {
      let C = `,
` + l, D = v.join(C);
      b = `[
` + l + D + `,
` + A + "]";
    }
    return r.pop(), l = A, b;
  }
};
const IA = {
  parse: FA,
  stringify: SA
};
var MA = IA, $e = typeof window > "u", iu = (e, t) => {
  if ($e || !t) return !1;
  if (t.includes(" ")) throw new Error("[@deot/helper-dom]: 类名不应该包含空格");
  return e.classList ? e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") > -1;
}, NA = (e, t) => {
  if ($e || !t) return;
  let n = e.className;
  const a = t.split(" ");
  for (let r = 0, l = a.length; r < l; r++) {
    const s = a[r];
    s && (e.classList ? e.classList.add(s) : iu(e, s) || (n += " " + s));
  }
  e.classList || (e.className = n);
}, Gl = (e) => {
  const t = e.composedPath && e.composedPath() || [];
  if (t.length) return t;
  let n = e.target?.parentNode;
  /* istanbul ignore next -- @preserve */
  for (; n; )
    t.push(n), n = n.parentNode;
  return t;
}, Xe = (e) => {
  if ($e) return null;
  let t;
  if (typeof e == "object" ? t = e : t = document.querySelector(e), !t) throw new Error("[@deot/helper-dom]: el缺失");
  return t;
}, no = (e, t) => {
  if ($e || !t) return "";
  t === "float" && (t = "cssFloat");
  try {
    const n = document.defaultView.getComputedStyle(e, "");
    return e.style[t] || n?.[t] || "";
  } catch {
    /* istanbul ignore next -- @preserve */
    return e.style[t] || "";
  }
}, TA = (e, t) => {
  if ($e || !e) return !1;
  const { className: n, direction: a } = t || {};
  let r = a ? no(e, `overflow-${a}`) : "";
  /* istanbul ignore if -- @preserve */
  return (!r || r === "visible") && (r = no(e, "overflow")), !!(r.match(/(scroll|auto)/) || n?.test(e.className));
}, uu = (e, t) => {
  if ($e || !e) return null;
  let n = e;
  for (; n; ) {
    if ([
      window,
      document,
      document.documentElement
    ].includes(n)) return window;
    if (TA(n, t)) return n;
    n = n?.parentNode;
  }
  return n;
}, ln = (e, t, n, a) => {
  $e || e.removeEventListener(t, n, !1);
}, ga = (e, t, n, a) => $e ? () => {
} : (e.addEventListener(t, n, !1), () => {
  e.removeEventListener(t, n, !1);
}), OA = $e ? {} : document.createElement("div").style, _r = (() => {
  const e = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform",
    standard: "transform"
  }, t = {
    webkit: "-webkit-",
    Moz: "-moz-",
    O: "-o-",
    ms: "-ms-",
    standard: ""
  };
  for (const n in e) if (OA[e[n]] !== void 0) return {
    camel: n,
    kebab: t[n]
  };
  return !1;
})(), bt = (e) => $e || _r === !1 ? {
  camel: e,
  kebab: e
} : {
  camel: _r.camel + e.charAt(0).toUpperCase() + e.substr(1),
  kebab: _r.kebab + e
}, Sr = (e, t) => {
  if ($e || !t) return;
  const n = t.split(" ");
  let a = " " + e.className + " ";
  for (let r = 0, l = n.length; r < l; r++) {
    const s = n[r];
    if (s) {
      if (e.classList) {
        e.classList.remove(s);
        continue;
      }
      /* istanbul ignore next -- @preserve */
      iu(e, s) && (a = a.replace(" " + s + " ", " "));
    }
  }
  e.classList || (e.className = a.trim());
}, jl = async (e, t) => {
  if ($e) return;
  const { from: n = 0, to: a = 0, duration: r = 300 } = t || {}, l = Math.abs(n - a), s = Math.ceil(l / r * 50);
  let o;
  const i = new Promise((c) => {
    o = c;
  }), u = (c, d) => {
    if (c === d) {
      o();
      return;
    }
    let g = c + s > d ? d : c + s;
    c > d && (g = c - s < d ? d : c - s), e === window ? window.scrollTo(g, g) : e.scrollTop = g, window.requestAnimationFrame(() => u(g, d));
  };
  return u(n, a), i;
}, ao = Object.defineProperty, RA = (e, t) => {
  let n = {};
  for (var a in e) ao(n, a, {
    get: e[a],
    enumerable: !0
  });
  return ao(n, Symbol.toStringTag, { value: "Module" }), n;
}, It = typeof window > "u", na = /* @__PURE__ */ RA({
  autoCatch: () => PA,
  eleInRegExp: () => YA,
  getComputedStyle: () => WA,
  toOptions: () => HA
}), PA = async (e, t = {}) => {
  const { onError: n = console.error } = t;
  let a = e;
  typeof a == "function" && (a = a());
  try {
    return await a;
  } catch (r) {
    n(r);
  }
}, YA = (e, t) => {
  for (const n in t) if (t[n].test(e[n])) return !0;
  return !1;
}, HA = (e, t, n) => {
  let a = n || {};
  return e.map((r, l) => (typeof r == "object" && e.length === l + 1 ? a = {
    ...a,
    ...r
  } : a[t[l]] = r, !0)), a;
}, WA = (e, t) => {
  if (It) return {};
  const n = window.getComputedStyle(e), a = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), r = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), l = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width"));
  return {
    sizingStyle: t.map((s) => `${s}:${n.getPropertyValue(s)}`).join(";"),
    paddingSize: r,
    borderSize: l,
    boxSizing: a
  };
}, Ba = (e, t) => {
  let n = e;
  t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, "");
  const a = t.split(".");
  let r = 0;
  for (let l = a.length; r < l - 1; ++r) {
    const s = a[r];
    try {
      if (s in n) n = n[s];
      else throw new Error();
    } catch {
      throw new Error("无效路径!");
    }
  }
  return {
    o: n,
    k: a[r],
    v: n[a[r]]
  };
}, $A = +/* @__PURE__ */ new Date(), VA = 0, rt = (e) => `${e ? `${e}-` : ""}${$A}-${++VA}`, hl = (e, t) => Object.prototype.hasOwnProperty.call(e, t), et = (e) => e < 10 && e > 0 ? "0" + e : e <= 0 ? "00" : "" + e, LA = typeof window < "u" && window.requestAnimationFrame || ((e) => setTimeout(e, 16)), QA = (e, t, n) => {
  let a = !0, r = 1, l = e;
  for (; a; ) {
    if (r > 1e3) throw new Error(e);
    try {
      const s = (t || decodeURIComponent)(l);
      (l === s || typeof n == "function" && n(s)) && (a = !1), l = s;
    } catch {
      a = !1;
    }
    r++;
  }
  return l;
}, KA = (e) => e === null ? null : /^\d+$/.test(e) && e.length >= 16 && +e > Number.MAX_SAFE_INTEGER ? e : QA(e, JSON.parse, (t) => typeof t == "object"), cu = typeof global == "object" && global && global.Object === Object && global, GA = typeof self == "object" && self && self.Object === Object && self, Ze = cu || GA || Function("return this")(), We = Ze.Symbol, du = Object.prototype, jA = du.hasOwnProperty, UA = du.toString, wn = We ? We.toStringTag : void 0;
function ZA(e) {
  var t = jA.call(e, wn), n = e[wn];
  try {
    e[wn] = void 0;
    var a = !0;
  } catch {
  }
  var r = UA.call(e);
  return a && (t ? e[wn] = n : delete e[wn]), r;
}
var JA = Object.prototype, zA = JA.toString;
function XA(e) {
  return zA.call(e);
}
var qA = "[object Null]", eg = "[object Undefined]", ro = We ? We.toStringTag : void 0;
function vn(e) {
  return e == null ? e === void 0 ? eg : qA : ro && ro in Object(e) ? ZA(e) : XA(e);
}
function yt(e) {
  return e != null && typeof e == "object";
}
var tg = "[object Symbol]";
function Ua(e) {
  return typeof e == "symbol" || yt(e) && vn(e) == tg;
}
function ng(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, r = Array(a); ++n < a; )
    r[n] = t(e[n], n, e);
  return r;
}
var st = Array.isArray, lo = We ? We.prototype : void 0, so = lo ? lo.toString : void 0;
function hu(e) {
  if (typeof e == "string")
    return e;
  if (st(e))
    return ng(e, hu) + "";
  if (Ua(e))
    return so ? so.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ag = /\s/;
function rg(e) {
  for (var t = e.length; t-- && ag.test(e.charAt(t)); )
    ;
  return t;
}
var lg = /^\s+/;
function sg(e) {
  return e && e.slice(0, rg(e) + 1).replace(lg, "");
}
function ot(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var oo = NaN, og = /^[-+]0x[0-9a-f]+$/i, ig = /^0b[01]+$/i, ug = /^0o[0-7]+$/i, cg = parseInt;
function io(e) {
  if (typeof e == "number")
    return e;
  if (Ua(e))
    return oo;
  if (ot(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ot(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = sg(e);
  var n = ig.test(e);
  return n || ug.test(e) ? cg(e.slice(2), n ? 2 : 8) : og.test(e) ? oo : +e;
}
function fu(e) {
  return e;
}
var dg = "[object AsyncFunction]", hg = "[object Function]", fg = "[object GeneratorFunction]", Ag = "[object Proxy]";
function Au(e) {
  if (!ot(e))
    return !1;
  var t = vn(e);
  return t == hg || t == fg || t == dg || t == Ag;
}
var Ir = Ze["__core-js_shared__"], uo = (function() {
  var e = /[^.]+$/.exec(Ir && Ir.keys && Ir.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function gg(e) {
  return !!uo && uo in e;
}
var mg = Function.prototype, pg = mg.toString;
function tn(e) {
  if (e != null) {
    try {
      return pg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vg = /[\\^$.*+?()[\]{}|]/g, yg = /^\[object .+?Constructor\]$/, Dg = Function.prototype, Cg = Object.prototype, bg = Dg.toString, wg = Cg.hasOwnProperty, Fg = RegExp(
  "^" + bg.call(wg).replace(vg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function kg(e) {
  if (!ot(e) || gg(e))
    return !1;
  var t = Au(e) ? Fg : yg;
  return t.test(tn(e));
}
function Eg(e, t) {
  return e?.[t];
}
function nn(e, t) {
  var n = Eg(e, t);
  return kg(n) ? n : void 0;
}
var fl = nn(Ze, "WeakMap"), co = Object.create, Bg = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!ot(t))
      return {};
    if (co)
      return co(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function xg(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var _g = 800, Sg = 16, Ig = Date.now;
function Mg(e) {
  var t = 0, n = 0;
  return function() {
    var a = Ig(), r = Sg - (a - n);
    if (n = a, r > 0) {
      if (++t >= _g)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ng(e) {
  return function() {
    return e;
  };
}
var Oa = (function() {
  try {
    var e = nn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Tg = Oa ? function(e, t) {
  return Oa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ng(t),
    writable: !0
  });
} : fu, gu = Mg(Tg);
function Og(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function Rg(e, t, n, a) {
  for (var r = e.length, l = n + -1; ++l < r; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
function Pg(e) {
  return e !== e;
}
function Yg(e, t, n) {
  for (var a = n - 1, r = e.length; ++a < r; )
    if (e[a] === t)
      return a;
  return -1;
}
function Hg(e, t, n) {
  return t === t ? Yg(e, t, n) : Rg(e, Pg, n);
}
function Wg(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Hg(e, t, 0) > -1;
}
var $g = 9007199254740991, Vg = /^(?:0|[1-9]\d*)$/;
function Ul(e, t) {
  var n = typeof e;
  return t = t ?? $g, !!t && (n == "number" || n != "symbol" && Vg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Lg(e, t, n) {
  t == "__proto__" && Oa ? Oa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Zl(e, t) {
  return e === t || e !== e && t !== t;
}
var Qg = Object.prototype, Kg = Qg.hasOwnProperty;
function mu(e, t, n) {
  var a = e[t];
  (!(Kg.call(e, t) && Zl(a, n)) || n === void 0 && !(t in e)) && Lg(e, t, n);
}
var ho = Math.max;
function pu(e, t, n) {
  return t = ho(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var a = arguments, r = -1, l = ho(a.length - t, 0), s = Array(l); ++r < l; )
      s[r] = a[t + r];
    r = -1;
    for (var o = Array(t + 1); ++r < t; )
      o[r] = a[r];
    return o[t] = n(s), xg(e, this, o);
  };
}
function Gg(e, t) {
  return gu(pu(e, t, fu), e + "");
}
var jg = 9007199254740991;
function Jl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= jg;
}
function vu(e) {
  return e != null && Jl(e.length) && !Au(e);
}
var Ug = Object.prototype;
function yu(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Ug;
  return e === n;
}
function Zg(e, t) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = t(n);
  return a;
}
var Jg = "[object Arguments]";
function fo(e) {
  return yt(e) && vn(e) == Jg;
}
var Du = Object.prototype, zg = Du.hasOwnProperty, Xg = Du.propertyIsEnumerable, zl = fo(/* @__PURE__ */ (function() {
  return arguments;
})()) ? fo : function(e) {
  return yt(e) && zg.call(e, "callee") && !Xg.call(e, "callee");
};
function qg() {
  return !1;
}
var Cu = typeof exports == "object" && exports && !exports.nodeType && exports, Ao = Cu && typeof module == "object" && module && !module.nodeType && module, em = Ao && Ao.exports === Cu, go = em ? Ze.Buffer : void 0, tm = go ? go.isBuffer : void 0, Ra = tm || qg, nm = "[object Arguments]", am = "[object Array]", rm = "[object Boolean]", lm = "[object Date]", sm = "[object Error]", om = "[object Function]", im = "[object Map]", um = "[object Number]", cm = "[object Object]", dm = "[object RegExp]", hm = "[object Set]", fm = "[object String]", Am = "[object WeakMap]", gm = "[object ArrayBuffer]", mm = "[object DataView]", pm = "[object Float32Array]", vm = "[object Float64Array]", ym = "[object Int8Array]", Dm = "[object Int16Array]", Cm = "[object Int32Array]", bm = "[object Uint8Array]", wm = "[object Uint8ClampedArray]", Fm = "[object Uint16Array]", km = "[object Uint32Array]", ue = {};
ue[pm] = ue[vm] = ue[ym] = ue[Dm] = ue[Cm] = ue[bm] = ue[wm] = ue[Fm] = ue[km] = !0;
ue[nm] = ue[am] = ue[gm] = ue[rm] = ue[mm] = ue[lm] = ue[sm] = ue[om] = ue[im] = ue[um] = ue[cm] = ue[dm] = ue[hm] = ue[fm] = ue[Am] = !1;
function Em(e) {
  return yt(e) && Jl(e.length) && !!ue[vn(e)];
}
function Xl(e) {
  return function(t) {
    return e(t);
  };
}
var bu = typeof exports == "object" && exports && !exports.nodeType && exports, Nn = bu && typeof module == "object" && module && !module.nodeType && module, Bm = Nn && Nn.exports === bu, Mr = Bm && cu.process, gn = (function() {
  try {
    var e = Nn && Nn.require && Nn.require("util").types;
    return e || Mr && Mr.binding && Mr.binding("util");
  } catch {
  }
})(), mo = gn && gn.isTypedArray, wu = mo ? Xl(mo) : Em, xm = Object.prototype, _m = xm.hasOwnProperty;
function Sm(e, t) {
  var n = st(e), a = !n && zl(e), r = !n && !a && Ra(e), l = !n && !a && !r && wu(e), s = n || a || r || l, o = s ? Zg(e.length, String) : [], i = o.length;
  for (var u in e)
    _m.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ul(u, i))) && o.push(u);
  return o;
}
function Fu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Im = Fu(Object.keys, Object), Mm = Object.prototype, Nm = Mm.hasOwnProperty;
function Tm(e) {
  if (!yu(e))
    return Im(e);
  var t = [];
  for (var n in Object(e))
    Nm.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Om(e) {
  return vu(e) ? Sm(e) : Tm(e);
}
var Rm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pm = /^\w*$/;
function Ym(e, t) {
  if (st(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ua(e) ? !0 : Pm.test(e) || !Rm.test(e) || t != null && e in Object(t);
}
var Gn = nn(Object, "create");
function Hm() {
  this.__data__ = Gn ? Gn(null) : {}, this.size = 0;
}
function Wm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $m = "__lodash_hash_undefined__", Vm = Object.prototype, Lm = Vm.hasOwnProperty;
function Qm(e) {
  var t = this.__data__;
  if (Gn) {
    var n = t[e];
    return n === $m ? void 0 : n;
  }
  return Lm.call(t, e) ? t[e] : void 0;
}
var Km = Object.prototype, Gm = Km.hasOwnProperty;
function jm(e) {
  var t = this.__data__;
  return Gn ? t[e] !== void 0 : Gm.call(t, e);
}
var Um = "__lodash_hash_undefined__";
function Zm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Gn && t === void 0 ? Um : t, this;
}
function Xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Xt.prototype.clear = Hm;
Xt.prototype.delete = Wm;
Xt.prototype.get = Qm;
Xt.prototype.has = jm;
Xt.prototype.set = Zm;
function Jm() {
  this.__data__ = [], this.size = 0;
}
function Za(e, t) {
  for (var n = e.length; n--; )
    if (Zl(e[n][0], t))
      return n;
  return -1;
}
var zm = Array.prototype, Xm = zm.splice;
function qm(e) {
  var t = this.__data__, n = Za(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : Xm.call(t, n, 1), --this.size, !0;
}
function ep(e) {
  var t = this.__data__, n = Za(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function tp(e) {
  return Za(this.__data__, e) > -1;
}
function np(e, t) {
  var n = this.__data__, a = Za(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function wt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
wt.prototype.clear = Jm;
wt.prototype.delete = qm;
wt.prototype.get = ep;
wt.prototype.has = tp;
wt.prototype.set = np;
var jn = nn(Ze, "Map");
function ap() {
  this.size = 0, this.__data__ = {
    hash: new Xt(),
    map: new (jn || wt)(),
    string: new Xt()
  };
}
function rp(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ja(e, t) {
  var n = e.__data__;
  return rp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function lp(e) {
  var t = Ja(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sp(e) {
  return Ja(this, e).get(e);
}
function op(e) {
  return Ja(this, e).has(e);
}
function ip(e, t) {
  var n = Ja(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function Ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Ft.prototype.clear = ap;
Ft.prototype.delete = lp;
Ft.prototype.get = sp;
Ft.prototype.has = op;
Ft.prototype.set = ip;
var up = "Expected a function";
function ql(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(up);
  var n = function() {
    var a = arguments, r = t ? t.apply(this, a) : a[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var s = e.apply(this, a);
    return n.cache = l.set(r, s) || l, s;
  };
  return n.cache = new (ql.Cache || Ft)(), n;
}
ql.Cache = Ft;
var cp = 500;
function dp(e) {
  var t = ql(e, function(a) {
    return n.size === cp && n.clear(), a;
  }), n = t.cache;
  return t;
}
var hp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fp = /\\(\\)?/g, Ap = dp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(hp, function(n, a, r, l) {
    t.push(r ? l.replace(fp, "$1") : a || n);
  }), t;
});
function za(e) {
  return e == null ? "" : hu(e);
}
function Xa(e, t) {
  return st(e) ? e : Ym(e, t) ? [e] : Ap(za(e));
}
function es(e) {
  if (typeof e == "string" || Ua(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function gp(e, t) {
  t = Xa(t, e);
  for (var n = 0, a = t.length; e != null && n < a; )
    e = e[es(t[n++])];
  return n && n == a ? e : void 0;
}
function ku(e, t) {
  for (var n = -1, a = t.length, r = e.length; ++n < a; )
    e[r + n] = t[n];
  return e;
}
var po = We ? We.isConcatSpreadable : void 0;
function mp(e) {
  return st(e) || zl(e) || !!(po && e && e[po]);
}
function Eu(e, t, n, a, r) {
  var l = -1, s = e.length;
  for (n || (n = mp), r || (r = []); ++l < s; ) {
    var o = e[l];
    n(o) ? ku(r, o) : a || (r[r.length] = o);
  }
  return r;
}
function pp(e) {
  var t = e == null ? 0 : e.length;
  return t ? Eu(e) : [];
}
function vp(e) {
  return gu(pu(e, void 0, pp), e + "");
}
var yp = Fu(Object.getPrototypeOf, Object);
function Dp(e, t, n) {
  var a = -1, r = e.length;
  t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var l = Array(r); ++a < r; )
    l[a] = e[a + t];
  return l;
}
function Cp(e, t, n) {
  var a = e.length;
  return n = n === void 0 ? a : n, !t && n >= a ? e : Dp(e, t, n);
}
var bp = "\\ud800-\\udfff", wp = "\\u0300-\\u036f", Fp = "\\ufe20-\\ufe2f", kp = "\\u20d0-\\u20ff", Ep = wp + Fp + kp, Bp = "\\ufe0e\\ufe0f", xp = "\\u200d", _p = RegExp("[" + xp + bp + Ep + Bp + "]");
function Bu(e) {
  return _p.test(e);
}
function Sp(e) {
  return e.split("");
}
var xu = "\\ud800-\\udfff", Ip = "\\u0300-\\u036f", Mp = "\\ufe20-\\ufe2f", Np = "\\u20d0-\\u20ff", Tp = Ip + Mp + Np, Op = "\\ufe0e\\ufe0f", Rp = "[" + xu + "]", Al = "[" + Tp + "]", gl = "\\ud83c[\\udffb-\\udfff]", Pp = "(?:" + Al + "|" + gl + ")", _u = "[^" + xu + "]", Su = "(?:\\ud83c[\\udde6-\\uddff]){2}", Iu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Yp = "\\u200d", Mu = Pp + "?", Nu = "[" + Op + "]?", Hp = "(?:" + Yp + "(?:" + [_u, Su, Iu].join("|") + ")" + Nu + Mu + ")*", Wp = Nu + Mu + Hp, $p = "(?:" + [_u + Al + "?", Al, Su, Iu, Rp].join("|") + ")", Vp = RegExp(gl + "(?=" + gl + ")|" + $p + Wp, "g");
function Lp(e) {
  return e.match(Vp) || [];
}
function Qp(e) {
  return Bu(e) ? Lp(e) : Sp(e);
}
function Kp(e) {
  return function(t) {
    t = za(t);
    var n = Bu(t) ? Qp(t) : void 0, a = n ? n[0] : t.charAt(0), r = n ? Cp(n, 1).join("") : t.slice(1);
    return a[e]() + r;
  };
}
var Gp = Kp("toUpperCase");
function jp(e, t, n, a) {
  for (var r = -1, l = e == null ? 0 : e.length; ++r < l; )
    n = t(n, e[r], r, e);
  return n;
}
function Up(e) {
  return function(t) {
    return e?.[t];
  };
}
var Zp = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Jp = Up(Zp), zp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xp = "\\u0300-\\u036f", qp = "\\ufe20-\\ufe2f", ev = "\\u20d0-\\u20ff", tv = Xp + qp + ev, nv = "[" + tv + "]", av = RegExp(nv, "g");
function rv(e) {
  return e = za(e), e && e.replace(zp, Jp).replace(av, "");
}
var lv = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function sv(e) {
  return e.match(lv) || [];
}
var ov = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function iv(e) {
  return ov.test(e);
}
var Tu = "\\ud800-\\udfff", uv = "\\u0300-\\u036f", cv = "\\ufe20-\\ufe2f", dv = "\\u20d0-\\u20ff", hv = uv + cv + dv, Ou = "\\u2700-\\u27bf", Ru = "a-z\\xdf-\\xf6\\xf8-\\xff", fv = "\\xac\\xb1\\xd7\\xf7", Av = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gv = "\\u2000-\\u206f", mv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Pu = "A-Z\\xc0-\\xd6\\xd8-\\xde", pv = "\\ufe0e\\ufe0f", Yu = fv + Av + gv + mv, Hu = "['’]", vo = "[" + Yu + "]", vv = "[" + hv + "]", Wu = "\\d+", yv = "[" + Ou + "]", $u = "[" + Ru + "]", Vu = "[^" + Tu + Yu + Wu + Ou + Ru + Pu + "]", Dv = "\\ud83c[\\udffb-\\udfff]", Cv = "(?:" + vv + "|" + Dv + ")", bv = "[^" + Tu + "]", Lu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Qu = "[\\ud800-\\udbff][\\udc00-\\udfff]", on = "[" + Pu + "]", wv = "\\u200d", yo = "(?:" + $u + "|" + Vu + ")", Fv = "(?:" + on + "|" + Vu + ")", Do = "(?:" + Hu + "(?:d|ll|m|re|s|t|ve))?", Co = "(?:" + Hu + "(?:D|LL|M|RE|S|T|VE))?", Ku = Cv + "?", Gu = "[" + pv + "]?", kv = "(?:" + wv + "(?:" + [bv, Lu, Qu].join("|") + ")" + Gu + Ku + ")*", Ev = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Bv = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", xv = Gu + Ku + kv, _v = "(?:" + [yv, Lu, Qu].join("|") + ")" + xv, Sv = RegExp([
  on + "?" + $u + "+" + Do + "(?=" + [vo, on, "$"].join("|") + ")",
  Fv + "+" + Co + "(?=" + [vo, on + yo, "$"].join("|") + ")",
  on + "?" + yo + "+" + Do,
  on + "+" + Co,
  Bv,
  Ev,
  Wu,
  _v
].join("|"), "g");
function Iv(e) {
  return e.match(Sv) || [];
}
function Mv(e, t, n) {
  return e = za(e), t = t, t === void 0 ? iv(e) ? Iv(e) : sv(e) : e.match(t) || [];
}
var Nv = "['’]", Tv = RegExp(Nv, "g");
function Ov(e) {
  return function(t) {
    return jp(Mv(rv(t).replace(Tv, "")), e, "");
  };
}
function Rv() {
  this.__data__ = new wt(), this.size = 0;
}
function Pv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Yv(e) {
  return this.__data__.get(e);
}
function Hv(e) {
  return this.__data__.has(e);
}
var Wv = 200;
function $v(e, t) {
  var n = this.__data__;
  if (n instanceof wt) {
    var a = n.__data__;
    if (!jn || a.length < Wv - 1)
      return a.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ft(a);
  }
  return n.set(e, t), this.size = n.size, this;
}
function mt(e) {
  var t = this.__data__ = new wt(e);
  this.size = t.size;
}
mt.prototype.clear = Rv;
mt.prototype.delete = Pv;
mt.prototype.get = Yv;
mt.prototype.has = Hv;
mt.prototype.set = $v;
var ju = typeof exports == "object" && exports && !exports.nodeType && exports, bo = ju && typeof module == "object" && module && !module.nodeType && module, Vv = bo && bo.exports === ju, wo = Vv ? Ze.Buffer : void 0;
wo && wo.allocUnsafe;
function Lv(e, t) {
  return e.slice();
}
function Qv(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, r = 0, l = []; ++n < a; ) {
    var s = e[n];
    t(s, n, e) && (l[r++] = s);
  }
  return l;
}
function Kv() {
  return [];
}
var Gv = Object.prototype, jv = Gv.propertyIsEnumerable, Fo = Object.getOwnPropertySymbols, Uv = Fo ? function(e) {
  return e == null ? [] : (e = Object(e), Qv(Fo(e), function(t) {
    return jv.call(e, t);
  }));
} : Kv;
function Zv(e, t, n) {
  var a = t(e);
  return st(e) ? a : ku(a, n(e));
}
function ml(e) {
  return Zv(e, Om, Uv);
}
var pl = nn(Ze, "DataView"), vl = nn(Ze, "Promise"), yl = nn(Ze, "Set"), ko = "[object Map]", Jv = "[object Object]", Eo = "[object Promise]", Bo = "[object Set]", xo = "[object WeakMap]", _o = "[object DataView]", zv = tn(pl), Xv = tn(jn), qv = tn(vl), e0 = tn(yl), t0 = tn(fl), Qe = vn;
(pl && Qe(new pl(new ArrayBuffer(1))) != _o || jn && Qe(new jn()) != ko || vl && Qe(vl.resolve()) != Eo || yl && Qe(new yl()) != Bo || fl && Qe(new fl()) != xo) && (Qe = function(e) {
  var t = vn(e), n = t == Jv ? e.constructor : void 0, a = n ? tn(n) : "";
  if (a)
    switch (a) {
      case zv:
        return _o;
      case Xv:
        return ko;
      case qv:
        return Eo;
      case e0:
        return Bo;
      case t0:
        return xo;
    }
  return t;
});
var n0 = Object.prototype, a0 = n0.hasOwnProperty;
function r0(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && a0.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Pa = Ze.Uint8Array;
function ts(e) {
  var t = new e.constructor(e.byteLength);
  return new Pa(t).set(new Pa(e)), t;
}
function l0(e, t) {
  var n = ts(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var s0 = /\w*$/;
function o0(e) {
  var t = new e.constructor(e.source, s0.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var So = We ? We.prototype : void 0, Io = So ? So.valueOf : void 0;
function i0(e) {
  return Io ? Object(Io.call(e)) : {};
}
function u0(e, t) {
  var n = ts(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var c0 = "[object Boolean]", d0 = "[object Date]", h0 = "[object Map]", f0 = "[object Number]", A0 = "[object RegExp]", g0 = "[object Set]", m0 = "[object String]", p0 = "[object Symbol]", v0 = "[object ArrayBuffer]", y0 = "[object DataView]", D0 = "[object Float32Array]", C0 = "[object Float64Array]", b0 = "[object Int8Array]", w0 = "[object Int16Array]", F0 = "[object Int32Array]", k0 = "[object Uint8Array]", E0 = "[object Uint8ClampedArray]", B0 = "[object Uint16Array]", x0 = "[object Uint32Array]";
function _0(e, t, n) {
  var a = e.constructor;
  switch (t) {
    case v0:
      return ts(e);
    case c0:
    case d0:
      return new a(+e);
    case y0:
      return l0(e);
    case D0:
    case C0:
    case b0:
    case w0:
    case F0:
    case k0:
    case E0:
    case B0:
    case x0:
      return u0(e);
    case h0:
      return new a();
    case f0:
    case m0:
      return new a(e);
    case A0:
      return o0(e);
    case g0:
      return new a();
    case p0:
      return i0(e);
  }
}
function S0(e) {
  return typeof e.constructor == "function" && !yu(e) ? Bg(yp(e)) : {};
}
var I0 = "[object Map]";
function M0(e) {
  return yt(e) && Qe(e) == I0;
}
var Mo = gn && gn.isMap, N0 = Mo ? Xl(Mo) : M0, T0 = "[object Set]";
function O0(e) {
  return yt(e) && Qe(e) == T0;
}
var No = gn && gn.isSet, R0 = No ? Xl(No) : O0, Uu = "[object Arguments]", P0 = "[object Array]", Y0 = "[object Boolean]", H0 = "[object Date]", W0 = "[object Error]", Zu = "[object Function]", $0 = "[object GeneratorFunction]", V0 = "[object Map]", L0 = "[object Number]", Ju = "[object Object]", Q0 = "[object RegExp]", K0 = "[object Set]", G0 = "[object String]", j0 = "[object Symbol]", U0 = "[object WeakMap]", Z0 = "[object ArrayBuffer]", J0 = "[object DataView]", z0 = "[object Float32Array]", X0 = "[object Float64Array]", q0 = "[object Int8Array]", ey = "[object Int16Array]", ty = "[object Int32Array]", ny = "[object Uint8Array]", ay = "[object Uint8ClampedArray]", ry = "[object Uint16Array]", ly = "[object Uint32Array]", le = {};
le[Uu] = le[P0] = le[Z0] = le[J0] = le[Y0] = le[H0] = le[z0] = le[X0] = le[q0] = le[ey] = le[ty] = le[V0] = le[L0] = le[Ju] = le[Q0] = le[K0] = le[G0] = le[j0] = le[ny] = le[ay] = le[ry] = le[ly] = !0;
le[W0] = le[Zu] = le[U0] = !1;
function xa(e, t, n, a, r, l) {
  var s;
  if (s !== void 0)
    return s;
  if (!ot(e))
    return e;
  var o = st(e);
  if (o)
    s = r0(e);
  else {
    var i = Qe(e), u = i == Zu || i == $0;
    if (Ra(e))
      return Lv(e);
    if (i == Ju || i == Uu || u && !r)
      s = u ? {} : S0(e);
    else {
      if (!le[i])
        return r ? e : {};
      s = _0(e, i);
    }
  }
  l || (l = new mt());
  var c = l.get(e);
  if (c)
    return c;
  l.set(e, s), R0(e) ? e.forEach(function(h) {
    s.add(xa(h, t, n, h, e, l));
  }) : N0(e) && e.forEach(function(h, f) {
    s.set(f, xa(h, t, n, f, e, l));
  });
  var d = ml, g = o ? void 0 : d(e);
  return Og(g || e, function(h, f) {
    g && (f = h, h = e[f]), mu(s, f, xa(h, t, n, f, e, l));
  }), s;
}
var sy = 1, oy = 4;
function qa(e) {
  return xa(e, sy | oy);
}
var iy = "__lodash_hash_undefined__";
function uy(e) {
  return this.__data__.set(e, iy), this;
}
function cy(e) {
  return this.__data__.has(e);
}
function Un(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ft(); ++t < n; )
    this.add(e[t]);
}
Un.prototype.add = Un.prototype.push = uy;
Un.prototype.has = cy;
function dy(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function zu(e, t) {
  return e.has(t);
}
var hy = 1, fy = 2;
function Xu(e, t, n, a, r, l) {
  var s = n & hy, o = e.length, i = t.length;
  if (o != i && !(s && i > o))
    return !1;
  var u = l.get(e), c = l.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, g = !0, h = n & fy ? new Un() : void 0;
  for (l.set(e, t), l.set(t, e); ++d < o; ) {
    var f = e[d], p = t[d];
    if (a)
      var A = s ? a(p, f, d, t, e, l) : a(f, p, d, e, t, l);
    if (A !== void 0) {
      if (A)
        continue;
      g = !1;
      break;
    }
    if (h) {
      if (!dy(t, function(v, b) {
        if (!zu(h, b) && (f === v || r(f, v, n, a, l)))
          return h.push(b);
      })) {
        g = !1;
        break;
      }
    } else if (!(f === p || r(f, p, n, a, l))) {
      g = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), g;
}
function Ay(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a, r) {
    n[++t] = [r, a];
  }), n;
}
function gy(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a) {
    n[++t] = a;
  }), n;
}
var my = 1, py = 2, vy = "[object Boolean]", yy = "[object Date]", Dy = "[object Error]", Cy = "[object Map]", by = "[object Number]", wy = "[object RegExp]", Fy = "[object Set]", ky = "[object String]", Ey = "[object Symbol]", By = "[object ArrayBuffer]", xy = "[object DataView]", To = We ? We.prototype : void 0, Nr = To ? To.valueOf : void 0;
function _y(e, t, n, a, r, l, s) {
  switch (n) {
    case xy:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case By:
      return !(e.byteLength != t.byteLength || !l(new Pa(e), new Pa(t)));
    case vy:
    case yy:
    case by:
      return Zl(+e, +t);
    case Dy:
      return e.name == t.name && e.message == t.message;
    case wy:
    case ky:
      return e == t + "";
    case Cy:
      var o = Ay;
    case Fy:
      var i = a & my;
      if (o || (o = gy), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      a |= py, s.set(e, t);
      var c = Xu(o(e), o(t), a, r, l, s);
      return s.delete(e), c;
    case Ey:
      if (Nr)
        return Nr.call(e) == Nr.call(t);
  }
  return !1;
}
var Sy = 1, Iy = Object.prototype, My = Iy.hasOwnProperty;
function Ny(e, t, n, a, r, l) {
  var s = n & Sy, o = ml(e), i = o.length, u = ml(t), c = u.length;
  if (i != c && !s)
    return !1;
  for (var d = i; d--; ) {
    var g = o[d];
    if (!(s ? g in t : My.call(t, g)))
      return !1;
  }
  var h = l.get(e), f = l.get(t);
  if (h && f)
    return h == t && f == e;
  var p = !0;
  l.set(e, t), l.set(t, e);
  for (var A = s; ++d < i; ) {
    g = o[d];
    var v = e[g], b = t[g];
    if (a)
      var C = s ? a(b, v, g, t, e, l) : a(v, b, g, e, t, l);
    if (!(C === void 0 ? v === b || r(v, b, n, a, l) : C)) {
      p = !1;
      break;
    }
    A || (A = g == "constructor");
  }
  if (p && !A) {
    var D = e.constructor, B = t.constructor;
    D != B && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof B == "function" && B instanceof B) && (p = !1);
  }
  return l.delete(e), l.delete(t), p;
}
var Ty = 1, Oo = "[object Arguments]", Ro = "[object Array]", ma = "[object Object]", Oy = Object.prototype, Po = Oy.hasOwnProperty;
function Ry(e, t, n, a, r, l) {
  var s = st(e), o = st(t), i = s ? Ro : Qe(e), u = o ? Ro : Qe(t);
  i = i == Oo ? ma : i, u = u == Oo ? ma : u;
  var c = i == ma, d = u == ma, g = i == u;
  if (g && Ra(e)) {
    if (!Ra(t))
      return !1;
    s = !0, c = !1;
  }
  if (g && !c)
    return l || (l = new mt()), s || wu(e) ? Xu(e, t, n, a, r, l) : _y(e, t, i, n, a, r, l);
  if (!(n & Ty)) {
    var h = c && Po.call(e, "__wrapped__"), f = d && Po.call(t, "__wrapped__");
    if (h || f) {
      var p = h ? e.value() : e, A = f ? t.value() : t;
      return l || (l = new mt()), r(p, A, n, a, l);
    }
  }
  return g ? (l || (l = new mt()), Ny(e, t, n, a, r, l)) : !1;
}
function qu(e, t, n, a, r) {
  return e === t ? !0 : e == null || t == null || !yt(e) && !yt(t) ? e !== e && t !== t : Ry(e, t, n, a, qu, r);
}
function Py(e, t) {
  return e != null && t in Object(e);
}
function Yy(e, t, n) {
  t = Xa(t, e);
  for (var a = -1, r = t.length, l = !1; ++a < r; ) {
    var s = es(t[a]);
    if (!(l = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return l || ++a != r ? l : (r = e == null ? 0 : e.length, !!r && Jl(r) && Ul(s, r) && (st(e) || zl(e)));
}
function Hy(e, t) {
  return e != null && Yy(e, t, Py);
}
var Tr = function() {
  return Ze.Date.now();
}, Wy = "Expected a function", $y = Math.max, Vy = Math.min;
function yn(e, t, n) {
  var a, r, l, s, o, i, u = 0, c = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Wy);
  t = io(t) || 0, ot(n) && (c = !!n.leading, d = "maxWait" in n, l = d ? $y(io(n.maxWait) || 0, t) : l, g = "trailing" in n ? !!n.trailing : g);
  function h(y) {
    var x = a, S = r;
    return a = r = void 0, u = y, s = e.apply(S, x), s;
  }
  function f(y) {
    return u = y, o = setTimeout(v, t), c ? h(y) : s;
  }
  function p(y) {
    var x = y - i, S = y - u, I = t - x;
    return d ? Vy(I, l - S) : I;
  }
  function A(y) {
    var x = y - i, S = y - u;
    return i === void 0 || x >= t || x < 0 || d && S >= l;
  }
  function v() {
    var y = Tr();
    if (A(y))
      return b(y);
    o = setTimeout(v, p(y));
  }
  function b(y) {
    return o = void 0, g && a ? h(y) : (a = r = void 0, s);
  }
  function C() {
    o !== void 0 && clearTimeout(o), u = 0, a = i = r = o = void 0;
  }
  function D() {
    return o === void 0 ? s : b(Tr());
  }
  function B() {
    var y = Tr(), x = A(y);
    if (a = arguments, r = this, i = y, x) {
      if (o === void 0)
        return f(i);
      if (d)
        return clearTimeout(o), o = setTimeout(v, t), h(i);
    }
    return o === void 0 && (o = setTimeout(v, t)), s;
  }
  return B.cancel = C, B.flush = D, B;
}
function Yo(e) {
  return yt(e) && vu(e);
}
var Ly = 200;
function Qy(e, t, n, a) {
  var r = -1, l = Wg, s = !0, o = e.length, i = [], u = t.length;
  if (!o)
    return i;
  t.length >= Ly && (l = zu, s = !1, t = new Un(t));
  e:
    for (; ++r < o; ) {
      var c = e[r], d = c;
      if (c = c !== 0 ? c : 0, s && d === d) {
        for (var g = u; g--; )
          if (t[g] === d)
            continue e;
        i.push(c);
      } else l(t, d, a) || i.push(c);
    }
  return i;
}
var Ky = Gg(function(e, t) {
  return Yo(e) ? Qy(e, Eu(t, 1, Yo, !0)) : [];
});
function Rt(e, t, n) {
  n = typeof n == "function" ? n : void 0;
  var a = n ? n(e, t) : void 0;
  return a === void 0 ? qu(e, t, void 0, n) : !!a;
}
function Gy(e, t, n, a) {
  if (!ot(e))
    return e;
  t = Xa(t, e);
  for (var r = -1, l = t.length, s = l - 1, o = e; o != null && ++r < l; ) {
    var i = es(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != s) {
      var c = o[i];
      u = void 0, u === void 0 && (u = ot(c) ? c : Ul(t[r + 1]) ? [] : {});
    }
    mu(o, i, u), o = o[i];
  }
  return e;
}
function jy(e, t, n) {
  for (var a = -1, r = t.length, l = {}; ++a < r; ) {
    var s = t[a], o = gp(e, s);
    n(o, s) && Gy(l, Xa(s, e), o);
  }
  return l;
}
function Uy(e, t) {
  return jy(e, t, function(n, a) {
    return Hy(e, a);
  });
}
var be = vp(function(e, t) {
  return e == null ? {} : Uy(e, t);
}), Zy = Ov(function(e, t, n) {
  return e + (n ? " " : "") + Gp(t);
}), Jy = "Expected a function";
function Dl(e, t, n) {
  var a = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Jy);
  return ot(n) && (a = "leading" in n ? !!n.leading : a, r = "trailing" in n ? !!n.trailing : r), yn(e, t, {
    leading: a,
    maxWait: t,
    trailing: r
  });
}
class de {
  el;
  static of(t) {
    return new de(t);
  }
  /**
   * Resize.of(el, fn);
   * @param el ~
   * @param fn ~
   * @returns off
   */
  static on(t, n) {
    return new de(t).on(n);
  }
  /**
   * 要实现Resize.off(el)，el必须侵入式修改挂上__rz__
   * @param el ~
   * @param fn ~
   * @returns ~
   */
  static off(t, n) {
    return new de(t).off(n);
  }
  listeners = [];
  ro = null;
  constructor(t) {
    this.el = t;
    let n = t.__rz__;
    n && n instanceof de && (this.listeners = n.listeners, this.ro = n.ro);
  }
  handleResize = (t) => {
    /* istanbul ignore else -- @preserve */
    t.some((n) => n.target === this.el) && this.listeners?.forEach((n) => n());
  };
  on(t) {
    return typeof ResizeObserver > "u" ? () => {
    } : (this.listeners.length || (this.ro = this.ro || new ResizeObserver(this.handleResize), this.ro.observe(this.el), this.el.__rz__ = this), this.listeners.push(t), () => this.off(t));
  }
  off(t) {
    t ? this.listeners.splice(this.listeners.indexOf(t), 1) : this.listeners = [], !this.listeners.length && this.ro && this.ro.disconnect();
  }
}
var kt = (e) => {
  const t = Fi(), { merge: n = !0, exclude: a = [] } = e || {};
  return _(() => {
    if (n && !a.length) return t;
    const r = Object.entries(t).reduce((l, [s, o]) => (a.includes(s) || (!n && /^on([A-Z])/.test(s) ? l.listeners[s] = o : !n && /(class|style)/.test(s) ? l[s] = o : l.attrs[s] = o), l), {
      style: void 0,
      class: void 0,
      attrs: {},
      listeners: {}
    });
    return n ? r.attrs : r;
  });
}, ns = (e) => {
  let t = "", n = !1;
  const a = (r) => {
    !n || t === "hidden" || (r ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow"));
  };
  $(() => e.value, (r) => {
    a(r);
  }, { immediate: !1 }), te(() => {
    n = !0, t = document.body.style.overflow, e.value && a(!0);
  }), _e(() => {
    a(!1);
  });
}, zy = (e, t) => {
  const n = z(), a = new RegExp(`${e}$`);
  let r = n.parent;
  /* istanbul ignore next -- @preserve */
  for (; r && !(r?.type?.name && a.test(r.type.name)) && (!r?.[t] || !r?.proxy?.[t]); ) r = r.parent || r?.type?.parent;
  return r;
}, Or, Ho;
function Xy() {
  if (Ho) return Or;
  Ho = 1;
  var e = !1, t, n, a, r, l, s, o, i, u, c, d, g, h, f, p;
  function A() {
    if (!e) {
      e = !0;
      var b = navigator.userAgent, C = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(b), D = /(Mac OS X)|(Windows)|(Linux)/.exec(b);
      if (g = /\b(iPhone|iP[ao]d)/.exec(b), h = /\b(iP[ao]d)/.exec(b), c = /Android/i.exec(b), f = /FBAN\/\w+;/i.exec(b), p = /Mobile/i.exec(b), d = !!/Win64/.exec(b), C) {
        t = C[1] ? parseFloat(C[1]) : C[5] ? parseFloat(C[5]) : NaN, t && document && document.documentMode && (t = document.documentMode);
        var B = /(?:Trident\/(\d+.\d+))/.exec(b);
        s = B ? parseFloat(B[1]) + 4 : t, n = C[2] ? parseFloat(C[2]) : NaN, a = C[3] ? parseFloat(C[3]) : NaN, r = C[4] ? parseFloat(C[4]) : NaN, r ? (C = /(?:Chrome\/(\d+\.\d+))/.exec(b), l = C && C[1] ? parseFloat(C[1]) : NaN) : l = NaN;
      } else
        t = n = a = l = r = NaN;
      if (D) {
        if (D[1]) {
          var y = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(b);
          o = y ? parseFloat(y[1].replace("_", ".")) : !0;
        } else
          o = !1;
        i = !!D[2], u = !!D[3];
      } else
        o = i = u = !1;
    }
  }
  var v = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return A() || t;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return A() || s > t;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return v.ie() && d;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return A() || n;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return A() || a;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return A() || r;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return v.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return A() || l;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return A() || i;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return A() || o;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return A() || u;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return A() || g;
    },
    mobile: function() {
      return A() || g || h || c || p;
    },
    nativeApp: function() {
      return A() || f;
    },
    android: function() {
      return A() || c;
    },
    ipad: function() {
      return A() || h;
    }
  };
  return Or = v, Or;
}
var Rr, Wo;
function qy() {
  if (Wo) return Rr;
  Wo = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), t = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return Rr = t, Rr;
}
var Pr, $o;
function eD() {
  if ($o) return Pr;
  $o = 1;
  var e = qy(), t;
  e.canUseDOM && (t = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature("", "") !== !0);
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @param {?boolean} capture Check if the capture phase is supported.
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function n(a, r) {
    if (!e.canUseDOM || r && !("addEventListener" in document))
      return !1;
    var l = "on" + a, s = l in document;
    if (!s) {
      var o = document.createElement("div");
      o.setAttribute(l, "return;"), s = typeof o[l] == "function";
    }
    return !s && t && a === "wheel" && (s = document.implementation.hasFeature("Events.wheel", "3.0")), s;
  }
  return Pr = n, Pr;
}
var Yr, Vo;
function tD() {
  if (Vo) return Yr;
  Vo = 1;
  var e = Xy(), t = eD(), n = 10, a = 40, r = 800;
  function l(s) {
    var o = 0, i = 0, u = 0, c = 0;
    return "detail" in s && (i = s.detail), "wheelDelta" in s && (i = -s.wheelDelta / 120), "wheelDeltaY" in s && (i = -s.wheelDeltaY / 120), "wheelDeltaX" in s && (o = -s.wheelDeltaX / 120), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (o = i, i = 0), u = o * n, c = i * n, "deltaY" in s && (c = s.deltaY), "deltaX" in s && (u = s.deltaX), (u || c) && s.deltaMode && (s.deltaMode == 1 ? (u *= a, c *= a) : (u *= r, c *= r)), u && !o && (o = u < 1 ? -1 : 1), c && !i && (i = c < 1 ? -1 : 1), {
      spinX: o,
      spinY: i,
      pixelX: u,
      pixelY: c
    };
  }
  return l.getEventType = function() {
    return e.firefox() ? "DOMMouseScroll" : t("wheel") ? "wheel" : "mousewheel";
  }, Yr = l, Yr;
}
var Hr, Lo;
function nD() {
  return Lo || (Lo = 1, Hr = tD()), Hr;
}
var aD = nD();
const Qo = /* @__PURE__ */ ki(aD), ec = 30, Cl = /* @__PURE__ */ new Set();
if (typeof document < "u") {
  const e = () => {
    Cl.forEach((n) => {
      n.timer && clearTimeout(n.timer), n.timer = setTimeout(() => {
        n.clear(), Cl.delete(n);
      }, ec);
    });
  }, t = () => {
    document.body.addEventListener("wheel", e, !0), document.body.addEventListener("mousedown", e, !0);
  };
  /* istanbul ignore else -- @preserve */
  document.body ? t() : window.addEventListener("DOMContentLoaded", t);
}
const pa = (e, t) => {
  const n = t[0] - e[0], a = t[1] - e[1];
  return Math.abs(360 * Math.atan(a / n) / (2 * Math.PI));
};
class Tn {
  static of(t, n) {
    return new Tn(t, n);
  }
  static shouldWheelX = (t, n) => t.offsetWidth === t.scrollWidth || (n = Math.round(n), n === 0) ? !1 : n < 0 && t.scrollLeft > 0 || n >= 0 && Math.ceil(t.scrollTop) < t.scrollWidth - t.offsetWidth;
  static shouldWheelY = (t, n) => t.offsetHeight === t.scrollHeight || (n = Math.round(n), n === 0) ? !1 : n < 0 && t.scrollTop > 0 || n >= 0 && Math.ceil(t.scrollTop) < t.scrollHeight - t.offsetHeight;
  el;
  needThresholdWait = !1;
  animationFrameID = null;
  deltaX = 0;
  deltaY = 0;
  isTouching = !1;
  startTime = 0;
  startX = 0;
  startY = 0;
  moveX = 0;
  moveY = 0;
  listeners = [];
  timer = null;
  options;
  defaultOnWheel = null;
  constructor(t, n) {
    this.el = t, this.options = {
      native: !0,
      freedom: !1,
      stopPropagation: () => !0,
      shouldWheelX: (a) => Tn.shouldWheelX(t, a),
      shouldWheelY: (a) => Tn.shouldWheelY(t, a),
      ...n
    };
  }
  handleTouchStart = (t) => {
    this.isTouching = !0;
    const n = t.touches[0].screenX, a = t.touches[0].screenY;
    this.startX = n, this.startY = a, this.moveX = n, this.moveY = a, this.startTime = Date.now();
  };
  handleTouchMove = (t) => {
    if (!this.isTouching) return;
    const n = t.touches[0].screenX, a = t.touches[0].screenY, r = this.moveX - n, l = this.moveY - a;
    this.moveX = n, this.moveY = a, this.emitScroll(t, {
      x: r,
      y: l,
      angle: pa([this.startX, this.startY], [this.moveX, this.moveY])
    });
  };
  handleTouchEnd = (t) => {
    this.isTouching = !1;
    const n = t.changedTouches[0].screenX, a = t.changedTouches[0].screenY, r = pa([this.startX, this.startY], [n, a]), l = Date.now() - this.startTime;
    if (l <= 500 && l > 50) {
      const s = this.startX - n, o = this.startY - a, i = s / l, u = o / l;
      for (let c = 0; c <= 300; c++)
        setTimeout(() => {
          this.emitScroll(t, {
            x: i,
            y: u,
            angle: r
          });
        }, c);
    }
  };
  // 鼠标滚轮按住滑动
  handleMouseMove = (t) => {
    t.which === 2 && this.emitScroll(t, {
      x: t.movementX,
      y: t.movementY,
      angle: pa([0, 0], [t.movementX, t.movementY])
    });
  };
  // 滚轮事件
  handleWheel = (t) => {
    const { pixelX: n, pixelY: a } = Qo(t);
    this.emitScroll(t, {
      x: n,
      y: a,
      angle: pa([this.deltaX, this.deltaY], [this.deltaX + n, this.deltaX + a])
    });
  };
  clear = () => {
    this.needThresholdWait = !1;
  };
  didWheel = () => {
    this.listeners?.forEach((t) => t(this.deltaX, this.deltaY)), this.animationFrameID = null, this.deltaX = 0, this.deltaY = 0;
  };
  /**
   * 阻止X，Y轴上的滚动时，父层滚动（mac下的父层滚动越界会带有回弹）
   * 以下两种情况需要阻止
   * 1. 容器内在滚动：shouldWheelX = true 或 shouldWheelY = true
   * 2. X和Y都都不能滚动：判断是否需要native行为
   * 	如果是则需要停顿，用户松开后再滑动父层才动
   * 	如果不是则不阻止父层滑动，直接滚动
   * @param e ~
   * @param shouldWheelX ~
   * @param shouldWheelY ~
   * @returns 是否可继续
   */
  preventParentScroll(t, n, a) {
    if (!n && !a)
      return this.options.native && this.needThresholdWait && (t.cancelable && t.preventDefault(), this.timer && clearTimeout(this.timer), this.timer = setTimeout(this.clear, ec), Cl.add(this)), !0;
    t.cancelable && t.preventDefault();
    /* istanbul ignore else -- @preserve */
    if (this.options.native) {
      /* istanbul ignore next -- @preserve */
      this.timer && clearTimeout(this.timer), this.needThresholdWait = !0;
    }
    return !1;
  }
  /**
   * 在emitScroll之前:
   * 滑动手势X轴偏移小于30度夹角，禁止移动Y轴 -> pixelY = 0
   * 滑动手势Y轴偏移小于30度夹角，禁止移动X轴 -> pixelX = 0
   * @param e ~
   * @param options ~
   */
  emitScroll(t, n) {
    const { x: a, y: r, angle: l } = n;
    let s = a, o = r;
    this.options.freedom || (l < 30 && (o = 0), l > 60 && (s = 0));
    const i = this.deltaX + s, u = this.deltaY + o, c = this.options.shouldWheelX(i, u), d = this.options.shouldWheelY(u, i);
    if (this.preventParentScroll(t, c, d)) return;
    this.deltaX += c ? s : 0, this.deltaY += d ? o : 0;
    /* istanbul ignore else -- @preserve */
    (this.deltaX !== 0 || this.deltaY !== 0) && (this.options.stopPropagation(this.deltaX, this.deltaY) && t.stopPropagation(), this.animationFrameID === null && (this.animationFrameID = window.requestAnimationFrame(this.didWheel)));
  }
  operateDOMEvents(t) {
    if (typeof window > "u") return;
    const n = (t === "add" ? this.el.addEventListener : this.el.removeEventListener).bind(this.el);
    n(Qo.getEventType(), this.handleWheel, !1), document.ontouchend || document.ontouchend === null ? (n("touchstart", this.handleTouchStart, !1), n("touchmove", this.handleTouchMove, { passive: !1 }), n("touchend", this.handleTouchEnd, !1)) : n("mousemove", this.handleMouseMove, !1);
  }
  on(t) {
    return this.listeners.length || this.operateDOMEvents("add"), this.listeners.push(t), () => this.off(t);
  }
  off(t) {
    t ? this.listeners.splice(this.listeners.indexOf(t), 1) : this.listeners = [], this.listeners.length || this.operateDOMEvents("remove");
  }
  enable() {
    return this.defaultOnWheel && this.off(this.defaultOnWheel), this.defaultOnWheel = /* istanbul ignore next -- @preserve */
    (t, n) => {
      n && this.el.scrollHeight > this.el.offsetHeight && (this.el.scrollTop = Math.min(
        Math.max(0, this.el.scrollTop + n),
        this.el.scrollHeight - this.el.offsetHeight
      )), t && this.el.scrollWidth > this.el.offsetWidth && (this.el.scrollLeft = Math.min(
        Math.max(0, this.el.scrollLeft + t),
        this.el.scrollWidth - this.el.offsetWidth
      ));
    }, this.on(this.defaultOnWheel);
  }
}
/*!
  * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
  * (c) 2024 Dmytro Semenov
  */
function _n(e, t, n) {
  const a = document.createElement(t);
  return e && (a.className = e), n && n.appendChild(a), a;
}
function rD(e, t, n) {
  let a = `translate3d(${e}px,0px,0)`;
  return n !== void 0 && (a += ` scale3d(${n},${n},1)`), a;
}
function bl(e, t, n) {
  e.style.width = typeof t == "number" ? `${t}px` : t, e.style.height = typeof n == "number" ? `${n}px` : n;
}
const Re = {
  IDLE: "idle",
  LOADING: "loading",
  LOADED: "loaded",
  ERROR: "error"
};
function lD(e) {
  return "button" in e && e.button === 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
}
function Sn(e, t, n = document) {
  let a = [];
  if (e instanceof Element)
    a = [e];
  else if (e instanceof NodeList || Array.isArray(e))
    a = Array.from(e);
  else {
    const r = typeof e == "string" ? e : t;
    r && (a = Array.from(n.querySelectorAll(r)));
  }
  return a;
}
function sD(e) {
  return typeof e == "function" && e.prototype && e.prototype.goTo;
}
function Ko() {
  return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}
class oD {
  /**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */
  constructor(t, n) {
    this.type = t, this.defaultPrevented = !1, n && Object.assign(this, n);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
}
class iD {
  constructor() {
    this._listeners = {}, this._filters = {}, this.pswp = void 0, this.options = void 0;
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */
  addFilter(t, n, a = 100) {
    var r, l, s;
    this._filters[t] || (this._filters[t] = []), (r = this._filters[t]) === null || r === void 0 || r.push({
      fn: n,
      priority: a
    }), (l = this._filters[t]) === null || l === void 0 || l.sort((o, i) => o.priority - i.priority), (s = this.pswp) === null || s === void 0 || s.addFilter(t, n, a);
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   */
  removeFilter(t, n) {
    this._filters[t] && (this._filters[t] = this._filters[t].filter((a) => a.fn !== n)), this.pswp && this.pswp.removeFilter(t, n);
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
   * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
   */
  applyFilters(t, ...n) {
    var a;
    return (a = this._filters[t]) === null || a === void 0 || a.forEach((r) => {
      n[0] = r.fn.apply(this, n);
    }), n[0];
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */
  on(t, n) {
    var a, r;
    this._listeners[t] || (this._listeners[t] = []), (a = this._listeners[t]) === null || a === void 0 || a.push(n), (r = this.pswp) === null || r === void 0 || r.on(t, n);
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */
  off(t, n) {
    var a;
    this._listeners[t] && (this._listeners[t] = this._listeners[t].filter((r) => n !== r)), (a = this.pswp) === null || a === void 0 || a.off(t, n);
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {PhotoSwipeEventsMap[T]} [details]
   * @returns {AugmentedEvent<T>}
   */
  dispatch(t, n) {
    var a;
    if (this.pswp)
      return this.pswp.dispatch(t, n);
    const r = (
      /** @type {AugmentedEvent<T>} */
      new oD(t, n)
    );
    return (a = this._listeners[t]) === null || a === void 0 || a.forEach((l) => {
      l.call(this, r);
    }), r;
  }
}
class uD {
  /**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */
  constructor(t, n) {
    if (this.element = _n("pswp__img pswp__img--placeholder", t ? "img" : "div", n), t) {
      const a = (
        /** @type {HTMLImageElement} */
        this.element
      );
      a.decoding = "async", a.alt = "", a.src = t, a.setAttribute("role", "presentation");
    }
    this.element.setAttribute("aria-hidden", "true");
  }
  /**
   * @param {number} width
   * @param {number} height
   */
  setDisplayedSize(t, n) {
    this.element && (this.element.tagName === "IMG" ? (bl(this.element, 250, "auto"), this.element.style.transformOrigin = "0 0", this.element.style.transform = rD(0, 0, t / 250)) : bl(this.element, t, n));
  }
  destroy() {
    var t;
    (t = this.element) !== null && t !== void 0 && t.parentNode && this.element.remove(), this.element = null;
  }
}
class cD {
  /**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */
  constructor(t, n, a) {
    this.instance = n, this.data = t, this.index = a, this.element = void 0, this.placeholder = void 0, this.slide = void 0, this.displayedImageWidth = 0, this.displayedImageHeight = 0, this.width = Number(this.data.w) || Number(this.data.width) || 0, this.height = Number(this.data.h) || Number(this.data.height) || 0, this.isAttached = !1, this.hasSlide = !1, this.isDecoding = !1, this.state = Re.IDLE, this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html", this.instance.dispatch("contentInit", {
      content: this
    });
  }
  removePlaceholder() {
    this.placeholder && !this.keepPlaceholder() && setTimeout(() => {
      this.placeholder && (this.placeholder.destroy(), this.placeholder = void 0);
    }, 1e3);
  }
  /**
   * Preload content
   *
   * @param {boolean} isLazy
   * @param {boolean} [reload]
   */
  load(t, n) {
    if (this.slide && this.usePlaceholder())
      if (this.placeholder) {
        const a = this.placeholder.element;
        a && !a.parentElement && this.slide.container.prepend(a);
      } else {
        const a = this.instance.applyFilters(
          "placeholderSrc",
          // use  image-based placeholder only for the first slide,
          // as rendering (even small stretched thumbnail) is an expensive operation
          this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : !1,
          this
        );
        this.placeholder = new uD(a, this.slide.container);
      }
    this.element && !n || this.instance.dispatch("contentLoad", {
      content: this,
      isLazy: t
    }).defaultPrevented || (this.isImageContent() ? (this.element = _n("pswp__img", "img"), this.displayedImageWidth && this.loadImage(t)) : (this.element = _n("pswp__content", "div"), this.element.innerHTML = this.data.html || ""), n && this.slide && this.slide.updateContentSize(!0));
  }
  /**
   * Preload image
   *
   * @param {boolean} isLazy
   */
  loadImage(t) {
    var n, a;
    if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
      content: this,
      isLazy: t
    }).defaultPrevented)
      return;
    const r = (
      /** @type HTMLImageElement */
      this.element
    );
    this.updateSrcsetSizes(), this.data.srcset && (r.srcset = this.data.srcset), r.src = (n = this.data.src) !== null && n !== void 0 ? n : "", r.alt = (a = this.data.alt) !== null && a !== void 0 ? a : "", this.state = Re.LOADING, r.complete ? this.onLoaded() : (r.onload = () => {
      this.onLoaded();
    }, r.onerror = () => {
      this.onError();
    });
  }
  /**
   * Assign slide to content
   *
   * @param {Slide} slide
   */
  setSlide(t) {
    this.slide = t, this.hasSlide = !0, this.instance = t.pswp;
  }
  /**
   * Content load success handler
   */
  onLoaded() {
    this.state = Re.LOADED, this.slide && this.element && (this.instance.dispatch("loadComplete", {
      slide: this.slide,
      content: this
    }), this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(), this.slide.updateContentSize(!0)), (this.state === Re.LOADED || this.state === Re.ERROR) && this.removePlaceholder());
  }
  /**
   * Content load error handler
   */
  onError() {
    this.state = Re.ERROR, this.slide && (this.displayError(), this.instance.dispatch("loadComplete", {
      slide: this.slide,
      isError: !0,
      content: this
    }), this.instance.dispatch("loadError", {
      slide: this.slide,
      content: this
    }));
  }
  /**
   * @returns {Boolean} If the content is currently loading
   */
  isLoading() {
    return this.instance.applyFilters("isContentLoading", this.state === Re.LOADING, this);
  }
  /**
   * @returns {Boolean} If the content is in error state
   */
  isError() {
    return this.state === Re.ERROR;
  }
  /**
   * @returns {boolean} If the content is image
   */
  isImageContent() {
    return this.type === "image";
  }
  /**
   * Update content size
   *
   * @param {Number} width
   * @param {Number} height
   */
  setDisplayedSize(t, n) {
    if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(t, n), !this.instance.dispatch("contentResize", {
      content: this,
      width: t,
      height: n
    }).defaultPrevented && (bl(this.element, t, n), this.isImageContent() && !this.isError()))) {
      const a = !this.displayedImageWidth && t;
      this.displayedImageWidth = t, this.displayedImageHeight = n, a ? this.loadImage(!1) : this.updateSrcsetSizes(), this.slide && this.instance.dispatch("imageSizeChange", {
        slide: this.slide,
        width: t,
        height: n,
        content: this
      });
    }
  }
  /**
   * @returns {boolean} If the content can be zoomed
   */
  isZoomable() {
    return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== Re.ERROR, this);
  }
  /**
   * Update image srcset sizes attribute based on width and height
   */
  updateSrcsetSizes() {
    if (!this.isImageContent() || !this.element || !this.data.srcset)
      return;
    const t = (
      /** @type HTMLImageElement */
      this.element
    ), n = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
    (!t.dataset.largestUsedSize || n > parseInt(t.dataset.largestUsedSize, 10)) && (t.sizes = n + "px", t.dataset.largestUsedSize = String(n));
  }
  /**
   * @returns {boolean} If content should use a placeholder (from msrc by default)
   */
  usePlaceholder() {
    return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
  }
  /**
   * Preload content with lazy-loading param
   */
  lazyLoad() {
    this.instance.dispatch("contentLazyLoad", {
      content: this
    }).defaultPrevented || this.load(!0);
  }
  /**
   * @returns {boolean} If placeholder should be kept after content is loaded
   */
  keepPlaceholder() {
    return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
  }
  /**
   * Destroy the content
   */
  destroy() {
    this.hasSlide = !1, this.slide = void 0, !this.instance.dispatch("contentDestroy", {
      content: this
    }).defaultPrevented && (this.remove(), this.placeholder && (this.placeholder.destroy(), this.placeholder = void 0), this.isImageContent() && this.element && (this.element.onload = null, this.element.onerror = null, this.element = void 0));
  }
  /**
   * Display error message
   */
  displayError() {
    if (this.slide) {
      var t, n;
      let a = _n("pswp__error-msg", "div");
      a.innerText = (t = (n = this.instance.options) === null || n === void 0 ? void 0 : n.errorMsg) !== null && t !== void 0 ? t : "", a = /** @type {HTMLDivElement} */
      this.instance.applyFilters("contentErrorElement", a, this), this.element = _n("pswp__content pswp__error-msg-container", "div"), this.element.appendChild(a), this.slide.container.innerText = "", this.slide.container.appendChild(this.element), this.slide.updateContentSize(!0), this.removePlaceholder();
    }
  }
  /**
   * Append the content
   */
  append() {
    if (this.isAttached || !this.element)
      return;
    if (this.isAttached = !0, this.state === Re.ERROR) {
      this.displayError();
      return;
    }
    if (this.instance.dispatch("contentAppend", {
      content: this
    }).defaultPrevented)
      return;
    const t = "decode" in this.element;
    this.isImageContent() ? t && this.slide && (!this.slide.isActive || Ko()) ? (this.isDecoding = !0, this.element.decode().catch(() => {
    }).finally(() => {
      this.isDecoding = !1, this.appendImage();
    })) : this.appendImage() : this.slide && !this.element.parentNode && this.slide.container.appendChild(this.element);
  }
  /**
   * Activate the slide,
   * active slide is generally the current one,
   * meaning the user can see it.
   */
  activate() {
    this.instance.dispatch("contentActivate", {
      content: this
    }).defaultPrevented || !this.slide || (this.isImageContent() && this.isDecoding && !Ko() ? this.appendImage() : this.isError() && this.load(!1, !0), this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "false"));
  }
  /**
   * Deactivate the content
   */
  deactivate() {
    this.instance.dispatch("contentDeactivate", {
      content: this
    }), this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "true");
  }
  /**
   * Remove the content from DOM
   */
  remove() {
    this.isAttached = !1, !this.instance.dispatch("contentRemove", {
      content: this
    }).defaultPrevented && (this.element && this.element.parentNode && this.element.remove(), this.placeholder && this.placeholder.element && this.placeholder.element.remove());
  }
  /**
   * Append the image content to slide container
   */
  appendImage() {
    this.isAttached && (this.instance.dispatch("contentAppendImage", {
      content: this
    }).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element), (this.state === Re.LOADED || this.state === Re.ERROR) && this.removePlaceholder()));
  }
}
function dD(e, t) {
  if (e.getViewportSizeFn) {
    const n = e.getViewportSizeFn(e, t);
    if (n)
      return n;
  }
  return {
    x: document.documentElement.clientWidth,
    // TODO: height on mobile is very incosistent due to toolbar
    // find a way to improve this
    //
    // document.documentElement.clientHeight - doesn't seem to work well
    y: window.innerHeight
  };
}
function va(e, t, n, a, r) {
  let l = 0;
  if (t.paddingFn)
    l = t.paddingFn(n, a, r)[e];
  else if (t.padding)
    l = t.padding[e];
  else {
    const s = "padding" + e[0].toUpperCase() + e.slice(1);
    t[s] && (l = t[s]);
  }
  return Number(l) || 0;
}
function hD(e, t, n, a) {
  return {
    x: t.x - va("left", e, t, n, a) - va("right", e, t, n, a),
    y: t.y - va("top", e, t, n, a) - va("bottom", e, t, n, a)
  };
}
const Go = 4e3;
class fD {
  /**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
   */
  constructor(t, n, a, r) {
    this.pswp = r, this.options = t, this.itemData = n, this.index = a, this.panAreaSize = null, this.elementSize = null, this.fit = 1, this.fill = 1, this.vFill = 1, this.initial = 1, this.secondary = 1, this.max = 1, this.min = 1;
  }
  /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {Point} panAreaSize
   */
  update(t, n, a) {
    const r = {
      x: t,
      y: n
    };
    this.elementSize = r, this.panAreaSize = a;
    const l = a.x / r.x, s = a.y / r.y;
    this.fit = Math.min(1, l < s ? l : s), this.fill = Math.min(1, l > s ? l : s), this.vFill = Math.min(1, s), this.initial = this._getInitial(), this.secondary = this._getSecondary(), this.max = Math.max(this.initial, this.secondary, this._getMax()), this.min = Math.min(this.fit, this.initial, this.secondary), this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
      zoomLevels: this,
      slideData: this.itemData
    });
  }
  /**
   * Parses user-defined zoom option.
   *
   * @private
   * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
   * @returns { number | undefined }
   */
  _parseZoomLevelOption(t) {
    const n = (
      /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
      t + "ZoomLevel"
    ), a = this.options[n];
    if (a)
      return typeof a == "function" ? a(this) : a === "fill" ? this.fill : a === "fit" ? this.fit : Number(a);
  }
  /**
   * Get zoom level to which image will be zoomed after double-tap gesture,
   * or when user clicks on zoom icon,
   * or mouse-click on image itself.
   * If you return 1 image will be zoomed to its original size.
   *
   * @private
   * @return {number}
   */
  _getSecondary() {
    let t = this._parseZoomLevelOption("secondary");
    return t || (t = Math.min(1, this.fit * 3), this.elementSize && t * this.elementSize.x > Go && (t = Go / this.elementSize.x), t);
  }
  /**
   * Get initial image zoom level.
   *
   * @private
   * @return {number}
   */
  _getInitial() {
    return this._parseZoomLevelOption("initial") || this.fit;
  }
  /**
   * Maximum zoom level when user zooms
   * via zoom/pinch gesture,
   * via cmd/ctrl-wheel or via trackpad.
   *
   * @private
   * @return {number}
   */
  _getMax() {
    return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
  }
}
function tc(e, t, n) {
  const a = t.createContentFromData(e, n);
  let r;
  const {
    options: l
  } = t;
  if (l) {
    r = new fD(l, e, -1);
    let s;
    t.pswp ? s = t.pswp.viewportSize : s = dD(l, t);
    const o = hD(l, s, e, n);
    r.update(a.width, a.height, o);
  }
  return a.lazyLoad(), r && a.setDisplayedSize(Math.ceil(a.width * r.initial), Math.ceil(a.height * r.initial)), a;
}
function AD(e, t) {
  const n = t.getItemData(e);
  if (!t.dispatch("lazyLoadSlide", {
    index: e,
    itemData: n
  }).defaultPrevented)
    return tc(n, t, e);
}
class gD extends iD {
  /**
   * Get total number of slides
   *
   * @returns {number}
   */
  getNumItems() {
    var t;
    let n = 0;
    const a = (t = this.options) === null || t === void 0 ? void 0 : t.dataSource;
    a && "length" in a ? n = a.length : a && "gallery" in a && (a.items || (a.items = this._getGalleryDOMElements(a.gallery)), a.items && (n = a.items.length));
    const r = this.dispatch("numItems", {
      dataSource: a,
      numItems: n
    });
    return this.applyFilters("numItems", r.numItems, a);
  }
  /**
   * @param {SlideData} slideData
   * @param {number} index
   * @returns {Content}
   */
  createContentFromData(t, n) {
    return new cD(t, this, n);
  }
  /**
   * Get item data by index.
   *
   * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
   * For example, it may contain properties like
   * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
   *
   * @param {number} index
   * @returns {SlideData}
   */
  getItemData(t) {
    var n;
    const a = (n = this.options) === null || n === void 0 ? void 0 : n.dataSource;
    let r = {};
    Array.isArray(a) ? r = a[t] : a && "gallery" in a && (a.items || (a.items = this._getGalleryDOMElements(a.gallery)), r = a.items[t]);
    let l = r;
    l instanceof Element && (l = this._domElementToItemData(l));
    const s = this.dispatch("itemData", {
      itemData: l || {},
      index: t
    });
    return this.applyFilters("itemData", s.itemData, t);
  }
  /**
   * Get array of gallery DOM elements,
   * based on childSelector and gallery element.
   *
   * @param {HTMLElement} galleryElement
   * @returns {HTMLElement[]}
   */
  _getGalleryDOMElements(t) {
    var n, a;
    return (n = this.options) !== null && n !== void 0 && n.children || (a = this.options) !== null && a !== void 0 && a.childSelector ? Sn(this.options.children, this.options.childSelector, t) || [] : [t];
  }
  /**
   * Converts DOM element to item data object.
   *
   * @param {HTMLElement} element DOM element
   * @returns {SlideData}
   */
  _domElementToItemData(t) {
    const n = {
      element: t
    }, a = (
      /** @type {HTMLAnchorElement} */
      t.tagName === "A" ? t : t.querySelector("a")
    );
    if (a) {
      n.src = a.dataset.pswpSrc || a.href, a.dataset.pswpSrcset && (n.srcset = a.dataset.pswpSrcset), n.width = a.dataset.pswpWidth ? parseInt(a.dataset.pswpWidth, 10) : 0, n.height = a.dataset.pswpHeight ? parseInt(a.dataset.pswpHeight, 10) : 0, n.w = n.width, n.h = n.height, a.dataset.pswpType && (n.type = a.dataset.pswpType);
      const l = t.querySelector("img");
      if (l) {
        var r;
        n.msrc = l.currentSrc || l.src, n.alt = (r = l.getAttribute("alt")) !== null && r !== void 0 ? r : "";
      }
      (a.dataset.pswpCropped || a.dataset.cropped) && (n.thumbCropped = !0);
    }
    return this.applyFilters("domItemData", n, t, a);
  }
  /**
   * Lazy-load by slide data
   *
   * @param {SlideData} itemData Data about the slide
   * @param {number} index
   * @returns {Content} Image that is being decoded or false.
   */
  lazyLoadData(t, n) {
    return tc(t, this, n);
  }
}
class mD extends gD {
  /**
   * @param {PhotoSwipeOptions} [options]
   */
  constructor(t) {
    super(), this.options = t || {}, this._uid = 0, this.shouldOpen = !1, this._preloadedContent = void 0, this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
  }
  /**
   * Initialize lightbox, should be called only once.
   * It's not included in the main constructor, so you may bind events before it.
   */
  init() {
    Sn(this.options.gallery, this.options.gallerySelector).forEach((t) => {
      t.addEventListener("click", this.onThumbnailsClick, !1);
    });
  }
  /**
   * @param {MouseEvent} e
   */
  onThumbnailsClick(t) {
    if (lD(t) || window.pswp)
      return;
    let n = {
      x: t.clientX,
      y: t.clientY
    };
    !n.x && !n.y && (n = null);
    let a = this.getClickedIndex(t);
    a = this.applyFilters("clickedIndex", a, t, this);
    const r = {
      gallery: (
        /** @type {HTMLElement} */
        t.currentTarget
      )
    };
    a >= 0 && (t.preventDefault(), this.loadAndOpen(a, r, n));
  }
  /**
   * Get index of gallery item that was clicked.
   *
   * @param {MouseEvent} e click event
   * @returns {number}
   */
  getClickedIndex(t) {
    if (this.options.getClickedIndexFn)
      return this.options.getClickedIndexFn.call(this, t);
    const n = (
      /** @type {HTMLElement} */
      t.target
    ), r = Sn(
      this.options.children,
      this.options.childSelector,
      /** @type {HTMLElement} */
      t.currentTarget
    ).findIndex((l) => l === n || l.contains(n));
    return r !== -1 ? r : this.options.children || this.options.childSelector ? -1 : 0;
  }
  /**
   * Load and open PhotoSwipe
   *
   * @param {number} index
   * @param {DataSource} [dataSource]
   * @param {Point | null} [initialPoint]
   * @returns {boolean}
   */
  loadAndOpen(t, n, a) {
    if (window.pswp || !this.options)
      return !1;
    if (!n && this.options.gallery && this.options.children) {
      const r = Sn(this.options.gallery);
      r[0] && (n = {
        gallery: r[0]
      });
    }
    return this.options.index = t, this.options.initialPointerPos = a, this.shouldOpen = !0, this.preload(t, n), !0;
  }
  /**
   * Load the main module and the slide content by index
   *
   * @param {number} index
   * @param {DataSource} [dataSource]
   */
  preload(t, n) {
    const {
      options: a
    } = this;
    n && (a.dataSource = n);
    const r = [], l = typeof a.pswpModule;
    if (sD(a.pswpModule))
      r.push(Promise.resolve(
        /** @type {Type<PhotoSwipe>} */
        a.pswpModule
      ));
    else {
      if (l === "string")
        throw new Error("pswpModule as string is no longer supported");
      if (l === "function")
        r.push(
          /** @type {() => Promise<Type<PhotoSwipe>>} */
          a.pswpModule()
        );
      else
        throw new Error("pswpModule is not valid");
    }
    typeof a.openPromise == "function" && r.push(a.openPromise()), a.preloadFirstSlide !== !1 && t >= 0 && (this._preloadedContent = AD(t, this));
    const s = ++this._uid;
    Promise.all(r).then((o) => {
      if (this.shouldOpen) {
        const i = o[0];
        this._openPhotoswipe(i, s);
      }
    });
  }
  /**
   * @private
   * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
   * @param {number} uid
   */
  _openPhotoswipe(t, n) {
    if (n !== this._uid && this.shouldOpen || (this.shouldOpen = !1, window.pswp))
      return;
    const a = typeof t == "object" ? new t.default(this.options) : new t(this.options);
    this.pswp = a, window.pswp = a, Object.keys(this._listeners).forEach((r) => {
      var l;
      (l = this._listeners[r]) === null || l === void 0 || l.forEach((s) => {
        a.on(
          r,
          /** @type {EventCallback<typeof name>} */
          s
        );
      });
    }), Object.keys(this._filters).forEach((r) => {
      var l;
      (l = this._filters[r]) === null || l === void 0 || l.forEach((s) => {
        a.addFilter(r, s.fn, s.priority);
      });
    }), this._preloadedContent && (a.contentLoader.addToCache(this._preloadedContent), this._preloadedContent = void 0), a.on("destroy", () => {
      this.pswp = void 0, delete window.pswp;
    }), a.init();
  }
  /**
   * Unbinds all events, closes PhotoSwipe if it's open.
   */
  destroy() {
    var t;
    (t = this.pswp) === null || t === void 0 || t.destroy(), this.shouldOpen = !1, this._listeners = {}, Sn(this.options.gallery, this.options.gallerySelector).forEach((n) => {
      n.removeEventListener("click", this.onThumbnailsClick, !1);
    });
  }
}
class On {
  static falsy = [void 0, null, ""];
  rules = {};
  paths;
  original;
  constructor(t, n, a) {
    this.updateRules(t), this.paths = n || [], this.original = a;
  }
  /**
   * 构建统一规则类型的Rule[], 也可供外部使用
   * @param rules ~
   */
  updateRules(t) {
    t && Object.keys(t).forEach((n) => {
      const a = t[n];
      this.rules[n] = (Array.isArray(a) ? a : [a]).map((r) => {
        if (typeof r == "function")
          return { validate: r };
        (typeof r == "string" || r instanceof RegExp) && (r = { pattern: r }), typeof r == "boolean" && (r = { required: r });
        const { validate: l, pattern: s, required: o, enum: i = [] } = r;
        if (l && r.fields && (r.fields = void 0), !l && s) {
          const u = typeof s == "string" ? new RegExp(s) : s;
          return {
            ...r,
            validate: (c) => u.test(c)
          };
        }
        return !l && o ? {
          ...r,
          validate: (u) => Array.isArray(u) ? !!u.length && u.every((c) => On.falsy.every((d) => c !== d)) : On.falsy.every((c) => u !== c)
        } : !l && i.length ? {
          ...r,
          validate: (u) => i.some((c) => u === c)
        } : r;
      });
    });
  }
  async validate(t, n) {
    if (n = n || {}, !Object.keys(this.rules).length)
      return;
    const a = n.fields || Object.keys(this.rules), r = [];
    for (let l = 0; l < a.length; l++) {
      const s = a[l], o = this.rules[s], i = t[s], u = this.original;
      for (let c = 0; c < o.length; c++) {
        const d = o[c], { validate: g = () => {
        }, transform: h = (C) => C, fields: f } = d, p = [...this.paths, s];
        typeof n._index < "u" && p.splice(p.length - 1, 0, n._index);
        const A = h(i, { field: s, source: t, paths: p, original: u });
        if (f) {
          const C = Array.isArray(A), D = C ? A : [A];
          if (D.every((B) => B && typeof B == "object")) {
            const B = new On(f, p);
            for (let y = 0; y < D.length; y++)
              try {
                await B.validate(D[y], { _index: C ? y : void 0, first: n.first, original: u });
              } catch (x) {
                if (r.push(...x), x.length && n.first)
                  break;
              }
            continue;
          }
        }
        let v = g(A, { field: s, source: t, paths: p, original: u }), b = "";
        if (v instanceof Promise)
          try {
            await v;
          } catch (C) {
            v = !1, b = C.message || C;
          }
        else typeof v == "string" && (b = v, v = !1);
        if (v === !1 && (r.push({
          paths: p,
          message: b || d.message || "",
          field: s,
          value: A
        }), n.first))
          break;
      }
      if (r.length && n.first)
        break;
    }
    if (r.length) {
      const l = r.map((s) => {
        const { message: o, ...i } = s;
        return s.message = typeof o == "function" ? o(i) : o, s;
      });
      return Promise.reject(l);
    }
  }
}
var nc = class {
  options;
  constructor() {
    this.options = {
      version: "",
      versions: [],
      get: (e) => KA(e),
      set: (e) => e
    };
  }
  configure(e) {
    typeof window > "u" || (this.options = {
      ...this.options,
      ...e
    });
  }
};
(() => {
  try {
    return document.cookie = "test", !0;
  } catch {
    return !1;
  }
})();
var jo = class {
  store = {};
  getItem(e) {
    return this.store[e] || null;
  }
  setItem(e, t) {
    this.store[e] = t;
  }
  removeItem(e) {
    delete this.store[e];
  }
}, wl = "@deot/helper/", Wr = (e, t) => {
  const n = t.filter((a) => typeof a < "u")[0];
  return `${n ? `${wl}${n}:` : ""}${e}`;
}, ya = (() => {
  const e = "test";
  try {
    return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
  } catch {
    return !1;
  }
})(), pD = class extends nc {
  sessionStorage = new jo();
  localStorage = new jo();
  getInvoke(e) {
    return e?.session ? "sessionStorage" : "localStorage";
  }
  configure(e) {
    if (super.configure(e), !ya) return;
    const { version: t, versions: n } = this.options, a = [t, ...n];
    Object.keys(window.localStorage).forEach((r) => {
      /* istanbul ignore else -- @preserve */
      r.includes(wl) && !a.some((l) => r.includes(`${wl}${l}`)) && window.localStorage.removeItem(r);
    });
  }
  /**
  * 设置缓存
  * @param key 保存的键值
  * @param value 保存的内容
  * @param options ~
  */
  set(e, t, n) {
    if (!ya) return;
    const a = this.getInvoke(n);
    e = Wr(e, [n?.version, this.options.version]), t = this.options.set(typeof t == "string" ? t : JSON.stringify(t));
    try {
      window[a].setItem(e, t);
    } catch {
      this[a].setItem(e, t);
    }
  }
  /**
  * 获取缓存
  * @param key 保存的键值
  * @param options ~
  * @returns ~
  */
  get(e, t) {
    if (!ya) return null;
    const n = this.getInvoke(t);
    e = Wr(e, [t?.version, this.options.version]);
    const a = this[n].getItem(e) || window[n].getItem(e);
    return this.options.get(a);
  }
  /**
  * 删除缓存
  * @param key 键值
  * @param options ~
  */
  remove(e, t) {
    if (!ya) return;
    const n = this.getInvoke(t);
    e = Wr(e, [t?.version, this.options.version]), this[n].removeItem(e), window[n].removeItem(e);
  }
}, Uo = new pD(), $r = (() => {
  try {
    return window.indexedDB.open, !0;
  } catch {
    return !1;
  }
})(), vD = class extends nc {
  timestramp = (/* @__PURE__ */ new Date()).getTime();
  count = 0;
  db = null;
  pending = [];
  constructor(e) {
    super(), this.options = {
      ...this.options,
      keyPath: "__id",
      name: "default-db",
      storeName: "default-store",
      version: 1
    }, e && this.configure(e);
  }
  getUid() {
    return `${this.timestramp}${this.count++}`;
  }
  configure(e) {
    super.configure(e), typeof this.options.version == "string" && (this.options.version = parseInt(this.options.version, 10));
  }
  /**
  * 每次操作完要关闭
  * 	1. 浏览器上不关闭的话，删库操作会卡一会
  * 	2. fake-indexeddb不关闭会卡死
  * @param fn ~
  * @returns ~
  */
  concurrent(e) {
    const t = new Promise((n, a) => {
      e().then(n).catch(a);
    });
    return this.pending.push(t), t.finally(() => this.close(t)), t;
  }
  /**
  * 统一处理
  * @param request ~
  * @returns ~
  */
  async task(e) {
    return new Promise((t, n) => {
      e.onsuccess = t, e.onerror = n;
    });
  }
  /**
  * @param target ~
  */
  async close(e) {
    if (e) this.pending = this.pending.filter((t) => t !== e);
    else {
      const t = async (n) => {
        n.length && (await Promise.allSettled(n), await t(this.pending));
      };
      await t(this.pending);
    }
    if (!this.pending.length && this.db) {
      const t = this.db;
      this.db = null, (await t).close();
    }
  }
  /**
  * 打开数据库。变更时候更新表
  * @returns ~
  */
  openDatabase() {
    return this.db = this.db || (async () => {
      const { name: e, version: t, keyPath: n, storeName: a } = this.options, r = () => new Promise((o, i) => {
        const u = window.indexedDB.open(e, t);
        u.onsuccess = () => {
          o(u.result);
        }, u.onerror = () => {
          i(/* @__PURE__ */ new Error("IndexedDB Open Failed. DeleteDatabase first!"));
        }, u.onupgradeneeded = () => {
          const c = u.result;
          c.objectStoreNames.contains(a) && c.deleteObjectStore(a), c.createObjectStore(a, { keyPath: n });
        };
      }), l = 3;
      let s;
      for (let o = 0; o < l; o++) {
        try {
          s = await r();
        } catch {
        }
        /* istanbul ignore next -- @preserve */
        if (s || o === l - 1) break;
      }
      /* istanbul ignore next -- @preserve */
      return s || (await this.deleteDatabase(), s = await r()), s;
    })(), this.db;
  }
  /**
  * 打开表
  * tip: db.close() 执行后
  * 	db打开后的表os对象仍可写入（浏览器支持，fake-indexeddb不支持）
  * 	不过正常理解也应该操作所有后再关闭，这里不修改`this.db -> this.os`的逻辑
  * @param mode ~
  * @returns ~
  */
  async openObjectStore(e) {
    const { storeName: t } = this.options;
    return (await this.openDatabase()).transaction([t], e || "readwrite").objectStore(t);
  }
  /**
  * 删库
  */
  async deleteDatabase() {
    const { name: e } = this.options, t = window.indexedDB.deleteDatabase(e);
    await new Promise((n, a) => {
      t.onsuccess = n, t.onerror = a;
    });
  }
  /**
  * 新增数据，通过事务完成。
  * @param data ~
  * @returns ~
  */
  write(e) {
    return this.concurrent(async () => {
      const { keyPath: t } = this.options, n = await this.openObjectStore(), a = {
        [t]: this.getUid(),
        ...e
      }, r = n.add(a);
      return await new Promise((l, s) => {
        r.onsuccess = l, r.onerror = s;
      }), a;
    });
  }
  /**
  * 读取数据，通过事务完成。
  * @param id ~
  * @returns ~
  */
  read(e) {
    return this.concurrent(async () => {
      const t = (await this.openObjectStore()).get(e);
      return await this.task(t), t.result;
    });
  }
  /**
  * 更新数据，通过事务完成。
  * @param id ~
  * @param data ~
  * @returns ~
  */
  update(e, t) {
    return this.concurrent(async () => {
      const { keyPath: n } = this.options, a = await this.openObjectStore(), r = {
        [n]: e,
        ...t
      }, l = a.put(r);
      return await this.task(l), r;
    });
  }
  /**
  * 删除数据也是通过事务完成。
  * @param id ~
  * @returns ~
  */
  async delete(e) {
    return this.concurrent(async () => {
      const t = (await this.openObjectStore()).delete(e);
      await this.task(t);
    });
  }
  /**
  * 搜索数据，通过事务完成。
  * @returns ~
  */
  search() {
    return this.concurrent(async () => {
      const e = (await this.openObjectStore()).openCursor(), t = [];
      return await new Promise((n, a) => {
        e.onsuccess = () => {
          const r = e.result;
          r ? (t.push(r.value), r.continue()) : n(t);
        }, e.onerror = a;
      }), t;
    });
  }
  async get(e) {
    if (!$r) return null;
    const t = await this.read(e);
    return this.options.get(t ? t.data : null);
  }
  async set(e, t) {
    $r && await this.update(e, { data: this.options.set(typeof t == "string" ? t : JSON.stringify(t)) });
  }
  async remove(e) {
    $r && await this.delete(e);
  }
};
new vD();
const ac = (e, t, n) => (e = e.map((a) => a === n && t.length ? t.shift() : a), e.concat(t)), Ya = (e) => function t(...n) {
  return n.length >= e.length && !n.includes(Ya) ? e.apply(this, n) : function(...a) {
    const r = ac(n, a, Ya);
    return t.apply(this, r);
  };
};
Ya.placeholder = Ya;
const Fl = (e, ...t) => function(...n) {
  return e.apply(this, ac(t, n, Fl));
};
Fl.placeholder = Fl;
var ye = class {
  message;
  constructor(e, t) {
    if (!t || !e) return;
    t = `[@deot/vc - ${e}]: ${t}`, this.message = t;
    /* istanbul ignore next -- @preserve */
    process.env.NODE_ENV === "development" && console.error(t);
  }
}, yD = {}, Ee = void 0, DD = {
  Editor: {
    options: Ee,
    enhancer: Ee
  },
  Portal: { install: Ee },
  RecycleList: {
    renderRefresh: Ee,
    renderPlaceholder: Ee,
    renderLoading: Ee,
    renderComplete: Ee,
    renderEmpty: Ee
  },
  Snapshot: {
    options: Ee,
    source: Ee,
    download: Ee
  },
  TableColumn: { line: Ee },
  Theme: { variables: yD },
  Upload: {
    onRequest: Ee,
    onResponse: Ee,
    onMessage: Ee
  },
  UploadPicker: { enhancer: Ee },
  Image: { formatter: Ee }
}, CD = class {
  /**
  * 组件的配置项
  */
  options = Ke(DD);
  /**
  * 处理全局捕获的事件, 用于计算位置
  */
  globalEvent = {};
  constructor() {
    typeof window < "u" && document.addEventListener("click", (e) => {
      this.globalEvent = e;
    }, !0);
  }
  configure(e) {
    return e && Object.keys(e).forEach((t) => {
      this.options[t] = e[t];
    }), this;
  }
}, tt = new CD(), bD = {
  tag: "div",
  el: "body",
  alive: !1,
  multiple: !1,
  aliveRegExp: { className: /(vc-portal-alive)/ },
  aliveVisibleKey: "isVisible",
  aliveUpdateKey: "update",
  leaveDelay: 300,
  autoDestroy: !0,
  components: {},
  uses: {},
  fragment: !1,
  insertion: "last"
}, wD = class {
  app;
  /**
  * 目标的实例，挂载到app上
  */
  wrapper;
  propsData;
  /**
  * 销毁的函数，挂载到app上，避免冲突
  */
  destroy;
  /**
  * 主动rejected，挂载到app上，避免冲突
  */
  reject;
  /**
  * 主动$fulfilled，挂载到app上，避免冲突
  */
  resolve;
  /**
  * 自动销毁的标记，挂载到app上，避免冲突
  */
  autoDestroy;
  target;
  constructor(e) {
    this.target = e, this.autoDestroy = !1, this.destroy = () => {
      throw new ye("portal", "未注册的destroy方法");
    }, this.reject = () => {
      throw new ye("portal", "未注册的reject方法");
    }, this.resolve = () => {
      throw new ye("portal", "未注册的resolve方法");
    };
  }
  then(e, t) {
    return this.target.then(e, t);
  }
  catch(e) {
    return this.target.catch(e);
  }
  finally(e) {
    return this.target.finally(e);
  }
}, Vr = "vc-portal", Oe = class Ye {
  /**
  * 清理Portals类型组件
  * @param name 清理的组件名, boolean表示全部leafs是否强制清理
  */
  static clear(t) {
    try {
      let n = !1, a = /* @__PURE__ */ new Map();
      if (t && typeof t != "boolean") {
        let r = [];
        typeof t == "string" ? r = [t] : t instanceof Array && t.length > 0 && (r = t), r.forEach((l) => a.set(l, "")), n = !0;
      } else
        n = !!t, a = Ye.leafs;
      for (const r of a.keys()) {
        const l = Ye.leafs.get(r);
        l && (n === !0 || l.autoDestroy === !0) && l.destroy();
      }
    } catch (n) {
      /* istanbul ignore next -- @preserve */
      throw new ye("instance", n);
    }
  }
  /**
  * 清理全部Portals
  */
  static clearAll() {
    try {
      Ye.leafs.forEach((t) => t.destroy());
    } catch (t) {
      /* istanbul ignore next -- @preserve */
      throw new ye("instance", t);
    }
  }
  static leafs = /* @__PURE__ */ new Map();
  wrapper;
  globalOptions;
  constructor(t, n) {
    this.wrapper = t, this.globalOptions = {
      ...n,
      name: n?.name || t.name || rt(Vr)
    };
  }
  popup(t, n) {
    n ? n.propsData = t : n = t || {};
    const { onFulfilled: a, onRejected: r, ...l } = {
      ...this.getDefaultOptions(),
      ...n
    };
    let s = () => {
    }, o = () => {
    };
    const i = new Promise((u, c) => {
      s = (d) => {
        a?.(d), u(d);
      }, o = (d) => {
        r?.(d), c(d);
      };
    });
    return this.render(l, i, s, o);
  }
  /**
  * 销毁当前Portal下的节点
  * @param target [description]
  */
  destroy = (t) => {
    const { multiple: n, name: a } = this.getDefaultOptions();
    t = t || a;
    const r = typeof t == "object" ? t : Ye.leafs.get(t);
    r ? r.destroy() : n && Ye.leafs.forEach((l, s) => {
      s.includes(a) && l.destroy();
    });
  };
  getDefaultOptions() {
    return {
      ...bD,
      ...tt.options.Portal,
      ...this.globalOptions
    };
  }
  createCallback(t, n, a) {
    return (...r) => {
      const l = () => {
        const s = t();
        /* istanbul ignore next -- @preserve */
        if (!s) throw new ye("portal", "实例不存在或已卸载");
        s.destroy();
      };
      n ? setTimeout(l, n) : l(), a?.(...r);
    };
  }
  render(t, n, a, r) {
    const { el: l, tag: s, alive: o, aliveRegExp: i, aliveVisibleKey: u, aliveUpdateKey: c, name: d, leaveDelay: g, autoDestroy: h, multiple: f, fragment: p, onDestroyed: A, onBeforeCreate: v, insertion: b, globalProperties: C, install: D, components: B, uses: y, slots: x, parent: S, propsData: I, ...P } = t;
    let W = p;
    const O = f ? `${d}__${rt(Vr)}` : d, k = document.createElement(s), w = typeof l == "object" ? l : document.querySelector(l || "body");
    !o && Ye.leafs.get(O)?.destroy();
    const M = I || P;
    let F = new wD(n);
    const N = () => {
      const re = Ye.leafs.get(O);
      return !re || re !== F;
    }, T = (...re) => {
      if (N()) return;
      A?.(...re), F.app?.unmount();
      /* istanbul ignore else -- @preserve */
      W ? w?.contains(k) && w.removeChild(k) : k && k._children && k._children.forEach((Y) => {
        w?.contains(Y) && w.removeChild(Y);
      }), Ye.leafs.delete(O);
    }, V = this.createCallback(() => F, g, r), G = this.createCallback(() => F, g, a);
    if (o && Ye.leafs.has(O)) {
      F = Ye.leafs.get(O), F.target = n, F.propsData.value = M;
      const re = F.wrapper?.[c];
      re && fe(() => re(t));
    } else {
      const re = this.wrapper, Y = rl({
        name: Vr,
        parent: S,
        setup() {
          if (o) {
            const ne = (Je) => {
              try {
                const rn = Je.path || Gl(Je);
                /* istanbul ignore else -- @preserve */
                if (k && Je.target && !k.contains(Je.target) && !rn?.some((ir) => na.eleInRegExp(ir, i))) {
                  /* istanbul ignore else -- @preserve */
                  F.wrapper && F.wrapper?.[u] && (typeof F.wrapper[u] == "function" ? F.wrapper[u](!1) : F.wrapper[u] = !1), g ? setTimeout(T, g) : T();
                }
              } catch (rn) {
                /* istanbul ignore next -- @preserve */
                throw new ye("portal", rn);
              }
            };
            te(() => {
              document.addEventListener("click", ne, !0);
            }), _e(() => {
              document.removeEventListener("click", ne, !0);
            });
          }
          const Z = E(M), ge = E();
          F.propsData = Z;
          const Be = E(typeof v != "function");
          if (!Be.value) {
            const ne = v(M);
            ne && ne.then ? ne.then((Je) => {
              N() || (Be.value = !0, ge.value = Je);
            }).catch((Je) => {
              T(Je);
            }) : (Be.value = !0, ge.value = ne);
          }
          return () => Be.value && ke(re, {
            ...Z.value,
            ...ge.value,
            ref: (ne) => F.wrapper = ne,
            onPortalFulfilled: (...ne) => G(...ne),
            onPortalRejected: (...ne) => V(...ne),
            onPortalDestroyed: (...ne) => T(...ne)
          }, x || void 0);
        }
      });
      F.app = Y, C && (Y.config.globalProperties = C);
      for (const Z in B) Y.component(Z, B[Z]);
      for (const Z in y) Y.use(y[Z]);
      D?.(Y), Y.mount(k);
    }
    F.destroy = T, F.reject = V, F.resolve = G, F.autoDestroy = !!h, Ye.leafs.set(O, F);
    const q = (re, Y) => {
      if (!(!re || !Y)) {
        if (b === "first") {
          const Z = re.firstElementChild;
          if (Z) {
            re.insertBefore(Y, Z);
            return;
          }
        }
        re.appendChild(Y);
      }
    };
    if (p || typeof k._children > "u" && !Array.from(k.children).length)
      W = !0, k.parentElement === null && q(w, k);
    else if (!k._children) {
      k._children = [];
      let re = Array.from(k.children);
      b === "first" && (re = re.reverse()), re.forEach((Y) => {
        q(w, Y), k._children?.push?.(Y);
      });
    }
    return F;
  }
}, xe = H({
  name: "vc-customer",
  props: { render: {
    type: Function,
    default: () => null
  } },
  setup(e, t) {
    return () => e.render(t.attrs, t);
  }
}), Ha = xe, aa = {
  /**
  * 进入/离开持续时间
  * {enter: 300, leave: 300}
  */
  duration: {
    type: [Number, Object],
    default: 300
  },
  /**
  * 进入/离开延迟时间
  */
  delay: {
    type: [Number, Object],
    default: 0
  },
  /**
  * `transition-group` component.
  */
  group: Boolean,
  /**
  * `transition-group` tag, v3版本默认值无
  */
  tag: {
    type: String,
    default: void 0
  },
  /**
  *  变换的初始位置, 可以用style代替, 更短~~
  */
  origin: {
    type: String,
    default: ""
  },
  /**
  * 在转换期间应用的元素样式。这些样式应用于@beforeEnter和@beforeLeave钩子
  * inheritAttrs必须是false
  */
  style: {
    type: Object,
    default: () => ({
      animationFillMode: "both",
      animationTimingFunction: "ease-out"
    })
  },
  prefix: {
    type: String,
    default: "vc-transition"
  },
  mode: {
    type: String,
    default: "none"
  }
}, Lr = (e) => e.trim().replace(/\s+/g, " "), ra = () => {
  const e = z(), t = e.attrs, n = e.props, a = _(() => n.group ? Bd : xd), r = _(() => {
    const A = n.mode !== "none" ? `is-${n.mode.replace(/-/g, " is-")}` : "";
    return {
      enterActiveClass: Lr(`${t.enterActiveClass || ""} ${n.prefix} ${A} is-in`),
      leaveActiveClass: Lr(`${t.leaveActiveClass || ""} ${n.prefix} ${A} is-out`),
      moveClass: n.group ? Lr(`${t.moveClass || ""} ${n.prefix} ${A} is-move`) : void 0
    };
  }), l = (A) => {
    Object.keys(n.style).forEach((v) => {
      n.style[v] && A.style.removeProperty(v.replace(/([A-Z])/g, "-$1").toLowerCase());
    }), A.style.removeProperty("animation-duration"), A.style.removeProperty("animation-delay");
  }, s = (A) => {
    n.group && (A.style.position = "absolute");
  }, o = (A) => {
    n.origin && (A.style.transformOrigin = n.origin);
  }, i = (A) => {
    o(A), Object.keys(n.style).forEach((v) => {
      const b = n.style[v];
      b && (A.style[v] = b);
    });
  }, u = (A) => {
    const v = n.duration.enter || n.duration;
    A.style.animationDuration = `${v}ms`;
    const b = n.delay.enter || n.delay;
    A.style.animationDelay = `${b}ms`, i(A), t.onBeforeEnter?.(A);
  }, c = (A, v) => {
    let b = !1;
    return (C = !0) => {
      if (b) return;
      b = !0;
      const D = () => A?.();
      C ? D() : setTimeout(D, v);
    };
  };
  return {
    Wrapper: a,
    resetStyles: i,
    resetAbsolute: s,
    classes: r,
    createNext: c,
    listeners: {
      onBeforeEnter: u,
      onEnter: async (A, v) => {
        const b = n.duration.enter || n.duration, C = c(v, b);
        try {
          await t.onEnter?.(A, C);
        } finally {
          C(!1);
        }
      },
      onAfterEnter: (A) => {
        l(A), t.onAfterEnter?.(A);
      },
      onBeforeLeave: (A) => {
        const v = n.duration.leave || n.duration;
        A.style.animationDuration = `${v}ms`;
        const b = n.delay.leave || n.delay;
        A.style.animationDelay = `${b}ms`, i(A), t.onBeforeLeave?.(A);
      },
      onLeave: async (A, v) => {
        const b = n.duration.leave || n.duration, C = c(v, b);
        try {
          s(A), await t.onLeave?.(A, C);
        } finally {
          C(!!n.group);
        }
      },
      onAfterLeave: (A) => {
        l(A), t.onAfterLeave?.(A);
      }
    }
  };
}, FD = H({
  name: "vc-transition-collapse",
  props: aa,
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: n }) {
    const a = n, { Wrapper: r, resetStyles: l, resetAbsolute: s, createNext: o } = ra(), i = (A) => `
				${A}ms height ease-in-out, 
				${A}ms padding-top ease-in-out, 
				${A}ms padding-bottom ease-in-out
			`, p = {
      onBeforeEnter: (A) => {
        const v = e.duration.enter || e.duration;
        A.style.transition = i(v);
        /* istanbul ignore next -- @preserve */
        A.dataset || (A.dataset = {}), A.dataset.oldPaddingTop = A.style.paddingTop, A.dataset.oldPaddingBottom = A.style.paddingBottom, A.style.height = "0px", A.style.paddingTop = "0px", A.style.paddingBottom = "0px", l(A), a.onBeforeEnter?.(A);
      },
      onEnter: async (A, v) => {
        const b = e.duration.enter || e.duration, C = o(v, b);
        try {
          A.dataset.oldOverflow = A.style.overflow;
          /* istanbul ignore next -- @preserve */
          A.scrollHeight !== 0 ? (A.style.height = A.scrollHeight + "px", A.style.paddingTop = A.dataset.oldPaddingTop + "px", A.style.paddingBottom = A.dataset.oldPaddingBottom + "px") : (A.style.height = "", A.style.paddingTop = A.dataset.oldPaddingTop + "px", A.style.paddingBottom = A.dataset.oldPaddingBottom + "px"), A.style.overflow = "hidden", a.onEnter?.(A);
        } finally {
          C(!1);
        }
      },
      onAfterEnter: (A) => {
        A.style.transition = "", A.style.height = "", A.style.overflow = A.dataset.oldOverflow || "", a.onAfterEnter?.(A);
      },
      onBeforeLeave: (A) => {
        /* istanbul ignore next -- @preserve */
        A.dataset || (A.dataset = {}), A.dataset.oldPaddingTop = A.style.paddingTop, A.dataset.oldPaddingBottom = A.style.paddingBottom, A.dataset.oldOverflow = A.style.overflow, A.style.height = A.scrollHeight + "px", A.style.overflow = "hidden", l(A), a.onBeforeLeave?.(A);
      },
      onLeave: (A, v) => {
        const b = e.duration.leave || e.duration, C = o(v, b);
        try {
          const D = e.duration.leave || e.duration;
          /* istanbul ignore next -- @preserve */
          A.scrollHeight !== 0 && (A.style.transition = i(D), A.style.height = "0px", A.style.paddingTop = "0px", A.style.paddingBottom = "0px"), s(A), a.onLeave?.(A);
        } finally {
          C(!!e.group);
        }
      },
      onAfterLeave: (A) => {
        A.style.transition = "", A.style.height = "", A.style.overflow = A.dataset.oldOverflow || "", A.style.paddingTop = A.dataset.oldPaddingTop || "", A.style.paddingBottom = A.dataset.oldPaddingBottom || "", a.onAfterLeave?.(A);
      }
    };
    return () => ke(r.value, {
      ...a,
      ...p,
      tag: e.tag,
      moveClass: e.group ? `${a.moveClass || ""} vc-transition-collapse is-move` : void 0
    }, t);
  }
}), la = H({
  name: "vc-transition-fade",
  props: {
    ...aa,
    style: {
      type: Object,
      default: () => ({
        animationFillMode: "both",
        animationTimingFunction: void 0
      })
    },
    prefix: {
      type: String,
      default: "vc-transition-fade"
    }
  },
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: n }) {
    const { Wrapper: a, listeners: r, classes: l } = ra();
    return () => ke(a.value, {
      ...n,
      ...r,
      ...l.value,
      tag: e.tag
    }, t);
  }
}), rc = H({
  name: "vc-transition-scale",
  props: {
    ...aa,
    mode: {
      type: String,
      default: "both",
      validator: (e) => /(part|both|y|x|none)/.test(e)
    },
    style: {
      type: Object,
      default: () => ({
        animationFillMode: "both",
        animationTimingFunction: void 0
      })
    },
    prefix: {
      type: String,
      default: "vc-transition-scale"
    }
  },
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: n }) {
    const { Wrapper: a, listeners: r, classes: l } = ra();
    return () => ke(a.value, {
      ...n,
      ...r,
      ...l.value,
      tag: e.tag
    }, t);
  }
}), er = H({
  name: "vc-transition-slide",
  props: {
    ...aa,
    mode: {
      type: String,
      default: "left",
      validator: (e) => /^(left|right|top|bottom|none)(|-part)$/.test(e)
    },
    style: {
      type: Object,
      default: () => ({
        animationFillMode: "both",
        animationTimingFunction: void 0
      })
    },
    prefix: {
      type: String,
      default: "vc-transition-slide"
    }
  },
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: n }) {
    const { Wrapper: a, listeners: r, classes: l } = ra();
    return () => ke(a.value, {
      ...n,
      ...r,
      ...l.value,
      tag: e.tag
    }, t);
  }
}), kD = H({
  name: "vc-transition-zoom",
  props: {
    ...aa,
    mode: {
      type: String,
      default: "x",
      validator: (e) => /^(x|y|center|none)$/.test(e)
    },
    style: {
      type: Object,
      default: () => ({
        animationFillMode: "both",
        animationTimingFunction: void 0
      })
    },
    prefix: {
      type: String,
      default: "vc-transition-zoom"
    }
  },
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: n }) {
    const { Wrapper: a, listeners: r, classes: l } = ra();
    return () => ke(a.value, {
      ...n,
      ...r,
      ...l.value,
      tag: e.tag
    }, t);
  }
}), Zn = la, ED = er, BD = kD, lc = /* @__PURE__ */ H({
  name: "vc-popup",
  props: {
    fixed: {
      type: Boolean,
      default: !0
    },
    modelValue: {
      type: Boolean,
      default: !1
    },
    mask: {
      type: Boolean,
      default: !0
    },
    maskClosable: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      default: "bottom",
      validator: (e) => /(bottom|top|left|right|center)/.test(e)
    },
    theme: {
      type: String,
      default: "light",
      validator: (e) => /(light|dark|none)/.test(e)
    },
    wrapperClass: [
      Object,
      Array,
      String
    ],
    wrapperStyle: [
      Object,
      Array,
      String
    ],
    scrollRegExp: {
      type: Object,
      default: () => ({ className: /(vcm?-popup-scrollable)/ })
    }
  },
  emits: [
    "update:modelValue",
    "close",
    "portal-fulfilled",
    "visible-change"
  ],
  setup(e, { emit: t, slots: n, expose: a }) {
    const r = z(), l = E(!1), s = _(() => ({
      [`is-${e.placement}`]: !0,
      [`is-${e.theme}`]: !0
    })), o = e.placement === "center" ? Zn : ED;
    $(() => e.modelValue, (p) => {
      l.value = p;
    }, { immediate: !0 });
    const i = (p = !0) => {
      p && (l.value = !1);
    }, u = () => {
      !r.isUnmounted && (t("close"), t("portal-fulfilled"), t("update:modelValue", !1), t("visible-change", !1));
    };
    let c, d;
    const g = (p) => {
      l.value && (c = p.touches[0].pageY);
    }, h = (p) => {
      if (!l.value) return;
      if (!(p.path || Gl(p) || []).some((D) => na.eleInRegExp(D, e.scrollRegExp) ? (d = D, !0) : !1)) {
        p.preventDefault();
        return;
      }
      const A = p.touches[0].pageY, v = d.scrollTop, b = d.clientHeight, C = d.scrollHeight;
      (v === 0 && A > c || v + b === C && A < c) && p.preventDefault();
    }, f = (p) => {
      const A = (p === "add" ? document.addEventListener : document.removeEventListener).bind(document);
      A("touchstart", g), A("touchmove", h, { passive: !1 });
    };
    return te(() => f("add")), _e(() => f("remove")), a({
      isActive: l,
      toggle(p) {
        p = typeof p == "boolean" ? p : !l.value, l.value = p;
      }
    }), () => m("div", { class: [s.value, "vcm-popup"] }, [m(Zn, null, { default: () => [ce(m("div", {
      class: "vcm-popup__mask",
      onClick: () => i(e.maskClosable),
      onTouchmovePrevent: () => {
      }
    }, null), [[he, e.mask && l.value]])] }), m(o, {
      mode: e.placement,
      onAfterLeave: u
    }, { default: () => [ce(m("div", {
      style: [{ position: e.fixed ? "fixed" : "absolute" }, e.wrapperStyle],
      class: [e.wrapperClass, "vcm-popup__wrapper"]
    }, [n?.default?.()]), [[he, l.value]])] })]);
  }
}), Dn = /* @__PURE__ */ H({
  name: "vc-spin",
  props: {
    size: {
      type: Number,
      default: 28
    },
    foreground: {
      type: String,
      default: "#ccc"
    },
    background: {
      type: String,
      default: "var(--vc-color-primary)"
    },
    /**
    * 待开发
    */
    fixed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { slots: t }) {
    return () => m("div", { class: "vc-spin" }, [m("span", { style: { fontSize: `${e.size}px` } }, [t?.loading?.() || m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      viewBox: "0 0 32 32",
      width: "100%",
      height: "100%"
    }, [m("path", {
      stroke: e.foreground,
      d: "M 16 2 A 14 14 0 1 0 30 15",
      fill: "none",
      "stroke-width": "2",
      "stroke-linecap": "round"
    }, null), m("path", {
      stroke: e.background,
      d: "M 16 2 A 14 14 0 0 1 30 15",
      fill: "none",
      "stroke-width": "2",
      "stroke-linecap": "round"
    }, null)])]), t?.default?.()]);
  }
}), sc = Dn, xD = {
  mask: {
    type: Boolean,
    default: !0
  },
  maskClosable: {
    type: Boolean,
    default: !0
  },
  wrapperClass: [
    Object,
    Array,
    String
  ],
  wrapperStyle: [
    Object,
    Array,
    String
  ],
  scrollRegExp: {
    type: Object,
    default: () => ({ className: /(vcm?-popup-scrollable|vcm-action-sheet__actions)/ })
  },
  title: {
    type: [String, Function],
    default: ""
  },
  data: {
    type: Array,
    default: () => []
  },
  cancelText: {
    type: String,
    default: ""
  }
}, Zo = "vcm-action-sheet", Qr = (e, t, n = !1) => typeof e == "string" ? m("div", {
  class: t,
  innerHTML: e
}, null) : typeof e == "function" ? m(Ha, {
  render: e,
  class: t,
  loading: n
}, null) : null, oc = /* @__PURE__ */ H({
  name: Zo,
  props: xD,
  emits: ["portal-fulfilled"],
  setup(e, { emit: t }) {
    const n = E(!1), a = E(-1), r = E();
    te(() => {
      n.value = !0;
    });
    const l = (u) => {
      r.value = u, a.value = -1, n.value = !1;
    }, s = () => {
      t("portal-fulfilled", r.value);
    }, o = () => {
      a.value === -1 && l();
    }, i = async (u, c) => {
      if (!(u.disabled || a.value !== -1))
        try {
          if (!u.onClick) {
            l(u);
            return;
          }
          const d = u.onClick(u);
          d && typeof d.then == "function" && (a.value = c);
          const g = await d;
          if (!n.value) return;
          g !== !1 ? l(u) : a.value = -1;
        } catch {
          if (!n.value) return;
          a.value = -1;
        }
    };
    return () => m("div", { class: Zo }, [m(lc, {
      modelValue: n.value,
      mask: e.mask,
      maskClosable: e.maskClosable && a.value === -1,
      placement: "bottom",
      theme: "none",
      wrapperClass: [e.wrapperClass, "vcm-action-sheet__wrapper"],
      wrapperStyle: e.wrapperStyle,
      scrollRegExp: e.scrollRegExp,
      "onUpdate:modelValue": (u) => n.value = u,
      onPortalFulfilled: s
    }, { default: () => [m("div", { class: "vcm-action-sheet__container" }, [m("div", { class: "vcm-action-sheet__group" }, [e.title && Qr(e.title, "vcm-action-sheet__title"), m("div", { class: "vcm-action-sheet__actions vcm-popup-scrollable" }, [e.data.map((u, c) => {
      const d = a.value === c;
      return m("div", {
        key: c,
        style: u.style,
        class: [
          u.class,
          {
            "is-disabled": u.disabled,
            "is-loading": d
          },
          "vcm-action-sheet__item"
        ],
        onClick: pe(() => i(u, c), ["stop"])
      }, [m(vt, null, [m("div", { class: "vcm-action-sheet__item-wrapper" }, [Qr(u.content, "vcm-action-sheet__content", d), d && m(sc, {
        size: 16,
        class: "vcm-action-sheet__loading"
      }, null)]), u.subContent && Qr(u.subContent, "vcm-action-sheet__sub-content", d)])]);
    })])]), e.cancelText && m(vt, null, [m("div", { class: "vcm-action-sheet__gap" }, null), m("div", {
      class: "vcm-action-sheet__cancel",
      onClick: pe(o, ["stop"])
    }, [e.cancelText])])])] })]);
  }
}), ic = new Oe(oc, {
  leaveDelay: 0,
  multiple: !0
}), uc = (e = {}) => {
  const { onClose: t, ...n } = e;
  return ic.popup({
    ...n,
    onFulfilled: t,
    onClose: null
  });
}, _D = uc, SD = () => ic.destroy();
Object.assign(oc, {
  open: _D,
  popup: uc,
  destroy: SD
});
var Da, ID = () => {
  if (Da !== void 0) return Da;
  const e = document.createElement("div");
  e.className = "vc-scrollbar__wrap", e.style.visibility = "hidden", e.style.width = "100px", e.style.position = "absolute", e.style.top = "-9999px", document.body.appendChild(e);
  const t = e.offsetWidth;
  e.style.overflow = "scroll";
  const n = document.createElement("div");
  n.style.width = "100%", e.appendChild(n);
  const a = n.offsetWidth;
  return e.parentNode?.removeChild?.(e), Da = t - a, Da;
}, MD = /vc-scroller-wheel/, Jo = (e) => uu(e, { className: MD }), ND = {
  type: String,
  inherit: {
    type: Boolean,
    default: !1
  }
}, TD = /.*<svg>(.*)<\/svg>.*/g, OD = /.*id="icon-([^"]+).*viewBox="([^"]+)(.*)/g, RD = /<symbol.*?<\/symbol>/gi, PD = /<path.*?<\/path>/gi, YD = /.*d="([^"]+).*/g, zo = /.*fill="([^"]+).*/g, HD = "//at.alicdn.com/t/font_1119857_u0f4525o6sd.js", Kr = "@deot/vc-icon:", Xo = process.env.NODE_ENV === "development", qo = typeof document > "u", WD = class {
  icons = {};
  events = {};
  sourceStatus = {};
  basicStatus;
  constructor() {
    setTimeout(() => {
      this.basicStatus = this.load(HD);
    }, 0);
  }
  load(e) {
    return this.sourceStatus[e] = this.sourceStatus[e] || new Promise((t, n) => {
      (async () => {
        try {
          if (qo || !/.js$/.test(e)) return n(new ye("icon", "invaild url"));
          const a = `${Kr}${e}`, r = window.localStorage.getItem(a);
          let l = JSON.parse(r || '""');
          /* istanbul ignore next -- @preserve */
          if (!l) {
            const s = await new Promise((o) => {
              const i = new XMLHttpRequest();
              i.onreadystatechange = () => {
                i.readyState === 4 && i.status >= 200 && i.status <= 400 && o(i.responseText || i.response);
              }, i.open("GET", `${window.location.protocol.replace(/[^:]+/, "https")}${e}`), i.send();
            });
            l = await this.parser(s, e);
            try {
              window.localStorage.setItem(a, JSON.stringify(l));
            } catch {
              setTimeout(() => {
                this.clearResource(), window.localStorage.setItem(a, JSON.stringify(l));
              }, 3e3);
            }
          }
          this.icons = {
            ...this.icons,
            ...l
          }, Object.keys(this.events).forEach((s) => {
            const o = this.events[s];
            this.icons[s] && o && (o.forEach((i) => i()), delete this.events[s]);
          }), t();
        } catch (a) {
          /* istanbul ignore next -- @preserve */
          n(new ye("icon", a));
        }
      })();
    }), this.sourceStatus[e];
  }
  parser(e, t) {
    return new Promise((n, a) => {
      const r = {};
      setTimeout(() => {
        try {
          /* istanbul ignore next -- @preserve */
          Xo && console.time(t), e.replace(TD, "$1")?.match(RD)?.forEach((l) => l.replace(OD, (s, ...o) => {
            const [i, u, c] = o;
            return r[`${i}`] = {
              viewBox: u,
              path: c?.match(PD)?.map((d) => ({
                d: d.replace(YD, "$1"),
                fill: zo.test(c) ? d.replace(zo, "$1") : ""
              }))
            }, "";
          }));
          /* istanbul ignore next -- @preserve */
          Xo && console.timeEnd(t), n(r);
        } catch (l) {
          /* istanbul ignore next -- @preserve */
          a(new ye("icon", l));
        }
      }, 0);
    });
  }
  on(e, t) {
    /* istanbul ignore next -- @preserve */
    if (typeof e != "string" || typeof t != "function") return this;
    if (this.events[e] = this.events[e] || [], this.events[e].length >= 100) {
      delete this.events[e];
      /* istanbul ignore else -- @preserve */
      if (!qo) throw new ye("icon", `${e} nonexistent`);
    }
    return this.events[e].push(t), this;
  }
  off(e, t) {
    /* istanbul ignore next -- @preserve */
    return typeof e != "string" || typeof t != "function" ? this : (this.events[e] = this.events[e]?.filter((n) => n != t), this);
  }
  /* istanbul ignore next -- @preserve */
  clearResource() {
    const e = Object.keys(this.sourceStatus);
    Object.keys(window.localStorage).forEach((t) => {
      if (t.includes(Kr)) {
        const n = t.split(Kr).pop();
        n && !e.includes(n) && window.localStorage.removeItem(t);
      }
    });
  }
}, Fn = new WD(), ee = /* @__PURE__ */ H({
  name: "vc-icon",
  props: ND,
  setup(e) {
    const t = E("0 0 1024 1024"), n = E([]), a = () => {
      /* istanbul ignore next -- @preserve */
      e.type && (t.value = Fn.icons[e.type].viewBox, n.value = Fn.icons[e.type].path);
    };
    return $(() => e.type, (r, l) => {
      r && (Fn.icons[r] ? a() : (l && Fn.off(l, a), r && Fn.on(r, a)));
    }, { immediate: !0 }), () => m("i", { class: "vc-icon" }, [m("svg", {
      viewBox: t.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [n.value.map((r, l) => m("path", {
      key: l,
      d: r.d,
      fill: e.inherit && r.fill
    }, null))])]);
  }
}), $D = H({
  name: "vc-debounce",
  props: {
    wait: {
      type: Number,
      default: 250
    },
    tag: {
      type: [String, Object],
      default: "div"
    },
    include: {
      type: RegExp,
      default: () => /^on([A-Z])/
    },
    exclude: RegExp
  },
  /**
  * 不声明emits使得事件被透传放入attrs中, 这样可以让所有的事件透传
  * 如事件onClick
  * 当inheritAttrs为true时：因为emits为声明onClick会覆盖到`props.tag`上，使得我们重写的onClick无效
  * 当inheritAttrs为false时: 透传的onClick不会被重载，这样我们就可以重写onClick
  */
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: n }) {
    const a = E({});
    return $([
      () => e.wait,
      () => e.exclude,
      () => e.include
    ], () => {
      const { wait: r, exclude: l, include: s } = e, o = Object.entries(n).reduce((i, [u, c]) => {
        /* istanbul ignore else -- @preserve */
        return (!l || !l.test(u)) && (!s || s.test(u)) && typeof c == "function" && (i[u] = yn(c, r, {
          leading: !0,
          trailing: !1
        })), i;
      }, {});
      Object.keys(a.value).length !== Object.keys(o).length && (a.value = o);
    }, { immediate: !0 }), () => ke(e.tag, {
      ...n,
      ...a.value
    }, t.default?.());
  }
}), je = /* @__PURE__ */ H({
  name: "vc-button",
  emits: ["click"],
  props: {
    tag: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "medium"
    },
    wait: {
      type: Number,
      default: 250
    },
    icon: String,
    disabled: Boolean,
    circle: Boolean,
    round: Boolean,
    long: Boolean,
    solid: Boolean,
    dashed: Boolean,
    htmlType: {
      type: String,
      default: "button"
    }
  },
  setup(e, { slots: t }) {
    const n = z(), a = E(!1), r = E(!1), l = Ae("vc-button-group", {
      size: "medium",
      vertical: !1,
      circle: !1
    }), s = _(() => ({
      "is-circle": e.circle || l.circle,
      "is-alone": !t?.default,
      "is-round": e.round,
      "is-long": e.long,
      "is-disabled": e.disabled,
      "is-solid": e.solid,
      "is-dashed": e.dashed,
      "is-hover": a.value,
      [`is-${e.size}`]: !0,
      [`is-${e.type}`]: !0
    })), o = (...i) => {
      const u = n.vnode.props?.onClick?.(...i);
      u && u.then && (r.value = !0, u.finally(() => {
        r.value = !1;
      }));
    };
    return () => m($D, {
      tag: e.tag,
      class: {
        "vc-button": !0,
        ...s.value
      },
      wait: e.wait,
      disabled: e.disabled,
      type: e.htmlType,
      onClick: o,
      onMouseenter: () => a.value = !0,
      onMouseleave: () => a.value = !1
    }, { default: () => [
      e.icon && m(ee, { type: e.icon }, null),
      t.icon && t?.icon?.({ hover: a.value }),
      r.value && m(Dn, {
        size: 12,
        foreground: e.type === "default" ? "#ccc" : "#fff",
        class: "vc-button__loading"
      }, null),
      t?.default && m("span", null, [t?.default?.()])
    ] });
  }
}), VD = 5, LD = () => {
  let e = !1;
  const t = {
    capture: !0,
    once: !0
  }, n = (a) => {
    e = !0, a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation();
  };
  document.addEventListener("click", n, t), setTimeout(() => !e && document.removeEventListener("click", n, t), 0);
}, QD = (e, t, n) => {
  const a = z(), r = a.props, { emit: l } = a, s = E([]), o = E(-1), i = E(null), u = E(0), c = E(rt("carousel")), d = E(), g = E(), h = E(), f = E(!1), p = E(!1), A = _(() => r.vertical ? "vertical" : "horizontal"), v = _(() => s.value.some((F) => F.props.label.toString().length > 0)), b = _(() => {
    const F = ["is-" + A.value];
    return v.value && F.push("is-labels"), (r.dots === "outside" || r.card) && F.push("is-outside"), F;
  }), C = (F) => {
    s.value.forEach((N, T) => {
      N.exposed?.reset?.(T, o.value, F);
    });
  }, D = () => {
    p.value = !0, o.value < s.value.length - 1 ? o.value++ : r.loop && (o.value = 0);
  }, B = () => {
    i.value && (clearInterval(i.value), i.value = null);
  }, y = () => {
    r.t <= 0 || !r.autoplay || i.value || (i.value = setInterval(D, r.t));
  }, x = (F) => {
    if (typeof F == "string") {
      const V = s.value.filter((G) => G.props.name === F);
      V.length > 0 && (F = s.value.indexOf(V[0]));
    }
    if (F = Number(F), isNaN(F) || F !== Math.floor(F)) throw new ye("carousel", "索引必须是整数");
    const N = s.value.length, T = o.value;
    F < 0 ? o.value = r.loop ? N - 1 : 0 : F >= N ? o.value = r.loop ? 0 : N - 1 : o.value = F, T === o.value && C(T);
  }, S = () => {
    x(o.value - 1);
  }, I = () => {
    x(o.value + 1);
  }, P = (F) => {
    o.value = F;
  }, W = (F) => {
    p.value = !0, r.draggable && (B(), d.value = !0, f.value = !1, g.value = F.screenX, h.value = F.screenY);
  }, O = (F) => {
    !d.value || !r.draggable || (u.value = r.vertical ? F.screenY - h.value : F.screenX - g.value, Math.abs(u.value) > VD && (f.value = !0), C());
  }, k = () => {
    if (!r.draggable) return;
    const F = f.value;
    d.value = !1, y();
    const N = Math.abs(u.value), T = u.value > 0;
    u.value = 0, N > 5 ? (T && S(), !T && I()) : C(), F && LD(), f.value = !1;
  };
  return $(() => o.value, (F, N) => {
    C(N), l("change", F, N);
  }), $(() => r.autoplay, (F) => {
    F ? y() : B();
  }), $(() => r.loop, () => {
    x(o.value);
  }), $(() => r.t, () => {
    B(), y();
  }), te(() => {
    fe(() => {
      e.value && de.on(e.value, C), s.value.length > 0 && x(r.initialIndex), y();
    });
  }), _e(() => {
    e.value && de.off(e.value, C), B();
  }), Ot("vc-carousel", {
    props: r,
    items: s,
    offset: u,
    allowTransition: p,
    setActiveItem: x,
    wrapper: e,
    content: t,
    add: (F) => {
      F && fe(() => {
        if (t.value) {
          const N = Array.from(t.value.children).filter((T) => /vcm?-carousel-item/.test(T.className)).indexOf(F.vnode.el);
          s.value.splice(N, 0, F);
          return;
        }
        s.value.push(F);
      });
    },
    remove: (F) => {
      F && s.value.splice(s.value.indexOf(F), 1);
    }
  }), n({
    setActiveItem: x,
    prev: S,
    next: I
  }), {
    carouselId: c,
    allowTransition: p,
    items: s,
    activeIndex: o,
    offset: u,
    direction: A,
    hasLabel: v,
    dotsClasses: b,
    start: d,
    startX: g,
    startY: h,
    handleStart: W,
    handleMove: O,
    handleEnd: k,
    handleDotClick: P,
    prev: S,
    next: I,
    setActiveItem: x,
    pauseTimer: B,
    startTimer: y
  };
}, KD = {
  t: {
    type: Number,
    default: 3e3
  },
  card: Boolean,
  gutter: {
    type: Number,
    default: 0
  },
  height: [String, Number],
  initialIndex: {
    type: Number,
    default: 0
  },
  trigger: {
    type: String,
    default: "hover"
  },
  autoplay: {
    type: Boolean,
    default: !0
  },
  dots: {
    type: [String, Boolean],
    default: "bottom"
  },
  arrow: {
    type: [String, Boolean],
    default: "hover"
  },
  loop: {
    type: Boolean,
    default: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  draggable: {
    type: Boolean,
    default: !0
  }
};
bt("transform").camel;
({
  ...KD
});
var ei = (e = [], t = []) => {
  const n = [], a = [];
  return t.length !== 0 && (t.some((r) => !!r.children) || !(t[0] instanceof Array) ? e.reduce((r, l) => {
    const s = r.find((o) => o.value == l) || {};
    return a.push(s), n.push(s.label), s.children || [];
  }, t) : e.forEach((r, l) => {
    if (!t[l]) return;
    const s = t[l].find((o) => o.value == r);
    a.push(s), n.push(s.label);
  })), qa({
    value: e,
    label: n,
    data: a
  });
}, an = {
  modelValue: [
    String,
    Number,
    Array
  ],
  disabled: {
    type: Boolean,
    default: !1
  },
  maxlength: Number,
  focusEnd: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  id: { type: String },
  prepend: { type: String },
  append: { type: String },
  afloat: {
    type: Boolean,
    default: !1
  },
  inputId: { type: String },
  inputStyle: { type: [
    String,
    Object,
    Array
  ] },
  allowDispatch: {
    type: Boolean,
    default: !0
  },
  bytes: {
    type: Boolean,
    default: !1
  },
  styleless: {
    type: Boolean,
    default: !1
  },
  /**
  * 完全受控组件：输入框内的值为modelValue.
  * 非完全受控时: 输入框内的值就是当前输入的值，modelValue变更，输入框的值也会更改
  */
  controllable: {
    type: Boolean,
    default: !1
  }
}, as = (e) => {
  e = String(e);
  const t = e.length, n = (e.match(/[\x20-\x7e]/g) || []).length, a = t - n;
  return {
    value: e,
    length: t,
    asciiLength: n,
    unicodeLength: a
  };
}, rs = (e, t) => {
  const n = as(e);
  return n.asciiLength + n.unicodeLength * 2 > t * 2 ? rs(n.value.substr(0, n.length - 1), t) : e;
}, cc = (e, t) => {
  const n = as(e);
  return 2 * t - n.unicodeLength;
}, dc = (e) => {
  const t = as(e);
  return Math.ceil(t.asciiLength / 2) - t.unicodeLength;
}, hc = (e) => {
  const t = z(), { emit: n } = t, a = t.props, r = E(typeof a.modelValue > "u" ? "" : a.modelValue), l = E(!1), s = E(!1), o = E(!1), i = Ae("vc-form-item", {});
  $(() => a.modelValue, (x) => {
    (a.controllable || x !== r.value) && (r.value = x);
  }), $(() => r.value, (x) => {
    a.allowDispatch && i.change?.(x);
  });
  const u = _(() => ({
    "is-focus": l.value,
    "is-disabled": a.disabled,
    "is-error": !!i?.message?.value
  })), c = _(() => {
    const x = r.value, { maxlength: S, bytes: I } = a;
    return Array.isArray(x) || !S || !I ? S : cc(x, S);
  }), d = (x, S, I) => {
    !I && x === r.value || (a.controllable || (r.value = x), n("update:modelValue", x, S), n("input", x, S), n("change", x, S));
  }, g = () => {
    t.proxy?.$forceUpdate?.();
  }, h = (x) => {
    n("keydown", x);
  }, f = (x) => {
    n("keypress", x);
  }, p = (x) => {
    (x.code === "Enter" || x.keyCode === 13) && n("enter", x), n("keyup", x);
  };
  let A;
  const v = (x) => {
    if (A = r.value, l.value = !0, !s.value) {
      if (a.focusEnd) {
        const S = String(r.value).length;
        setTimeout(() => {
          e.value.setSelectionRange(S, S);
        }, 0);
      }
      n("focus", x, r.value);
    }
  }, b = (x) => {
    s.value || (l.value = !1, n("blur", x, e.value ? e.value.value : r.value, A), a.allowDispatch && i.blur?.(r.value));
  }, C = (x) => {
    if (o.value) return;
    let S = e.value.value;
    if (typeof a.maxlength < "u" && a.bytes && x.inputType !== "deleteContentBackward") {
      const I = rs(S, a.maxlength);
      S !== I && (S = I);
    }
    d(S, x, x.inputType === "insertFromPaste"), g();
  }, D = (x) => {
    x.type === "compositionstart" && (o.value = !0), x.type === "compositionend" && (o.value = !1, C(x));
  };
  return {
    currentValue: r,
    currentMaxlength: c,
    isFocus: l,
    isClearing: s,
    isOnComposition: o,
    classes: u,
    listeners: {
      onKeyup: p,
      onKeypress: f,
      onKeydown: h,
      onFocus: v,
      onBlur: b,
      onCompositionstart: D,
      onCompositionupdate: D,
      onCompositionend: D,
      onPaste: (x) => {
        n("paste", x, x.clipboardData.getData("text"));
      },
      onInput: C,
      onChange: void 0
    },
    handleClear: () => {
      l.value && (s.value = !0);
      const x = { target: { value: "" } };
      d("", x), n("clear", x), fe(() => {
        e.value.focus(), setTimeout(() => {
          s.value = !1;
        }, 0);
      });
    }
  };
}, sa = (e, t) => {
  const n = {
    /* istanbul ignore next -- @preserve */
    focus() {
      e.value?.focus?.();
    },
    /* istanbul ignore next -- @preserve */
    blur() {
      e.value?.blur?.();
    },
    /* istanbul ignore next -- @preserve */
    click() {
      e.value?.click?.(), n.focus();
    }
  };
  return t?.(n), n;
}, mn = /* @__PURE__ */ H({
  name: "vc-input",
  inheritAttrs: !1,
  props: {
    ...an,
    indicator: {
      type: [Boolean, Object],
      default: !1
    },
    indicateClass: String
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "focus",
    "blur",
    "clear",
    "paste",
    "keydown",
    "keypress",
    "keyup",
    "enter",
    "tip"
  ],
  setup(e, { slots: t, expose: n, attrs: a }) {
    const r = E();
    sa(r, n);
    const l = kt({ merge: !1 }), { currentValue: s, currentMaxlength: o, classes: i, listeners: u, handleClear: c } = hc(r), d = _(() => typeof e.indicator == "object" && e.indicator.inline), g = _(() => {
      if (typeof e.maxlength > "u" || Array.isArray(s.value)) return;
      const { maxlength: f } = e, p = String(s.value), A = e.bytes ? dc(p) : p.length;
      return `${typeof e.indicator == "object" && e.indicator.inverted ? f - A : A}/${f}`;
    }), h = (f) => {
      const p = f ? {
        class: l.value.class,
        style: [e.inputStyle, l.value.style],
        ...l.value.attrs,
        ...l.value.listeners,
        ...u
      } : {
        style: e.inputStyle,
        ...l.value.attrs,
        ...l.value.listeners,
        ...u
      };
      return m("input", De({
        type: "text",
        ref: r
      }, p, {
        id: e.inputId,
        disabled: e.disabled,
        value: s.value,
        maxlength: o.value
      }), null);
    };
    return () => e.styleless ? h(!0) : m("div", {
      class: [
        "vc-input",
        i.value,
        l.value.class
      ],
      style: l.value.style,
      id: e.id
    }, [m("div", { class: "vc-input__wrapper" }, [
      (t.prepend || e.prepend) && m("div", { class: [
        "vc-input__prepend",
        {
          "is-icon": e.prepend,
          "is-afloat": e.afloat
        },
        i.value
      ] }, [t.prepend?.() || e.prepend && m(ee, { type: e.prepend }, null)]),
      m("div", De({ class: ["vc-input__content", i.value] }, t.content ? l.value.listeners : {}), [t.content ? t.content() : h(!1)]),
      !e.disabled && e.clearable && m(la, null, { default: () => [m(ee, {
        class: "vc-input__icon-clear",
        type: "clear",
        onMousedown: pe(c, ["prevent"])
      }, null)] }),
      (t.append || e.append || e.indicator) && m("div", { class: [
        "vc-input__append",
        {
          "is-icon": e.append,
          "is-afloat": e.afloat
        },
        i.value
      ] }, [t.append?.() || (e.append ? m(ee, { type: e.append }, null) : d.value ? m("span", { class: ["vc-input__indicator is-in", e.indicateClass] }, [g.value]) : null)])
    ]), e.indicator && !d.value && m("span", { class: ["vc-input__indicator is-out", e.indicateClass] }, [g.value])]);
  }
});
({
  ...an
});
var fc = {
  ...an,
  enterText: {
    type: [Boolean, String],
    default: !0
  }
}, GD = /* @__PURE__ */ H({
  name: "vc-input-search",
  props: fc,
  inheritAttrs: !1,
  setup(e, { emit: t, slots: n, expose: a, attrs: r }) {
    const l = E();
    return sa(l, a), () => m(mn, De({ ref: l }, e, { class: { "vc-input-search": !e.styleless } }, r), {
      prepend: n.prepend && (() => n.prepend?.()),
      append: () => n.append?.() || m("div", {
        class: ["vc-input-search__content", { "is-disabled": e.disabled }],
        onClick: (s) => t("enter", s)
      }, [e.enterText === !0 ? m(ee, { type: e.append || "search" }, null) : e.enterText])
    });
  }
}), Ac = {
  modelValue: Boolean,
  animation: String,
  placement: {
    type: String,
    default: "bottom",
    validator: (e) => [
      "bottom",
      "bottom-left",
      "bottom-right",
      "top",
      "top-left",
      "top-right",
      "right",
      "right-top",
      "right-bottom",
      "left",
      "left-top",
      "left-bottom"
    ].includes(e)
  },
  theme: {
    type: String,
    default: "light",
    validator: (e) => /(light|dark|none)/.test(e)
  },
  content: [String, Function],
  getPopupContainer: Function,
  portal: {
    type: Boolean,
    default: !0
  },
  arrow: {
    type: Boolean,
    default: !0
  },
  autoWidth: {
    type: Boolean,
    default: !0
  },
  triggerEl: {
    type: Object,
    required: !0
  },
  onChange: {
    type: Function,
    default: () => {
    }
  },
  onReady: Function,
  alone: {
    type: Boolean,
    default: !0
  },
  hover: Boolean,
  always: Boolean,
  portalClass: [
    Object,
    String,
    Array
  ],
  portalStyle: [Object, String]
}, tr = {
  trigger: {
    type: String,
    default: "hover",
    validator: (e) => /(hover|strictHover|click|focus|custom)/.test(e)
  },
  tag: {
    type: String,
    default: "span"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  outsideClickable: {
    type: Boolean,
    default: !0
  },
  ...be(Ac, [
    "modelValue",
    "animation",
    "placement",
    "theme",
    "content",
    "getPopupContainer",
    "portal",
    "arrow",
    "portalClass",
    "portalStyle",
    "autoWidth",
    "always"
  ])
}, Pe = 4, Ca = 12.73 / 2, jD = () => {
  const e = ({ portal: l, hasContainer: s, triggerEl: o, el: i }) => {
    let u;
    if (s) {
      const c = o.getBoundingClientRect(), d = i.parentElement.getBoundingClientRect(), g = c.y - d.y, h = c.x - d.x;
      if (h < 0 || g < 0) throw new ye("popover", "getPopupContainer选择节点应为容器元素");
      u = {
        y: g,
        x: h,
        height: c.height,
        width: c.width
      };
    } else l ? (u = o.getBoundingClientRect(), u.y = (document?.scrollingElement?.scrollTop || 0) + u.y) : u = {
      y: 0,
      x: 0,
      height: o.offsetHeight,
      width: o.offsetWidth
    };
    return u || {};
  }, t = ({ direction: l, popupRect: s, placement: o, bottomDistance: i, bottomSurplus: u, topSurplus: c, el: d }) => (l.length === 1 ? s.top + s.height / 2 < d.offsetHeight / 2 ? o = `${o}-top` : i < d.offsetHeight / 2 && (o = `${o}-bottom`) : l[1] === "top" && u < 0 && u < c ? o = o.replace("top", "bottom") : l[1] === "bottom" && c < 0 && c < u && (o = o.replace("bottom", "top")), o), n = ({ direction: l, popupRect: s, placement: o, rightDistance: i, leftSurplus: u, rightSurplus: c, el: d }) => (l.length === 1 ? s.left + s.width / 2 < d.offsetWidth / 2 ? o = `${o}-left` : i - s.width / 2 < d.offsetWidth / 2 && (o = `${o}-right`) : l[1] === "left" && c < 0 && c < u ? o = o.replace("left", "right") : l[1] === "right" && u < 0 && u < c && (o = o.replace("right", "left")), o);
  return {
    getYAssistFitPos: t,
    getXAssistFitPos: n,
    getPopupStyle: ({ rect: l, placement: s, triggerEl: o, el: i }) => {
      let u, c;
      const d = i.parentElement === document.body ? window.scrollX : 0;
      switch (s) {
        case "bottom":
          u = {
            top: `${l.y + l.height + Pe}px`,
            left: `${l.x + (l.width - i.offsetWidth) / 2}px`,
            transformOrigin: `${i.offsetWidth / 2}px 0px`
          };
          break;
        case "bottom-left":
          u = {
            top: `${l.y + l.height + Pe}px`,
            left: `${l.x + d}px`,
            transformOrigin: "16px 0px"
          };
          break;
        case "bottom-right":
          u = {
            top: `${l.y + l.height + Pe}px`,
            left: `${l.x + l.width - i.offsetWidth + d}px`,
            transformOrigin: `${i.offsetWidth - 16}px 0px`
          };
          break;
        case "top":
          u = {
            top: `${l.y - i.offsetHeight - Pe}px`,
            left: `${l.x + (l.width - i.offsetWidth) / 2}px`,
            transformOrigin: `${i.offsetWidth / 2}px 100%`
          };
          break;
        case "top-left":
          u = {
            top: `${l.y - i.offsetHeight - Pe}px`,
            left: `${l.x + d}px`,
            transformOrigin: "16px 100%"
          };
          break;
        case "top-right":
          u = {
            top: `${l.y - i.offsetHeight - Pe}px`,
            left: `${l.x + l.width - i.offsetWidth + d}px`,
            transformOrigin: `${i.offsetWidth - 16}px 100%`
          };
          break;
        case "right":
          u = {
            top: `${l.y + (l.height - i.offsetHeight) / 2}px`,
            left: `${l.x + l.width + Pe}px`,
            transformOrigin: `0px ${i.offsetHeight / 2}px`
          };
          break;
        case "right-top":
          u = {
            top: `${l.y}px`,
            left: `${l.x + l.width + Pe}px`,
            transformOrigin: "0px 12px"
          }, c = { top: `${o.offsetHeight / 2 - Ca}px` };
          break;
        case "right-bottom":
          u = {
            top: `${l.y + l.height - i.offsetHeight}px`,
            left: `${l.x + l.width + Pe}px`,
            transformOrigin: `0px ${i.offsetHeight - 12}px`
          }, c = { bottom: `${o.offsetHeight / 2 - Ca}px` };
          break;
        case "left":
          u = {
            top: `${l.y + (l.height - i.offsetHeight) / 2}px`,
            left: `${l.x - i.offsetWidth - Pe}px`,
            transformOrigin: `100% ${i.offsetHeight / 2}px`
          };
          break;
        case "left-top":
          u = {
            top: `${l.y}px`,
            left: `${l.x - i.offsetWidth - Pe}px`,
            transformOrigin: "100% 12px"
          }, c = { top: `${o.offsetHeight / 2 - Ca}px` };
          break;
        case "left-bottom":
          u = {
            top: `${l.y + l.height - i.offsetHeight}px`,
            left: `${l.x - i.offsetWidth - Pe}px`,
            transformOrigin: `100% ${i.offsetHeight - 12}px`
          }, c = { bottom: `${o.offsetHeight / 2 - Ca}px` };
          break;
      }
      return {
        wrapperStyle: u,
        arrowStyle: c
      };
    },
    getFitPos: ({ placement: l, triggerEl: s, el: o }) => {
      const i = s.getBoundingClientRect();
      let u, c;
      const d = l.split("-"), g = window.innerWidth - i.left, h = i.right, f = g - o.offsetWidth, p = h - o.offsetWidth, A = window.innerHeight - i.top, v = i.bottom, b = A - o.offsetHeight, C = v - o.offsetHeight;
      switch (d[0]) {
        case "left":
          i.x - o.offsetWidth < 0 && p < f && (l = l.replace("left", "right")), l = t({
            direction: d,
            popupRect: i,
            placement: l,
            bottomDistance: A,
            bottomSurplus: b,
            topSurplus: C,
            el: o
          });
          break;
        case "right":
          u = window.innerWidth - i.x - i.width - o.offsetWidth, u < 0 && f < p && (l = l.replace("right", "left")), l = t({
            direction: d,
            popupRect: i,
            placement: l,
            bottomDistance: A,
            bottomSurplus: b,
            topSurplus: C,
            el: o
          });
          break;
        case "top":
          i.y - o.offsetHeight < 0 && C < b && (l = l.replace("top", "bottom")), l = n({
            direction: d,
            popupRect: i,
            placement: l,
            rightDistance: g,
            leftSurplus: p,
            rightSurplus: f,
            el: o
          });
          break;
        case "bottom":
          c = window.innerHeight - i.y - i.height - o.offsetHeight, c < 0 && b < C && (l = l.replace("bottom", "top")), l = n({
            direction: d,
            popupRect: i,
            placement: l,
            rightDistance: g,
            leftSurplus: p,
            rightSurplus: f,
            el: o
          });
          break;
      }
      return l;
    },
    getRect: e
  };
}, Gr = new Oe(/* @__PURE__ */ H({
  name: "vc-popover-wrapper",
  props: Ac,
  emits: ["portal-fulfilled", "close"],
  setup(e, { emit: t, slots: n, expose: a }) {
    const { getPopupStyle: r, getFitPos: l, getRect: s } = jD(), o = z(), { vnode: i } = o, u = E(!1), c = E({}), d = E({}), g = E(e.placement), h = E({ width: "auto" }), f = _(() => ({
      "is-light": /light/.test(e.theme),
      "is-dark": /dark/.test(e.theme)
    })), p = _(() => ({
      "is-top": e.arrow && /top/.test(g.value),
      "is-right": e.arrow && /right/.test(g.value),
      "is-bottom": e.arrow && /bottom/.test(g.value),
      "is-left": e.arrow && /left/.test(g.value)
    })), A = _(() => ({
      [`is-${g.value.split("-")[0]}-basic`]: !0,
      [`is-${g.value}`]: !0
    })), v = () => {
      let k = e.triggerEl;
      try {
        if (n.content && k.children.length === 1) {
          const w = k.children[0];
          w.getBoundingClientRect().height > k.getBoundingClientRect().height && (k = w);
        }
        return k;
      } catch {
        return k;
      }
    }, b = yn(() => {
      if (!i.el) return;
      const k = v(), { portal: w, getPopupContainer: M } = e, F = s({
        portal: w,
        triggerEl: k,
        el: i.el,
        hasContainer: !!M
      }), N = l({
        triggerEl: k,
        el: i.el,
        placement: e.placement
      }), { wrapperStyle: T, arrowStyle: V } = r({
        rect: F,
        triggerEl: k,
        el: i.el,
        placement: N
      });
      g.value = N, c.value = T, d.value = V, !e.autoWidth && (h.value = { width: `${k.getBoundingClientRect().width}px` });
    }, 50, {
      leading: !0,
      trailing: !1
    });
    let C, D = !1;
    const B = (k) => {
      const w = k.type === "mouseenter";
      C && clearTimeout(C), C = setTimeout(() => {
        u.value = w, e.onChange(k, {
          visible: w,
          context: o
        });
      }, 200);
    }, y = () => {
      D = !0;
    }, x = (k) => {
      const w = i.el.contains(k.target), M = D;
      D = !1, !(w || M) && (e.alone && (u.value = !1), e.onChange(k, { context: o }));
    }, S = (k, { visible: w }) => {
      e.alone && B(k), !e.alone && e.onChange(k, {
        visible: w,
        context: o
      });
    }, I = () => {
      const k = e.placement.split("-"), w = parseFloat(c.value.left);
      switch (k[0]) {
        case "top":
        case "bottom":
          w + i.el.offsetWidth > window.innerWidth ? c.value = {
            ...c.value,
            left: `${window.innerWidth - i.el.offsetWidth}px`
          } : b();
          break;
      }
    }, P = () => {
      !o.isUnmounted && (t("close"), t("portal-fulfilled"));
    }, W = () => {
      e.triggerEl.addEventListener("mouseenter", B), e.triggerEl.addEventListener("mouseleave", B);
    }, O = () => {
      e.triggerEl.removeEventListener("mouseenter", B), e.triggerEl.removeEventListener("mouseleave", B);
    };
    return e.alone && e.hover && W(), te(() => {
      u.value = !0, !e.hover && document.addEventListener("click", x, !0), document.addEventListener("scroll", b), de.on(e.triggerEl, b), de.on(i.el, I), e.onReady && e.onReady();
    }), Ct(() => {
      !e.hover && document.removeEventListener("click", x, !0), document.removeEventListener("scroll", b), de.off(e.triggerEl, b), de.off(i.el, I), e.alone && e.hover && O();
    }), a({
      isActive: u,
      toggle(k) {
        k = typeof k == "boolean" ? k : !u.value, u.value = k;
      }
    }), () => m(rc, {
      mode: e.animation || "part",
      duration: {
        enter: 300,
        leave: 150
      },
      onAfterLeave: P
    }, { default: () => [ce(m("div", {
      style: [
        c.value,
        h.value,
        e.portalStyle
      ],
      class: [
        p.value,
        e.portalClass,
        "vc-popover-wrapper"
      ],
      onMousedown: () => !e.hover && y(),
      onMouseenter: (k) => e.hover && S(k, { visible: !0 }),
      onMouseleave: (k) => e.hover && S(k, { visible: !1 })
    }, [m("div", { class: [f.value, "vc-popover-wrapper__container"] }, [e.arrow && m("div", {
      style: d.value,
      class: [
        f.value,
        A.value,
        "vc-popover-wrapper__arrow"
      ]
    }, null), n.content ? n.content() : typeof e.content == "function" ? m(xe, { render: e.content }, null) : m("div", { innerHTML: e.content }, null)])]), [[he, u.value]])] });
  }
}), { leaveDelay: 0 }), Cn = Object.assign(/* @__PURE__ */ H({
  name: "vc-popover",
  props: tr,
  emits: [
    "update:modelValue",
    "visible-change",
    "ready",
    "close"
  ],
  setup(e, { emit: t, slots: n }) {
    const a = z(), r = rt("popover"), l = E(!1), s = _(() => e.trigger === "hover" && !e.always), o = _(() => e.trigger === "strictHover" && !e.always), i = _(() => e.trigger === "click" && !e.always), u = _(() => e.trigger === "focus" && !e.always), c = () => {
      t("update:modelValue", l.value), t("visible-change", l.value);
    };
    let d, g;
    const h = (p = {}, { visible: A }) => {
      if (A = e.always || A, e.disabled) return;
      s.value && d && clearTimeout(d);
      const v = (p.path || Gl(p) || []).some((b) => new RegExp(r).test(b.className));
      if (!(!e.portal && v)) {
        if (A === void 0) if (!v && !a?.vnode?.el?.contains(p.target) && e.outsideClickable) A = !1;
        else return;
        if (A != l.value) {
          const b = () => {
            l.value = A, c();
          };
          (s.value || o.value) && A === !1 ? d = setTimeout(b, 200) : b();
        }
      }
    }, f = () => {
      if (l.value) {
        const p = e.getPopupContainer ? e.getPopupContainer() : e.portal ? document.body : a.vnode.el;
        let { portalClass: A } = e;
        typeof A == "object" ? A instanceof Array ? A.push(r) : A[r] = !0 : A = `${A || ""} ${r}`, g = Gr.popup({
          el: p,
          alone: !1,
          name: r,
          triggerEl: a.vnode.el,
          onChange: h,
          onClose: () => {
            t("close"), g = null;
          },
          onReady: () => {
            t("ready");
          },
          hover: s.value,
          /**
          * 传送门通信控制
          */
          slots: n,
          parent: a.parent,
          ...e,
          portalClass: A
        });
      } else g && g.wrapper && g.wrapper.toggle(!1);
    };
    return $(() => e.modelValue, (p) => {
      l.value = p;
    }, { immediate: !0 }), $(() => l.value, () => {
      f();
    }), te(() => {
      l.value && f();
    }), Ct(() => {
      g && g.destroy();
    }), () => ke(e.tag, {
      class: "vc-popover",
      style: "position: relative;",
      onFocus: (p) => u.value && h(p, { visible: !0 }),
      onBlur: (p) => u.value && h(p, { visible: !1 }),
      onMouseenter: (p) => (s.value || o.value) && h(p, { visible: !0 }),
      onMouseleave: (p) => (s.value || o.value) && h(p, { visible: !1 }),
      onClick: (p) => i.value && h(p, { visible: !l.value })
    }, n.default?.());
  }
}), { open: Gr.popup.bind(Gr) }), UD = /* @__PURE__ */ H({
  name: "vc-cascader-column",
  emits: ["click", "change"],
  props: {
    data: {
      type: Array,
      default: () => []
    },
    itemStyle: {
      type: Object,
      default: () => {
      }
    },
    value: { type: [String, Number] },
    index: { type: Number }
  },
  setup(e, { emit: t }) {
    const n = () => {
      t("click");
    }, a = (r, l) => {
      t("change", {
        value: r,
        rowIndex: l,
        columnIndex: e.index
      });
    };
    return () => m("div", { class: "vc-cascader-column" }, [m("div", { class: "vc-cascader-column__wrapper" }, [e.data.map((r, l) => m("div", {
      key: l,
      class: [{ "is-select": e.value == r.value }, "vc-cascader-column__item"],
      onClick: n,
      onMouseenter: () => a(r.value, l)
    }, [m("span", null, [r.label]), r.hasChildren && !r.loading ? m(ee, {
      type: "right",
      class: "vc-cascader-column__icon"
    }, null) : r.loading ? m(Dn, {
      size: 14,
      class: "vc-cascader-column__loading"
    }, null) : null]))])]);
  }
}), ZD = [
  "?",
  "*",
  "$",
  "+",
  "^",
  ".",
  "\\"
], JD = (e) => {
  let t = "";
  for (const n of e) t += ZD.includes(n) ? "\\" + n : n;
  return t;
}, gc = (e, t = {}) => {
  let n = [];
  return e.forEach((a) => {
    if (a.children) {
      const { children: r, ...l } = a, s = gc(r, t);
      n = n.concat(t.parent ? [t.cascader ? a : l].concat(s) : s);
    } else n.push(a);
  }), n;
}, Ue = (e, t) => (typeof e == "string" && (e = e.split(t.separator).filter((n) => !!n), t.numerable && (e = e.map((n) => +n))), e = Array.isArray(e) ? e : typeof e < "u" && e !== null ? [e] : [], e), qt = (e, t) => {
  let n;
  return Array.isArray(t.modelValue) ? n = e : (n = t.max > 1 ? e.join(t.separator) : e[0], typeof t.modelValue == "string" && t.numerable && (n = `${e}`), typeof e > "u" && (n = t.nullValue)), n;
}, zD = [
  "id",
  "disabled",
  "modelValue",
  "clearable"
], ls = {
  ...be(tr, ["portal", "portalClass"]),
  ...be(an, zD),
  renderOption: [Function],
  renderOptionGroup: [Function],
  renderLabel: [Function],
  data: {
    type: Array,
    default: () => []
  },
  searchPlaceholder: {
    type: String,
    default: ""
  },
  trigger: {
    type: String,
    default: "click"
  },
  tag: {
    type: String,
    default: "div"
  },
  placement: {
    type: String,
    default: "bottom-left"
  },
  arrow: {
    type: Boolean,
    default: !1
  },
  autoWidth: {
    type: Boolean,
    default: !1
  },
  max: {
    type: Number,
    default: 1,
    validator: (e) => e >= 1
  },
  maxTags: Number,
  searchable: {
    type: Boolean,
    default: !1
  },
  loadData: { type: Function },
  extra: {
    type: String,
    default: ""
  },
  separator: {
    type: String,
    default: ","
  },
  numerable: {
    type: Boolean,
    default: !1
  },
  nullValue: {
    type: [
      Number,
      String,
      Object
    ],
    default: void 0
  },
  label: String
};
({
  ...ls
});
var XD = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: !1
  },
  value: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: void 0
  },
  label: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: void 0
  },
  indeterminate: {
    type: Boolean,
    default: !1
  },
  name: String,
  checkedValue: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: !0
  },
  uncheckedValue: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: !1
  }
}, qD = () => {
  const { props: e, emit: t } = z(), n = Ae("vc-checkbox-group", {}), a = Ae("vc-form-item", {}), r = E(void 0), l = E(!1), s = _(() => !!n.props), o = _(() => typeof e.value > "u" || e.value === "" ? e.label : e.value), i = _(() => typeof e.label > "u" || e.label === "" ? e.value : e.label), u = _(() => s.value ? n.currentValue.value.includes(o.value) : r.value === e.checkedValue), c = _(() => ({
    "is-indeterminate": e.indeterminate,
    "is-checked": u.value,
    "is-disabled": e.disabled,
    "is-focus": l.value,
    "is-error": !!a?.message?.value
  }));
  $(() => e.modelValue, (A) => {
    r.value = A;
  }, { immediate: !0 });
  const d = (A) => {
    r.value = A ? e.checkedValue : e.uncheckedValue;
  }, g = (A) => {
    t("update:modelValue", r.value, A, d), t("change", r.value, A, d), a?.change?.(r.value);
  };
  return {
    currentValue: r,
    isFocus: l,
    classes: c,
    hasGroup: s,
    checked: u,
    handleChange: (A) => {
      if (e.disabled) return !1;
      const v = A.target.checked;
      s.value ? (n.reset(o.value), n.sync(A)) : (d(v), g(A));
    },
    handleBlur: () => {
      l.value = !1;
    },
    handleFocus: () => {
      l.value = !0;
    },
    sync: g,
    reset: d,
    computedValue: o,
    computedLabel: i
  };
}, mc = /* @__PURE__ */ H({
  name: "vc-checkbox",
  props: XD,
  emits: ["update:modelValue", "change"],
  setup(e, { slots: t }) {
    const { checked: n, classes: a, computedLabel: r, handleChange: l, handleFocus: s, handleBlur: o } = qD();
    return () => m("label", { class: [a.value, "vc-checkbox"] }, [m("span", { class: [{ "has-sibling": !!(r.value || t.default) }, "vc-checkbox__wrapper"] }, [m("span", { class: "vc-checkbox__border" }, [m("span", { class: "vc-checkbox__inner" }, null)]), m("input", {
      checked: n.value,
      name: e.name,
      disabled: e.disabled,
      type: "checkbox",
      onChange: l,
      onFocus: s,
      onBlur: o
    }, null)]), t.default ? t.default() : r.value && m("span", null, [r.value])]);
  }
}), pc = /* @__PURE__ */ H({
  name: "vc-message",
  emits: [
    "before-close",
    "close",
    "portal-fulfilled"
  ],
  props: {
    content: [String, Function],
    mask: {
      type: Boolean,
      default: !0
    },
    maskClosable: {
      type: Boolean,
      default: !0
    },
    fixed: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: Number,
      default: 1500
    },
    top: {
      type: Number,
      default: 30
    },
    closable: {
      type: Boolean,
      default: !1
    },
    mode: {
      type: String,
      default: "info",
      validator: (e) => /(info|loading|success|error|warning)/.test(e)
    },
    onBeforeClose: Function
  },
  setup(e, { emit: t, expose: n }) {
    const a = z(), r = E(!1), l = E();
    let s;
    const o = (d) => {
      s && clearTimeout(s), d !== 0 && (s = setTimeout(() => r.value = !1, d));
    }, i = (d) => {
      l.value = d;
    }, u = () => {
      t("close"), t("portal-fulfilled");
    }, c = async (d, g) => {
      if (!r.value || g === !1) return;
      const h = a.vnode.props?.onBeforeClose || e.onBeforeClose || (() => {
      }), f = h && h(d);
      if (f && f.then) return f.then((p) => (r.value = !1, p));
      (!f || f === !0) && (r.value = !1);
    };
    return $(() => e.content, i, { immediate: !0 }), te(() => {
      r.value = !0, o(e.duration);
    }), Ct(() => {
      s && clearTimeout(s);
    }), n([
      "destroy",
      "remove",
      "close",
      "hide"
    ].reduce((d, g) => (d[g] = u, d), {
      setContent: i,
      setDuration: o
    })), () => m("div", { class: "vc-message" }, [e.mask && e.fixed && m("div", {
      class: "vc-message__mask",
      onClick: (d) => c(d, e.maskClosable)
    }, null), m(er, {
      mode: "bottom",
      onAfterLeave: u
    }, { default: () => [ce(m("div", {
      class: ["vc-message__wrapper", { "is-fixed": e.fixed }],
      style: e.fixed ? { top: `${e.top}px` } : {}
    }, [m("div", { class: "vc-message__container" }, [
      e.mode === "loading" ? m(Dn, {
        size: 14,
        class: "vc-message__loading"
      }, null) : m(ee, {
        type: e.mode,
        class: [`is-${e.mode}`, "vc-message__icon"]
      }, null),
      typeof l.value == "string" ? m("div", {
        class: "vc-message__content",
        innerHTML: l.value
      }, null) : typeof l.value == "function" ? m(xe, { render: l.value }, null) : null,
      e.closable && m(ee, {
        type: "close",
        class: "vc-message__close",
        onClick: (d) => c(d, !0)
      }, null)
    ])]), [[he, r.value]])] })]);
  }
}), kl = new Oe(pc, {
  leaveDelay: 0,
  multiple: !0,
  autoDestroy: !1
}), oa = (e) => (...t) => {
  let n = 0;
  Oe.leafs.forEach((s, o) => {
    o.includes(kl.globalOptions.name) && n++;
  });
  const a = 30 + n * 40, r = window.innerHeight - 100;
  e.top = a > r ? r : a;
  const l = na.toOptions(t, [
    "content",
    "duration",
    "onClose"
  ], { ...e });
  return kl.popup({
    ...l,
    onFulfilled: l.onClose,
    onClose: null
  });
}, eC = () => kl.destroy(), tC = oa({ mode: "info" }), nC = oa({ mode: "success" }), aC = oa({
  mode: "loading",
  duration: 0,
  maskClosable: !1
}), rC = oa({ mode: "warning" }), lC = oa({ mode: "error" }), El = Object.assign(pc, {
  destroy: eC,
  info: tC,
  success: nC,
  loading: aC,
  warning: rC,
  error: lC
}), vc = {
  value: String,
  tag: {
    type: [
      String,
      Object,
      Function
    ],
    default: "div"
  }
}, yc = () => {
  const e = document.getSelection();
  if (!e.rangeCount) return () => {
  };
  let t = document.activeElement;
  const n = [];
  for (let a = 0; a < e.rangeCount; a++) n.push(e.getRangeAt(a));
  if (t) {
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), () => {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || n.forEach((a) => {
        e.addRange(a);
      }), t && t.focus();
    };
  }
}, Bl = (e) => {
  let t, n, a, r, l;
  try {
    if (t = yc(), n = document.createRange(), a = document.getSelection(), r = document.createElement("span"), r.textContent = e, r.style.all = "unset", r.style.position = "fixed", r.style.top = 0, r.style.clip = "rect(0, 0, 0, 0)", r.style.whiteSpace = "pre", r.style.webkitUserSelect = "text", r.style.MozUserSelect = "text", r.style.msUserSelect = "text", r.style.userSelect = "text", document.body.appendChild(r), n.selectNode(r), a.addRange(n), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
    l = !0;
  } catch {
    try {
      window.clipboardData && window.clipboardData.setData("text", e), l = !0;
    } catch (s) {
      console.log(s);
    }
  } finally {
    a && (typeof a.removeRange == "function" ? a.removeRange(n) : a.removeAllRanges()), r && document.body.removeChild(r), t();
  }
  return l;
}, Dc = {
  get: async () => navigator.clipboard.readText(),
  set: Bl,
  clear: () => Bl(""),
  clearSelection: yc
}, Cc = (e) => {
  const t = z(), { props: n, emit: a, slots: r } = t, l = async (s) => {
    try {
      let { value: o, onAfter: i, onBefore: u } = t.vnode.props;
      u && (o = await u(s, o)), Bl(o) && (i && i(o), !i && e("复制成功"));
    } catch (o) {
      a("error", o);
    }
  };
  return () => ke(n.tag, {
    onClick: l,
    class: "vc-clipboard"
  }, r?.default?.());
}, sC = H({
  name: "vc-clipboard",
  props: vc,
  setup() {
    return Cc((e) => El.success({ content: e }));
  }
}), Ww = Object.assign(sC, Dc), bc = /* @__PURE__ */ H({
  name: "vcm-toast",
  emits: ["close", "portal-fulfilled"],
  props: {
    content: [String, Function],
    maskClosable: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: Number,
      default: 3e3
    },
    mode: {
      type: String,
      default: "info",
      validator: (e) => [
        "info",
        "loading",
        "success",
        "warning",
        "error"
      ].includes(e)
    }
  },
  setup(e, { emit: t, expose: n }) {
    const a = E(!1), r = E();
    let l;
    const s = (c) => {
      l && clearTimeout(l), c !== 0 && (l = setTimeout(() => a.value = !1, c));
    }, o = (c) => {
      r.value = c;
    }, i = () => {
      t("close"), t("portal-fulfilled");
    }, u = () => {
      e.maskClosable && (a.value = !1);
    };
    return $(() => e.content, o, { immediate: !0 }), te(() => {
      a.value = !0, s(e.duration);
    }), Ct(() => {
      l && clearTimeout(l);
    }), n([
      "destroy",
      "remove",
      "close",
      "hide"
    ].reduce((c, d) => (c[d] = i, c), {
      setContent: o,
      setDuration: s
    })), () => m("div", { class: "vcm-toast" }, [m("div", {
      class: "vcm-toast__bg",
      onClick: u,
      onTouchmove: pe(() => {
      }, ["prevent"])
    }, null), m(Zn, {
      duration: {
        enter: 300,
        leave: 150
      },
      onAfterLeave: i
    }, { default: () => [ce(m("div", { class: "vcm-toast__wrapper" }, [e.mode === "loading" && m(sc, { class: "vcm-toast__loading" }, null), typeof r.value == "string" ? m("div", {
      class: "vcm-toast__content",
      innerHTML: r.value
    }, null) : typeof r.value == "function" ? m(Ha, { render: r.value }, null) : null]), [[he, a.value]])] })]);
  }
}), wc = new Oe(bc, {
  multiple: !0,
  autoDestroy: !1
}), ia = (e) => (...t) => {
  const n = na.toOptions(t, [
    "content",
    "duration",
    "onClose",
    "maskClosable"
  ], { ...e });
  return wc.popup({
    ...n,
    onFulfilled: n.onClose,
    onClose: null
  });
}, oC = () => wc.destroy(), iC = ia({ mode: "info" }), uC = ia({ mode: "success" }), cC = ia({
  mode: "loading",
  duration: 0,
  maskClosable: !1
}), dC = ia({ mode: "warning" }), hC = ia({ mode: "error" }), ss = Object.assign(bc, {
  destroy: oC,
  info: iC,
  success: uC,
  loading: cC,
  warning: dC,
  error: hC
}), fC = H({
  name: "vcm-clipboard",
  props: vc,
  setup() {
    return Cc((e) => ss.info({ content: e }));
  }
});
Object.assign(fC, Dc);
var Fc = {
  modelValue: {
    type: String,
    default: ""
  },
  panel: {
    type: Boolean,
    default: !0
  },
  alpha: {
    type: Boolean,
    default: !1
  },
  hue: {
    type: Boolean,
    default: !0
  },
  recommend: {
    type: Boolean,
    default: !1
  },
  colors: {
    type: Array,
    default: () => []
  },
  format: {
    type: String,
    validator: (e) => /(hsl|hsv|hex|rgb)/.test(e)
  }
}, AC = {
  ...be(tr, ["portalClass"]),
  ...Fc,
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "click"
  },
  arrow: {
    type: Boolean,
    default: !1
  },
  size: {
    type: String,
    default: "medium",
    validator: (e) => /(large|medium|small)/.test(e)
  },
  editable: {
    type: Boolean,
    default: !0
  }
}, ti = (e, t, n) => {
  const a = (2 - t) * n;
  return [
    e,
    t * n / (a < 1 ? a : 2 - a) || 0,
    a / 2
  ];
}, gC = (e) => typeof e == "string" && e.includes(".") && parseFloat(e) === 1, mC = (e) => typeof e == "string" && e.includes("%"), cn = (e, t) => {
  let n = e;
  gC(n) && (n = "100%");
  const a = mC(n);
  let r = Math.min(t, Math.max(0, parseFloat(`${n}`)));
  return Number.isNaN(r) && (r = 0), a && (r = parseInt(`${r * t}`, 10) / 100), Math.abs(r - t) < 1e-6 ? 1 : r % t / parseFloat(`${t}`);
}, ni = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}, pC = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}, jr = (e) => pC[e.toUpperCase()] ?? Number(e), $t = (e) => e.length === 1 ? jr(e) * 17 : jr(e[0]) * 16 + jr(e[1]), vC = ({ r: e, g: t, b: n }) => {
  const a = (r) => {
    const l = Math.min(Math.round(r), 255), s = Math.floor(l / 16), o = l % 16;
    return `${ni[s] || s}${ni[o] || o}`;
  };
  return Number.isNaN(e) || Number.isNaN(t) || Number.isNaN(n) ? "" : `#${a(e)}${a(t)}${a(n)}`;
}, yC = (e, t, n) => {
  let a = t / 100, r = n / 100, l = a;
  const s = Math.max(r, 0.01);
  r *= 2, a *= r <= 1 ? r : 2 - r, l *= s <= 1 ? s : 2 - s;
  const o = (r + a) / 2;
  return {
    h: e,
    s: (r === 0 ? 2 * l / (s + l) : 2 * a / (r + a)) * 100,
    v: o * 100
  };
}, ai = (e, t, n) => {
  const a = cn(e, 255), r = cn(t, 255), l = cn(n, 255), s = Math.max(a, r, l), o = Math.min(a, r, l), i = s - o;
  let u = 0;
  const c = s === 0 ? 0 : i / s;
  if (s !== o) {
    switch (s) {
      case a:
        u = (r - l) / i + (r < l ? 6 : 0);
        break;
      case r:
        u = (l - a) / i + 2;
        break;
      case l:
        u = (a - r) / i + 4;
        break;
    }
    u /= 6;
  }
  return {
    h: u * 360,
    s: c * 100,
    v: s * 100
  };
}, ba = (e, t, n) => {
  const a = cn(e, 360) * 6, r = cn(t, 100), l = cn(n, 100), s = Math.floor(a), o = a - s, i = l * (1 - r), u = l * (1 - o * r), c = l * (1 - (1 - o) * r), d = s % 6, g = [
    l,
    u,
    i,
    i,
    c,
    l
  ][d], h = [
    c,
    l,
    l,
    u,
    i,
    i
  ][d], f = [
    i,
    i,
    c,
    l,
    l,
    u
  ][d];
  return {
    r: Math.round(g * 255),
    g: Math.round(h * 255),
    b: Math.round(f * 255)
  };
}, Ur = (e, t) => {
  const n = t === "hsl" ? /hsla|hsl|\(|\)/gm : t === "hsv" ? /hsva|hsv|\(|\)/gm : /rgba|rgb|\(|\)/gm;
  return e.replace(n, "").split(/\s|,/g).filter(Boolean).map((a, r) => r > 2 ? parseFloat(a) : parseInt(a, 10));
}, Jn = class {
  states = Ke({
    hue: 0,
    saturation: 100,
    value: 100,
    alpha: 100,
    enableAlpha: !1,
    format: "hex",
    selected: void 0,
    output: _(() => this.getOutput())
  });
  constructor(e = {}) {
    this.setOptions(e), e.value && this.setColor(e.value);
  }
  setOptions(e = {}) {
    this.states.enableAlpha = !!e.enableAlpha, this.states.format = e.format || (this.states.enableAlpha ? "rgb" : "hex");
  }
  set(e, t) {
    if (typeof e == "object") {
      Object.entries(e).forEach(([n, a]) => {
        this.set(n, a);
      });
      return;
    }
    this.states[e] = t || 0;
  }
  get(e) {
    return this.states[e];
  }
  toRgb() {
    return ba(this.states.hue, this.states.saturation, this.states.value);
  }
  setColor(e) {
    if (!e) {
      this.states.hue = 0, this.states.saturation = 100, this.states.value = 100, this.states.alpha = 100;
      return;
    }
    const t = (n, a, r) => {
      this.states.hue = Math.max(0, Math.min(360, Math.ceil(n))), this.states.saturation = Math.max(0, Math.min(100, a)), this.states.value = Math.max(0, Math.min(100, r));
    };
    if (e.includes("hsl")) {
      const n = Ur(e, "hsl");
      if (this.states.alpha = n.length === 4 ? Math.floor(n[3] * 100) : 100, n.length >= 3) {
        const { h: a, s: r, v: l } = yC(n[0], n[1], n[2]);
        t(a, r, l);
      }
    } else if (e.includes("hsv")) {
      const n = Ur(e, "hsv");
      this.states.alpha = n.length === 4 ? Math.floor(n[3] * 100) : 100, n.length >= 3 && t(n[0], n[1], n[2]);
    } else if (e.includes("rgb")) {
      const n = Ur(e, "rgb");
      if (this.states.alpha = n.length === 4 ? Math.floor(n[3] * 100) : 100, n.length >= 3) {
        const { h: a, s: r, v: l } = ai(n[0], n[1], n[2]);
        t(a, r, l);
      }
    } else if (e.includes("#")) {
      const n = e.replace("#", "").trim();
      if (!/^(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(n)) return;
      let a, r, l;
      n.length === 3 ? (a = $t(n[0] + n[0]), r = $t(n[1] + n[1]), l = $t(n[2] + n[2])) : (a = $t(n.substring(0, 2)), r = $t(n.substring(2, 4)), l = $t(n.substring(4, 6))), this.states.alpha = n.length === 8 ? Math.floor($t(n.substring(6)) / 255 * 100) : 100;
      const { h: s, s: o, v: i } = ai(a, r, l);
      t(s, o, i);
    }
  }
  compare(e) {
    return Math.abs(e.states.hue - this.states.hue) < 2 && Math.abs(e.states.saturation - this.states.saturation) < 1 && Math.abs(e.states.value - this.states.value) < 1 && Math.abs(e.states.alpha - this.states.alpha) < 1;
  }
  getOutput() {
    const { hue: e, saturation: t, value: n, alpha: a, enableAlpha: r, format: l } = this.states;
    if (r) switch (l) {
      case "hsl": {
        const s = ti(e, t / 100, n / 100);
        return `hsla(${e}, ${Math.round(s[1] * 100)}%, ${Math.round(s[2] * 100)}%, ${a / 100})`;
      }
      case "hsv":
        return `hsva(${e}, ${Math.round(t)}%, ${Math.round(n)}%, ${a / 100})`;
      default: {
        const { r: s, g: o, b: i } = ba(e, t, n);
        return `rgba(${s}, ${o}, ${i}, ${a / 100})`;
      }
    }
    switch (l) {
      case "hsl": {
        const s = ti(e, t / 100, n / 100);
        return `hsl(${e}, ${Math.round(s[1] * 100)}%, ${Math.round(s[2] * 100)}%)`;
      }
      case "hsv":
        return `hsv(${e}, ${Math.round(t)}%, ${Math.round(n)}%)`;
      case "rgb": {
        const { r: s, g: o, b: i } = ba(e, t, n);
        return `rgb(${s}, ${o}, ${i})`;
      }
      default:
        return vC(ba(e, t, n));
    }
  }
}, DC = [
  "#000000",
  "#FFFFFF",
  "#FF0000",
  "#FF3300",
  "#FF6600",
  "#FF9900",
  "#FFFF00",
  "#99FF00",
  "#00FF00",
  "#00FFFF",
  "#0000FF",
  "#6600FF",
  "#FF00FF",
  "#FF0066",
  "#444444",
  "#333333",
  "#5495F6",
  "#F5222D",
  "#26BE76",
  "#FFBF00"
], wa = !1, Et = {
  start: ["touchstart", "mousedown"],
  move: ["touchmove", "mousemove"],
  end: [
    "touchend",
    "touchcancel",
    "mouseup"
  ]
}, Zr = {
  capture: !0,
  passive: !1
}, Jr = (e) => {
  const t = e, n = t.touches?.[0] || t.changedTouches?.[0];
  return n ? (e.cancelable && e.preventDefault(), {
    ...e,
    clientX: n.clientX,
    clientY: n.clientY,
    originalEvent: e
  }) : e;
}, zn = (e, t) => {
  if (It) return;
  const n = () => typeof e == "function" ? e() : e, a = (s) => {
    t.drag?.(Jr(s));
  }, r = (s) => {
    Et.move.forEach((o) => {
      document.removeEventListener(o, a, Zr);
    }), Et.end.forEach((o) => {
      document.removeEventListener(o, r);
    }), document.onselectstart = null, document.ondragstart = null, wa = !1, t.end?.(Jr(s));
  }, l = (s) => {
    wa || (document.onselectstart = () => !1, document.ondragstart = () => !1, Et.move.forEach((o) => {
      document.addEventListener(o, a, Zr);
    }), Et.end.forEach((o) => {
      document.addEventListener(o, r);
    }), wa = !0, t.start?.(Jr(s)));
  };
  te(() => {
    const s = n();
    s && Et.start.forEach((o) => {
      s.addEventListener(o, l);
    });
  }), _e(() => {
    const s = n();
    s && Et.start.forEach((o) => {
      s.removeEventListener(o, l);
    }), Et.move.forEach((o) => {
      document.removeEventListener(o, a, Zr);
    }), Et.end.forEach((o) => {
      document.removeEventListener(o, r);
    }), document.onselectstart = null, document.ondragstart = null, wa = !1;
  });
}, CC = "vc-color-picker-panel", ri = (e) => {
  const t = e.getBoundingClientRect();
  return {
    x: t.x,
    y: t.y,
    top: t.top,
    right: t.right,
    bottom: t.bottom,
    left: t.left,
    width: t.width || e.clientWidth,
    height: t.height || e.clientHeight
  };
}, bC = /* @__PURE__ */ H({
  name: CC,
  props: { color: {
    type: Object,
    required: !0
  } },
  setup(e) {
    const t = E(), n = E("hsl(0, 100%, 50%)"), a = E(0), r = E(0), l = _(() => ({
      hue: e.color.states.hue,
      saturation: e.color.states.saturation,
      value: e.color.states.value
    })), s = () => {
      if (!t.value) return;
      const i = e.color.states.saturation, u = e.color.states.value, { width: c, height: d } = ri(t.value);
      r.value = c ? i * c / 100 : 0, a.value = d ? (100 - u) * d / 100 : 0, n.value = `hsl(${e.color.states.hue}, 100%, 50%)`;
    }, o = (i) => {
      if (!t.value) return;
      const u = ri(t.value);
      if (!u.width || !u.height) return;
      let c = i.clientX - u.left, d = i.clientY - u.top;
      c = Math.max(0, Math.min(c, u.width)), d = Math.max(0, Math.min(d, u.height)), r.value = c, a.value = d, e.color.states.saturation = c / u.width * 100, e.color.states.value = 100 - d / u.height * 100;
    };
    return zn(() => t.value, {
      start: o,
      drag: o,
      end: o
    }), te(() => {
      fe(s);
    }), $(l, s), () => m("div", {
      ref: t,
      style: { background: n.value },
      class: "vc-color-picker-panel"
    }, [
      m("div", { class: "vc-color-picker-panel__white" }, null),
      m("div", { class: "vc-color-picker-panel__black" }, null),
      m("div", {
        style: {
          top: `${a.value}px`,
          left: `${r.value}px`
        },
        class: "vc-color-picker-panel__cursor"
      }, [m("div", null, null)])
    ]);
  }
}), wC = "vc-color-picker-hue-slider", FC = (e) => e.getBoundingClientRect().width || e.clientWidth || e.offsetWidth, kC = /* @__PURE__ */ H({
  name: wC,
  props: { color: {
    type: Object,
    required: !0
  } },
  setup(e) {
    const t = E(), n = E(), a = E(), r = E(0), l = (i) => {
      if (!t.value) return;
      const u = t.value.getBoundingClientRect(), c = u.width || t.value.clientWidth || t.value.offsetWidth;
      if (!c) return;
      let d = i.clientX - u.left;
      d = Math.min(d, c), d = Math.max(d, 0), e.color.states.hue = Math.round(d / c * 360);
    }, s = () => {
      if (!t.value) return;
      const i = FC(t.value), u = a.value?.offsetWidth || 0, c = e.color.states.hue;
      r.value = i ? Math.round(c * (i - u / 2) / 360) : 0;
    }, o = {
      start: l,
      drag: l,
      end: l
    };
    return zn(() => n.value, o), zn(() => a.value, o), te(() => {
      fe(s);
    }), $(() => e.color.states.hue, s), () => m("div", {
      ref: t,
      class: "vc-color-picker-hue-slider"
    }, [m("div", {
      ref: n,
      class: "vc-color-picker-hue-slider__bar"
    }, null), m("div", {
      ref: a,
      style: {
        top: 0,
        left: `${r.value}px`
      },
      class: "vc-color-picker-hue-slider__thumb"
    }, null)]);
  }
}), EC = "vc-color-picker-alpha", BC = (e) => e.getBoundingClientRect().width || e.clientWidth || e.offsetWidth, xC = /* @__PURE__ */ H({
  name: EC,
  props: { color: {
    type: Object,
    required: !0
  } },
  setup(e) {
    const t = E(), n = E(), a = E(), r = E(""), l = E(0), s = (c) => {
      const d = t.value;
      if (!d) return;
      const g = d.getBoundingClientRect(), h = g.width || d.clientWidth || d.offsetWidth;
      if (!h) return;
      let f = c.clientX - g.left;
      f = Math.min(f, h), f = Math.max(f, 0), e.color.states.alpha = Math.round(f / h * 100);
    }, o = () => {
      const { r: c, g: d, b: g } = e.color.toRgb();
      return `linear-gradient(to right, rgba(${c}, ${d}, ${g}, 0) 0%, rgba(${c}, ${d}, ${g}, 1) 100%)`;
    }, i = () => {
      const c = t.value;
      if (!c) return;
      const d = BC(c), g = a.value?.offsetWidth || 0, h = e.color.states.alpha;
      l.value = d ? Math.round(h / 100 * (d - g)) : 0, r.value = o();
    }, u = {
      start: s,
      drag: s,
      end: s
    };
    return zn(() => n.value, u), zn(() => a.value, u), te(() => {
      fe(i);
    }), $(() => [e.color.states.alpha, e.color.states.output], i), () => m("div", {
      ref: t,
      class: "vc-color-picker-alpha"
    }, [m("div", {
      ref: n,
      style: { background: r.value },
      class: "vc-color-picker-alpha__bar"
    }, null), m("div", {
      ref: a,
      style: {
        top: 0,
        left: `${l.value}px`
      },
      class: "vc-color-picker-alpha__thumb"
    }, null)]);
  }
}), _C = "vc-color-picker-predefine", SC = (e, t) => e.map((n) => {
  const a = new Jn({
    enableAlpha: !0,
    format: "rgb",
    value: n
  });
  return a.states.selected = a.compare(t), a;
}), li = /* @__PURE__ */ H({
  name: _C,
  props: {
    colors: {
      type: Array,
      default: () => []
    },
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = E([]), n = () => {
      t.value = SC(e.colors, e.color);
    }, a = (r) => {
      e.color.setColor(e.colors[r]);
    };
    return Id(n), $(() => e.colors, n), $(() => e.color.states.output, n), () => m("div", { class: "vc-color-picker-predefine" }, [t.value.map((r, l) => m("div", {
      key: `${r.states.output}-${l}`,
      class: ["vc-color-picker-predefine__block", {
        "is-selected": r.states.selected,
        "is-alpha": r.states.alpha < 100
      }],
      onClick: () => a(l)
    }, [m("div", { style: { backgroundColor: r.states.output } }, null)]))]);
  }
}), si = /* @__PURE__ */ H({
  name: "vc-color-picker-view",
  props: Fc,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = E([...DC]), a = new Jn({
      enableAlpha: e.alpha,
      format: e.format,
      value: e.modelValue
    }), r = () => {
      t("update:modelValue", a.states.output, a), t("change", a.states.output, a);
    };
    return $(() => e.modelValue, (l) => {
      l !== a.states.output && a.setColor(l);
    }), $(() => [e.alpha, e.format], ([l, s]) => {
      a.setOptions({
        enableAlpha: l,
        format: s
      });
    }), $(() => a.states.output, r), () => m(vt, null, [
      e.panel && m(bC, { color: a }, null),
      e.hue && m(kC, { color: a }, null),
      e.alpha && m(xC, { color: a }, null),
      e.colors.length > 0 && m(li, {
        colors: e.colors,
        color: a
      }, null),
      !e.colors.length && e.recommend && m(li, {
        colors: n.value,
        color: a
      }, null)
    ]);
  }
}), IC = "vc-color-picker", MC = (e, t) => {
  if (!(e instanceof Jn)) throw new ye("color-picker", "color should be instance of Color Class");
  const { r: n, g: a, b: r } = e.toRgb();
  return t ? `rgba(${n}, ${a}, ${r}, ${e.states.alpha / 100})` : `rgb(${n}, ${a}, ${r})`;
};
Object.assign(/* @__PURE__ */ H({
  name: IC,
  props: AC,
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "change",
    "ready",
    "close",
    "visible-change",
    "color-change"
  ],
  setup(e, { emit: t }) {
    const n = kt({ merge: !1 }), a = Ae("vc-form-item", {}), r = E(!1), l = E(""), s = E(""), o = E("transparent"), i = _(() => ({
      [`is-${e.size}`]: !0,
      "is-disabled": e.disabled
    })), u = _(() => r.value ? "up" : "down"), c = () => new Jn({
      enableAlpha: e.alpha,
      format: e.format
    }).states.output;
    $(() => e.modelValue, (b) => {
      s.value = b || "", o.value = b || "transparent";
    }, { immediate: !0 }), $(() => s.value, (b) => {
      l.value = b || "";
    }, { immediate: !0 });
    const d = (b) => {
      t("update:modelValue", b), t("change", b), a?.change?.(b), r.value = !1;
    }, g = (b, C) => {
      l.value = b, o.value = MC(C, e.alpha), r.value && t("color-change", b);
    }, h = () => {
      s.value = e.modelValue || "", o.value = e.modelValue || "transparent";
    }, f = () => {
      s.value = l.value;
    }, p = () => {
      d("");
    }, A = () => {
      d(l.value || s.value || c());
    }, v = (b) => {
      r.value = b, t("visible-change", b);
    };
    return () => m(Cn, De(n.value.attrs, {
      modelValue: r.value,
      trigger: e.trigger,
      arrow: e.arrow,
      portalClass: [
        "is-padding-none",
        "vc-color-picker-wrapper",
        e.portalClass
      ],
      disabled: e.disabled,
      tag: "div",
      class: [
        "vc-color-picker",
        i.value,
        n.value.class
      ],
      style: n.value.style,
      animation: "y",
      onReady: () => t("ready"),
      onClose: () => {
        h(), t("close");
      },
      onVisibleChange: v,
      "onUpdate:modelValue": (b) => r.value = b
    }), {
      default: () => m(mn, {
        disabled: e.disabled,
        allowDispatch: !1,
        class: ["vc-color-picker__box", { "is-focus": r.value }]
      }, {
        content: () => m("div", null, [m("input", {
          value: e.modelValue,
          type: "hidden"
        }, null), m("div", { class: "vc-color-picker__input" }, [m("div", { class: "vc-color-picker__color" }, [e.modelValue === "" ? m("div", null, [m(ee, { type: "close" }, null)]) : m("div", { style: { backgroundColor: o.value } }, null)])])]),
        append: () => m("div", { class: "vc-color-picker__append" }, [m(ee, { type: u.value }, null)])
      }),
      content: () => m("div", { class: "vc-color-picker__picker" }, [m("div", { class: "vc-color-picker__wrapper" }, [m(si, {
        modelValue: s.value,
        colors: e.colors,
        hue: e.hue,
        alpha: e.alpha,
        panel: e.panel,
        recommend: e.recommend,
        format: e.format,
        onChange: g
      }, null)]), m("div", { class: "vc-color-picker__confirm" }, [
        m("span", { class: "vc-color-picker__value" }, [e.editable ? m(mn, {
          modelValue: l.value,
          allowDispatch: !1,
          onInput: (b) => l.value = b,
          onBlur: f,
          onEnter: f
        }, null) : s.value]),
        m(je, {
          size: "small",
          class: "vc-btn is-default",
          onClick: p
        }, { default: () => [Yn("清空")] }),
        m(je, {
          type: "primary",
          size: "small",
          class: "vc-btn",
          onClick: A
        }, { default: () => [Yn("确定")] })
      ])])
    });
  }
}), {
  View: si,
  Color: Jn
});
var NC = {
  type: {
    type: String,
    default: "date",
    validator: (e) => /(year|month|quarter|date|daterange|datetime|datetimerange|quarterrange|monthrange)/.test(e)
  },
  disabledDate: Function,
  shortcuts: Array,
  timePickerOptions: {
    type: Object,
    default: () => ({})
  }
}, TC = ["id", "disabled"], OC = {
  ...be(tr, ["portal", "portalClass"]),
  ...be(an, TC),
  type: String,
  placeholder: String,
  clearable: {
    type: Boolean,
    default: !0
  },
  modelValue: [
    Date,
    Array,
    String
  ],
  multiple: Boolean,
  open: Boolean,
  trigger: {
    type: String,
    default: "click"
  },
  tag: {
    type: String,
    default: "div"
  },
  placement: {
    type: String,
    default: "bottom-left"
  },
  arrow: {
    type: Boolean,
    default: !1
  },
  confirm: {
    type: Boolean,
    default: !1
  },
  format: String,
  separator: {
    type: String,
    default: " - "
  },
  startDate: { type: Date },
  splitPanels: {
    type: Boolean,
    default: !0
  },
  steps: {
    type: Array,
    default: () => []
  },
  changeOnSelect: {
    type: Boolean,
    default: !1
  },
  nullValue: {
    type: [
      Number,
      String,
      Object
    ],
    default: ""
  }
}, oi = [
  "日",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六"
], zt = {
  date: "YYYY-MM-DD",
  month: "YYYY-MM",
  year: "YYYY",
  datetime: "YYYY-MM-DD HH:mm:ss",
  time: "HH:mm:ss",
  timerange: "HH:mm:ss",
  monthrange: "YYYY-MM",
  daterange: "YYYY-MM-DD",
  datetimerange: "YYYY-MM-DD HH:mm:ss"
}, kc = {
  1: "一",
  2: "二",
  3: "三",
  4: "四"
}, ii = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, Vt = /\d\d?/, RC = /\d{3}/, PC = /\d{4}/, Fa = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, YC = class {
  i18n;
  masks;
  format;
  formatFlags;
  parse;
  parseFlags;
  constructor() {
    this._createI18n(), this._createMasks(), this._createFormat(), this._createParse();
  }
  _createI18n() {
    const e = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ], t = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ], n = this.shorten(t, 3), a = this.shorten(e, 3);
    this.i18n = {
      dayNamesShort: a,
      dayNames: e,
      monthNamesShort: n,
      monthNames: t,
      amPm: ["am", "pm"],
      DoFn: (r) => r + [
        "th",
        "st",
        "nd",
        "rd"
      ][r % 10 > 3 ? 0 : (r - +(r % 10 !== 10)) * r % 10]
    };
  }
  _createMasks() {
    this.masks = {
      default: "ddd MMM dd YYYY HH:mm:ss",
      shortDate: "M/D/YY",
      mediumDate: "MMM d, YYYY",
      longDate: "MMMM d, YYYY",
      fullDate: "dddd, MMMM d, YYYY",
      shortTime: "HH:mm",
      mediumTime: "HH:mm:ss",
      longTime: "HH:mm:ss.SSS"
    };
  }
  _createFormat() {
    this._initFormatFlags(), this.format = (e, t, n) => {
      const a = n || this.i18n;
      if (typeof e == "number" && (e = new Date(e)), Object.prototype.toString.call(e) !== "[object Date]" || isNaN(e.getTime())) throw new Error("Invalid Date in fecha.format");
      return t = this.masks[t] || t || this.masks.default, t.replace(ii, (r) => r in this.formatFlags ? this.formatFlags[r](e, a) : r.slice(1, r.length - 1));
    };
  }
  _createParse() {
    this._initParseFlags(), this.parse = (e, t, n) => {
      const a = n || this.i18n;
      if (typeof t != "string") throw new Error("Invalid format in this.parse");
      if (t = this.masks[t] || t, e.length > 1e3) return !1;
      let r = !0;
      const l = {};
      if (t.replace(ii, (i) => {
        if (this.parseFlags[i]) {
          const u = this.parseFlags[i], c = e.search(u[0]);
          ~c ? e.replace(u[0], (d) => (u[1](l, d, a), e = e.substr(c + d.length), d)) : r = !1;
        }
        return this.parseFlags[i] ? "" : i.slice(1, i.length - 1);
      }), !r) return !1;
      const s = /* @__PURE__ */ new Date();
      l.isPm === !0 && l.hour != null && +l.hour != 12 ? l.hour = +l.hour + 12 : l.isPm === !1 && +l.hour == 12 && (l.hour = 0);
      let o;
      return l.timezoneOffset != null ? (l.minute = +(l.minute || 0) - +l.timezoneOffset, o = new Date(Date.UTC(l.year || s.getFullYear(), l.month || 0, l.day || 1, l.hour || 0, l.minute || 0, l.second || 0, l.millisecond || 0))) : o = new Date(l.year || s.getFullYear(), l.month || 0, l.day || 1, l.hour || 0, l.minute || 0, l.second || 0, l.millisecond || 0), o;
    };
  }
  _initFormatFlags() {
    this.formatFlags = {
      Do: (e, t) => t.DoFn(e.getDate()),
      D: (e) => e.getDate(),
      DD: (e) => this.pad(e.getDate()),
      DDD: (e, t) => t.dayNamesShort[e.getDay()],
      DDDD: (e, t) => t.dayNames[e.getDay()],
      M: (e) => e.getMonth() + 1,
      MM: (e) => this.pad(e.getMonth() + 1),
      MMM: (e, t) => t.monthNamesShort[e.getMonth()],
      MMMM: (e, t) => t.monthNames[e.getMonth()],
      YY: (e) => String(e.getFullYear()).substr(2),
      YYYY: (e) => e.getFullYear(),
      h: (e) => e.getHours() % 12 || 12,
      hh: (e) => this.pad(e.getHours() % 12 || 12),
      H: (e) => e.getHours(),
      HH: (e) => this.pad(e.getHours()),
      m: (e) => e.getMinutes(),
      mm: (e) => this.pad(e.getMinutes()),
      s: (e) => e.getSeconds(),
      ss: (e) => this.pad(e.getSeconds()),
      S: (e) => Math.round(e.getMilliseconds() / 100),
      SS: (e) => this.pad(Math.round(e.getMilliseconds() / 10), 2),
      SSS: (e) => this.pad(e.getMilliseconds(), 3),
      a: (e, t) => e.getHours() < 12 ? t.amPm[0] : t.amPm[1],
      A: (e, t) => e.getHours() < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase(),
      ZZ: (e) => {
        const t = e.getTimezoneOffset();
        return (t > 0 ? "-" : "+") + this.pad(Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60, 4);
      }
    };
  }
  _initParseFlags() {
    this.parseFlags = {
      d: [Vt, (e, t) => {
        e.day = t;
      }],
      M: [Vt, (e, t) => {
        e.month = t - 1;
      }],
      YY: [Vt, (e, t) => {
        const n = +("" + (/* @__PURE__ */ new Date()).getFullYear()).substr(0, 2);
        e.year = "" + (t > 68 ? n - 1 : n) + t;
      }],
      h: [Vt, (e, t) => {
        e.hour = t;
      }],
      m: [Vt, (e, t) => {
        e.minute = t;
      }],
      s: [Vt, (e, t) => {
        e.second = t;
      }],
      YYYY: [PC, (e, t) => {
        e.year = t;
      }],
      S: [/\d/, (e, t) => {
        e.millisecond = t * 100;
      }],
      SS: [/\d{2}/, (e, t) => {
        e.millisecond = t * 10;
      }],
      SSS: [RC, (e, t) => {
        e.millisecond = t;
      }],
      D: [Vt, this.noop],
      ddd: [Fa, this.noop],
      MMM: [Fa, this.monthUpdate("monthNamesShort")],
      MMMM: [Fa, this.monthUpdate("monthNames")],
      a: [Fa, (e, t, n) => {
        const a = t.toLowerCase();
        a === n.amPm[0] ? e.isPm = !1 : a === n.amPm[1] && (e.isPm = !0);
      }],
      ZZ: [/[\+\-]\d\d:?\d\d/, (e, t) => {
        let n = (t + "").match(/([\+\-]|\d\d)/gi), a;
        n && (a = +(n[1] * 60) + parseInt(n[2], 10), e.timezoneOffset = n[0] === "+" ? a : -a);
      }]
    }, this.parseFlags.DD = this.parseFlags.d, this.parseFlags.dddd = this.parseFlags.ddd, this.parseFlags.Do = this.parseFlags.dd = this.parseFlags.d, this.parseFlags.mm = this.parseFlags.m, this.parseFlags.hh = this.parseFlags.H = this.parseFlags.HH = this.parseFlags.h, this.parseFlags.MM = this.parseFlags.M, this.parseFlags.ss = this.parseFlags.s, this.parseFlags.A = this.parseFlags.a;
  }
  noop() {
  }
  shorten(e, t) {
    const n = [];
    for (let a = 0, r = e.length; a < r; a++) n.push(e[a].substr(0, t));
    return n;
  }
  monthUpdate(e) {
    return (t, n, a) => {
      const r = a[e].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());
      ~r && (t.month = r);
    };
  }
  pad(e, t) {
    for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
    return e;
  }
}, Ec = new YC(), HC = (e) => [
  4,
  6,
  9,
  11
].indexOf(e) > -1, WC = (e) => e % 400 === 0 || e % 100 !== 0 && e % 4 === 0, os = (e, t) => (t = Number(t), HC(t) ? 30 : t === 2 ? WC(e) ? 29 : 28 : 31), $C = (e) => (e = new Date(e), isNaN(e.getTime()) ? null : e), dn = (e, t) => (e = $C(e), e ? Ec.format(e, t || "YYYY-MM-DD") : ""), Wa = (e, t) => e instanceof Date ? e : Ec.parse(e, t || "YYYY-MM-DD"), Lt = (e, t) => dn(e, t), Qt = (e, t) => Wa(e, t), Bt = (e, t, n) => Array.isArray(e) && e.length === 2 && e[0] && e[1] ? dn(e[0], t) + n + dn(e[1], t) : !Array.isArray(e) && e instanceof Date ? dn(e, t) : "", ka = (e, t, n) => {
  const a = Array.isArray(e) ? e : e.split(n), r = a[0], l = a[1];
  return a.length === 2 && r && l ? [r instanceof Date ? r : Wa(r, t), l instanceof Date ? l : Wa(l, t)] : [];
}, Le = {
  default: {
    formatter(e) {
      return e ? "" + e : "";
    },
    parser(e) {
      return e === void 0 || e === "" ? null : e;
    }
  },
  date: {
    formatter: Lt,
    parser: Qt
  },
  datetime: {
    formatter: Lt,
    parser: Qt
  },
  daterange: {
    formatterText: Bt,
    formatter: (e, t, n) => {
      const a = Bt(e, t, n);
      return a ? a.split(n) : [];
    },
    parser: ka
  },
  datetimerange: {
    formatterText: Bt,
    formatter: (e, t, n) => {
      const a = Bt(e, t, n);
      return a ? a.split(n) : [];
    },
    parser: ka
  },
  timerange: {
    formatterText: Bt,
    formatter: (e, t, n) => {
      const a = Bt(e, t, n);
      return a ? a.split(n) : [];
    },
    parser: ka
  },
  time: {
    formatter: Lt,
    parser: Qt
  },
  month: {
    formatter: Lt,
    parser: (e, t) => [Qt(e, t)]
  },
  monthrange: {
    formatterText: Bt,
    formatter: (e, t, n) => {
      const a = Bt(e, t, n);
      return a ? a.split(n) : [];
    },
    parser: ka
  },
  year: {
    formatter: Lt,
    parser: (e, t) => [Qt(e, t)]
  },
  quarter: {
    formatterText: (e) => {
      const [t, n] = e;
      if (t && n) {
        const a = t.getFullYear(), r = t.getMonth(), l = n.getMonth();
        if (r === 0 && l === 2) return `${a}年第一季度`;
        if (r === 3 && l === 5) return `${a}年第二季度`;
        if (r === 6 && l === 8) return `${a}年第三季度`;
        if (r === 9 && l === 11) return `${a}年第四季度`;
      }
    },
    formatter: (e = [], t) => e.map((n) => Lt(n, t)),
    parser: (e, t) => e.map((n) => Qt(n, t))
  },
  quarterrange: {
    formatterText: (e, t, n) => {
      const a = {
        0: "第一季度",
        3: "第二季度",
        6: "第三季度",
        9: "第四季度"
      }, r = {
        2: "第一季度",
        5: "第二季度",
        8: "第三季度",
        11: "第四季度"
      }, [l, s] = e;
      if (l && s) {
        const o = l.getFullYear(), i = l.getMonth(), u = s.getFullYear(), c = s.getMonth();
        return `${o}年${a[i]}${n}${u}年${r[c]}`;
      }
    },
    formatter: (e = [], t) => e.map((n) => Lt(n, t)),
    parser: (e, t) => e.map((n) => Qt(n, t))
  },
  multiple: {
    formatterText: (e, t) => e.filter(Boolean).map((n) => dn(n, t)).join(","),
    formatter: (e, t) => e.filter(Boolean).map((n) => dn(n, t)),
    parser: (e, t) => (typeof e == "string" ? e.split(",") : e).map((n) => n instanceof Date ? n : (typeof n == "string" ? n = n.trim() : typeof n != "number" && !n && (n = ""), Wa(n, t)))
  },
  number: {
    formatter(e) {
      return e ? "" + e : "";
    },
    parser(e) {
      const t = Number(e);
      return isNaN(e) ? null : t;
    }
  }
}, pt = (e) => Array.isArray(e) ? e : e ? [e] : [], Xn = (e) => e instanceof Array ? e.length > 0 ? e.every((t) => !t) : !0 : e === 0 || e === "" || e === void 0 || e === null || e.length === 0, Bc = (e) => {
  const t = e.getMonth() + 1;
  if (t <= 3) return "1";
  if (t <= 6) return "2";
  if (t <= 9) return "3";
  if (t <= 12) return "4";
}, VC = () => {
  const e = z(), { emit: t } = e, n = e.props, a = E(!1), r = E(!1), l = E([]), s = E(), o = Ae("vc-form-item", {}), i = kt({ merge: !1 }), u = (k) => {
    const w = zt[n.type];
    if (n.multiple) {
      const M = Le.multiple.formatterText;
      return M(k, n.format || w);
    } else {
      const { formatter: M, formatterText: F } = Le[n.type] || Le.default;
      return (F || M)(k, n.format || w, n.separator);
    }
  }, c = _(() => {
    const k = n.multiple ? l.value.length > 0 : !Xn(l.value), w = n.clearable && !n.disabled && a.value;
    return k && w;
  }), d = _(() => n.confirm || n.type === "datetime" || n.type === "datetimerange" || n.multiple), g = _(() => u(l.value)), h = _(() => ["datetime", "datetimerange"].includes(n.type)), f = _(() => n.type.includes("range")), p = _(() => ["quarter"].includes(n.type)), A = _(() => ["time", "timerange"].includes(n.type)), v = _(() => ({
    "is-disabled": n.disabled,
    "vc-time-picker": A.value
  })), b = (k) => {
    const w = zt[n.type];
    if (n.multiple) {
      const M = Le.multiple.formatter;
      return M(k, n.format || w);
    } else {
      const { formatter: M } = Le[n.type] || Le.default;
      return M(k, n.format || w, n.separator);
    }
  }, C = (k) => {
    const w = zt[n.type];
    if (n.multiple) {
      const M = Le.multiple.parser;
      return M(k, n.format || w);
    } else {
      const { parser: M } = Le[n.type] || Le.default;
      return M(k, n.format || w, n.separator);
    }
  }, D = (k) => Xn(k) ? [] : C(k), B = (k) => {
    l.value = pt(k);
  }, y = (k, w) => {
    const M = b(f.value || p.value ? w : w[0]) || n.nullValue;
    return t("update:modelValue", M), k = typeof k == "string" ? [k] : k, k.forEach((F) => {
      t(F, M, B);
    }), o?.change?.(), M;
  }, x = (k, w, M) => {
    try {
      const F = k && k(M);
      F && F.then() ? F.then(() => {
        w();
      }).catch(() => {
      }) : w();
    } catch (F) {
      t("error", F);
    }
  }, S = (k, w) => {
    s.value = k[0] || w || /* @__PURE__ */ new Date(), (!d.value && !A.value || n.changeOnSelect) && setTimeout(() => {
      r.value = !1;
    }, 100), l.value = k, (!d.value || n.changeOnSelect) && y("change", k);
  }, I = () => {
    const k = () => {
      r.value = !1, l.value = [], t("clear", y("change", []));
    };
    x(e.vnode.props?.onBeforeClear, k);
  }, P = (k) => {
    c.value && (k.stopPropagation(), I());
  }, W = (k) => {
    const w = () => {
      r.value = !1, y(["change", "ok"], k);
    };
    x(e.vnode.props?.onBeforeOk, w, k);
  }, O = () => {
    const k = D(n.modelValue), w = n.modelValue;
    !Rt(l.value, k) && w && (l.value = pt(k)), t("close");
  };
  return $(() => n.modelValue, (k) => {
    k = D(k), s.value = k?.[0] || n.startDate || /* @__PURE__ */ new Date(), l.value = pt(k);
  }, { immediate: !0 }), $(() => n.open, (k) => {
    r.value = k;
  }, { immediate: !0 }), {
    its: i,
    isHover: a,
    isActive: r,
    currentValue: l,
    focusedDate: s,
    showClear: c,
    classes: v,
    isConfirm: d,
    visibleValue: g,
    showTime: h,
    isRange: f,
    isQuarter: p,
    isTime: A,
    handleIconClick: P,
    handlePick: S,
    handleClear: I,
    handleOK: W,
    handleClose: O
  };
}, xc = (e, t, n) => /* @__PURE__ */ H({
  name: e,
  props: Object.assign({}, OC, t),
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "change",
    "clear",
    "error",
    "close",
    "input",
    "ready",
    "visible-change",
    "ok"
  ],
  setup(a, { slots: r, emit: l }) {
    const { its: s, isHover: o, isActive: i, currentValue: u, focusedDate: c, showClear: d, classes: g, isConfirm: h, visibleValue: f, showTime: p, handleIconClick: A, handlePick: v, handleClear: b, handleOK: C, handleClose: D } = VC(), { icon: B, panel: y, panelOptions: x } = n();
    return () => m(Cn, De({ modelValue: i.value }, s.value.attrs, {
      arrow: a.arrow,
      trigger: a.trigger,
      tag: a.tag,
      placement: a.placement,
      autoWidth: !0,
      disabled: a.disabled,
      portalClass: [
        "is-padding-none",
        "vc-date-picker--portal",
        a.portalClass
      ],
      class: [
        g.value,
        s.value.class,
        "vc-date-picker"
      ],
      style: s.value.style,
      animation: "y",
      onMouseenter: () => o.value = !0,
      onMouseleave: () => o.value = !1,
      onReady: () => l("ready"),
      onClose: D,
      onVisibleChange: () => l("visible-change", i.value),
      "onUpdate:modelValue": (S) => i.value = S
    }), {
      default: r.default ? r.default : () => m(mn, {
        id: a.id,
        disabled: a.disabled,
        modelValue: f.value,
        allowDispatch: !1,
        class: "vc-date-picker__input",
        readonly: !0,
        placeholder: a.placeholder || "请选择"
      }, { append: () => m("div", { class: [{ "is-clear": d.value }, "vc-date-picker__append"] }, [m(ee, {
        type: d.value ? "clear" : B.value,
        onClick: A
      }, null)]) }),
      content: () => ke(y.value, {
        key: a.type,
        type: a.type,
        value: u.value,
        confirm: h.value,
        startDate: a.startDate,
        focusedDate: c.value,
        splitPanels: a.splitPanels,
        showTime: p.value,
        format: a.format,
        steps: a.steps,
        multiple: a.multiple,
        ...x.value,
        onPick: v,
        onClear: b,
        onOk: C
      })
    });
  }
}), LC = (e, t, n, a) => new Date(t, n, a, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), QC = (e) => {
  const t = new Date(e.getTime());
  t.setDate(1);
  let n = t.getDay();
  return n = n === 0 ? 7 : n, n;
}, lt = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()), Ne = (e) => typeof e == "number" || typeof e == "string" ? lt(new Date(e)).getTime() : e instanceof Date ? lt(e).getTime() : NaN, $a = (e, t) => t === 3 || t === 5 || t === 8 || t === 10 ? 30 : t === 1 ? e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 29 : 28 : 31, Ce = (e, t, n) => LC(e, t, n, Math.min(e.getDate(), $a(t, n))), ui = (e, t = 1) => new Date(e.getFullYear(), e.getMonth(), e.getDate() - t), ci = (e, t = 1) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t), KC = (e, t) => {
  const n = new Date(e, t, 1), a = n.getDay();
  return a === 0 ? ui(n, 7) : ui(n, a);
}, In = (e) => {
  const t = e.getFullYear(), n = e.getMonth();
  return n === 0 ? Ce(e, t - 1, 11) : Ce(e, t, n - 1);
}, jt = (e) => {
  const t = e.getFullYear(), n = e.getMonth();
  return n === 11 ? Ce(e, t + 1, 0) : Ce(e, t, n + 1);
}, Mt = (e, t = 1) => {
  const n = e.getFullYear(), a = e.getMonth();
  return Ce(e, n - t, a);
}, He = (e, t = 1) => {
  const n = e.getFullYear(), a = e.getMonth();
  return Ce(e, n + t, a);
}, Te = (e, t = {}) => {
  const n = e.getFullYear(), a = e.getMonth(), r = e.getDate(), l = t.hours >= 0 ? t.hours : e.getHours(), s = t.minutes >= 0 ? t.minutes : e.getMinutes(), o = t.seconds >= 0 ? t.seconds : e.getSeconds();
  return new Date(n, a, r, l, s, o);
}, nr = {
  value: Array,
  format: String,
  disabledDate: {
    type: Function,
    default: () => !1
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  startDate: Date,
  focusedDate: [Date, Array],
  showTime: {
    type: Boolean,
    default: !1
  },
  timePickerOptions: {
    type: Object,
    default: () => ({})
  }
}, zr = (e) => {
  let t;
  switch (e) {
    case "date":
      t = "time";
      break;
    case "month":
    case "year":
    case "daterange":
      t = "timerange";
      break;
    case "time":
      t = "date";
      break;
    case "timerange":
      t = "daterange";
      break;
  }
  return t;
}, bn = /* @__PURE__ */ H({
  name: "vc-date-confirm",
  props: {
    showTime: {
      type: Boolean,
      default: !1
    },
    currentView: {
      type: [String, Array],
      default: "date"
    }
  },
  setup(e, { emit: t }) {
    const n = _(() => Array.isArray(e.currentView) ? e.currentView.every((s) => s.includes("time")) ? "选择日期" : "选择时间" : e.currentView.includes("date") ? "选择时间" : "选择日期"), a = () => {
      let s;
      Array.isArray(e.currentView) ? s = [zr(e.currentView[0]), zr(e.currentView[1])] : s = zr(e.currentView), t("toggle-time", s);
    }, r = (s) => {
      t("ok", s);
    }, l = (s) => {
      t("clear", s);
    };
    return () => m("div", { class: "vc-date-confirm" }, [
      e.showTime && m(je, {
        size: "small",
        type: "text",
        class: "vc-date-confirm__time",
        onClick: a
      }, { default: () => [n.value] }),
      m(je, {
        size: "small",
        onClick: l
      }, { default: () => [Yn("清空")] }),
      m(je, {
        size: "small",
        type: "primary",
        style: "margin-left: 5px",
        onClick: r
      }, { default: () => [Yn("确定")] })
    ]);
  }
}), Dt = /* @__PURE__ */ H({
  name: "vc-date-header",
  props: {
    panelDate: Date,
    showNext: {
      type: Boolean,
      default: !0
    },
    showPrev: {
      type: Boolean,
      default: !0
    },
    currentView: String,
    title: String
  },
  emits: ["change-current-view", "change"],
  setup(e, { emit: t }) {
    const n = _(() => e.panelDate.getFullYear() + "年"), a = _(() => et(e.panelDate.getMonth() + 1) + "月"), r = _(() => ["date", "daterange"].includes(e.currentView)), l = () => {
      t("change-current-view", "year");
    }, s = () => {
      t("change-current-view", "month");
    }, o = () => {
      t("change", In(e.panelDate), "prev-month");
    }, i = () => {
      const d = e.currentView === "year" ? 10 : 1;
      t("change", Mt(e.panelDate, d), "prev-year");
    }, u = () => {
      t("change", jt(e.panelDate), "next-month");
    }, c = () => {
      const d = e.currentView === "year" ? 10 : 1;
      t("change", He(e.panelDate, d), "next-year");
    };
    return () => m("div", { class: "vc-date-header" }, [e.currentView !== "timerange" ? m(vt, null, [
      e.showPrev && m(ee, {
        class: "vc-date-header__arrow is-prev is-prev-year",
        type: "d-arrow-left",
        onClick: i
      }, null),
      e.showPrev && r.value && m(ee, {
        class: "vc-date-header__arrow is-prev",
        type: "arrow-left",
        onClick: o
      }, null),
      m("span", {
        class: "vc-date-header__label",
        onClick: l
      }, [n.value]),
      r.value && m("span", {
        class: "vc-date-header__label",
        onClick: s
      }, [a.value]),
      e.showNext && m(ee, {
        class: "vc-date-header__arrow is-next is-next-year",
        type: "d-arrow-right",
        onClick: c
      }, null),
      e.showNext && r.value && m(ee, {
        class: "vc-date-header__arrow is-next",
        type: "arrow-right",
        onClick: u
      }, null)
    ]) : m("span", null, [e.title])]);
  }
}), xl = /* @__PURE__ */ H({
  name: "vc-date-table",
  props: {
    value: Array,
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: (e) => e >= 1 && e <= 7
    },
    disabledDate: Function,
    cellClassName: Function,
    panelDate: {
      type: Date,
      required: !0
    },
    focusedDate: {
      type: Date,
      required: !0
    },
    rangeState: {
      type: Object,
      default: () => ({
        from: null,
        to: null,
        selecting: !1,
        marker: null
      })
    }
  },
  emits: ["pick", "range-change"],
  setup(e, { emit: t }) {
    const n = E([
      [],
      [],
      [],
      [],
      [],
      []
    ]), a = _(() => {
      const f = e.firstDayOfWeek;
      return f > 3 ? 7 - f : -f;
    }), r = _(() => {
      const f = e.firstDayOfWeek;
      return oi.concat(oi).slice(f, f + 7);
    }), l = _(() => e.panelDate.getFullYear()), s = _(() => e.panelDate.getMonth()), o = _(() => KC(l.value, s.value)), i = _(() => {
      const f = QC(new Date(l.value, s.value, 1)), p = $a(l.value, s.value), A = $a(s.value === 0 ? l.value - 1 : l.value, s.value === 0 ? 11 : s.value - 1);
      let v = 1;
      const b = n.value, C = pt(e.value), D = pt(lt(e.focusedDate)), B = Ne(/* @__PURE__ */ new Date());
      for (let y = 0; y < 6; y++) {
        const x = n.value[y];
        for (let S = 0; S < 7; S++) {
          let I = x[S];
          I || (I = {
            row: y,
            column: S,
            type: "normal",
            inRange: !1,
            start: !1,
            end: !1
          }), I.type = "normal";
          const P = y * 7 + S, W = ci(o.value, P - a.value).getTime();
          if (I.inRange = W > Ne(e.rangeState.from) && W < Ne(e.rangeState.to), I.start = e.rangeState.from && W === Ne(e.rangeState.from), I.end = e.rangeState.to && W === Ne(e.rangeState.to), I.today = W === B, y >= 0 && y <= 1) {
            const k = f + a.value < 0 ? 7 + f + a.value : f + a.value;
            S + y * 7 >= k ? I.text = v++ : (I.text = A - (k - S % 7) + 1 + y * 7, I.type = "prev-month");
          } else v <= p ? I.text = v++ : (I.text = v++ - p, I.type = "next-month");
          const O = new Date(W);
          I.disabled = typeof e.disabledDate == "function" && e.disabledDate(O), I.customClass = typeof e.cellClassName == "function" && e.cellClassName(O), I.selected = C.some((k) => I.type === "normal" ? k && lt(k).getTime() === O.getTime() : !1), I.focused = D.some((k) => k.getTime() === O.getTime()), b[y][S] = I;
        }
      }
      return b;
    }), u = (f, p) => {
      const A = f * 7 + p - a.value;
      return ci(o.value, A);
    }, c = (f) => {
      let p = f.target;
      if (p.tagName === "SPAN" && (p = p.parentNode.parentNode), p.tagName === "DIV" && (p = p.parentNode), p.tagName !== "TD") return {};
      const A = p.parentNode.rowIndex - 1, v = p.cellIndex;
      return {
        cell: i.value[A][v],
        row: A,
        column: v
      };
    }, d = (f) => {
      const p = [];
      return p.push(`is-${f.type}`), f.today && p.push("is-today"), (f.selected || f.start || f.end) && f.type === "normal" && p.push("is-selected"), f.disabled && p.push("is-disabled"), f.focused && p.push("is-focused"), f.inRange && f.type === "normal" && p.push("is-range"), p.join(" ");
    }, g = (f) => {
      const { cell: p, row: A, column: v } = c(f);
      p && (p.disabled || p.type === "week" || t("pick", u(A, v), p));
    }, h = (f) => {
      const { cell: p, row: A, column: v } = c(f);
      p && (!e.rangeState.selecting || p.disabled || t("range-change", u(A, v), p));
    };
    return () => m("div", { class: "vc-date-table" }, [m("table", {
      cellspacing: "0",
      cellpadding: "0",
      class: "vc-date-table__wrapper",
      onClick: g,
      onMousemove: h
    }, [m("tbody", null, [m("tr", { class: "vc-date-table__header" }, [r.value.map((f, p) => m("th", { key: p }, [f]))]), i.value.map((f, p) => m("tr", {
      key: p,
      class: "vc-date-table__row"
    }, [f.map((A, v) => m("td", {
      key: v,
      class: [d(A), "vc-date-table__cell"]
    }, [m("div", null, [m("span", null, [A.text])])]))]))])])]);
  }
}), qn = /* @__PURE__ */ H({
  name: "vc-month-table",
  props: {
    value: Array,
    panelDate: Date,
    disabledDate: Function,
    cellClassName: Function,
    rangeState: {
      type: Object,
      default: () => ({
        from: null,
        to: null,
        selecting: !1,
        marker: null
      })
    }
  },
  emits: ["pick", "range-change"],
  setup(e, { emit: t }) {
    const n = (i, u) => {
      const c = os(i, u);
      for (let d = 1; d <= c; d++) {
        const g = new Date(i, u, d, 0, 0, 0), h = new Date(i, u, d, 23, 59, 59);
        if (e.disabledDate(g) || e.disabledDate(h)) return !0;
      }
      return !1;
    }, a = _(() => {
      const i = [
        [],
        [],
        [],
        []
      ], u = e.panelDate.getFullYear(), c = pt(e.value);
      for (let d = 0; d < 4; d++) for (let g = 0; g < 3; g++) {
        const h = {};
        h.month = d * 3 + g, h.date = new Date(u, h.month, 1);
        const f = Ne(h.date);
        h.inRange = f > Ne(e.rangeState.from) && f < Ne(e.rangeState.to), h.start = e.rangeState.from && f === Ne(e.rangeState.from), h.end = e.rangeState.to && f === Ne(e.rangeState.to), h.disabled = typeof e.disabledDate == "function" && n(u, h.month), h.customClass = typeof e.cellClassName == "function" && e.cellClassName(h.month), h.selected = c.some((p) => p && u === p.getFullYear() && h.month === p.getMonth()), i[d][g] = h;
      }
      return i;
    }), r = (i) => {
      let u = i.target;
      if (u.tagName === "SPAN" && (u = u.parentNode.parentNode), u.tagName === "DIV" && (u = u.parentNode), u.tagName !== "TD") return {};
      const c = u.parentNode.rowIndex, d = u.cellIndex;
      return {
        cell: a.value[c][d],
        row: c,
        column: d
      };
    }, l = (i) => {
      const u = [];
      return (i.selected || i.start || i.end) && u.push("is-selected"), i.disabled && u.push("is-disabled"), i.empty && u.push("is-empty"), i.inRange && u.push("is-range"), u.join(" ");
    }, s = (i) => {
      const { cell: u } = r(i);
      u && (u.disabled || t("pick", u.date));
    }, o = (i) => {
      const { cell: u } = r(i);
      u && (!e.rangeState.selecting || u.disabled || t("range-change", u.date));
    };
    return () => m("div", { class: "vc-month-table" }, [m("table", {
      class: "vc-month-table__wrapper",
      cellspacing: "0",
      cellpadding: "0",
      onClick: s,
      onMousemove: o
    }, [m("tbody", null, [a.value.map((i, u) => m("tr", {
      key: u,
      class: "vc-month-table__row"
    }, [i.map((c, d) => m("td", {
      key: d,
      class: [l(c), "vc-month-table__cell"]
    }, [m("div", null, [m("span", null, [`${c.month + 1}月`])])]))]))])])]);
  }
}), GC = "vc-quarter-table", jC = (e, t) => {
  const n = e.getFullYear(), [a, r] = [t * 3, t * 3 + 2], l = $a(n, r);
  return [new Date(n, a), new Date(n, r, l)];
}, UC = (e) => {
  switch (e.getMonth()) {
    case 0:
    case 2:
      return 0;
    case 3:
    case 5:
      return 1;
    case 6:
    case 8:
      return 2;
    case 9:
    case 11:
      return 3;
    default:
      return !1;
  }
}, _l = /* @__PURE__ */ H({
  name: GC,
  props: {
    value: Array,
    panelDate: Date,
    disabledDate: Function,
    cellClassName: Function,
    rangeState: {
      type: Object,
      default: () => ({
        from: null,
        to: null,
        selecting: !1,
        marker: null
      })
    }
  },
  emits: ["pick", "range-change"],
  setup(e, { emit: t }) {
    const n = E(kc), a = _(() => {
      const i = [[], []], u = e.panelDate.getFullYear(), c = pt(e.value);
      for (let d = 0; d < 2; d++) for (let g = 0; g < 2; g++) {
        const h = {};
        h.quarter = d * 2 + g, h.dates = jC(e.panelDate, h.quarter);
        const f = Ne(e.rangeState.from), p = Ne(e.rangeState.to), A = [Ne(h.dates[0]), Ne(h.dates[1])];
        h.inRange = A[0] > f && A[1] < p, h.start = e.rangeState.from && A[0] === f, h.end = e.rangeState.to && A[1] === p, h.disabled = typeof e.disabledDate == "function" && e.disabledDate(h.quarter), h.customClass = typeof e.cellClassName == "function" && e.cellClassName(h.quarter), h.selected = !Xn(c) && c.some((v) => u === v.getFullYear() && UC(v) === h.quarter), i[d][g] = h;
      }
      return i;
    }), r = (i) => {
      const u = [];
      return (i.selected || i.start || i.end) && u.push("is-selected"), i.disabled && u.push("is-disabled"), i.empty && u.push("is-empty"), i.inRange && u.push("is-range"), u.join(" ");
    }, l = (i) => {
      let u = i.target;
      if (u.tagName === "SPAN" && (u = u.parentNode.parentNode), u.tagName === "DIV" && (u = u.parentNode), u.tagName !== "TD") return {};
      const c = u.parentNode.rowIndex, d = u.cellIndex;
      return {
        cell: a.value[c][d],
        row: c,
        column: d
      };
    }, s = (i) => {
      const { cell: u } = l(i);
      u && (u.disabled || t("pick", u.dates));
    }, o = (i) => {
      const { cell: u } = l(i);
      u && (!e.rangeState.selecting || u.disabled || t("range-change", u.dates));
    };
    return () => m("div", { class: "vc-quarter-table" }, [m("table", {
      class: "vc-quarter-table__wrapper",
      cellspacing: "0",
      cellpadding: "0",
      onClick: s,
      onMousemove: o
    }, [m("tbody", null, [a.value.map((i, u) => m("tr", {
      key: u,
      class: "vc-quarter-table__row"
    }, [i.map((c, d) => m("td", {
      key: d,
      class: [r(c), "vc-quarter-table__cell"]
    }, [m("div", null, [m("span", null, [`第${n.value[c.quarter + 1]}季度`])])]))]))])])]);
  }
}), ar = /* @__PURE__ */ H({
  name: "vc-shortcuts-select",
  props: {
    panelDate: Date,
    config: Array,
    value: Date
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = ({ value: a, onClick: r }) => {
      if (typeof a != "function" && !r) throw Error("【vc-date-picker】:options[value]需要是一个方法");
      a && t("pick", a()), r && r();
    };
    return () => m("div", { class: "vc-date-shortcuts" }, [m("ul", { class: "vc-date-shortcuts__ul" }, [e.config.map((a, r) => m("li", {
      key: r,
      class: "vc-date-shortcuts__li",
      onClick: () => n(a)
    }, [a.text]))])]);
  }
}), pn = /* @__PURE__ */ H({
  name: "vc-time-select",
  props: {
    hours: {
      type: [Number, String],
      default: NaN
    },
    minutes: {
      type: [Number, String],
      default: NaN
    },
    seconds: {
      type: [Number, String],
      default: NaN
    },
    showSeconds: {
      type: Boolean,
      default: !0
    },
    steps: {
      type: Array,
      default: () => []
    },
    disabledHours: {
      type: Array,
      default() {
        return [];
      }
    },
    disabledMinutes: {
      type: Array,
      default() {
        return [];
      }
    },
    disabledSeconds: {
      type: Array,
      default() {
        return [];
      }
    },
    disabledTime: Function,
    panelDate: Date,
    filterable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = E("ontouchend" in window), a = E([
      1,
      1,
      1
    ].map((D, B) => Math.abs(e.steps[B]) || D)), r = E(!1), l = E(!1), s = E(-1), o = E([
      0,
      0,
      0
    ]), i = Ke({}), u = (D) => (B) => {
      B && (i[D] = B);
    }, c = (D) => {
      if (typeof e.disabledTime != "function") return;
      const B = lt(new Date(e.panelDate)), y = {
        hours: D,
        minutes: 0,
        seconds: 0
      }, x = {
        hours: D,
        minutes: 59,
        seconds: 59
      }, S = Te(B, y), I = Te(B, x);
      return e.disabledTime(S) && e.disabledTime(I);
    }, d = (D) => {
      if (typeof e.disabledTime != "function") return;
      const B = new Date(e.panelDate), y = lt(B), x = {
        hours: B.getHours(),
        minutes: D,
        seconds: 0
      }, S = {
        hours: B.getHours(),
        minutes: D,
        seconds: 59
      }, I = Te(y, x), P = Te(y, S);
      return e.disabledTime(I) && e.disabledTime(P);
    }, g = (D) => {
      if (typeof e.disabledTime != "function") return;
      const B = new Date(e.panelDate), y = Te(lt(B), {
        hours: B.getHours(),
        minutes: B.getMinutes(),
        seconds: D
      });
      return e.disabledTime(y);
    }, h = (D, B) => {
      if (B.disabled) return;
      const y = { [D]: B.text };
      l.value = !1, t("pick", y);
    }, f = (D) => {
      const B = [];
      return D.selected && B.push("is-selected"), D.disabled && B.push("is-disabled"), D.focused && B.push("is-focused"), B.join(" ");
    }, p = (D, B) => {
      const y = e[`disabled${Zy(D)}`];
      if (y.length && e.filterable) {
        let x = 0;
        y.forEach((S) => S <= B ? x++ : ""), B -= x;
      }
      return B;
    }, A = (D, B) => {
      const y = i[D].scrollTop, x = 24 * p(D, B);
      jl(i[D], {
        from: y,
        to: x,
        duration: l.value ? 0 : 500
      });
    }, v = _(() => {
      const D = [], B = a.value[0], y = s.value === 0 && o.value[0], x = {
        text: 0,
        selected: !1,
        disabled: !1,
        hide: !1
      };
      for (let S = 0; S < 24; S += B) {
        const I = { ...x };
        I.text = S, I.focused = S === y, (e.disabledHours.length && e.disabledHours.includes(S) || c(S)) && (I.disabled = !0, e.filterable && (I.hide = !0)), e.hours === S && (I.selected = !0), D.push(I);
      }
      return D;
    }), b = _(() => {
      const D = [], B = a.value[1], y = s.value === 1 && o.value[1], x = {
        text: 0,
        selected: !1,
        disabled: !1,
        hide: !1
      };
      for (let S = 0; S < 60; S += B) {
        const I = { ...x };
        I.text = S, I.focused = S === y, (e.disabledMinutes.length && e.disabledMinutes.includes(S) || d(S)) && (I.disabled = !0, e.filterable && (I.hide = !0)), e.minutes === S && (I.selected = !0), D.push(I);
      }
      return D;
    }), C = _(() => {
      const D = [], B = a.value[2], y = s.value === 2 && o.value[2], x = {
        text: 0,
        selected: !1,
        disabled: !1,
        hide: !1
      };
      for (let S = 0; S < 60; S += B) {
        const I = { ...x };
        I.text = S, I.focused = S === y, (e.disabledSeconds.length && e.disabledSeconds.includes(S) || g(S)) && (I.disabled = !0, e.filterable && (I.hide = !0)), e.seconds === S && (I.selected = !0), D.push(I);
      }
      return D;
    });
    return [
      ["hours", v],
      ["minutes", b],
      ["seconds", C]
    ].forEach((D) => {
      $(() => e[D[0]], (B) => {
        r.value && A(D[0], D[1].value.findIndex((y) => y.text == B));
      });
    }), () => m("div", { class: [{ "is-touch": n.value }, "vc-time-select"] }, [
      m("div", {
        ref: u("hours"),
        class: "vc-time-select__list"
      }, [m("ul", { class: "vc-time-select__ul" }, [v.value.map((D, B) => ce(m("li", {
        key: B,
        class: [f(D), "vc-time-select__li"],
        onClick: () => h("hours", D)
      }, [et(D.text)]), [[he, !D.hide]]))])]),
      m("div", {
        ref: u("minutes"),
        class: "vc-time-select__list"
      }, [m("ul", { class: "vc-time-select__ul" }, [b.value.map((D, B) => ce(m("li", {
        key: B,
        class: [f(D), "vc-time-select__li"],
        onClick: () => h("minutes", D)
      }, [et(D.text)]), [[he, !D.hide]]))])]),
      ce(m("div", {
        ref: u("seconds"),
        class: "vc-time-select__list"
      }, [m("ul", { class: "vc-time-select__ul" }, [C.value.map((D, B) => ce(m("li", {
        key: B,
        class: [f(D), "vc-time-select__li"],
        onClick: () => h("seconds", D)
      }, [et(D.text)]), [[he, !D.hide]]))])]), [[he, e.showSeconds]])
    ]);
  }
}), Sl = /* @__PURE__ */ H({
  name: "vc-year-table",
  props: {
    value: Array,
    panelDate: Date,
    disabledDate: Function,
    cellClassName: Function
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = _(() => Math.floor(e.panelDate.getFullYear() / 10) * 10), a = _(() => {
      const s = [
        [],
        [],
        [],
        []
      ], o = pt(e.value);
      for (let i = 0; i < 4; i++) for (let u = 0; u < 3; u++) {
        const c = {};
        (i < 3 || u === 0) && (c.year = n.value + i * 3 + u), c.date = new Date(c.year, 0, 1), c.disabled = typeof e.disabledDate == "function" && e.disabledDate(c.year), c.customClass = typeof e.cellClassName == "function" && e.cellClassName(c.year), c.selected = o.some((d) => d && c.year === d.getFullYear()), c.empty = !c.year, s[i][u] = c;
      }
      return s;
    }), r = (s) => {
      const o = [];
      return s.selected && o.push("is-selected"), s.disabled && o.push("is-disabled"), s.empty && o.push("is-empty"), o.join(" ");
    }, l = (s) => {
      s.disabled || s.empty || t("pick", s.date);
    };
    return () => m("div", { class: "vc-year-table" }, [m("table", {
      class: "vc-year-table__wrapper",
      cellspacing: "0",
      cellpadding: "0"
    }, [m("tbody", null, [a.value.map((s, o) => m("tr", {
      key: o,
      class: "vc-year-table__row"
    }, [s.map((i, u) => m("td", {
      key: u,
      class: [r(i), "vc-year-table__cell"],
      onClick: () => l(i)
    }, [m("div", null, [m("span", null, [i.year])])]))]))])])]);
  }
}), ZC = (e) => {
  if (!e[0] || !e[1]) return !1;
  const t = e[0].getFullYear(), n = e[0].getMonth(), a = e[1].getFullYear(), r = e[1].getMonth();
  return t === a && n === r;
}, JC = (e, t) => {
  const n = e.getFullYear(), a = e.getMonth(), r = t.getFullYear(), l = t.getMonth();
  return n > r || n === r && a >= l;
}, zC = (e, t) => {
  const n = e.getFullYear(), a = e.getMonth(), r = t.getFullYear(), l = t.getMonth();
  return n < r || n === r && a <= l;
}, XC = (e, t, n, a) => {
  const r = e.getMonth(), l = e.getFullYear(), s = n.getMonth(), o = n.getFullYear(), i = a.getMonth(), u = a.getFullYear();
  return t === "right" && (l > u || l === u && r > i) || t === "right" && (l < o || l === o && r < s) || t === "left" && (l < o || l === o && r < s) ? !1 : !(t === "left" && (l > u || l === u && r > i));
}, qC = /* @__PURE__ */ H({
  name: "vc-date-range-panel",
  props: {
    ...nr,
    confirm: {
      type: Boolean,
      default: !1
    },
    splitPanels: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "pick",
    "clear",
    "ok"
  ],
  setup(e, { emit: t }) {
    const n = E(e.value), a = E(e.value[0] || e.startDate || /* @__PURE__ */ new Date()), r = E(e.splitPanels && !ZC(e.value) && e.value[1] || jt(a.value)), l = E({
      from: e.value[0] || "",
      to: e.value[1] || "",
      selecting: !1,
      marker: null
    }), s = E("daterange"), o = E("daterange"), i = _(() => {
      const { from: k, to: w, selecting: M } = l.value;
      return e.showTime && !!k && !!w && !M;
    }), u = _(() => !(e.format || "").match(/mm$/)), c = _(() => {
      const k = n.value[0], w = n.value[1];
      return !k || !w || s.value !== "timerange" && o.value !== "timerange" ? {
        left: {},
        right: {}
      } : {
        left: {
          hours: k.getHours(),
          minutes: k.getMinutes(),
          seconds: k.getSeconds()
        },
        right: {
          hours: w.getHours(),
          minutes: w.getMinutes(),
          seconds: w.getSeconds()
        }
      };
    }), d = _(() => a.value.getMonth()), g = _(() => a.value.getFullYear()), h = _(() => r.value.getMonth()), f = _(() => r.value.getFullYear()), p = (k) => {
      o.value === k ? o.value = "daterange" : o.value = k;
    }, A = (k) => {
      const w = Ce(n.value[0] || a.value, k.getFullYear(), d.value);
      if (a.value = w, o.value = "month", !e.splitPanels) {
        const M = Ce(n.value[1] || r.value, k.getFullYear(), h.value);
        r.value = M;
      }
    }, v = (k) => {
      const w = Ce(n.value[0] || a.value, g.value, k.getMonth());
      if (a.value = w, o.value = "daterange", !e.splitPanels) {
        const M = Ce(n.value[1] || r.value, g.value, d.value + 1);
        r.value = M;
      }
    }, b = (k) => {
      s.value === k ? s.value = "daterange" : s.value = k;
    }, C = (k) => {
      const w = Ce(n.value[1] || r.value, k.getFullYear(), h.value);
      if (r.value = w, s.value = "month", !e.splitPanels) {
        const M = Ce(n.value[0] || a.value, k.getFullYear(), d.value);
        a.value = M;
      }
    }, D = (k) => {
      const w = Ce(n.value[1] || r.value, f.value, k.getMonth());
      if (r.value = w, s.value = "daterange", !e.splitPanels) {
        const M = Ce(n.value[1] || a.value, f.value, h.value - 1);
        a.value = M;
      }
    }, B = (k, w, M) => {
      if (M === "left" ? a.value = k : r.value = k, e.splitPanels) {
        const F = JC(k, r.value), N = zC(k, a.value);
        switch (w) {
          case "prev-month":
          case "next-month":
            M === "left" && F ? jt(r.value) < a.value ? r.value = Ce(a.value, g.value, d.value + 1) : r.value = jt(r.value) : M === "right" && N && (In(a.value) < a.value ? a.value = Ce(r.value, f.value, h.value - 1) : a.value = In(a.value));
            break;
          case "prev-year":
          case "next-year":
            M === "left" && F && o.value !== "year" ? He(r.value) < a.value ? r.value = Ce(a.value, g.value, d.value + 1) : r.value = He(r.value) : M === "right" && F && s.value !== "year" && (Mt(a.value) < a.value ? a.value = Ce(r.value, f.value, h.value - 1) : a.value = Mt(a.value));
            break;
        }
      } else switch (w) {
        case "prev-month":
          r.value = In(r.value);
          break;
        case "prev-year":
          r.value = Mt(r.value);
          break;
        case "next-month":
          a.value = jt(a.value);
          break;
        case "next-year":
          a.value = He(a.value);
          break;
      }
    }, y = (k, w, M) => {
      const { selecting: F, from: N, marker: T } = l.value, V = XC(k, M, a.value, r.value);
      if (F ? l.value = {
        from: k < T ? k : N,
        to: k < T ? T : k,
        selecting: w.type !== "normal",
        marker: w.type !== "normal" ? T : null
      } : (n.value = [], l.value = {
        from: k,
        to: "",
        selecting: !0,
        marker: k
      }), V) {
        if (l.value.from && l.value.to) {
          const G = l.value.from, q = l.value.to;
          n.value = [G, q], t("pick", n.value);
        }
      } else {
        const G = M === "left" ? "prev-month" : "next-month", q = M === "left" ? In(a.value) : jt(r.value);
        B(q, G, M);
      }
    }, x = (k) => {
      const { from: w, marker: M } = l.value;
      l.value.selecting && k.getTime() != w.getTime() && (l.value = {
        from: k < M ? k : M,
        to: k < M ? M : k,
        selecting: !0,
        marker: M
      });
    }, S = (k, w) => {
      const M = k === "left" ? n.value[0] : n.value[1];
      let F = n.value[0], N = n.value[1];
      k === "left" ? (F = Te(M, w), a.value = F) : k === "right" && (N = Te(M, w), r.value = N), F && N && (n.value = [F, N], t("pick", n.value));
    }, I = (k) => {
      o.value = k[0], s.value = k[1];
    }, P = () => {
      t("clear");
    }, W = () => {
      t("ok", n.value);
    }, O = (k) => {
      e.disabledDate(k[0]) || e.disabledDate(k[1]) || (y(k[0], { type: e.disabledDate(k[0]) ? "disabled" : "normal" }, "left"), y(k[1], { type: e.disabledDate(k[1]) ? "disabled" : "normal" }, "right"), a.value = k[0], r.value = k[1], n.value = k);
    };
    return () => m("div", { class: "vc-daterange-panel" }, [e.shortcuts && e.shortcuts.length > 0 && m("div", { style: "width: 100px" }, [m(ar, {
      config: e.shortcuts,
      onPick: O
    }, null)]), m("div", { class: [{ "is-with-seconds": u.value }, "vc-daterange-panel__body"] }, [m("div", { class: "vc-daterange-panel__table" }, [m("div", { class: "vc-daterange-panel__content is-left" }, [
      m(Dt, {
        currentView: o.value,
        panelDate: a.value,
        showNext: e.splitPanels,
        title: "开始时间",
        onChange: (k, w) => B(k, w, "left"),
        onChangeCurrentView: p
      }, null),
      o.value === "daterange" && m(xl, {
        value: n.value,
        panelDate: a.value,
        disabledDate: e.disabledDate,
        focusedDate: e.focusedDate,
        rangeState: l.value,
        onPick: (k, w) => y(k, w, "left"),
        onRangeChange: x
      }, null),
      o.value === "year" && m(Sl, {
        value: [n.value[0]],
        panelDate: a.value,
        onPick: A
      }, null),
      o.value === "month" && m(qn, {
        value: [n.value[0]],
        panelDate: a.value,
        onPick: v
      }, null),
      ce(m(pn, De({
        hours: c.value.left.hours,
        minutes: c.value.left.minutes,
        seconds: c.value.left.seconds,
        showSeconds: u.value
      }, e.timePickerOptions, {
        panelDate: n.value[0],
        onPick: (k) => S("left", k)
      }), null), [[he, o.value === "timerange"]])
    ]), m("div", { class: "vc-daterange-panel__content is-right" }, [
      m(Dt, {
        currentView: s.value,
        panelDate: r.value,
        showNext: e.splitPanels,
        title: "结束时间",
        onChange: (k, w) => B(k, w, "right"),
        onChangeCurrentView: b
      }, null),
      s.value === "daterange" && m(xl, {
        value: n.value,
        panelDate: r.value,
        disabledDate: e.disabledDate,
        focusedDate: e.focusedDate,
        rangeState: l.value,
        onPick: (k, w) => y(k, w, "right"),
        onRangeChange: x
      }, null),
      s.value === "year" && m(Sl, {
        value: [n.value[1]],
        panelDate: r.value,
        onPick: C
      }, null),
      s.value === "month" && m(qn, {
        value: [n.value[1]],
        panelDate: r.value,
        onPick: D
      }, null),
      ce(m(pn, De({
        hours: c.value.right.hours,
        minutes: c.value.right.minutes,
        seconds: c.value.right.seconds,
        showSeconds: u.value
      }, e.timePickerOptions, {
        panelDate: n.value[1],
        onPick: (k) => S("right", k)
      }), null), [[he, s.value === "timerange"]])
    ])]), e.confirm && m(bn, {
      showTime: i.value,
      currentView: [o.value, s.value],
      onClear: P,
      onOk: W,
      onToggleTime: I
    }, null)])]);
  }
}), eb = /* @__PURE__ */ H({
  name: "vc-date-panel",
  props: {
    ...nr,
    type: String,
    confirm: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "pick",
    "clear",
    "ok"
  ],
  setup(e, { emit: t }) {
    const n = E(e.value), a = E((() => {
      let C = e.value[0];
      return e.type === "quarter" && C && (C = C[0]), C || e.startDate || /* @__PURE__ */ new Date();
    })()), r = E(e.type === "year" ? "year" : e.type === "month" ? "month" : e.type === "quarter" ? "quarter" : "date"), l = _(() => !(e.format || "").match(/mm$/)), s = _(() => {
      const C = n.value[0];
      return !C || r.value !== "time" ? [] : [
        C.getHours(),
        C.getMinutes(),
        C.getSeconds()
      ];
    }), o = _(() => a.value.getMonth()), i = _(() => a.value.getFullYear()), u = (C, D) => {
      if (e.multiple) {
        const B = n.value.findIndex((y) => y.getTime() === C.getTime());
        if (a.value = C, D.type === "normal") {
          let y = [];
          B > -1 ? y = n.value.splice(B, 1) : n.value = [...n.value, C], t("pick", n.value, y[0]);
        }
      } else {
        const B = n.value[0], y = Te(C, {
          hours: (B || C).getHours(),
          minutes: (B || C).getMinutes(),
          seconds: (B || C).getSeconds()
        });
        a.value = y, n.value = [y], t("pick", n.value);
      }
    }, c = (C) => {
      const D = Te(n.value[0] || a.value, C);
      a.value = D, n.value = [D], t("pick", n.value);
    }, d = (C) => {
      r.value === C ? r.value = "date" : r.value = C;
    }, g = (C) => {
      if (e.type === "year") {
        const D = [C];
        n.value = D, t("pick", D);
      } else {
        const D = Ce(n.value[0] || a.value, C.getFullYear(), o.value);
        a.value = D, r.value = "month";
      }
    }, h = (C) => {
      if (e.type === "month") {
        const D = [C];
        n.value = D, t("pick", D);
      } else {
        const D = Ce(n.value[0] || a.value, i.value, C.getMonth());
        a.value = D, r.value = "date";
      }
    }, f = (C) => {
      const D = C;
      n.value = D, t("pick", D);
    }, p = (C) => {
      r.value = C;
    }, A = () => {
      t("clear");
    }, v = () => {
      t("ok", n.value);
    }, b = (C) => {
      const D = e.disabledDate(C) ? "disabled" : "normal";
      D !== "disabled" && (r.value === "quarter" ? (a.value = C[0], f(C)) : u(C, { type: D }));
    };
    return () => m("div", { class: "vc-date-panel" }, [e.shortcuts && e.shortcuts.length > 0 && m("div", { style: "width: 100px" }, [m(ar, {
      panelDate: a.value,
      config: e.shortcuts,
      onPick: b
    }, null)]), m("div", { class: [{ "is-with-seconds": l.value }, "vc-date-panel__body"] }, [
      r.value !== "time" && m(Dt, {
        currentView: r.value,
        panelDate: a.value,
        onChange: (C) => a.value = C,
        onChangeCurrentView: d
      }, null),
      r.value === "date" && m(xl, {
        value: n.value,
        panelDate: a.value,
        disabledDate: e.disabledDate,
        focusedDate: e.focusedDate,
        onPick: u
      }, null),
      r.value === "year" && m(Sl, {
        value: n.value,
        panelDate: a.value,
        onPick: g
      }, null),
      r.value === "month" && m(qn, {
        value: n.value,
        panelDate: a.value,
        disabledDate: e.disabledDate,
        onPick: h
      }, null),
      r.value === "quarter" && m(_l, {
        value: n.value,
        panelDate: a.value,
        disabledDate: e.disabledDate,
        onPick: f
      }, null),
      ce(m(pn, De({
        hours: s.value[0],
        minutes: s.value[1],
        seconds: s.value[2],
        showSeconds: l.value
      }, e.timePickerOptions, {
        panelDate: a.value,
        onPick: c
      }), null), [[he, r.value === "time"]]),
      e.confirm && m(bn, {
        showTime: e.showTime && !e.multiple,
        currentView: r.value,
        onClear: A,
        onOk: v,
        onToggleTime: p
      }, null)
    ])]);
  }
}), tb = (e) => !e[0] || !e[1] ? !1 : e[0].getFullYear() === e[1].getFullYear(), nb = /* @__PURE__ */ H({
  name: "vc-monthrange-panel",
  props: {
    ...nr,
    confirm: {
      type: Boolean,
      default: !1
    },
    splitPanels: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "pick",
    "clear",
    "ok"
  ],
  setup(e, { emit: t }) {
    const n = E(e.value), a = E(e.value[0] || e.startDate || /* @__PURE__ */ new Date()), r = E(e.splitPanels && !tb(e.value) && e.value[1] || He(a.value)), l = E({
      from: e.value[0] || "",
      to: e.value[1] || "",
      selecting: !1,
      marker: null
    }), s = E("monthrange"), o = (h, f, p) => {
      if (p === "left" ? a.value = h : r.value = h, e.splitPanels) {
        const A = h.getFullYear(), v = a.value.getFullYear(), b = r.value.getFullYear();
        switch (f) {
          case "prev-year":
          case "next-year":
            p === "left" && A >= b ? r.value = He(r.value) : p === "right" && A <= v && (a.value = Mt(a.value));
            break;
        }
      } else switch (f) {
        case "prev-year":
          r.value = Mt(r.value);
          break;
        case "next-year":
          a.value = He(a.value);
          break;
      }
    }, i = (h) => {
      const { selecting: f, from: p, marker: A } = l.value;
      if (f ? l.value = {
        from: h < A ? h : p,
        to: h < A ? A : h,
        selecting: !1,
        marker: A
      } : (n.value = [], l.value = {
        from: h,
        to: "",
        selecting: !0,
        marker: h
      }), l.value.from && l.value.to) {
        const v = l.value.from, b = l.value.to;
        n.value = [v, b], t("pick", n.value);
      }
    }, u = (h) => {
      const { from: f, marker: p } = l.value;
      l.value.selecting && h.getTime() != f.getTime() && (l.value = {
        from: h < p ? h : p,
        to: h < p ? p : h,
        selecting: !0,
        marker: p
      });
    }, c = () => {
      t("clear");
    }, d = () => {
      t("ok", n.value);
    }, g = (h) => {
      e.disabledDate(h[0]) || e.disabledDate(h[1]) || (a.value = h[0], r.value = h[1], i(h[0]), i(h[1]), n.value = h);
    };
    return () => m("div", { class: "vc-monthrange-panel" }, [e.shortcuts && e.shortcuts.length > 0 && m("div", { style: "width: 100px" }, [m(ar, {
      config: e.shortcuts,
      onPick: g
    }, null)]), m("div", { class: "vc-monthrange-panel__body" }, [m("div", { class: "vc-monthrange-panel__table" }, [m("div", { class: "vc-monthrange-panel__content is-left" }, [m(Dt, {
      currentView: s.value,
      panelDate: a.value,
      showNext: e.splitPanels,
      onChange: (h, f) => o(h, f, "left")
    }, null), m(qn, {
      value: n.value,
      panelDate: a.value,
      disabledDate: e.disabledDate,
      rangeState: l.value,
      onPick: (h) => i(h),
      onRangeChange: u
    }, null)]), m("div", { class: "vc-monthrange-panel__content is-right" }, [m(Dt, {
      currentView: s.value,
      panelDate: r.value,
      showNext: e.splitPanels,
      onChange: (h, f) => o(h, f, "right")
    }, null), m(qn, {
      value: n.value,
      panelDate: r.value,
      disabledDate: e.disabledDate,
      rangeState: l.value,
      onPick: (h) => i(h),
      onRangeChange: u
    }, null)])]), e.confirm && m(bn, {
      showTime: !1,
      currentView: s.value,
      onClear: c,
      onOk: d
    }, null)])]);
  }
}), ab = (e) => !e[0] || !e[1] ? !1 : e[0].getFullYear() === e[1].getFullYear(), rb = /* @__PURE__ */ H({
  name: "vc-quarterrange-panel",
  props: {
    ...nr,
    confirm: {
      type: Boolean,
      default: !1
    },
    splitPanels: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "pick",
    "clear",
    "ok"
  ],
  setup(e, { emit: t }) {
    const n = E(e.value), a = E(e.value[0] || e.startDate || /* @__PURE__ */ new Date()), r = E(e.splitPanels && !ab(e.value) && e.value[1] || He(a.value)), l = E({
      from: e.value[0] || "",
      to: e.value[1] || "",
      selecting: !1,
      marker: null
    }), s = E("quarterrange"), o = (h, f, p) => {
      if (p === "left" ? a.value = h : r.value = h, e.splitPanels) {
        const A = h.getFullYear(), v = a.value.getFullYear(), b = r.value.getFullYear();
        switch (f) {
          case "prev-year":
          case "next-year":
            p === "left" && A >= b ? r.value = He(r.value) : p === "right" && A <= v && (a.value = Mt(a.value));
            break;
        }
      } else switch (f) {
        case "prev-year":
          r.value = Mt(r.value);
          break;
        case "next-year":
          a.value = He(a.value);
          break;
      }
    }, i = (h) => {
      const { selecting: f, from: p, marker: A } = l.value;
      if (f ? l.value = {
        from: h[0] < A[0] ? h[0] : p,
        to: h[1] < A[1] ? A[1] : h[1],
        selecting: !1,
        marker: A
      } : (n.value = [], l.value = {
        from: h[0],
        to: "",
        selecting: !0,
        marker: h
      }), l.value.from && l.value.to) {
        const v = l.value.from, b = l.value.to;
        n.value = [v, b], t("pick", n.value);
      }
    }, u = (h) => {
      const { from: f, marker: p } = l.value;
      l.value.selecting && h[0].getTime() != f.getTime() && (l.value = {
        from: h[0] < p[0] ? h[0] : p[0],
        to: h[1] < p[1] ? p[1] : h[1],
        selecting: !0,
        marker: p
      });
    }, c = () => {
      t("clear");
    }, d = () => {
      t("ok", n.value);
    }, g = (h) => {
      a.value = h[0], r.value = h[1], i(h[0]), i(h[1]), n.value = h, l.value = {
        from: h[0],
        marker: h,
        selecting: !0,
        to: h[1]
      }, u(h);
    };
    return () => m("div", { class: "vc-quarterrange-panel" }, [e.shortcuts && e.shortcuts.length > 0 && m("div", { style: "width: 100px" }, [m(ar, {
      panelDate: a.value,
      config: e.shortcuts,
      onPick: g
    }, null)]), m("div", { class: "vc-quarterrange-panel__body" }, [m("div", { class: "vc-quarterrange-panel__table" }, [m("div", { class: "vc-quarterrange-panel__content is-left" }, [m(Dt, {
      currentView: s.value,
      panelDate: a.value,
      showNext: e.splitPanels,
      onChange: (h, f) => o(h, f, "left")
    }, null), m(_l, {
      value: n.value,
      panelDate: a.value,
      disabledDate: e.disabledDate,
      rangeState: l.value,
      onPick: (h) => i(h),
      onRangeChange: u
    }, null)]), m("div", { class: "vc-quarterrange-panel__content is-right" }, [m(Dt, {
      currentView: s.value,
      panelDate: r.value,
      showNext: e.splitPanels,
      onChange: (h, f) => o(h, f, "right")
    }, null), m(_l, {
      value: n.value,
      panelDate: r.value,
      disabledDate: e.disabledDate,
      rangeState: l.value,
      onPick: (h) => i(h),
      onRangeChange: u
    }, null)])]), e.confirm && m(bn, {
      showTime: !1,
      currentView: s.value,
      onClear: c,
      onOk: d
    }, null)])]);
  }
}), _c = {
  value: Array,
  format: String,
  disabledTime: {
    type: Function,
    default: () => !1
  },
  confirm: {
    type: Boolean,
    default: !1
  },
  steps: {
    type: Array,
    default: () => []
  },
  disabledHours: {
    type: Array,
    default() {
      return [];
    }
  },
  disabledMinutes: {
    type: Array,
    default() {
      return [];
    }
  },
  disabledSeconds: {
    type: Array,
    default() {
      return [];
    }
  },
  filterable: {
    type: Boolean,
    default: !1
  }
}, Sc = () => {
  const e = E(!1);
  return te(() => {
    fe(() => {
      e.value = !0;
    });
  }), e;
}, lb = (e, t) => {
  const n = e.getHours(), a = e.getMinutes(), r = e.getSeconds(), l = t.getHours(), s = t.getMinutes(), o = t.getSeconds();
  return {
    hours: n > l ? n : l,
    minutes: a > s ? a : s,
    seconds: r > o ? r : o
  };
}, sb = /* @__PURE__ */ H({
  name: "vc-timerange-panel",
  props: _c,
  emits: [
    "pick",
    "clear",
    "ok"
  ],
  setup(e, { emit: t }) {
    const n = Sc(), a = E(e.value), r = _(() => !(e.format || "").match(/mm$/)), l = _(() => {
      const u = a.value[0], c = a.value[1];
      return !u || !c || !n.value ? {
        left: {},
        right: {}
      } : {
        left: {
          hours: u.getHours(),
          minutes: u.getMinutes(),
          seconds: u.getSeconds()
        },
        right: {
          hours: c.getHours(),
          minutes: c.getMinutes(),
          seconds: c.getSeconds()
        }
      };
    }), s = (u, c) => {
      let d = a.value[0] || lt(/* @__PURE__ */ new Date()), g = a.value[1] || lt(/* @__PURE__ */ new Date());
      u === "left" && (d = Te(d, c)), u === "right" && (g = Te(g, c)), d > g && (g = Te(g, lb(d, g))), a.value = [d, g], t("pick", a.value);
    }, o = () => {
      t("clear");
    }, i = () => {
      t("ok", a.value);
    };
    return () => m("div", { class: "vc-timerange-panel" }, [m("div", { class: "vc-timerange-panel__wrapper" }, [m("div", { class: "vc-timerange-panel__content is-left" }, [m(Dt, {
      currentView: "timerange",
      title: "开始时间"
    }, null), m(pn, {
      hours: l.value.left.hours,
      minutes: l.value.left.minutes,
      seconds: l.value.left.seconds,
      showSeconds: r.value,
      disabledTime: e.disabledTime,
      disabledHours: e.disabledHours,
      disabledMinutes: e.disabledMinutes,
      disabledSeconds: e.disabledSeconds,
      filterable: e.filterable,
      steps: e.steps,
      onPick: (u) => s("left", u)
    }, null)]), m("div", { class: "vc-timerange-panel__content is-right" }, [m(Dt, {
      currentView: "timerange",
      title: "结束时间"
    }, null), m(pn, {
      hours: l.value.right.hours,
      minutes: l.value.right.minutes,
      seconds: l.value.right.seconds,
      showSeconds: r.value,
      disabledTime: e.disabledTime,
      disabledHours: e.disabledHours,
      disabledMinutes: e.disabledMinutes,
      disabledSeconds: e.disabledSeconds,
      filterable: e.filterable,
      steps: e.steps,
      onPick: (u) => s("right", u)
    }, null)])]), e.confirm && m(bn, {
      showTime: !1,
      currentView: "timerange",
      onClear: o,
      onOk: i
    }, null)]);
  }
}), ob = /* @__PURE__ */ H({
  name: "vc-time-panel",
  props: _c,
  emits: [
    "pick",
    "clear",
    "ok"
  ],
  setup(e, { emit: t }) {
    const n = Sc(), a = E(e.value), r = _(() => !(e.format || "").match(/mm$/)), l = _(() => {
      const u = a.value[0];
      return !u || !n.value ? [] : [
        u.getHours(),
        u.getMinutes(),
        u.getSeconds()
      ];
    }), s = (u) => {
      const c = Te(a.value[0] || lt(/* @__PURE__ */ new Date()), u);
      a.value = [c], t("pick", a.value);
    }, o = () => {
      t("clear");
    }, i = () => {
      t("ok", a.value);
    };
    return () => m("div", { class: "vc-time-panel" }, [m(pn, {
      hours: l.value[0],
      minutes: l.value[1],
      seconds: l.value[2],
      showSeconds: r.value,
      disabledTime: e.disabledTime,
      disabledHours: e.disabledHours,
      disabledMinutes: e.disabledMinutes,
      disabledSeconds: e.disabledSeconds,
      filterable: e.filterable,
      steps: e.steps,
      onPick: s
    }, null), e.confirm && m(bn, {
      showTime: !1,
      currentView: "time",
      onClear: o,
      onOk: i
    }, null)]);
  }
}), ib = "vc-date-picker", ub = (e) => ["daterange", "datetimerange"].includes(e) ? qC : e === "quarterrange" ? rb : e === "monthrange" ? nb : eb;
xc(ib, NC, () => {
  const e = z().props, t = E("date"), n = dt({}), a = _(() => ({
    disabledDate: e.disabledDate,
    shortcuts: e.shortcuts,
    timePickerOptions: e.timePickerOptions
  }));
  return $(() => e.type, (r) => {
    n.value = ub(r);
  }, { immediate: !0 }), {
    icon: t,
    panel: n,
    panelOptions: a
  };
});
var Ic = {
  tag: {
    type: String,
    default: "div"
  },
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  extra: String,
  arrow: {
    type: [String, Boolean],
    default: "right"
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  indent: {
    type: Number,
    default: 12
  },
  to: [
    String,
    Object,
    Function
  ],
  href: String,
  alone: Boolean
}, cb = "vcm-list-item", db = /[a-zA-z]+:\/\/[^\s]*/, Mc = /* @__PURE__ */ H({
  name: cb,
  props: Ic,
  emits: ["click"],
  setup(e, { slots: t, emit: n }) {
    const a = Ae("vc-list", {}), r = _(() => ({
      "is-alone": !a.props || e.alone,
      "is-multi": e.multiple,
      "is-line": !e.multiple
    })), l = _(() => {
      const i = e.labelWidth === 0 || e.labelWidth ? e.labelWidth : a?.props?.labelWidth;
      return { width: i > 0 ? `${i}px` : "auto" };
    }), s = _(() => typeof e.arrow == "string" ? e.arrow : "right"), o = (i) => {
      n("click", i);
      const u = tt.options.MListItem?.to;
      if (typeof u == "function") {
        const c = z();
        if (typeof u(e.to, c) < "u") return;
      }
      if (e.href) {
        window.location.href = e.href;
        return;
      }
      if (e.to) {
        /* istanbul ignore else -- @preserve */
        typeof e.to == "function" ? e.to() : typeof e.to == "string" && db.test(e.to) && window.open(e.to);
        return;
      }
    };
    return () => m("div", {
      class: "vcm-list-item",
      style: { paddingLeft: `${e.indent}px` },
      onClick: o
    }, [m("div", { class: ["vcm-list-item__wrapper", r.value] }, [m("div", { style: l.value }, [t.label?.() || e.label]), m("div", { class: "vcm-list-item__content" }, [m("div", { class: "vcm-list-item__extra" }, [t.extra?.() || e.extra]), e.arrow && m(ee, {
      type: s.value,
      class: "vcm-list-item__icon"
    }, null)])])]);
  }
}), rr = {
  modelValue: {
    type: Boolean,
    default: !0
  },
  visible: {
    type: Boolean,
    default: void 0
  },
  title: {
    type: String,
    default: ""
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  okText: {
    type: String,
    default: "确定"
  },
  showToolbar: {
    type: Boolean,
    default: !0
  }
}, Nc = [
  "datetime",
  "date",
  "time",
  "yearmonth",
  "year",
  "month",
  "quarter"
], hb = {
  ...zt,
  yearmonth: zt.month,
  quarter: zt.date
}, di = {
  Y: "年",
  M: "月",
  D: "日",
  H: "时",
  m: "分",
  s: "秒",
  Q: "季度"
}, is = (e) => Nc.includes(e) ? e : "datetime", lr = (e) => {
  const t = is(e);
  return t === "yearmonth" ? "month" : t;
}, ua = (e, t) => t || hb[is(e)] || zt.date, us = (e) => Le[lr(e)] || Le.default, Xr = (e, t) => ({
  H: /H{1,2}/,
  m: /m{1,2}/,
  s: /s{1,2}/
})[t].test(e), fb = (e) => {
  const t = [];
  return Xr(e, "H") && t.push("H"), Xr(e, "m") && t.push("m"), Xr(e, "s") && t.push("s"), t;
}, cs = (e, t) => {
  const n = is(e), a = fb(ua(n, t));
  switch (n) {
    case "year":
      return ["Y"];
    case "month":
    case "yearmonth":
      return ["Y", "M"];
    case "date":
      return [
        "Y",
        "M",
        "D"
      ];
    case "time":
      return a.length ? a : [
        "H",
        "m",
        "s"
      ];
    case "quarter":
      return ["Y", "Q"];
    default:
      return [
        "Y",
        "M",
        "D",
        ...a.length ? a : [
          "H",
          "m",
          "s"
        ]
      ];
  }
}, Tc = (e, t, n) => {
  const a = e.getTime();
  return a < t.getTime() ? new Date(t) : a > n.getTime() ? new Date(n) : e;
}, ds = (e, t) => Tc(/* @__PURE__ */ new Date(), e, t), Ab = (e) => e instanceof Date && !isNaN(e.getTime()), hs = (e, t, n) => {
  if (Xn(e)) return [];
  const a = us(t), r = ua(t, n);
  return pt(a.parser(e, r)).filter(Ab);
}, Va = (e, t, n, a = "") => {
  if (!e.length) return a;
  const r = us(t), l = ua(t, n), s = lr(t) === "quarter" ? e : e[0], o = r.formatter(s, l);
  return Xn(o) ? a : o;
}, gb = (e, t, n) => {
  if (!e.length) return "";
  const a = us(t), r = ua(t, n), l = lr(t) === "quarter" ? e : e[0];
  return (a.formatterText || a.formatter)(l, r) || "";
}, mb = (e, t) => {
  const n = (t - 1) * 3, a = n + 2, r = os(e, a + 1);
  return [new Date(e, n, 1), new Date(e, a, r)];
}, Il = (e, t, n) => {
  const a = cs(t, n), r = {
    Y: `${e.getFullYear()}`,
    M: et(e.getMonth() + 1),
    D: et(e.getDate()),
    H: et(e.getHours()),
    m: et(e.getMinutes()),
    s: et(e.getSeconds()),
    Q: Bc(e) || "1"
  };
  return a.map((l) => r[l]);
}, xt = (e, t) => {
  const n = Number(e);
  return isNaN(n) ? t : n;
}, Oc = (e, t, n, a, r) => {
  const l = cs(t, n), s = ds(a, r), o = (A) => e[l.indexOf(A)];
  if (lr(t) === "quarter") return mb(xt(o("Y"), s.getFullYear()), xt(o("Q"), Number(Bc(s) || 1)));
  const i = (A) => l.includes(A), u = i("Y") ? xt(o("Y"), s.getFullYear()) : s.getFullYear(), c = i("M") ? xt(o("M"), s.getMonth() + 1) : 1, d = os(u, c), g = i("D") ? Math.min(xt(o("D"), s.getDate()), d) : 1, h = i("H") ? xt(o("H"), 0) : 0, f = i("m") ? xt(o("m"), 0) : 0, p = i("s") ? xt(o("s"), 0) : 0;
  return [Tc(new Date(u, c - 1, g, h, f, p), a, r)];
}, pb = (e, t, n) => Array.from({ length: n - t + 1 }, (a, r) => {
  const l = t + r, s = e === "Y" || e === "Q" ? `${l}` : et(l);
  return {
    value: s,
    label: e === "Q" ? `第${kc[l]}${di[e]}` : `${s}${di[e]}`
  };
}), vb = (e, t, n, a, r, l = "", s = !1) => {
  const o = hs(e, t, n);
  return o.length ? Va(o, t, n, l) : s ? Va(Oc(Il(ds(a, r), t, n), t, n, a, r), t, n, l) : e;
}, fs = {
  modelValue: [
    Date,
    Array,
    String
  ],
  type: {
    type: String,
    default: "datetime",
    validator: (e) => Nc.includes(e)
  },
  format: String,
  minDate: {
    type: Date,
    default: () => /* @__PURE__ */ new Date("1940/01/01 00:00")
  },
  maxDate: {
    type: Date,
    default: () => {
      const e = /* @__PURE__ */ new Date();
      return new Date(e.setFullYear(e.getFullYear() + 50));
    }
  },
  startHour: {
    type: Number,
    default: 0
  },
  endHour: {
    type: Number,
    default: 23
  },
  allowDispatch: {
    type: Boolean,
    default: !0
  },
  nullValue: {
    type: [
      String,
      Number,
      Object
    ],
    default: ""
  }
}, yb = [
  "label",
  "labelWidth",
  "arrow"
], Db = [
  "title",
  "cancelText",
  "okText",
  "showToolbar"
], Cb = [
  "modelValue",
  "type",
  "format",
  "minDate",
  "maxDate",
  "startHour",
  "endHour",
  "nullValue"
], bb = {
  ...be(Ic, yb),
  ...be(rr, Db),
  ...be(fs, Cb),
  extra: {
    type: String,
    default: "请选择"
  },
  formatter: Function
}, wb = {
  modelValue: {
    type: [
      String,
      Number,
      Boolean,
      Array
    ],
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  },
  cols: {
    type: Number,
    default: 1
  },
  itemStyle: Object,
  cascader: {
    type: Boolean,
    default: !0
  },
  loadData: Function,
  extra: {
    type: String,
    default: "请选择"
  },
  formatter: {
    type: Function,
    default: (e) => e && e.join(",")
  },
  label: String,
  labelWidth: [String, Number],
  title: {
    type: String,
    default: ""
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  okText: {
    type: String,
    default: "确定"
  },
  showToolbar: {
    type: Boolean,
    default: !0
  },
  renderLabel: Function,
  separator: {
    type: String,
    default: ","
  },
  numerable: {
    type: Boolean,
    default: !1
  },
  nullValue: {
    type: [
      String,
      Number,
      Boolean,
      Array
    ],
    default: void 0
  }
}, As = /* @__PURE__ */ H({
  name: "vcm-picker-popup",
  inheritAttrs: !1,
  props: rr,
  emits: [
    "update:modelValue",
    "update:visible",
    "visible-change",
    "close",
    "cancel",
    "ok"
  ],
  setup(e, { emit: t, slots: n }) {
    const a = kt({ merge: !1 }), r = E(!1);
    $(_(() => typeof e.visible == "boolean" ? e.visible : e.modelValue), (o) => {
      r.value = o;
    }, { immediate: !0 }), $(() => r.value, (o) => {
      t("visible-change", o), t("update:modelValue", o), t("update:visible", o);
    });
    const l = (o) => {
      r.value = !1, t(o);
    }, s = () => {
      r.value = !1, t("close");
    };
    return () => m("div", {
      class: [a.value.class, "vcm-picker-popup"],
      style: a.value.style
    }, [m(lc, De(a.value.attrs, {
      modelValue: r.value,
      fixed: !0,
      onClose: s,
      "onUpdate:modelValue": (o) => r.value = o
    }), { default: () => [e.showToolbar && m("div", { class: "vcm-picker-popup__header" }, [
      e.cancelText && m("div", {
        class: "vcm-picker-popup__item is-left",
        onClick: pe(() => l("cancel"), ["stop"])
      }, [e.cancelText]),
      m("div", {
        class: "vcm-picker-popup__item is-title",
        innerHTML: e.title
      }, null),
      e.okText && m("div", {
        class: "vcm-picker-popup__item is-right",
        onClick: pe(() => l("ok"), ["stop"])
      }, [e.okText])
    ]), n.default?.()] })]);
  }
}), Rc = {
  modelValue: {
    type: [
      String,
      Number,
      Boolean,
      Array
    ],
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  },
  cols: {
    type: Number,
    default: 1
  },
  itemStyle: Object,
  cascader: {
    type: Boolean,
    default: !0
  },
  allowDispatch: {
    type: Boolean,
    default: !0
  },
  renderLabel: Function,
  separator: {
    type: String,
    default: ","
  },
  numerable: {
    type: Boolean,
    default: !1
  },
  nullValue: {
    type: [
      String,
      Number,
      Boolean,
      Array
    ],
    default: void 0
  }
}, Pc = (e = []) => Array.isArray(e[0]), Ml = (e) => e && typeof e == "object" ? e : {
  label: e,
  value: e
}, Yc = (e) => e?.value, La = (e) => typeof e?.label < "u" ? e.label : e?.value, hi = (e) => (e || []).map((t) => {
  const n = Ml(t);
  return {
    ...n,
    label: La(n),
    value: Yc(n),
    hasChildren: !!(n.children && n.children.length > 0),
    loading: !1
  };
}), gs = (e = [], t = []) => {
  const n = [], a = [];
  return t.length !== 0 && (Pc(t) ? e.forEach((r, l) => {
    const s = t[l];
    if (!s) return;
    const o = s.map(Ml).find((i) => i.value == r);
    o && (a.push(o), n.push(La(o)));
  }) : e.reduce((r, l) => {
    const s = r.map(Ml).find((o) => o.value == l);
    return s ? (a.push(s), n.push(La(s)), s.children || []) : [];
  }, t)), qa({
    value: e,
    label: n,
    data: a
  });
}, Fb = "vcm-picker-col", Kt = 34, kb = bt("transform").camel, Eb = bt("transform").kebab, Bb = bt("transition").camel, xb = /* @__PURE__ */ H({
  name: Fb,
  props: {
    index: Number,
    data: {
      type: Array,
      default: () => []
    },
    itemStyle: Object,
    value: [
      String,
      Number,
      Boolean
    ],
    renderLabel: Function
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = E(0), a = E(!1), r = E(!0), l = E(0), s = E(0), o = _(() => {
      const A = e.data.findIndex((v) => Yc(v) == e.value);
      return A >= 0 ? A : 0;
    }), i = _(() => Math.max(e.data.length - 1, 0) * Kt), u = _(() => ({
      height: `${Kt}px`,
      lineHeight: `${Kt}px`
    })), c = _(() => ({ [kb]: `translate3d(0, ${(o.value * Kt + n.value) * -1}px, 0)` })), d = _(() => ({ [Bb]: `${Eb} ${r.value ? "500" : "0"}ms ease-out` })), g = (A) => {
      e.data.length && (a.value = !0, r.value = !1, l.value = A, s.value = Date.now());
    }, h = (A) => {
      a.value && (n.value = l.value - A);
    }, f = (A) => {
      if (!a.value || !e.data.length) return;
      let v;
      const b = Date.now() - s.value;
      if (b > 500 || b < 50) v = o.value * Kt + n.value;
      else {
        const D = (l.value - A) / b;
        v = o.value * Kt + D * 500;
      }
      let C;
      v <= 0 ? C = e.data[0] : v >= i.value ? C = e.data[e.data.length - 1] : C = e.data[Math.round(v / Kt)], t("change", qa(C)), a.value = !1, r.value = !0, l.value = 0, n.value = 0;
    }, p = (A, v) => {
      const b = La(A);
      return typeof e.renderLabel == "function" ? ke(xe, {
        render: e.renderLabel,
        label: b,
        row: A,
        index: v
      }) : typeof b == "function" ? ke(xe, {
        render: b,
        row: A,
        index: v
      }) : b;
    };
    return () => m("div", {
      class: "vcm-picker-col",
      onTouchstart: pe((A) => g(A.touches[0].screenY), ["prevent", "stop"]),
      onTouchmove: pe((A) => h(A.touches[0].screenY), ["prevent", "stop"]),
      onTouchend: pe((A) => f(A.changedTouches[0].screenY), ["prevent", "stop"]),
      onMousedown: pe((A) => g(A.screenY), ["prevent", "stop"]),
      onMousemove: pe((A) => h(A.screenY), ["prevent", "stop"]),
      onMouseup: pe((A) => f(A.screenY), ["prevent", "stop"])
    }, [
      m("div", { class: "vcm-picker-col__mask" }, null),
      m("div", {
        style: u.value,
        class: "vcm-picker-col__indicator"
      }, null),
      m("div", {
        style: [c.value, d.value],
        class: "vcm-picker-col__wrapper"
      }, [e.data.map((A, v) => m("div", {
        key: v,
        style: [u.value, e.itemStyle],
        class: "vcm-picker-col__item"
      }, [p(A, v)]))])
    ]);
  }
}), ms = /* @__PURE__ */ H({
  name: "vcm-picker-view",
  props: Rc,
  emits: [
    "update:modelValue",
    "change",
    "picker-change"
  ],
  setup(e, { emit: t }) {
    const n = Ae("vc-form-item", {}), a = E([]), r = E([]), l = _(() => e.data || []), s = _(() => Math.max(e.cols || 1, 1)), o = () => {
      const g = l.value;
      return (Pc(g) ? g : [g]).slice(0, s.value).map((h) => hi(h));
    }, i = (g = 0) => {
      if (!l.value.length) return [];
      if (!e.cascader || s.value === 1) return o().slice(g);
      let h = l.value;
      const f = [];
      for (let p = 0; p < s.value; p++)
        f[p] = hi(h), h = (h.find((A) => A.value == a.value[p]) || h[0] || {}).children || [];
      return f.slice(g);
    }, u = (g = 0) => {
      const h = a.value.slice(0);
      r.value.forEach((f, p) => {
        if (p < g) return;
        const A = f.find((v) => v.value == h[p]) || f[0];
        A ? h.splice(p, 1, A.value) : h.splice(p, 1);
      }), a.value = h.slice(0, s.value);
    }, c = () => {
      const { label: g, data: h } = gs(a.value, l.value), f = qt(a.value.slice(0), {
        modelValue: e.modelValue,
        numerable: e.numerable,
        separator: e.separator,
        nullValue: e.nullValue,
        max: e.cols
      });
      t("update:modelValue", f, g, h), t("change", f, g, h), e.allowDispatch && n?.change?.(f);
    }, d = (g, h) => {
      a.value.splice(h, 1, g.value), e.cascader && h < s.value - 1 && (a.value.splice(h + 1, s.value - h), r.value.splice(h + 1, s.value - h, ...i(h + 1)), u(h + 1)), t("picker-change", g.value, h, g), c();
    };
    return $(() => [
      e.data,
      e.cols,
      e.cascader
    ], () => {
      r.value = i(), u();
    }, { deep: !0 }), $(() => e.modelValue, (g) => {
      const h = Ue(g, {
        numerable: e.numerable,
        separator: e.separator
      });
      h.length !== 0 && Rt(h, a.value) || (a.value = h, r.value = i(), u());
    }, {
      immediate: !0,
      deep: !0
    }), () => m("div", { class: "vcm-picker-view" }, [Array.from({ length: s.value }).map((g, h) => m(xb, {
      key: h,
      index: h,
      data: r.value[h] || [],
      value: a.value[h],
      itemStyle: e.itemStyle,
      renderLabel: e.renderLabel,
      onChange: (f) => d(f, h)
    }, null))]);
  }
}), _b = "vcm-picker-core", Sb = [
  "title",
  "cancelText",
  "okText",
  "showToolbar"
], Ib = [
  "modelValue",
  "data",
  "itemStyle",
  "cols",
  "cascader",
  "renderLabel",
  "separator",
  "numerable",
  "nullValue"
], Hc = new Oe(/* @__PURE__ */ H({
  name: _b,
  props: {
    ...be(rr, Sb),
    ...be(Rc, Ib),
    visible: {
      type: Boolean,
      default: !0
    },
    onOk: Function,
    onCancel: Function
  },
  emits: [
    "update:modelValue",
    "update:visible",
    "change",
    "cancel",
    "ok",
    "close",
    "portal-fulfilled",
    "picker-change",
    "visible-change"
  ],
  setup(e, { emit: t }) {
    const n = E(!1), a = E([]);
    $(() => e.modelValue, (o) => {
      a.value = Ue(o, {
        numerable: e.numerable,
        separator: e.separator
      });
    }, {
      immediate: !0,
      deep: !0
    }), $(() => e.visible, (o) => {
      n.value = o;
    }), $(() => n.value, (o) => {
      t("visible-change", o), t("update:visible", o);
    }), te(() => {
      n.value = e.visible !== !1;
    });
    const r = () => {
      n.value = !1, t("close"), t("portal-fulfilled"), t("update:visible", !1);
    }, l = () => {
      const o = a.value.slice(0), i = qt(o, {
        modelValue: e.modelValue,
        numerable: e.numerable,
        separator: e.separator,
        nullValue: e.nullValue,
        max: e.cols
      }), { label: u, data: c } = gs(o, e.data);
      n.value = !1, e.onOk ? e.onOk(i, u, c) : t("ok", i, u, c), t("update:modelValue", i, u, c), t("change", i, u, c);
    }, s = () => {
      n.value = !1, e.onCancel ? e.onCancel() : t("cancel");
    };
    return () => m(As, {
      modelValue: n.value,
      title: e.title,
      cancelText: e.cancelText,
      okText: e.okText,
      showToolbar: e.showToolbar,
      onOk: l,
      onCancel: s,
      onClose: r,
      "onUpdate:modelValue": (o) => n.value = o
    }, { default: () => [m(ms, De({
      modelValue: a.value,
      data: e.data,
      cols: e.cols,
      itemStyle: e.itemStyle,
      cascader: e.cascader,
      allowDispatch: !1,
      renderLabel: e.renderLabel,
      separator: e.separator,
      numerable: e.numerable,
      nullValue: e.nullValue,
      "onUpdate:modelValue": (o) => a.value = Ue(o, {
        numerable: e.numerable,
        separator: e.separator
      })
    }, { "onPicker-change": (o, i, u) => t("picker-change", o, i, u) }), null)] });
  }
}), { promise: !1 }), Mb = /* @__PURE__ */ H({
  name: "vcm-picker",
  props: wb,
  emits: [
    "update:modelValue",
    "visible-change",
    "picker-change",
    "ok",
    "cancel",
    "change",
    "close"
  ],
  setup(e, { emit: t, slots: n }) {
    const a = Ae("vc-form-item", {}), r = E([]), l = E(), s = _(() => e.data || []), o = _(() => {
      const { label: c = [] } = gs(r.value, s.value);
      return e.formatter(c) || e.extra;
    });
    $(() => e.modelValue, (c) => {
      const d = Ue(c, {
        numerable: e.numerable,
        separator: e.separator
      });
      Rt(d, r.value) || (r.value = d);
    }, {
      immediate: !0,
      deep: !0
    }), _e(() => {
      l.value?.destroy?.();
    });
    const i = (c, d) => {
      const g = qt(r.value.slice(0), {
        modelValue: e.modelValue,
        numerable: e.numerable,
        separator: e.separator,
        nullValue: e.nullValue,
        max: e.cols
      });
      t("update:modelValue", g, c, d), t("change", g, c, d), a?.change?.(g);
    }, u = async () => {
      try {
        (!s.value || s.value.length === 0) && e.loadData && (await e.loadData(), await fe()), l.value = Hc.popup({
          data: s.value,
          cols: e.cols,
          cascader: e.cascader,
          itemStyle: e.itemStyle,
          title: e.title,
          cancelText: e.cancelText,
          showToolbar: e.showToolbar,
          okText: e.okText,
          modelValue: r.value.slice(0),
          renderLabel: e.renderLabel,
          onVisibleChange: (c) => t("visible-change", c),
          onPickerChange: (c, d, g) => t("picker-change", c, d, g),
          onClose: () => t("close"),
          onOk: (c, d, g) => {
            const h = Ue(c, {
              numerable: e.numerable,
              separator: e.separator
            }), f = qt(h, {
              modelValue: e.modelValue,
              numerable: e.numerable,
              separator: e.separator,
              nullValue: e.nullValue,
              max: e.cols
            });
            r.value = h, t("ok", f, d, g), i(d, g);
          },
          onCancel: () => t("cancel")
        });
      } catch (c) {
        throw new ye("picker", c);
      }
    };
    return () => m("div", {
      class: "vcm-picker",
      onClick: u
    }, [n.default ? n.default({
      label: o.value,
      value: r.value,
      data: s.value
    }) : m(Mc, {
      label: e.label,
      labelWidth: e.labelWidth,
      extra: o.value
    }, null)]);
  }
}), Nb = (e = {}) => {
  const { value: t, modelValue: n, ...a } = e, r = Object.prototype.hasOwnProperty.call(e, "modelValue");
  return Hc.popup({
    ...a,
    modelValue: r ? n : t
  });
};
Object.assign(Mb, {
  open: Nb,
  View: ms,
  Popup: As
});
var Tb = ms, Ob = As, Rb = "vcm-date-picker-view", Pb = "YYYY-MM-DD HH:mm:ss", Wc = /* @__PURE__ */ H({
  name: Rb,
  props: fs,
  emits: [
    "update:modelValue",
    "change",
    "picker-change"
  ],
  setup(e, { emit: t }) {
    const n = Ae("vc-form-item", {}), a = E([]), r = E([]), l = _(() => cs(e.type, e.format)), s = _(() => l.value.length), o = (A) => {
      const v = Il(A, "datetime", Pb);
      return {
        Y: v[0],
        M: v[1],
        D: v[2],
        H: v[3],
        m: v[4],
        s: v[5]
      };
    }, i = (A, v) => {
      const b = o(A);
      return v.every((C) => {
        const D = l.value.indexOf(C);
        return D < 0 || a.value[D] == b[C];
      });
    }, u = (A) => {
      const v = o(e.minDate), b = o(e.maxDate), C = Number(a.value[l.value.indexOf("Y")]) || (/* @__PURE__ */ new Date()).getFullYear(), D = Number(a.value[l.value.indexOf("M")]) || 1;
      switch (A) {
        case "Y":
          return [Number(v.Y), Number(b.Y)];
        case "M":
          return [i(e.minDate, ["Y"]) ? Number(v.M) : 1, i(e.maxDate, ["Y"]) ? Number(b.M) : 12];
        case "D":
          return [i(e.minDate, ["Y", "M"]) ? Number(v.D) : 1, i(e.maxDate, ["Y", "M"]) ? Number(b.D) : Yb(C, D)];
        case "H":
          return e.type === "time" ? [e.startHour, e.endHour] : [i(e.minDate, [
            "Y",
            "M",
            "D"
          ]) ? Number(v.H) : 0, i(e.maxDate, [
            "Y",
            "M",
            "D"
          ]) ? Number(b.H) : 23];
        case "m":
          return e.type === "time" ? [0, 59] : [i(e.minDate, [
            "Y",
            "M",
            "D",
            "H"
          ]) ? Number(v.m) : 0, i(e.maxDate, [
            "Y",
            "M",
            "D",
            "H"
          ]) ? Number(b.m) : 59];
        case "s":
          return e.type === "time" ? [0, 59] : [i(e.minDate, [
            "Y",
            "M",
            "D",
            "H",
            "m"
          ]) ? Number(v.s) : 0, i(e.maxDate, [
            "Y",
            "M",
            "D",
            "H",
            "m"
          ]) ? Number(b.s) : 59];
        case "Q":
          return [1, 4];
        default:
          return [0, 0];
      }
    }, c = () => l.value.map((A) => {
      const [v, b] = u(A);
      return pb(A, v, b);
    }), d = () => {
      const A = a.value.slice(0, s.value);
      return r.value.forEach((v, b) => {
        const C = v.find((D) => D.value == A[b]) || v[0];
        C ? A.splice(b, 1, C.value) : A.splice(b, 1);
      }), Rt(A, a.value) ? !1 : (a.value = A, !0);
    }, g = () => {
      for (let A = 0; A <= s.value; A++)
        if (r.value = c(), !d()) return;
      r.value = c();
    }, h = (A) => {
      const v = hs(A, e.type, e.format)[0] || ds(e.minDate, e.maxDate);
      a.value = Il(v, e.type, e.format), g();
    }, f = () => {
      const A = Va(Oc(a.value, e.type, e.format, e.minDate, e.maxDate), e.type, e.format, e.nullValue);
      t("update:modelValue", A), t("change", A), e.allowDispatch && n?.change?.(A);
    }, p = (A, v, b) => {
      a.value.splice(v, 1, A), g(), t("picker-change", A, v, b), f();
    };
    return $(() => e.modelValue, (A) => {
      h(A);
    }, {
      immediate: !0,
      deep: !0
    }), $(() => [
      e.type,
      e.format,
      e.minDate,
      e.maxDate,
      e.startHour,
      e.endHour
    ], () => {
      h(e.modelValue);
    }), () => m(Tb, De({
      modelValue: a.value,
      data: r.value,
      cols: s.value,
      cascader: !1,
      allowDispatch: !1
    }, { "onPicker-change": p }), null);
  }
}), Yb = (e, t) => t === 4 || t === 6 || t === 9 || t === 11 ? 30 : t === 2 ? e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 29 : 28 : 31, Hb = "vcm-date-picker-core", Wb = [
  "title",
  "cancelText",
  "okText",
  "showToolbar"
], $b = [
  "modelValue",
  "type",
  "format",
  "minDate",
  "maxDate",
  "startHour",
  "endHour",
  "nullValue"
], $c = new Oe(/* @__PURE__ */ H({
  name: Hb,
  props: {
    ...be(rr, Wb),
    ...be(fs, $b),
    visible: {
      type: Boolean,
      default: !0
    },
    onOk: Function,
    onCancel: Function
  },
  emits: [
    "update:modelValue",
    "update:visible",
    "change",
    "cancel",
    "ok",
    "close",
    "portal-fulfilled",
    "picker-change",
    "visible-change"
  ],
  setup(e, { emit: t }) {
    const n = E(!1), a = E(""), r = (i, u = !0) => vb(i, e.type, e.format, e.minDate, e.maxDate, e.nullValue, u);
    $(() => e.modelValue, (i) => {
      a.value = r(i);
    }, {
      immediate: !0,
      deep: !0
    }), $(() => e.visible, (i) => {
      n.value = i;
    }), $(() => n.value, (i) => {
      t("visible-change", i), t("update:visible", i);
    }), te(() => {
      n.value = e.visible !== !1;
    });
    const l = () => {
      n.value = !1, t("close"), t("portal-fulfilled"), t("update:visible", !1);
    }, s = () => {
      const i = r(a.value);
      a.value = i, n.value = !1, e.onOk ? e.onOk(i) : t("ok", i), t("update:modelValue", i), t("change", i);
    }, o = () => {
      n.value = !1, e.onCancel ? e.onCancel() : t("cancel");
    };
    return () => m(Ob, {
      modelValue: n.value,
      title: e.title,
      cancelText: e.cancelText,
      okText: e.okText,
      showToolbar: e.showToolbar,
      onOk: s,
      onCancel: o,
      onClose: l,
      "onUpdate:modelValue": (i) => n.value = i
    }, { default: () => [m(Wc, {
      modelValue: a.value,
      type: e.type,
      format: e.format,
      minDate: e.minDate,
      maxDate: e.maxDate,
      startHour: e.startHour,
      endHour: e.endHour,
      nullValue: e.nullValue,
      allowDispatch: !1,
      onPickerChange: (i, u, c) => t("picker-change", i, u, c),
      "onUpdate:modelValue": (i) => a.value = i
    }, null)] });
  }
}), { promise: !1 }), Vb = /* @__PURE__ */ H({
  name: "vcm-date-picker",
  props: bb,
  emits: [
    "update:modelValue",
    "visible-change",
    "picker-change",
    "ok",
    "cancel",
    "change",
    "close"
  ],
  setup(e, { emit: t, slots: n }) {
    const a = Ae("vc-form-item", {}), r = E(e.modelValue), l = E(), s = _(() => hs(r.value, e.type, e.format)), o = _(() => {
      if (!s.value.length) return e.extra;
      const c = Va(s.value, e.type, e.format, e.nullValue);
      return e.formatter?.(c, ua(e.type, e.format), s.value) || gb(s.value, e.type, e.format) || e.extra;
    });
    $(() => e.modelValue, (c) => {
      r.value = c;
    }, { deep: !0 }), _e(() => {
      l.value?.destroy?.();
    });
    const i = (c) => {
      r.value = c, t("update:modelValue", c), t("change", c), a?.change?.(c);
    }, u = () => {
      l.value = $c.popup({
        type: e.type,
        format: e.format,
        minDate: e.minDate,
        maxDate: e.maxDate,
        startHour: e.startHour,
        endHour: e.endHour,
        title: e.title,
        cancelText: e.cancelText,
        okText: e.okText,
        showToolbar: e.showToolbar,
        nullValue: e.nullValue,
        modelValue: r.value,
        onVisibleChange: (c) => t("visible-change", c),
        onPickerChange: (c, d, g) => t("picker-change", c, d, g),
        onClose: () => t("close"),
        onOk: (c) => {
          t("ok", c), i(c);
        },
        onCancel: () => t("cancel")
      });
    };
    return () => m("div", {
      class: "vcm-date-picker",
      onClick: u
    }, [n.default ? n.default({
      label: o.value,
      value: r.value
    }) : m(Mc, {
      label: e.label,
      labelWidth: e.labelWidth,
      arrow: e.arrow,
      extra: o.value
    }, null)]);
  }
}), Lb = (e = {}) => {
  const { value: t, modelValue: n, ...a } = e, r = Object.prototype.hasOwnProperty.call(e, "modelValue");
  return $c.popup({
    ...a,
    modelValue: r ? n : t
  });
}, Qb = Object.assign(Vb, {
  open: Lb,
  View: Wc
}), Kb = 5, Vc = new MessageChannel(), qr = /* @__PURE__ */ new Map(), Nl = !1, Gb = () => {
  Nl || (Nl = !0, Vc.port2.postMessage(null));
};
Vc.port1.onmessage = () => {
  Nl = !1;
  const e = qr.entries().next();
  if (e.done) return;
  const [t, n] = e.value;
  qr.delete(t);
  const a = performance.now();
  n({
    didTimeout: !1,
    timeRemaining: () => Math.max(0, Kb - (performance.now() - a))
  }), qr.size > 0 && Gb();
};
var Lc = {
  vertical: Boolean,
  wrapperSize: {
    type: Number,
    default: 1
  },
  contentSize: {
    type: Number,
    default: 1
  },
  always: {
    type: Boolean,
    default: !1
  },
  thumbMinSize: {
    type: Number,
    default: 30
  },
  thumbStyle: [
    Object,
    String,
    Array
  ],
  thumbClass: [
    Object,
    String,
    Array
  ],
  offset: {
    type: Array,
    default: () => [0, 0]
  }
}, Tl = {
  native: {
    type: Boolean,
    default: !ID()
  },
  autoResize: {
    type: Boolean,
    default: !0
  },
  trackOffsetX: {
    type: Array,
    default: () => [
      0,
      0,
      0,
      0
    ]
  },
  trackOffsetY: {
    type: Array,
    default: () => [
      0,
      0,
      0,
      0
    ]
  },
  to: String,
  trackStyle: [
    Object,
    String,
    Array
  ],
  trackClass: [
    Object,
    String,
    Array
  ],
  wrapperW: Number,
  wrapperH: Number,
  contentH: Number,
  contentW: Number,
  scrollX: Number,
  scrollY: Number,
  fit: Boolean,
  ...be(Lc, [
    "always",
    "thumbMinSize",
    "thumbStyle",
    "thumbClass"
  ])
}, Qc = {
  tag: {
    type: String,
    default: "div"
  },
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  wrapperStyle: {
    type: [
      String,
      Array,
      Object
    ],
    default: ""
  },
  wrapperClass: {
    type: [
      String,
      Array,
      Object
    ],
    default: ""
  },
  contentStyle: {
    type: [
      String,
      Array,
      Object
    ],
    default: ""
  },
  contentClass: {
    type: [
      String,
      Array,
      Object
    ],
    default: ""
  },
  showBar: {
    type: Boolean,
    default: !0
  },
  barTo: Tl.to,
  ...be(Tl, [
    "always",
    "thumbMinSize",
    "thumbStyle",
    "thumbClass",
    "trackStyle",
    "trackClass",
    "trackOffsetX",
    "trackOffsetY",
    "autoResize",
    "native"
  ])
}, jb = "vc-scroller-track", Ub = {
  vertical: {
    scroll: "scrollTop",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    scroll: "scrollLeft",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, fi = /* @__PURE__ */ H({
  name: jb,
  props: Lc,
  emits: ["change"],
  inheritAttrs: !1,
  setup(e, { emit: t, expose: n, attrs: a }) {
    const r = z(), l = E(), s = E(), o = E(!1), i = E(!1), u = E(!1), c = E(0), d = _(() => Ub[e.vertical ? "vertical" : "horizontal"]), g = _(() => e.offset[0] + e.offset[1]), h = _(() => e.wrapperSize - g.value), f = _(() => {
      const T = h.value * (e.wrapperSize / e.contentSize);
      return T && T < h.value ? T : 0;
    }), p = _(() => Math.max(f.value, e.thumbMinSize)), A = _(() => h.value - p.value), v = _(() => Math.max(e.thumbMinSize - f.value, 0) / A.value), b = _(() => {
      const T = c.value / e.wrapperSize * f.value * (1 - v.value);
      return T > A.value ? A.value : T;
    }), C = _(() => {
      const { size: T } = d.value;
      return { [T]: p.value + "px" };
    });
    let D, B = 0, y = 0;
    const x = (T) => {
      c.value = T;
    }, S = (T) => {
      T = Math.min(Math.max(T, 0), A.value), c.value = T / (1 - v.value) / f.value * e.wrapperSize, t("change", c.value);
    }, I = (T) => {
      if (o.value === !1 || !B) return;
      const { client: V } = d.value, G = Math.min(Math.max(0, y + T[V] - B), A.value);
      S(G);
    }, P = () => {
      o.value = !1, B = 0, ln(Xe(document.body), "mousemove", I), ln(Xe(document.body), "mouseup", P), document.body.onselectstart = D, i.value && (u.value = !1);
    }, W = (T) => {
      T.stopImmediatePropagation(), o.value = !0, ga(Xe(document.body), "mousemove", I), ga(Xe(document.body), "mouseup", P), D = document.body.onselectstart, document.body.onselectstart = () => !1;
    }, O = (T) => {
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button)) return;
      window.getSelection()?.removeAllRanges(), W(T);
      const { client: V } = d.value;
      B = T[V], y = b.value;
    }, k = (T) => {
      const { client: V, direction: G } = d.value, q = T[V] - T.target.getBoundingClientRect()[G] - p.value / 2;
      S(q);
    }, w = () => {
      i.value = !1, u.value = !!f.value;
    }, M = () => {
      i.value = !0, u.value = o.value;
    }, N = Dl(() => LA(() => {
      s.value && (s.value.style[bt("transform").camel] = `translate${d.value.axis}(${b.value}px)`);
    }), 10);
    return te(() => {
      const T = r?.vnode?.el?.parentElement;
      T && (ga(Xe(T), "mousemove", w), ga(Xe(T), "mouseleave", M));
    }), _e(() => {
      const T = r?.vnode?.el?.parentElement;
      T && (ln(Xe(document.body), "mousemove", I), ln(Xe(document.body), "mouseup", P), ln(Xe(T), "mousemove", w), ln(Xe(T), "mouseleave", M));
    }), $(() => b.value, () => {
      s.value && N();
    }, { immediate: !0 }), n({
      scrollTo: x,
      target: l
    }), () => m(la, null, { default: () => [ce(m("div", {
      ref: l,
      class: ["is-" + d.value.key, "vc-scroller-track"],
      style: a.style,
      onMousedown: k
    }, [m("div", {
      ref: s,
      class: [e.thumbClass, "vc-scroller-track__thumb"],
      style: [e.thumbStyle, C.value],
      onMousedown: O
    }, null)]), [[he, f.value && (e.always || u.value)]])] });
  }
}), Kc = /* @__PURE__ */ H({
  name: "vc-scroller-bar",
  props: Tl,
  emits: ["change"],
  setup(e, { emit: t, expose: n }) {
    const a = E(!0), r = E(), l = E(), s = _(() => ({
      always: e.always,
      thumbMinSize: e.thumbMinSize,
      thumbStyle: e.thumbStyle,
      thumbClass: e.thumbClass,
      class: e.trackClass
    })), o = _(() => {
      if (e.to || !e.fit) return {};
      const c = e.contentW - e.wrapperW, d = e.contentH - e.wrapperH, g = e.scrollX >= c ? c : e.scrollX, h = e.scrollY >= d ? d : e.scrollY;
      return { [bt("transform").camel]: `translate(${g}px, ${h}px)` };
    }), i = (c) => {
      !l.value || !r.value || !c || (typeof c.y < "u" && l.value.scrollTo(c.y), typeof c.x < "u" && r.value.scrollTo(c.x));
    }, u = () => {
      typeof document < "u" && e.to && (a.value = !document.querySelector(e.to));
    };
    return te(() => {
      e.native || fe(u);
    }), $(() => e.to, u), n({
      scrollTo: i,
      trackX: r,
      trackY: l
    }), () => !e.native && (!a.value || !e.to) && m(_d, {
      to: e.to,
      disabled: !e.to
    }, { default: () => [m(fi, De({ ref: r }, s.value, {
      offset: [e.trackOffsetX[3], e.trackOffsetX[1]],
      "wrapper-size": e.wrapperW,
      "content-size": e.contentW,
      style: [
        {
          left: e.trackOffsetX[3] + "px",
          bottom: e.trackOffsetX[2] + "px"
        },
        e.trackStyle,
        o.value
      ],
      onChange: (c) => t("change", { x: c })
    }), null), m(fi, De({ ref: l }, s.value, {
      offset: [e.trackOffsetY[0], e.trackOffsetY[2]],
      "wrapper-size": e.wrapperH,
      "content-size": e.contentH,
      style: [
        {
          top: e.trackOffsetY[0] + "px",
          right: e.trackOffsetY[1] + "px"
        },
        e.trackStyle,
        o.value
      ],
      vertical: !0,
      onChange: (c) => t("change", { y: c })
    }), null)] });
  }
}), Gc = (e) => {
  const t = z(), n = E(), a = E(), r = E(), l = E(0), s = E(0), o = E(0), i = E(0), u = E(0), c = E(0), d = t.props, g = _(() => {
    const y = {};
    return d.height && (y.height = typeof d.height != "number" ? d.height : `${d.height}px`), d.maxHeight && (y.maxHeight = typeof d.maxHeight != "number" ? d.maxHeight : `${d.maxHeight}px`), [d.wrapperStyle, y];
  }), h = _(() => [
    d.wrapperClass,
    d.native ? "is-native" : "is-hidden",
    "vc-scroller__wrapper"
  ]), f = async () => {
    a.value && (o.value = a.value.clientWidth, i.value = a.value.clientHeight, await fe(), u.value = a.value.scrollHeight, c.value = a.value.scrollWidth);
  }, p = (y) => {
    y ? (s.value = y.y ?? s.value, l.value = y.x ?? l.value) : (s.value = a.value.scrollTop, l.value = a.value.scrollLeft), n.value?.scrollTo?.(y || {
      x: l.value,
      y: s.value
    });
  }, A = async (y) => {
    await f(), p(y);
  }, v = [], b = (y) => {
    const x = {
      scrollLeft: (y && y.x) ?? l.value,
      scrollTop: (y && y.y) ?? s.value,
      clientWidth: o.value,
      clientHeight: i.value,
      scrollWidth: c.value,
      scrollHeight: u.value,
      getBoundingClientRect: () => a.value?.getBoundingClientRect()
    }, S = {
      target: x,
      currentTarget: x
    };
    t.emit("scroll", S), v.forEach((I) => I(S));
  }, C = (y) => {
    p(y), y && typeof y.x < "u" && (a.value.scrollLeft = y.x), y && typeof y.y < "u" && (a.value.scrollTop = y.y), b(y);
  }, D = () => {
    p(), b();
  };
  te(() => {
    d.autoResize && (de.on(a.value, A), de.on(r.value, A));
  }), _e(() => {
    d.autoResize && (de.off(a.value, A), de.off(r.value, A)), v.splice(0, v.length);
  });
  const B = {
    wrapper: a,
    content: r,
    scrollTo: C,
    refresh: A,
    scrollLeft: l,
    scrollTop: s,
    clientWidth: o,
    clientHeight: i,
    scrollHeight: u,
    scrollWidth: c,
    setScrollTop: (y) => {
      C({ y });
    },
    setScrollLeft: (y) => {
      C({ x: y });
    },
    on: (y) => {
      v.push(y);
    },
    off: (y) => {
      v.splice(v.indexOf(y), 1);
    }
  };
  return e(B), Ot("vc-scroller", Ke(B)), {
    bar: n,
    wrapper: a,
    content: r,
    wrapperStyle: g,
    wrapperClass: h,
    scrollTo: C,
    scrollX: l,
    scrollY: s,
    wrapperW: o,
    wrapperH: i,
    contentH: u,
    contentW: c,
    handleScroll: D,
    handleBarChange: C,
    refreshPosition: p
  };
}, ca = /* @__PURE__ */ H({
  name: "vc-scroller",
  props: Qc,
  emits: ["scroll"],
  setup(e, { slots: t, expose: n }) {
    const a = e.tag, { bar: r, wrapper: l, content: s, wrapperStyle: o, wrapperClass: i, scrollX: u, scrollY: c, wrapperW: d, wrapperH: g, contentH: h, contentW: f, handleBarChange: p, handleScroll: A } = Gc(n);
    return () => m("div", { class: "vc-scroller" }, [m("div", {
      ref: l,
      style: o.value,
      class: i.value,
      onScroll: A
    }, [m(a, {
      ref: s,
      style: e.contentStyle,
      class: [e.contentClass, "vc-scroller__content"]
    }, { default: () => [t.default?.()] })]), e.showBar && l.value && s.value && m(Kc, {
      ref: r,
      wrapperW: d.value,
      wrapperH: g.value,
      contentW: f.value,
      contentH: h.value,
      scrollX: u.value,
      scrollY: c.value,
      native: e.native,
      to: e.barTo,
      always: e.always,
      thumbMinSize: e.thumbMinSize,
      thumbStyle: e.thumbStyle,
      thumbClass: e.thumbClass,
      trackOffsetX: e.trackOffsetX,
      trackOffsetY: e.trackOffsetY,
      onChange: p
    }, null)]);
  }
});
Object.assign({}, Qc, { stopPropagation: {
  type: Boolean,
  default: !0
} });
var jc = /* @__PURE__ */ H({
  name: "vc-drawer",
  props: {
    title: [
      String,
      Boolean,
      Function
    ],
    content: {
      type: [String, Function],
      default: ""
    },
    modelValue: {
      type: Boolean,
      default: !1
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 300
    },
    mask: {
      type: Boolean,
      default: !0
    },
    maskClosable: {
      type: Boolean,
      default: !0
    },
    scrollable: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "right"
    },
    maskStyle: [Object, String],
    wrapperClass: [Object, String],
    wrapperStyle: [Object, String],
    contentStyle: [Object, String],
    contentClass: [Object, String],
    closeWithCancel: {
      type: Boolean,
      default: !0
    },
    okText: {
      type: [String, Boolean],
      default: "确定"
    },
    cancelText: {
      type: [String, Boolean],
      default: "取消"
    },
    okDisabled: {
      type: Boolean,
      default: !1
    },
    cancelDisabled: {
      type: Boolean,
      default: !1
    },
    footer: {
      type: Boolean,
      default: !0
    },
    /**
    * 兼容portal设计, 实现Promise方式
    */
    onOk: { type: Function },
    onCancel: { type: Function }
  },
  emits: [
    "close",
    "update:modelValue",
    "visible-change"
  ],
  setup(e, { emit: t, slots: n, expose: a }) {
    const r = z(), l = E(!1), s = _(() => ({ [`is-${e.placement}`]: !0 })), o = _(() => e.placement === "top" || e.placement === "bottom" ? { height: `${e.height}px` } : { width: `${e.width}px` });
    $(() => e.modelValue, (h) => {
      l.value = h;
    }, { immediate: !0 });
    const i = (h, f) => {
      if (!l.value) return;
      const p = f && f(h);
      if (p && p.then) return p.then((A) => (l.value = !1, A));
      (!p || p === !0) && (l.value = !1);
    }, u = (h, f) => {
      (f || e.maskClosable && h.target.classList.contains("vc-drawer__wrapper")) && (e.closeWithCancel ? i(h, g) : l.value = !1);
    }, c = () => {
      !r.isUnmounted && (t("close"), t("update:modelValue", !1), t("visible-change", !1));
    }, d = (...h) => (r.vnode.props?.onOk || e.onOk || (() => {
    }))(...h), g = (...h) => (r.vnode.props?.onCancel || e.onCancel || (() => {
    }))(...h);
    return ns(l), a({
      isActive: l,
      toggle(h) {
        h = typeof h == "boolean" ? h : !l.value, l.value = h;
      }
    }), () => m("div", { class: [s.value, "vc-drawer"] }, [m(la, { delay: 50 }, { default: () => [ce(m("div", {
      style: e.maskStyle,
      class: "vc-drawer__mask",
      onClick: (h) => u(h, e.maskClosable)
    }, null), [[he, e.mask && l.value]])] }), m(er, {
      mode: e.placement,
      onAfterLeave: c
    }, { default: () => [ce(m("div", {
      class: [e.wrapperClass, "vc-drawer__wrapper"],
      style: [o.value, e.wrapperStyle]
    }, [m("div", { class: [{ "is-no-footer": !e.footer || !e.cancelText && !e.okText }, "vc-drawer__container"] }, [
      m("div", { class: "vc-drawer__header" }, [n.header ? n.header() : typeof e.title == "string" ? m("div", {
        class: "vc-drawer__title",
        innerHTML: e.title
      }, null) : typeof e.title == "function" && m(xe, { render: e.title }, null), m("a", {
        class: "vc-drawer__close",
        onClick: (h) => u(h, !0)
      }, [m(ee, { type: "close" }, null)])]),
      m("div", { class: "vc-drawer__content-container" }, [m(ca, {
        native: !1,
        contentClass: [e.contentClass, "vc-drawer__content"],
        contentStyle: e.contentStyle
      }, { default: () => [typeof e.content == "string" ? m("div", { innerHTML: e.content }, null) : typeof e.content == "function" ? m(xe, { render: e.content }, null) : null, n.default?.()] })]),
      e.footer && (e.cancelText || e.okText) && m("div", { class: ["vc-drawer__footer"] }, [n["footer-extra"]?.(), n.footer ? n.footer?.() : m(vt, null, [e.cancelText && m(je, {
        style: "margin-right: 8px;",
        disabled: e.cancelDisabled,
        onClick: (h) => i(h, g)
      }, { default: () => [e.cancelText] }), e.okText && m(je, {
        type: "primary",
        disabled: e.okDisabled,
        onClick: (h) => i(h, d)
      }, { default: () => [e.okText] })])])
    ])]), [[he, l.value]])] })]);
  }
}), Uc = new Oe(jc, {
  leaveDelay: 0,
  multiple: !0
}), Zb = () => Uc.destroy(), Jb = (e) => {
  const t = Uc.popup({
    ...e,
    onFulfilled: e.onClose,
    onClose: null
  });
  return t.wrapper.toggle?.(!0), t;
};
Object.assign(jc, {
  open: Jb,
  destroy: Zb
});
var $w = /* @__PURE__ */ H({
  name: "vc-dropdown",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    portalClass: [String, Object],
    placement: {
      type: String,
      default: "bottom"
    },
    trigger: {
      type: String,
      default: "hover"
    },
    arrow: {
      type: Boolean,
      default: !1
    }
  },
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "ready",
    "close",
    "visible-change",
    "click"
  ],
  setup(e, { slots: t, emit: n, expose: a }) {
    const r = kt({ merge: !1 }), l = E(!1), s = E(rt("dropdown")), o = _(() => ({
      style: r.value.style,
      class: r.value.class
    })), i = _(() => r.value.attrs);
    $(() => e.modelValue, (g) => {
      l.value = g;
    }, { immediate: !0 });
    const u = () => {
      n("update:modelValue", l.value), n("visible-change", l.value);
    }, c = (g) => {
      l.value = g, u();
    };
    return a({
      close: () => {
        l.value = !1, u();
      },
      dropdownId: s
    }), () => m(Cn, De(i.value, {
      modelValue: l.value,
      placement: e.placement,
      trigger: e.trigger,
      arrow: e.arrow,
      portalClass: [
        "is-padding-none",
        "vc-dropdown-wrapper",
        e.portalClass
      ],
      class: ["vc-dropdown", o.value.class],
      style: o.value.style,
      onReady: () => n("ready"),
      onClose: () => n("close"),
      onVisibleChange: c
    }), {
      default: () => t?.default?.(),
      content: () => t?.content?.()
    });
  }
}), Vw = /* @__PURE__ */ H({
  name: "vc-dropdown-menu",
  setup(e, { slots: t }) {
    return () => m("ul", { class: "vc-dropdown-menu" }, [t?.default?.()]);
  }
}), Lw = /* @__PURE__ */ H({
  name: "vc-dropdown-item",
  emits: ["click"],
  props: {
    value: {
      type: [String, Number],
      value: void 0
    },
    label: {
      type: [String, Number],
      value: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    selected: {
      type: Boolean,
      default: !1
    },
    divided: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !0
    }
  },
  setup(e, { slots: t, emit: n }) {
    const a = zy("dropdown", "dropdownId"), r = _(() => typeof e.value > "u" ? e.label : e.value), l = _(() => ({
      "is-selected": e.selected,
      "is-divided": e.divided,
      "is-disabled": e.disabled
    })), s = (o) => {
      e.disabled || (n("click", r.value, o), a.emit("click", r.value, o), e.closable && a.exposed?.close());
    };
    return () => m("li", {
      class: [l.value, "vc-dropdown-item"],
      onClick: s
    }, [t.default ? t.default?.() : e.label]);
  }
}), zb = /* @__PURE__ */ H({
  name: "vc-image-preview",
  props: { tag: {
    type: String,
    default: "div"
  } },
  setup(e, { slots: t }) {
    return () => m("div", { class: "vc-image-preview" }, [t?.default?.()]);
  }
}), Xb = window.innerWidth, qb = window.innerHeight, e1 = (e) => new Promise((t) => {
  const n = new Image();
  let a, r;
  n.onload = () => {
    const l = n.naturalWidth || n.width, s = n.naturalHeight || n.height;
    l > s ? (a = Math.min(Xb, l), r = a / l * s, t({
      width: a,
      height: r
    })) : (r = Math.min(qb, s), a = r / s * l, t({
      width: a,
      height: r
    }));
  }, n.onerror = () => t({}), n.src = e;
}), t1 = async (e) => {
  const { data: t, current: n, ...a } = e, r = tt.globalEvent, l = t.map((o) => typeof o == "string" ? { src: o } : {
    ...o,
    src: o.value || o.source || o.src
  });
  for (let o = 0; o < l.length; o++) l[o].width || (l[o] = {
    ...l[o],
    ...await e1(l[o].src)
  });
  const s = new mD({
    pswpModule: () => import("./photoswipe.esm-CClfKnLq.js"),
    closeTitle: "关闭(Esc)",
    zoomTitle: "缩放",
    arrowPrevTitle: "上一张",
    arrowNextTitle: "下一张",
    errorMsg: "网络异常 图片加载失败",
    indexIndicatorSep: " / ",
    wheelToZoom: !0,
    initialZoomLevel: "fit",
    secondaryZoomLevel: 4,
    maxZoomLevel: 10,
    ...a
  });
  s.init(), s.loadAndOpen(n || 0, l, {
    x: r?.clientX,
    y: r?.clientY
  });
};
Object.assign(zb, { open: t1 });
var n1 = (e, t) => e.indexOf(t, e.length - t.length) !== -1, a1 = (e, t) => {
  if (e && e instanceof Blob && e.type && t) {
    const n = Array.isArray(t) ? t : t.split(","), a = e.name || "", r = e.type, l = r.replace(/\/.*$/, "");
    return n.some((s) => {
      const o = s.trim();
      return o.charAt(0) === "." ? n1(a.toLowerCase(), o.toLowerCase()) : /\/\*$/.test(o) ? l === o.replace(/\/.*$/, "") : r === o;
    });
  }
  return !0;
}, Zc = H({
  name: "vc-upload",
  props: {
    tag: {
      type: [String, Object],
      default: "span"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    max: {
      type: Number,
      default: 1
    },
    accept: String,
    size: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ""
    },
    url: String,
    body: {
      type: Object,
      default: () => ({})
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    mode: {
      type: String,
      default: ""
    },
    showTaskManager: {
      type: Boolean,
      default: !1
    },
    directory: {
      type: Boolean,
      default: !1
    },
    enhancer: Function,
    parallel: {
      type: Boolean,
      default: !0
    },
    showMessage: {
      type: Boolean,
      default: !0
    },
    showToast: {
      type: Boolean,
      default: !1
    },
    showLoading: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "message",
    "error",
    "begin",
    "request",
    "response",
    "file-before",
    "file-start",
    "file-progress",
    "file-success",
    "file-error",
    "complete"
  ],
  setup(e, { emit: t, slots: n, expose: a }) {
    const r = z(), l = E(), s = E(rt()), o = Ke({}), i = Ke({
      error: 0,
      success: 0,
      total: 0,
      responses: [],
      queues: []
    });
    let u = !1;
    const c = () => {
      Object.assign(i, {
        error: 0,
        success: 0,
        total: 0,
        responses: [],
        queues: []
      });
    }, d = async (S = {}, I) => {
      throw S.message = await (r.vnode.props?.onMessage || tt.options.Upload?.onMessage || (() => {
      }))(S, I) || S.message || I, e.showMessage ? El.error(S.message, 2500) : e.showToast && ss.info(S.message, 2500), t("error", S), new ye("vc-upload", S);
    }, g = (S) => {
      i.total++, !e.parallel && i.queues && i.queues.length > 0 && i.queues.shift()(), i.total === S.total && (e.showLoading && A?.destroy?.(), t("complete", { ...i }), c());
    }, h = (S) => {
      Object.keys(o).forEach((I) => {
        o[I] && o[I].cancel(), delete o[I];
      });
    }, f = async (S) => {
      if (!u) return;
      const { mode: I, size: P } = e, W = r.vnode.props?.onRequest || tt.options.Upload?.onRequest || (() => {
      }), O = r.vnode.props?.onResponse || tt.options.Upload?.onResponse || (() => {
      }), k = I.replace(/s$/, ""), w = async (N, T) => {
        delete o[S.uploadId], i.error++, t("file-error", N, S, { ...i }, k), d(N, T), g(S);
      }, M = async (N) => {
        try {
          let T = await O(N, F) || N;
          if (N && T === N) {
            const V = N.responseType ? N.responseText : N.response;
            try {
              T = JSON.parse(V);
            } catch {
              T = V;
            }
          }
          delete o[S.uploadId], i.success++, i.responses = [...i.responses, T], t("file-success", T, S, { ...i }, k), g(S);
        } catch (T) {
          w(T, "上传远程失败，请重试");
        }
      };
      let F = {
        url: e.url,
        headers: e.headers,
        body: {
          ...e.body,
          [e.name || tt.options.Upload?.name || "file"]: S.target
        },
        timeout: null,
        file: S.target
      };
      try {
        if (P && S.size > P * 1024 * 1024) {
          w({}, `上传失败，大小限制为${P}MB`);
          return;
        }
        if (t("file-start", S, k), F = await W(F, r) || F, typeof F.url > "u") {
          M();
          return;
        }
        const N = new XMLHttpRequest();
        N.open("POST", F.url), F.timeout && (N.timeout = F.timeout), N.onreadystatechange = () => {
          N.readyState !== 4 || N.status === 0 || (N.status >= 200 && N.status < 300 ? M(N) : w({}, "服务异常"));
        }, N.onabort = (V) => w(V, "上传取消"), N.ontimeout = (V) => w(V, "上传超时"), N.onerror = (V) => w(V, "调用异常"), N.upload.onprogress = (V) => {
          const G = V.loaded / V.total;
          t("file-progress", {
            progress: G,
            percent: +(G * 100).toFixed(2),
            target: V
          }, S, k);
        };
        for (const V in F.headers) N.setRequestHeader(V, F.headers[V]);
        const T = new FormData();
        for (const V in F.body) T.append(V, F.body[V]);
        N.send(T), o[S.uploadId] = { cancel: () => N && N.abort() };
      } catch (N) {
        console.log(N), w(N, "上传解析失败，请重试");
      }
    }, p = async (S, I) => {
      const { onFileBefore: P = () => {
      } } = r.vnode.props || {};
      try {
        const W = await P(S, I) || S;
        f(W);
      } catch {
        i.error++, g(S);
      }
    };
    let A;
    const v = (S) => {
      let I = Array.prototype.slice.call(S);
      I = I.filter((W) => a1(W, e.accept));
      const P = I.length;
      if (P === 0) {
        d({}, `文件格式限制：${e.accept}`);
        return;
      } else if (P > e.max) {
        d({}, e.directory ? `文件夹内文件的数量不能超过${e.max}个` : `可选文件数量不能超过${e.max}个`);
        return;
      }
      c(), e.showLoading && (A = El.loading("上传中...")), t("begin", I), i.queues = I.map((W, O) => {
        const k = {
          uploadId: rt(),
          current: O + 1,
          total: P,
          percent: 0,
          size: W.size,
          name: W.name,
          target: W
        };
        return () => {
          p(k, I);
        };
      }), e.parallel ? i.queues.forEach((W) => W()) : i.queues.shift()?.();
    }, b = (S) => {
      const I = l.value;
      if (S.target.tagName === "INPUT" || !I) return;
      let { enhancer: P } = tt.options.Upload || {};
      P = e.enhancer || P || (() => !1);
      const W = P(r);
      if (W && W.then) {
        let O = !1;
        W.then((k) => (O = typeof k > "u" ? !0 : !!k, k)).finally(() => {
          O || I.click?.();
        });
        return;
      }
      W || I.click();
    }, C = (S) => {
      v(S.target.files), s.value = rt();
    }, D = (S) => {
      if (S.type === "dragover") {
        S.preventDefault();
        return;
      }
      v(S.dataTransfer.files), S.preventDefault();
    };
    te(() => {
      u = !0;
    }), Ct(() => {
      u = !1, h();
    });
    const B = _(() => [{
      "vc-upload": !0,
      "vc-upload-disabled": e.disabled
    }]), y = _(() => e.disabled ? {} : {
      onClick: b,
      onDrop: D,
      onDragover: D
    }), x = _(() => ({
      ref: (S) => l.value = S,
      key: s.value,
      type: "file",
      accept: e.accept,
      multiple: e.max > 1,
      webkitdirectory: e.directory,
      style: { display: "none" },
      onChange: C
    }));
    return a({
      uploadFiles: v,
      click: () => {
        l.value?.click();
      }
    }), () => ke(e.tag, {
      class: B.value,
      ...y.value
    }, [ke("input", x.value), n?.default?.()]);
  }
}), r1 = new Oe(Zc, { leaveDelay: 0 }), l1 = (e) => {
  const { slient: t = !1, ...n } = e, a = n.onComplete || (() => {
  }), r = r1.popup({
    ...n,
    onComplete: async (l) => {
      a(l), l.total === l.error ? r.reject(l) : r.resolve(l);
    }
  });
  return !t && r.wrapper?.click(), r;
};
Object.assign(Zc, { open: l1 });
var s1 = {
  tag: {
    type: String,
    default: "form"
  },
  model: { type: Object },
  rules: { type: Object },
  labelWidth: { type: Number },
  showMessage: {
    type: Boolean,
    default: !0
  },
  inline: {
    type: Boolean,
    default: !1
  },
  labelPosition: {
    type: String,
    default: "right"
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  styleless: {
    type: Boolean,
    default: !1
  },
  contentStyle: [Object, String],
  contentClass: [Object, String],
  labelStyle: [Object, String],
  labelClass: [Object, String],
  errorStyle: [Object, String],
  errorClass: [Object, String],
  nestedContentStyle: [Object, String],
  nestedContentClass: [Object, String],
  nestedLabelStyle: [Object, String],
  nestedLabelClass: [Object, String],
  nestedErrorStyle: [Object, String],
  nestedErrorClass: [Object, String]
}, o1 = (e, t = {}) => {
  const n = z().props, a = [];
  Ot("vc-form", {
    props: n,
    add: (g) => {
      g && a.push(g);
    },
    remove: (g) => {
      g && a.splice(a.indexOf(g), 1);
    }
  });
  const r = (g) => g ? a.filter((h) => g.includes(h.props.prop)) : a, l = (g) => {
    const h = a.find((f) => f.props.prop === g);
    if (!h) throw new ye("form", "请选择有用的prop值");
    return h;
  }, s = (g) => {
    n.showMessage && t.throwToast?.(g);
  }, o = async (g) => {
    const h = await Promise.all(a.map((f) => f.exposed.getPosition()));
    try {
      return [...g].toSorted((f, p) => {
        const A = a.findIndex((D) => D.props.prop === f.prop), v = a.findIndex((D) => D.props.prop === p.prop), b = h[A], C = h[v];
        return b.top != C.top ? b.top - C.top : b.left - C.left;
      });
    } catch {
      return g;
    }
  }, i = (g) => {
    l(g).vnode?.el?.scrollIntoView?.({
      behavior: "smooth",
      block: "center"
    });
  }, u = (g = {}) => {
    const { fields: h, original: f = {} } = g;
    r(h).forEach((p) => {
      let A;
      try {
        A = Ba(f, p.props.prop).v;
      } catch {
      }
      p.exposed.reset(A);
    });
  }, c = async (g = {}) => {
    const { scroll: h = !0, fields: f } = g;
    if (!a.length) return;
    const p = (await Promise.allSettled(r(f).map((v) => v.exposed.validate("")))).filter((v) => v.status === "rejected").map((v) => v.reason);
    if (!p.length) return;
    const A = await o(p);
    throw s(A[0].msg || A[0].message), h && i(A[0].prop), A;
  };
  e({
    reset: u,
    validate: c,
    getField: l,
    validateField: async (g, h = {}) => {
      try {
        await c({
          ...h,
          fields: [g]
        });
      } catch (f) {
        throw f[0];
      }
    }
  });
}, i1 = {
  label: {
    type: String,
    default: ""
  },
  labelWidth: { type: Number },
  prop: { type: String },
  required: {
    type: [Boolean, String],
    default: !1
  },
  asterisk: {
    type: Boolean,
    default: !0
  },
  error: { type: String },
  rules: { type: [Array, Object] },
  resetByRulesChanged: {
    type: Boolean,
    default: !1
  },
  showMessage: {
    type: Boolean,
    default: !0
  },
  labelFor: { type: String },
  styleless: {
    type: Boolean,
    default: !1
  },
  labelPosition: { type: String },
  contentStyle: [Object, String],
  contentClass: [Object, String],
  labelStyle: [Object, String],
  labelClass: [Object, String],
  errorStyle: [Object, String],
  errorClass: [Object, String]
}, u1 = (e) => (e instanceof Array && (e = e.filter((t) => t !== "")), e), el = (e) => e instanceof Array ? e : e ? [e] : [], c1 = (e) => {
  const t = Ae("vc-form"), n = z(), a = n.props, { slots: r } = n;
  if (!t?.props) throw new ye("form-item", "form-item需要在form内使用");
  const l = Ae("vc-form-item", {}), s = E(""), o = E("");
  let i = !1, u;
  const c = _(() => {
    const F = t.props.rules;
    let N = el(a.rules);
    if (!N.length && F && a.prop) try {
      const { v: T } = Ba(F, a.prop.replace(/\.[0-9]+\./g, "."));
      N = el(T);
    } catch {
      const T = F[a.prop];
      N = el(T);
    }
    return N;
  }), d = _(() => {
    if (a.required) return !!a.required;
    let F = !1;
    for (let N = 0; N < c.value.length && (F = !!c.value[N].required, !F); N++)
      ;
    return F;
  }), g = _(() => a.labelPosition || t.props.labelPosition), h = _(() => ({
    "is-required": d.value && a.asterisk,
    "is-error": s.value === "error",
    "is-validating": s.value === "validating",
    "is-inline": t.props.inline,
    "is-nested": f.value,
    "is-alone": !a.showMessage,
    [`is-${g.value}`]: !0
  })), f = _(() => !!l.change), p = E(!1), A = _(() => !!a.label || r.label), v = _(() => {
    const F = a.labelWidth === 0 || a.labelWidth ? a.labelWidth : f.value ? 0 : t.props.labelWidth;
    return [
      {
        width: g.value !== "top" && F && F > 0 ? `${F}px` : "auto",
        textAlign: g.value === "top" ? "left" : g.value
      },
      t.props.labelStyle,
      f.value && t.props.nestedLabelStyle,
      a.labelStyle
    ];
  }), b = _(() => {
    const F = a.labelWidth === 0 || a.labelWidth ? a.labelWidth : t.props.labelWidth;
    return [
      {
        marginLeft: g.value === "top" || !A.value && f.value ? 0 : F && F > 0 ? `${F}px` : "unset",
        marginBottom: f.value && !p.value ? "20px" : 0
      },
      t.props.contentStyle,
      f.value && t.props.nestedContentStyle,
      a.contentStyle
    ];
  }), C = _(() => [
    t.props.errorStyle,
    f.value && t.props.nestedErrorStyle,
    a.errorStyle
  ]), D = _(() => [
    t.props.labelClass,
    f.value && t.props.nestedLabelClass,
    a.labelClass
  ]), B = _(() => [
    t.props.contentClass,
    f.value && t.props.nestedContentClass,
    a.contentClass
  ]), y = _(() => [
    t.props.errorClass,
    f.value && t.props.nestedErrorClass,
    a.errorClass
  ]), x = _(() => a.styleless || t.props.styleless), S = _(() => {
    const F = t.props.model;
    if (!F || !a.prop) return;
    let N = a.prop;
    return N.includes(":") && (N = N.replace(/:/, ".")), Ba(F, N).v;
  }), I = _(() => s.value === "error" && a.showMessage && t.props.showMessage);
  $(() => a.error, (F) => {
    o.value = F || "", s.value = F === "" ? "" : "error";
  });
  const P = (F) => {
    s.value = "", o.value = "";
    const N = t.props.model;
    if (!a.prop) return;
    const { o: T, k: V } = Ba(N, a.prop);
    V && (i = !0, T[V] = F ?? (Array.isArray(S.value) ? [].concat(u) : u));
  }, W = async (F) => {
    if (await fe(), !a.prop) return;
    let N = c.value.filter((q) => !q.trigger || q.trigger.includes(F));
    if (!N.length) if (a.required) N = [{
      required: !0,
      message: typeof a.required == "string" ? a.required : void 0
    }];
    else return;
    s.value = "validating";
    const T = {};
    T[a.prop] = N;
    const V = new On(T), G = {};
    G[a.prop] = u1(S.value);
    try {
      await V.validate(G, { first: !1 }), s.value = "success", o.value = "";
    } catch (q) {
      throw s.value = "error", o.value = q[0].message, {
        prop: a.prop,
        message: o.value
      };
    }
    i = !1;
  }, O = () => {
    if (!a.prop) {
      l.blur?.();
      return;
    }
    W("blur");
  }, k = () => {
    if (!a.prop) {
      l.change?.();
      return;
    }
    if (i) {
      i = !1;
      return;
    }
    W("change");
  }, w = async () => {
    let F = n.vnode.el;
    try {
      for (; F && !F.getBoundingClientRect; ) F = F.nextSibling;
      const N = F.getBoundingClientRect();
      return {
        top: N.top,
        left: N.left
      };
    } catch {
      throw new ye("form-item", "form-item位置计算错误");
    }
  }, M = Ke([]);
  return Ot("vc-form-item", {
    fields: M,
    blur: O,
    change: k,
    message: o,
    add: (F) => {
      F && M.push(F);
    },
    remove: (F) => {
      F && M.splice(M.indexOf(F), 1);
    }
  }), te(() => {
    a.prop && (t.add?.(n), u = qa(S.value)), l.add?.(n);
  }), _e(() => {
    t.remove?.(n), l.remove?.(n);
  }), $(() => a.rules, () => {
    a.resetByRulesChanged && P();
  }), $(() => l.fields?.length, async (F) => {
    if (!f.value || !F) return p.value = !1;
    const N = [...Sd(l.fields)], T = await Promise.all(N.map((G) => G.exposed.getPosition())), V = N.toSorted((G, q) => {
      const re = N.findIndex((Be) => Be === G), Y = N.findIndex((Be) => Be === q), Z = T[re], ge = T[Y];
      return Z.top != ge.top ? Z.top - ge.top : Z.left - ge.left;
    });
    p.value = V[V.length - 1] === n;
  }), e({
    validate: W,
    reset: P,
    getPosition: w
  }), {
    isNested: f,
    isStyleless: x,
    isNestedLast: p,
    validateMessage: o,
    classes: h,
    labelStyle: v,
    contentStyle: b,
    errorStyle: C,
    labelClass: D,
    contentClass: B,
    errorClass: y,
    showError: I,
    labelPosition: g
  };
};
H({
  name: "vcm-form",
  props: {
    ...s1,
    showToast: {
      type: Boolean,
      default: !1
    },
    border: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { slots: t, expose: n }) {
    return o1(n, { throwToast(a) {
      e.showToast && ss.info(a);
    } }), () => ke(e.tag, {
      autocomplete: e.autocomplete,
      class: "vcm-form"
    }, t);
  }
});
({
  ...i1
});
var _a = ee, d1 = class {
  map;
  constructor() {
    this.map = Uo.get("@wya/vc-img:", { session: !0 }) || {};
  }
  add(e, t = {}) {
    const { originW: n, originH: a } = t;
    this.map[e] && n && a || (this.map[e] = {
      originW: n,
      originH: a
    }, Uo.set("@wya/vc-img:", this.map, { session: !0 }));
  }
  getSize(e, t = {}) {
    const { clientW: n, clientH: a, style: r, wrapperW: l } = t;
    if (!this.map[e]) return {};
    const { originW: s, originH: o } = this.map[e];
    return r.width && n > 1 ? {
      w: n,
      h: n / s * o
    } : r.height && a > 1 ? {
      w: a / o * s,
      h: a
    } : l && !r.height && !r.width ? s <= l ? {
      w: s,
      h: o
    } : {
      w: l / s * s,
      h: l / s * o
    } : {
      w: s,
      h: o
    };
  }
};
new d1();
window.addEventListener("DOMContentLoaded", () => {
  !It && document.documentElement.style.objectFit;
});
var h1 = 750, tl = (e, t) => {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : t;
}, Jc = (e, t = h1) => {
  if (Array.isArray(e)) {
    const a = tl(e[0], t);
    return [a, tl(e[1], a)];
  }
  const n = tl(e, t);
  return [n, n];
}, zc = (e) => /^\s*data:/i.test(e), f1 = (e) => {
  const [t, n = ""] = e.split("#");
  return `${t}${t.includes("?") ? "&" : "?"}_=${Date.now()}${n ? `#${n}` : ""}`;
}, A1 = (e) => !It && typeof Blob < "u" && e instanceof Blob, g1 = {
  src: {
    type: null,
    default: void 0
  },
  outputSize: {
    type: [Number, Array],
    default: 100
  },
  enhancer: {
    type: [String, Function],
    default: void 0
  },
  options: {
    type: Object,
    default: () => ({})
  },
  crossOrigin: {
    type: String,
    default: "anonymous"
  }
}, m1 = "vc-image-processor", Ol = 100, Ai = [
  0,
  0,
  0,
  1
], p1 = (e = Ai) => {
  const t = [...Ai];
  return e.forEach((n, a) => {
    t[a] = n;
  }), t.map((n, a) => {
    const r = a === 3 && n <= 1 ? n * 255 : n;
    return Math.min(255, Math.max(0, Math.round(r)));
  });
}, Xc = (e) => /^blob:/i.test(e), v1 = (e) => Object.prototype.toString.call(e) === "[object Uint8ClampedArray]", y1 = (e) => !!e && typeof e == "object" && "data" in e && v1(e.data) && typeof e.width == "number" && typeof e.height == "number", D1 = (e) => zc(e) || Xc(e) ? e : f1(e), C1 = (e) => new Promise((t, n) => {
  if (typeof FileReader > "u") {
    n(/* @__PURE__ */ new Error("FileReader is not available."));
    return;
  }
  const a = new FileReader();
  a.onload = () => t(String(a.result || "")), a.onerror = () => n(a.error || /* @__PURE__ */ new Error("Failed to read image blob.")), a.readAsDataURL(e);
}), gi = (e, t) => new Promise((n, a) => {
  const r = new Image(), l = D1(e);
  !zc(l) && !Xc(l) && t !== "" && (r.crossOrigin = t), r.onload = () => n(r), r.onerror = () => a(/* @__PURE__ */ new Error(`Failed to load image: ${e}`)), r.src = l;
}), Rl = (e) => {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) throw new Error("Canvas 2D context is not available.");
  return t;
}, qc = (e, t) => {
  const [n, a] = t;
  e.width !== n && (e.width = n), e.height !== a && (e.height = a);
}, ed = async (e, t, n, a) => {
  qc(t, n);
  const r = Rl(t), [l, s] = n;
  if (r.clearRect(0, 0, l, s), y1(e))
    return r.putImageData(e, 0, 0), r.getImageData(0, 0, l, s);
  const o = A1(e) ? await gi(await C1(e), a) : typeof e == "string" ? await gi(e, a) : e;
  return r.drawImage(o, 0, 0, l, s), r.getImageData(0, 0, l, s);
}, td = (e) => {
  const { data: t } = e;
  for (let n = 0; n < t.length; n += 4) {
    const a = Math.round((t[n] + t[n + 1] + t[n + 2]) / 3);
    t[n] = a, t[n + 1] = a, t[n + 2] = a;
  }
  return e;
}, nd = (e, t = {}) => {
  const { data: n } = e, a = p1(t.targetColor), r = Math.max(0, Number(t.tolerance || 0));
  for (let l = 0; l < n.length; l += 4) Math.abs(n[l] - a[0]) <= r && Math.abs(n[l + 1] - a[1]) <= r && Math.abs(n[l + 2] - a[2]) <= r && Math.abs(n[l + 3] - a[3]) <= r && (n[l + 3] = 0);
  return e;
}, b1 = (e) => e === "gray" ? td : e === "cutout" ? nd : typeof e == "function" ? e : void 0, w1 = async (e, t, n) => {
  const a = b1(t);
  return a && await a(e, n) || e;
}, F1 = async (e, t = Ol, n = "anonymous") => ed(e, document.createElement("canvas"), Jc(t, Ol), n);
Object.assign(/* @__PURE__ */ H({
  name: m1,
  props: g1,
  emits: ["error"],
  setup(e, { emit: t, expose: n }) {
    const a = E(null), r = dt(null), l = _(() => Jc(e.outputSize, Ol));
    let s = 0;
    const o = async () => {
      const i = ++s, u = a.value;
      if (u)
        try {
          const c = l.value;
          if (qc(u, c), r.value = Rl(u), !e.src) {
            r.value.clearRect(0, 0, c[0], c[1]);
            return;
          }
          const d = await w1(await ed(e.src, u, c, e.crossOrigin), e.enhancer, e.options);
          return i !== s || (r.value = Rl(u), r.value.putImageData(d, 0, 0)), d;
        } catch (c) {
          i === s && t("error", c);
          return;
        }
    };
    return te(o), $(() => [
      e.src,
      e.outputSize,
      e.enhancer,
      e.options,
      e.crossOrigin
    ], () => o(), { deep: !0 }), n({
      canvas: a,
      context: r,
      refresh: o
    }), () => m("canvas", {
      ref: a,
      class: "vc-image-processor",
      width: l.value[0],
      height: l.value[1]
    }, null);
  }
}), { Enhancer: {
  gray: td,
  cutout: nd,
  getImageData: F1
} });
var k1 = /* @__PURE__ */ H({
  name: "vcm-input",
  inheritAttrs: !1,
  props: {
    ...an,
    right: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "focus",
    "blur",
    "clear",
    "paste",
    "keydown",
    "keypress",
    "keyup",
    "enter",
    "tip"
  ],
  setup(e, { slots: t, expose: n }) {
    const a = E(), r = kt({ merge: !1 });
    sa(a, n);
    const { currentValue: l, currentMaxlength: s, classes: o, listeners: i, handleClear: u } = hc(a), c = (d) => {
      const g = d ? {
        class: r.value.class,
        style: [e.inputStyle, r.value.style],
        ...r.value.attrs,
        ...r.value.listeners,
        ...i
      } : {
        style: e.inputStyle,
        ...r.value.attrs,
        ...r.value.listeners,
        ...i
      };
      return m("input", De({
        type: "text",
        ref: a
      }, g, {
        id: e.inputId,
        disabled: e.disabled,
        value: l.value,
        maxlength: s.value
      }), null);
    };
    return () => e.styleless ? c(!0) : m("div", {
      class: [
        "vcm-input",
        o.value,
        r.value.class
      ],
      style: r.value.style,
      id: e.id
    }, [m("div", { class: "vcm-input__wrapper" }, [
      (t.prepend || e.prepend) && m("div", { class: [
        "vcm-input__prepend",
        {
          "is-icon": e.prepend,
          "is-afloat": e.afloat
        },
        o.value
      ] }, [t.prepend?.() || e.prepend && m(_a, { type: e.prepend }, null)]),
      m("div", { class: [
        "vcm-input__content",
        { "is-right": e.right },
        o.value
      ] }, [t.content?.() || c(!1)]),
      !e.disabled && e.clearable && m(Zn, null, { default: () => [ce(m(_a, {
        class: "vcm-input__icon-clear",
        type: "clear",
        onTouchstart: u
      }, null), [[he, !!l.value]])] }),
      (t.append || e.append) && m("div", { class: [
        "vcm-input__append",
        { "is-icon": e.append },
        o.value
      ] }, [t.append?.() || e.append && m(_a, { type: e.append }, null)])
    ])]);
  }
});
({
  ...fc
});
bt("animation").camel;
bt("transform").kebab;
var E1 = H({
  name: "vc-resizer",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    fill: {
      type: [Boolean, Array],
      default: !0
    }
  },
  emits: ["resize"],
  setup(e, { emit: t, slots: n, expose: a }) {
    const r = E(0), l = E(0), s = E(), o = _(() => {
      const f = Array.isArray(e.fill) ? e.fill : [e.fill, e.fill];
      return {
        "is-fill-width": f[0],
        "is-fill-height": f[1]
      };
    }), i = _(() => ({
      height: l.value,
      width: r.value,
      style: `height: ${l.value}px; width: ${r.value}px`
    }));
    let u = !1, c = !1;
    const d = () => {
      if (u) return;
      let { width: f, height: p } = s.value.getBoundingClientRect();
      const { paddingLeft: A, paddingRight: v, paddingTop: b, paddingBottom: C } = window.getComputedStyle(s.value), D = Number.parseInt(A) || 0, B = Number.parseInt(v) || 0, y = Number.parseInt(b) || 0, x = Number.parseInt(C) || 0;
      f -= D + B, p -= y + x;
      const S = l.value != p, I = r.value != f;
      S && (l.value = p), I && (r.value = f), (S || I) && t("resize", {
        ...i.value,
        inited: c
      }), c = !0;
    };
    let g;
    const h = () => {
      d(), u = !0, g = setTimeout(() => u = !1, 20);
    };
    return te(() => {
      de.on(s.value, d);
    }), _e(() => {
      de.off(s.value, d), g && clearTimeout(g);
    }), a({
      refresh: h,
      offsetHeight: l,
      offsetWidth: r
    }), () => ke(e.tag, {
      ref: s,
      class: ["vc-resizer", o.value]
    }, n.default?.(i.value));
  }
}), B1 = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  mode: {
    type: String,
    validator: (e) => /(info|success|error|warning)/.test(e)
  },
  content: {
    type: [String, Function],
    default: ""
  },
  size: {
    type: String,
    validator: (e) => /(small|medium|large)/.test(e),
    default: "small"
  },
  contentStyle: [Object, String],
  contentClass: [Object, String],
  width: { type: Number },
  height: { type: Number },
  mask: {
    type: Boolean,
    default: !0
  },
  closable: {
    type: Boolean,
    default: !0
  },
  maskClosable: {
    type: Boolean,
    default: !0
  },
  escClosable: {
    type: Boolean,
    default: !0
  },
  closeWithCancel: {
    type: Boolean,
    default: !0
  },
  title: { type: [String, Function] },
  scrollable: {
    type: Boolean,
    default: !1
  },
  draggable: {
    type: Boolean,
    default: !1
  },
  x: Number,
  y: Number,
  okText: {
    type: [String, Boolean],
    default: "确定"
  },
  cancelText: {
    type: [String, Boolean],
    default: "取消"
  },
  wrapperStyle: [String, Object],
  wrapperClass: [String, Object],
  footer: {
    type: Boolean,
    default: !0
  },
  border: {
    type: Boolean,
    default: !1
  },
  okDisabled: {
    type: Boolean,
    default: !1
  },
  cancelDisabled: {
    type: Boolean,
    default: !1
  },
  /**
  * 兼容portal设计, 实现Promise方式
  */
  onOk: { type: Function },
  onCancel: { type: Function }
}, x1 = "vc-modal", mi = 1002, ad = /* @__PURE__ */ H({
  name: x1,
  emits: [
    "update:modelValue",
    "close",
    "portal-fulfilled",
    "visible-change",
    "ok",
    "cancel"
  ],
  props: B1,
  setup(e, { slots: t, emit: n, expose: a }) {
    const r = z(), l = dt(), s = dt(), o = dt(), i = dt(), u = dt(), c = E(e.x), d = E(e.y), g = E(!1), h = It ? 0 : window.innerHeight - 20, f = It ? 0 : window.innerWidth - 20, p = _(() => {
      let Y = 0, Z = 0;
      switch (e.size) {
        case "small":
          Y = e.mode ? 340 : 480, Z = e.mode ? 154 : 296;
          break;
        case "medium":
          Y = 640, Z = 502;
          break;
        case "large":
          Y = e.mode ? 390 : 864, Z = e.mode ? 198 : 662;
          break;
      }
      return {
        width: Math.min(e.width || Y, f),
        height: Math.min(e.height || Z, h)
      };
    }), A = _(() => {
      const Y = {
        width: `${p.value.width}px`,
        maxHeight: `${h}px`
      };
      return e.height ? Y.height = `${p.value.height}px` : Y.minHeight = `${p.value.height}px`, Y;
    }), v = _(() => {
      if (It || !e.draggable) return {};
      const Y = typeof c.value > "u" ? window.innerWidth / 2 - p.value.width / 2 : c.value, Z = typeof d.value > "u" ? window.innerHeight / 2 - p.value.height / 2 : d.value;
      return {
        left: `${Y}px`,
        top: `${Z}px`
      };
    });
    ns(g);
    let b = 0, C = 0, D = tt.globalEvent.x, B = tt.globalEvent.y;
    const y = yn(function() {
      const Y = l.value;
      if (!Y) return;
      const Z = c.value || Y.offsetLeft, ge = d.value || Y.offsetTop || (window.screen.height - Y.clientHeight) / 2, Be = D - Z, ne = B - ge;
      Y.style.transformOrigin = `${Be}px ${ne}px 0`;
    }, 250, { leading: !0 }), x = E(!1), S = () => {
      x.value = !1;
    }, I = () => {
      r.isUnmounted || y();
    }, P = () => {
      r.isUnmounted || (x.value = !0, u.value?.refresh());
    }, W = () => {
      !r.isUnmounted && (n("close"), n("portal-fulfilled"), n("update:modelValue", !1), n("visible-change", !1));
    }, O = (Y, Z) => {
      if (!g.value) return;
      const ge = Z && Z(Y);
      if (ge && ge.then) return ge.then((Be) => (g.value = !1, Be));
      (!ge || ge === !0) && (g.value = !1);
    }, k = (...Y) => (r.vnode.props?.onOk || e.onOk || (() => {
    }))(...Y), w = (...Y) => (r.vnode.props?.onCancel || e.onCancel || (() => {
    }))(...Y), M = (Y, Z) => {
      (Z || e.maskClosable && Y.target?.classList?.contains("vc-modal__wrapper")) && (e.closeWithCancel ? O(Y, w) : g.value = !1);
    }, F = (Y) => {
      Y.code === "Escape" && e.escClosable && g.value && M(Y, !0);
    }, N = () => {
      const Y = l.value, Z = window.innerHeight - 20, ge = Y.offsetHeight;
      ge + 1 > Z ? Z % 2 !== 0 && (Y.style.height = `${Z - 1}px`) : ge % 2 !== 0 && (Y.style.height = `${ge + 1}px`);
    }, T = () => {
      if (e.height) return;
      const Y = !!i.value.wrapper.style.getPropertyValue("height");
      l.value.style.getPropertyValue("height") && l.value.style.removeProperty("height"), Y && i.value.wrapper.style.removeProperty("height"), Y && u.value?.refresh();
    }, V = (Y) => {
      e.draggable && g.value && D || (D = Y.x, B = Y.y);
    }, G = (Y) => {
      c.value += Y.clientX - b, d.value += Y.clientY - C, b = Y.clientX, C = Y.clientY;
    }, q = () => {
      y(), document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", q);
    }, re = (Y) => {
      if (!e.draggable) return;
      const Z = l.value, ge = s.value, Be = o.value, ne = Z.getBoundingClientRect();
      Be.style.cursor = "move", mi += 1, ge.style.zIndex = `${mi}`, c.value = ne.x || ne.left, d.value = ne.y || ne.top, b = Y.clientX, C = Y.clientY, document.addEventListener("mousemove", G), document.addEventListener("mouseup", q);
    };
    return te(() => {
      document.addEventListener("keydown", F), document.addEventListener("click", V, !0), de.on(l.value, N), de.on(i.value.content, T);
    }), Yl(() => {
      !e.draggable && g.value && y();
    }), _e(() => {
      de.off(l.value, N), de.off(i.value.content, T);
    }), Ct(() => {
      document.removeEventListener("click", V, !0), document.removeEventListener("keydown", F), document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", q);
    }), $(() => e.modelValue, (Y) => {
      g.value = Y;
    }, { immediate: !0 }), a({
      isActive: g,
      toggle(Y) {
        Y = typeof Y == "boolean" ? Y : !g.value, g.value = Y;
      },
      resetOrigin: y
    }), () => m("div", { class: "vc-modal" }, [m(la, { delay: 40 }, { default: () => [ce(m("div", {
      class: "vc-modal__mask",
      onClick: (Y) => M(Y, e.maskClosable)
    }, null), [[he, e.mask && g.value]])] }), m("div", {
      ref: s,
      style: [e.wrapperStyle || {}, e.draggable ? { top: 0 } : {}],
      class: [e.wrapperClass, "vc-modal__wrapper"],
      onClick: (Y) => M(Y, !1)
    }, [m(rc, {
      mode: "part",
      onBeforeEnter: S,
      onEnter: I,
      onAfterEnter: P,
      onAfterLeave: W
    }, { default: () => [ce(m("div", {
      ref: l,
      class: [{
        "is-drag": e.draggable,
        "is-large": e.size === "large" || e.size === "medium",
        "has-footer": e.footer && (e.cancelText || e.okText),
        "has-border": e.border
      }, "vc-modal__container"],
      style: [A.value, v.value]
    }, [
      m("div", {
        ref: o,
        class: [{ "is-confirm": e.mode }, "vc-modal__header"],
        onMousedown: re
      }, [e.mode && m(ee, {
        type: e.mode,
        class: [`is-${e.mode}`, "vc-modal__icon"]
      }, null), t.header ? t.header() : m(vt, null, [typeof e.title == "string" ? m("div", {
        class: "vc-modal__title",
        innerHTML: e.title
      }, null) : typeof e.title == "function" && m(xe, { render: e.title }, null), e.closable && !e.mode && m("div", {
        class: "vc-modal__close",
        onClick: (Y) => M(Y, !0)
      }, [m(ee, { type: "close" }, null)])])]),
      m(E1, {
        ref: u,
        class: "vc-modal__content-container"
      }, { default: (Y) => m(ca, {
        ref: i,
        native: !1,
        always: !1,
        height: x.value ? Y.height : void 0,
        contentClass: [
          { "is-confirm": e.mode },
          e.contentClass,
          "vc-modal__content"
        ],
        contentStyle: e.contentStyle
      }, { default: () => [typeof e.content == "string" ? m("div", { innerHTML: e.content }, null) : typeof e.content == "function" ? m(xe, { render: e.content }, null) : null, t.default?.()] }) }),
      e.footer && (e.cancelText || e.okText) && m("div", { class: [{ "is-confirm": e.mode }, "vc-modal__footer"] }, [t["footer-extra"]?.(), t.footer ? t.footer?.() : m(vt, null, [e.cancelText && m(je, {
        style: "margin-right: 8px;",
        disabled: e.cancelDisabled,
        onClick: (Y) => O(Y, w)
      }, { default: () => [e.cancelText] }), e.okText && m(je, {
        type: "primary",
        disabled: e.okDisabled,
        onClick: (Y) => O(Y, k)
      }, { default: () => [e.okText] })])])
    ]), [[he, g.value]])] })])]);
  }
}), rd = new Oe(ad, {
  leaveDelay: 0,
  multiple: !0
}), sr = (e) => (t) => {
  const n = rd.popup({
    ...t,
    mode: e,
    onFulfilled: t.onClose,
    onClose: null
  });
  return n.wrapper.toggle?.(!0), n;
}, _1 = () => rd.destroy(), S1 = sr("info"), I1 = sr("success"), M1 = sr("warning"), N1 = sr("error");
Object.assign(ad, {
  destroy: _1,
  info: S1,
  success: I1,
  warning: M1,
  error: N1
});
var ld = /* @__PURE__ */ H({
  name: "vc-modal",
  emits: [
    "update:modelValue",
    "portal-fulfilled",
    "close",
    "ok",
    "cancel"
  ],
  props: {
    mode: {
      type: String,
      validator: (e) => /(alert|operation)/.test(e),
      default: "alert"
    },
    content: { type: [
      String,
      Function,
      Boolean
    ] },
    width: {
      type: Number,
      default: 270
    },
    modelValue: {
      type: Boolean,
      default: !1
    },
    mask: {
      type: Boolean,
      default: !0
    },
    maskClosable: {
      type: Boolean,
      default: !0
    },
    closeWithCancel: {
      type: Boolean,
      default: !0
    },
    title: { type: [
      String,
      Boolean,
      Function
    ] },
    okText: {
      type: [String, Boolean],
      default: "确定"
    },
    cancelText: {
      type: [String, Boolean],
      default: "取消"
    },
    wrapperStyle: { type: Object },
    footer: {
      type: Boolean,
      default: !0
    },
    /**
    * 兼容portal设计, 实现Promise方式
    */
    data: Array,
    onOk: { type: Function },
    onCancel: { type: Function }
  },
  setup(e, { slots: t, emit: n, expose: a }) {
    const r = z(), l = E(!1), s = (f, p) => {
      if (!l.value) return;
      const A = p && p(f);
      if (A && A.then) return A.then((v) => (l.value = !1, v));
      A || (l.value = !1);
    }, o = (...f) => (r.vnode.props?.onOk || e.onOk || (() => {
    }))(...f), i = (...f) => (r.vnode.props?.onCancel || e.onCancel || (() => {
    }))(...f), u = (f, p) => {
      (p || e.maskClosable && f.target.classList.contains("vcm-modal__wrapper")) && (e.closeWithCancel ? s(f, i) : l.value = !1);
    }, c = () => {
      !r.isUnmounted && (n("close"), n("portal-fulfilled"), n("update:modelValue", !1));
    }, d = _(() => e.data || [{
      content: e.cancelText,
      onClick: i
    }, {
      content: e.okText,
      onClick: o
    }]), g = _(() => ({
      width: `${e.width}px`,
      maxHeight: `${window.innerHeight - 20}px`
    })), h = _(() => {
      const f = d.value.filter((p) => p.content).length;
      return {
        "is-column": f >= 3,
        "is-alone": f === 1
      };
    });
    return ns(l), $(() => e.modelValue, (f) => {
      l.value = f;
    }, { immediate: !0 }), a({
      isActive: l,
      toggle(f) {
        f = typeof f == "boolean" ? f : !l.value, l.value = f;
      }
    }), () => m("div", { class: "vcm-modal" }, [m(Zn, { duration: 200 }, { default: () => [ce(m("div", {
      class: "vcm-modal__mask",
      onClick: (f) => u(f, e.maskClosable)
    }, null), [[he, e.mask && l.value]])] }), m("div", {
      style: [e.wrapperStyle || {}],
      class: "vcm-modal__wrapper"
    }, [m(BD, {
      mode: "center",
      duration: 200,
      onAfterLeave: c
    }, { default: () => [ce(m("div", {
      style: [g.value],
      class: "vcm-modal__container"
    }, [e.mode === "alert" ? m(vt, null, [
      (e.title || t.header) && m("div", { class: "vcm-modal__header" }, [t.header?.() || (typeof e.title == "string" ? m("div", {
        class: "vcm-modal__title",
        innerHTML: e.title
      }, null) : typeof e.title == "function" && m(Ha, { render: e.title }, null))]),
      (e.content || t.default) && m("div", { class: [{ "vcm-modal__no-title": !e.title }, "vcm-modal__content"] }, [typeof e.content == "string" || t.default ? m("div", { class: "vcm-modal__html" }, [typeof e.content == "string" && m("div", { innerHTML: e.content }, null), t.default?.()]) : typeof e.content == "function" ? m(Ha, { render: e.content }, null) : null]),
      (e.footer || t.footer) && m("div", { class: [h.value, "vcm-modal__footer"] }, [t.footer?.() || d.value.map((f, p) => f.content ? m("div", {
        key: p,
        style: [f.style],
        class: "vcm-modal__button",
        onClick: (A) => s(A, f.onClick),
        innerHTML: f.content
      }, null) : null)])
    ]) : e.mode === "operation" ? m("div", { class: "vcm-modal__operation" }, [d.value.map((f, p) => f.content ? m("div", {
      key: p,
      style: [f.style],
      class: "vcm-modal__button",
      innerHTML: f.content,
      onClick: (A) => s(A, f.onClick)
    }, null) : null)]) : null]), [[he, l.value]])] })])]);
  }
}), sd = new Oe(ld, { multiple: !0 }), od = (e) => (t) => {
  const n = sd.popup({
    ...t,
    mode: e,
    onFulfilled: t.onClose,
    onClose: null
  });
  return n.wrapper.toggle?.(!0), n;
}, T1 = () => sd.destroy(), O1 = od("alert"), R1 = od("operation");
Object.assign(ld, {
  destroy: T1,
  alert: O1,
  operation: R1
});
var id = /* @__PURE__ */ H({
  name: "vc-notice",
  props: {
    title: [String, Function],
    content: [String, Function],
    duration: {
      type: Number,
      default: 4500
    },
    closable: {
      type: Boolean,
      default: !0
    },
    mode: {
      type: String,
      validator: (e) => /(info|loading|success|error|warning)/.test(e)
    },
    top: {
      type: Number,
      default: 24
    },
    fixed: {
      type: Boolean,
      default: !0
    },
    onBeforeClose: Function
  },
  emits: [
    "portal-fulfilled",
    "close",
    "before-close"
  ],
  setup(e, { emit: t, expose: n }) {
    const a = z(), r = E(!1), l = E(), s = E();
    let o;
    const i = (h) => {
      o && clearTimeout(o), h !== 0 && (o = setTimeout(() => r.value = !1, h));
    }, u = (h) => {
      l.value = h;
    }, c = (h) => {
      s.value = h;
    }, d = () => {
      t("close"), t("portal-fulfilled");
    }, g = async (h) => {
      if (!r.value) return;
      const f = a.vnode.props?.onBeforeClose || e.onBeforeClose || (() => {
      }), p = f && f(h);
      if (p && p.then) return p.then((A) => (r.value = !1, A));
      (!p || p === !0) && (r.value = !1);
    };
    return $(() => e.title, u, { immediate: !0 }), $(() => e.content, c, { immediate: !0 }), te(() => {
      r.value = !0, i(e.duration);
    }), Ct(() => {
      o && clearTimeout(o);
    }), n([
      "destroy",
      "remove",
      "close",
      "hide"
    ].reduce((h, f) => (h[f] = d, h), {
      setContent: c,
      setDuration: i
    })), () => m("div", {
      class: ["vc-notice", { "is-fixed": e.fixed }],
      style: e.fixed ? { top: `${e.top}px` } : {}
    }, [m(er, {
      mode: "right",
      onAfterLeave: d
    }, { default: () => [ce(m("div", { class: "vc-notice__wrapper" }, [m("div", { class: "vc-notice__container" }, [
      e.mode && m(ee, {
        type: `o-${e.mode}`,
        class: [`is-${e.mode}`, "vc-notice__icon"]
      }, null),
      m("div", null, [l.value && m("div", {
        style: [{ marginBottom: s.value ? "8px" : "" }],
        class: "vc-notice__title"
      }, [typeof l.value == "string" ? m("div", { innerHTML: l.value }, null) : typeof l.value == "function" ? m(xe, { render: l.value }, null) : null]), s.value && m("div", { class: "vc-notice__content" }, [typeof s.value == "string" ? m("div", { innerHTML: s.value }, null) : typeof s.value == "function" ? m(xe, { render: s.value }, null) : null])]),
      e.closable && m(ee, {
        type: "close",
        style: "font-size: 12px",
        class: "vc-notice__close",
        onClick: g
      }, null)
    ])]), [[he, r.value]])] })]);
  }
}), en;
typeof document < "u" && (en = document.createElement("div"), en.classList.add("vc-notice-portals"));
var ps = new Oe(id, {
  el: en,
  leaveDelay: 0,
  multiple: !0,
  autoDestroy: !1
}), ud = () => {
  let e = 0;
  Oe.leafs.forEach((t, n) => {
    n.includes(ps.globalOptions.name) && e++;
  }), !e && document.body.contains(en) && document.body.removeChild(en);
}, da = (e) => (t) => {
  document.body.contains(en) || document.body.appendChild(en);
  const n = {
    ...t,
    mode: e,
    fixed: !1
  };
  return ps.popup({
    insertion: "first",
    ...n,
    onFulfilled: () => {
      n.onClose?.(), ud();
    },
    onClose: null
  });
}, P1 = () => {
  ps.destroy(), ud();
}, Y1 = da(), H1 = da("info"), W1 = da("success"), $1 = da("warning"), V1 = da("error");
Object.assign(id, {
  destroy: P1,
  open: Y1,
  info: H1,
  success: W1,
  warning: $1,
  error: V1
});
var pi = /* @__PURE__ */ H({
  name: "vc-tag",
  props: {
    closable: {
      type: Boolean,
      default: !1
    },
    checkable: {
      type: Boolean,
      default: !1
    },
    checked: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      validator: (e) => /(default|dot|border)/.test(e),
      default: "default"
    },
    value: { type: [String, Number] }
  },
  emits: ["close", "change"],
  setup(e, { emit: t, slots: n }) {
    const a = E(!0), r = _(() => ({
      [`is-${e.color}`]: !0,
      [`is-${e.type}`]: !0,
      "is-unchecked": !a.value
    })), l = (o) => {
      t("close", o, e.value || void 0);
    }, s = (o) => {
      o.stopPropagation(), e.checkable && (a.value = !a.value, t("change", a.value, e.value || void 0));
    };
    return $(() => e.checked, (o) => {
      a.value = !!o;
    }, { immediate: !0 }), () => m("div", {
      class: [r.value, "vc-tag"],
      onClick: s
    }, [m("div", { class: "vc-tag__wrapper" }, [
      e.type === "dot" && m("div", null, [m("span", { class: "vc-tag__dot" }, null)]),
      m("span", null, [n.default?.()]),
      e.closable && m(ee, {
        type: "close",
        class: "vc-tag__close",
        onClick: l
      }, null)
    ])]);
  }
}), Qw = /* @__PURE__ */ H({
  name: "vc-popconfirm",
  props: {
    title: {
      type: [String, Function],
      default: ""
    },
    content: {
      type: [String, Function],
      default: ""
    },
    modelValue: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "top"
    },
    trigger: {
      type: String,
      default: "click"
    },
    okText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    okType: {
      type: String,
      default: "primary"
    },
    cancelType: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "warning",
      validator: (e) => /(warning|info|success|error)/.test(e)
    },
    width: [String, Number],
    portalClass: [String, Object]
  },
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "visible-change",
    "ready",
    "close",
    "cancel",
    "ok"
  ],
  setup(e, { slots: t, emit: n }) {
    const a = z(), r = kt({ merge: !1 }), l = E(!1), s = _(() => e.content || t.content ? { marginBottom: "15px" } : {}), o = _(() => ({
      style: r.value.style,
      class: r.value.class
    })), i = _(() => r.value.attrs);
    $(() => e.modelValue, (f) => {
      l.value = f;
    }, { immediate: !0 });
    const u = () => {
      n("update:modelValue", l.value), n("visible-change", l.value);
    }, c = (f, p) => {
      if (f.stopPropagation(), f.preventDefault(), !l.value) return;
      const A = p && p(f);
      if (A && A.then) return A.then((v) => (l.value = !1, u(), v));
      (!A || A === !0) && (l.value = !1, u());
    }, d = (...f) => (a.vnode.props?.onOk || (() => {
    }))(...f), g = (...f) => (a.vnode.props?.onCancel || (() => {
    }))(...f), h = (f) => {
      l.value = f, u();
    };
    return () => m(Cn, De(i.value, {
      modelValue: l.value,
      placement: e.placement,
      trigger: e.trigger,
      portalClass: [
        "is-padding-none",
        "vc-popconfirm-wrapper",
        e.portalClass
      ],
      class: ["vc-popconfirm", o.value.class],
      style: o.value.style,
      onReady: () => n("ready"),
      onClose: () => n("close"),
      onVisibleChange: h
    }), {
      default: () => t?.default?.(),
      content: () => m("div", {
        style: [{ width: `${e.width}px` }],
        class: "vc-popconfirm__wrapper"
      }, [
        m("div", { class: "vc-popconfirm__title" }, [t.icon ? t.icon() : m(ee, {
          type: e.type,
          class: [`is-${e.type}`, "vc-popconfirm__icon"]
        }, null), m("div", null, [t.title ? t.title() : typeof e.title == "string" ? m("div", { innerHTML: e.title }, null) : typeof e.title == "function" ? m(xe, { render: e.title }, null) : null])]),
        m("div", {
          style: s.value,
          class: "vc-popconfirm__content"
        }, [t.content ? t.content() : typeof e.content == "string" ? m("div", { innerHTML: e.content }, null) : typeof e.content == "function" ? m(xe, { render: e.content }, null) : null]),
        m("div", { class: "vc-popconfirm__footer" }, [m(je, {
          type: e.cancelType,
          style: "margin-right: 8px;",
          size: "small",
          onClick: (f) => c(f, g)
        }, { default: () => [e.cancelText] }), m(je, {
          type: e.okType,
          size: "small",
          onClick: (f) => c(f, d)
        }, { default: () => [e.okText] })])
      ])
    });
  }
}), L1 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: !1
  },
  value: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: void 0
  },
  label: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: void 0
  },
  name: { type: String },
  /**
  * group模式下无效
  */
  trueValue: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: !0
  },
  falseValue: {
    type: [
      String,
      Number,
      Boolean
    ],
    default: !1
  }
}, Q1 = () => {
  const { props: e, emit: t } = z(), n = Ae("vc-radio-group", {}), a = Ae("vc-form-item", {}), r = E(void 0), l = E(!1), s = _(() => typeof e.value > "u" || e.value === "" ? e.label : e.value), o = _(() => typeof e.label > "u" || e.label === "" ? e.value : e.label), i = _(() => !!n.props), u = _(() => i.value ? n.currentValue.value === s.value : r.value === e.checkedValue), c = _(() => i.value ? n.props.name : e.name), d = _(() => i.value && n.props.disabled || e.disabled), g = _(() => ({
    "is-checked": u.value,
    "is-disabled": d.value,
    "is-focus": l.value,
    "is-error": !!a?.message?.value
  })), h = _(() => ({}));
  $(() => e.modelValue, (C) => {
    r.value = C;
  }, { immediate: !0 });
  const f = (C) => {
    r.value = C ? e.checkedValue : e.uncheckedValue;
  }, p = (C) => {
    t("update:modelValue", r.value, C, f), t("change", r.value, C, f), a?.change?.(r.value);
  };
  return {
    currentValue: r,
    isFocus: l,
    isDisabled: d,
    radioName: c,
    classes: g,
    styles: h,
    hasGroup: i,
    checked: u,
    handleChange: (C) => {
      if (e.disabled) return !1;
      const D = C.target.checked;
      i.value ? (n.reset(s.value), n.sync(C)) : (f(D), p(C));
    },
    handleBlur: () => {
      l.value = !1;
    },
    handleFocus: () => {
      l.value = !0;
    },
    sync: p,
    reset: f,
    computedValue: s,
    computedLabel: o
  };
};
({
  ...L1
});
bt("transform").camel;
var K1 = {
  type: {
    type: String,
    validator: (e) => /^(line|card)$/.test(e),
    default: "line"
  },
  modelValue: { type: [
    String,
    Number,
    Boolean
  ] },
  animated: {
    type: Boolean,
    default: !1
  },
  afloat: {
    type: Boolean,
    default: !0
  },
  closable: {
    type: Boolean,
    default: !1
  },
  barStyle: [Object, String],
  contentStyle: [Object, String],
  barClass: [Object, String],
  contentClass: [Object, String],
  affixable: Boolean,
  affixOptions: Object
}, G1 = (e = {}) => {
  const t = Ae("vc-affix", null), n = z(), { props: a, emit: r } = n, l = E(rt("tabs")), s = E([]), o = E(0), i = E(0), u = E(void 0), c = E(0), d = E(!1), g = E(null), h = (O, k) => typeof O?.value > "u" ? k : O.value, f = (O) => s.value.findIndex((k, w) => h(k, w) === O), p = _(() => ({
    width: `${o.value}px`,
    transform: `translate3d(${i.value}px, 0px, 0px)`
  })), A = _(() => {
    const O = f(u.value), k = O === 0 ? "0%" : `-${O}00%`, w = { transform: "" };
    return O > -1 && (w.transform = `translate3d(${k}, 0px, 0px)`), w;
  }), v = _(() => ({
    "is-animated": a.animated,
    [`is-${a.type}`]: !!a.type,
    [`is-${a.theme}`]: !!a.theme
  })), b = _(() => s.value.some((O) => !!O.anchor)), C = () => {
    e?.refreshAfloat?.();
  };
  let D;
  const B = (O) => {
    if (!O) return;
    const k = document.querySelector(O);
    if (!k) return;
    const w = Jo(n.vnode.el);
    jl(w, {
      duration: 250,
      from: w.scrollTop,
      to: w.scrollTop + k.getBoundingClientRect().top - w.getBoundingClientRect().top - (!t || t.props.placement !== "bottom" ? n.vnode.el.offsetHeight : 0) - (t && t.props.placement !== "bottom" ? t.props.offset : 0)
    }), D && clearTimeout(D), D = setTimeout(() => D = null, 300);
  }, y = () => {
    if (!b.value || D) return;
    const O = Jo(n.vnode.el), k = O?.scrollTop;
    if (typeof k == "number")
      for (let w = 0; w < s.value.length; w++) {
        const M = s.value[w].anchor;
        if (!M) continue;
        const F = document.querySelector(M);
        if (!F) continue;
        const N = F.getBoundingClientRect().top - O.getBoundingClientRect().top + O.scrollTop, T = s.value[w + 1];
        let V;
        if (T && T.anchor) {
          const q = document.querySelector(T.anchor);
          q && (V = q.getBoundingClientRect().top - O.getBoundingClientRect().top + O.scrollTop);
        }
        const G = 2;
        if (k >= N - G && (typeof V > "u" || k < V - G)) {
          f(u.value) !== w && x(w, !1);
          break;
        }
      }
  }, x = (O, k = !0) => {
    if (g.value) return;
    g.value = setTimeout(() => g.value = null, 300);
    const w = s.value[O];
    w.disabled || (u.value = h(w, O), r("update:modelValue", u.value), r("change", u.value), r("click", u.value), k && B(w.anchor));
  }, S = (O) => {
    const k = s.value[O];
    k && r("tab-remove", h(k, O), O);
  }, I = () => {
    n.isUnmounted || (e?.refreshScroll?.(), e?.refreshAfloat?.());
  };
  return te(() => {
    e.wrapper.value && de.on(e.wrapper.value, I), e.scrollToActive && fe(e.scrollToActive), t?.onScroll?.(y);
  }), _e(() => {
    e.wrapper.value && de.off(e.wrapper.value, I), g.value && clearTimeout(g.value), t?.offScroll?.(y), D && clearTimeout(D);
  }), Ot("vc-tabs", {
    props: a,
    currentValue: u,
    refresh: C,
    add: (O, k) => {
      O && fe(() => {
        if (typeof u.value > "u" && (u.value = typeof O.proxy.currentValue > "u" ? 0 : O.proxy.currentValue), e.content.value) {
          const w = Array.from(e.content.value.children).filter((M) => /vcm?-tabs-pane/.test(M.className)).indexOf(O.vnode.el);
          if (w != -1) {
            s.value.splice(w, 0, O.props), typeof O.props.value > "u" && k(w);
            return;
          }
        }
        s.value.push(O.props), typeof O.props.value > "u" && k(s.value.length - 1);
      });
    },
    remove: (O) => {
      O && s.value.splice(s.value.indexOf(O.props), 1);
    }
  }), $(() => a.modelValue, (O) => {
    u.value = O;
  }, { immediate: !0 }), $(() => u.value, () => {
    e.refreshAfloat?.(), e.scrollToActive?.();
  }), $(() => s.value.length, () => {
    e.refreshAfloat?.(), e.scrollToActive?.();
  }), {
    tabsId: l,
    list: s,
    timer: g,
    afloatWidth: o,
    afloatOffset: i,
    currentValue: u,
    scrollOffset: c,
    scrollable: d,
    afloatStyle: p,
    contentStyle: A,
    classes: v,
    getTabIndex: f,
    getTabPaneValue: h,
    handleChange: x,
    handleRemove: S
  };
};
({
  ...K1
});
var j1 = `
	min-height:0 !important;
	max-height:none !important;
	height:0 !important;
	visibility:hidden !important;
	overflow:hidden !important;
	position:absolute !important;
	z-index:-1000 !important;
	top:0 !important;
	right:0 !important
`, U1 = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
], qe, Z1 = (e = {}) => {
  if (It) return {};
  const { el: t, minRows: n = null, maxRows: a = null } = e;
  qe || (qe = document.createElement("textarea"), document.body.appendChild(qe)), t.getAttribute("wrap") ? qe.setAttribute("wrap", t.getAttribute("wrap")) : qe.removeAttribute("wrap");
  const { paddingSize: r, borderSize: l, boxSizing: s, sizingStyle: o } = na.getComputedStyle(t, U1);
  qe.setAttribute("style", `${o};${j1}`), qe.value = t.value || t.placeholder || "";
  let i = Number.MIN_SAFE_INTEGER, u = Number.MAX_SAFE_INTEGER, c = qe.scrollHeight, d;
  if (s === "border-box" ? c += l : s === "content-box" && (c -= r), n !== null || a !== null) {
    qe.value = " ";
    const g = qe.scrollHeight - r;
    n !== null && (i = g * n, s === "border-box" && (i = i + r + l), c = Math.max(i, c)), a !== null && (u = g * a, s === "border-box" && (u = u + r + l), d = c > u ? "" : "hidden", c = Math.min(u, c));
  }
  return a || (d = "hidden"), {
    height: `${c}px`,
    minHeight: `${i}px`,
    maxHeight: `${u}px`,
    overflowY: d
  };
}, cd = (e, t) => {
  const n = Fi(), a = z(), r = a.props, { emit: l } = a, s = Ae("vc-form-item", {}), o = E(null), i = E(!1), u = E(!1), c = E({}), d = E({}), g = _(() => {
    const w = o.value, { maxlength: M, bytes: F } = r;
    return Array.isArray(w) || !M || !F ? M : cc(w, M);
  }), h = (w, M, F) => {
    !F && w === o.value || (r.controllable || (o.value = w), l("update:modelValue", w, M), l("input", w, M), l("change", w, M), r.allowDispatch && s?.change?.(w));
  }, f = () => {
    a.proxy?.$forceUpdate?.();
  }, p = () => {
    if (!r.autosize) return;
    const { minRows: w, maxRows: M } = r.autosize;
    fe(() => {
      c.value = Z1({
        el: e.value,
        minRows: w,
        maxRows: M
      });
    });
  }, A = (w) => {
    l("keydown", w);
  }, v = (w) => {
    l("keypress", w);
  }, b = (w) => {
    w.keyCode == 13 && l("enter", w), l("keyup", w);
  }, C = (w) => {
    u.value = !0, l("focus", w);
  }, D = (w) => {
    u.value = !1, l("blur", w), r.allowDispatch && s?.blur?.(o.value);
  }, B = (w) => {
    l("change", w);
  }, y = (w) => {
    if (i.value) return;
    let M = e.value.value;
    if (typeof r.maxlength < "u" && r.bytes && w.inputType !== "deleteContentBackward") {
      const F = rs(M, r.maxlength);
      M !== F && (M = F);
    }
    h(M, w, w.inputType === "insertFromPaste"), f();
  }, x = (w) => {
    w.type === "compositionstart" && (i.value = !0), w.type === "compositionend" && (i.value = !1, y(w));
  }, S = (w) => {
    d.value = { height: `${e.value ? e.value.offsetHeight : 0}px` }, l("resize", w);
  }, I = (w) => {
    l("paste", w, w.clipboardData.getData("text"));
  }, P = _(() => ({
    "is-focus": u.value,
    "is-disabled": r.disabled,
    "is-error": !!s?.message?.value
  })), W = _(() => ({
    onKeyup: b,
    onKeypress: v,
    onKeydown: A,
    onFocus: C,
    onBlur: D,
    onCompositionstart: x,
    onCompositionupdate: x,
    onCompositionend: x,
    onInput: y,
    onChange: B,
    onPaste: I
  })), O = _(() => ({
    id: r.id,
    autocomplete: n.autocomplete,
    spellcheck: n.spellcheck,
    placeholder: n.placeholder,
    readonly: n.readonly,
    name: n.name,
    autofocus: n.autofocus,
    disabled: r.disabled,
    maxlength: r.maxlength,
    rows: r.rows,
    wrap: r.wrap
  }));
  $(() => r.modelValue, (w) => {
    (r.controllable || w !== o.value) && (o.value = w, p());
  }, { immediate: !0 }), te(() => {
    de.on(e.value, S), p();
  }), _e(() => {
    de.off(e.value, S);
  });
  const k = sa(e);
  return t?.({
    ...k,
    refresh: p
  }), {
    currentValue: o,
    isOnComposition: i,
    isFocus: u,
    calcTextareaStyle: c,
    contentStyle: d,
    classes: P,
    listeners: W,
    binds: O,
    currentMaxlength: g
  };
}, dd = {
  ...be(an, [
    "id",
    "disabled",
    "maxlength",
    "allowDispatch",
    "modelValue",
    "bytes",
    "controllable"
  ]),
  wrap: {
    type: String,
    validator: (e) => /(soft|hard)/.test(e),
    default: "soft"
  },
  rows: {
    type: Number,
    default: 2
  },
  autosize: {
    type: [Boolean, Object],
    default: !1
  },
  textareaStyle: { type: [Object, Array] }
};
Object.assign({}, dd, {
  indicator: {
    type: [Boolean, Object],
    default: !1
  },
  indicateClass: String
});
Object.assign({}, dd, { align: {
  type: String,
  default: "left"
} });
var J1 = {
  type: {
    type: String,
    default: "time",
    validator: (e) => /(time|timerange)/.test(e)
  },
  disabledTime: {
    type: Function,
    default: () => !1
  },
  disabledHours: {
    type: Array,
    default: () => []
  },
  disabledMinutes: {
    type: Array,
    default: () => []
  },
  disabledSeconds: {
    type: Array,
    default: () => []
  },
  filterable: {
    type: Boolean,
    default: !1
  }
}, z1 = "vc-time-picker", X1 = (e) => e === "timerange" ? sb : ob;
xc(z1, J1, () => {
  const e = z().props, t = E("icon"), n = dt({}), a = _(() => ({
    disabledTime: e.disabledTime,
    disabledHours: e.disabledHours,
    disabledMinutes: e.disabledMinutes,
    disabledSeconds: e.disabledSeconds,
    filterable: e.filterable
  }));
  return $(() => e.type, (r) => {
    n.value = X1(r);
  }, { immediate: !0 }), {
    icon: t,
    panel: n,
    panelOptions: a
  };
});
var vs = "$treeNodeId", or = {
  children: "children",
  label: "label",
  value: "value",
  disabled: "disabled",
  isLeaf: "isLeaf"
}, vi = (e, t) => {
  !t || t.$treeNodeId || Object.defineProperty(t, vs, {
    value: e.id,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}, Pl = (e) => {
  let t = !0, n = !0, a = !0;
  for (let r = 0, l = e.length; r < l; r++) {
    const s = e[r];
    (s.states.checked !== !0 || s.states.indeterminate) && (t = !1, s.getter.disabled || (a = !1)), (s.states.checked !== !1 || s.states.indeterminate) && (n = !1);
  }
  return {
    all: t,
    none: n,
    allWithoutDisable: a,
    half: !t && !n
  };
}, Sa = (e) => {
  if (e.childNodes.length === 0) return;
  const { all: t, none: n, half: a } = Pl(e.childNodes);
  t ? (e.states.checked = !0, e.states.indeterminate = !1) : a ? (e.states.checked = !1, e.states.indeterminate = !0) : n && (e.states.checked = !1, e.states.indeterminate = !1);
  const r = e.parentNode;
  !r || r.states.level === 0 || e.store.checkStrictly || Sa(r);
}, kn = (e, t) => {
  const n = e.store.keyValue, a = e.states.data || {}, r = n[t];
  if (typeof r == "function") return r(a, e);
  if (typeof r == "string") return a[r];
  if (typeof r > "u") {
    const l = a[t];
    return l === void 0 ? "" : l;
  }
}, q1 = 0, yi = class hd {
  id = q1++;
  states = Ke({
    checked: !1,
    indeterminate: !1,
    expanded: !1,
    visible: !0,
    isCurrent: !1,
    isLeaf: !1,
    isLeafByUser: !1,
    loading: !1,
    level: 0,
    loaded: !1,
    data: null
  });
  getter = Ke({
    label: _(() => kn(this, "label")),
    value: _(() => kn(this, "value")),
    disabled: _(() => kn(this, "disabled"))
  });
  childNodes = Ke([]);
  store;
  parentNode = null;
  constructor(t) {
    for (const o in t) hl(t, o) && (o === "states" ? Object.assign(this.states, t[o]) : this[o] = t[o]);
    const n = this.store, { keyValue: a } = n;
    if (this.states.loaded = !!this.states.data[a.children], this.states.loading = !1, this.parentNode && (this.states.level = this.parentNode.states.level + 1), !n) throw new Error("[Node]store is required!");
    if (n.registerNode(this), a && typeof a.isLeaf < "u") {
      const o = kn(this, a.isLeaf);
      typeof o == "boolean" && (this.states.isLeafByUser = o);
    }
    if (this.states.data && (this.setData(this.states.data), n.defaultExpandAll && this.states.data[a.children] && (this.states.expanded = !0)), Array.isArray(this.states.data) || vi(this, this.states.data), !this.states.data) return;
    const r = n.expandedValues, l = n.primaryKey, s = this.states.data[l];
    l && r && r.indexOf(s) !== -1 && this.expand(n.autoExpandParent), l && n.currentNodeValue !== void 0 && s === n.currentNodeValue && (n.currentNode = this, n.currentNode.states.isCurrent = !0), n.lazy && n._initDefaultCheckedNode(this), this.updateLeafState();
  }
  getNextSiblingNode() {
    const t = this.parentNode;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1) return t.childNodes[n + 1];
    }
    return null;
  }
  getPreviousSiblingNode() {
    const t = this.parentNode;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1) return n > 0 ? t.childNodes[n - 1] : null;
    }
    return null;
  }
  setData(t) {
    Array.isArray(t) || vi(this, t), this.states.data = t, this.childNodes.splice(0, this.childNodes.length - 1);
    let n;
    this.states.level === 0 && this.states.data instanceof Array ? n = this.states.data : n = kn(this, "children") || [];
    for (let a = 0, r = n.length; a < r; a++) this.insertChild({ data: n[a] });
  }
  contains(t, n = !0) {
    const a = function(r) {
      const l = r.childNodes || [];
      let s = !1;
      for (let o = 0, i = l.length; o < i; o++) {
        const u = l[o];
        if (u === t || n && a(u)) {
          s = !0;
          break;
        }
      }
      return s;
    };
    return a(this);
  }
  remove() {
    const t = this.parentNode;
    t && t.removeChild(this);
  }
  insertChild(t, n, a) {
    if (!t) throw new Error("insertChild error: states is required.");
    if (!a) {
      const l = this.getChildren(!0);
      l?.indexOf(t.data) === -1 && (typeof n > "u" || n < 0 ? l.push(t.data) : l.splice(n, 0, t.data));
    }
    const r = new hd({
      parentNode: this,
      store: this.store,
      states: t
    });
    return r.states.level = this.states.level + 1, typeof n > "u" || n < 0 ? this.childNodes.push(r) : this.childNodes.splice(n, 0, r), this.updateLeafState(), r;
  }
  insertBefore(t, n) {
    let a = -1;
    return n && (a = this.childNodes.indexOf(n)), this.insertChild(t, a);
  }
  insertAfter(t, n) {
    let a = -1;
    return n && (a = this.childNodes.indexOf(n), a !== -1 && (a += 1)), this.insertChild(t, a);
  }
  removeChild(t) {
    const n = this.getChildren() || [], a = n.indexOf(t.states.data);
    a > -1 && n.splice(a, 1);
    const r = this.childNodes.indexOf(t);
    r > -1 && (this.store && this.store.deregisterNode(t), t.parentNode = null, this.childNodes.splice(r, 1)), this.updateLeafState();
  }
  removeChildByData(t) {
    let n = null;
    for (let a = 0; a < this.childNodes.length; a++) if (this.childNodes[a].states.data === t) {
      n = this.childNodes[a];
      break;
    }
    n && this.removeChild(n);
  }
  async expand(t) {
    const n = () => {
      if (t) {
        let a = this.parentNode;
        for (; a && a.states.level > 0; )
          a.states.expanded = !0, a = a.parentNode;
      }
      this.states.expanded = !0;
    };
    this.shouldLoadData() ? await this.loadData() instanceof Array && (this.states.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || Sa(this), n()) : n();
  }
  doCreateChildren(t, n = {}) {
    t.forEach((a) => {
      this.insertChild({
        data: a,
        ...n
      }, void 0, !0);
    });
  }
  collapse() {
    this.states.expanded = !1;
  }
  shouldLoadData() {
    return this.store.lazy && this.store.loadData && !this.states.loaded;
  }
  updateLeafState() {
    if (this.store.lazy && !this.states.loaded && typeof this.states.isLeafByUser < "u") {
      this.states.isLeaf = this.states.isLeafByUser;
      return;
    }
    const t = this.childNodes;
    if (!this.store.lazy || this.store.lazy && this.states.loaded) {
      this.states.isLeaf = !t || t.length === 0;
      return;
    }
    this.states.isLeaf = !1;
  }
  async setChecked(t, n, a, r) {
    if (this.states.indeterminate = t === "half", this.states.checked = t === !0, this.store.checkStrictly) return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: s, allWithoutDisable: o } = Pl(this.childNodes);
      !this.states.isLeaf && !s && o && (this.states.checked = !1, t = !1);
      const i = () => {
        if (n) {
          const u = this.childNodes;
          for (let g = 0, h = u.length; g < h; g++) {
            const f = u[g];
            r = r || t !== !1;
            const p = f.getter.disabled ? f.states.checked : r;
            f.setChecked(p, n, !0, r);
          }
          const { half: c, all: d } = Pl(u);
          d || (this.states.checked = d, this.states.indeterminate = c);
        }
      };
      if (this.shouldLoadData()) {
        await this.loadData({ checked: t !== !1 }), i(), Sa(this);
        return;
      } else i();
    }
    const l = this.parentNode;
    !l || l.states.level === 0 || a || Sa(l);
  }
  getChildren(t = !1) {
    if (this.states.level === 0) return this.states.data;
    const n = this.states.data;
    if (!n) return null;
    const a = this.store.keyValue?.children || or.children;
    return n[a] === void 0 && (n[a] = null), t && !n[a] && (n[a] = []), n[a];
  }
  updateChildren() {
    const t = this.getChildren() || [], n = this.childNodes.map((l) => l.states.data), a = {}, r = [];
    t.forEach((l, s) => {
      l.$treeNodeId ? a[l[vs]] = {
        index: s,
        data: l
      } : r.push({
        index: s,
        data: l
      });
    }), this.store.lazy || n.forEach((l) => {
      l && !a[l.$treeNodeId] && this.removeChildByData(l);
    }), r.forEach(({ index: l, data: s }) => {
      this.insertChild({ data: s }, l);
    }), this.updateLeafState();
  }
  async loadData(t = {}) {
    if (this.store.lazy && this.store.loadData && !this.states.loaded && (!this.states.loading || Object.keys(t).length)) {
      this.states.loading = !0;
      const n = await this.store.loadData(this);
      return this.states.loaded = !0, this.states.loading = !1, this.childNodes = [], this.doCreateChildren(n, t), this.updateLeafState(), n;
    }
  }
}, ew = class {
  primaryKey = vs;
  keyValue = or;
  currentNode = null;
  currentNodeValue;
  nodesMap = {};
  root;
  data;
  filterNode;
  checkedValues = [];
  expandedValues = [];
  lazy = !1;
  checkStrictly = !1;
  autoExpandParent = !0;
  checkDescendants = !1;
  defaultExpandAll = !1;
  loadData;
  constructor(e) {
    for (const t in e) hl(e, t) && (this[t] = e[t]);
    this.primaryKey = this.keyValue.value || this.primaryKey, this.nodesMap = {}, this.root = new yi({
      store: this,
      states: { data: this.data }
    }), this._initDefaultCheckedNodes();
  }
  filter(e) {
    const t = this.filterNode, n = this.lazy, a = function(r) {
      const l = r.childNodes;
      l.forEach((s) => {
        s.states.visible = t.call(s, e, s.states.data, s), a(s);
      }), !r.states.visible && l.length && (r.states.visible = l.some((s) => s.states.visible)), e && r.states.visible && !r.states.isLeaf && !n && r.expand();
    };
    a(this.root);
  }
  setData(e) {
    e !== this.root.states.data ? (this.root.setData(e), this._initDefaultCheckedNodes()) : this.root.updateChildren();
  }
  getNode(e) {
    if (e instanceof yi) return e;
    const t = typeof e != "object" ? e : e[this.primaryKey];
    return this.nodesMap[t] || null;
  }
  insertBefore(e, t) {
    const n = this.getNode(t);
    n?.parentNode?.insertBefore?.({ data: e }, n);
  }
  insertAfter(e, t) {
    const n = this.getNode(t);
    n?.parentNode?.insertAfter?.({ data: e }, n);
  }
  remove(e) {
    const t = this.getNode(e);
    t && t.parentNode && (t === this.currentNode && (this.currentNode = null), t.parentNode.removeChild(t));
  }
  append(e, t) {
    const n = t ? this.getNode(t) : this.root;
    n && n.insertChild({ data: e });
  }
  /**
  * 级联非 strict：仅对「选中集合里的最深节点」做 setChecked(true, deep)，
  * 避免对祖先逐个 deep 勾选把未出现在 checkedValues 里的兄弟子树再次全选。
  * @param checkedValues ~
  * @returns ~
  */
  _getCascadeCheckedAnchorIds(e) {
    const t = new Set(e), n = this.nodesMap, a = [];
    for (const r of e) {
      const l = n[r];
      l && (l.childNodes.some((s) => t.has(s.getter.value)) || a.push(r));
    }
    return a.sort((r, l) => {
      const s = n[r], o = n[l];
      return !s || !o ? 0 : o.states.level - s.states.level;
    }), a;
  }
  _initDefaultCheckedNodes() {
    const e = this.checkedValues || [], t = this.nodesMap;
    if (this.checkStrictly) {
      e.forEach((n) => {
        const a = t[n];
        a && a.setChecked(!0, !1);
      });
      return;
    }
    this._getCascadeCheckedAnchorIds(e).forEach((n) => {
      const a = t[n];
      a && a.setChecked(!0, !0);
    });
  }
  _initDefaultCheckedNode(e) {
    const t = this.checkedValues || [], n = e.getter.value;
    if (t.indexOf(n) === -1) return;
    if (this.checkStrictly) {
      e.setChecked(!0, !1);
      return;
    }
    const a = new Set(t);
    e.childNodes.some((r) => a.has(r.getter.value)) || e.setChecked(!0, !0);
  }
  setCheckedValues(e) {
    Rt(e, this.checkedValues) || (Ky(this.checkedValues, e).forEach((t) => {
      this.nodesMap[t] && this.nodesMap[t].setChecked(!1, !this.checkStrictly);
    }), this.checkedValues = e, this._initDefaultCheckedNodes());
  }
  registerNode(e) {
    if (!this.primaryKey || !e || !e.states.data) return;
    const t = e.getter.value;
    t !== void 0 && (this.nodesMap[t] = e);
  }
  deregisterNode(e) {
    if (!this.primaryKey || !e || !e.states.data) return;
    e.childNodes.forEach((n) => {
      this.deregisterNode(n);
    });
    const t = e.getter.value;
    delete this.nodesMap[t];
  }
  getCheckedNodes(e = !1, t = !1) {
    const n = [], a = function(r) {
      r.childNodes.forEach((l) => {
        (l.states.checked || t && l.states.indeterminate) && (!e || e && l.states.isLeaf) && n.push(l), a(l);
      });
    };
    return a(this.root), n;
  }
  getCheckedValues(e = !1) {
    return this.getCheckedNodes(e).map((t) => t.states.data[this.primaryKey]);
  }
  getHalfCheckedNodes() {
    const e = [], t = function(n) {
      n.childNodes.forEach((a) => {
        a.states.indeterminate && e.push(a), t(a);
      });
    };
    return t(this.root), e;
  }
  getHalfCheckedValues() {
    return this.getHalfCheckedNodes().map((e) => e.states.data[this.primaryKey]);
  }
  _getAllNodes() {
    const e = [], t = this.nodesMap;
    for (const n in t) hl(t, n) && e.push(t[n]);
    return e;
  }
  updateChildren(e, t) {
    const n = this.nodesMap[e];
    if (!n) return;
    const a = n.childNodes;
    for (let r = a.length - 1; r >= 0; r--) {
      const l = a[r];
      this.remove(l.states.data);
    }
    for (let r = 0, l = t.length; r < l; r++) {
      const s = t[r];
      this.append(s, n.states.data);
    }
  }
  _setCheckedValues(e, t = !1, n) {
    const a = this._getAllNodes().sort((s, o) => o.states.level - s.states.level), r = /* @__PURE__ */ Object.create(null), l = Object.keys(n);
    a.forEach((s) => s.setChecked(!1, !1));
    for (let s = 0, o = a.length; s < o; s++) {
      const i = a[s], u = i.states.data[e].toString();
      if (!(l.indexOf(u) > -1))
        i.states.checked && !r[u] && i.setChecked(!1, !1);
      else {
        let c = i.parentNode;
        for (; c && c.states.level > 0; )
          r[c.states.data[e]] = !0, c = c.parentNode;
        if (i.states.isLeaf || this.checkStrictly) i.setChecked(!0, !1);
        else if (i.setChecked(!0, !0), t) {
          i.setChecked(!1, !1);
          const d = function(g) {
            g.childNodes.forEach((h) => {
              h.states.isLeaf || h.setChecked(!1, !1), d(h);
            });
          };
          d(i);
        }
      }
    }
  }
  setCheckedNodes(e, t = !1) {
    const n = this.primaryKey, a = {};
    e.forEach((r) => {
      a[(r || {})[n]] = !0;
    }), this._setCheckedValues(n, t, a);
  }
  setExpandedValues(e) {
    e = e || [], this.expandedValues = e, e.forEach((t) => {
      const n = this.getNode(t);
      n && n.expand(this.autoExpandParent);
    });
  }
  setChecked(e, t, n) {
    const a = this.getNode(e);
    a && a.setChecked(!!t, n);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(e) {
    const t = this.currentNode;
    t && (t.states.isCurrent = !1), this.currentNode = e, this.currentNode.states.isCurrent = !0;
  }
  setUserCurrentNode(e) {
    const t = e[this.primaryKey], n = this.nodesMap[t];
    this.setCurrentNode(n);
  }
  setCurrentNodeByData(e) {
    if (e == null && this.currentNode) {
      this.currentNode.states.isCurrent = !1, this.currentNode = null;
      return;
    }
    const t = this.getNode(e);
    t && this.setCurrentNode(t);
  }
}, fd = () => {
  const { props: e } = z(), t = {
    treeNodeExpand: (a) => {
      e.node && e.node !== a && e.node.collapse();
    },
    children: []
  }, n = Ae("vc-tree-node-map", null);
  return n && n.children.push(t), Ot("vc-tree-node-map", t), { broadcast: (a) => {
    if (e.accordion)
      for (const r of t.children) r.treeNodeExpand(a);
  } };
}, Ad = {
  node: {
    type: Object,
    default: () => ({})
  },
  renderNodeLabel: Function,
  renderNodeAfterExpand: {
    type: Boolean,
    default: !0
  },
  showCheckbox: {
    type: Boolean,
    default: !1
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  allowDispatch: {
    type: Boolean,
    default: !0
  }
}, gd = /* @__PURE__ */ H({
  name: "vc-tree-node",
  props: Ad,
  emits: ["node-expand"],
  setup(e, { emit: t }) {
    const n = z(), a = fd(), r = Ae("vc-tree"), l = Ae("vc-form-item", {}), s = E(!!e.node.states.expanded), o = E(!!e.node.states.expanded), i = E(!1), u = E(!1), c = () => {
      const y = r.store, x = {
        checkedNodes: y.getCheckedNodes(),
        checkedValues: y.getCheckedValues(),
        halfCheckedNodes: y.getHalfCheckedNodes(),
        halfCheckedValues: y.getHalfCheckedValues()
      }, S = qt(x.checkedValues, {
        modelValue: r.props.modelValue,
        max: r.props.max,
        numerable: r.props.numerable,
        separator: r.props.separator,
        nullValue: r.props.nullValue
      });
      return Rt(S, r.props.modelValue) || (r.emit("update:modelValue", S, x), r.emit("change", S, x), e.allowDispatch && l?.change?.()), x;
    }, d = (y) => y.states.data[r.props.keyValue.value], g = (y, x) => {
      i.value !== y && u.value !== x && r.emit("check-change", e.node.states.data, y, x), i.value = y, u.value = x;
    }, h = async (y, x) => {
      e.node.setChecked(x.target.checked, !r.props.checkStrictly), await fe(), r.emit("check", e.node.states.data, c());
    }, f = async () => {
      e.node.states.isLeaf || (s.value ? (r.emit("node-collapse", e.node.states.data, e.node, n), e.node.collapse()) : (await e.node.expand(), c(), t("node-expand", e.node.states.data, e.node, n)));
    }, p = () => {
      const y = r.store;
      if (y.setCurrentNode(e.node), r.emit("current-change", y.currentNode ? y.currentNode.states.data : null, y.currentNode), r.currentNodeInstance.value = n, r.props.expandOnClickNode && f(), r.props.checkOnClickNode && !e.node.getter.disabled) {
        const x = !e.node.states.checked;
        h(x, { target: { checked: x } });
      }
      r.emit("node-click", e.node.states.data, e.node, n);
    }, A = (y) => {
      r.instance.vnode.props.onNodeContextmenu && (y.stopPropagation(), y.preventDefault()), r.emit("node-contextmenu", y, e.node.states.data, e.node, n);
    }, v = (y, x, S) => {
      a.broadcast(x), r.emit("node-expand", y, x, S);
    }, b = (y) => {
      r.props.draggable && r.drag.emit("drag-start", y, n);
    }, C = (y) => {
      r.props.draggable && (r.drag.emit("drag-over", y, n), y.preventDefault());
    }, D = (y) => {
      y.preventDefault();
    }, B = (y) => {
      r.props.draggable && r.drag.emit("drag-end", y, n);
    };
    return $(() => {
      const y = r.props.keyValue.children || or.children;
      return e.node.states.data[y];
    }, (y) => {
      g(e.node.states.checked, y);
    }), $(() => e.node.states.indeterminate, (y) => {
      g(e.node.states.checked, y);
    }), $(() => e.node.states.checked, (y) => {
      g(y, e.node.states.indeterminate);
    }), $(() => e.node.states.expanded, (y) => {
      y && (o.value = !0), fe(() => s.value = y);
    }, { deep: !0 }), () => {
      const { node: y } = e;
      return ce(m("div", {
        class: [{
          "is-expanded": s.value,
          "is-current": y.states.isCurrent,
          "is-hidden": !y.states.visible,
          "is-focusable": !y.getter.disabled,
          "is-checked": !y.getter.disabled && y.states.checked
        }, "vc-tree-node"],
        "aria-expanded": s.value,
        "aria-disabled": y.getter.disabled,
        "aria-checked": y.states.checked,
        draggable: r.props.draggable,
        role: "treeitem",
        tabindex: "-1",
        onClick: pe(p, ["stop"]),
        onContextmenu: A,
        onDragstart: pe(b, ["stop"]),
        onDragover: pe(C, ["stop"]),
        onDragend: pe(B, ["stop"]),
        onDrop: pe(D, ["stop"])
      }, [m("div", {
        style: [{ "padding-left": (y.states.level - 1) * r.props.indent + "px" }],
        class: "vc-tree-node__content"
      }, [
        m("span", {
          class: [{
            "is-expand": !y.states.isLeaf && s.value,
            "is-leaf": y.states.isLeaf
          }, "vc-tree-node__expand-icon"],
          onClick: pe(f, ["stop"])
        }, [m(ee, { type: "triangle-up" }, null)]),
        e.showCheckbox && m(mc, {
          modelValue: y.states.checked,
          indeterminate: y.states.indeterminate,
          disabled: !!y.getter.disabled,
          "onUpdate:modelValue": (x) => y.states.checked = x,
          onChange: h,
          onClick: pe(() => {
          }, ["stop"])
        }, null),
        y.states.loading && m(Dn, {
          size: 12,
          class: "vc-tree-node__loading-icon"
        }, null),
        e.renderNodeLabel ? m(xe, {
          render: e.renderNodeLabel,
          store: y,
          row: y.states.data
        }, null) : m("span", null, [y.getter.label])
      ]), m(FD, null, { default: () => [(!e.renderNodeAfterExpand || o.value) && ce(m("div", {
        "aria-expanded": s.value,
        class: "vc-tree-node__children",
        role: "group"
      }, [y.childNodes.map((x) => m(gd, {
        key: d(x),
        renderNodeLabel: e.renderNodeLabel,
        renderNodeAfterExpand: e.renderNodeAfterExpand,
        showCheckbox: e.showCheckbox,
        allowDispatch: e.allowDispatch,
        accordion: e.accordion,
        node: x,
        onNodeExpand: v
      }, null))]), [[he, s.value]])] })]), [[he, y.states.visible]]);
    };
  }
}), tw = (e, t) => {
  const { props: n, emit: a, vnode: r } = z(), l = Ke({
    showDropIndicator: !1,
    draggingNode: null,
    dropNode: null,
    allowDrop: !0,
    dropType: ""
  }), s = (u, c) => {
    if (typeof n.allowDrag == "function" && !n.allowDrag(c.props.node))
      return u.preventDefault(), !1;
    u.dataTransfer.effectAllowed = "move";
    try {
      u.dataTransfer.setData("text/plain", "");
    } catch (d) {
      console.log(d);
    }
    l.draggingNode = c, a("node-drag-start", c.props.node, u);
  }, o = (u, c) => {
    const d = c, g = l.dropNode;
    g && g !== d && Sr(g.vnode.el, "is-drop-inner");
    const h = l.draggingNode.props.node, f = d.props.node;
    if (!h || !f) return;
    let p = !0, A = !0, v = !0, b = !0;
    typeof n.allowDrop == "function" && (p = n.allowDrop(h, f, "prev"), b = n.allowDrop(h, f, "inner"), A = b, v = n.allowDrop(h, f, "next")), u.dataTransfer.dropEffect = A ? "move" : "none", (p || A || v) && g !== d && (g && a("node-drag-leave", h, g.props.node, u), a("node-drag-enter", h, f, u)), (p || A || v) && (l.dropNode = d), f.getNextSiblingNode() === h && (v = !1), f.getPreviousSiblingNode() === h && (p = !1), f.contains(h, !1) && (A = !1), (h === f || h.contains(f)) && (p = !1, A = !1, v = !1);
    const C = d.vnode.el.getBoundingClientRect(), D = r.el.getBoundingClientRect();
    let B;
    const y = p ? A ? 0.25 : v ? 0.45 : 1 : -1, x = v ? A ? 0.75 : p ? 0.55 : 0 : 1;
    let S = -9999;
    const I = u.clientY - C.top;
    I < C.height * y ? B = "before" : I > C.height * x ? B = "after" : A ? B = "inner" : B = "none";
    const P = d.vnode.el.querySelector(".vc-tree-node__expand-icon").getBoundingClientRect();
    B === "before" ? S = P.top - D.top : B === "after" && (S = P.bottom - D.top), t.value.style.top = S + "px", t.value.style.left = P.right - D.left + "px", B === "inner" ? NA(d.vnode.el, "is-drop-inner") : Sr(d.vnode.el, "is-drop-inner"), l.showDropIndicator = B === "before" || B === "after", l.allowDrop = l.showDropIndicator || b, l.dropType = B, a("node-drag-over", h, f, u);
  }, i = (u) => {
    const { draggingNode: c, dropType: d, dropNode: g } = l, h = c.props.node, f = g.props.node;
    if (u.preventDefault(), u.dataTransfer.dropEffect = "move", c && g) {
      const p = { data: h.states.data };
      d !== "none" && h.remove();
      let A;
      d === "before" ? A = f.parentNode.insertBefore(p, f) : d === "after" ? A = f.parentNode.insertAfter(p, f) : d === "inner" && (A = f.insertChild(p)), A && d !== "none" && e.registerNode(A), Sr(g.vnode.el, "is-drop-inner"), a("node-drag-end", h, f, d, u), d !== "none" && a("node-drop", h, f, d, u);
    }
    c && !g && a("node-drag-end", h, null, d, u), l.showDropIndicator = !1, l.draggingNode = null, l.dropNode = null, l.allowDrop = !0;
  };
  return {
    state: l,
    emit: (u, ...c) => {
      const d = {
        "drag-start": s,
        "drag-over": o,
        "drag-end": i
      };
      return d[u] && d[u](...c);
    }
  };
}, nw = () => {
  const { vnode: e } = z(), t = E(null), n = E([]), a = _(() => Array.prototype.slice.call(t.value)), r = () => {
    t.value = e.el.querySelectorAll(".is-focusable[role=treeitem]"), n.value = e.el.querySelectorAll("input[type=checkbox]");
    const s = e.el.querySelectorAll(".is-checked[role=treeitem]");
    if (s.length) {
      s[0].setAttribute("tabindex", 0);
      return;
    }
    t.value[0] && t.value[0].setAttribute("tabindex", 0);
  }, l = (s) => {
    const o = s.target;
    if (o.className.indexOf("vc-tree-node") === -1) return;
    const i = s.keyCode;
    t.value = e.el.querySelectorAll(".is-focusable[role=treeitem]");
    const u = a.value.indexOf(o);
    let c;
    [38, 40].indexOf(i) > -1 && (s.preventDefault(), i === 38 ? c = u !== 0 ? u - 1 : 0 : c = u < a.value.length - 1 ? u + 1 : 0, a.value[c].focus()), [37, 39].indexOf(i) > -1 && (s.preventDefault(), o.click());
    const d = o.querySelector('[type="checkbox"]');
    [13, 32].indexOf(i) > -1 && d && (s.preventDefault(), d.click());
  };
  return $(() => n.value, (s) => {
    Array.prototype.forEach.call(s, (o) => {
      o.setAttribute("tabindex", -1);
    });
  }), te(() => {
    r(), e.el.addEventListener("keydown", l);
  }), Yl(() => {
    t.value = e.el.querySelectorAll("[role=treeitem]"), n.value = e.el.querySelectorAll("input[type=checkbox]");
  }), Ct(() => e.el.removeEventListener("keydown", l)), {
    treeItems: t,
    treeItemArray: a
  };
}, aw = [
  "separator",
  "numerable",
  "nullValue"
], rw = [
  "renderNodeLabel",
  "renderNodeAfterExpand",
  "showCheckbox",
  "accordion",
  "allowDispatch"
], md = {
  ...be(ls, aw),
  ...be(Ad, rw),
  max: {
    type: Number,
    default: 1 / 0,
    validator: (e) => e >= 1
  },
  data: {
    type: Array,
    default: () => []
  },
  emptyText: {
    type: String,
    default: "暂无数据"
  },
  checkStrictly: {
    type: Boolean,
    default: !1
  },
  defaultExpandAll: Boolean,
  expandOnClickNode: {
    type: Boolean,
    default: !0
  },
  checkOnClickNode: Boolean,
  checkDescendants: {
    type: Boolean,
    default: !1
  },
  autoExpandParent: {
    type: Boolean,
    default: !0
  },
  modelValue: [
    String,
    Number,
    Array
  ],
  expandedValues: {
    type: Array,
    default: () => []
  },
  currentNodeValue: [String, Number],
  draggable: {
    type: Boolean,
    default: !1
  },
  allowDrag: Function,
  allowDrop: Function,
  lazy: {
    type: Boolean,
    default: !1
  },
  highlightCurrent: Boolean,
  loadData: Function,
  filterNode: Function,
  indent: {
    type: Number,
    default: 18
  },
  iconClass: String,
  keyValue: {
    type: Object,
    default: () => or
  }
}, pd = /* @__PURE__ */ H({
  name: "vc-tree",
  props: md,
  emits: [
    "update:modelValue",
    "change",
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = z(), r = new ew({
      data: e.data,
      lazy: e.lazy,
      keyValue: e.keyValue,
      loadData: e.loadData,
      currentNodeValue: e.currentNodeValue,
      checkStrictly: e.checkStrictly,
      checkDescendants: e.checkDescendants,
      checkedValues: Ue(e.modelValue, {
        numerable: e.numerable,
        separator: e.separator
      }),
      expandedValues: [...e.expandedValues],
      autoExpandParent: e.autoExpandParent,
      defaultExpandAll: e.defaultExpandAll,
      filterNode: e.filterNode
    }), l = r.root, s = E(), o = E(), i = tw(r, o), u = fd(), c = _(() => {
      const { childNodes: F } = l;
      return !F || F.length === 0 || F.every(({ states: N }) => !N.visible);
    });
    $(() => e.modelValue, (F) => r.setCheckedValues(Ue(F, {
      numerable: e.numerable,
      separator: e.separator
    }))), $(() => e.expandedValues, (F) => r.setExpandedValues([...F])), $(() => e.data, (F) => r.setData(F)), $(() => e.checkStrictly, (F) => {
      r.checkStrictly = F;
    });
    const d = (F) => {
      if (!e.filterNode) throw new Error("[Tree] filterNode is required when filter");
      r.filter(F);
    }, g = (F) => F.states.data[e.keyValue.value], h = (F) => {
      if (!e.keyValue.value) throw new Error("[Tree] keyValue.value is required in getNodePath");
      const N = r.getNode(F);
      if (!N) return [];
      const T = [N.states.data];
      let V = N.parentNode;
      for (; V && V !== l; )
        T.push(V.states.data), V = V.parentNode;
      return T.reverse();
    }, f = (F, N) => r.getCheckedNodes(F, N), p = (F) => r.getCheckedValues(F), A = () => {
      const F = r.getCurrentNode();
      return F ? F.states.data : null;
    }, v = () => {
      if (!e.keyValue.value) throw new Error("[Tree] keyValue.value is required in getCurrentKey");
      const F = A();
      return F ? F[e.keyValue.value] : null;
    }, b = (F, N) => {
      if (!e.keyValue.value) throw new Error("[Tree] keyValue.value is required in setCheckedNodes");
      r.setCheckedNodes(F, N);
    }, C = (F) => {
      if (!e.keyValue.value) throw new Error("[Tree] keyValue.value is required in setCheckedValues");
      r.setCheckedValues(F);
    }, D = (F, N, T) => {
      r.setChecked(F, N, T);
    }, B = () => r.getHalfCheckedNodes(), y = () => r.getHalfCheckedValues(), x = (F) => {
      if (!e.keyValue.value) throw new Error("[Tree] keyValue.value is required in setCurrentNode");
      r.setUserCurrentNode(F);
    }, S = (F) => {
      if (!e.keyValue.value) throw new Error("[Tree] keyValue.value is required in setCurrentNodeByData");
      r.setCurrentNodeByData(F);
    }, I = (F) => r.getNode(F), P = (F) => {
      r.remove(F);
    }, W = (F, N) => {
      r.append(F, N);
    }, O = (F, N) => {
      r.insertBefore(F, N);
    }, k = (F, N) => {
      r.insertAfter(F, N);
    }, w = (F, N, T) => {
      u.broadcast(N), n("node-expand", F, N, T);
    }, M = (F, N) => {
      if (!e.keyValue.value) throw new Error("[Tree] keyValue.value is required in updateKeyChild");
      r.updateChildren(F, N);
    };
    return nw(), Ot("vc-tree", {
      props: e,
      store: r,
      root: l,
      emit: n,
      drag: i,
      instance: a,
      currentNodeInstance: s
    }), t({
      filter: d,
      getNodeKey: g,
      getNodePath: h,
      getCheckedNodes: f,
      getCheckedValues: p,
      getCurrentNode: A,
      getCurrentKey: v,
      setCheckedNodes: b,
      setCheckedValues: C,
      setChecked: D,
      getHalfCheckedNodes: B,
      getHalfCheckedValues: y,
      setCurrentNode: x,
      setCurrentNodeByData: S,
      getNode: I,
      remove: P,
      append: W,
      insertBefore: O,
      insertAfter: k,
      handleNodeExpand: w,
      updateKeyChildren: M
    }), () => {
      const F = i.state;
      return m("div", {
        class: [{
          "vc-tree--highlight-current": e.highlightCurrent,
          "is-dragging": !!F.draggingNode,
          "is-drop-not-allow": !F.allowDrop,
          "is-drop-inner": F.dropType === "inner"
        }, "vc-tree"],
        role: "tree"
      }, [
        l.childNodes.map((N) => m(gd, {
          key: g(N),
          renderNodeLabel: e.renderNodeLabel,
          renderNodeAfterExpand: e.renderNodeAfterExpand,
          showCheckbox: e.showCheckbox,
          allowDispatch: e.allowDispatch,
          accordion: e.accordion,
          node: N,
          onNodeExpand: w
        }, null)),
        c.value && m("div", { class: "vc-tree__empty-block" }, [m("span", { class: "vc-tree__empty-text" }, [e.emptyText])]),
        ce(m("div", {
          ref: o,
          class: "vc-tree__drop-indicator"
        }, null), [[he, F.showDropIndicator]])
      ]);
    };
  }
}), lw = /* @__PURE__ */ H({
  name: "vc-tree-select-content",
  props: {
    value: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      default: () => []
    },
    checkStrictly: {
      type: Boolean,
      default: !1
    },
    renderNodeLabel: Function
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    return () => m(ca, {
      class: "vc-tree-select__options",
      "max-height": "200px"
    }, { default: () => [m(pd, {
      "model-value": e.value,
      "expanded-values": e.value,
      data: e.data,
      checkStrictly: e.checkStrictly,
      allowDispatch: !1,
      showCheckbox: !0,
      renderNodeLabel: e.renderNodeLabel,
      onChange: (n, a) => t("change", n, a)
    }, null)] });
  }
}), sw = /* @__PURE__ */ H({
  name: "vc-tree-select-content-cascader",
  props: {
    value: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      default: () => []
    },
    checkStrictly: {
      type: Boolean,
      default: !1
    },
    renderNodeLabel: Function,
    numerable: {
      type: Boolean,
      default: !1
    },
    separator: {
      type: String,
      default: ","
    },
    max: {
      type: Number,
      default: 1
    },
    nullValue: {
      type: [
        Number,
        String,
        Object
      ],
      default: void 0
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = E(null), a = E([]), r = _(() => {
      if (!e.data.length) return [];
      let h = e.data;
      const f = [];
      return a.value.forEach((p) => {
        const A = h;
        f.push(A), h = (h.find((v) => v.value == p) || {}).children || [];
      }), f.push(h), f;
    }), l = E(0), s = _(() => Array.from({ length: a.value.length + 1 }).map((h, f) => f)), o = (h, f) => {
      const p = a.value.length - f;
      a.value.splice(f, p, h);
    }, i = async () => {
      await fe();
      const h = n.value;
      if (!h) return;
      const f = {
        checkedNodes: h.getCheckedNodes(),
        checkedValues: h.getCheckedValues(),
        halfCheckedNodes: h.getHalfCheckedNodes(),
        halfCheckedValues: h.getHalfCheckedValues()
      };
      l.value++, t("change", null, f);
    }, u = (h) => {
      const f = n.value;
      if (!f) return {
        checked: !1,
        indeterminate: !1
      };
      const p = f.getNode(h);
      return p ? {
        checked: !!p.states.checked,
        indeterminate: !!p.states.indeterminate
      } : {
        checked: !1,
        indeterminate: !1
      };
    }, c = (h) => !!(h.children && h.children.length > 0), d = async (h, f) => {
      const p = n.value;
      p && (p.setChecked(f, h, !e.checkStrictly), i());
    }, g = (h, f) => {
      const p = n.value;
      p && (p.setChecked(f, h, !e.checkStrictly), i());
    };
    return () => m("div", { class: "vc-tree-select__cascader" }, [m(pd, {
      ref: n,
      class: "vc-tree-select__cascader-tree-hidden",
      "model-value": e.value,
      "expanded-values": e.value,
      data: e.data,
      checkStrictly: e.checkStrictly,
      allowDispatch: !1,
      showCheckbox: !0,
      renderNodeLabel: e.renderNodeLabel,
      numerable: e.numerable,
      separator: e.separator,
      max: e.max,
      nullValue: e.nullValue
    }, null), m("div", { class: "vc-tree-select__cascader-columns" }, [s.value.map((h) => {
      const f = r.value[h];
      return !f || !f.length ? null : m("div", {
        class: "vc-tree-select__cascader-column",
        key: h
      }, [m("div", { class: "vc-tree-select__cascader-column-wrapper" }, [f.map((p) => {
        const A = u(p), v = a.value[h] === p.value, b = c(p);
        return m("div", {
          key: p.value,
          class: ["vc-tree-select__cascader-item", { "is-select": v }],
          onMouseenter: () => o(p.value, h),
          onClick: () => g(!A.checked, p)
        }, [
          m("span", {
            class: "vc-tree-select__cascader-checkbox",
            onClick: (C) => C.stopPropagation()
          }, [m(mc, {
            modelValue: A.checked,
            indeterminate: A.indeterminate,
            disabled: !!p.disabled,
            onChange: (C) => d(C, p)
          }, null)]),
          m("span", { class: "vc-tree-select__cascader-label" }, [e.renderNodeLabel && n.value?.getNode?.(p) ? m(xe, {
            render: e.renderNodeLabel,
            store: n.value.getNode(p),
            row: p
          }, null) : m("span", null, [p.label])]),
          b ? m(ee, {
            type: "right",
            class: "vc-tree-select__cascader-icon"
          }, null) : null
        ]);
      })])]);
    })])]);
  }
}), ow = [
  "checkStrictly",
  "data",
  "max",
  "renderNodeLabel"
];
({
  ...ls,
  ...be(md, ow)
});
Qb.View;
var iw = "md", ea = "playground", uw = "tip", cw = "warning", vd = new Jd();
vd.options.html(!0).typographer(!0).linkify(!0).end().plugin("anchor").use(Zt, [{ permalink: Zt.permalink.linkInsideHeader({
  placement: "before",
  symbol: "#"
}) }]).end().plugin("container").use((e) => {
  const t = new RegExp(`^${ea}\\s*(.*)$`);
  e.use(yr, ea, { validate(n) {
    return n.trim().match(t);
  } }), e.use(yr, uw), e.use(yr, cw);
}).end();
var At = vd.toMd(DA), Di = `container_${ea}_open`, dw = `container_${ea}_close`, nl = /<!--([\s\S]*?)-->/g, hw = /<config\s+lang\s*=\s*["']json5["']\s*>([\s\S]*?)<\/config>/i, En = (e) => `<div class="docs-playground-error">PLAYGROUND: ${At.utils.escapeHtml(e)}</div>
`, fw = ["runtime", "files"], Aw = (e) => typeof e == "string" && fw.includes(e), al = (e) => e === "auto" ? !0 : typeof e == "number" ? Number.isFinite(e) && e > 0 : Array.isArray(e) && e.length === 2 && e.every((t) => typeof t == "number" && Number.isFinite(t) && t > 0), gw = (e) => Array.isArray(e) ? `${e[0]}x${e[1]}` : String(e), mw = (e) => {
  if ("view" in e) return "不支持 view 参数，请使用 views";
  if (!("views" in e)) return "";
  const t = e.views;
  if (!Array.isArray(t) || !t.length) return "views 必须是非空数组";
  const n = t.find((r) => !Aw(r));
  if (n !== void 0) return `views 不支持 ${String(n)}`;
  const a = t.find((r, l) => t.indexOf(r) !== l);
  return a !== void 0 ? `views 不能重复声明 ${String(a)}` : "";
}, pw = (e) => {
  if ("viewport" in e && !al(e.viewport)) return "viewport 必须是 auto、正数宽度或 [宽,高]";
  if (!("viewportOptions" in e)) return "";
  const t = e.viewportOptions;
  if (!Array.isArray(t)) return "viewportOptions 必须是数组";
  const n = t.findIndex((l) => !al(l));
  if (n >= 0) return `viewportOptions[${n}] 必须是 auto、正数宽度或 [宽,高]`;
  const a = t.filter(al).map(gw), r = a.findIndex((l, s) => a.indexOf(l) !== s);
  return r >= 0 ? `viewportOptions 不能重复声明 ${a[r]}` : "";
}, Ci = (e) => typeof e == "number" && Number.isFinite(e) && e >= 0, vw = (e) => {
  if (!("previewInset" in e)) return "";
  const t = e.previewInset;
  return Ci(t) || Array.isArray(t) && t.length === 2 && t.every(Ci) ? "" : "previewInset 必须是非负数或 [垂直,水平] 非负数数组";
}, yw = (e) => {
  for (const t of e) {
    const n = [];
    t.type === "html_block" && t.content && n.push(t.content), t.type === "inline" && t.content && n.push(t.content);
    for (const a of n) {
      nl.lastIndex = 0;
      let r = nl.exec(a);
      for (; r; ) {
        const l = r[1].match(hw);
        if (l) try {
          const s = MA.parse(l[1]);
          if (s && typeof s == "object" && !Array.isArray(s)) return s;
        } catch {
        }
        r = nl.exec(a);
      }
    }
  }
  return {};
}, Dw = (e) => `data-props="${At.utils.escapeHtml(JSON.stringify(e))}"`;
At.core.ruler.after("block", "runtime-files", (e) => {
  for (let t = 0; t < e.tokens.length; t++) {
    if (e.tokens[t].type !== Di) continue;
    let n = 1, a = t + 1;
    for (; a < e.tokens.length && (e.tokens[a].type === Di && n++, e.tokens[a].type === dw && n--, n !== 0); a++)
      ;
    const r = e.tokens.slice(t + 1, a), l = r.filter((c) => c.type === "fence"), s = new e.Token("html_block", "", 0);
    s.block = !0;
    const o = yw(r), i = mw(o) || pw(o) || vw(o), u = Dw(o);
    if (!l.length) s.content = En("至少需要声明一个代码文件");
    else if (i) s.content = En(i);
    else {
      const c = l.map((d) => {
        const [, g = ""] = d.info.trim().split(/\s+/, 2);
        return [g, d.content];
      });
      if (l.length === 1 && !c[0][0]) s.content = [
        "<div data-playground",
        `data-code="${At.utils.escapeHtml(l[0].content)}"`,
        `${u}></div>
`
      ].join(" ");
      else {
        const d = c.some(([p]) => !p), g = c.map(([p]) => p), h = g.find((p, A) => g.indexOf(p) !== A), f = (typeof o.entry == "string" ? o.entry : "") || g[0];
        if (d) s.content = En("多文件模式下每个代码块都必须声明文件名");
        else if (h) s.content = En(`文件名 ${h} 重复`);
        else if (!g.includes(f)) s.content = En(`入口文件 ${f} 不存在`);
        else {
          const p = Object.fromEntries(c);
          s.content = [
            "<div data-playground",
            `data-files="${At.utils.escapeHtml(JSON.stringify(p))}"`,
            `data-entry="${At.utils.escapeHtml(f)}"`,
            `${u}></div>
`
          ].join(" ");
        }
      }
    }
    e.tokens.splice(t, a - t + 1, s);
  }
});
var Cw = At.renderer.renderAttrs;
At.renderer.renderAttrs = (e) => {
  const t = new RegExp(`container_${ea}|fence|text`);
  return e.nesting !== -1 && e.type && !t.test(e.type) && e.attrPush([iw, ""]), Cw(e);
};
var bw = At, Qa = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), ww, Fw = () => ww ||= import("./index-Bzyye6Dv.js").then((e) => e.i), yd = (e) => {
  for (const t of Qa.get(e) || []) t.unmount();
  Qa.delete(e);
}, kw = (e) => [...e.classList].find((t) => t.startsWith("language-"))?.slice(9) || "", Dd = async (e, t) => {
  yd(e);
  const n = (Rn.get(e) || 0) + 1;
  Rn.set(e, n), e.innerHTML = t.value.source ? bw.render(t.value.source) : "";
  const a = [], r = e.querySelectorAll("pre code"), l = e.querySelectorAll("div[data-playground]");
  if (!r.length && !l.length) {
    Qa.set(e, a);
    return;
  }
  const s = await Fw();
  Rn.get(e) === n && (r.forEach((o) => {
    const i = o.parentElement;
    if (!i) return;
    const u = document.createElement("div");
    u.className = "docs-markdown-code-preview", i.replaceWith(u);
    const c = rl(() => ke(s.CodePreview, {
      code: o.textContent || "",
      language: kw(o),
      locale: t.value.locale
    }));
    c.mount(u), a.push(c);
  }), l.forEach((o) => {
    const i = o.dataset.code;
    let u, c = {};
    try {
      c = JSON.parse(o.dataset.props || "{}");
    } catch {
    }
    try {
      u = o.dataset.files ? JSON.parse(o.dataset.files) : void 0;
    } catch {
    }
    const d = u ? {
      files: u,
      entry: o.dataset.entry
    } : { modelValue: i }, g = rl(() => ke(s.Playground, {
      ...typeof c == "object" ? c : {},
      ...d,
      locale: t.value.locale
    }));
    g.mount(o), a.push(g);
  }), Qa.set(e, a));
}, Ew = (e, t) => {
  (t.value.source !== t.oldValue?.source || t.value.locale !== t.oldValue?.locale) && Dd(e, t);
}, Bw = {
  mounted: (e, t) => void Dd(e, t),
  updated: Ew,
  beforeUnmount: (e) => {
    Rn.set(e, (Rn.get(e) || 0) + 1), yd(e);
  }
}, xw = ["aria-label"], _w = { class: "docs-markdown-indicator__list" }, Sw = ["aria-label", "onClick"], Iw = { class: "docs-markdown-indicator__preview-title" }, Mw = {
  key: 0,
  class: "docs-markdown-indicator__preview-content"
}, bi = 180, Nw = /* @__PURE__ */ H({
  __name: "indicator",
  props: {
    options: {},
    target: {}
  },
  setup(e) {
    const t = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "li",
      "pre",
      "blockquote",
      "table",
      ".tip",
      ".warning",
      ".docs-markdown-code-preview",
      "[data-playground]"
    ].join(","), n = [
      "li",
      "blockquote",
      "table",
      ".tip",
      ".warning",
      ".docs-markdown-code-preview",
      "[data-playground]"
    ].join(","), a = e, { lang: r, t: l } = Bi(), s = Ae("vc-scroller", null), o = E(), i = E(), u = E(), c = E(), d = dt([]), g = E(0), h = E(), f = E(0), p = E(!1), A = E("0px");
    let v, b, C, D = !1, B, y = 0, x = 0, S = 0;
    const I = (L, K) => typeof L == "number" ? `${L}px` : L || K, P = _(() => ({
      "--docs-markdown-indicator-height": I(a.options.height, "min(72vh, 600px)"),
      "--docs-markdown-indicator-inset": A.value,
      "--docs-markdown-indicator-top": I(a.options.top, "0px")
    })), W = _(() => typeof h.value == "number" ? d.value[h.value] : void 0), O = _(() => ({ top: `${f.value}px` })), k = (L) => (L.textContent || "").split(/\n+/).map((K) => K.replace(/\s+/g, " ").trim()).filter(Boolean).join(`
`), w = (L) => k(L).replace(/^#\s*/, "").replace(/\s+/g, " ").trim() || l("markdown.indicator.untitled"), M = (L, K) => {
      const X = K ? `${L}: ${K.replace(/\s+/g, " ")}` : L;
      return X.length <= bi ? X : `${X.slice(0, bi).trim()}…`;
    }, F = (L) => {
      const K = L.closest(n);
      return !!(K && K !== L);
    }, N = () => uu(a.target) || window, T = () => D ? s?.wrapper?.getBoundingClientRect().top || 0 : C instanceof HTMLElement ? C.getBoundingClientRect().top : 0, V = () => {
      let L, K, X;
      return D ? (L = s?.clientHeight || 0, K = s?.scrollHeight || 0, X = s?.scrollTop || 0) : C instanceof HTMLElement ? (L = C.clientHeight, K = C.scrollHeight, X = C.scrollTop) : (L = window.innerHeight, K = document.documentElement.scrollHeight, X = window.scrollY), K > L && X + L >= K - 1;
    }, G = async (L) => {
      await fe();
      const K = u.value?.querySelectorAll(".docs-markdown-indicator__marker")[L], X = i.value?.querySelector(".vc-scroller__wrapper");
      if (!K || !X) return;
      const ae = K.getBoundingClientRect(), Se = X.getBoundingClientRect(), Ve = 16;
      if (ae.top >= Se.top + Ve && ae.bottom <= Se.bottom - Ve) return;
      const ze = ae.top + ae.height / 2, Pt = Se.top + Se.height / 2;
      c.value?.setScrollTop(Math.max(0, X.scrollTop + ze - Pt));
    }, q = () => {
      if (x = 0, !d.value.length) return;
      const L = T() + 80;
      let K = d.value.length - 1;
      if (!V()) {
        K = 0;
        for (let X = 0; X < d.value.length && !(d.value[X].element.getBoundingClientRect().top > L); X++)
          K = X;
      }
      g.value !== K && (g.value = K, G(K));
    }, re = () => {
      x || (x = requestAnimationFrame(q));
    }, Y = () => {
      y = 0;
      const L = a.target;
      if (!L) {
        d.value = [];
        return;
      }
      const K = [...L.querySelectorAll(t)].filter((ae) => !F(ae));
      let X = l("markdown.indicator.document");
      d.value = K.map((ae, Se) => {
        const Ve = /^H[1-6]$/.test(ae.tagName);
        Ve && (X = w(ae));
        const ze = K[Se + 1], Pt = Ve && ze && !/^H[1-6]$/.test(ze.tagName) ? k(ze) : Ve ? "" : k(ae);
        return {
          ariaLabel: M(X, Pt),
          content: Pt,
          element: ae,
          id: `${Se}-${ae.id || ae.tagName}`,
          title: X
        };
      }), h.value = void 0, q(), G(g.value);
    }, Z = () => {
      y || (y = requestAnimationFrame(Y));
    }, ge = () => D ? s?.wrapper?.clientHeight || s?.clientHeight || window.innerHeight : C instanceof HTMLElement ? C.clientHeight : window.innerHeight, Be = () => {
      const L = a.options.height;
      if (typeof L == "number" && Number.isFinite(L) && L > 0) return L;
      const K = i.value?.getBoundingClientRect().height || 0;
      return K > 0 ? K : Math.min(window.innerHeight * 0.72, 600);
    }, ne = () => {
      const L = ge(), K = Be();
      A.value = L > 0 ? `${Math.max(0, (L - K) / 2)}px` : "0px";
    }, Je = () => {
      if (b?.disconnect(), b = void 0, typeof ResizeObserver < "u") {
        b = new ResizeObserver(ne);
        const L = D ? s?.wrapper : C instanceof HTMLElement ? C : void 0;
        L && b.observe(L), i.value && b.observe(i.value);
      }
      ne();
    }, rn = () => {
      v?.disconnect(), v = void 0, b?.disconnect(), b = void 0, window.removeEventListener("resize", ne), D ? s?.off?.(re) : C && C.removeEventListener("scroll", re), D = !1, C = void 0;
    }, ir = async () => {
      const L = ++S;
      if (rn(), await fe(), L === S) {
        if (!a.target) {
          d.value = [];
          return;
        }
        D = !!s?.on, D ? (s?.on?.(re), C = s?.wrapper || window) : (C = N(), C.addEventListener("scroll", re, { passive: !0 })), window.addEventListener("resize", ne, { passive: !0 }), v = new MutationObserver(Z), v.observe(a.target, {
          childList: !0,
          characterData: !0,
          subtree: !0
        }), Y(), Je();
      }
    }, ys = (L) => {
      if (!u.value || !d.value.length) return 0;
      const K = [...u.value.querySelectorAll(".docs-markdown-indicator__marker")];
      let X = 0, ae = Number.POSITIVE_INFINITY;
      return K.forEach((Se, Ve) => {
        const ze = Se.getBoundingClientRect(), Pt = Math.abs(L.clientY - (ze.top + ze.height / 2));
        Pt < ae && (X = Ve, ae = Pt);
      }), X;
    }, ur = (L, K) => {
      const X = o.value?.getBoundingClientRect(), ae = i.value?.getBoundingClientRect(), Se = u.value?.querySelectorAll(".docs-markdown-indicator__marker")[L];
      if (!X || !ae || !Se) return;
      const Ve = Se.getBoundingClientRect(), ze = (K ?? Ve.top + Ve.height / 2) - X.top;
      f.value = Math.min(ae.height - 48, Math.max(48, ze));
    }, cr = (L, K) => {
      const X = d.value[L];
      if (!X || !C) return;
      const ae = X.element.getBoundingClientRect().top;
      if (D && s?.setScrollTop) s.setScrollTop((s.scrollTop || 0) + ae - T() - 24);
      else if (C instanceof HTMLElement) {
        const Se = C.getBoundingClientRect().top;
        C.scrollTo({
          top: C.scrollTop + ae - Se - 24,
          behavior: K
        });
      } else window.scrollTo({
        top: window.scrollY + ae - 24,
        behavior: K
      });
      g.value = L, G(L);
    }, Cd = (L) => {
      const K = ys(L);
      h.value = K, ur(K, L.clientY), p.value && cr(K, "auto");
    }, bd = (L) => {
      if (L.button !== 0) return;
      p.value = a.options.draggable !== !1;
      const K = ys(L);
      h.value = K, ur(K, L.clientY), p.value && (B = L.currentTarget, B.setPointerCapture?.(L.pointerId), cr(K, "auto"), L.preventDefault());
    }, Ds = (L) => {
      p.value = !1, B?.hasPointerCapture?.(L.pointerId) && B.releasePointerCapture(L.pointerId), B = void 0;
    }, wd = () => {
      p.value || (h.value = void 0);
    }, Fd = (L) => {
      h.value = L, ur(L), cr(L, "smooth");
    }, kd = (L) => {
      const K = typeof h.value == "number" ? Math.abs(L - h.value) : Number.POSITIVE_INFINITY;
      return { width: `${K <= 3 ? [
        28,
        22,
        16,
        10
      ][K] : 8}px` };
    };
    return $([() => a.target, r], ir, { immediate: !0 }), $([() => a.options.height, i], () => {
      i.value && b && b.observe(i.value), ne();
    }), _e(() => {
      S++, rn(), y && cancelAnimationFrame(y), x && cancelAnimationFrame(x);
    }), (L, K) => d.value.length > 1 ? (Ut(), sn("aside", {
      key: 0,
      ref_key: "indicatorRoot",
      ref: o,
      class: Cs(["docs-markdown-indicator", `is-${e.options.position || "right"}`]),
      style: dr(P.value),
      "aria-label": Pn(l)("markdown.indicator.label")
    }, [Bn("div", {
      ref_key: "viewport",
      ref: i,
      class: "docs-markdown-indicator__viewport",
      onPointermove: Cd,
      onPointerleave: wd,
      onPointerdown: bd,
      onPointerup: Ds,
      onPointercancel: Ds
    }, [m(Pn(ca), {
      ref_key: "indicatorScroller",
      ref: c,
      class: "docs-markdown-indicator__scroller",
      "auto-resize": !0,
      native: !1,
      "show-bar": !0,
      height: "100%",
      "wrapper-style": "overflow-x: hidden;"
    }, {
      default: Nd(() => [Bn("div", {
        ref_key: "rail",
        ref: u,
        class: "docs-markdown-indicator__rail"
      }, [Bn("div", _w, [(Ut(!0), sn(vt, null, Td(d.value, (X, ae) => (Ut(), sn("button", {
        key: X.id,
        type: "button",
        class: Cs(["docs-markdown-indicator__marker", {
          "is-active": ae === g.value,
          "is-hovered": ae === h.value
        }]),
        style: dr(kd(ae)),
        "aria-label": X.ariaLabel,
        onClick: (Se) => Fd(ae)
      }, null, 14, Sw))), 128))])], 512)]),
      _: 1
    }, 512)], 544), e.options.preview !== !1 && W.value ? (Ut(), sn("div", {
      key: 0,
      class: "docs-markdown-indicator__preview",
      style: dr(O.value)
    }, [Bn("div", Iw, bs(W.value.title), 1), W.value.content ? (Ut(), sn("div", Mw, bs(W.value.content), 1)) : Ea("v-if", !0)], 4)) : Ea("v-if", !0)], 14, xw)) : Ea("v-if", !0);
  }
}), Tw = { class: "docs-markdown" }, Ow = /* @__PURE__ */ H({
  __name: "wrapper",
  props: {
    indicator: {
      type: [Boolean, Object],
      default: !0
    },
    locale: {},
    modelValue: {},
    value: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e) {
    const t = e, n = E(), a = Bi(), r = _(() => t.locale || a.locale.value);
    Vd(r);
    const l = _(() => {
      if (t.indicator !== !1)
        return typeof t.indicator == "object" ? t.indicator : {};
    }), s = _(() => typeof t.modelValue == "string" ? t.modelValue : t.value), o = _(() => ({
      source: s.value,
      locale: r.value
    }));
    return (i, u) => (Ut(), sn("div", Tw, [l.value ? (Ut(), Md(Nw, {
      key: 0,
      target: n.value,
      options: l.value
    }, null, 8, ["target", "options"])) : Ea("v-if", !0), ce(Bn("div", {
      ref_key: "content",
      ref: n,
      class: "docs-markdown-reset"
    }, null, 512), [[Pn(Bw), o.value]])]));
  }
});
const Kw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Markdown: Ow,
  zhCN: Pd
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ww as C,
  Vw as D,
  El as M,
  Oe as P,
  ca as S,
  la as T,
  Qw as a,
  Lw as b,
  $w as c,
  Kw as m,
  Vd as p,
  Bi as u
};
