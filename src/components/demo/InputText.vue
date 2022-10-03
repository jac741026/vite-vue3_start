<script setup>
import { ref } from "vue"
defineProps({
  modelValue: {},
})
const text = ref()
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <p>子:{{ modelValue }}</p>
</template>

<style scoped></style>
