<template>
  <section class="navbar container">
    <div class="navbar-logo">Logo</div>
    <br />
    <nav class="navbar-list container">
      <RouterLink class="navbar-list-link" active-class="active" to="/">Home</RouterLink>
      <br />
      <RouterLink class="navbar-list-link" active-class="active" to="/firstview"
        >Vista 1</RouterLink
      >
      <br />
      <RouterLink class="navbar-list-link" active-class="active" to="/secondview"
        >Vista 2</RouterLink
      >
    </nav>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="css" scoped>
.container {
  align-items: center;
  flex-direction: column;
  background-color: #676767;
}

.navbar {
  background-color: #676767;
  font-size: x-large;
  font-weight: 600;
  height: 100vh;
  padding: 20px;
  width: 300px;
}

.navbar-logo {
  align-items: center;
  background-color: #dbdbdb;
  border-radius: 15px;
  color: #676767;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 90%;
  padding-block: 40px;
}

.navbar-list {
  width: 90%;
}

.navbar-list-link {
  align-items: center;
  color: #ffffff;
  display: flex;
  height: 50px;
  padding-left: 20px;
  text-decoration: none;
  width: 100%;
}

.active {
  background-color: #ffffff;
  border-radius: 15px;
  color: #676767;
}
</style>
