import { Play, ArrowRight } from 'lucide-react'

const Banner = () => {
    return (
        <section className='bg-white py-20 px-4 border-b border-gray-100'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center gap-12'>

                    <div className='flex-1 text-left'>
                        <span className='inline-flex items-center gap-2 bg-violet-50 text-violet-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-violet-200'>
                            <span className='w-2 h-2 bg-violet-500 rounded-full'></span>
                            New: AI-Powered Tools Available
                        </span>

                        <h1 className='text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6'>
                            Supercharge Your
                            <br />
                            Digital Workflow
                        </h1>

                        <p className='text-gray-500 text-lg leading-relaxed max-w-lg mb-4'>
                            Access premium AI tools, design assets, templates, and productivity
                            software — all in one place. Start creating faster today.
                        </p>

                        <a
                            href="#products"
                            className='inline-flex items-center gap-1 text-violet-600 font-semibold text-sm mb-8 hover:underline'
                        >
                            Explore Products
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <div className='flex flex-col sm:flex-row gap-4'>
                            <a
                                href="#products"
                                className='bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-violet-300 text-center text-sm'
                            >
                                Explore Products
                            </a>
                            <a
                                href="#products"
                                className='inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-violet-400 text-gray-700 hover:text-violet-600 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm'
                            >
                                <span className='w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center'>
                                    <Play className='w-3 h-3 fill-gray-600' />
                                </span>
                                Watch Demo
                            </a>
                        </div>
                    </div>

                    <div className='flex-1 flex justify-center'>
                        <div className='w-full max-w-lg rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl'>
                            <img
                                src="/banner.png"
                                alt="Banner" 
                                className='w-full h-full object-cover object-center'
                                />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner