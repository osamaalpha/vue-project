<template>
  <div class="search-bar">
    <button @click="onSearch">
      <img src="../assets/searchIcon.png" />
    </button>
    <input type="text" v-model="searchQuery" @input="onSearch" placeholder="Search for a house" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const searchQuery = ref('')
const emit = defineEmits(['on-search'])

const onSearch = () => {
  emit('on-search', searchQuery.value)
}
</script>

<style scoped>
.search-bar {
  background-color: #e8e8e8;
  width: 400px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  height: 30px;
}

.search-bar input {
  border: none;
  outline: none;
  flex: 1;
  padding: 5px;
  background-color: #e8e8e8;
}

.search-bar button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.search-bar button img {
  width: 16px;
}

@media only screen and (max-width: 1027px) {
  .search-bar {
    width: 100%;
    margin: 0;
    padding: 5px 0;
  }

  button {
    width: 10%;
  }
}
</style>
