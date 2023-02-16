import dayjs from 'dayjs'

export default function directiveFtime(app) {
  app.directive('ftime', {
    mounted(el, bindings) {
      // 获取时间并转换成毫秒
      let timestamp = el.textContent
      if (timestamp.length === 10) {
        timestamp *= 1000
      } else {
        timestamp *= 1
      }

      // 获取传入的参数
      let value = bindings.value || 'YYYY-MM-DD'

      // 对时间进行格式化
      const formatTime = dayjs(timestamp).format(value)
      el.textContent = formatTime
    }
  })
}