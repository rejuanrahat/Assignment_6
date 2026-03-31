const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-950 text-gray-300 pt-16 pb-6 px-4">
            <div className="max-w-6xl mx-auto">


                <div className="border border-dashed border-gray-700 rounded-2xl p-10 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


                        <div>
                            <h2 className="text-white text-3xl font-extrabold mb-4">DigiTools</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Premium digital tools for creators, professionals, and businesses. Work smarter
                                with our suite of powerful tools.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-5 text-sm">Product</h4>
                            <ul className="space-y-3 text-sm">
                                {['Features', 'Pricing', 'Templates', 'Integrations'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-5 text-sm">Company</h4>
                            <ul className="space-y-3 text-sm">
                                {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-5 text-sm">Resources</h4>
                            <ul className="space-y-3 text-sm mb-8">
                                {['Help Center', 'Contact Support', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                    <li key={item}>
                                        <a href="" className="text-gray-400 hover:text-white transition-colors
                                        ">
                                            {item}
                                        </a>
                                    </li>))}
                            </ul>

                            <h4 className="text-white font-semibold mb-4 text-sm">Social Links</h4>
                            <div className="flex items-center gap-3">
                                <a
                                    href=""
                                    className="w-9 h-9 bg-gray-800 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
                                    </svg>
                                </a>

                                <a href="#" aria-label="Facebook"
                                    className="w-9 h-9 bg-gray-800 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
                                    </svg>
                                </a>

                                <a href="#" aria-label="Twitter"
                                    className="w-9 h-9 bg-gray-800 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-dashed border-gray-700 rounded-2xl px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Digitools. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                            <a key={item} href="#" className="text-gray-500 hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer