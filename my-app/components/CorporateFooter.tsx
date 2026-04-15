import React from "react";
import Link from "next/link";

export default function CorporateFooter() {
    return (
        <footer className="w-full bg-[#f8f9fa] font-sans text-[#5f6368]">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 py-8 pt-10">

                {/* Top Section: Social Links */}
                <div className="flex items-center gap-6 pb-6">
                    <span className="text-[14px] font-medium text-[#3c4043]">Follow us</span>
                    <div className="flex items-center gap-5 text-[#5f6368]">
                        {/* Blogger-like SVG */}
                        <a href="#" className="hover:text-[#E61E32] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M16 2H8C4.691 2 2 4.691 2 8v8c0 3.309 2.691 6 6 6h8c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-4 15h-2v-2h2v2zm3-4H9v-2h6v2zm0-4H9V7h6v2z" /></svg></a>
                        {/* Twitter-like SVG */}
                        <a href="#" className="hover:text-[#E61E32] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
                        {/* YouTube-like SVG */}
                        <a href="#" className="hover:text-[#E61E32] transition-colors"><svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></a>
                        {/* LinkedIn-like SVG */}
                        <a href="#" className="hover:text-[#E61E32] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#dadce0] mb-10"></div>

                {/* Main Links Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">

                    {/* Column 1: Atlas Platform */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-[14px] font-medium text-[#3c4043]">Atlas Platform</h4>
                        <ul className="flex flex-col gap-4 text-[13px]">
                            <li><a href="https://atlas.redlix.co.in/" className="hover:text-[#E61E32] transition-colors">Overview</a></li>
                            <li><a href="https://atlas.redlix.co.in/benefits" className="hover:text-[#E61E32] transition-colors">Business Benefits</a></li>
                            <li><a href="https://atlas.redlix.co.in/features" className="hover:text-[#E61E32] transition-colors">System Features</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Our Agency */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-[14px] font-medium text-[#3c4043]">Our Agency</h4>
                        <ul className="flex flex-col gap-4 text-[13px]">
                            <li><Link href="/about-us" className="hover:text-[#E61E32] transition-colors">About Redlix</Link></li>
                            <li><Link href="/portfolio" className="hover:text-[#E61E32] transition-colors">Portfolio</Link></li>
                            <li><Link href="/resources" className="hover:text-[#E61E32] transition-colors">Resources & Blog</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Legal & Security */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-[14px] font-medium text-[#3c4043]">Legal & Security</h4>
                        <ul className="flex flex-col gap-4 text-[13px]">
                            <li><Link href="/privacy" className="hover:text-[#E61E32] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-[#E61E32] transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-[#E61E32] transition-colors">Cookies Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-[14px] font-medium text-[#3c4043]">Connect</h4>
                        <ul className="flex flex-col gap-4 text-[13px]">
                            <li><a href="mailto:help.ckrdatapoint@gmail.com" className="hover:text-[#E61E32] transition-colors">help.ckrdatapoint@gmail.com</a></li>
                            <li><span className="text-[#5f6368]">Hyderabad, India</span></li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#dadce0] mb-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 w-full md:w-auto">
                        <Link
                            href="/"
                            className="flex items-center mr-6 transition-opacity hover:opacity-80"
                        >
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772213109/Screenshot_2026-02-27_at_22.49.23-removebg-preview_nn1jee.png"
                                alt="Redlix Logo"
                                className="h-14 w-auto -my-3 grayscale contrast-200 opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </Link>

                        <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-[13px]">
                            <Link href="/privacy" className="hover:text-[#E61E32] transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-[#E61E32] transition-colors">Terms</Link>
                            <Link href="/cookies" className="hover:text-[#E61E32] transition-colors">Cookies</Link>
                            <Link href="/about-us" className="hover:text-[#E61E32] transition-colors">About Redlix</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 text-[13px]">
                        <Link href="/resources" className="flex items-center gap-2 hover:text-[#E61E32] transition-colors">
                            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
                            Help Center
                        </Link>
                        <div className="bg-[#f1f3f4] text-[12px] font-medium uppercase tracking-widest py-2 px-4 border-none focus:outline-none select-none text-[#5f6368]">
                            English (US)
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
