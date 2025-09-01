<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility)
})
</script>

<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    aria-label="Scroll to top"
    class="fixed bottom-6 right-6 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
  >
    ↑
  </button>
</template>
