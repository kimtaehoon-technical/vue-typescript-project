<script setup lang="ts">
// import RefComponent from '../components/RefComponent.vue'
// import ReactiveComponent from '../components/ReactiveComponent.vue'
// import eventComponent from '../components/eventComponent.vue'
// import DefinePropsCoComponent from '../components/DefinePropsCoComponent.vue'
// import DefinePropsComponent from '../components/DefinePropsComponent.vue'
import PropTypeCoComponent  from '../components/PropTypeCoComponent.vue'


const items = [
  { id: 1, name: "商品1" },
  { id: 2, name: "商品1" },
  { id: 3, name: "商品3" },
];

</script>

<template>
  <main>
    <PropTypeCoComponent :items="items" />
  </main>
</template>
