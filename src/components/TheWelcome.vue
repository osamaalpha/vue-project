<script setup lang="ts">
import axios from 'axios'

const data = await axios.get('/api/houses')
const dataArray = data.data

console.log(data)
</script>

<template>
  <h1>home page</h1>
  <div v-if="data">
    <h1 v-for="(item, index) in dataArray" :key="index">
      {{ item.id }}
    </h1>
  </div>
</template>

<style>
h1 {
  color: white;
}
</style>
