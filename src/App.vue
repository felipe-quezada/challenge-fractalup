<script setup>
import { RouterView } from 'vue-router';
import NavBarComponent from './components/NavBarComponent.vue';
</script>

<template>
  <main class="container">
    <div>
      <NavBarComponent />
    </div>

    <RouterView />

  </main>
</template>

<style>
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  font-size: 100%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  list-style-type: none;
  color: #7e7e7e;
}

.container {
  display: flex;
  background-color: #e3f4ff;
}
</style>
