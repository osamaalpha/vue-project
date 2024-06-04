<script setup lang="ts">
import BackButton from '../components/BackButton.vue'
</script>

<template>
  <div class="container">
    <BackButton />

    <h1>About DTT Real Estate</h1>
    <p>jfhsjvhsdjfhdfjdhfjdsfhdsjk</p>
    <div>
      <h1>Design and Development</h1>
    </div>
    <div class="about-footer">
      <img src="../assets/logo.png" />
      <div class="dtt-link">
        <p>By DTT</p>
        <a href="www.d-tt.nl">www.d-tt.nl</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-footer {
  margin-top: 30px;
  display: flex;
  gap: 30px;

  img {
    width: 200px;
  }
}
p {
  margin: 10px 0;
}
a {
  text-decoration: none;
}
</style>
