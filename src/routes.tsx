import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import About from './pages/About'

export const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default RoutesList
