<template>
  <header class="sticky top-0 bg-stone-200 shadow-md z-50">
   <nav class="container mx-auto flex items-center justify-between py-4 px-4">
  <!-- Left: Logo -->
  <div class="flex-shrink-0">
    <h1 class="text-2xl font-Raleway text-black">
      <NuxtLink to="/">KELLY</NuxtLink>
    </h1>
  </div>

  <!-- Center: Nav (for md+) -->
  <ul class="hidden md:flex items-center space-x-6 font-normal font-poppins text-gray-700 mx-auto">
    <li v-for="item in navItems" :key="item.to" class="relative group pb-1">
      <NuxtLink
        :to="item.to"
        class="relative pb-2 hover:text-teal-600 transition"
        :class="$route.path === item.to ? 'text-teal-600 font-semibold' : ''"
      >
        {{ item.name }}
        <span
          class="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-1/2 bg-teal-600 transition-all duration-300 opacity-0 group-hover:opacity-100"
          :class="$route.path === item.to ? 'opacity-100' : ''"
        ></span>
      </NuxtLink>
    </li>

    <!-- Dropdown -->
    <li class="relative group">
      <button
        class="flex items-center gap-1 hover:text-teal-600 transition"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
        <svg class="w-4 h-4 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Dropdown Menu -->
      <ul
        class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50"
      >
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Dropdown 1</a></li>
        <li class="relative group/deep">
          <a href="#" class="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
            Deep Dropdown
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <ul
            class="absolute top-0 left-full mt-0 ml-1 w-56 bg-white shadow-lg rounded-md py-2 invisible opacity-0 group-hover/deep:visible group-hover/deep:opacity-100 transition-all duration-200"
          >
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 1</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 2</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 3</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 4</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 5</a></li>
          </ul>
        </li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Dropdown 2</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Dropdown 3</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Dropdown 4</a></li>
      </ul>
    </li>

    <li class="relative group pb-1">
      <NuxtLink
        to="/contact"
        class="relative pb-2 hover:text-teal-600 transition"
        :class="$route.path === '/contact' ? 'text-teal-600 font-semibold' : ''"
      >
        Contact
        <span
          class="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-1/2 bg-teal-600 transition-all duration-300 opacity-0 group-hover:opacity-100"
          :class="$route.path === '/contact' ? 'opacity-100' : ''"
        ></span>
      </NuxtLink>
    </li>
  </ul>

  <!-- Right: Social Icons + Hamburger Menu -->
  <div class="flex items-center space-x-2">
    <!-- Social Icons -->
    <div class="flex items-center space-x-2">
      <a href="#" aria-label="Twitter" class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-teal-500 hover:text-white transition">
        <i class="bi bi-twitter text-base"></i>
      </a>
      <a href="#" aria-label="Facebook" class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-teal-500 hover:text-white transition">
        <i class="bi bi-facebook text-base"></i>
      </a>
      <a href="#" aria-label="Instagram" class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-teal-500 hover:text-white transition">
        <i class="bi bi-instagram text-base"></i>
      </a>
      <a href="#" aria-label="LinkedIn" class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-teal-500 hover:text-white transition">
        <i class="bi bi-linkedin text-base"></i>
      </a>
    </div>

    <!-- Hamburger Menu Button -->
    <button
      @click="mobileMenuOpen = !mobileMenuOpen"
      aria-label="Toggle menu"
      class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 border border-gray-400 rounded p-1"
    >
      <span class="block w-6 h-0.5 bg-gray-700"></span>
      <span class="block w-6 h-0.5 bg-gray-700"></span>
      <span class="block w-6 h-0.5 bg-gray-700"></span>
    </button>
  </div>
</nav>

    <!-- Mobile Menu (show when mobileMenuOpen is true) -->
    <transition name="fade">
      <div v-if="mobileMenuOpen" class="md:hidden bg-stone-200 px-4 pb-4">
        <ul class="flex flex-col space-y-3 font text-gray-700">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="block py-2 border-b border-gray-300"
              @click="mobileMenuOpen = false"
              :class="$route.path === item.to ? 'text-teal-600 font-semibold' : ''"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
          <li>
            <!-- Example dropdown items on mobile, adjust as needed -->
            <button class="w-full text-left py-2 border-b border-gray-300 text-gray-700 font-medium flex justify-between items-center"
              @click="mobileDropdownOpen = !mobileDropdownOpen">
              Dropdown
               <svg
              :class="mobileDropdownOpen ? 'rotate-180' : ''"
              class="w-4 h-4 transition-transform"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
                >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <ul v-if="mobileDropdownOpen" class="pl-4 mt-1 space-y-1">
              <li><a href="#" class="block py-1">Dropdown 1</a></li>
              <li><a href="#" class="block py-1">Dropdown 2</a></li>
              <li><a href="#" class="block py-1">Dropdown 3</a></li>
            </ul>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block py-2 border-b border-gray-300"
              @click="mobileMenuOpen = false"
              :class="$route.path === '/contact' ? 'text-teal-600 font-semibold' : ''"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Resume', to: '/resume' },
  { name: 'Services', to: '/services' },
  { name: 'Portfolio', to: '/portfolio' }
]

const mobileMenuOpen = ref(false)
const mobileDropdownOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
