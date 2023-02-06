import { createApp } from 'vue'
// import App from './01_自定义指令/01_自定义指令基本使用.vue'
import App from './01_自定义指令/App.vue'

import useDirectives from './01_自定义指令/directives';

const app = createApp(App)

useDirectives(app)

// app.directive('focus', {
//   mounted(el) {
//     console.log('全局指令当前元素: ', el);
//     el?.focus()
//   }
// })

app.mount('#app')