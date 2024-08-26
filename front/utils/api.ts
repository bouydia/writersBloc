// utils/api.ts

export async function apiRequest(url: string, options: RequestInit = {}): Promise<any> {
    const fullUrl = 'http://localhost:3001/api/' + url;

    try {
        const response = await fetch(fullUrl, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Something went wrong');
        }

        return response.json();
    } catch (error) {
        console.error('API Request Error:', error);
        throw error;
    }
}
