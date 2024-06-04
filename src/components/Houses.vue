<script setup lang="ts">
import { searchResults } from '@/helpers/searchResults'
import HouseCard from './HouseCard.vue'
import SearchBar from './searchBar.vue'
import { ref, watchEffect, type PropType } from 'vue'
import { useRouter } from 'vue-router'
import { sortOnProperty } from '@/helpers/sortOnProperty'
import type { House } from '@/types/house'

const props = defineProps({
  houses: Object as PropType<House[]>
})

const router = useRouter()
const housesRef = ref<House[]>([])
const isSortSizeClicked = ref(false)
const isSortPriceClicked = ref(false)

watchEffect(() => (housesRef.value = props.houses as House[]))

const onSearch = (searchQuery: string) => {
  watchEffect(() => (housesRef.value = searchResults(searchQuery, props.houses as House[])))
}

const sortHouses = (property: string) => {
  const sortDirection = property === 'size' ? false : true

  housesRef.value = sortOnProperty(props.houses as House[], property, sortDirection) as House[]
}

const sizeSort = (property: string) => {
  sortHouses(property)
  isSortSizeClicked.value = true
  isSortPriceClicked.value = false
}

const priceSort = (property: string) => {
  sortHouses(property)
  isSortSizeClicked.value = false
  isSortPriceClicked.value = true
}

const handleNavigateToCreatePage = () => {
  router.push('/createHouse')
}
</script>

<template>
  <div class="container">
    <div class="row header-mobile">
      <h1>Houses</h1>
      <button class="create-house-button" @click="handleNavigateToCreatePage">
        <img src="../assets/plusIcon.png" />CREATE HOUSE
      </button>
      <div class="create-house-button-mobile">
        <img @click="handleNavigateToCreatePage" src="../assets/plusIconGrey.png" />
      </div>
    </div>
    <div class="row">
      <SearchBar @on-search="onSearch" />
      <div class="sort">
        <button
          :class="{ 'sort-clicked': isSortSizeClicked }"
          @click="
            (e) => {
              sizeSort('price')
            }
          "
        >
          price
        </button>
        <button
          :class="{ 'sort-clicked': isSortPriceClicked }"
          @click="
            (e) => {
              priceSort('size')
            }
          "
        >
          size
        </button>
      </div>
    </div>
    <div class="results-number" v-if="housesRef?.length > 0">
      <h4>Results : {{ housesRef?.length }}</h4>
    </div>
    <div v-if="housesRef?.length > 0">
      <div v-for="(house, index) in housesRef" :key="index">
        <HouseCard :house="house" />
      </div>
    </div>
    <div class="empty-houses-img" v-else>
      <img src="../assets/emptyHouses.png" />
    </div>
  </div>
</template>

<style lang="scss">
.row {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  button {
    background-color: var(--color-almost-red);
    color: var(--color-white);
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 10px;
    font-size: 12px;
    height: 50px;
    cursor: pointer;
  }

  .sort {
    button {
      padding: 5px 40px;

      &:first-child {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      &:last-child {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }

    .sort-clicked {
      background-color: var(--color-grey);
    }
  }

  .create-house-button-mobile {
    display: none;
  }

  img {
    width: 15px;
    padding-right: 8px;
  }
}
.empty-houses-img {
  margin-top: 100px;
  text-align: center;
  img {
    width: 700px;
  }
}

.results-number {
  margin-bottom: 20px;
}

@media only screen and (max-width: 1027px) {
  .create-house-button {
    display: none;
  }

  .empty-houses-img {
    img {
      width: 300px;
    }
  }

  .row {
    flex-direction: column;
    gap: 40px;
    text-align: center;

    .sort {
      button {
        width: 50%;
      }
    }

    .create-house-button-mobile {
      display: block;
    }
  }

  .header-mobile {
    flex-direction: row;
    align-items: center;
    gap: 2%;

    h1 {
      width: 100%;
    }

    img {
      height: 20px;
      align-items: center;
      padding: 0;
    }
  }
}
</style>
