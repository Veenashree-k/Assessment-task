<!-- src/components/LoadingBlock.vue -->
<script setup lang="ts">
defineProps<{
  message?: string
}>()
</script>

<template>
  <section class="py-16 px-4 animate-pulse space-y-4">
    <!-- Skeleton for the heading -->
    <div class="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>

    <!-- Skeleton for subheading lines -->
    <div class="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
    <div class="h-4 bg-gray-300 rounded w-1/4 mx-auto"></div>

    <!-- Skeleton for content block -->
    <div class="h-48 bg-gray-200 rounded-lg w-full max-w-3xl mx-auto"></div>

    <!-- Optional message shown below the skeleton -->
    <div v-if="message" class="text-center text-gray-500 text-sm pt-4">
      {{ message }}
    </div>
  </section>
</template>

