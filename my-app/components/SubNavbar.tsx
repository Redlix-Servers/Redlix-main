"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubNavbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="w-full bg-white border-b border-gray-200 hidden md:block">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 h-14 flex items-center justify-between">

                {/* Left Side */}
                <div className="flex items-center h-full">
                    {/* Atlas Header */}
                    <Link href="/atlas" className="text-[18px] text-[#5f6368] mr-10 tracking-wide flex items-center gap-2 pt-0.5 hover:opacity-80 transition-opacity">
                        <span className="font-normal">Enterprise</span>
                        <div className="h-5 w-[1px] bg-[#5f6368]/30 mx-1" />
                        <span className="font-medium">Atlas</span>
                    </Link>

                    {/* Nav Links */}
                    <div className="flex items-center gap-8 h-full">
                        <Link
                            href="/atlas"
                            className={`h-full flex items-center text-[14px] pt-[3px] font-medium transition-all border-b-[3px] ${isActive('/atlas') ? 'text-black border-black' : 'text-[#5f6368] border-transparent hover:text-[#202124]'
                                }`}
                        >
                            Overview
                        </Link>
                        <Link
                            href="/atlas/benefits"
                            className={`h-full flex items-center text-[14px] pt-[3px] font-medium transition-all border-b-[3px] ${isActive('/atlas/benefits') ? 'text-black border-black' : 'text-[#5f6368] border-transparent hover:text-[#202124]'
                                }`}
                        >
                            Benefits
                        </Link>
                        <Link
                            href="/atlas/features"
                            className={`h-full flex items-center text-[14px] pt-[3px] font-medium transition-all border-b-[3px] ${isActive('/atlas/features') ? 'text-black border-black' : 'text-[#5f6368] border-transparent hover:text-[#202124]'
                                }`}
                        >
                            Features
                        </Link>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://atlas.redlix.co.in/dev-login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] font-medium text-black hover:text-gray-700 transition-colors"
                    >
                        Developer Portal
                    </a>
                    <a
                        href="https://atlas.redlix.co.in/client-login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black hover:bg-gray-800 text-white px-5 py-2 text-[14px] font-medium transition-colors rounded-none"
                    >
                        Client Portal
                    </a>
                </div>

            </div>
        </div>
    );
}

