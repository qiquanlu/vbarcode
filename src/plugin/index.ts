import { App } from "vue";
import VBarcode from "./VBarcode";

export default {
  install(app: App) {
    app.component("VBarcode", VBarcode);
  },
};
