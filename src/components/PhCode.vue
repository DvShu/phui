<template>
  <pre><code v-pre><slot></slot></code></pre>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'

export default {
  name: 'PhCode',
  mounted () {
    hljs.highlightBlock(this.$el.querySelector('code'))
  }
}
</script>
