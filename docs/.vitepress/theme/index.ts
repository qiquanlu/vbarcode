// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import { VBarcode } from "../../../src";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component("VBarcode", VBarcode);
  },
};
