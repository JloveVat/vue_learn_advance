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
      <p v-if="isShow">
        我的天空里没有太阳，总是黑夜，但并不暗，因为有东西代替了太阳。虽然没有太阳那么明亮，但对我来说已经足够。凭借着这份光，我便能把黑夜当成白天。我从来就没有太阳，所以不怕失去
      </p>
      <!-- <p v-if="isShow">
        生活不是用来妥协的，你退缩得越多，能让你喘息的空间就越有限；日子不是用来将就的，你越凑合，也就失去了追求其他幸福的机会。属于自己的，都要积极地去争取，只有乐观、努力、向上，生活给你的回馈才会越来越多。
      </p> -->
    </Transition>
  </div>
</template>

<style scoped>
p {
  display: inline-block;
}

.jing-enter-active {
  animation: jingEnterAnim 2s ease;
}
.jing-leave-active {
  /* animation: jingLeaveAnim 2s ease; */
  animation: jingEnterAnim 2s ease reverse;
}

@keyframes jingEnterAnim {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes jingLeaveAnim {
  100% {
    transform: scale(0);
    transform: translateX(-500px);
    opacity: 0;
  }
}
</style>
