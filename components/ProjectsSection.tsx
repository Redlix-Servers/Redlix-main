"use client";

import React, { useRef, useEffect } from "react";

import Link from "next/link";

const projects = [
    {
        title: "Dhasha Media",
        slug: "dhasha-media",
        category: "Internal Operations Engine",
        image: "https://ik.imagekit.io/dypkhqxip/ab%20(1).png",
        description: "Custom internal operations system for media agency workflows. Automated bookings and complex workflows, improving efficiency.",
    },
    {
        title: "HSGA Telangana",
        slug: "hsga-telangana",
        category: "Government Infrastructure",
        image: "https://ik.imagekit.io/dypkhqxip/Untitled%20design%20(1).png",
        description: "Designed and developed the official HSGA Telangana landing page. Elevated digital presence with fast, accessible design.",
    },
    {
        title: "Forge Digital",
        slug: "forge-digital",
        category: "High-Performance B2B",
        image: "https://ik.imagekit.io/dypkhqxip/ab%20(3).png",
        description: "Multi-vendor digital platform with dynamic pricing. Helped double sales velocity post-launch for Forge Digital Technologies.",
    },
    {
        title: "HUS System",
        slug: "hus-system",
        category: "Government Infrastructure",
        image: "https://ik.imagekit.io/dypkhqxip/Untitled%20design.png",
        description: "Robust system engineered for large-scale state digital infrastructure. Precision engineering for complex governance use cases.",
    },
    {
        title: "NSS CMRIT Chapter",
        slug: "nss-cmrit",
        category: "Educational Organization",
        image: "https://ik.imagekit.io/dypkhqxip/ab%20(4).png",
        description: "Website built for the student chapter with improved design and UX. Boosted interaction and conversion with fast loading and intuitive UX.",
    },
    {
        title: "National E-Commerce Platform",
        slug: "national-ecommerce",
        category: "Retail & Commerce",
        image: "https://ik.imagekit.io/dypkhqxip/ab%20(2).png",
        description: "High-conversion online retail store with real-time inventory synchronization. Delivered seamless global checkout and multi-currency support.",
    },
];

// Duplicate projects multiple times to create a massive scrolling track for the "infinite" feel
const extendedProjects = [...projects, ...projects, ...projects, ...projects];

export default function ProjectsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Smooth scroll logic for the navigation arrows
    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            // Calculate scroll distance based on card width (400px) + gap (24px)
            // Calculate scroll distance based on card width + gap
            let scrollAmount = 300; // default mobile
            if (window.innerWidth >= 1024) {
                scrollAmount = 492; // lg width + gap
            } else if (window.innerWidth >= 640) {
                scrollAmount = 412; // sm width + gap
            }
            
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    // Auto-scroll logic for smooth infinite-like movement
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;
        let isHovered = false;

        const handleMouseEnter = () => isHovered = true;
        const handleMouseLeave = () => isHovered = false;

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        const scrollStep = () => {
            if (!isHovered && container) {
                container.scrollLeft += 1; // Smooth 1px scroll automatically

                // Simple reset when reaching near the end to simulate infinite looping
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
                    container.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scrollStep);
        };

        animationFrameId = requestAnimationFrame(scrollStep);

        return () => {
            cancelAnimationFrame(animationFrameId);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className="w-full bg-[#f8f9fa] font-sans py-16 lg:py-32 border-t border-gray-200 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20 mb-8 sm:mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#E61E32]"></span>
                            <span className="text-[#E61E32] text-[12px] font-bold uppercase tracking-widest">Our Work</span>
                        </div>
                        <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-normal text-[#202124] tracking-tight mb-6 leading-[1.1]">
                            Featured Portfolio
                        </h2>
                        <p className="text-[17px] text-[#5f6368] leading-relaxed max-w-xl">
                            Explore our latest digital transformations. From enterprise systems to consumer platforms, we engineer results that matter.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="hidden sm:flex items-center gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-14 h-14 border border-gray-200 rounded-none bg-white text-[#202124] hover:bg-[#E61E32] hover:border-[#E61E32] hover:text-white flex items-center justify-center transition-all duration-300"
                            aria-label="Scroll left"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-14 h-14 border border-gray-200 rounded-none bg-white text-[#202124] hover:bg-[#E61E32] hover:border-[#E61E32] hover:text-white flex items-center justify-center transition-all duration-300"
                            aria-label="Scroll right"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scrolling Cards Container */}
            <div className="relative w-full">
                {/* Scrollable Area */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-4 sm:gap-8 px-6 sm:px-10 lg:px-20 pb-16 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}} />

                    {extendedProjects.map((project, index) => (
                        <Link
                            href={`/portfolio/${project.slug}`}
                            key={index}
                            className="relative flex-none w-[280px] sm:w-[380px] lg:w-[460px] aspect-[4/5] sm:h-auto border border-gray-200 rounded-none overflow-hidden snap-start group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 block"
                        >
                            {/* Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="overflow-hidden mb-2">
                                    <span className="text-[10px] sm:text-[11px] font-bold text-[#E61E32] tracking-widest uppercase block transform translate-y-0 group-hover:-translate-y-full transition-transform duration-500 bg-white/10 backdrop-blur-md px-2 py-1 w-fit">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-[22px] sm:text-[32px] font-light text-white tracking-tight leading-tight mb-4 group-hover:text-[#E61E32] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <p className="text-[14px] sm:text-[15px] text-white/80 leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-white text-[11px] font-bold uppercase tracking-tighter group/btn">
                                        View Case Study
                                        <div className="w-8 h-[1px] bg-white group-hover/btn:w-12 transition-all duration-300"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
