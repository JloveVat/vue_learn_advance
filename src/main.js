import { createApp } from 'vue'
import router from './router'
// import App from './01_自定义指令/01_自定义指令基本使用.vue'
// import App from './01_自定义指令/02_自定义指令生命周期.vue'
// import App from './01_自定义指令/03_自定义指令参数修饰符和值.vue'
// import App from './01_自定义指令/App.vue'

// import App from './02_内置组件补充/App_teleport.vue'
// import App from './02_内置组件补充/App.vue'

// import App from './03_安装插件/App.vue'

// import App from './04_Render函数/01_render函数基本使用.vue'
// import App from './04_Render函数/02_render函数计数器实现.vue'
// import App from './04_Render函数/App.vue'

// import App from './05_JSX的语法/01_jsx语法基本使用.vue'
// import App from './05_JSX的语法/02_jsx语法实现计数器.vue'
// import App from './05_JSX的语法/App.vue'

// import App from './06_过渡动画/01_transition动画.vue'
// import App from './06_过渡动画/02_animation动画.vue'
import App from './06_过渡动画/App.vue'

// import useDirectives from './01_自定义指令/directives'
import directives from './01_自定义指令/directives'


// const app = createApp(App)
// useDirectives(app)
// app.mount('#app')

// 链式调用
createApp(App).use(directives).mount('#app')

// app.directive('focus', {
//   mounted(el) {
//     console.log('全局指令当前元素: ', el);
//     el?.focus()
//   }
// })
