<template>
  <div>
    <template v-if="product">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" alt="Product Image" />
      <p>{{ product.description }}</p>
      <p>価格: {{ product.price }}円</p>
    </template>
    <template v-else>
      <p>상품 정보를 불러오는 중입니다...</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// 상품 정보를 정의
const product = ref<{ name: string; description: string; price: number; image: string } | null>(null);
const route = useRoute();

// 예시 데이터 (실제 데이터는 API 호출을 통해 가져올 수 있습니다.)
const products = [
  { id: 1, name: '商品 1', description: 'これは商品 1の説明です。', price: 1000, image: '1.jpg' },
  { id: 2, name: '商品 2', description: 'これは商品 2の説明です。', price: 2000, image: '2.jpg' },
  { id: 3, name: '商品 3', description: 'これは商品 3の説明です。', price: 3000, image: '3.jpg' },
];

const fetchProductDetails = (id: number) => {
  product.value = products.find(p => p.id === id) || null;
};

onMounted(() => {
  const id = parseInt(route.params.id as string); // 라우트에서 id 가져오기
  fetchProductDetails(id); // 상품 세부 정보 가져오기
});
</script>
