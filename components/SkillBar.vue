<template>
  <div>
    <div class="flex justify-between text-sm font-medium text-gray-700 mb-1">
      <span>{{ label }}</span>
      <span>{{ value }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded h-2.5">
      <div class="bg-teal-500 h-2.5 rounded transition-all duration-500 ease-in-out" :style="{ width: value + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: {
    type: Number,
    required: true,
    validator: v => v >= 0 && v <= 100
  }
})
</script>
