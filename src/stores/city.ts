import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useCityStore = defineStore('cities', () => {
  const cities: Ref<string[]> = ref([])
  const addCity = (city: string) => {
    cities.value.push(city)
  }

  return { cities, addCity }
})
