// utils/serviceCall.ts
import { useRuntimeConfig } from '#app'

interface ApiCallOptions {
  endpoint: string
  method: 'GET' | 'POST'
  body?: any
}

// Add generic type <T> and return type Promise<T>
export const serviceCall = async <T>({ endpoint, method, body }: ApiCallOptions): Promise<T> => {
  const config = useRuntimeConfig()
  const url = `${config.public.apiBase}/${endpoint}`

  try {
    const response: T = await $fetch(url, {
      method,
      body: method !== 'GET' ? body : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response
  } catch (error) {
    console.error(`[API Error]: ${url}`, error)
    throw error
  }
}
