<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { serviceCall } from '~/utils/serviceCall'
import { apiEndpoints } from '~/utils/apiEndpoints'

import 'swiper/css'
import 'swiper/css/pagination'

const route = useRoute()
const portfolioItem = ref<any>(null)
const isLoading = ref(true)

// Leave this untouched (image path cleaner)
function formatImageUrl(path: string): string {
  return path
    .replace(/\\/g, '/')
    .split('/public')[1] || ''
}

async function fetchPortfolioItem(slug: string) {
  isLoading.value = true
  try {
    const endpoint = `${apiEndpoints.data.products.endpoint}/${slug}`

    const data = await serviceCall<any>({
      endpoint,
      method: apiEndpoints.data.products.method || 'GET',
    })
    
    const raw = data.result || data;
    console.log("Raw API Response:", raw);

    if (!raw.productImages || raw.productImages.length === 0) {
      raw.productImages = [
        { imageUrl: 'C:/Users/Veena.S/Desktop/Kelly/kelly_project/public/images/app-1.jpg' },
        { imageUrl: 'C:/Users/Veena.S/Desktop/Kelly/kelly_project/public/images/books-1.jpg' },
        { imageUrl: 'C:/Users/Veena.S/Desktop/Kelly/kelly_project/public/images/branding-1.jpg' },
      ];
    }

    if (raw.imageUrl) {
      raw.productImages.push({ imageUrl: raw.imageUrl });
    }

       portfolioItem.value = {
      ...raw,
      categoryName: raw.categoryName || 'N/A',
      client: raw.clientName || 'N/A',
      date: raw.projectDate
        ? new Date(raw.projectDate).toLocaleDateString()
        : 'N/A',
      url: raw.projectUrl || 'N/A',
      description: raw.description || 'No description available',
      images: (raw.productImages || []).map((img: any) =>
        formatImageUrl(img.imageUrl)
      ),
    };

    console.log("Mapped project Item:", portfolioItem.value);

  } catch (err) {
    console.error('Failed to load portfolio item:', err);
  }
}

onMounted(() => {
  const slug = route.params.slug as string;
  console.log("Route slug:", slug);
  fetchPortfolioItem(slug);
});
</script>

<template>
  <div>
    <section
      v-if="portfolioItem"
      class="container mx-auto px-4 py-16"
      data-aos="fade-up"
    >
      <!-- Title -->
      <h2 class="text-4xl text-center font-semibold" data-aos="fade-down">
        Portfolio Details
      </h2>
      <div class="w-20 h-1 bg-teal-500 mx-auto mt-2 mb-4" data-aos="fade-down"></div>
      <p class="text-center text-xs text-gray-500 mb-8" data-aos="fade-down">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <!-- Two-column layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <!-- Left Column -->
        <div data-aos="fade-right">
          <!-- Project Info -->
      
      <div class="bg-white p-6 rounded shadow mb-8">
         <h4 class="text-xl font-semibold mb-4">Project Information</h4>
            <ul class="text-gray-700 text-sm space-y-2">
               <li><strong>Category:</strong> {{ portfolioItem.categoryName }}</li>
               <li><strong>Client:</strong> {{ portfolioItem.client }}</li>
               <li><strong>Project date:</strong> {{ portfolioItem.date }}</li>
            <li>
            <strong>Project URL:</strong>
      <template v-if="portfolioItem.url">
        <a
          :href="portfolioItem.url"
          target="_blank"
          rel="noopener"
          class="text-teal-500 underline hover:text-teal-600"
        >
          {{ portfolioItem.url }}
        </a>
      </template>
    </li>
  </ul>
</div>


          <!-- Description -->
          <div>
            <h4 class="text-lg font-semibold mb-2">Description</h4>
            <p class="text-gray-600">
              {{ portfolioItem.description }}
            </p>
          </div>
        </div>

        <!-- Right Column: Swiper -->
        <div data-aos="fade-left">
          <Swiper
            :modules="[Autoplay, Pagination]"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :loop="true"
            :slides-per-view="1"
            :pagination="{ clickable: true, el: '.portfolio-pagination' }"
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

          <!-- Custom Pagination -->
          <div class="portfolio-pagination mt-4 flex justify-center"></div>
        </div>
      </div>
    </section>

    <!-- Fallback -->
    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-semibold text-red-600">Portfolio item not found</h2>
      <p class="text-gray-500 mt-4">
        <NuxtLink to="/portfolio" class="text-blue-500 underline">← Back to Portfolio</NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.portfolio-pagination .swiper-pagination-bullet {
  background-color: #d1d5db;
  opacity: 0.6;
  margin: 0 4px;
  width: 10px;
  height: 10px;
  border-radius: 9999px;
}

.portfolio-pagination .swiper-pagination-bullet-active {
  background-color: #14b8a6; /* teal-500 */
  opacity: 1;
}
</style>
