import React from "react";

const services = [
    {
        category: "PERFORMANCE",
        title: "Web systems",
        description: "High-performance platforms built for scale. We specialize in complex architectures that remain fast and reliable.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Open%20source-bro.svg",
    },
    {
        category: "EXPERIENCE",
        title: "Mobile logic",
        description: "Refined iOS and Android applications. We build native experiences focused on user retention and interface speed.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Mobile%20development-bro.svg",
    },
    {
        category: "INFRASTRUCTURE",
        title: "Cloud scale",
        description: "Resilient infrastructure that grows with your user base, ensuring zero downtime and optimized maintenance.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Server-bro.svg",
    },
    {
        category: "CONSULTING",
        title: "Tech strategy",
        description: "Consultancy on stack selection and digital transformation. We align technology with your business goals.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Mobile%20Marketing-bro.svg",
    },
    {
        category: "OPERATIONS",
        title: "System support",
        description: "Managed maintenance and proactive monitoring to ensure your operations run seamlessly at all times.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Operating%20system%20upgrade-cuate.svg",
    },
    {
        category: "COMMERCE",
        title: "Ecommerce solutions",
        description: "End-to-end online stores with seamless payment integration, inventory management, and conversion optimization.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Ecommerce%20web%20page-bro.svg",
    }
];

export default function ServicesSection() {
    return (
        <section className="w-full bg-[#f8f9fa] font-sans py-16 lg:py-24 border-t border-gray-200">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Section Header */}
                <div className="text-center md:text-left mb-16 max-w-3xl">
                    <h2 className="text-[32px] sm:text-[40px] font-normal text-[#202124] tracking-tight mb-4">
                        Solutions tailored for your business.
                    </h2>
                    <p className="text-[16px] text-[#5f6368] leading-relaxed">
                        Whether you need a complete digital transformation, scalable cloud architecture, or a stunning new user interface, our comprehensive suite of IT services is designed to elevate your enterprise.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group items-start"
                        >
                            {/* Illustration Container */}
                            <div className="w-full h-40 mb-6 flex items-center justify-center bg-gray-50/50 rounded-lg overflow-hidden group-hover:bg-gray-50 transition-colors duration-300">
                                <img
                                    src={service.illustration}
                                    alt={service.title}
                                    className="w-full h-full object-contain drop-shadow-sm scale-[1.35] group-hover:scale-[1.45] transition-transform duration-500"
                                />
                            </div>

                            <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">
                                {service.category}
                            </h4>
                            <h3 className="text-[20px] font-medium text-[#202124] tracking-tight mb-3">
                                {service.title}
                            </h3>
                            <p className="text-[15px] text-[#5f6368] leading-[1.6]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
