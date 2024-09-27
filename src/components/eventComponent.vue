<script setup lang="ts">
const handleChange = (e: Event) => { // 引数の型注釈
  console.log("1")
  console.log((e.target as HTMLInputElement).value); // 型アサーション
};
</script>

<template>
  <input type="text" @change="handleChange" />
</template>