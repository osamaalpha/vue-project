<script setup lang="ts">
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCityStore } from '@/stores/city'
import { storeToRefs } from 'pinia'
import HouseCard from '../components/HouseCard.vue'
import HousePdp from '../components/HousePdp.vue'
import type { House } from '@/types/house'

const route = useRoute()
const house = ref<House>()
const streetNameFirstCapital = ref('')
const recommendedHouses = ref([])
const router = useRouter()

onBeforeMount(async () => {
  axios.get(`/api/getHouse?id=${route.params.id}`).then((res) => {
    if (res.status === 200) {
      const houseResponse = res.data[0]
      house.value = houseResponse
      const streetName = houseResponse?.location?.street
      streetNameFirstCapital.value = streetName?.charAt(0).toUpperCase() + streetName?.slice(1)
    } else {
      console.error(res)
      router.push(`/error`)
    }
  })
  const res = await axios.get('/api/houses')
  if (res.status === 200) {
    const { cities } = storeToRefs(useCityStore())
    recommendedHouses.value = res.data.filter(
      (item: House) => cities.value.includes(item.location.city) && item.id !== house.value?.id
    )
  } else {
    console.error(res)
    router.push(`/error`)
  }
})
</script>

<template>
  <div class="container">
    <div class="house-page">
      <HousePdp :house="house" :streetNameFirstCapital="streetNameFirstCapital" />
      <div class="recommended-houses" v-if="recommendedHouses.length > 0">
        <h1>Recommended</h1>
        <div v-for="(house, index) in recommendedHouses" :key="index">
          <HouseCard :house="house" :isRecommendedHouse="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.house-img {
  width: 600px;
}

.recommended-houses {
  margin: 35px 0 0 100px;
}

.house-card-pdp {
  padding: 0 50px;
  width: 500px;
  background-color: white;
}

.house-page {
  display: flex;
}

.house-pdp {
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .row-pdp {
    flex-direction: row;

    img {
      width: 20px;
      height: 20px;
      padding-top: 12px;
    }
  }

  .space-between {
    justify-content: space-between;
  }

  .small-gap {
    gap: 12px;
    justify-content: none;
  }

  .house-details {
    margin-top: 40px;
  }

  .adjust-house {
    padding-right: 30px;

    img {
      width: 20px;
    }
  }

  .back-button {
    margin-bottom: 40px;
    cursor: pointer;

    p {
      display: inline;
      padding-left: 10px;
    }

    img {
      width: 15px;
    }

    .back-mobile-icon {
      display: none;
    }
  }
}

@media only screen and (max-width: 835px) {
  .container {
    margin: 0;
    padding: 0;
    width: 100%;

    .house-page {
      flex-direction: column;
    }

    .house-card-pdp {
      position: relative;
      top: -40px;
      border: 1px solid transparent;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      width: 95%;
      padding: 10px;
    }

    .recommended-houses {
      margin: 20px;
    }

    .back-button {
      position: absolute;
      top: 20px;
      left: 20px;

      p {
        display: none;
      }

      .back-desktop-icon {
        display: none;
      }

      .back-mobile-icon {
        display: block;
      }
    }
  }

  .house-img {
    width: 100%;
  }
}
</style>
