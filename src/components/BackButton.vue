<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const backButton = () => {
  router.push(`/`)
}
</script>

<template>
  <button class="back-button" @click="backButton">
    <img class="back-desktop-icon" src="../assets/backIcon.png" />
    <img class="back-mobile-icon" src="../assets/backIconWhite.png" />
    <p class="back-button-label">Back To Overview</p>
  </button>
</template>

<style>
.back-button {
  margin-bottom: 40px;
  cursor: pointer;
  background-color: transparent;
  border: none;

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

@media only screen and (max-width: 835px) {
  .back-button {
    position: absolute;
    top: 10px;
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
</style>
