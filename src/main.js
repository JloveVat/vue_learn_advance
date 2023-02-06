import { createApp } from 'vue'
import App from './01_自定义指令/App.vue'

const app = createApp(App)

app.directive('focus', {
  mounted(el) {
    console.log('全局指令当前元素: ', el);
    el.focus()
  }
})

app.mount('#app')