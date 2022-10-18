import { defineConfig } from "vitepress";
import { version } from "../../package.json";

export default defineConfig({
  lang: "en-US",
  title: "VBarcode" + " v" + version,
  description: "Vue 3 wrapper for JsBarcode.",

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/qiquanlu/vbarcode" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Qiquan Lu",
    },
  },
});
