import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id)
    if (exists) {
      toast.warning(`"${product.name}" is already in the cart!`)
      return
    }
    setCartItems([...cartItems, product])
    toast.success(`Added "${product.name}" to the cart!`)
  }

  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id)
    setCartItems(cartItems.filter((item) => item.id !== id))
    toast.error(`"${item.name}" removed from the cart!`)
  }

  const clearCart = () => {
    if (cartItems.length === 0) return
    setCartItems([])
    toast.success('Checkout successful! Cart has been cleared.')
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Your app content here */}
    </>
  )
}

export default App
