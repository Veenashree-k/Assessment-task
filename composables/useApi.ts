// composables/useApi.ts
export const useApi = async <T>(endpoint: string): Promise<T> => {
    try {
        const config = useRuntimeConfig()
        const res = await fetch(`https://localhost:7102/api/${endpoint}`, {
            method: 'GET', // or 'POST', etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_TOKEN_HERE',
                'Custom-Header': 'value'
            }
        })
        
        if (!res.ok) throw new Error('API failed')

        return (await res.json()) as T
    } catch (err) {
        console.error('API error:', err)
        throw null
    }
}


