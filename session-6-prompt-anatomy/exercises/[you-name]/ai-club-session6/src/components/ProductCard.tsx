import React from 'react'
import { type Product } from '../types/product'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="mb-2 text-sm text-gray-600">{product.category}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-sm text-gray-600">★ {product.rating}</span>
        </div>
        <button
          className={`w-full py-2 px-4 rounded-lg font-medium ${
            product.inStock
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
