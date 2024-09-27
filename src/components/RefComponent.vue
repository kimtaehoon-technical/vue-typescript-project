<script setup lang="ts">
import { ref, type Ref } from "vue"; // import

const count: ref<number> = ref(0);// リアクティブデータの定義
</script>

<template>
  <h1>RefComponent</h1>
  {{ count }}
  <button @click="count++">クリック</button>
</template>