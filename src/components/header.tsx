"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu01Icon, Cancel01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/projects" },
    { name: "Clients", href: "/clients" },
    { name: "Qualifications", href: "/qualifications" },
    { name: "Recrutement", href: "/recrutement" },
    { name: "À Propos", href: "/about" },
    { name: "Zones", href: "/zones" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20 transition-all duration-300">
                    {/* Logo */}
                    <Link href="/" className="flex items-center relative group">
                        <Image
                            src="/images/logo.png"
                            alt="HAY 2010"
                            width={140}
                            height={56}
                            className={`h-12 w-auto transition-all duration-300 ${isScrolled ? "brightness-100" : "brightness-0 invert"}`}
                            priority
                        />
                        {/* Subtle glow behind logo on dark backgrounds */}
                        {!isScrolled && (
                            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        )}
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative text-sm font-medium transition-colors hover:opacity-100 group ${isScrolled
                                    ? "text-[#171a20] opacity-80"
                                    : "text-white opacity-90"
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-[#3e6ae1]" : "bg-white"}`} />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            asChild
                            className={`rounded-full px-6 transition-all duration-300 ${isScrolled
                                ? "bg-[#171a20] text-white hover:bg-[#3e6ae1] hover:shadow-lg hover:-translate-y-0.5"
                                : "bg-white text-[#171a20] hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5"
                                }`}
                        >
                            <Link href="/contact">
                                Contact
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu - only render after mount to avoid hydration mismatch */}
                    {mounted ? (
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <button className={`p-2 transition-colors ${isScrolled ? "text-[#171a20]" : "text-white"}`} aria-label="Toggle menu">
                                    <Menu01Icon className="w-8 h-8" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full sm:w-[400px] bg-white border-l border-gray-100 p-0">
                                <div className="flex flex-col h-full bg-[#FAFAFA]">
                                    {/* Close button */}
                                    <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
                                        <Image
                                            src="/images/logo.png"
                                            alt="HAY 2010"
                                            width={120}
                                            height={48}
                                            className="h-10 w-auto"
                                        />
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                            aria-label="Close menu"
                                        >
                                            <Cancel01Icon className="w-6 h-6 text-[#171a20]" />
                                        </button>
                                    </div>

                                    {/* Navigation */}
                                    <nav className="flex flex-col p-6 gap-2">
                                        <Link
                                            href="/"
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-center justify-between p-4 text-lg font-medium text-[#171a20] bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[#3e6ae1]/30 hover:shadow-md transition-all duration-300"
                                        >
                                            Accueil
                                            <span className="w-2 h-2 rounded-full bg-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="group flex items-center justify-between p-4 text-lg font-medium text-[#171a20] bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[#3e6ae1]/30 hover:shadow-md transition-all duration-300"
                                            >
                                                {item.name}
                                                <span className="w-2 h-2 rounded-full bg-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        ))}
                                        <div className="mt-4">
                                            <Button asChild className="w-full rounded-xl py-6 text-lg bg-[#3e6ae1] hover:bg-[#2a4db3] shadow-lg shadow-blue-500/20">
                                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                                    Demander un devis
                                                </Link>
                                            </Button>
                                        </div>
                                    </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                    ) : (
                        <button className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-[#171a20]" : "text-white"}`} aria-label="Toggle menu">
                            <Menu01Icon className="w-8 h-8" />
                        </button>
                    )}
                </div>
            </div>

            {/* Scrolled Accent Line */}
            <div
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3e6ae1]/50 to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`}
            />
        </header>
    );
}
