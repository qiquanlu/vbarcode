import { App } from "vue";
import VBarcode from "./VBarcode";

// export default {
//   install(app: App) {
//     app.component("VBarcode", VBarcode);
//   },
//   VBarcode,
// };
export { default as VBarcode, vBarcodeProps } from "./VBarcode";

export type { VBarcodeProps, BarcodeFormat } from "./VBarcode";
// declare module 'vbarcode' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
