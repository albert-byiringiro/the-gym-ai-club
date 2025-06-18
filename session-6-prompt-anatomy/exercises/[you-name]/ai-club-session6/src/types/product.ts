export interface Product {
  id: string
  name: string
  price: number
  image: string
  inStock: boolean
  category: string
  rating: number
  description?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  avatar?: string
}
