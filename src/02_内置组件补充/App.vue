<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncHome = defineAsyncComponent(() => import('./AsyncHome.vue'))
</script>

<template>
  <div class="app">
    <Suspense>
      <template #default>
        <AsyncHome></AsyncHome>
      </template>
      <template #fallback>
        <h2>loading</h2>
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
