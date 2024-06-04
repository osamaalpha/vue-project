<script setup lang="ts">
import axios from 'axios'
import Houses from '../components/Houses.vue'
import { ref, onBeforeMount } from 'vue'

const houses = ref([])

onBeforeMount(async () => {
  const res = await axios.get('/api/houses')
  if (res.status !== 200) {
    console.error(res)
    router.push(`/error`)
  }
  houses.value = res.data
})
</script>

<template>
  <Houses :houses="houses" />
</template>
