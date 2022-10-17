<script setup lang="ts">
import { onMounted, ref } from "vue";

const random = () => (Math.random() + 1).toString(36).substring(7);
const value = ref(random());
onMounted(() => {
  setInterval(() => {
    value.value = random();
  }, 1000);
});
</script>
<template>
  <v-barcode :value="value" />
  <v-barcode value="Apple" />
  <v-barcode value="Orange" />
  <v-barcode value="Banana" />
</template>
