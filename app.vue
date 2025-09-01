<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'
// import Sidebar from './components/Sidebar.vue'
// import TestimonialCard from './components/TestimonialCard.vue'

onMounted(() => {
  AOS.init({
    once: true,
    duration: 800,
    offset: 120,
  })
})
</script>

<template>
  <div class="font-sans">
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300;400;500;600&family=Raleway:wght@300;400;600;700&display=swap"
      />
    </Head>

    <Header />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- <SkillBar /> -->
    <!-- <TestimonialCard /> -->

    <ScrollToTop />
    <Sidebar />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
</style>
