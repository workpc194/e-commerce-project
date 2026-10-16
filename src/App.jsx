import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router'
import PageNot from './pages/PageNot'
import CategoriePage from './pages/CategoriePage'
import ProductPage from './pages/ProductPage'
import WatchlistPage from './pages/WatchlistPage'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <div className='bg-white scroll-smooth'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoriePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/watchlist' element={<WatchlistPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<PageNot />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App