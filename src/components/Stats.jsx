const stats = [
    { value: '50k+', label: 'Active users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
]

const Stats = () => {
    return (
        <section className="py-10 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/30">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-white text-center px-16 py-4 md:py-0">
                                <div className="text-4xl font-extrabold mb-1">{stat.value}</div>
                                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Stats