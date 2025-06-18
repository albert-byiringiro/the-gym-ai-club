// Placeholder for API service implementations
// Participants will enhance this during exercises

export const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export class ApiError extends Error {
  public status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

// Basic fetch wrapper - participants will enhance this
export async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new ApiError(response.status, `HTTP ${response.status}`)
  }

  return response.json()
}
