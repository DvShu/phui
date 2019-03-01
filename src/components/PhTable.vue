<template>
  <table>
    <thead>
    <tr>
      <slot name="head"></slot>
    </tr>
    </thead>
    <tbody>
    <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PhTable'
}
</script>
