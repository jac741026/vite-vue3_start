<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from "vue"
defineProps({
  msg: {
    type: String,
    default: "string",
  },
})
onMounted(() => {
  // alert("onMounted")
  console.log(123)
})
onUpdated(() => {
  // alert("onUpdated")
})
onUnmounted(() => {
  // alert("onUnmounted")
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
