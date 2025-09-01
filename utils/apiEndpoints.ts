import Testimonials from "~/components/Testimonials.vue";

export const apiEndpoints = {
    data: {
        pages: {endpoint: 'Data/pages', method:'GET'},
        about: {endpoint: 'Data/about', method:'GET'},
        skills: {endpoint: 'Data/skills', method: 'GET'},
        facts: {endpoint: 'Data/facts', method: 'GET'},
        testimonials:{endpoint: 'Data/testimonials', method:'GET'},
        resume: { endpoint: 'Data/resume', method: 'GET'},
        services: { endpoint: 'Data/services', method: 'GET'},
        categories: {endpoint: 'Data/categories', method: 'GET'},
        products: {endpoint: 'Data/products', method:'GET'},
        contactForm: {endpoint: 'Data/contactform', method: 'POST'},
    },
}as const