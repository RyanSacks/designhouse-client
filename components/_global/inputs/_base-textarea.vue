<template>
  <div>
    <textarea
      class="form-control form-control-lg font-14 fw-300"
      :rows="rows"
      :value="value"
      :placeholder="placeholder"
      :class="{ 'is-invalid': form.errors.has(field) }"
      @input="handleInput"
    />
    <has-error :form="form" :field="field"></has-error>
  </div>
</template>

<script>
    export default {
        name: "base-textarea",

        props: {
            form:{
                type: Object,
                required: true
            },
            field:{
                type: String,
                required: true
            },
            value:{
                type: String,
                default: ''
            },
            placeholder:{
                type: String,
                default: ''
            },
            rows:{
                type: Number,
                default: 3
            }
        },
        methods: {
            handleInput(e){
                this.$emit('input', e.target.value);
            }
        },

        mounted(){
            // console.log(this.$attrs);
        }
    }
</script>

<style scoped>

</style>
