<script setup lang="ts">
import HouseForm from '@/components/HouseForm.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BackButton from '../components/BackButton.vue'
import type { house } from '@/types/house'
import { onSubmitHouseForm } from '@/helpers/onSubmitHouseForm'

const route = useRoute()
const router = useRouter()

const createButton = 'edit'
const houseId = ref('')

onMounted(async () => {
  houseId.value = route.query.id as string
})

const onSubmit = (house: house) => {
  const endPoint = `/api/editHouse?id=${houseId.value}`
  const id = houseId.value
  onSubmitHouseForm(house, endPoint, id, router)
}
</script>

<template>
  <div class="container form-page">
    <BackButton />
    <h1>Edit House</h1>
    <HouseForm @on-submit="onSubmit" :buttonText="createButton" />
  </div>
</template>
