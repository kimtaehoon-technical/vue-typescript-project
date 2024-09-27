<script setup lang="ts">
// propsする値の型の定義
type Props = {
  id: number;
  name: string;
};

// defineProps()でジェネリクスで型を指定し返却される値を定数に格納
const props = defineProps<Props>();
</script>

<template>
  id: {{ props.id }}<br />
  name: {{ props.name }}
</template>