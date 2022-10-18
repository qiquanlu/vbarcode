# VBarcode

A vue3 wrapper for JsBarcode.

## Install
```bash
pnpm i vbarcode
```
## Examples

### CODE128 with default options
```vue
<script setup lang="ts">
import { VBarcode } from "vbarcode";
</script>
<template>
  <v-barcode value="Apple" />
</template>

```
- Output
<v-barcode value="Apple" />



### CODE128 with different text
```vue
<script setup lang="ts">
import { VBarcode } from "vbarcode";
</script>
<template>
  <v-barcode value="Apple" />
</template>

```
- Output
<v-barcode value="Apple" text="Barcode value is Apple" />


## Props
----
For props, try to match [the wiki page from JsBarcode](https://github.com/lindell/JsBarcode/wiki/Options), if there is anything not matching please let me know.

| Prop | Default value | Type |
|--------|---------------|------|
| [`value`](#) | `undefined` | `String` (*required) |
| [`format`](https://github.com/lindell/JsBarcode/wiki/Options#format) | `"auto" (CODE128)` | `String` |
| [`width`](https://github.com/lindell/JsBarcode/wiki/Options#width) | `2` | `Number` |
| [`height`](https://github.com/lindell/JsBarcode/wiki/Options#height) | `100` | `Number` |
| [`displayValue`](https://github.com/lindell/JsBarcode/wiki/Options#display-value) | `true` | `Boolean` |
| [`text`](https://github.com/lindell/JsBarcode/wiki/Options#text) | `undefined` | `String` |
| [`fontOptions`](https://github.com/lindell/JsBarcode/wiki/Options#font-options) | `""` | `String` |
| [`font`](https://github.com/lindell/JsBarcode/wiki/Options#font) | `"monospace"` | `String` |
| [`textAlign`](https://github.com/lindell/JsBarcode/wiki/Options#text-align) | `"center"` | `String` |
| [`textPosition`](https://github.com/lindell/JsBarcode/wiki/Options#text-position) | `"bottom"` | `String` |
| [`textMargin`](https://github.com/lindell/JsBarcode/wiki/Options#text-margin) | `2` | `Number` |
| [`fontSize`](https://github.com/lindell/JsBarcode/wiki/Options#font-size) | `20` | `Number` |
| [`background`](https://github.com/lindell/JsBarcode/wiki/Options#background)  | `"#ffffff"` | `String (CSS color)` |
| [`lineColor`](https://github.com/lindell/JsBarcode/wiki/Options#line-color) | `"#000000"` | `String (CSS color)` |
| [`margin`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `10` | `Number` |
| [`marginTop`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginBottom`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginLeft`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginRight`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`valid`](https://github.com/lindell/JsBarcode/wiki/Options#valid) | `function(valid){}` | `Function` |
