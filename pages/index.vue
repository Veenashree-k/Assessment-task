<template>
  <section
    class="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
    style="background-image: url('/images/hero-bg.jpg');"
  >
    <h1 class="text-5xl sm:text 3xl md:text 4xl font-bold mb-4 text-center text-black" data-aos="zoom-out">Kelly Adams</h1>
      <p class="text-2xl text-gray-800">
      I'm a professional illustrator from San Francisco
    </p>
    
    <NuxtLink
      to="/about"
      class="text-white px-6 py-2 rounded hover:opacity-90"
      style="background-color: #34B7A7;"
    >
      About Me
    </NuxtLink>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})
</script>
