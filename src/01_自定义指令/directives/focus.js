export default function directiveFocus(app) {
  app.directive('focus', {
    mounted(el) {
      console.log('全局指令当前元素: ', el);
      el?.focus()
    }
  })
}