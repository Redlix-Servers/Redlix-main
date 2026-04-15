"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import CookieButton from "./CookieButton";
import ContactPopup from "./ContactPopup";

export default function ConditionalNav({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith("/admin");

    if (isAdminPage) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <main className="pt-20">
                <SubNavbar />
                {children}
            </main>
            <CookieButton />
            <ContactPopup />
        </>
    );
}
