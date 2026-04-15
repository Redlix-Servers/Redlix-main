import React from "react";
import { Metadata } from "next";
import CorporateFooter from "@/components/CorporateFooter";
import { Cookie, Info, Settings, ShieldCheck, User, Mail, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Cookies Policy | Redlix Studio",
    description: "Understand how Redlix Studio uses cookies to improve your experience, maintain system security, and provide personalized IT services as an independent freelance studio.",
};

export default function CookiesPolicy() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-black">
            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    {/* Page Header */}
                    <div className="border-b border-gray-100 pb-12 mb-16">
                        <span className="text-[#E61E32] font-medium text-[11px] uppercase tracking-[0.3em] mb-4 block">Preference Management</span>
                        <h1 className="text-[36px] md:text-[48px] font-medium tracking-tight text-[#202124] leading-tight mb-6 uppercase">
                            Cookies Policy
                        </h1>
                        <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-gray-400 uppercase tracking-widest font-medium">
                            <span>Last Updated: February 7, 2026</span>
                            <span className="hidden md:block">|</span>
                            <span>Effective Date: February 7, 2026</span>
                        </div>
                    </div>

                    {/* Main Grid Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Sidebar Info */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24 space-y-8">
                                <div className="p-8 bg-gray-50 border border-gray-100 space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-[#E61E32]">
                                            <Cookie className="w-5 h-5" />
                                            <h3 className="text-[14px] font-medium uppercase tracking-widest">Cookie Usage</h3>
                                        </div>
                                        <p className="text-[14px] text-[#5f6368] font-light leading-relaxed">
                                            We use cookies to maintain system integrity, analyze site traffic, and optimize the delivery of freelance services.
                                        </p>
                                    </div>
                                    <div className="h-[1px] bg-gray-200" />
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-[#E61E32]">
                                            <User className="w-5 h-5" />
                                            <h3 className="text-[14px] font-medium uppercase tracking-widest">Freelance Identity</h3>
                                        </div>
                                        <p className="text-[14px] text-[#5f6368] font-light leading-relaxed">
                                            Operated by <span className="font-medium text-black">Rishi Rohan Kalapala</span>. Redlix Studio is an independent freelance identity.
                                        </p>
                                    </div>
                                    <div className="h-[1px] bg-gray-200" />
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-[#E61E32]">
                                            <Mail className="w-5 h-5" />
                                            <h3 className="text-[14px] font-medium uppercase tracking-widest">Support</h3>
                                        </div>
                                        <p className="text-[14px] text-[#5f6368] font-light leading-relaxed">
                                            help.ckrdatapoint@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Content Sections */}
                        <div className="lg:col-span-8 space-y-16">
                            {/* 1. Introduction */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    1. Introduction
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        This Cookies Policy explains how Redlix Studio uses cookies and similar tracking technologies when you visit www.redlix.co.in.
                                    </p>
                                    <p>
                                        Redlix Studio operates as an independent freelance studio based in Hyderabad, Telangana, India. This policy should be read together with our Privacy Policy and Terms of Service.
                                    </p>
                                    <p>
                                        By continuing to use our website, you consent to the use of cookies as described in this policy, unless you disable them through your browser settings.
                                    </p>
                                </div>
                            </section>

                            {/* 2. What Are Cookies */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    2. What Are Cookies
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        Cookies are small text files stored on your device (computer, mobile phone, or tablet) when you visit a website. They help websites function efficiently and improve user experience.
                                    </p>
                                    <p>Cookies may collect information such as:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 list-disc pl-5">
                                        <li>Browser type</li>
                                        <li>Device type</li>
                                        <li>IP address</li>
                                        <li>Pages visited</li>
                                        <li>Time spent on pages</li>
                                        <li>Referring website</li>
                                    </ul>
                                    <p>
                                        Cookies do not typically contain personally identifiable information, but they may be linked to personal data if you voluntarily provide it through forms or support tickets.
                                    </p>
                                </div>
                            </section>

                            {/* 3. Types of Cookies We Use */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    3. Types of Cookies We Use
                                </h2>
                                <div className="space-y-8 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <div className="space-y-3">
                                        <h4 className="font-medium text-black">3.1 Essential Cookies</h4>
                                        <p>
                                            These cookies are necessary for the website to function properly. They enable core features such as page navigation, secure areas of the website, form submissions, and support ticket functionality. Without these cookies, certain parts of the website may not operate correctly.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium text-black">3.2 Performance and Analytics Cookies</h4>
                                        <p>
                                            These cookies help us understand how visitors interact with the website by collecting anonymous usage statistics, such as the number of visitors, pages viewed, traffic sources, and error messages. This data helps improve website performance and user experience.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium text-black">3.3 Functional Cookies</h4>
                                        <p>
                                            These cookies allow the website to remember user preferences such as language settings, temporary form input data, and session information. They enhance convenience but are not strictly necessary.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium text-black">3.4 Third-Party Cookies</h4>
                                        <p>
                                            In some cases, third-party tools or services (such as hosting providers or analytics platforms) may set cookies on your device. Redlix Studio does not control these third-party cookies. Their use is governed by the respective third-party privacy policies.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* 4. How Long Cookies Are Stored */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    4. How Long Cookies Are Stored
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>Cookies may be:</p>
                                    <ul className="space-y-4 list-none">
                                        <li>
                                            <span className="font-medium text-black block mb-1">Session Cookies</span>
                                            Automatically deleted when you close your browser.
                                        </li>
                                        <li>
                                            <span className="font-medium text-black block mb-1">Persistent Cookies</span>
                                            Stored on your device for a defined period or until manually deleted.
                                        </li>
                                    </ul>
                                    <p>Retention periods vary depending on the purpose of the cookie.</p>
                                </div>
                            </section>

                            {/* 5. How to Manage or Disable Cookies */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    5. How to Manage or Disable Cookies
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        You can control or disable cookies through your browser settings. Most browsers allow you to view, delete, or block cookies globally or for specific sites.
                                    </p>
                                    <p>
                                        Please note that disabling essential cookies may affect website functionality, including support ticket submission and secure access features.
                                    </p>
                                    <div className="mt-8">
                                        <p className="font-medium text-black mb-4">Browser management links:</p>
                                        <div className="flex flex-wrap gap-x-8 gap-y-2 opacity-80">
                                            <a href="#" className="hover:text-[#E61E32] underline decoration-gray-200 underline-offset-4 transition-colors">Google Chrome</a>
                                            <a href="#" className="hover:text-[#E61E32] underline decoration-gray-200 underline-offset-4 transition-colors">Mozilla Firefox</a>
                                            <a href="#" className="hover:text-[#E61E32] underline decoration-gray-200 underline-offset-4 transition-colors">Microsoft Edge</a>
                                            <a href="#" className="hover:text-[#E61E32] underline decoration-gray-200 underline-offset-4 transition-colors">Safari</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 6. Consent and Legal Basis */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    6. Consent and Legal Basis
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        Where required under applicable Indian law, including the Digital Personal Data Protection (DPDP) Act, 2023, cookies are used based on your consent or our legitimate interest in maintaining and improving website functionality.
                                    </p>
                                    <p>You may withdraw consent at any time by adjusting your browser settings.</p>
                                </div>
                            </section>

                            {/* 7. Updates to This Cookies Policy */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    7. Updates to This Cookies Policy
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        Redlix Studio may update this Cookies Policy periodically. Any changes will be reflected with a revised “Last Updated” date. Continued use of the website after updates constitutes acceptance of the revised policy.
                                    </p>
                                </div>
                            </section>

                            {/* 8. Contact Information */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    8. Contact Information
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>For questions regarding this Cookies Policy:</p>
                                    <div className="space-y-1">
                                        <p><span className="font-medium text-black">Email:</span> help.ckrdatapoint@gmail.com</p>
                                        <p><span className="font-medium text-black">Website:</span> www.redlix.co.in</p>
                                        <p><span className="font-medium text-black">Location:</span> Hyderabad, Telangana, India</p>
                                        <p><span className="font-medium text-black">Founder:</span> Rishi Rohan Kalapala</p>
                                    </div>
                                    <p className="text-[13px] mt-8 opacity-60">
                                        Redlix Studio operates as an independent freelance studio and is not a registered company or legal entity.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <CorporateFooter />
        </div>
    );
}
