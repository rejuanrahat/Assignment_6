import { Trash2 } from 'lucide-react'

const CartItem = ({ item, onRemove }) => {
    const { id, name, icon, price, period } = item

    return (
        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-between gap-4'>

            <div className='flex items-center gap-4'>
                <div className='text-3xl bg-violet-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0'>
                    {icon}
                </div>
                <div>
                    <h4 className='font-semibold text-gray-900 text-sm'>{name}</h4>
                    <p className='text-gray-500 text-xs mt-0.5'>${price}/{period}</p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <span className='text-violet-600 font-bold text-lg'>${price}</span>
                <button
                    onClick={() => onRemove(id)}
                    className='flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-700 font-semibold text-sm px-4 py-2 rounded-xl transition-colors duration-200'
                >
                    <Trash2 className='w-4 h-4' />
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem