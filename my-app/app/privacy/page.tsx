import React from "react";
import { Metadata } from "next";
import CorporateFooter from "@/components/CorporateFooter";
import { Shield, Lock, Eye, FileText, Scale, Mail, MapPin, User } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | Redlix Studio",
    description: "Read the Redlix Studio Privacy Policy. Learn how we handle your data, protect your privacy, and comply with the DPDP Act, 2023 in our independent freelance operations.",
};

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-black">
            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    {/* Page Header */}
                    <div className="border-b border-gray-100 pb-12 mb-16">
                        <span className="text-[#E61E32] font-medium text-[11px] uppercase tracking-[0.3em] mb-4 block">Legal Documentation</span>
                        <h1 className="text-[36px] md:text-[48px] font-medium tracking-tight text-[#202124] leading-tight mb-6 uppercase">
                            Privacy Policy
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
                                            <User className="w-5 h-5" />
                                            <h3 className="text-[14px] font-medium uppercase tracking-widest">Brand Ownership</h3>
                                        </div>
                                        <p className="text-[14px] text-[#5f6368] font-light leading-relaxed">
                                            Operated independently by <span className="font-medium text-black">Rishi Rohan Kalapala</span>. Redlix Studio functions as a freelance brand and is not a registered company or legal entity.
                                        </p>
                                    </div>
                                    <div className="h-[1px] bg-gray-200" />
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-[#E61E32]">
                                            <Scale className="w-5 h-5" />
                                            <h3 className="text-[14px] font-medium uppercase tracking-widest">Governing Law</h3>
                                        </div>
                                        <p className="text-[14px] text-[#5f6368] font-light leading-relaxed">
                                            Information Technology Act, 2000 & Digital Personal Data Protection (DPDP) Act, 2023.
                                        </p>
                                    </div>
                                    <div className="h-[1px] bg-gray-200" />
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-[#E61E32]">
                                            <Mail className="w-5 h-5" />
                                            <h3 className="text-[14px] font-medium uppercase tracking-widest">Direct Contact</h3>
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
                            {/* 1. Overview */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    1. Overview
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>
                                        This Privacy Policy sets out how Redlix Studio, operating as an independent freelance studio under the brand name "Redlix Studio," collects, uses, stores, and protects personal and professional information shared through its website and service channels.
                                    </p>
                                    <p>
                                        Redlix Studio is not a registered company or legal entity. It functions solely as a freelance brand operated by Rishi Rohan Kalapala, based in Hyderabad, Telangana, India. This policy is governed by the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023.
                                    </p>
                                    <p>
                                        By accessing our website or engaging our services, you acknowledge and agree to the practices described in this policy.
                                    </p>
                                </div>
                            </section>

                            {/* 2. Scope of This Policy */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    2. Scope of This Policy
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>This policy applies to all personal data collected through:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li>The Redlix Studio website (www.redlix.co.in)</li>
                                        <li>Email correspondence and inquiry forms</li>
                                        <li>The Support Ticketing System (Raise a Ticket / Track Ticket)</li>
                                        <li>Any other communication channel used in connection with freelance services</li>
                                    </ul>
                                </div>
                            </section>

                            {/* 3. Information We Collect */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    3. Information We Collect
                                </h2>
                                <div className="space-y-6 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>We collect only information voluntarily provided by you in the course of using our services or contacting us. This may include:</p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium text-black mb-1">3.1 Identity & Contact Information</h4>
                                            <p>Full name, Email address, Phone number (if provided).</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-black mb-1">3.2 Project & Service Information</h4>
                                            <p>Project requirements and scope details, Target URLs and change descriptions, Client Identifiers (Client IDs), Support Ticket details and references.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-black mb-1">3.3 Technical Information</h4>
                                            <p>Browser type and IP address (collected automatically via server logs), Pages visited and time of access.</p>
                                        </div>
                                    </div>
                                    <p>We do not intentionally collect sensitive personal data (e.g., financial information, government IDs, health records) unless strictly required for a specific engagement and with your explicit consent.</p>
                                </div>
                            </section>

                            {/* 4. How We Use Your Information */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    4. How We Use Your Information
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>All information collected is used solely for legitimate freelance business purposes, including:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li>Responding to your inquiries and communications</li>
                                        <li>Managing and delivering agreed freelance services</li>
                                        <li>Processing and tracking support tickets</li>
                                        <li>Maintaining project records and internal coordination</li>
                                        <li>Complying with applicable legal obligations</li>
                                    </ul>
                                    <p>We do not use your data for advertising, profiling, automated decision-making, or any commercial purpose beyond the services you have engaged us for. Redlix Studio does not monetize or sell personal information under any circumstances.</p>
                                </div>
                            </section>

                            {/* 5. Lawful Basis for Processing */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    5. Lawful Basis for Processing
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>We process your personal data on the following lawful bases under the DPDP Act, 2023:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li><span className="font-medium text-black">Consent:</span> Where you have given us clear, affirmative consent to process your data for a specific purpose.</li>
                                        <li><span className="font-medium text-black">Contractual necessity:</span> Where processing is necessary to perform a freelance service you have requested.</li>
                                        <li><span className="font-medium text-black">Legal obligation:</span> Where processing is required to comply with applicable Indian laws.</li>
                                        <li><span className="font-medium text-black">Legitimate interest:</span> Where processing is necessary for our legitimate business interests, provided these are not overridden by your rights.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* 6. Support Ticketing System */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    6. Support Ticketing System
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>When you use the Raise a Ticket or Track Ticket features on our website, we collect specific data required to process your request, including:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li>Authorized Submitter Name</li>
                                        <li>Client Identifier (Client ID)</li>
                                        <li>Target URL(s) and detailed Change Descriptions</li>
                                        <li>Ticket submission timestamp</li>
                                    </ul>
                                    <p>This information is securely logged into our internal dashboard (Atlas system) strictly to monitor, execute, and track service changes. A unique Ticket ID is generated for each request to enable transparent progress tracking. All ticket data is handled under strict confidentiality.</p>
                                </div>
                            </section>

                            {/* 7. Data Storage and Internal Tools */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    7. Data Storage and Internal Tools
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>Client information may be stored within internal project management and collaboration tools used to plan, coordinate, and deliver freelance services. Access to such tools is strictly limited to the freelancer(s) directly engaged on your project.</p>
                                    <p>Where third-party software-as-a-service (SaaS) tools are used (e.g., project management platforms, cloud storage, communication tools), data may be processed on their servers. Such tools are selected for their compliance with reasonable data security standards. We do not share your data with third-party tools beyond what is operationally necessary.</p>
                                </div>
                            </section>

                            {/* 8. Data Security */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    8. Data Security
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>We implement industry-standard security practices across our freelance operations and the Atlas system, including:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li>Secure access controls and role-based permissions</li>
                                        <li>Restricted access to client data on a need-to-know basis</li>
                                        <li>Use of encrypted communication channels where applicable</li>
                                        <li>Regular review of data handling practices</li>
                                    </ul>
                                    <p>While we take reasonable steps to protect your information, no method of transmission or storage over the internet is completely secure. We cannot guarantee absolute security, and you provide your information at your own risk.</p>
                                </div>
                            </section>

                            {/* 9. Data Retention */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    9. Data Retention
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>We retain personal and project data only for as long as is necessary to fulfill the purposes for which it was collected, or as required by applicable law. Our standard retention schedule is as follows:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li><span className="font-medium text-black">Active project data:</span> Retained for the duration of the project engagement plus 12 months.</li>
                                        <li><span className="font-medium text-black">Support ticket records:</span> Retained for 24 months from ticket closure, unless contractually extended.</li>
                                        <li><span className="font-medium text-black">General correspondence:</span> Retained for 12 months from last communication.</li>
                                    </ul>
                                    <p>Upon expiry of the applicable retention period, data will be securely deleted or anonymized unless retention is contractually or legally mandated.</p>
                                </div>
                            </section>

                            {/* 10. Third-Party Disclosure */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    10. Third-Party Disclosure
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>We do not share, sell, rent, or trade your personal information with third parties, except in the following limited circumstances:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li><span className="font-medium text-black">Service delivery:</span> Where a third party is engaged solely to assist in fulfilling a service explicitly requested by you (e.g., domain registration, hosting), and only to the extent necessary.</li>
                                        <li><span className="font-medium text-black">Legal compliance:</span> Where disclosure is required by law, court order, or regulatory authority under applicable Indian law.</li>
                                    </ul>
                                    <p>In all cases, third parties are engaged under confidentiality obligations and are prohibited from using your data for any other purpose.</p>
                                </div>
                            </section>

                            {/* 11. Portfolio and Case Studies */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    11. Portfolio and Case Studies
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>This website functions as a professional portfolio. Any projects, outcomes, or case studies displayed are shared in a generalized or anonymized manner. Proprietary client credentials, sensitive project data, or private materials are never disclosed publicly without your explicit prior written consent.</p>
                                </div>
                            </section>

                            {/* 12. Your Rights */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    12. Your Rights
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>As a data principal under the Digital Personal Data Protection (DPDP) Act, 2023 and the Information Technology Act, 2000, you have the following rights:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li><span className="font-medium text-black">Right to Access:</span> Request access to the personal data we hold about you.</li>
                                        <li><span className="font-medium text-black">Right to Correction:</span> Request correction of inaccurate or incomplete personal data.</li>
                                        <li><span className="font-medium text-black">Right to Erasure:</span> Request deletion of your personal data, subject to legal or contractual obligations.</li>
                                        <li><span className="font-medium text-black">Right to Withdraw Consent:</span> Withdraw consent for data processing at any time, where processing is consent-based.</li>
                                        <li><span className="font-medium text-black">Right to Data Portability:</span> Request a copy of your data in a structured, commonly used format, where applicable.</li>
                                        <li><span className="font-medium text-black">Right to Grievance Redressal:</span> File a grievance regarding the processing of your personal data.</li>
                                    </ul>
                                    <p>To exercise any of these rights, please contact our Grievance Officer at <a href="mailto:help.ckrdatapoint@gmail.com" className="text-[#E61E32] hover:underline">help.ckrdatapoint@gmail.com</a>. We will acknowledge your request within 72 hours and respond fully within 30 days, in accordance with applicable Indian law.</p>
                                </div>
                            </section>

                            {/* 13. Grievance Officer */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    13. Grievance Officer
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6 bg-gray-50 p-8 border border-gray-100">
                                    <p>In accordance with the Information Technology Act, 2000, and the DPDP Act, 2023, the following individual has been designated as the Grievance Officer for Redlix Studio:</p>
                                    <div className="space-y-1">
                                        <p className="font-medium text-black">Name: Rishi Rohan Kalapala</p>
                                        <p>Role: Founder & Grievance Officer</p>
                                        <p>Email: <a href="mailto:help.ckrdatapoint@gmail.com" className="text-[#E61E32] hover:underline">help.ckrdatapoint@gmail.com</a></p>
                                    </div>
                                    <p className="text-[13px] italic mt-4">Response Time: Grievances will be acknowledged within 72 hours and resolved within 30 days of receipt.</p>
                                </div>
                            </section>

                            {/* 14. Cookies and Tracking Technologies */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    14. Cookies and Tracking Technologies
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>Our website may use cookies and similar tracking technologies to improve user experience and analyze site traffic. Cookies are small data files stored on your device. You may configure your browser to refuse cookies, though this may affect certain site functionality.</p>
                                    <p>Details of cookies used, their purpose, and duration are provided in our separate Cookies Policy, available on our website.</p>
                                </div>
                            </section>

                            {/* 15. Legal Compliance and Governing Law */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    15. Legal Compliance and Governing Law
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>This Privacy Policy is governed by the laws of India, including but not limited to:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li>The Digital Personal Data Protection (DPDP) Act, 2023</li>
                                        <li>The Information Technology Act, 2000 and its associated rules and regulations</li>
                                        <li>Any other applicable Indian data protection and privacy legislation</li>
                                    </ul>
                                    <p>Users accessing our website or services from outside India acknowledge that their information may be transferred to, and processed in, India in accordance with Indian law.</p>
                                </div>
                            </section>

                            {/* 16. Changes to This Policy */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    16. Changes to This Policy
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page with a revised "Last Updated" date. We encourage you to review this policy periodically. Your continued use of our services after changes are posted constitutes acceptance of the revised policy.</p>
                                </div>
                            </section>

                            {/* 17. Contact Us */}
                            <section className="space-y-6">
                                <h2 className="text-[20px] font-medium tracking-tight text-[#202124] uppercase tracking-widest border-l-2 border-[#E61E32] pl-6">
                                    17. Contact Us
                                </h2>
                                <div className="space-y-4 text-[16px] text-[#5f6368] leading-relaxed font-light pl-6">
                                    <p>For any questions, concerns, or requests related to this Privacy Policy or our data handling practices, please contact us:</p>
                                    <div className="space-y-1">
                                        <p><span className="font-medium text-black">Email:</span> help.ckrdatapoint@gmail.com</p>
                                        <p><span className="font-medium text-black">Website:</span> www.redlix.co.in</p>
                                        <p><span className="font-medium text-black">Location:</span> Hyderabad, Telangana, India</p>
                                        <p><span className="font-medium text-black">Founder:</span> Rishi Rohan Kalapala</p>
                                    </div>
                                    <p className="text-[13px] mt-8 opacity-60">
                                        This Privacy Policy forms part of the Redlix Studio Terms of Service and Cookies Policy. Redlix Studio operates as an independent freelance studio and is not a registered company or legal entity.
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
