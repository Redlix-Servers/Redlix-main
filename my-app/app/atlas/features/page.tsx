import React from "react";
import CorporateFooter from "@/components/CorporateFooter";
import {
    Cpu,
    Shield,
    Lock,
    Terminal,
    Users,
    Layout,
    Activity,
    Database,
    GitBranch,
    ShieldCheck
} from "lucide-react";

export default function AtlasFeatures() {
    const featureCategories = [
        {
            title: "Developer Infrastructure",
            features: [
                {
                    icon: Lock,
                    title: "Identity Protocol",
                    subtitle: "Google OAuth 2.0 Integration",
                    details: "Implementation of resilient client-side handshake and server-side session synchronization for secure developer entry."
                },
                {
                    icon: Activity,
                    title: "Node Telemetry",
                    subtitle: "Real-time Monitoring",
                    details: "High-frequency monitoring for assigned client metadata, task status, and granular system performance metrics."
                },
                {
                    icon: GitBranch,
                    title: "Documentation Hub",
                    subtitle: "Asset Version Management",
                    details: "Integrated tools for technical documentation versioning and centralized task node administration."
                }
            ]
        },
        {
            title: "Administrative & Client Systems",
            features: [
                {
                    icon: Layout,
                    title: "Admin Control Center",
                    subtitle: "Global Oversight",
                    details: "Full visibility into active project threads, developer resource allocation, and incoming inquiry streams."
                },
                {
                    icon: Users,
                    title: "Client Portal",
                    subtitle: "Synchronous Tracking",
                    details: "Dedicated interface for real-time project progression tracking and cross-functional communication."
                },
                {
                    icon: Database,
                    title: "Intake Pipeline",
                    subtitle: "Launchpad Management",
                    details: "Directive flow for project proposals with integrated fiscal tracking and comprehensive metadata capture."
                }
            ]
        },
        {
            title: "Enterprise Core",
            features: [
                {
                    icon: ShieldCheck,
                    title: "Edge Security",
                    subtitle: "RBAC & Middleware",
                    details: "Role-Based Access Control enforced at the edge through Next.js middleware for complete segment isolation."
                },
                {
                    icon: Cpu,
                    title: "Modern Engine",
                    subtitle: "Next.js 14+ Architecture",
                    details: "Highly optimized App Router infrastructure with Prisma ORM and Vercel Edge Runtime for global scale."
                },
                {
                    icon: Terminal,
                    title: "CI/CD Pipeline",
                    subtitle: "Automated Deployment",
                    details: "Seamless synchronization between local development and production environments via Supabase and Vercel."
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-black">
            <main className="flex-grow">
                {/* Header Section */}
                <section className="bg-white py-12 lg:py-16 border-b border-gray-100 uppercase tracking-widest text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <span className="text-[#E61E32] font-medium text-[11px] uppercase tracking-[0.3em] mb-4 block">System Capabilities</span>
                        <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-medium text-[#202124] tracking-tight mb-6">
                            Precision Architectural <br /> Feature Set.
                        </h1>
                        <p className="text-[16px] md:text-[18px] text-[#5f6368] leading-relaxed max-w-2xl mx-auto font-light mb-0">
                            A deep dive into the technical modules and interfaces that power the distributed Atlas management ecosystem.
                        </p>
                    </div>
                </section>

                {/* Features Deep Dive */}
                <div className="space-y-12 py-12">
                    {featureCategories.map((category, idx) => (
                        <section key={idx} className="border-b last:border-b-0 border-gray-50 pb-12">
                            <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                                <h2 className="text-[18px] font-medium mb-10 tracking-tight uppercase tracking-wider text-[#E61E32] opacity-80 border-l-2 border-[#E61E32] pl-4">
                                    {category.title}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                                    {category.features.map((feature, i) => (
                                        <div key={i} className="flex flex-col gap-5 group">
                                            <div className="w-10 h-10 border border-gray-100 flex items-center justify-center text-black group-hover:bg-[#E61E32] group-hover:text-white group-hover:border-[#E61E32] transition-all duration-300">
                                                <feature.icon className="w-4 h-4" />
                                            </div>
                                            <div className="space-y-2">
                                                <div>
                                                    <p className="text-[#E61E32] text-[10px] font-medium uppercase tracking-widest mb-1 opacity-60">
                                                        {feature.subtitle}
                                                    </p>
                                                    <h3 className="text-[18px] font-medium tracking-tight text-black">
                                                        {feature.title}
                                                    </h3>
                                                </div>
                                                <p className="text-[14px] text-[#5f6368] leading-relaxed font-light">
                                                    {feature.details}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Technical Callout */}
                <section className="py-12 bg-[#202124] text-white overflow-hidden relative border-t border-white/5">
                    <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="max-w-2xl text-center lg:text-left">
                                <h2 className="text-[24px] md:text-[28px] font-medium mb-6">Engineered for Technical Scalability.</h2>
                                <p className="text-white/60 mb-8 leading-relaxed font-light text-[15px]">
                                    Our architectural framework is designed to handle high-frequency data streams and complex project metadata with zero latency overhead.
                                </p>
                                <a
                                    href="https://atlas.redlix.co.in/features"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white text-black hover:bg-[#E61E32] hover:text-white px-10 py-3.5 text-[13px] font-medium tracking-wide transition-all rounded-none uppercase"
                                >
                                    Technical Architecture
                                </a>
                            </div>
                            <div className="opacity-10 hidden lg:block">
                                <Terminal className="w-64 h-64" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <CorporateFooter />
        </div>
    );
}
