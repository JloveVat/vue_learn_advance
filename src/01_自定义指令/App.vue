<script setup>
import { ref } from 'vue'

const timestamp = 1676502627
</script>

<template>
  <div class="app">
    <h2 v-ftime="'YY-MM-DD HH:mm'">{{ timestamp }}</h2>
    <h2 v-ftime>{{ 1676502627123 }}</h2>
  </div>
</template>

<style scoped></style>
