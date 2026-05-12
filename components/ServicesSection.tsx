import React from "react";

const services = [
    {
        category: "Performance",
        title: "Web systems",
        description: "High-performance platforms built for scale. We specialize in complex architectures that remain fast and reliable.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Open%20source-bro.svg",
    },
    {
        category: "Experience",
        title: "Mobile logic",
        description: "Refined iOS and Android applications. We build native experiences focused on user retention and interface speed.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Mobile%20development-bro.svg",
    },
    {
        category: "Infrastructure",
        title: "Cloud scale",
        description: "Resilient infrastructure that grows with your user base, ensuring zero downtime and optimized maintenance.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Server-bro.svg",
    },
    {
        category: "Consulting",
        title: "Tech strategy",
        description: "Consultancy on stack selection and digital transformation. We align technology with your business goals.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Mobile%20Marketing-bro.svg",
    },
    {
        category: "Operations",
        title: "System support",
        description: "Managed maintenance and proactive monitoring to ensure your operations run seamlessly at all times.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Operating%20system%20upgrade-cuate.svg",
    },
    {
        category: "Commerce",
        title: "Ecommerce solutions",
        description: "End-to-end online stores with seamless payment integration, inventory management, and conversion optimization.",
        illustration: "https://ik.imagekit.io/dypkhqxip/Ecommerce%20web%20page-bro.svg",
    }
];

export default function ServicesSection() {
    return (
        <section className="w-full bg-[#f8f9fa] font-sans py-16 lg:py-24 border-t border-gray-100">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Section Header */}
                <div className="text-center md:text-left mb-12 max-w-3xl">
                    <span className="text-[#E61E32] font-medium text-[11px] tracking-wider mb-2 block">Our Capabilities</span>
                    <h2 className="text-[28px] sm:text-[34px] font-normal text-gray-900 tracking-tight mb-3 leading-tight">
                        Solutions tailored for your business.
                    </h2>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-normal">
                        Whether you need a complete digital transformation, scalable cloud architecture, or a stunning new user interface, our comprehensive suite of IT services is designed to elevate your enterprise.
                    </p>
                </div>

                {/* Services Grid with "File" Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
                    {services.map((service, index) => (
                        <div key={index} className="relative group pt-6">
                            {/* Refined Folder Tab with Slant */}
                            <div className="absolute top-0 left-0 flex items-end">
                                <div className="h-6 w-28 bg-white border-t border-x border-gray-200 rounded-tl-md relative z-20 transition-colors group-hover:border-[#E61E32]/30">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-1 h-1 rounded-full bg-[#E61E32]/20" />
                                    </div>
                                </div>
                                <div className="h-6 w-6 bg-white border-t border-r border-gray-200 -ml-[1px] relative z-20 transition-colors group-hover:border-[#E61E32]/30" 
                                     style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)', transform: 'scaleX(-1)' }} />
                            </div>
                            
                            {/* Main Card (Document Body) */}
                            <div className="relative bg-white p-6 border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_40px_-10px_rgba(230,30,50,0.08)] group-hover:border-[#E61E32]/20 transition-all duration-500 flex flex-col items-start min-h-[340px] z-10">
                                
                                {/* Background "Document Stack" Effect */}
                                <div className="absolute -bottom-2 -right-2 inset-0 bg-white border border-gray-100 -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                                
                                {/* Illustration Container */}
                                <div className="w-full h-32 mb-5 flex items-center justify-center bg-gray-50/50 overflow-hidden group-hover:bg-gray-50 transition-colors duration-500">
                                    <img
                                        src={service.illustration}
                                        alt={service.title}
                                        className="w-full h-full object-contain drop-shadow-sm scale-[1.2] group-hover:scale-[1.3] transition-transform duration-700 ease-out"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-[1px] bg-[#E61E32]/30" />
                                        <span className="text-[11px] font-medium text-[#E61E32] tracking-wide">
                                            {service.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-[18px] font-medium text-gray-900 tracking-tight leading-tight">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
