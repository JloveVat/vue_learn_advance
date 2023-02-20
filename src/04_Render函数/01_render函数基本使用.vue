<script>
import { h } from 'vue'

export default {
  render() {
    return h('div', { className: 'app' }, [
      h('h2', { title: 'title' }, '标题'),
      h('h3', { className: 'content' }, '内容')
    ])
  }
}
</script>

<style scoped></style>
