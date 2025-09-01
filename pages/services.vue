<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadingBlock from '~/components/LoadingBlock.vue'
import { serviceCall } from '~/utils/serviceCall'
import { apiEndpoints } from '~/utils/apiEndpoints'

interface Service {
  id: number
  iconClass?: string
  icon: string
  title: string
  description: string
  iconColor: string
  iconBgHover: string
}

// Map of all 6 icon classes to their colors and hover bg
const colorMap: Record<string, { iconColor: string; iconBgHover: string }> = {
  'bi bi-activity': {
    iconColor: 'text-red-500',
    iconBgHover: 'group-hover:bg-red-500',
  },
  'bi bi-broadcast': {
    iconColor: 'text-blue-500',
    iconBgHover: 'group-hover:bg-blue-500',
  },
  'bi bi-bag-check': {
    iconColor: 'text-green-500',
    iconBgHover: 'group-hover:bg-green-500',
  },
  'bi bi-diagram-3': {
    iconColor: 'text-yellow-500',
    iconBgHover: 'group-hover:bg-yellow-500',
  },
  'bi bi-clipboard': {
    iconColor: 'text-purple-500',
    iconBgHover: 'group-hover:bg-purple-500',
  },
  'bi bi-chat-dots': {
    iconColor: 'text-pink-500',
    iconBgHover: 'group-hover:bg-pink-500',
  },
}

// state
const services = ref<Service[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const data = await serviceCall<Service[]>({
        endpoint: apiEndpoints.data.services.endpoint,
        method: apiEndpoints.data.services.method
    })
    services.value = data.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      icon: item.iconClass || 'bi bi-question-circle', 
      iconColor: colorMap[item.iconClass ?? '']?.iconColor || 'text-teal-500', 
      iconBgHover: colorMap[item.iconClass ?? '']?.iconBgHover || 'group-hover:bg-teal-500',
    }))
  } catch (err) {
    console.error('Services API error:', err)
  } finally {
    loading.value = false
  }
})
</script>


<template>
  <section id="services" class="py-16 bg-white" data-aos="zoom-in-down">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-semibold text-gray-800">Services</h2>
        <div class="w-20 h-1 bg-teal-500 mx-auto mt-2 mb-4"></div>
        <p class="text-xs text-gray-600 mt-2">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-10">
        <p class="text-gray-500">Loading services...</p>
      </div>

      <!-- Services Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          tabindex="0"
          class="group w-full h-auto sm:w-[342px] sm:h-[367.4px] bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-center focus:outline-none focus:ring-4 focus:ring-teal-300"
        >
          <article>
            <!-- Icon inside rounded background -->
            <div
              class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100 transition-colors duration-300"
              :class="service.iconBgHover"
            >
              <i
                :class="[service.icon, 'text-3xl transition-colors duration-300', 'group-hover:text-white', service.iconColor]"
                aria-hidden="true"
              ></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm">
              {{ service.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
}
</style>
