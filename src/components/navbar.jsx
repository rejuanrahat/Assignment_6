import { ShoppingCart } from 'lucide-react'

const Navbar = ({ cartCount }) => {
    return (
        <nav className='bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>

                    <div className='flex items-center'>
                        <span className='text-2xl font-extrabold text-violet-600 tracking-tight'>
                            DigiTools
                        </span>
                    </div>

                    <div className='hidden md:flex items-center gap-8'>
                        {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className='text-gray-600 hover:text-violet-600 font-medium text-sm transition-colors duration-200
                                '>
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='relative cursor-pointer'>
                            <ShoppingCart className='h-6 w-6 text-gray-600 hover:text-violet-600 transition-colors' />
                            {cartCount > 0 && (
                                <span className='absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center'>
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        <a
                            href="#"
                            className='hidden sm:block text-gray-600 hover:text-violet-600 font-medium text-sm transition-colors'
                        >
                            Login
                        </a>

                        <a
                            href="products"
                            className='bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-violet-300'
                        >
                            Get Started
                        </a>
                    </div>


                </div>
            </div>
        </nav>
    )
}

export default Navbar