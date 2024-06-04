<script setup lang="ts">
import HouseForm from '@/components/HouseForm.vue'
import BackButton from '../components/BackButton.vue'
import { onSubmitHouseForm } from '@/helpers/onSubmitHouseForm'
import { useRouter } from 'vue-router'

const createButton = 'create'
const router = useRouter()

const onSubmit = (house: house) => {
  const endPoint = '/api/createHouse'
  const id = 0
  onSubmitHouseForm(house, endPoint, id, router)
}
</script>

<template>
  <div class="container form-page">
    <BackButton />
    <h1>Create House</h1>
    <HouseForm @on-submit="onSubmit" :buttonText="createButton" />
  </div>
</template>
