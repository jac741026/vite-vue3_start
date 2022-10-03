<script setup>
import { ref } from "vue"

defineProps({
  msg: {
    type: String,
    default: "string",
  },
})

const msg = ref("about")
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
