<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { serviceCall } from '~/utils/serviceCall'
import { apiEndpoints } from '~/utils/apiEndpoints'
import LoadingBlock from '~/components/LoadingBlock.vue'

// Interfaces
interface ResumeItem {
  id: number
  sectionTitle: string
  orderNumber: number
  title: string
  organization: string
  startDate: string | null
  endDate: string | null
  description: string
  isDeleted: boolean
}

// Refs
const loading = ref(true)
const summary = ref<ResumeItem | null>(null)
const education = ref<ResumeItem[]>([])
const experience = ref<ResumeItem[]>([])

// Format functions
const formatDate = (date: string | null) => {
  if (!date) return 'Present'
  const d = new Date(date)
  return d.getFullYear().toString()
}

const splitDescription = (text: string) => {
  return text
    .split(/\\n|•/g)
    .map(line => line.trim())
    .filter(Boolean)
}

// Lifecycle
onMounted(async () => {
  try {
    const data = await serviceCall<ResumeItem[]>({
        endpoint: apiEndpoints.data.resume.endpoint,
        method: apiEndpoints.data.resume.method
    })

    summary.value = data.find(item => item.sectionTitle === 'Summary') || null
    education.value = data
      .filter(item => item.sectionTitle === 'Education')
      .sort((a, b) => a.orderNumber - b.orderNumber)

    experience.value = data
      .filter(item => item.sectionTitle === 'Professional Experience')
      .sort((a, b) => a.orderNumber - b.orderNumber)

  } catch (err) {
    console.error('Resume API error:', err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section id="resume" class="py-16 bg-white text-gray-800" data-aos="fade-in">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-semibold">Resume</h2>
        <div class="w-20 h-1 bg-teal-500 mx-auto mt-2 mb-4"></div>
        <p class="text-xs text-gray-700">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center">Loading...</div>

      <!-- Resume Content -->
      <div v-else class="grid md:grid-cols-2 gap-12">
        <!-- Summary & Education -->
        <div>
          <!-- Summary -->
          <h3 class="text-2xl font-semibold mb-6">Summary</h3>
          <div v-if="summary" class="relative pl-10 mb-10 space-y-3">
            <div class="absolute left-2.5 top-0 bottom-0 w-0.5 bg-teal-500"></div>
            <div class="absolute -top-3 left-0.5 w-4 h-4 rounded-full border-2 border-teal-500 bg-white z-10"></div>
            <h4 class="text-xl text-gray-600 font-medium">{{ summary.title }}</h4>
            <p class="italic text-xs mb-2">{{ summary.organization }}</p>
            <p class="text-xs text-gray-800">{{ summary.description }}</p>
          </div>

          <!-- Education -->
          <h3 class="text-2xl font-semibold mb-6">Education</h3>
          <div class="space-y-12">
            <div
              v-for="edu in education"
              :key="edu.id"
              class="relative pl-10 space-y-3 mb-8"
            >
              <div class="absolute left-1 top-0 h-full border-l-2 border-teal-500"></div>
              <div class="absolute -top-3 -left-0.5 w-4 h-4 rounded-full border-2 border-teal-500 bg-white z-10"></div>
              <h4 class="text-lg text-gray-600 font-medium">{{ edu.title }}</h4>
              <p class="text-xs text-black font-semibold">
                {{ formatDate(edu.startDate) }} - {{ formatDate(edu.endDate) }}
              </p>
              <p class="italic text-xs mb-1">{{ edu.organization }}</p>
              <p class="text-xs text-gray-800">{{ edu.description }}</p>
            </div>
          </div>
        </div>

        <!-- Professional Experience -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">Professional Experience</h3>
          <div class="space-y-12">
            <div
              v-for="exp in experience"
              :key="exp.id"
              class="relative pl-10 space-y-3 mb-8"
            >
              <div class="absolute left-1 top-0 h-full border-l-2 border-teal-500"></div>
              <div class="absolute -top-3 -left-0.5 w-4 h-4 rounded-full border-2 border-teal-500 bg-white z-10"></div>
              <h4 class="text-lg text-gray-700 font-medium">{{ exp.title }}</h4>
              <p class="text-sm text-black font-semibold">
                {{ formatDate(exp.startDate) }} - {{ formatDate(exp.endDate) }}
              </p>
              <p class="italic text-xs mb-1">{{ exp.organization }}</p>
              <ul class="text-xs list-disc list-inside text-gray-800 space-y-2">
                <li v-for="(line, i) in splitDescription(exp.description)" :key="i">{{ line }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
