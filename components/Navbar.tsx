"use client";

import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Changed to 'nav', fixed to top, Red background from your design
        <nav className="w-full bg-[#E61E32] border-b border-[#CC192A]/30 font-sans fixed top-0 z-50 shadow-md">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-20"> {/* Reduced height compared to footer */}

                    {/* LEFT SIDE: Logo & Tagline */}
                    <div className="flex-shrink-0 flex items-center gap-4">
                        <a href="/" className="flex items-center">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772213103/Screenshot_2026-02-27_at_22.54.43-removebg-preview_jeh6kc.png"
                                alt="Logo"
                                className="h-12 w-auto transition-transform hover:scale-105 duration-300"
                            />
                        </a>
                        <div className="hidden sm:block h-6 w-[1px] bg-white/40" />
                        <span className="hidden sm:block text-white/90 text-[14px] font-medium tracking-wide">
                            IT Services Agency
                        </span>
                    </div>

                    {/* RIGHT SIDE: Menu Items & Get Started Button */}
                    <div className="flex items-center gap-6 md:gap-8">
                        {/* Menu Items */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">
                            {['Home', 'About Us', 'Portfolio', 'Resources'].map((item) => (
                                <a
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-white/90 hover:text-white font-medium text-[15px] transition-colors tracking-wide"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Book A Call Button */}
                        <a
                            href="https://cal.com/redlix.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center justify-center px-6 py-2 bg-white text-[#E61E32] hover:bg-slate-100 transition-all duration-300 text-[14px] font-bold shadow-sm rounded-none"
                        >
                            Book A Call
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white hover:text-white/80 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#E61E32] border-t border-[#CC192A]/30">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {['Home', 'About Us', 'Portfolio', 'Resources'].map((item) => (
                            <a
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-3 py-3 text-base font-medium text-white hover:bg-[#CC192A]/50 rounded-none"
                            >
                                {item}
                            </a>
                        ))}
                        <div className="pt-4 mt-2">
                            <a
                                href="https://cal.com/redlix.co.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center px-6 py-3 bg-white text-[#E61E32] font-bold rounded-none"
                            >
                                Book A Call
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;