<script setup lang="ts">
import PropTypeCoComponent from "@/components/PropTypeCoComponent.vue";

const items = [
  { id: 1, name: "商品1" },
  { id: 2, name: "商品2" },
  { id: 3, name: "商品3" },
]
</script>

<template>
  <main>
    <PropTypeCoComponent :items="items" />
  </main>
</template>