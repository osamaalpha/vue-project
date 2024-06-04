<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img class="logo-img" src="../assets/logo.png" />
    </div>
    <div class="navbar-leftSide-container">
      <div class="navbar-leftSide">
        <RouterLink v-slot="{ isExactActive }" to="/"
          ><p class="nav-label">Houses</p>
          <img class="nav-img" v-if="isExactActive" src="../assets/homeMobileNavActive.png" />
          <img class="nav-img" v-else src="../assets/homeMobileNav.png" />
        </RouterLink>
        <RouterLink v-slot="{ isExactActive }" id="about-link" to="/about"
          ><p class="nav-label">About</p>
          <img class="nav-img" v-if="isExactActive" src="../assets/aboutMobileNavActive.png" />
          <img class="nav-img" v-else src="../assets/aboutMobileNav.png" />
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  display: flex;
  gap: 50px;
  background-color: white;
  padding: 20px 200px;
}

.navbar-leftSide-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-leftSide {
  a {
    padding: 30px;
    font-size: 18px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
  }

  .nav-item-active {
    color: black;
  }
}

p {
  display: inline;
  padding: 0;
}

.logo {
  img {
    width: 120px;
  }
}

.nav-img {
  display: none;
}

@media only screen and (max-width: 835px) {
  .navbar {
    display: block;
    padding: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .nav-img {
    display: block;
  }

  .navbar-leftSide-container {
    display: block;
  }

  .navbar-leftSide {
    display: flex;
    justify-content: space-around;

    a {
      padding: 15px;
    }
  }

  img {
    width: 40px;
  }

  .logo,
  .nav-label {
    display: none;
  }
}
</style>
