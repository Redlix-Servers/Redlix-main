"use client";

import React, { useRef, useEffect } from "react";

const testimonials = [
    {
        quote: "Working with Redlix was a total game-changer for our agency operations. They built us a custom client management system that streamlined our entire workflow. What used to take hours now takes minutes, and our team can focus on what really matters - delivering results for our clients.",
        author: "Dhanush Reddy",
        role: "Founder @ Dhasha Media",
        avatar: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770931011/Screenshot_2026-02-13_at_02.45.59_kw8pih.png",
    },
    {
        quote: "Redlix has been an exceptional partner in our journey. They took time to understand our business, our challenges, and our goals. The solution they delivered exceeded our expectations in every way. Their ongoing support and commitment to our success sets them apart.",
        author: "Harshith Sai Tunguntla",
        role: "CEO @ SAS",
        avatar: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771184658/Screenshot_2026-02-16_at_01.14.02_btxipo.png",
    },
    {
        quote: "Redlix delivered a modern, fast, and accessible digital platform for our state initiatives. They understood the unique challenges of government infrastructure and created a solution that serves thousands of citizens efficiently. The attention to accessibility and performance was exceptional.",
        author: "HSGA Telangana",
        role: "Government Infrastructure",
        avatar: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg",
    },
    {
        quote: "An incredible collaboration that delivered beyond expectations. From the initial consultation to the final launch, Redlix was professional, responsive, and incredibly talented. They transformed our vision into a beautiful, functional platform that our entire community loves using.",
        author: "NSS CMRIT",
        role: "Student Chapter",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY63DjvYa-bL8ci8s5_KTiLm_9Mw_Wy0Xdw&s",
    },
    {
        quote: "Our sales velocity doubled since launch. The website Redlix built for us doesn't just look good - it converts. The clean design, fast loading times, and intuitive user experience have transformed how customers interact with our brand. Best investment we've made.",
        author: "Jaswanth Sonti",
        role: "Founder @ Forge Digital Technologies",
        avatar: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771184951/Screenshot_2026-02-16_at_01.18.59_yodn7t.png",
    },
    {
        quote: "The precision engineering and attention to detail in our digital platform is remarkable. Redlix built a system that handles complex student management, event coordination, and communication seamlessly. It's exactly what modern governance needs - efficient, reliable, and user-friendly.",
        author: "HSGA CMRIT",
        role: "HSGA Chapter",
        avatar: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg",
    },
];

// Duplicate items multiple times to create the infinite scroll effect
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Smooth scroll logic for the navigation arrows
    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            // Calculate scroll distance based on card width + gap
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
        <section className="w-full bg-[#202124] font-sans py-20 lg:py-28 text-white relative overflow-hidden">
            {/* Background Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E61E32]/0 via-[#E61E32] to-[#E61E32]/0 opacity-50"></div>

            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 mb-12">

                {/* Section Header & Nav Buttons */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-3xl">
                        <h2 className="text-[32px] sm:text-[40px] font-normal tracking-tight mb-4">
                            Trusted by industry leaders.
                        </h2>
                        <p className="text-[16px] text-white/70 leading-relaxed">
                            Don't just take our word for it. Here is what leading executives have to say about partnering with Redlix.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
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
            <div className="relative w-full z-10">
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

                    {extendedTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-none w-[300px] sm:w-[400px] bg-[#2A2B2E] p-8 md:p-10 border border-white/10 rounded-none flex flex-col relative group hover:bg-[#2F3034] transition-colors duration-300"
                        >
                            {/* Decorative Quote Icon */}
                            <svg className="w-8 h-8 text-[#E61E32] mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            <p className="text-[17px] sm:text-[18px] text-white/90 leading-[1.7] font-light mb-8 flex-grow select-none">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="w-12 h-12 object-cover rounded-none grayscale group-hover:grayscale-0 transition-all duration-300 pointer-events-none"
                                />
                                <div className="select-none">
                                    <h4 className="text-[15px] font-bold tracking-tight text-white mb-0.5 pointer-events-none">
                                        {testimonial.author}
                                    </h4>
                                    <span className="text-[13px] text-[#E61E32] tracking-wide font-medium pointer-events-none">
                                        {testimonial.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
