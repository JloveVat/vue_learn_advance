<script setup>
import { ref } from 'vue'

const vCustom = {
  mounted(el, bindings) {
    console.log('mounted: ', el, bindings)
    el.textContent = bindings.value
    // 参数: arg: 'title', 修饰符: modifier.lazy: true, 值: value: '一些信息'
  }
}

const counter = ref(0)
const message = ref('一些信息')
const finalPrice = ref(123)
</script>

<template>
  <div class="app">
    <button @click="counter++">++</button>
    <!-- 自定义指令自定义参数和自定义修饰符 -->
    <h2 v-custom:title.lazy="message">自定义指令</h2>

    <!-- 2.价格拼接单位符号 -->
    <h2 v-unit>{{ finalPrice }}</h2>
  </div>
</template>

<style scoped></style>
