<template>
  <div>
    <template v-if="product">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" alt="Product Image" />
      <p>{{ product.description }}</p>
      <p>価格: {{ product.price }}円</p>
    </template>
    <template v-else>
      <p></p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const product = ref<{ name: string; description: string; price: number; image: string } | null>(null);
const route = useRoute();

const products = [
  { id: 1, name: '商品 1', description: 'これは商品 1の説明です。', price: 1000, image: '1.jpg' },
  { id: 2, name: '商品 2', description: 'これは商品 2の説明です。', price: 2000, image: '2.jpg' },
  { id: 3, name: '商品 3', description: 'これは商品 3の説明です。', price: 3000, image: '3.jpg' },
];

const fetchProductDetails = (id: number) => {
  product.value = products.find(p => p.id === id) || null;
};

onMounted(() => {
  const id = parseInt(route.params.id as string);
  fetchProductDetails(id);
});
</script>
