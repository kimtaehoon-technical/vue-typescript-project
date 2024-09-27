<script setup lang="ts">
import { computed, ref } from "vue";

const amount = ref<number>(0);
const subTotal = computed<number>(() =>{

const total = amount.value * 1000;
  
console.log(total);
}
);
</script>

<template>
  単価: 1000円<br />
  個数: <input type="number" v-model="amount" /><br />
  小計: {{ subTotal }}
</template>