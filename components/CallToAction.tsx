import React from "react";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="w-full bg-[#E61E32] font-sans relative overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full min-h-[350px]">

                {/* Left Side Content (Red Background) */}
                <div className="relative z-10 w-full lg:w-[60%] xl:w-[55%] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 xl:px-24 flex flex-col justify-center">
                    <h2 className="text-[32px] sm:text-[40px] font-normal text-white tracking-tight mb-4 max-w-xl">
                        Ready to accelerate your digital transformation?
                    </h2>
                    <p className="text-[15px] sm:text-[16px] text-white/90 leading-relaxed max-w-lg mb-8">
                        Book a free consultation with our experts to discuss your specific business challenges and discover how Redlix can tailor the perfect technology solution for you.
                    </p>
                    <div>
                        <a
                            href="https://cal.com/redlix.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white hover:bg-gray-100 text-black font-medium text-[15px] px-8 py-3 shadow-sm transition-colors rounded-none"
                        >
                            Book a Free Call
                        </a>
                    </div>
                </div>

                {/* Right Side Illustration */}
                <div className="w-full lg:absolute lg:right-0 lg:top-0 lg:w-[45%] xl:w-[50%] relative min-h-[300px] lg:h-full lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)] overflow-hidden">
                    <img
                        src="https://framerusercontent.com/images/1iHbOavyFopIG2QoPDcz4Wg438.jpg?width=2048&height=1152"
                        alt="Contact Illustration"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
