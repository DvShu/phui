<template>
  <div
    class="ph-toast ph-toast-middle"
    :class="{ 'ph-toast-hide': !show }"
  >
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'PhToast',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    open () {
      this.show = true
    },
    close () {
      this.show = false
    }
  }
}
</script>
