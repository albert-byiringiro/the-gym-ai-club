import React from 'react'

const Sidebar: React.FC = () => {
  const menuItems = [
    { label: 'Dashboard', active: true },
    { label: 'Products', active: false },
    { label: 'Orders', active: false },
    { label: 'Customers', active: false },
    { label: 'Analytics', active: false },
  ]

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 shadow-sm">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li key={item.label}>
              <a
                href="#"
                className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                  item.active
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
