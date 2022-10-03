<script setup>
import { ref } from "vue"

defineProps({
  msg: {
    type: String,
    default: "string",
  },
})

const msg = ref("Index")
</script>

<template>
  <h1 class="bg-blue-100">{{ msg }}</h1>
</template>

<style scoped></style>
