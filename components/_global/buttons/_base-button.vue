<template>
  <button
    :disabled="loading"
    :type="nativeType"
    class="btn"
    :class="{
      [`btn-${type}`] : true,
      ['btn-block'] : block,
      [`btn-${size}`] : true,
      [fontSize] : true,
      [fontWeight] : true,
      [bgColor] : true,
      [textCase] : true,
    }"
  >
    <span v-if="loading">
      <i class="fas fa-spinner fa-spin"></i>
    </span>
    <slot />
  </button>
</template>

<script>
    export default {
        name: "base-button",

        props: {
            type: {
                type: String,
                default: 'primary'
            },
            nativeType: {
                type: String,
                default: 'submit'
            },
            loading:{
                type: Boolean,
                default: false
            },
            block:{
                type: Boolean,
                default: false
            },
            size:{
                type: String,
                default: 'md'
            },
            fontSize:{
                type: String,
                default: 'font-16'
            },
            fontWeight:{
                type: String,
                default: 'fw-500'
            },
            bgColor:{
                type: String,
                default: 'primary-bg-color'
            },
            textCase:{
                type: String,
                default: 'text-uppercase'
            }
        }
    }
</script>

<style scoped>

</style>
