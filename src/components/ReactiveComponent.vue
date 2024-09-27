<script setup lang="ts">
import { reactive } from "vue";
import { ref, type Ref } from "vue"; // import

type User = {
  id: number;
  name: string;
};
const user1: User = ref({
  id: 1,
  name: "鈴木",
});
const user2: User = ref({
  id: 1,
  name: "鈴木",
});
user1.name = "佐藤";
user2.name = "田中";
</script>

<template>
  {{ user2.name }}
</template>