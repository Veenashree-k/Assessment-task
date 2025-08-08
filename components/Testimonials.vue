<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = ref([
  {
    img: '/images/testimonials-1.jpg',
    name: 'Saul Goodman',
    title: 'CEO & Founder',
    stars: 5,
    text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
  },
  {
    img: '/images/testimonials-2.jpg',
    name: 'Sara Wilsson',
    title: 'Designer',
    stars: 5,
    text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
  },
  {
    img: '/images/testimonials-3.jpg',
    name: 'Jena Karlis',
    title: 'Store Owner',
    stars: 5,
    text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
  },
  {
    img: '/images/testimonials-4.jpg',
    name: 'Matt Brandon',
    title: 'Freelancer',
    stars: 5,
    text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
  },
  {
    img: '/images/testimonials-5.jpg',
    name: 'John Larson',
    title: 'Entrepreneur',
    stars: 5,
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
  }
])
</script>

<template>
  <section id="testimonials" class="py-16 bg-white">
    <div class="text-center mb-12" data-aos="fade-up">
      <h2 class="text-3xl font-semibold mb-2">Testimonials</h2>
      <p class="text-gray-600 max-w-xl mx-auto text-xs px-4 sm:px-0">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>
    </div>

    <Swiper
      :modules="[Pagination, Autoplay]"
      :loop="true"
      :speed="600"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :pagination="{ clickable: true, el: '.testimonial-pagination' }"
      :slides-per-view="1"
      :centered-slides="true"
      class="mx-auto max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl"
    >
      <SwiperSlide
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="text-center px-6"
      >
        <img
          :src="testimonial.img"
          :alt="testimonial.name"
          class="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 shadow-lg object-cover"
        />

        <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ testimonial.name }}</h3>
        <p class="text-gray-500 text-xs mb-3">{{ testimonial.title }}</p>

        <div class="flex justify-center space-x-1 text-yellow-400 mb-4">
          <i
            v-for="n in testimonial.stars"
            :key="n"
            class="bi bi-star-fill"
            aria-hidden="true"
          ></i>
        </div>

        <p
          class="italic text-gray-700 leading-relaxed px-4 max-w-full mx-auto 
                 text-[11px] sm:text-sm md:text-base lg:text-base"
        >
          <span class="text-teal-400 text-2xl font-bold mr-2 align-top mb-2">“</span>
          {{ testimonial.text }}
          <span class="text-teal-400 text-2xl font-bold ml-2 mb-2 align-bottom">”</span>
        </p>
      </SwiperSlide>
    </Swiper>

    <!-- ✅ Pagination container placed below Swiper -->
    <div class="testimonial-pagination mt-6 flex justify-center"></div>
  </section>
</template>

<style scoped>
.testimonial-pagination .swiper-pagination-bullet {
  background-color: #d1d5db;
  opacity: 0.6;
  margin: 0 4px;
  width: 10px;
  height: 10px;
  border-radius: 9999px;
}

.testimonial-pagination .swiper-pagination-bullet-active {
  background-color: #14b8a6; /* teal-500 */
  opacity: 1;
}
</style>
