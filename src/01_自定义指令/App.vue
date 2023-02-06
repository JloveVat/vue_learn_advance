<script setup>
// 方式一: 定义ref绑定input中, 调用focus
// import useInput from './hooks/useInput'
// const { inputRef } = useInput()

// 方式二: 自定义指令
// const vFocus = {
//   // 生命周期的函数(自定义指令的)
//   mounted(el) {
//     console.log('当前元素: ', el);
//     el.focus()
//   }
// }

</script>

<template>
  <div class="app">
    <span>方式一: </span>
    <input type="text" ref="inputRef">
    <br>
    <span>方式二: </span>
    <input type="text" v-focus>
    <span>自定义局部指令</span>
    <br>
    <span>方式三: </span>
    <input type="text">
    <span>自定义全局指令</span>
  </div>
</template>

<!-- <script>
export default {
  directives: {
    focus: {
      // 生命周期的函数(自定义指令的)
      mounted(el) {
        console.log('当前元素: ', el);
        el.focus()
      }
    }
  }
}
</script> -->

<style scoped>

</style>
