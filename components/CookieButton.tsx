"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [preferencesOn, setPreferencesOn] = useState(true);
    const [isHydrated, setIsHydrated] = useState(false);
    const [hasDecided, setHasDecided] = useState(false);

    // Sync state with localStorage on mount
    useEffect(() => {
        const savedPrefs = localStorage.getItem("redlix_cookie_prefs");
        if (savedPrefs) {
            const parsed = JSON.parse(savedPrefs);
            setPreferencesOn(parsed.performance);
            setHasDecided(true);

            // Reactivate tracking if previously granted
            if (parsed.performance && (window as any).gtag) {
                (window as any).gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                    'ad_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted'
                });
            }
        }
        setIsHydrated(true);
    }, []);

    // Apply "Upgrade" to the body based on preferences
    useEffect(() => {
        if (!isHydrated) return;

        if (preferencesOn) {
            document.documentElement.setAttribute("data-experience-level", "optimized");
            document.body.classList.add("system-upgrade-active");
        } else {
            document.documentElement.setAttribute("data-experience-level", "standard");
            document.body.classList.remove("system-upgrade-active");
        }
    }, [preferencesOn, isHydrated]);

    const handleSave = (allAccepted: boolean, prefValue?: boolean) => {
        const value = allAccepted ? true : (prefValue ?? preferencesOn);
        setPreferencesOn(value);
        localStorage.setItem("redlix_cookie_prefs", JSON.stringify({
            essential: true,
            performance: value,
            timestamp: new Date().toISOString()
        }));
        setIsOpen(false);
        setHasDecided(true);

        // Update Google Tag Consent
        if ((window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                'analytics_storage': value ? 'granted' : 'denied',
                'ad_storage': value ? 'granted' : 'denied',
                'ad_user_data': value ? 'granted' : 'denied',
                'ad_personalization': value ? 'granted' : 'denied'
            });
        }
    };

    // Prevent body and html scroll when panel is open
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    if (!isHydrated) return null;

    return (
        <>
            {/* Simple Bottom Banner */}
            {!hasDecided && !isOpen && (
                <div className="fixed bottom-0 left-0 right-0 z-[120] bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-full duration-700">
                    <div className="max-w-[1400px] mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-grow max-w-2xl">
                            <h3 className="text-[13px] font-bold text-black uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#E61E32] rounded-full" />
                                Cookie Consent
                            </h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed">
                                We use cookies for structural integrity, performance analysis, and security. By clicking "Accept All", you agree to our use of these technologies for analytics and personalized content details. Explore our <a href="/cookies" className="underline font-bold hover:text-[#E61E32] transition-colors">Cookies Policy</a> for more info.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 shrink-0">
                            <button 
                                onClick={() => setIsOpen(true)}
                                className="text-[11px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors px-4 py-2"
                            >
                                Customize
                            </button>
                            <button 
                                onClick={() => handleSave(false, false)}
                                className="bg-transparent border border-black text-black px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-black/5 transition-colors rounded-none"
                            >
                                Reject
                            </button>
                            <button 
                                onClick={() => handleSave(true)}
                                className="bg-[#E61E32] text-white px-8 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#CC192A] transition-all shadow-lg hover:shadow-[#E61E32]/20 rounded-none"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-[125] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Cookie Panel Drawer (Keep for 'Customize') */}
            <div
                className={`fixed top-0 right-0 w-full md:w-[480px] h-full bg-[#f8f9fa] z-[130] shadow-2xl flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex-1 overflow-y-auto w-full custom-scrollbar" data-lenis-prevent>
                    <div className="p-8 md:p-10">
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <h2 className="text-[26px] font-bold text-black leading-tight tracking-tight">
                                    Cookie Preferences
                                </h2>
                                <p className="text-[14px] text-gray-500 mt-2">Manage your data architectural controls.</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-black transition-colors">
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 bg-white border border-gray-100">
                                <h4 className="text-[15px] font-bold text-black uppercase tracking-wide mb-2">Essential Core</h4>
                                <p className="text-[13px] text-gray-500 leading-relaxed">
                                    Required for secure handshakes and platform stability. Always active.
                                </p>
                            </div>

                            <div className="p-6 bg-white border border-gray-100 flex items-start justify-between gap-4">
                                <div className="space-y-1">
                                    <h4 className="text-[15px] font-bold text-black uppercase tracking-wide">Performance Tracking</h4>
                                    <p className="text-[13px] text-gray-500 leading-relaxed">
                                        Enables diagnostic monitoring to refine user pathways.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setPreferencesOn(!preferencesOn)}
                                    className="relative shrink-0 w-[48px] h-[26px] bg-white border-2 border-black rounded-full transition-colors"
                                >
                                    <span
                                        className={`absolute top-[2px] left-[2px] w-[18px] h-[18px] rounded-full transition-transform duration-300 ${preferencesOn ? "bg-[#E61E32] translate-x-[22px]" : "bg-gray-400 translate-x-0"}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-[#f8f9fa] border-t border-gray-200">
                    <button
                        onClick={() => handleSave(false)}
                        className="w-full bg-black text-white font-bold text-[14px] py-4 uppercase tracking-[0.2em] hover:bg-black/90 transition-colors rounded-none"
                    >
                        Apply Preferences
                    </button>
                </div>
            </div>
        </>
    );
}
