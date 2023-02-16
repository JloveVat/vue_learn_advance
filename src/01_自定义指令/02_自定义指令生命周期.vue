<script setup>
import { ref } from 'vue'

const vCustom = {
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('created')
  }
}

const counter = ref(0)
const showTitle = ref(true)
</script>

<template>
  <div class="app">
    <button @click="counter++">++</button>
    <button @click="showTitle = !showTitle">隐藏</button>
    <h2 v-if="showTitle" v-custom>当前计数: {{ counter }}</h2>
  </div>
</template>

<style scoped></style>
