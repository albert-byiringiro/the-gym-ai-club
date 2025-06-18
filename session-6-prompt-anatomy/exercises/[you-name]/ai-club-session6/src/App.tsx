import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProductGrid from './components/ProductGrid'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-6 text-2xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <ProductGrid />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
