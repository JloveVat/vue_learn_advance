<!-- <script lang="jsx">
import { ref } from 'vue'
import About from './About.vue'
export default {
  setup() {
    const counter = ref(0)
    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }

    return () => {
      return (
        <div class="app">
          <h2>当前计数: {counter.value}</h2>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
          <About></About>
        </div>
      )
    }
  }
}
</script> -->

<script lang="jsx" setup>
import { ref } from 'vue'
import About from './About.vue'

const counter = ref(0)
const increment = () => {
  counter.value++
}
const decrement = () => {
  counter.value--
}

const jsx = () => (
  <div class="app">
    <h2>当前计数: {counter.value}</h2>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <About></About>
  </div>
)
</script>

<template>
  <jsx></jsx>
</template>

<style scoped></style>
