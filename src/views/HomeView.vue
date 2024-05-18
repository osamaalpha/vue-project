<script setup lang="ts">
import axios from 'axios'
import TheWelcome from '../components/TheWelcome.vue'

axios.get('/api/houses').then((res) => console.log(res))
// axios.get('/api/getHouse?id=2').then((res) => console.log(res))

// axios
//   .post('/api/createHouse', {
//     price: 20,
//     bedrooms: 1,
//     bathrooms: 1,
//     size: 1,
//     streetName: 'Overtoom',
//     houseNumber: 21,
//     numberAddition: 'A',
//     zip: '1181TY',
//     city: 'Amsterdam',
//     constructionYear: '1901',
//     hasGarage: false,
//     description: 'Nice house!'
//   })
//   .then((res) => console.log(res))
</script>

<template>
  <h1>Home page</h1>

  <TheWelcome />
</template>
