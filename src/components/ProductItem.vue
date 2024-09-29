<template>
  <div class="product-item">
    <img :src="imageSrc" alt="商品イメージ" class="product-image" />
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p>価格: {{ price }}円</p>
    <button @click="viewDetails">詳細を見る</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps<{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}>();

const router = useRouter();

const viewDetails = () => {
  router.push({ name: 'ProductDetail', params: { id: props.id } }); // id 전달
};

const imageSrc = new URL(`../assets/${props.image}`, import.meta.url).href;
</script>

<style scoped>
.product-item {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
}

.product-image {
  width: 100%;
  height: auto;
  max-width: 200px;
  margin-bottom: 1rem;
}
</style>
