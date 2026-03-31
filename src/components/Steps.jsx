const steps = [
    {
        number: '01',
        title: 'Create Account',
        description: 'Sign up for free in seconds. No credit card required to get started.',
        image: '/user.png',
    },
    {
        number: '02',
        title: 'Choose Products',
        description: 'Browse our catalog and select the tools that fit your needs.',
        image: '/package.png',
    },
    {
        number: '03',
        title: 'Start Creating',
        description: 'Download and start using your premium tools immediately.',
        image: '/rocket.png',
    },
]

const Steps = () => {
    return (
        <section className="py-20 px-4 bg-blue-50">
            <div className="max-w-5xl mx-auto">

                <div className="border border-dashed border-blue-300 rounded-2xl overflow-hidden">

                    <div className="text-center py-10 px-4 border-b border-dashed border-blue-300">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
                            Get Started In 3 Steps
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Start using premium digital tools in minutes, not hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={step.number}
                                className={`relative p-10 text-center bg-white ${index < steps.length - 1
                                    ? 'border-b md:border-b-0 md:border-r border-dashed border-blue-300'
                                    : ''
                                    }`}>


                                <div className="absolute top-4 right-4 w-8 h-8 bg-violet-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                    {step.number}
                                </div>

                                <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center mx-auto mb-6">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>

                                <h3 className="text-lg font-extrabold text-gray-900 mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps