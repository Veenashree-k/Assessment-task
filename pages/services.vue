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

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
         v-for="(service, index) in services"
        :key="index"
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

<script setup lang="ts">
const services = [
  {
    icon: 'bx bx-pulse',
    title: 'Nesciunt Mete',
    description:
      'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    iconColor: 'text-teal-500',
    iconBgHover: 'group-hover:bg-teal-500',
  },
  {
    icon: 'bx bx-broadcast',
    title: 'Eosle Commodi',
    description:
      'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
    iconColor: 'text-orange-500',
    iconBgHover: 'group-hover:bg-orange-500',
  },
  {
    icon: 'bx bx-tv',
    title: 'Ledo Markt',
    description:
      'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
    iconColor: 'text-green-500',
    iconBgHover: 'group-hover:bg-green-500',
  },
  {
    icon: 'bx bx-vector',
    title: 'Asperiores Commodit',
    description:
      'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
    iconColor: 'text-red-500',
    iconBgHover: 'group-hover:bg-red-500',
  },
  {
    icon: 'bx bx-devices',
    title: 'Velit Doloremque',
    description:
      'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
    iconColor: 'text-purple-500',
    iconBgHover: 'group-hover:bg-purple-500',
  },
  {
    icon: 'bx bx-chat',
    title: 'Dolori Architecto',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
    iconColor: 'text-pink-500',
    iconBgHover: 'group-hover:bg-pink-500',
  },
]
</script>

<style scoped>
.group:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
}
</style>
