import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
            E-commerce Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, Admin</span>
            <div className="w-8 h-8 rounded-full bg-primary-500"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
