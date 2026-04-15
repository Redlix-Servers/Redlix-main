import React from "react";
import { Metadata } from "next";
import CorporateFooter from "@/components/CorporateFooter";
import { Scale, FileText, Shield, AlertCircle, Clock, User, Mail, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms of Service | Redlix Studio",
    description: "Review the Redlix Studio Terms of Service. Understand the professional engagement guidelines, intellectual property policies, and service standards of our independent freelance studio.",
};

export default function TermsAndConditions() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-black">
            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    {/* Page Header */}
                    <div className="border-b border-gray-100 pb-12 mb-16">
                        <span className="text-[#E61E32] font-medium text-[11px] uppercase tracking-[0.3em] mb-4 block">Institutional Standards</span>
                        <h1 className="text-[36px] md:text-[48px] font-medium tracking-tight text-[#202124] leading-tight mb-6 uppercase">
                            Terms of Service
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
                                <div className="p-8 bg-[#202124] text-white space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-[#E61E32]">
                                            <User className="w-5 h-5" />
                                            <h3 className="text-[14px] font-medium uppercase tracking-widest text-white">Freelance Brand</h3>
                                        </div>
                                        <p className="text-[14px] text-white/60 font-light leading-relaxed">
                                            Operated by <span className="font-medium text-white">Rishi Rohan Kalapala</span>. Redlix Studio is an independent freelance identity and not a legal entity or registered company.
                                        </p>
                                    </div>
                                    <div className="h-[1px] bg-white/10" />
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-[#E61E32]">
                                            <Scale className="w-5 h-5" />
                                            <h3 className="text-[14px] font-medium uppercase tracking-widest text-white">Jurisdiction</h3>
                                        </div>
                                        <p className="text-[14px] text-white/60 font-light leading-relaxed">
                                            Governed by the laws of Telangana, India. All disputes are subject to the exclusive jurisdiction of courts in Hyderabad.
                                        </p>
                                    </div>
                                    <div className="h-[1px] bg-white/10" />
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-[#E61E32]">
                                            <Shield className="w-5 h-5" />
                                            <h3 className="text-[14px] font-medium uppercase tracking-widest text-white">Fair Use</h3>
                                        </div>
                                        <p className="text-[14px] text-white/60 font-light leading-relaxed">
                                            We maintain zero tolerance for system misuse or unauthorized redistribution of our architectural primitives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Content Sections */}
                        <div className="lg:col-span-8 space-y-16">
                            {/* 1. Overview & Professional Identity */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    1. Overview & Identity
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        These Terms of Service govern the professional relationship and use of services provided by Redlix Studio. "Redlix Studio" functions solely as a brand name and professional identity for the freelance work of Rishi Rohan Kalapala, based in Hyderabad, India.
                                    </p>
                                    <p>
                                        By engaging our services or using this website, you acknowledge that you are entering into a professional agreement with an independent freelancer and not a registered corporation or legal entity.
                                    </p>
                                </div>
                            </section>

                            {/* 2. Professional Services */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    2. Professional Services
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        Redlix Studio provides bespoke digital services, including but not limited to web development, UI/UX design, and architectural management via the Atlas ecosystem.
                                    </p>
                                    <p>
                                        The scope of each project is defined in individual service proposals or support tickets. We reserve the right to refuse service or terminate engagements that violate our professional standards or ethical guidelines.
                                    </p>
                                </div>
                            </section>

                            {/* 3. Intellectual Property */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    3. Intellectual Property
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        Upon full payment of all fees, the ownership of final custom deliverables is transferred to the client. However, Redlix Studio retains ownership of all underlying methodologies, reusable architectural patterns, and the proprietary Atlas management framework.
                                    </p>
                                    <p>
                                        Unauthorized distribution, reverse engineering, or resale of the platform's core architectural components is strictly prohibited.
                                    </p>
                                </div>
                            </section>

                            {/* 4. Payment Terms */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    4. Payment Terms
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        Payments for services are structured according to the milestones defined in the project scope. Failure to meet payment deadlines may result in the suspension of service delivery and a temporary lockout from the project management interface.
                                    </p>
                                    <p>
                                        All fees are non-refundable once the work on a specific milestone has commenced, reflecting the time-intensive nature of freelance engineering.
                                    </p>
                                </div>
                            </section>

                            {/* 5. Limitation of Liability */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    5. Limitation of Liability
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        Redlix Studio and Rishi Rohan Kalapala shall not be held liable for any indirect, consequential, or punitive damages arising from the use of the platform or services.
                                    </p>
                                    <p>
                                        While we implement rigorous security and performance standards (e.g., via the Atlas system), we do not guarantee that services will be entirely free of errors or interruptions, particularly those caused by third-party hosting, infrastructure, or API failures.
                                    </p>
                                </div>
                            </section>

                            {/* 6. Client Responsibilities */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    6. Client Responsibilities
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        Clients are responsible for providing accurate project requirements, maintaining the confidentiality of their Client IDs and support ticket credentials, and ensuring they have the legal right to all materials provided for project use.
                                    </p>
                                </div>
                            </section>

                            {/* 7. Governing Law */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    7. Governing Law
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        These terms are governed by the laws of India. Any legal actions or proceedings related to these terms shall be brought exclusively in the courts of Hyderabad, Telangana.
                                    </p>
                                </div>
                            </section>

                            {/* 8. Contact & Notice */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    8. Contact & Notice
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>For any questions regarding these Terms of Service or to initiate a formal notice, please contact us:</p>
                                    <div className="space-y-1">
                                        <p><span className="font-medium text-black">Email:</span> help.ckrdatapoint@gmail.com</p>
                                        <p><span className="font-medium text-black">Website:</span> www.redlix.co.in</p>
                                        <p><span className="font-medium text-black">Founder:</span> Rishi Rohan Kalapala</p>
                                    </div>
                                    <p className="text-[13px] mt-8 opacity-60">
                                        Redlix Studio is an independent freelance brand and not a legal entity or registered company. Usage of this site and its services constitutes unconditional acceptance of these terms.
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
