"use client";

import Link from "next/link";
import { Location01Icon, Globe02Icon, MapsLocation01Icon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const majorCities = [
    "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir",
    "Meknès", "Oujda", "Kénitra", "Tétouan", "Salé", "Nador",
    "Laâyoune", "Dakhla", "Errachidia", "Ouarzazate"
];

export function CoverageSection() {
    return (
        <section className="relative py-24 bg-[#171a20] overflow-hidden text-white" id="coverage">
            {/* Background Map Placeholder/Effect */}
            <div className="absolute inset-0 z-0 opacity-20">
                {/* Abstract topographic lines or grid could go here */}
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#3e6ae1] rounded-full blur-[150px] opacity-20" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <Badge variant="outline" className="mb-6 text-[#3e6ae1] border-[#3e6ae1] bg-[#3e6ae1]/10">
                    <Globe02Icon className="w-3 h-3 mr-2" />
                    Couverture Nationale
                </Badge>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Intervention sur Tout le <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e6ae1] to-[#60a5fa]">
                        Territoire Marocain
                    </span>
                </h2>

                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
                    Nos équipes mobiles et nos agences régionales assurent une réactivité optimale
                    pour vos projets, où que vous soyez.
                </p>

                {/* Cities Grid */}
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-16">
                    {majorCities.map((city, index) => (
                        <div
                            key={city}
                            className="group relative px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#3e6ae1] hover:border-[#3e6ae1] transition-all duration-300 cursor-default overflow-hidden"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                {city}
                            </span>
                        </div>
                    ))}
                    <div className="px-6 py-3 border border-dashed border-white/20 rounded-full text-sm text-gray-500">
                        + Et bien d'autres
                    </div>
                </div>

                {/* Main Visual/Stats - Simplified for now */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-white mb-2">12+</div>
                        <div className="text-sm text-gray-400">Régions Couvertes</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-[#3e6ae1] mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Support Technique</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-white mb-2">4h</div>
                        <div className="text-sm text-gray-400">Délai d'Intervention</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full bg-white text-[#171a20] hover:bg-gray-200">
                        <Link href="/contact">
                            Vérifier Disponibilité
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                        <Link href="/zones">
                            <MapsLocation01Icon className="w-4 h-4 mr-2" />
                            Carte D détaillée
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
