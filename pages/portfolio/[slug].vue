<template>
  <div>
    <section
      v-if="portfolioItem"
      class="container mx-auto px-4 py-16"
      data-aos="fade-up"
    >
      <!-- Title -->
      <h2
        class="text-4xl text-center font-semibold"
        data-aos="fade-down"
      >
        Portfolio Details
      </h2>
      <div
        class="w-20 h-1 bg-teal-500 mx-auto mt-2 mb-4"
        data-aos="fade-down"
      ></div>
      <p
        class="text-center text-sm text-gray-500 mb-8"
        data-aos="fade-down"
      >
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <!-- Two-column layout -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
      >
        <!-- Left Column: Project Info + Description -->
        <div data-aos="fade-right">
          <!-- Project Info -->
          <div
            class="bg-white p-6 rounded shadow mb-8"
          >
            <h4
              class="text-xl font-semibold mb-4"
            >
              Project Information
            </h4>
            <ul class="text-gray-700 text-sm space-y-2">
              <li>
                <strong>Category:</strong>
                {{ portfolioItem.categoryName }}
              </li>
              <li>
                <strong>Client:</strong>
                {{ portfolioItem.client }}
              </li>
              <li>
                <strong>Project date:</strong>
                {{ portfolioItem.date }}
              </li>
              <li>
                <strong>Project URL:</strong>
                <a
                  :href="portfolioItem.url"
                  target="_blank"
                  rel="noopener"
                  class="text-teal-500 underline hover:text-teal-600"
                >
                  {{ portfolioItem.url }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Description -->
          <div>
            <h4 class="text-lg font-semibold mb-2">
              Description
            </h4>
            <p class="text-gray-600">
              {{ portfolioItem.description }}
            </p>
          </div>
        </div>

        <!-- Right Column: Swiper Images -->
        <div data-aos="fade-left">
          <Swiper
            :modules="[Autoplay, Pagination]"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :loop="true"
            :slides-per-view="1"
            :pagination="{ clickable: true }"
            class="rounded-lg shadow-lg w-full h-[400px] sm:h-[500px] md:h-[565px]"
          >
            <SwiperSlide
              v-for="(img, index) in portfolioItem.images"
              :key="index"
            >
              <img
                :src="img"
                alt="Portfolio Image"
                class="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

    <!-- Fallback if item not found -->
    <div
      v-else
      class="text-center py-20"
    >
      <h2
        class="text-2xl font-semibold text-red-600"
      >
        Portfolio item not found
      </h2>
      <p
        class="text-gray-500 mt-4"
      >
        <NuxtLink
          to="/portfolio"
          class="text-blue-500 underline"
        >
          ← Back to Portfolio
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const route = useRoute()

const portfolioItems = [
  {
    slug: 'app-1',
    images: [
      '/images/masonry-portfolio-1.jpg',
      '/images/app-1.jpg',
      '/images/books-1.jpg',
      '/images/branding-1.jpg',
    ],
    categoryName: 'App design',
    client: 'ASU Company',
    date: '01 March, 2020',
    url: 'https://www.example.com',
    description: 'Description of App 1',
  },
  {
    slug: 'product-1',
    images: [
      '/images/masonry-portfolio-2.jpg',
      '/images/product-1.jpg',
      '/images/branding-1.jpg',
      '/images/books-1.jpg',
    ],
    categoryName: 'Web design',
    client: 'ASU Company',
    date: '01 March, 2020',
    url: 'https://www.example.com',
    description:
      'This is a multi-image slider. Images switch automatically every 3 seconds.',
  },
  {
    slug: 'branding-1',
    images: [
      '/images/masonry-portfolio-3.jpg',
      '/images/app-1.jpg',
      '/images/books-1.jpg',
      '/images/branding-1.jpg',
    ],
    categoryName: 'Brand Identity',
    client: 'XYZ Corp',
    date: '15 April, 2021',
    url: 'https://www.branding.com',
    description: 'Brand identity design for XYZ Corp.',
  },
  {
    slug: 'branding-2',
    images: [
      '/images/masonry-portfolio-6.jpg',
      '/images/app-1.jpg',
      '/images/books-1.jpg',
      '/images/branding-1.jpg',
    ],
    categoryName: 'Brand Identity',
    client: 'XYZ Corp',
    date: '20 June, 2021',
    url: 'https://www.branding2.com',
    description: 'Description of Branding 2',
  },
  {
    slug: 'product-2',
    images: [
      '/images/masonry-portfolio-5.jpg',
      '/images/app-1.jpg',
      '/images/books-1.jpg',
      '/images/branding-1.jpg',
    ],
    categoryName: 'Product Design',
    client: 'ASU Company',
    date: '10 July, 2021',
    url: 'https://www.product2.com',
    description: 'Description of Product 2',
  },
  {
    slug: 'app-2',
    images: [
      '/images/masonry-portfolio-4.jpg',
      '/images/app-1.jpg',
      '/images/books-1.jpg',
      '/images/branding-1.jpg',
    ],
    categoryName: 'App design',
    client: 'ASU Company',
    date: '05 Aug, 2021',
    url: 'https://www.app2.com',
    description: 'Description of App 2',
  },
  {
    slug: 'branding-3',
    images: [
      '/images/masonry-portfolio-7.jpg',
      '/images/app-1.jpg',
      '/images/books-1.jpg',
      '/images/branding-1.jpg',
    ],
    categoryName: 'Brand Identity',
    client: 'XYZ Corp',
    date: '01 Sept, 2021',
    url: 'https://www.branding3.com',
    description: 'Description of Branding 3',
  },
  {
    slug: 'app-3',
    images: [
      '/images/masonry-portfolio-8.jpg',
      '/images/app-1.jpg',
      '/images/books-1.jpg',
      '/images/branding-1.jpg',
    ],
    categoryName: 'App design',
    client: 'ASU Company',
    date: '15 Oct, 2021',
    url: 'https://www.app3.com',
    description: 'Description of App 3',
  },
  {
    slug: 'product-3',
    images: [
      '/images/masonry-portfolio-9.jpg',
      '/images/app-1.jpg',
      '/images/books-1.jpg',
      '/images/branding-1.jpg',
    ],
    categoryName: 'Product Design',
    client: 'ASU Company',
    date: '20 Nov, 2021',
    url: 'https://www.product3.com',
    description: 'Description of Product 3',
  },
]

const portfolioItem = computed(() =>
  portfolioItems.find((item) => item.slug === route.params.slug)
)
</script>
