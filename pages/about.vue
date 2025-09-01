<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import SkillBar from '~/components/SkillBar.vue'
import Testimonials from '~/components/Testimonials.vue'
// import { $fetch } from 'ofetch'
import LoadingBlock from '~/components/LoadingBlock.vue'

import { apiEndpoints } from '~/utils/apiEndpoints'
import { serviceCall } from '~/utils/serviceCall'

interface About {
  title: string
  subtitle: string
  imageUrl?: string
  birthday?: string
  website?: string
  phone?: string
  city?: string
  degree?: string
  email?: string
  freelanceStatus?: string
  description?: string
  age?: number
}

interface Skill {
  label: string
  value: number
}

interface Fact {
  label: string
  value: number
}

interface Testimonial {
  name: string
  role: string
  message: string
  image?: string
}

const about = ref<About | null>(null)
const skills = ref<Skill[]>([])
const facts = ref<Fact[]>([])
const testimonials = ref<Testimonial[]>([])
const isLoading = ref(true)

function computeAge(birthday: string): number {
  const birthDate = new Date(birthday)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
function formatImageUrl(imagePath: string | undefined): string {
  if (!imagePath ||  imagePath == null) return '' 
  const normalizedPath = imagePath.replace(/\\/g, '/')
  const relativePath = normalizedPath.replace(/^.*\/public/, '')
  return relativePath.startsWith('/') ? relativePath : '/' + relativePath
}

function formatDate(dateString: string | Date): string {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // months are 0-indexed
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

onMounted(async () => {
  AOS.init({ duration: 800, once: true })

  try {
    const aboutResp = await serviceCall<About[]>({
      ...apiEndpoints.data.about,
    })
    if (Array.isArray(aboutResp) && aboutResp.length > 0) {
      const aboutData = aboutResp[0]!
      about.value = {
        ...aboutData,
        age: aboutData.birthday ? computeAge(aboutData.birthday) : undefined,
      } as About
    }

    const skillResp = await serviceCall<any[]>({
      ...apiEndpoints.data.skills,
    })
    skills.value = skillResp.map((skill) => ({
      label: skill.skillName,
      value: skill.percentage,
    }))

    facts.value = await serviceCall<Fact[]>({
      ...apiEndpoints.data.facts,
    })

    testimonials.value = await serviceCall<Testimonial[]>({
      ...apiEndpoints.data.testimonials,
    })
  } catch (err) {
    console.error('Failed to load about data:', err)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
    <div>
        <LoadingBlock v-if="isLoading"/>
        <div v-else>
  <!-- About Section -->
  <section v-if="about" id="about" class="py-16 bg-white" data-aos="fade-up">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-semibold">About</h2>
        <div class="w-20 h-1 bg-teal-500 mx-auto mt-2 mb-4"></div>
        <p class="text-xs text-gray-600 max-w-md mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-10">
        <div class="w-full lg:w-1/3">
          <img 
            :src="formatImageUrl(about.imageUrl)"
            alt="Profile" 
            class="w-full rounded-lg shadow-xl object-cover"
            loading="lazy"
          />
        </div>

         <article class="w-full lg:w-2/3">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ about.title }}
          </h3>
          <p class="italic text-xs text-gray-600 mb-6 max-w-lg">
            {{ about.subtitle }}</p>

          <!-- Two-column info -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div class="space-y-3">
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Birthday:
                </span>
                <span class="text-gray-600 text-xs">{{ about.birthday ? formatDate(about.birthday) : '-' }}</span>   
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Website:
                </span>
                <span class="text-gray-600 text-xs"> {{ about.website }}</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Phone:
                </span>
                <span class="text-gray-600 text-xs">{{ about.phone }}</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> City:
                </span>
                <span class="text-gray-600 text-xs"> {{ about.city }}</span>
              </p>
            </div>

            <div class="space-y-3">
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Age:
                </span>
                <span class="text-gray-600 text-xs">{{ about.age }}</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Degree:
                </span>
                <span class="text-gray-600 text-xs">{{ about.degree }}</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Email:
                </span>
                <span class="text-gray-600 text-xs">{{ about.email }}</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Freelance:
                </span>
                <span class="text-gray-600 text-xs">{{ about.freelanceStatus }}</span>
              </p>
            </div>
          </div>

          <!-- Bottom paragraph -->
          <p class="text-[12px] text-gray-700 mt-6 leading-relaxed max-w-3xl">
           {{ about.description }}
          </p>
        </article>
        </div>
    </div>
  </section>


  <!-- Loading -->
  <section v-else-if="isLoading" class="text-center py-16">
    <p class="text-gray-400 text-sm">Loading about data...</p>
  </section>

  <!-- Error -->
  <section v-else class="text-center py-16">
    <p class="text-red-500 text-sm">Failed to load about data.</p>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="py-16 bg-gray-50" v-if="skills.length">
    <div class="max-w-6xl mx-auto px-4" data-aos="fade-up">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-semibold text-gray-800">Skills</h2>
        <p class="text-xs text-gray-600 mt-2 max-w-xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-8" data-aos="zoom-in">
        <SkillBar v-for="(skill, index) in skills" :key="index" :label="skill.label" :value="skill.value" />
      </div>
    </div>
  </section>

  <!-- Facts Section -->
  <section id="facts" class="py-16 bg-white" v-if="facts.length">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl font-semibold text-gray-800 mb-2">Facts</h2>
        <div class="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
        <p class="text-xs text-gray-600 max-w-xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 text-center" data-aos="fade-up" data-aos-delay="100">
        <div v-for="(fact, index) in facts" :key="index">
          <h3 class="text-4xl font-bold text-gray-900">{{ fact.value }}</h3>
          <div class="w-8 h-1 bg-teal-500 mx-auto my-2"></div>
          <p class="text-gray-500">{{ fact.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <Testimonials v-if="testimonials.length" :items="testimonials" />
  </div>
  </div>
</template>


