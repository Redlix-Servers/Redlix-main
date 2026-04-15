import React from "react";
import CorporateFooter from "@/components/CorporateFooter";
import { TrendingUp, Users, Clock, ShieldCheck, Zap, Layers } from "lucide-react";

export default function AtlasBenefits() {
    const benefits = [
        {
            icon: Clock,
            title: "99% Faster Deployment",
            description: "Go from concept to production in hours, not months. Our low-code infrastructure removes the bottlenecks of traditional software cycles."
        },
        {
            icon: TrendingUp,
            title: "45% Revenue Growth",
            description: "Clients report a significant uplift in sales velocity due to optimized checkout flows and intelligent inventory management."
        },
        {
            icon: Users,
            title: "Unified Team Collaboration",
            description: "Break down silos between engineering, product, and operations with a single dashboard for all stakeholders."
        },
        {
            icon: ShieldCheck,
            title: "Ironclad Compliance",
            description: "Built-in audit logs and automated compliance checks ensure your enterprise stays secure in every jurisdiction."
        },
        {
            icon: Zap,
            title: "Low Latency Performance",
            description: "Keep your users engaged with sub-second response times, even during massive traffic spikes or holiday seasons."
        },
        {
            icon: ShieldCheck,
            title: "Scalable Architecture",
            description: "Whether you have 100 users or 100 million, Atlas scales horizontally without requiring a rewrite of your codebase."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-black">
            <main className="flex-grow">
                {/* Header Section */}
                <section className="bg-white py-12 lg:py-16 border-b border-gray-100 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <span className="text-[#E61E32] font-medium text-[11px] uppercase tracking-[0.3em] mb-4 block">Business Impact</span>
                        <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-medium text-[#202124] tracking-tight mb-6">
                            Where Vision Meets <br /> Measured Success.
                        </h1>
                        <p className="text-[16px] md:text-[18px] text-[#5f6368] leading-relaxed max-w-2xl mx-auto font-light mb-0">
                            Enterprise Atlas isn't just a tool; it's a force multiplier for your bottom line. We deliver tangible ROI through precision engineering.
                        </p>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="py-12 lg:py-16">
                    <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="group border-l border-gray-100 pl-8 py-2">
                                    <div className="w-12 h-12 bg-gray-50 text-black flex items-center justify-center mb-6 group-hover:bg-[#E61E32] group-hover:text-white transition-all duration-300">
                                        <benefit.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-[18px] font-medium mb-3 tracking-tight">{benefit.title}</h3>
                                    <p className="text-[14px] text-[#5f6368] leading-relaxed font-light">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </main>
            <CorporateFooter />
        </div>
    );
}
