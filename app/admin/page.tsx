"use client";

import React, { useState, useEffect } from "react";
import { 
    Search, 
    Mail, 
    Phone, 
    User,
    Building, 
    Calendar, 
    CheckCircle2,
    Inbox,
    LogOut
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Inquiry {
    id: number;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    service?: string;
    message: string;
    createdAt: string;
    isRead: boolean;
}

export default function AdminPortal() {
    const router = useRouter();
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        try {
            const res = await fetch("/api/admin/inquiries");
            const data = await res.json();
            if (data.success) {
                setInquiries(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch inquiries:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };

    const markAsRead = async (id: number) => {
        try {
            await fetch(`/api/admin/inquiries/${id}`, { 
                method: "PATCH", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isRead: true }) 
            });
            setInquiries(prev => prev.map(inv => inv.id === id ? { ...inv, isRead: true } : inv));
            if (selectedInquiry?.id === id) {
                setSelectedInquiry(prev => prev ? { ...prev, isRead: true } : null);
            }
        } catch (error) {
            console.error("Failed to mark as read:", error);
        }
    };

    const filteredInquiries = inquiries.filter(inv => 
        inv.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        inv.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex font-sans">
            {/* Simple Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#0f0f0f] flex flex-col p-6 space-y-8">
                <div>
                    <h1 className="text-xl font-bold text-white tracking-tight">Admin</h1>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Status: Online</p>
                </div>

                <nav className="flex-grow space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-[#E61E32]/10 text-[#E61E32] text-sm font-medium">
                        <Inbox className="w-4 h-4" />
                        Inquiries
                    </button>
                    {/* Add other simple links here if needed later */}
                </nav>

                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-2.5 text-white/40 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium border border-white/5"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-grow p-10 overflow-hidden">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Header */}
                    <div className="flex justify-between items-center bg-white/[0.02] p-8 border border-white/5">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Inquiries</h2>
                            <p className="text-sm text-white/30">View and respond to incoming messages</p>
                        </div>
                        <div className="relative w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                            <input 
                                type="text"
                                placeholder="Search leads..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 px-10 py-2.5 text-sm focus:outline-none focus:border-white/30"
                            />
                        </div>
                    </div>

                    {/* Data View */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-280px)]">
                        {/* List */}
                        <div className="overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                            {loading ? (
                                <p className="text-white/20 text-center py-10">Loading data...</p>
                            ) : filteredInquiries.length > 0 ? (
                                filteredInquiries.map((inv) => (
                                    <div 
                                        key={inv.id}
                                        onClick={() => {
                                            setSelectedInquiry(inv);
                                            if (!inv.isRead) markAsRead(inv.id);
                                        }}
                                        className={`p-5 border transition-all cursor-pointer ${selectedInquiry?.id === inv.id ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-white flex items-center gap-2">
                                                {inv.name}
                                                {!inv.isRead && <span className="w-1.5 h-1.5 bg-[#E61E32] rounded-full" />}
                                            </h3>
                                            <span className="text-[10px] text-white/20 uppercase tracking-tighter">
                                                {new Date(inv.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-xs text-white/40 truncate">{inv.message}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="py-20 text-center border border-dashed border-white/5">
                                    <p className="text-white/20 text-sm">No data available.</p>
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="bg-white/5 border border-white/5 p-8 overflow-y-auto">
                            {selectedInquiry ? (
                                <div className="space-y-8 animate-in fade-in duration-300">
                                    <div className="space-y-2 pb-6 border-b border-white/5">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold">{selectedInquiry.name}</h3>
                                            {selectedInquiry.isRead && <CheckCircle2 className="w-4 h-4 text-green-500/50" />}
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm text-white/30 font-medium">
                                            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {selectedInquiry.email}</span>
                                            {selectedInquiry.phone && <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {selectedInquiry.phone}</span>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <InfoBlock label="Company" value={selectedInquiry.company} />
                                        <InfoBlock label="Service" value={selectedInquiry.service} />
                                    </div>

                                    <div className="space-y-3 pt-6 border-t border-white/5">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">Message</h4>
                                        <p className="text-sm leading-relaxed text-white/70 whitespace-pre-wrap">
                                            {selectedInquiry.message}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex items-center justify-center text-center opacity-20">
                                    <p className="text-sm uppercase tracking-widest font-medium">Select an inquiry to view details</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function InfoBlock({ label, value }: { label: string, value?: string }) {
    if (!value) return null;
    return (
        <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-white/20 tracking-widest">{label}</p>
            <p className="text-xs text-white/60 font-medium">{value}</p>
        </div>
    );
}
