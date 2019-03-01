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

<style lang="stylus">
.ph-toast
  position fixed
  border-radius: 5px
  background: rgba(0, 0, 0, .7)
  color: #fff
  text-align: center
  z-index: 100
  transition: opacity .3s linear
  font-size 14px
  padding 8px 15px
  max-width: 80%
  width: fit-content;
.ph-toast-top
  top 50px
  left 50%
  transform translate(-50%, 0)
.ph-toast-bottom
  bottom 50px
  left 50%
  transform translate(-50%, 0)
.ph-toast-middle
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
.ph-toast-hide
  display none
</style>
