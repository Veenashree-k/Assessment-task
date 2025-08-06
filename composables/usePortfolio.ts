import { onMounted } from 'vue'

export function usePortfolio() {
  onMounted(async () => {
    if (process.client) {
      const Isotope = (await import('isotope-layout')).default
      const GLightbox = (await import('glightbox')).default
      await import('glightbox/dist/css/glightbox.css')

      // Initialize Isotope layout
      const grid = document.querySelector('.isotope-container') as HTMLElement | null
      if (!grid) return

      const iso = new Isotope(grid, {
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
      })

      // Filter buttons
      const filters = document.querySelectorAll('.portfolio-filters li')
      filters.forEach((filterBtn) => {
        filterBtn.addEventListener('click', () => {
          filters.forEach((btn) => btn.classList.remove('filter-active'))
          filterBtn.classList.add('filter-active')
          const filterValue = filterBtn.getAttribute('data-filter') ?? '*'
          iso.arrange({ filter: filterValue })
        })
      })

      // Initialize GLightbox
      GLightbox({ selector: '.glightbox' })
    }
  })
}
