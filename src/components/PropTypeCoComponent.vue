<script setup lang="ts">
import type { PropType } from "vue";

type Props = {
  id: number;
  name: string;
}[];

const props = defineProps({
  items: Array as PropType<Props>,
});
</script>

<template>
  <ul>
    <li v-for="item in props.items" :key="item.id">
      id: {{ item.id }}<br />
      name: {{ item.name }}
    </li>
  </ul>
</template>
