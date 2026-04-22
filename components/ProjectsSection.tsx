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
            const scrollAmount = window.innerWidth < 640 ? 324 : 424;
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
        <section className="w-full bg-[#f8f9fa] font-sans py-16 lg:py-24 border-t border-gray-200 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-[32px] sm:text-[40px] font-normal text-[#202124] tracking-tight mb-4">
                            Featured Portfolio
                        </h2>
                        <p className="text-[16px] text-[#5f6368] leading-relaxed">
                            Explore some of our recent digital transformations. From robust enterprise software to elegant consumer applications, see how we deliver results.
                        </p>
                    </div>

                    {/* Navigation Arrows (replaces "View all projects" link) */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 border-2 border-[#E61E32] rounded-none bg-transparent text-[#E61E32] hover:bg-[#E61E32]/5 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                            aria-label="Scroll left"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 border-2 border-[#E61E32] rounded-none bg-transparent text-[#E61E32] hover:bg-[#E61E32]/5 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                            aria-label="Scroll right"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
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
                    className="flex overflow-x-auto gap-6 px-4 sm:px-6 lg:px-12 pb-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Hide scrollbar for webkit using standard CSS inline trick */}
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
                            className="relative flex-none w-[300px] sm:w-[400px] h-[450px] border border-gray-100 rounded-none overflow-hidden snap-center group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 block"
                        >
                            {/* Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out pointer-events-none"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                                <span className="text-[12px] font-bold text-white/80 tracking-widest uppercase mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-[24px] font-medium text-white tracking-tight mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-[14px] text-white/70 leading-relaxed line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
