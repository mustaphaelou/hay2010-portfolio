"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

const cities = [
    "Rabat", "Casablanca", "Marrakech", "Fès", "Tanger", "Agadir",
    "Meknès", "Oujda", "Kénitra", "Tétouan", "Salé", "Nador"
];

export function CoverageSection() {
    return (
        <section className="min-h-screen flex flex-col justify-between snap-section bg-gradient-to-b from-slate-100 to-slate-200">
            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20">
                <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-8 shadow-lg">
                    <MapPin className="w-8 h-8 text-[#171a20]" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#171a20] tracking-tight mb-4 text-center">
                    Couverture Nationale
                </h2>
                <p className="text-lg md:text-xl text-[#5c5e62] mb-12 text-center">
                    Nous intervenons sur tout le territoire marocain
                </p>

                {/* Cities Grid */}
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
                    {cities.map((city) => (
                        <span
                            key={city}
                            className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#171a20]"
                        >
                            {city}
                        </span>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="pb-24 px-6">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/zones"
                        className="py-3 px-8 bg-[#171a20] text-white text-sm font-medium text-center rounded-sm hover:bg-black transition-colors"
                    >
                        Voir Toutes les Zones
                    </Link>
                    <Link
                        href="/contact"
                        className="py-3 px-8 bg-white/70 backdrop-blur-sm text-[#171a20] text-sm font-medium text-center rounded-sm hover:bg-white transition-colors"
                    >
                        Vérifier Disponibilité
                    </Link>
                </div>
            </div>
        </section>
    );
}
