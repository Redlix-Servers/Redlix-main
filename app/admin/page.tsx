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
    LogOut,
    Users,
    Plus,
    Send,
    Loader2,
    ExternalLink
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

interface Employee {
    id: number;
    name: string;
    email: string;
    role: string;
    offerLetterLink?: string;
    joinedAt: string;
}

export default function AdminPortal() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"inquiries" | "employees">("inquiries");
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    
    // Employee Form State
    const [showAddForm, setShowAddForm] = useState(false);
    const [newEmployee, setNewEmployee] = useState({ name: "", email: "", role: "", offerLetterLink: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sendEmailStatus, setSendEmailStatus] = useState<{ id: number, status: 'idle' | 'sending' | 'success' | 'error' } | null>(null);

    useEffect(() => {
        if (activeTab === "inquiries") {
            fetchInquiries();
        } else {
            fetchEmployees();
        }
    }, [activeTab]);

    const fetchInquiries = async () => {
        setLoading(true);
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

    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/employees");
            const data = await res.json();
            if (data.success) {
                setEmployees(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch employees:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddEmployee = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/admin/employees", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEmployee),
            });
            const data = await res.json();
            if (data.success) {
                setEmployees([data.data, ...employees]);
                setShowAddForm(false);
                setNewEmployee({ name: "", email: "", role: "", offerLetterLink: "" });
            }
        } catch (error) {
            console.error("Failed to add employee:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const sendOfferLetter = async (employeeId: number) => {
        setSendEmailStatus({ id: employeeId, status: 'sending' });
        try {
            const res = await fetch("/api/admin/employees/send-offer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ employeeId }),
            });
            const data = await res.json();
            if (data.success) {
                setSendEmailStatus({ id: employeeId, status: 'success' });
                setTimeout(() => setSendEmailStatus(null), 3000);
            } else {
                setSendEmailStatus({ id: employeeId, status: 'error' });
            }
        } catch (error) {
            console.error("Failed to send email:", error);
            setSendEmailStatus({ id: employeeId, status: 'error' });
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

    const filteredEmployees = employees.filter(emp => 
        emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchQuery.toLowerCase())
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
                    <button 
                        onClick={() => setActiveTab("inquiries")}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === 'inquiries' ? 'bg-[#E61E32]/10 text-[#E61E32]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                    >
                        <Inbox className="w-4 h-4" />
                        Inquiries
                    </button>
                    <button 
                        onClick={() => setActiveTab("employees")}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === 'employees' ? 'bg-[#E61E32]/10 text-[#E61E32]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                    >
                        <Users className="w-4 h-4" />
                        Employees
                    </button>
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
                <div className="max-w-6xl mx-auto space-y-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-center bg-white/[0.02] p-8 border border-white/5 shrink-0">
                        <div>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                                {activeTab === "inquiries" ? "Inquiries" : "Employees"}
                            </h2>
                            <p className="text-sm text-white/30">
                                {activeTab === "inquiries" ? "View and respond to incoming messages" : "Manage team members and send offer letters"}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            {activeTab === "employees" && (
                                <button 
                                    onClick={() => setShowAddForm(!showAddForm)}
                                    className="flex items-center gap-2 bg-[#E61E32] hover:bg-[#E61E32]/80 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Employee
                                </button>
                            )}
                            <div className="relative w-72">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <input 
                                    type="text"
                                    placeholder={`Search ${activeTab}...`}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 px-10 py-2.5 text-sm focus:outline-none focus:border-white/30"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Views */}
                    <div className="flex-grow overflow-hidden">
                        {activeTab === "inquiries" ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                                {/* Inquiry List */}
                                <div className="overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                                    {loading ? (
                                        <p className="text-white/20 text-center py-10">Loading inquiries...</p>
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
                                            <p className="text-white/20 text-sm">No inquiries found.</p>
                                        </div>
                                    )}
                                </div>

                                {/* Inquiry Details */}
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
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                                {/* Employee List or Add Form */}
                                <div className="space-y-4 h-full flex flex-col overflow-hidden">
                                    {showAddForm ? (
                                        <div className="bg-white/5 border border-white/10 p-8 animate-in slide-in-from-top-4 duration-300">
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="text-lg font-bold uppercase tracking-tight">Add New Employee</h3>
                                                <button onClick={() => setShowAddForm(false)} className="text-white/40 hover:text-white text-xs">Cancel</button>
                                            </div>
                                            <form onSubmit={handleAddEmployee} className="space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Full Name</label>
                                                        <input 
                                                            required
                                                            type="text"
                                                            value={newEmployee.name}
                                                            onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                                                        <input 
                                                            required
                                                            type="email"
                                                            value={newEmployee.email}
                                                            onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Job Role</label>
                                                        <input 
                                                            required
                                                            type="text"
                                                            value={newEmployee.role}
                                                            onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Offer Letter Link</label>
                                                        <input 
                                                            type="url"
                                                            value={newEmployee.offerLetterLink}
                                                            onChange={(e) => setNewEmployee({...newEmployee, offerLetterLink: e.target.value})}
                                                            placeholder="https://..."
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                </div>
                                                <button 
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    className="w-full bg-white text-black font-bold py-3 text-xs uppercase tracking-widest hover:bg-white/90 transition-colors disabled:opacity-50"
                                                >
                                                    {isSubmitting ? "Creating..." : "Save Employee"}
                                                </button>
                                            </form>
                                        </div>
                                    ) : (
                                        <div className="overflow-y-auto space-y-3 pr-2 scrollbar-thin flex-grow">
                                            {loading ? (
                                                <p className="text-white/20 text-center py-10">Loading employees...</p>
                                            ) : filteredEmployees.length > 0 ? (
                                                filteredEmployees.map((emp) => (
                                                    <div 
                                                        key={emp.id}
                                                        onClick={() => setSelectedEmployee(emp)}
                                                        className={`p-5 border transition-all cursor-pointer ${selectedEmployee?.id === emp.id ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h3 className="font-bold text-white truncate max-w-[200px]">{emp.name}</h3>
                                                                <p className="text-[10px] text-[#E61E32] font-bold uppercase tracking-wider">{emp.role}</p>
                                                            </div>
                                                            <div className="flex flex-col items-end">
                                                                <span className="text-[10px] text-white/20 uppercase tracking-tighter">
                                                                    Joined {new Date(emp.joinedAt).toLocaleDateString()}
                                                                </span>
                                                                <div className="mt-2 flex gap-2">
                                                                    <button 
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            sendOfferLetter(emp.id);
                                                                        }}
                                                                        disabled={sendEmailStatus?.id === emp.id && sendEmailStatus.status === 'sending'}
                                                                        className={`flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-tight border transition-colors ${
                                                                            sendEmailStatus?.id === emp.id && sendEmailStatus.status === 'success' 
                                                                            ? 'bg-green-500/10 border-green-500/50 text-green-500' 
                                                                            : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/60 hover:text-white'
                                                                        }`}
                                                                    >
                                                                        {sendEmailStatus?.id === emp.id && sendEmailStatus.status === 'sending' ? (
                                                                            <Loader2 className="w-3 h-3 animate-spin" />
                                                                        ) : (
                                                                            <Send className="w-3 h-3" />
                                                                        )}
                                                                        {sendEmailStatus?.id === emp.id && sendEmailStatus.status === 'success' ? "Sent" : "Send Mail"}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="py-20 text-center border border-dashed border-white/5">
                                                    <p className="text-white/20 text-sm">No employees found.</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Employee Details */}
                                <div className="bg-white/5 border border-white/5 p-8 overflow-y-auto">
                                    {selectedEmployee ? (
                                        <div className="space-y-8 animate-in fade-in duration-300">
                                            <div className="space-y-2 pb-6 border-b border-white/5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/10">
                                                        <User className="w-6 h-6 text-white/40" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold">{selectedEmployee.name}</h3>
                                                        <p className="text-sm text-[#E61E32] font-bold uppercase tracking-widest">{selectedEmployee.role}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 gap-6">
                                                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-4">
                                                    <InfoBlock label="Email Address" value={selectedEmployee.email} />
                                                    <InfoBlock label="Joined Date" value={new Date(selectedEmployee.joinedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} />
                                                </div>

                                                <div className="p-4 bg-white/[0.02] border border-white/5">
                                                    <p className="text-[10px] uppercase font-bold text-white/20 tracking-widest mb-3">Offer letter</p>
                                                    {selectedEmployee.offerLetterLink ? (
                                                        <a 
                                                            href={selectedEmployee.offerLetterLink} 
                                                            target="_blank" 
                                                            className="flex items-center justify-between group bg-white/5 hover:bg-white/10 border border-white/10 p-3 transition-colors"
                                                        >
                                                            <span className="text-xs font-medium text-white/60 group-hover:text-white truncate pr-4">{selectedEmployee.offerLetterLink}</span>
                                                            <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60" />
                                                        </a>
                                                    ) : (
                                                        <p className="text-xs text-white/30 italic">No link provided</p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="pt-6">
                                                <button 
                                                    onClick={() => sendOfferLetter(selectedEmployee.id)}
                                                    disabled={sendEmailStatus?.id === selectedEmployee.id && sendEmailStatus.status === 'sending'}
                                                    className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-4 text-xs uppercase tracking-widest hover:bg-[#E61E32] hover:text-white transition-all disabled:opacity-50"
                                                >
                                                    {sendEmailStatus?.id === selectedEmployee.id && sendEmailStatus.status === 'sending' ? (
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                    ) : (
                                                        <Mail className="w-4 h-4" />
                                                    )}
                                                    Send Official Offer Email
                                                </button>
                                                {sendEmailStatus?.id === selectedEmployee.id && sendEmailStatus.status === 'error' && (
                                                    <p className="text-[10px] text-[#E61E32] text-center mt-2 font-bold uppercase">Error sending email. Check logs.</p>
                                                )}
                                                {sendEmailStatus?.id === selectedEmployee.id && sendEmailStatus.status === 'success' && (
                                                    <p className="text-[10px] text-green-500 text-center mt-2 font-bold uppercase">Offer letter sent successfully!</p>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-center justify-center text-center opacity-20">
                                            <p className="text-sm uppercase tracking-widest font-medium text-center">
                                                Select an employee to<br/>view details and send mail
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
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
            <p className="text-sm text-white/80 font-medium">{value}</p>
        </div>
    );
}
