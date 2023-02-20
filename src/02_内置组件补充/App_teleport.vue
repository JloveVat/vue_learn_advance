<script setup>
import HelloWorld from './HelloWorld.vue'
</script>

<template>
  <div class="app">
    <div class="hello">
      <p class="content">
        <Teleport to="body">
          <HelloWorld></HelloWorld>
        </Teleport>
      </p>
    </div>
    <div class="hahaha">
      <Teleport to="#app">
        <h2>哈哈哈</h2>
      </Teleport>
    </div>
    <div class="aaa">
      <Teleport to="#app">
        <h3>会追加到#app</h3>
      </Teleport>
    </div>
  </div>
</template>

<style scoped></style>
