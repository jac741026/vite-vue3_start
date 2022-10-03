<script setup>
import HelloWorld from "./components/HelloWorld.vue"
import InputText from "./components/demo/InputText.vue"
import Life from "./components/demo/Life.vue"

import { ref } from "vue"
import { computed } from "@vue/reactivity"

const name = ref()
const isJac = computed(() => {
  return name.value == "jac" ? "good" : "no"
})
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <InputText v-model="name"></InputText>
  <div>父{{ name }}{{ isJac }}</div>
  <Life></Life>
  <p>
    <router-link to="/">Go to Home</router-link>
  </p>
  <router-link to="/about">Go to About</router-link>
  <router-view></router-view>
</template>

<style></style>
