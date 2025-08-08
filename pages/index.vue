<template>
  <section
   class="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style="background-image: url('/images/hero-bg.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; height: 100vh;"

  >
    <h1
      class="text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-black mb-4 sm:mb-6"
      data-aos="zoom-out"
    >
      Kelly Adams
    </h1>

    <p class="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8"data-aos="zoom-out">
      I'm a professional illustrator from San Francisco
    </p>

    <NuxtLink
      to="/about"
      class="text-white px-6 py-2 rounded-full hover:opacity-90" data-aos="zoom-in"
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
