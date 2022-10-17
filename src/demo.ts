import { createApp } from "vue";
import App from "./Demo.vue";
import VBarcode from "./VBarcode";

const app = createApp(App);
app.component("VBarcode", VBarcode);
app.mount("#app");
