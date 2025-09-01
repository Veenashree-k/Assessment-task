<script setup>
const { data: pages } = await useFetch('https://localhost:7102/api/Data/pages')
</script>

<template>
  <footer class="bg-stone-200 text-gray-700 text-sm py-10 text-center border-t-0">

    <p class="mb-6">
      © Copyright
      <span class="font-semibold">Kelly</span>
      All Rights Reserved
    </p>

    <div class="flex justify-center space-x-6 mb-6">
      <a href="#" aria-label="Twitter" class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-teal-500 hover:text-white transition">
        <i class="bi bi-twitter text-xl"></i>
      </a>
      <a href="#" aria-label="Facebook" class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-teal-500 hover:text-white transition">
        <i class="bi bi-facebook text-xl"></i>
      </a>
      <a href="#" aria-label="Instagram" class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-teal-500 hover:text-white transition">
        <i class="bi bi-instagram text-xl"></i>
      </a>
      <a href="#" aria-label="LinkedIn" class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-teal-500 hover:text-white transition">
        <i class="bi bi-linkedin text-xl"></i>
      </a>
    </div>

    <p class="text-xs text-gray-500">
      Designed by
      <a href="https://bootstrapmade.com" target="_blank" class="text-teal-500 font-semibold hover:underline ml-1 mr-1">BootstrapMade</a>
      Distributed by
      <a href="https://themewagon.com" target="_blank" class="text-teal-500 font-semibold hover:underline ml-1">ThemeWagon</a>
    </p>
  </footer>
</template>

<style scoped>
/* Optional: add smooth hover transitions or custom tweaks */
</style>
