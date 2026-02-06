"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/projects" },
    { name: "Clients", href: "/clients" },
    { name: "Qualifications", href: "/qualifications" },
    { name: "À Propos", href: "/about" },
    { name: "Zones", href: "/zones" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/80 backdrop-blur-xl shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="HAY 2010"
                            width={120}
                            height={48}
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:opacity-70 ${isScrolled ? "text-[#171a20]" : "text-white lg:text-[#171a20] dark:lg:text-white"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className={`text-sm font-medium transition-colors hover:opacity-70 ${isScrolled ? "text-[#171a20]" : "text-[#171a20]"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <button className="p-2">
                                <Menu className={`w-6 h-6 ${isScrolled ? "text-[#171a20]" : "text-[#171a20]"}`} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full max-w-full bg-white border-0 p-0">
                            <div className="flex flex-col h-full">
                                {/* Close button */}
                                <div className="flex justify-between items-center p-6">
                                    <Image
                                        src="/images/logo.png"
                                        alt="HAY 2010"
                                        width={100}
                                        height={40}
                                        className="h-8 w-auto"
                                    />
                                    <button onClick={() => setIsOpen(false)}>
                                        <X className="w-6 h-6 text-[#171a20]" />
                                    </button>
                                </div>

                                {/* Navigation */}
                                <nav className="flex flex-col px-6">
                                    <Link
                                        href="/"
                                        onClick={() => setIsOpen(false)}
                                        className="py-4 text-lg font-medium text-[#171a20] border-b border-gray-100"
                                    >
                                        Accueil
                                    </Link>
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="py-4 text-lg font-medium text-[#171a20] border-b border-gray-100"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="py-4 text-lg font-medium text-[#171a20]"
                                    >
                                        Contact
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
