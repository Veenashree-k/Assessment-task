<template>
  <section id="contact" class="bg-gray-100 py-16" data-aos="fade-down">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-center text-4xl font-semibold">Contact</h2>
      <div class="w-20 h-1 bg-teal-500 mx-auto mt-2 mb-4"></div>
      <p class="text-center mb-12 text-gray-600 text-xs">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Left Container: Info & Map -->
        <div class="bg-white p-8 rounded-lg shadow-md space-y-6">
          <!-- Address -->
          <div class="flex items-start space-x-4 group">
            <div
              class="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full group-hover:bg-teal-600 group-hover:text-white transition"
            >
              <!-- Location Icon -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 21c-4.4 0-8-3.6-8-8 0-3.3 5-8 8-8s8 4.7 8 8c0 4.4-3.6 8-8 8z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Address</h3>
              <p class="text-sm">A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <!-- Call Us -->
          <div class="flex items-start space-x-4 group">
            <div
              class="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full group-hover:bg-teal-600 group-hover:text-white transition"
            >
              <!-- Phone Icon -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h2l2 5-2 2c1.3 2.6 3.4 4.7 6 6l2-2 5 2v2a2 2 0 01-2 2h-1c-8 0-14-6-14-14V5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Call Us</h3>
              <p class="text-sm">+1 5589 55488 55</p>
            </div>
          </div>

          <!-- Email Us -->
          <div class="flex items-start space-x-4 group">
            <div
              class="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full group-hover:bg-teal-600 group-hover:text-white transition"
            >
              <!-- Email Icon -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Email Us</h3>
              <p class="text-sm">info@example.com</p>
            </div>
          </div>

          <!-- Map -->
          <div>
            <iframe
              class="w-full h-48 rounded-md"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>

        <!-- Right Container: Contact Form -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <form @submit.prevent="handleSubmit" class="space-y-6" data-aos="zoom-in" novalidate>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block mb-2 text-xs">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  v-model="form.name"
                  required
                  class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-teal-500"
                />
              </div>
              <div>
                <label for="email" class="block mb-2 text-xs">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  v-model="form.email"
                  required
                  class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-teal-500"
                />
              </div>
            </div>
            <div>
              <label for="subject" class="block mb-2 text-xs ">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                v-model="form.subject"
                required
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-teal-500"
              />
            </div>
            <div>
              <label for="message" class="block mb-2 text-xs ">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                v-model="form.message"
                required
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-teal-500"
              ></textarea>
            </div>
            <div class="text-center">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="bg-teal-500 text-white px-5 py-3.5 rounded-full hover:bg-teal-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
            <p v-if="successMessage" class="text-green-600 text-center mt-4">{{ successMessage }}</p>
            <p v-if="errorMessage" class="text-red-600 text-center mt-4">{{ errorMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  if (!form.name || !form.email || !form.subject || !form.message) {
    errorMessage.value = 'Please fill in all fields.'
    return
  }

  // Basic email regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''

    successMessage.value = 'Your message has been sent successfully!'
  } catch (error) {
    errorMessage.value = 'An error occurred while sending your message.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
