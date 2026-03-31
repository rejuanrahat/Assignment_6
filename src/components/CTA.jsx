const CTA = () => {
    return (
        <section className="py-16 px-4 bg-linear-to-r from-violet-600 to-purple-600">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Transform Your Workflow?
                </h2>
                <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of professionals who are already using our AI-powered tools to boost their productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-violet-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
                        Get Started Free
                    </button>
                    <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-violet-600 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CTA