<template>
  <section id="about" class="py-16 bg-white" data-aos="fade-up">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-semibold">About</h2>
        <div class="w-20 h-1 bg-teal-500 mx-auto mt-2 mb-4"></div>
        <p class="text-xs text-gray-600 max-w-md mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- About Content -->
      <div class="flex flex-col lg:flex-row gap-10">
        <!-- Left Image -->
        <div class="w-full lg:w-1/3">
          <img
            src="/images/profile-img.jpg"
            alt="Profile picture of the author"
            class="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <!-- Right Content -->
        <article class="w-full lg:w-2/3">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            UI/UX Designer & Web Developer.
          </h3>
          <p class="italic text-xs text-gray-600 mb-6 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <!-- Two-column info -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div class="space-y-3">
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Birthday:
                </span>
                <span class="text-gray-600 text-xs">1 May 1995</span>   
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Website:
                </span>
                <span class="text-gray-600 text-xs"> www.example.com</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Phone:
                </span>
                <span class="text-gray-600 text-xs">+123 456 7890</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> City:
                </span>
                <span class="text-gray-600 text-xs"> New York, USA</span>
              </p>
            </div>

            <div class="space-y-3">
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Age:
                </span>
                <span class="text-gray-600 text-xs">30</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Degree:
                </span>
                <span class="text-gray-600 text-xs">Master</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Email:
                </span>
                <span class="text-gray-600 text-xs">email@example.com</span>
              </p>
              <p>
                <span class="font-semibold text-black text-xs">
                  <span class="text-teal-600 text-lg mr-1">›</span> Freelance:
                </span>
                <span class="text-gray-600 text-xs">Available</span>
              </p>
            </div>
          </div>

          <!-- Bottom paragraph -->
          <p class="text-[12px] text-gray-700 mt-6 leading-relaxed max-w-3xl">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4" data-aos="fade-up">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-semibold text-gray-800">Skills</h2>
        <p class="text-xs text-gray-600 mt-2 max-w-xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-8" data-aos="zoom-in">
        <SkillBar label="HTML" :value="100" />
        <SkillBar label="CSS" :value="90" />
        <SkillBar label="JavaScript" :value="75" />
        <SkillBar label="PHP" :value="80" />
        <SkillBar label="WordPress/CMS" :value="90" />
        <SkillBar label="Photoshop" :value="55" />
      </div>
    </div>
  </section>

  <!-- Facts -->
  <section id="facts" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl font-semibold text-gray-800 mb-2">Facts</h2>
        <div class="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
        <p class="text-xs text-gray-600 max-w-xl mx-auto">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div>
          <h3 class="text-4xl font-bold text-gray-900">232</h3>
          <div class="w-8 h-1 bg-teal-500 mx-auto my-2"></div>
          <p class="text-gray-500">Clients</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold text-gray-900">521</h3>
          <div class="w-8 h-1 bg-teal-500 mx-auto my-2"></div>
          <p class="text-gray-500">Projects</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold text-gray-900">1453</h3>
          <div class="w-8 h-1 bg-teal-500 mx-auto my-2"></div>
          <p class="text-gray-500">Hours Of Support</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold text-gray-900">32</h3>
          <div class="w-8 h-1 bg-teal-500 mx-auto my-2"></div>
          <p class="text-gray-500">Workers</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <Testimonials />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SkillBar from '~/components/SkillBar.vue'
import Testimonials from '~/components/Testimonials.vue'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})
</script>
