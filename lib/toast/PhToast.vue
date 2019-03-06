<template>
  <div
    class="ph-toast"
    v-show="show"
    :class="customClass"
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
    },
    className: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    customClass () {
      var classes = []
      switch (this.position) {
        case 'top':
          classes.push('ph-toast-top')
          break
        case 'bottom':
          classes.push('ph-toast-bottom')
          break
        default:
          classes.push('ph-toast-middle')
      }
      classes.push(this.className)
      return classes.join(' ')
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style>
  .ph-toast {
    position: fixed;
    border-radius: 5px;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    text-align: center;
    z-index: 100;
    transition: opacity .3s linear;
    font-size: 14px;
    padding: 8px 15px;
    max-width: 80%;
    width: fit-content;
  }
  .ph-toast-top {
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .ph-toast-bottom {
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .ph-toast-middle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
