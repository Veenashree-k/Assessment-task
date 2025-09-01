<script setup>
defineProps({
  to: { type: String, default: null }, // For NuxtLink
  type: { type: String, default: 'button' }, // For <button>
  color: { type: String, default: '#34B7A7' }, // For NuxtLink bg
  loading: { type: Boolean, default: false },
  loadingText: { type: String, default: 'Sending...' },
  disabled: { type: Boolean, default: false },
  aos: { type: String, default: null } // For animation support
})
</script>

<template>
  <!-- Link Button -->
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center px-6 py-2 rounded-full text-white transition hover:opacity-90"
    :style="{ backgroundColor: color }"
    :data-aos="aos"
  >
    <slot />
  </NuxtLink>

  <!-- Submit/Action Button -->
  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center bg-teal-500 text-white px-5 py-3.5 rounded-full hover:bg-teal-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span v-if="loading">{{ loadingText }}</span>
    <slot v-else />
  </button>
</template>


