"use client";

import Link from "next/link";
import { ArrowDown01Icon } from "hugeicons-react";

export function HeroSection() {
    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative h-screen flex flex-col justify-between overflow-hidden snap-section">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300" />

            {/* Decorative Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-20">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#171a20] tracking-tight mb-4 animate-fade-up">
                    HAY 2010
                </h1>
                <p className="text-lg md:text-xl text-[#5c5e62] max-w-2xl mb-2 animate-fade-up animate-delay-100">
                    Électrification • Éclairage Public • Génie Climatique
                </p>
                <p className="text-sm text-[#5c5e62]/80 animate-fade-up animate-delay-200">
                    Plus de 20 ans d’expertise au Maroc
                </p>
            </div>

            {/* CTA Buttons - Tesla Style at Bottom */}
            <div className="relative z-10 pb-24 px-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="w-full sm:w-64 py-3 px-6 bg-[#171a20] text-white text-sm font-medium text-center rounded-sm hover:bg-black transition-colors"
                    >
                        Demander un Devis
                    </Link>
                    <Link
                        href="/services"
                        className="w-full sm:w-64 py-3 px-6 bg-white/70 backdrop-blur-sm text-[#171a20] text-sm font-medium text-center rounded-sm hover:bg-white transition-colors"
                    >
                        Nos Services
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
                aria-label="Défiler vers le bas"
            >
                <ArrowDown01Icon className="w-8 h-8 text-[#5c5e62]" />
            </button>
        </section>
    );
}
