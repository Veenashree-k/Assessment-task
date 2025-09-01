<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePortfolio } from '~/composables/usePortfolio'
import LoadingBlock from '~/components/LoadingBlock.vue'
import { serviceCall } from '~/utils/serviceCall'
import { apiEndpoints } from '~/utils/apiEndpoints'

const items = ref<any[]>([])
const activeCategory = ref('*')
const loading = ref(true)

const filteredItems = computed(() => {
  if (activeCategory.value === '*') return items.value
  return items.value.filter(item => item.category === activeCategory.value)
})

function setCategory(cat: string) {
  activeCategory.value = cat
}

async function fetchPortfolioItems() {
  try {
    const data = await serviceCall<any[]>({
        endpoint: apiEndpoints.data.products.endpoint,
        method: apiEndpoints.data.products.method || 'GET'
    })
    items.value = data.map(item => ({
      id: item.id,
      image: item.imageUrl,
      title: item.title,
      subtitle: item.shortDescription || item.categoryName,
      category: `filter-${item.categoryName.toLowerCase().replace(/\s+/g, '-')}`,
      slug: item.slug,
    }))

    usePortfolio()

  } catch (err) {
    console.error('Failed to load portfolio items:', err)
  } finally {
    loading.value = false
  }
}

function onClickLogic(value: boolean = false){
    console.log("click happening Properly", value);
}

onMounted(() => {
  fetchPortfolioItems()
})
</script>



<template>
  <main class="portfolio-page">
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 class="text-4xl font-semibold">Portfolio</h2>
        <div class="w-20 h-1 bg-teal-500 mx-auto mt-2 mb-4"></div>
        <p class="text-xs text-gray-600 mt-2">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <!-- Filters -->
      <ul class="portfolio-filters flex justify-center space-x-4 mb-10">
        <li
          :class="[
            'cursor-pointer font-medium text-sm px-4 py-1 rounded-full',
            activeCategory === '*' ? 'bg-teal-500 text-white' : 'hover:bg-teal-500 hover:text-white'
          ]"
          @click="setCategory('*')"
          role="button"
          tabindex="0"
         :aria-pressed="activeCategory === '*'"
        >
          All
        </li>
        <li
          :class="[
            'cursor-pointer font-medium text-sm px-4 py-1 rounded-full',
            activeCategory === 'filter-app' ? 'bg-teal-500 text-white' : 'hover:bg-teal-500 hover:text-white'
          ]"
          @click="setCategory('filter-app')"
          role="button"
          tabindex="0"
          :aria-pressed="activeCategory === '*'"
        >
          App
        </li>
        <li
          :class="[
            'cursor-pointer font-medium text-sm px-4 py-1 rounded-full',
            activeCategory === 'filter-product' ? 'bg-teal-500 text-white' : 'hover:bg-teal-500 hover:text-white'
          ]"
          @click="setCategory('filter-product')"
          role="button"
          tabindex="0"
          :aria-pressed="activeCategory === '*'"
        >
          Card
        </li>
        <li
          :class="[
            'cursor-pointer font-medium text-sm px-4 py-1 rounded-full',
            activeCategory === 'filter-branding' ? 'bg-teal-500 text-white' : 'hover:bg-teal-500 hover:text-white'
          ]"
          @click="setCategory('filter-branding')"
          role="button"
          tabindex="0"
          :aria-pressed="activeCategory === '*'"

        >
          Web
        </li>
      </ul>

      <!-- Portfolio Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6">
        <!-- <P v-for="(item, index) in items">{{ item.title ?? "-" }}</P> -->
        <div
          v-for="(item, index) in filteredItems"
          :key="item.slug"
          :class="['portfolio-item isotope-item', item.category, 'relative overflow-hidden rounded-lg shadow-lg group']"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
        
          <img
            :src="item.image.replace('C:/Users/Veena.S/Desktop/Kelly/kelly_project/public', '')"
            :alt="item.title"
            class="w-full h-auto object-cover"
            loading="lazy"
          />

          <!-- Hover overlay -->
          <div
            class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4"
          >
            <h4 class="text-base font-semibold text-gray-800 mb-1">{{ item.title }}</h4>
            <p class="text-sm text-gray-600">{{ item.subtitle }}</p>
            <div class="flex items-center mt-2 space-x-3">
              <a
                :href="item.image"
                class="glightbox text-gray-700 hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`View larger image of ${item.title}`"
              >
                <i class="bi bi-plus-circle text-xl"></i>
              </a>
              <NuxtLink
                :to="`/portfolio/${item.id}`"
                class="text-gray-700 hover:text-primary"
                :aria-label="`View details of ${item.title}`"
              >
                <i class="bi bi-link-45deg text-xl"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.portfolio-page {
  scroll-behavior: smooth;
}

.img{
    width: 300px;
    height: 200px;
}

/* Optional smoother hover effect on overlay */
.group-hover\:translate-y-0 {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
