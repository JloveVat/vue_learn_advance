<script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>

<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>
    <!-- 不加name属性时, 所有class必须 v- 开始 -->
    <Transition name="jing">
      <h2 v-if="isShow">哈哈哈</h2>
    </Transition>
  </div>
</template>

<style scoped>
h2 {
  display: inline-block;
}
.jing-leave-to,
.jing-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.jing-leave-from,
.jing-enter-to {
  opacity: 1;
  transform: scale(1);
}
.jing-leave-active,
.jing-enter-active {
  transition: all 2s ease;
}
</style>
