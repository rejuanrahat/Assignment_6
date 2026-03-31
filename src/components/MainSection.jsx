import { useState } from 'react'
import { ShoppingBag, ShoppingCart } from 'lucide-react'
import products from '../data/products.json'
import ProductCard from './ProductCard'
import CartItem from './CartItem'

const MainSection = ({ CartItem, addToCart, removeFromCart, clearCart }) => {
    const [activeTab, setActiveTab] = useState('products')

    const total = CartItems.reduce((sum, item) => sum + item.price, 0)

    return (
        <section id='products' className='py-20 px-4 bg-gray-50'>
            <div className='max-w-7xl mx-auto'>

                <div className='text-center mb-10'>
                    <h2 className='text-4xl font-extrabold text-gray-900 mb-3'>
                        Premium Digital <span className="text-violet-600">Tools</span>
                    </h2>

                    <p className='text-gray-500 text-lg max-w-xl mx-auto'>
                        Choose from our curated collection of powerful tools designed to elevate your productivity.
                    </p>
                </div>

                <div className='flex justify-center gap-3 mb-10'>
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${activeTab === 'products'
                            ? 'bg-violet-600 text-white shadow-lg'
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300'
                            }`}
                    >
                        <ShoppingBag className='w-4 h-4' />
                        Products
                    </button>

                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${activeTab === 'cart'
                            ? 'bg-violet-600 text-white shadow-lg'
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300'
                            }`}
                    >
                        <ShoppingCart className='w-4 h-4' />
                        Cart
                        {cardItems.length > 0 && (
                            <span className={`font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center ${activeTab === 'cart'
                                ? 'bg-white text-violet-600'
                                : 'bg-violet-600 text-white'
                                }`}>
                                {CartItems.length}
                            </span>
                        )}
                    </button>
                </div>

                {activeTab === 'products' && (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6'>
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}

                {activeTab === 'cart' && (
                    <div className='max-w-2xl mx-auto'>

                        {cardItems.length === 0 ? (
                            <div className='text-center py-20'>
                                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className='text-xl font-bold text-gray-700 mb-2'>Your cart is empty</h3>
                                <p className='text-gray-400 text-sm mb-6'>
                                    Browse our products and add items to your cart.
                                </p>
                                <button
                                    onClick={() => setActiveTab('products')}
                                    className='bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors'
                                >
                                    Browse Products
                                </button>
                            </div>
                        ) : (
                            <div>

                                <div className='space-y-3 mb-6'>
                                    {CartItems.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            item={item}
                                            onRemove={removeFromCart}
                                        />
                                    ))}
                                </div>

                                <div className='bg-white rounded-2xl border border-violet-100 shadow-md p-6'>
                                    <div className='flex justify-between items-center mb-4'>
                                        <span className='text-gray-600 font-medium'>
                                            Total ({CartItems.length} item{CartItems.length > 1 ? 's' : ''})
                                        </span>
                                        <span className='text-2xl font-extrabold text-violet-600'>
                                            ${total}
                                        </span>
                                    </div>
                                    <button
                                        onClick={clearCart}
                                        className='w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm'
                                    >
                                        proceed to checkout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default MainSection