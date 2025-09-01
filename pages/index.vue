<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { apiEndpoints } from '~/utils/apiEndpoints'
import { serviceCall } from '~/utils/serviceCall'

interface Page {
  id: number 
  title: string 
  slug: string
  content: string
  imageUrl?: string
  createdAt?: string
  updatedAt?: string
}

const pages = ref<Page[]>([])
const pending = ref(true)
const error = ref<unknown | null>(null)

onMounted(async () => {
  AOS.init({ duration: 800, once: true })

  try {
    const response = await serviceCall<Page[]>({
      ...apiEndpoints.data.pages,
    })

    if (Array.isArray(response)) {
      pages.value = response
      console.log('Fetched pages:', response)
    } else {
      throw new Error('Invalid response format from /pages API')
    }
  } catch (err) {
    console.error('Failed to fetch pages:', err)
    error.value = err
  } finally {
    pending.value = false
  }
})
</script>

<template>
  <section
  v-if="pending"
   class="min-h-screen flex items-center justify-center bg-gray-100 animate-pulse">
  <div class="text-center">
    <div class="h-10 bg-gray-300 rounded w-40 mx-auto mb-4"></div>
    <div class="h-6 bg-gray-300 rounded w-60 mx-auto mb-2"></div>
    <div class="h-10 bg-gray-400 rounded w-32 mx-auto"></div>
  </div>
  </section>
  <section
  v-else
   class="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style="background-image: url('/images/hero-bg.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; height: 100vh;"

  >
    <h1
      class="text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-black mb-4 sm:mb-6"
      data-aos="zoom-out"
    >Kelly Adams</h1>

    <p class="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8"data-aos="zoom-out">
     I'm a professional illustrator from San Francisco </p>

<AppButton
  to="/about"
  color="#34B7A7"
  aos="zoom-in"
>
  About Me
</AppButton>

  </section>
</template>


