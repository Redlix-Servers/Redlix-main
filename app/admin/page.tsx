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
    ExternalLink,
    MessageSquare,
    Briefcase,
    Globe,
    Clock,
    Trash2,
    Edit2
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

interface SupportTicket {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    status: string;
    createdAt: string;
}

interface Client {
    id: number;
    companyName: string;
    appName?: string;
    clientName: string;
    email: string;
    phone?: string;
    meetingTemplate?: string;
    meetingTime?: string;
    developerName?: string;
    meetingLink?: string;
    createdAt: string;
}

export default function AdminPortal() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"inquiries" | "employees" | "support" | "clients">("inquiries");
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [tickets, setTickets] = useState<SupportTicket[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);
    const [isEditingClient, setIsEditingClient] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    
    // Employee Form State
    const [showAddForm, setShowAddForm] = useState(false);
    const [newEmployee, setNewEmployee] = useState({ name: "", email: "", role: "", offerLetterLink: "" });
    
    // Client Form State
    const [showAddClientForm, setShowAddClientForm] = useState(false);
    const [newClient, setNewClient] = useState({ 
        companyName: "", 
        appName: "", 
        clientName: "", 
        email: "", 
        phone: "", 
        meetingTemplate: "Discovery Call",
        meetingTime: "",
        developerName: "",
        meetingLink: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sendEmailStatus, setSendEmailStatus] = useState<{ id: number, status: 'idle' | 'sending' | 'success' | 'error' } | null>(null);

    useEffect(() => {
        if (activeTab === "inquiries") {
            fetchInquiries();
        } else if (activeTab === "employees") {
            fetchEmployees();
        } else if (activeTab === "support") {
            fetchTickets();
        } else {
            fetchClients();
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

    const fetchTickets = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/support");
            const data = await res.json();
            if (data.success) {
                setTickets(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch tickets:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchClients = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/clients");
            const data = await res.json();
            if (data.success) {
                setClients(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch clients:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateTicketStatus = async (id: number, status: string) => {
        try {
            const res = await fetch(`/api/admin/support/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status })
            });
            const data = await res.json();
            if (data.success) {
                setTickets(prev => prev.map(t => t.id === id ? { ...t, status } : t));
                if (selectedTicket?.id === id) {
                    setSelectedTicket(prev => prev ? { ...prev, status } : null);
                }
            }
        } catch (error) {
            console.error("Failed to update status:", error);
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

    const handleAddClient = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/admin/clients", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newClient),
            });
            const data = await res.json();
            if (data.success) {
                setClients([data.data, ...clients]);
                setShowAddClientForm(false);
                setNewClient({ 
                    companyName: "", 
                    appName: "", 
                    clientName: "", 
                    email: "", 
                    phone: "", 
                    meetingTemplate: "Discovery Call",
                    meetingTime: "",
                    developerName: "",
                    meetingLink: ""
                });
            }
        } catch (error) {
            console.error("Failed to add client:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteClient = async (id: number) => {
        if (!confirm("Are you sure you want to delete this client?")) return;
        try {
            const res = await fetch(`/api/admin/clients/${id}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) {
                setClients(prev => prev.filter(c => c.id !== id));
                if (selectedClient?.id === id) setSelectedClient(null);
            }
        } catch (error) {
            console.error("Failed to delete client:", error);
        }
    };

    const handleUpdateClient = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedClient) return;
        setIsSubmitting(true);
        try {
            const res = await fetch(`/api/admin/clients/${selectedClient.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(selectedClient),
            });
            const data = await res.json();
            if (data.success) {
                setClients(clients.map(c => c.id === selectedClient.id ? data.data : c));
                setIsEditingClient(false);
            }
        } catch (error) {
            console.error("Failed to update client:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const sendMeetingEmail = async (clientId: number) => {
        setSendEmailStatus({ id: clientId, status: 'sending' });
        try {
            const res = await fetch("/api/admin/clients/send-meeting", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ clientId }),
            });
            const data = await res.json();
            if (data.success) {
                setSendEmailStatus({ id: clientId, status: 'success' });
                setTimeout(() => setSendEmailStatus(null), 3000);
            } else {
                setSendEmailStatus({ id: clientId, status: 'error' });
            }
        } catch (error) {
            console.error("Failed to send meeting email:", error);
            setSendEmailStatus({ id: clientId, status: 'error' });
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

    const filteredTickets = tickets.filter(t => 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredClients = clients.filter(c => 
        c.companyName.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.appName && c.appName.toLowerCase().includes(searchQuery.toLowerCase()))
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
                        onClick={() => setActiveTab("support")}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === 'support' ? 'bg-[#E61E32]/10 text-[#E61E32]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                    >
                        <MessageSquare className="w-4 h-4" />
                        Support Tickets
                    </button>
                    <button 
                        onClick={() => setActiveTab("employees")}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === 'employees' ? 'bg-[#E61E32]/10 text-[#E61E32]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                    >
                        <Users className="w-4 h-4" />
                        Employees
                    </button>
                    <button 
                        onClick={() => setActiveTab("clients")}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === 'clients' ? 'bg-[#E61E32]/10 text-[#E61E32]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                    >
                        <Briefcase className="w-4 h-4" />
                        Clients
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
                                {activeTab === "inquiries" ? "Inquiries" : activeTab === "support" ? "Support Tickets" : activeTab === "employees" ? "Employees" : "Clients"}
                            </h2>
                            <p className="text-sm text-white/30">
                                {activeTab === "inquiries" ? "View and respond to incoming messages" : 
                                 activeTab === "support" ? "Manage and resolve client support issues" : 
                                 activeTab === "employees" ? "Manage team members and send offer letters" :
                                 "Register and manage clients, projects and meetings"}
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
                            {activeTab === "clients" && (
                                <button 
                                    onClick={() => setShowAddClientForm(!showAddClientForm)}
                                    className="flex items-center gap-2 bg-[#E61E32] hover:bg-[#E61E32]/80 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    Register Client
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
                        ) : activeTab === "support" ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                                {/* Ticket List */}
                                <div className="overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                                    {loading ? (
                                        <p className="text-white/20 text-center py-10">Loading tickets...</p>
                                    ) : filteredTickets.length > 0 ? (
                                        filteredTickets.map((t) => (
                                            <div 
                                                key={t.id}
                                                onClick={() => setSelectedTicket(t)}
                                                className={`p-5 border transition-all cursor-pointer ${selectedTicket?.id === t.id ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-bold text-white flex items-center gap-2">
                                                        {t.subject}
                                                        <span className={`px-1.5 py-0.5 text-[8px] uppercase tracking-widest font-black ${t.status === 'pending' ? 'bg-[#E61E32]/10 text-[#E61E32]' : 'bg-green-500/10 text-green-500'}`}>
                                                            {t.status}
                                                        </span>
                                                    </h3>
                                                    <span className="text-[10px] text-white/20 uppercase tracking-tighter">
                                                        {new Date(t.createdAt).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">{t.name}</p>
                                                <p className="text-xs text-white/40 truncate">{t.message}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="py-20 text-center border border-dashed border-white/5">
                                            <p className="text-white/20 text-sm">No support tickets found.</p>
                                        </div>
                                    )}
                                </div>

                                {/* Ticket Details */}
                                <div className="bg-white/5 border border-white/5 p-8 overflow-y-auto">
                                    {selectedTicket ? (
                                        <div className="space-y-8 animate-in fade-in duration-300">
                                            <div className="space-y-4 pb-6 border-b border-white/5">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-xl font-bold">{selectedTicket.subject}</h3>
                                                    <div className="flex gap-2">
                                                        {selectedTicket.status === 'pending' && (
                                                            <button 
                                                                onClick={() => handleUpdateTicketStatus(selectedTicket.id, 'resolved')}
                                                                className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest border border-green-500/20 hover:bg-green-500 hover:text-white transition-all"
                                                            >
                                                                Mark Resolved
                                                            </button>
                                                        )}
                                                        <button className="px-3 py-1 bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest border border-white/10 hover:bg-white/10 hover:text-white transition-all">
                                                            Close Ticket
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-white/30 font-medium">
                                                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {selectedTicket.name}</span>
                                                    <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {selectedTicket.email}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">Query Details</h4>
                                                <div className="bg-white/[0.02] border border-white/5 p-6">
                                                    <p className="text-sm leading-relaxed text-white/80 whitespace-pre-wrap">
                                                        {selectedTicket.message}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="pt-6">
                                                <button className="w-full flex items-center justify-center gap-2 bg-[#E61E32] text-white font-bold py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                                    <Send className="w-4 h-4" />
                                                    Reply via Email
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-center justify-center text-center opacity-20">
                                            <p className="text-sm uppercase tracking-widest font-medium">Select a ticket to view details</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : activeTab === "employees" ? (
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
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                                {/* Client List or Add Form */}
                                <div className="space-y-4 h-full flex flex-col overflow-hidden">
                                    {showAddClientForm ? (
                                        <div className="bg-white/5 border border-white/10 p-8 animate-in slide-in-from-top-4 duration-300">
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="text-lg font-bold uppercase tracking-tight">Register New Client</h3>
                                                <button onClick={() => setShowAddClientForm(false)} className="text-white/40 hover:text-white text-xs">Cancel</button>
                                            </div>
                                            <form onSubmit={handleAddClient} className="space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Company Name</label>
                                                        <input 
                                                            required
                                                            type="text"
                                                            value={newClient.companyName}
                                                            onChange={(e) => setNewClient({...newClient, companyName: e.target.value})}
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">App / Website Name</label>
                                                        <input 
                                                            type="text"
                                                            value={newClient.appName}
                                                            onChange={(e) => setNewClient({...newClient, appName: e.target.value})}
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Client Contact Name</label>
                                                        <input 
                                                            required
                                                            type="text"
                                                            value={newClient.clientName}
                                                            onChange={(e) => setNewClient({...newClient, clientName: e.target.value})}
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                                                        <input 
                                                            required
                                                            type="email"
                                                            value={newClient.email}
                                                            onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Phone Number</label>
                                                        <input 
                                                            type="tel"
                                                            value={newClient.phone}
                                                            onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Meeting Template</label>
                                                        <select 
                                                            value={newClient.meetingTemplate}
                                                            onChange={(e) => setNewClient({...newClient, meetingTemplate: e.target.value})}
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        >
                                                            <option value="Discovery Call" className="bg-[#0f0f0f]">Discovery Call</option>
                                                            <option value="Project Onboarding" className="bg-[#0f0f0f]">Project Onboarding</option>
                                                            <option value="Weekly Sync" className="bg-[#0f0f0f]">Weekly Sync</option>
                                                            <option value="Final Delivery" className="bg-[#0f0f0f]">Final Delivery</option>
                                                            <option value="Developer Meet" className="bg-[#0f0f0f]">Developer Meet</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Developer Name (For Dev Meet)</label>
                                                        <input 
                                                            type="text"
                                                            value={newClient.developerName}
                                                            onChange={(e) => setNewClient({...newClient, developerName: e.target.value})}
                                                            placeholder="Lead Engineer Name"
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Meeting Link (Custom)</label>
                                                        <input 
                                                            type="url"
                                                            value={newClient.meetingLink}
                                                            onChange={(e) => setNewClient({...newClient, meetingLink: e.target.value})}
                                                            placeholder="https://meet.google.com/..."
                                                            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Preferred Meeting Time</label>
                                                    <input 
                                                        type="datetime-local"
                                                        value={newClient.meetingTime}
                                                        onChange={(e) => setNewClient({...newClient, meetingTime: e.target.value})}
                                                        className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                    />
                                                </div>
                                                <button 
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    className="w-full bg-white text-black font-bold py-3 text-xs uppercase tracking-widest hover:bg-[#E61E32] hover:text-white transition-all disabled:opacity-50"
                                                >
                                                    {isSubmitting ? "Registering..." : "Register Client"}
                                                </button>
                                            </form>
                                        </div>
                                    ) : (
                                        <div className="overflow-y-auto space-y-3 pr-2 scrollbar-thin flex-grow">
                                            {loading ? (
                                                <p className="text-white/20 text-center py-10">Loading clients...</p>
                                            ) : filteredClients.length > 0 ? (
                                                filteredClients.map((client) => (
                                                    <div 
                                                        key={client.id}
                                                        onClick={() => setSelectedClient(client)}
                                                        className={`p-5 border transition-all cursor-pointer ${selectedClient?.id === client.id ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h3 className="font-bold text-white truncate max-w-[200px] uppercase tracking-tight">{client.companyName}</h3>
                                                                <p className="text-[10px] text-[#E61E32] font-bold uppercase tracking-wider">{client.appName || "No App Specified"}</p>
                                                            </div>
                                                            <div className="flex flex-col items-end">
                                                                <span className="text-[10px] text-white/20 uppercase tracking-tighter">
                                                                    Registered {new Date(client.createdAt).toLocaleDateString()}
                                                                </span>
                                                                {client.meetingTime && (
                                                                    <div className="mt-2 flex items-center gap-1 text-[9px] text-green-500 font-bold uppercase">
                                                                        <Clock className="w-3 h-3" />
                                                                        Scheduled
                                                                    </div>
                                                                )}
                                                                <button 
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setSelectedClient(client);
                                                                        setIsEditingClient(true);
                                                                    }}
                                                                    className="mt-2 text-[10px] text-white/40 hover:text-[#E61E32] font-bold uppercase tracking-widest transition-colors"
                                                                >
                                                                    Reschedule
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="py-20 text-center border border-dashed border-white/5">
                                                    <p className="text-white/20 text-sm">No clients found.</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Client Details */}
                                <div className="bg-white/5 border border-white/5 p-8 overflow-y-auto">
                                    {selectedClient ? (
                                        <div className="space-y-8 animate-in fade-in duration-300">
                                            <div className="space-y-2 pb-6 border-b border-white/5">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/10 text-white/40">
                                                            <Building className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold uppercase">{selectedClient.companyName}</h3>
                                                            <p className="text-sm text-[#E61E32] font-bold uppercase tracking-widest">{selectedClient.appName || "Web Project"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <button 
                                                            onClick={() => setIsEditingClient(!isEditingClient)}
                                                            className={`p-2 transition-colors ${isEditingClient ? 'text-[#E61E32]' : 'text-white/20 hover:text-white'}`}
                                                            title="Edit Client"
                                                        >
                                                            <Edit2 className="w-5 h-5" />
                                                        </button>
                                                        <button 
                                                            onClick={() => handleDeleteClient(selectedClient.id)}
                                                            className="p-2 text-white/20 hover:text-[#E61E32] transition-colors"
                                                            title="Delete Client"
                                                        >
                                                            <Trash2 className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {isEditingClient ? (
                                                <form onSubmit={handleUpdateClient} className="space-y-6 bg-white/[0.02] p-6 border border-white/5 animate-in slide-in-from-top-4 duration-300">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-1.5">
                                                            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Meeting Template</label>
                                                            <select 
                                                                value={selectedClient.meetingTemplate || ""}
                                                                onChange={(e) => setSelectedClient({...selectedClient, meetingTemplate: e.target.value})}
                                                                className="w-full bg-black border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                            >
                                                                <option value="Discovery Call">Discovery Call</option>
                                                                <option value="Project Onboarding">Project Onboarding</option>
                                                                <option value="Weekly Sync">Weekly Sync</option>
                                                                <option value="Final Delivery">Final Delivery</option>
                                                                <option value="Developer Meet">Developer Meet</option>
                                                            </select>
                                                        </div>
                                                        <div className="space-y-1.5">
                                                            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Meeting Time</label>
                                                            <input 
                                                                type="datetime-local"
                                                                value={selectedClient.meetingTime ? new Date(selectedClient.meetingTime).toISOString().slice(0, 16) : ""}
                                                                onChange={(e) => setSelectedClient({...selectedClient, meetingTime: e.target.value})}
                                                                className="w-full bg-black border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-1.5">
                                                            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Developer Assigned</label>
                                                            <input 
                                                                type="text"
                                                                value={selectedClient.developerName || ""}
                                                                onChange={(e) => setSelectedClient({...selectedClient, developerName: e.target.value})}
                                                                className="w-full bg-black border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                            />
                                                        </div>
                                                        <div className="space-y-1.5">
                                                            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Meeting Link</label>
                                                            <input 
                                                                type="url"
                                                                value={selectedClient.meetingLink || ""}
                                                                onChange={(e) => setSelectedClient({...selectedClient, meetingLink: e.target.value})}
                                                                placeholder="https://..."
                                                                className="w-full bg-black border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-white/30"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <button 
                                                            type="submit"
                                                            disabled={isSubmitting}
                                                            className="flex-grow bg-[#E61E32] text-white font-bold py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all disabled:opacity-50"
                                                        >
                                                            {isSubmitting ? "Updating..." : "Save Changes"}
                                                        </button>
                                                        <button 
                                                            type="button"
                                                            onClick={() => setIsEditingClient(false)}
                                                            className="px-6 bg-white/5 text-white/60 font-bold py-3 text-xs uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all border border-white/10"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            ) : (
                                                <>
                                                <div className="grid grid-cols-1 gap-6">
                                                    <div className="p-6 bg-white/[0.02] border border-white/5 space-y-6">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <InfoBlock label="Client Name" value={selectedClient.clientName} />
                                                            <InfoBlock label="Email Address" value={selectedClient.email} />
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <InfoBlock label="Phone Number" value={selectedClient.phone || "N/A"} />
                                                            <InfoBlock label="Registered On" value={new Date(selectedClient.createdAt).toLocaleDateString()} />
                                                        </div>
                                                    </div>

                                                    <div className="p-6 bg-[#E61E32]/5 border border-[#E61E32]/10 space-y-4">
                                                        <h4 className="text-[10px] font-bold text-[#E61E32] uppercase tracking-widest flex items-center gap-2">
                                                            <Calendar className="w-3 h-3" />
                                                            Meeting & Schedule
                                                        </h4>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <InfoBlock label="Template Type" value={selectedClient.meetingTemplate || "Standard Call"} />
                                                            <InfoBlock 
                                                                label="Scheduled Time" 
                                                                value={selectedClient.meetingTime ? new Date(selectedClient.meetingTime).toLocaleString() : "Not Scheduled"} 
                                                            />
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <InfoBlock label="Developer Assigned" value={selectedClient.developerName || "N/A"} />
                                                            <div className="space-y-1">
                                                                <p className="text-[10px] uppercase font-bold text-white/20 tracking-widest">Meeting Link</p>
                                                                {selectedClient.meetingLink ? (
                                                                    <a href={selectedClient.meetingLink} target="_blank" className="text-sm text-[#E61E32] font-medium hover:underline truncate block max-w-[200px]">
                                                                        {selectedClient.meetingLink}
                                                                    </a>
                                                                ) : (
                                                                    <p className="text-sm text-white/40 italic">No Link Provided</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="pt-6 flex gap-4">
                                                    <button 
                                                        onClick={() => sendMeetingEmail(selectedClient.id)}
                                                        disabled={(sendEmailStatus?.id === selectedClient.id && sendEmailStatus.status === 'sending') || !selectedClient.meetingTime}
                                                        className="flex-grow flex items-center justify-center gap-2 bg-white text-black font-bold py-4 text-xs uppercase tracking-widest hover:bg-[#E61E32] hover:text-white transition-all disabled:opacity-50"
                                                    >
                                                        {sendEmailStatus?.id === selectedClient.id && sendEmailStatus.status === 'sending' ? (
                                                            <Loader2 className="w-4 h-4 animate-spin" />
                                                        ) : (
                                                            <Mail className="w-4 h-4" />
                                                        )}
                                                        {sendEmailStatus?.id === selectedClient.id && sendEmailStatus.status === 'success' ? "Details Sent" : "Send Meeting Details"}
                                                    </button>
                                                    <button className="flex-grow flex items-center justify-center gap-2 bg-white/5 text-white/60 font-bold py-4 text-xs uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all border border-white/10">
                                                        <Globe className="w-4 h-4" />
                                                        Open Dashboard
                                                    </button>
                                                </div>
                                                </>
                                            )}
                                            {sendEmailStatus?.id === selectedClient.id && sendEmailStatus.status === 'error' && (
                                                <p className="text-[10px] text-[#E61E32] text-center mt-2 font-bold uppercase">Error sending meeting details. Check logs.</p>
                                            )}
                                            {!selectedClient.meetingTime && (
                                                <p className="text-[10px] text-white/20 text-center mt-2 font-bold uppercase">Schedule a meeting to send details</p>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-center justify-center text-center opacity-20">
                                            <p className="text-sm uppercase tracking-widest font-medium text-center">
                                                Select a client to<br/>view full details and projects
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
