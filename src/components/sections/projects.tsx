"use client";

import Link from "next/link";
import { ChevronDown, TrendingUp } from "lucide-react";

const projects = [
    {
        title: "Commune de Témara",
        category: "Éclairage Public",
        stats: "450 luminaires LED",
        bg: "from-blue-100 to-slate-100",
    },
    {
        title: "Zone Industrielle Aïn Johra",
        category: "Électrification HTA",
        stats: "12 km réseau • 8 postes",
        bg: "from-green-50 to-emerald-100",
    },
    {
        title: "Centre Commercial Marjane",
        category: "Génie Climatique",
        stats: "15,000 m² climatisés",
        bg: "from-cyan-50 to-blue-100",
    },
];

export function ProjectsSection() {
    return (
        <>
            {projects.map((project, index) => (
                <section
                    key={index}
                    className={`relative min-h-screen flex flex-col justify-between snap-section bg-gradient-to-b ${project.bg}`}
                >
                    {/* Content */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#5c5e62] mb-8">
                            <TrendingUp className="w-4 h-4" />
                            {project.category}
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#171a20] tracking-tight mb-4">
                            {project.title}
                        </h2>
                        <p className="text-lg md:text-xl text-[#5c5e62]">
                            {project.stats}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="pb-24 px-6">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/projects"
                                className="w-full sm:w-64 py-3 px-6 bg-[#171a20] text-white text-sm font-medium text-center rounded-sm hover:bg-black transition-colors"
                            >
                                Voir Tous les Projets
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-64 py-3 px-6 bg-white/70 backdrop-blur-sm text-[#171a20] text-sm font-medium text-center rounded-sm hover:bg-white transition-colors"
                            >
                                Nous Contacter
                            </Link>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    {index < projects.length - 1 && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                            <ChevronDown className="w-8 h-8 text-[#5c5e62]" />
                        </div>
                    )}
                </section>
            ))}
        </>
    );
}
