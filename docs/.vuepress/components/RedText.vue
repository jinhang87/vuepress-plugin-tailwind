<template>
  <div class="mx-2 text-red-700">{{ text }}</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: String,
});
</script>
