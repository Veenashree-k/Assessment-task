<template>
  <div class="text-center">
    <div class="text-4xl font-bold text-teal-600">{{ count }}</div>
    <p class="text-gray-700 mt-2 text-sm sm:text-base">{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  count: {
    type: [Number, String],
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

