import { useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import MainSection from './components/MainSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id)
    if (exists) {
      toast.warning(`"${product.name}" is already in your cart!`)
      return
    }
    setCartItems([...cartItems, product])
    toast.success(`"${product.name}" added to cart! 🛒`)
  }

  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id)
    setCartItems(cartItems.filter((item) => item.id !== id))
    toast.error(`"${item.name}" removed from cart!`)
  }

  const clearCart = () => {
    if (cartItems.length === 0) return
    setCartItems([])
    toast.success('Checkout successful! Cart has been cleared. ✅')
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App