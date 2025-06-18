import React from 'react'
import ProductCard from './ProductCard'
import { type Product } from '../types/product'

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80',
    inStock: true,
    category: 'Electronics',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 999,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80',
    inStock: true,
    category: 'Electronics',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'AirPods Pro',
    price: 249,
    image:
      'https://images.unsplash.com/photo-1606813909346-5c8a0a0d9c7a?auto=format&fit=crop&w=300&q=80',
    inStock: false,
    category: 'Electronics',
    rating: 4.7,
  },
]

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sampleProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
