<template>
  <main class="container">
    <h1>{{ welcomeMessageFirstView }}</h1>
  </main>
</template>

<script setup>
const welcomeMessageFirstView = 'Hola! Esta es la vista 1'
</script>

<style scoped>
.container {
  width: 100%;
  padding: 50px;
}
</style>
