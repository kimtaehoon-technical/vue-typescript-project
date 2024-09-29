<script setup lang="ts">
import ProductItem from './components/ProductItem.vue';

const products = [
  { id: 1, name: '商品 1', description: 'これは商品 1の説明です。', price: 1000, image: '1.jpg' },
  { id: 2, name: '商品 2', description: 'これは商品 2の説明です。', price: 2000, image: '2.jpg' },
  { id: 3, name: '商品 3', description: 'これは商品 3の説明です。', price: 3000, image: '3.jpg' }
];
</script>

<template>
  <div class="container">
    <h1>商品販売ページ</h1>
    <div class="product-list">
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :id="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.product-item {
  text-align: center;
  width: 200px;
  padding: 1rem;
  border: 1px solid #ddd;
}

.product-image {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
</style>
