import { Check } from 'lucide-react'

const plans = [
    {
        name: 'Starter',
        price: 19,
        period: 'month',
        description: 'Perfect for freelancers and individuals just getting started.',
        features: [
            '5 Digital Tools Access',
            '10GB Cloud Storage',
            'Email Support',
            'Basic Analytics',
            'Monthly Updates',
        ],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        name: 'Professional',
        price: 49,
        period: 'month',
        description: 'Ideal for growing teams and small businesses.',
        features: [
            'All 50+ Digital Tools',
            '100GB Cloud Storage',
            'Priority Support 24/7',
            'Advanced Analytics',
            'Team Collaboration',
            'Weekly Feature Updates',
        ],
        cta: 'Start Free Trial',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 99,
        period: 'month',
        description: 'Built for large organizations with custom requirements.',
        features: [
            'Unlimited Tools Access',
            '1TB Cloud Storage',
            'Dedicated Account Manager',
            'Custom Integrations',
            'SLA Guarantee',
            'White-label Options',
        ],
        cta: 'Contact Sales',
        highlighted: false,
    },
]


const Pricing = () => {
    return (
        <section id='pricing' className='py-20 px-4 bg-gradient-to-br from-violet-50 to-indigo-50'>
            <div className='max-w-7xl mx-auto'>


                <div className='text-center mb-14'>
                    <h2 className='text-4xl font-extrabold text-gray-900 mb-3'>
                        Simple, Transparent <span className='text-violet-600'>Pricing</span>
                    </h2>
                    <p className='text-gray-500 text-lg max-w-lg mx-auto'>
                        Choose the plan that fits your needs. Upgrade or downgrade anytime — no hidden fees.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-2xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${plan.highlighted
                                ? 'bg-violet-600 text-white shadow-2xl scale-105'
                                : 'bg-white border border-gray-100 shadow-md'
                                }`}
                        >
                            {plan.highlighted && (
                                <span className='self-start bg-white text-violet-600 text-xs font-bold px-3 py-1 rounded-full mb-4'>
                                    Most Popular
                                </span>
                            )}

                            <h3 className={`text-xl font-extrabold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                                {plan.name}
                            </h3>

                            <p className={`text-sm mb-6 ${plan.highlighted ? 'text-violet-200' : 'text-gray-500'}`}>
                                {plan.description}
                            </p>

                            <div className='flex items-baseline gap-1 mb-6'>
                                <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                                    ${plan.price}
                                </span>
                                <span className={`text-sm ${plan.highlighted ? 'text-violet-200' : 'text-gray-400'}`}>
                                    /{plan.period}
                                </span>
                            </div>

                            <ul className='space-y-3 mb-8 flex-1'>
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className={`flex items-center gap-2 text-sm ${plan.highlighted ? 'text-violet-200' : 'text-gray-600'}`}
                                    >
                                        <Check className={`w-4 h-4 shrink-0 ${plan.highlighted ? 'text-white' : 'text-violet-500'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full font-bold py-3 rounded-xl transition-all duration-200 text-sm ${plan.highlighted
                                    ? 'bg-white text-violet-600 hover:bg-violet-50'
                                    : 'bg-violet-600 text-white hover:bg-violet-700'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing