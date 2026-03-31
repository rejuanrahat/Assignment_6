import { Check, ShoppingCart } from 'lucide-react'

const tagStyles = {
    popular: 'bg-violet-100 text-violet-700',
    new: 'bg-blue-100 text-blue-700',
    'best-seller': 'bg-amber-100 text-amber-700',
}

const productCard = ({ product, onAddToCart }) => {
    const { name, description, price, period, tag, tagType, features, icon } = product

    return (
        <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col p-6'>

            <div className='flex items-start justify-between mb-4'>
                <div className='text-4xl'> {icon} </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagStyles[tagType] || 'bg-gray-100 text-gray-600'}`}>
                    {tag}
                </span>
            </div>

            <h3 className='text-lg font-bold text-gray-900 mb-2'>{name}</h3>

            <p className='text-gray-500 text-sm leading-relaxed mb-4 flex-1'>{description}</p>

            <ul className='space-y-1.5 mb-5'>
                {features.map((feature) => (
                    <li key={feature} className='flex items-center gap-2 text-sm text-gray-600'>
                        <Check className="w-4 h-4 text-violet-500 shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>

            <div className='flex items-baseline gap-1 mb-4'>
                <span className='text-3xl font-extrabold text-gray-900'>${price}</span>
                <span className="text-gray-400 text-sm">/{period}</span>
            </div>

            <button
                onClick={() => onAddToCart(product)}
                className='w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200'
            >
                <ShoppingCart className='w-5 h-5' />
                Buy Now
            </button>
        </div>
    )
}

export default productCard