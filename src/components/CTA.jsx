const CTA = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 py-20 px-4">
            <div className="max-w-3xl mx-auto text-center">

                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br />
                    Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <a
                        href="#products"
                        className="bg-white text-violet-600 hover:bg-violet-50 font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg text-sm"
                    >
                        Explore Products
                    </a>

                    <a
                        href="#pricing"
                        className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3.5 rounded-full transition-all duration-200 text-sm"
                    >
                        View Pricing
                    </a>
                </div>

                <p className="text-white/60 text-sm">
                    14-day free trial &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; Cancel anytime
                </p>
            </div>
        </section>
    )
}

export default CTA