import { createApp } from "vue";
import App from "./Demo.vue";
import plugin from ".";

const app = createApp(App);
app.use(plugin);
app.mount("#app");
