import { computed, defineComponent, h, PropType, ref, watchEffect } from "vue";
import JsBarcode from "jsbarcode";
import { BarcodeFormat } from "./format";
export default defineComponent({
  name: "VBarcode",
  props: {
    value: { type: String, required: true },
    type: { type: String as PropType<"svg" | "div" | "img">, default: "svg" },
    width: { type: Number, default: 2 },
    height: { type: Number, default: 100 },
    format: { type: String as PropType<BarcodeFormat>, default: "CODE128" },
    displayValue: { type: Boolean, default: true },
    fontOptions: { type: String, default: "" },
    font: { type: String, default: "monospace" },
    text: { type: String, default: undefined },
    textAlign: { type: String, default: "center" },
    textPosition: { type: String, default: "bottom" },
    textMargin: { type: Number, default: 2 },
    fontSize: { type: Number, default: 20 },
    background: { type: String, default: "#ffffff" },
    lineColor: { type: String, default: "#000000" },
    margin: { type: Number, default: 10 },
    marginTop: { type: Number, default: undefined },
    marginBottom: { type: Number, default: undefined },
    marginLeft: { type: Number, default: undefined },
    marginRight: { type: Number, default: undefined },
    valid: { type: Function as PropType<() => Boolean>, default: () => {} },
  },
  setup(props) {
    const barcode = ref(null);
    const options = computed((): JsBarcode.Options => {
      return {
        width: props.width,
        height: props.height,
        format: props.format,
        displayValue: props.displayValue,
        fontOptions: props.fontOptions,
        font: props.font,
        text: props.text,
        textAlign: props.textAlign,
        textPosition: props.textPosition,
        textMargin: props.textMargin,
        fontSize: props.fontSize,
        background: props.background,
        lineColor: props.lineColor,
        margin: props.margin,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        valid: props.valid,
      };
    });
    const draw = () => {
      JsBarcode(barcode.value, props.value, options.value);
    };
    watchEffect(() => {
      if (barcode.value) {
        JsBarcode(barcode.value, props.value, options.value);
      }
    });
    return { barcode, draw };
  },

  mounted() {
    this.draw();
  },
  render() {
    return h(this.type, { ref: "barcode" });
  },
});
