"use client";

import React, { useState } from "react";
import { Send, MessageSquare, Mail, User, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import CorporateFooter from "@/components/CorporateFooter";

export default function SupportPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch("/api/support", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Support submission error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50" />
                    
                    <div className="max-w-7xl mx-auto px-6 relative">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
                                Client <span className="text-[#E61E32]">Support</span>
                            </h1>
                            <p className="text-xl text-white/40 font-medium max-w-xl leading-relaxed">
                                Have a technical issue or need help with a project? Submit a support ticket, and our team will get back to you within 24 hours.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Left: Form */}
                            <div className="space-y-10">
                                {status === 'success' ? (
                                    <div className="bg-white/[0.02] border border-white/10 p-12 text-center space-y-6">
                                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-bold uppercase tracking-tight">Ticket Submitted</h3>
                                            <p className="text-white/40">Check your email for a confirmation. Our team is on it.</p>
                                        </div>
                                        <button 
                                            onClick={() => setStatus('idle')}
                                            className="text-[#E61E32] font-bold uppercase tracking-widest text-sm flex items-center gap-2 mx-auto hover:gap-4 transition-all"
                                        >
                                            Submit another query <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Your Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                                    <input 
                                                        required
                                                        type="text"
                                                        placeholder="Full Name"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                        className="w-full bg-white/[0.03] border border-white/10 px-12 py-4 text-sm focus:outline-none focus:border-[#E61E32]/50 transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Address</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                                    <input 
                                                        required
                                                        type="email"
                                                        placeholder="email@company.com"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                        className="w-full bg-white/[0.03] border border-white/10 px-12 py-4 text-sm focus:outline-none focus:border-[#E61E32]/50 transition-colors"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Subject</label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                                <input 
                                                    required
                                                    type="text"
                                                    placeholder="Briefly describe the issue"
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                                    className="w-full bg-white/[0.03] border border-white/10 px-12 py-4 text-sm focus:outline-none focus:border-[#E61E32]/50 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Detailed Message</label>
                                            <textarea 
                                                required
                                                rows={6}
                                                placeholder="Tell us everything about the problem..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                className="w-full bg-white/[0.03] border border-white/10 p-6 text-sm focus:outline-none focus:border-[#E61E32]/50 transition-colors resize-none"
                                            />
                                        </div>

                                        <button 
                                            disabled={status === 'submitting'}
                                            type="submit"
                                            className="w-full bg-[#E61E32] hover:bg-white hover:text-black py-5 font-black uppercase text-sm tracking-[0.2em] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                        >
                                            {status === 'submitting' ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <Send className="w-5 h-5" />
                                            )}
                                            {status === 'submitting' ? 'Processing...' : 'Assign Secure Ticket'}
                                        </button>
                                        
                                        {status === 'error' && (
                                            <p className="text-center text-red-500 text-xs font-bold uppercase tracking-wider">
                                                Submission failed. Please try again or contact HR.
                                            </p>
                                        )}
                                    </form>
                                )}
                            </div>

                            {/* Right: Info */}
                            <div className="lg:pt-8 space-y-12">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#E61E32]">Emergency Support</h4>
                                    <p className="text-2xl font-bold leading-tight">Our technical team is available 24/7 for critical enterprise issues.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <SupportCard 
                                        title="Direct Email"
                                        detail="support@redlix.co.in"
                                        desc="For billing and non-technical account queries."
                                    />
                                    <SupportCard 
                                        title="Knowledge Base"
                                        detail="Documentation"
                                        desc="Read our technical guides and project manuals."
                                    />
                                </div>

                                <div className="p-8 border border-white/5 bg-white/[0.01]">
                                    <p className="text-white/30 text-sm leading-relaxed italic">
                                        "Redlix support handles every ticket with extreme technical precision. We've optimized our response time to ensure no project downtime for our partners."
                                    </p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest mt-4 text-[#E61E32]">— Systems Administrator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <CorporateFooter />
        </div>
    );
}

function SupportCard({ title, detail, desc }: { title: string, detail: string, desc: string }) {
    return (
        <div className="p-6 border border-white/5 bg-white/[0.02] space-y-3">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-white/30">{title}</h5>
            <p className="text-lg font-bold">{detail}</p>
            <p className="text-xs text-white/20 leading-relaxed font-medium">{desc}</p>
        </div>
    );
}
