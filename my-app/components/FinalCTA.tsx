import React from "react";
import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="w-full bg-white font-sans overflow-hidden border-t border-gray-200">
            <div className="flex flex-col lg:flex-row w-full lg:h-[320px]">

                <div className="w-full lg:w-[45%] xl:w-[50%] bg-white p-6 sm:p-8 lg:p-0 flex items-center justify-center relative min-h-[200px] lg:min-h-full">
                    <img
                        src="https://ik.imagekit.io/dypkhqxip/Live%20collaboration-pana.svg"
                        alt="Partner with Redlix"
                        className="w-full max-w-[320px] lg:max-w-[70%] h-auto object-contain drop-shadow-sm origin-center"
                    />
                </div>

                <div className="w-full lg:w-[55%] xl:w-[50%] bg-[#E61E32] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 xl:px-20 flex flex-col justify-center text-left">
                    <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-white tracking-tight mb-3 leading-[1.15]">
                        Build the future.
                        <br />
                        <span className="font-light">Partner with Redlix.</span>
                    </h2>

                    <p className="text-[15px] md:text-[16px] text-white/90 leading-relaxed max-w-lg mb-6 font-light">
                        Join the ranks of leading enterprises transforming their operations with our high-performance systems and bespoke software architectures.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="https://cal.com/redlix.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-black hover:bg-gray-900 text-white font-medium text-[14px] px-6 py-3 transition-colors shadow-sm hover:shadow-lg rounded-none w-full sm:w-auto"
                        >
                            Start Your Project
                        </a>
                        <a
                            href="https://cal.com/redlix.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-black text-black hover:bg-black/10 font-medium text-[14px] px-6 py-3 transition-colors rounded-none w-full sm:w-auto"
                        >
                            Talk to Sales
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
