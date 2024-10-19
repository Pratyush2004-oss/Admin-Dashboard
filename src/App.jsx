import React from 'react'
import { Route, Routes } from 'react-router-dom'

import OverviewPage from './pages/OverviewPage'
import ProductPage from './pages/ProductPage'

import Sidebar from './components/common/Sidebar'

const App = () => {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>

      {/* Background to the application */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80 ' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>

      <Sidebar />
      <Routes>
        <Route path='/' element={<OverviewPage />} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>

    </div>
  )
}

export default App