<template>
  <div>
      <Header :showSidebar="false" />
      <ScrollToTop />
    <NuxtPage />
  </div>
</template>

<script setup>

import ScrollToTop from '~/components/ScrollToTop.vue';
</script>
