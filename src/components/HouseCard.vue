<script setup lang="ts">
import axios from 'axios'
import { useRouter } from 'vue-router'
import ModalComponent from '../components/ModalComponent.vue'
import { ref } from 'vue'
import { useCityStore } from '@/stores/city'

const { house, isRecommendedHouse } = defineProps(['house', 'isRecommendedHouse'])
const router = useRouter()
const isModalOpened = ref(false)
const cityStore = useCityStore()

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const deleteHouseHandler = () => {
  axios.delete(`/api/deleteHouse?id=${house.id}`).then((res) => {
    if (res.status === 200) {
      closeModal()
    } else {
      console.error(res)
      router.push(`/error`)
    }
  })
}

const editHouse = () => {
  router.push(`/editHouse?id=${house.id}`)
}

const showHousePdpButtonClick = () => {
  cityStore.addCity(house.location.city)
  router.push(`/house/${house.id}`)
}
</script>

<template>
  <div class="house-card-container">
    <div class="house-card" :class="{ 'recommended-house': isRecommendedHouse }">
      <div @click="showHousePdpButtonClick">
        <img class="house-img" :src="house.image" />
      </div>
      <div>
        <div class="house-details">
          <h2>{{ house.location.street }} {{ house.location.houseNumber }}</h2>
          <p>{{ house.price }}</p>
          <p>{{ house.location.zip }} {{ house.location.city }}</p>
          <div class="icons">
            <div>
              <img src="../assets/bedIcon.png" />

              <p>{{ house.rooms.bedrooms }}</p>
            </div>
            <div>
              <img src="../assets/bathIcon.png" />

              <p>{{ house.rooms.bathrooms }}</p>
            </div>
            <div>
              <img src="../assets/sizeIcon.png" />

              <p>{{ house.size }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="house.madeByMe"
      class="adjust-house"
      :class="{ 'disable-adjust-house': isRecommendedHouse }"
    >
      <button @click="editHouse">
        <img src="../assets/editIcon.png" />
      </button>
      <button @click="openModal">
        <img src="../assets/deleteIcon.png" />
      </button>
    </div>
    <ModalComponent
      :isOpen="isModalOpened"
      @modal-close="closeModal"
      @submit="deleteHouseHandler"
      @cancel="closeModal"
      name="first-modal"
    />
  </div>
</template>

<style lang="scss">
.house-card-container {
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

  .house-img {
    width: 200px;
    cursor: pointer;
  }

  .recommended-house {
    .house-img {
      width: 150px;
    }
  }

  .house-details {
    flex-direction: column;

    h2,
    p {
      margin: 5px;
    }

    img {
      width: 20px;
      height: 20px;
    }

    .icons {
      margin: 5px;
      p {
        padding: 0 10px;
        margin: 0;
      }
    }
  }

  .house-card {
    gap: 40px;
    margin: 20px;
    display: flex;

    div {
      display: flex;
    }
  }

  .adjust-house {
    margin: 20px;

    button {
      background-color: transparent;
      border: 0;
      height: 20px;
      cursor: pointer;

      img {
        width: 20px;
      }
    }
  }

  .disable-adjust-house {
    display: none;
  }

  @media only screen and (max-width: 835px) {
    .house-img {
      width: 100px;
    }

    .recommended-house {
      .house-img {
        width: 100px;
      }
    }

    .adjust-house {
      margin: 20px 0;
    }

    .house-card {
      margin: 10px 0;
      padding-left: 10px;
    }
  }
}
</style>
