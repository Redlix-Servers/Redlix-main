import React from "react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full bg-white font-sans py-12 lg:py-20">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[500px]">
                    <div className="w-full lg:w-[45%] flex flex-col justify-center text-center lg:text-left">
                        <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.15] font-normal text-[#202124] tracking-tight mb-6">
                            Empowering growth <br className="hidden lg:block" />
                            with expert IT <br className="hidden lg:block" />
                            services.
                        </h1>
                        <p className="text-[15px] sm:text-[17px] text-[#5f6368] leading-[1.6] mb-8 max-w-lg mx-auto lg:mx-0">
                            Redlix is a premier IT service agency dedicated to delivering innovative technology solutions for small businesses, B2B, and B2C companies.
                        </p>
                        <div>
                            <a
                                href="https://atlas.redlix.co.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-black hover:bg-gray-800 text-white font-medium text-[15px] px-8 py-3 transition-colors rounded-none"
                            >
                                Partner with us
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                        <img
                            src="https://ik.imagekit.io/dypkhqxip/Static%20assets-cuate%20(1).svg"
                            alt="IT Services Illustration"
                            className="w-full max-w-[600px] lg:max-w-full lg:scale-110 lg:origin-right h-auto object-contain drop-shadow-sm"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
