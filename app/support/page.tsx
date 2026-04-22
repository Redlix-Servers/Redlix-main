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
                {/* Simple Header */}
                <section className="pt-24 pb-12 border-b border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold mb-4">
                                Get in touch with <span className="text-[#E61E32]">Support</span>
                            </h1>
                            <p className="text-lg text-white/50 leading-relaxed">
                                Please fill out the form below with your query and our team will get back to you within 24 hours.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-xl">
                            {status === 'success' ? (
                                <div className="bg-white/[0.02] border border-white/10 p-10 text-center space-y-6">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold">Ticket submitted</h3>
                                        <p className="text-white/40">Check your email for a confirmation. Our team is on it.</p>
                                    </div>
                                    <button 
                                        onClick={() => setStatus('idle')}
                                        className="text-[#E61E32] font-semibold text-sm flex items-center gap-2 mx-auto hover:gap-3 transition-all"
                                    >
                                        Submit another query <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-white/40">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                                <input 
                                                    required
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                    className="w-full bg-white/[0.03] border border-white/10 px-12 py-3.5 text-sm focus:outline-none focus:border-[#E61E32]/50 transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-white/40">Email address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                                <input 
                                                    required
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                    className="w-full bg-white/[0.03] border border-white/10 px-12 py-3.5 text-sm focus:outline-none focus:border-[#E61E32]/50 transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-white/40">Subject</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                            <input 
                                                required
                                                type="text"
                                                placeholder="What can we help with?"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                                className="w-full bg-white/[0.03] border border-white/10 px-12 py-3.5 text-sm focus:outline-none focus:border-[#E61E32]/50 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-white/40">Message</label>
                                        <textarea 
                                            required
                                            rows={6}
                                            placeholder="Describe your issue in detail..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm focus:outline-none focus:border-[#E61E32]/50 transition-colors resize-none"
                                        />
                                    </div>

                                    <button 
                                        disabled={status === 'submitting'}
                                        type="submit"
                                        className="w-full bg-[#E61E32] hover:bg-white hover:text-black py-4 font-bold text-sm transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {status === 'submitting' ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <Send className="w-5 h-5" />
                                        )}
                                        {status === 'submitting' ? 'Submitting...' : 'Submit ticket'}
                                    </button>
                                    
                                    {status === 'error' && (
                                        <p className="text-center text-red-500 text-xs font-semibold">
                                            Submission failed. Please try again.
                                        </p>
                                    )}
                                </form>
                            )}
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
            <h5 className="text-[10px] font-bold text-white/30 tracking-widest">{title}</h5>
            <p className="text-lg font-bold">{detail}</p>
            <p className="text-xs text-white/20 leading-relaxed font-medium">{desc}</p>
        </div>
    );
}
