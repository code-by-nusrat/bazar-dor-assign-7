const BASE = 'https://openapi.programming-hero.com/api/bazardor';

// Returns the data, or `fallback` if anything goes wrong. Never throws.
export async function getApi<T>(path: string, fallback: T): Promise<T> {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const res = await fetch(`${BASE}${path}`, {
                next: { revalidate: 300 }, // cache 5 minutes
            });

            const type = res.headers.get('content-type') ?? '';
            if (res.ok && type.includes('application/json')) {
                return (await res.json()) as T;
            }
        } catch {
            // try again
        }
        await new Promise((r) => setTimeout(r, 500 * attempt));
    }
    return fallback;
}