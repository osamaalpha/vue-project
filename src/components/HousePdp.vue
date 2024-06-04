<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import BackButton from '../components/BackButton.vue'
import ModalComponent from '../components/ModalComponent.vue'

const isModalOpened = ref(false)
const router = useRouter()

const props = defineProps({
  house: Object,
  streetNameFirstCapital: String
})

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const submitHandler = () => {
  axios.delete(`/api/deleteHouse?id=${props.house?.id}`).then((res) => {
    if (res.status === 200) {
      closeModal()
    } else {
      console.error(res)
      router.push(`/error`)
    }
  })
}

const editHouse = () => {
  router.push(`/editHouse?id=${props.house?.id}`)
}
</script>

<template>
  <div class="house-pdp" v-if="house">
    <BackButton />
    <div>
      <div>
        <img class="house-img" :src="house.image" />
      </div>
      <div class="house-card-pdp">
        <div class="row-pdp space-between house-details">
          <h2>{{ streetNameFirstCapital }} {{ house.location?.houseNumber }}</h2>
          <div v-if="house.madeByMe" class="row-pdp small-gap adjust-house">
            <button @click="editHouse">
              <img src="../assets/editIcon.png" />
            </button>
            <button @click="openModal">
              <img src="../assets/deleteIcon.png" />
            </button>
          </div>
        </div>
        <div class="row-pdp small-gap">
          <img src="../assets/locationIcon.png" />

          <p>{{ house.location?.zip }} {{ house.location?.city }}</p>
        </div>
        <div class="row-pdp small-gap">
          <div class="row-pdp small-gap">
            <img src="../assets/priceIcon.png" />

            <p>{{ house.price }}</p>
          </div>
          <div class="row-pdp small-gap">
            <img src="../assets/sizeIcon.png" />

            <p>{{ house.size }} m2</p>
          </div>
          <div class="row-pdp small-gap">
            <img src="../assets/builtIcon.png" />

            <p>Built in {{ house.constructionYear }}</p>
          </div>
        </div>
        <div class="row-pdp small-gap">
          <div class="row-pdp small-gap">
            <img src="../assets/bedIcon.png" />

            <p>{{ house.rooms?.bedrooms }}</p>
          </div>
          <div class="row-pdp small-gap">
            <img src="../assets/bathIcon.png" />

            <p>{{ house.rooms?.bathrooms }}</p>
          </div>
          <div class="row-pdp small-gap">
            <img src="../assets/garageIcon.png" />

            <p>{{ house.hasGarage ? 'Yes' : 'No' }}</p>
          </div>
        </div>
        <div>
          <p>{{ house.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <ModalComponent
    :isOpen="isModalOpened"
    @modal-close="closeModal"
    @submit="submitHandler"
    @cancel="closeModal"
    name="first-modal"
  />
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
  }

  .house-img {
    width: 100%;
  }
}
</style>
