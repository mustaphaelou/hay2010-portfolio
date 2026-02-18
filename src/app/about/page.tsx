"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    UserMultipleIcon,
    Target01Icon,
    Award01Icon,
    CheckmarkCircle01Icon,
    Certificate01Icon,
    Building02Icon,
} from "hugeicons-react";

const milestones = [
    { year: "2004", title: "Création de HAY 2010", description: "Fondation de l'entreprise à Rabat avec une vision claire : devenir le leader marocain de l'électrification." },
    { year: "2008", title: "Agrément ONEE", description: "Obtention de l'agrément officiel pour travaux HTA-BT, ouvrant la voie aux grands marchés publics." },
    { year: "2012", title: "100 Collaborateurs", description: "Expansion significative de l'équipe, avec des ingénieurs et techniciens certifiés à travers le Maroc." },
    { year: "2016", title: "Extension Nationale", description: "Déploiement de nos équipes sur tout le territoire marocain, de Tanger à Dakhla." },
    { year: "2020", title: "Énergies Renouvelables", description: "Lancement de la division énergie verte : photovoltaïque, bornes de recharge et efficacité énergétique." },
    { year: "2024", title: "20 Ans d'Excellence", description: "Célébration de deux décennies de succès, 500+ projets réalisés et une réputation nationale solide." },
];

const values = [
    {
        icon: UserMultipleIcon,
        title: "Équipe Qualifiée",
        description: "Plus de 100 collaborateurs formés et certifiés pour garantir des prestations de qualité.",
        color: "from-[#3e6ae1] to-blue-400",
        hoverGlow: "group-hover:bg-blue-50",
        accentBar: "bg-gradient-to-r from-[#3e6ae1] to-transparent",
    },
    {
        icon: Target01Icon,
        title: "Excellence Opérationnelle",
        description: "Engagement total envers la qualité, le respect des délais et la satisfaction client.",
        color: "from-[#F37021] to-orange-400",
        hoverGlow: "group-hover:bg-orange-50",
        accentBar: "bg-gradient-to-r from-[#F37021] to-transparent",
    },
    {
        icon: Award01Icon,
        title: "Certifications",
        description: "Agréé ONEE et qualifié par le Ministère de l'Équipement pour les marchés publics.",
        color: "from-emerald-500 to-teal-400",
        hoverGlow: "group-hover:bg-emerald-50",
        accentBar: "bg-gradient-to-r from-emerald-500 to-transparent",
    },
];

const stats = [
    { value: 20, suffix: "+", label: "Années d'Expérience" },
    { value: 100, suffix: "+", label: "Collaborateurs" },
    { value: 500, suffix: "+", label: "Projets Réalisés" },
    { value: 12, suffix: "", label: "Régions Couvertes" },
];

const certifications = [
    { icon: Certificate01Icon, label: "Agréé ONEE", sub: "Travaux HTA/BT" },
    { icon: Award01Icon, label: "Ministère Équipement", sub: "Marchés Publics" },
    { icon: Building02Icon, label: "ISO 9001", sub: "Qualité Certifiée" },
    { icon: CheckmarkCircle01Icon, label: "PERG Qualifié", sub: "Électrification Rurale" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    const animate = () => {
                        start += increment;
                        if (start < target) {
                            setCount(Math.floor(start));
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                        }
                    };
                    animate();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="text-5xl md:text-6xl font-bold text-gradient mb-2 tracking-tight">
            {count}{suffix}
        </div>
    );
}

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-28 bg-gradient-to-br from-[#171a20] via-[#1a2540] to-[#0f1a2e] relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-80 h-80 bg-[#F37021]/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3e6ae1]/20 rounded-full blur-3xl" />
                    <div className="absolute inset-0 pattern-grid-dark opacity-20" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                            À Propos de HAY 2010
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Plus de{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e6ae1] to-[#60a5fa]">
                                20 Ans
                            </span>{" "}
                            d'Excellence au Maroc
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                            HAY 2010 est une entreprise marocaine spécialisée dans le génie climatique, l'électrification HTA/BT et l'éclairage public — un partenaire de confiance pour les collectivités, industries et entreprises du secteur tertiaire.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-30" />
                <div className="container relative z-10 mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
                        {stats.map((stat, index) => (
                            <div key={stat.label} className="relative flex flex-col items-center text-center group">
                                {index !== stats.length - 1 && (
                                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                                )}
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-2">
                                    {stat.label}
                                </p>
                                <div className="w-12 h-1 bg-[#3e6ae1] rounded-full mt-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg shadow-blue-500/30" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge variant="outline" className="mb-4 text-[#3e6ae1] border-[#3e6ae1]/30 bg-blue-50">
                                Notre Histoire
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Une Passion pour l'Excellence
                            </h2>
                            <div className="space-y-5 text-muted-foreground leading-relaxed">
                                <p>
                                    Fondée en 2004, HAY 2010 s'est imposée comme un acteur majeur du secteur de l'électrification et du génie climatique au Maroc. Notre engagement envers la qualité et l'innovation nous a permis de bâtir une réputation solide auprès des collectivités, industries et entreprises du secteur tertiaire.
                                </p>
                                <p>
                                    Aujourd'hui, avec plus de 100 collaborateurs qualifiés et une présence nationale, nous continuons à repousser les limites de l'excellence technique pour offrir des solutions durables et performantes à nos clients.
                                </p>
                                <p>
                                    Notre agrément ONEE et notre qualification par le Ministère de l'Équipement témoignent de notre rigueur et de notre engagement envers les standards les plus élevés du secteur.
                                </p>
                            </div>
                        </div>

                        {/* Rich visual panel */}
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#171a20] to-[#1a2540] p-8 shadow-2xl">
                                {/* Decorative background */}
                                <div className="absolute inset-0 pattern-grid-dark opacity-20 rounded-3xl" />
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#3e6ae1]/20 rounded-full blur-2xl" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F37021]/15 rounded-full blur-2xl" />

                                <div className="relative z-10">
                                    <p className="text-white/50 text-sm uppercase tracking-widest mb-6 font-medium">
                                        Nos Accréditations
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {certifications.map((cert) => (
                                            <div
                                                key={cert.label}
                                                className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-[#3e6ae1]/40 transition-all duration-300 group"
                                            >
                                                <cert.icon className="w-7 h-7 text-[#3e6ae1] mb-3 group-hover:scale-110 transition-transform" />
                                                <div className="text-white font-semibold text-sm leading-tight">{cert.label}</div>
                                                <div className="text-white/40 text-xs mt-1">{cert.sub}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                                        <div className="flex-1">
                                            <div className="text-white/50 text-xs uppercase tracking-widest mb-1">Fondée en</div>
                                            <div className="text-white font-bold text-2xl">2004</div>
                                        </div>
                                        <div className="w-px h-12 bg-white/10" />
                                        <div className="flex-1">
                                            <div className="text-white/50 text-xs uppercase tracking-widest mb-1">Siège Social</div>
                                            <div className="text-white font-bold text-lg">Rabat, Maroc</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 text-[#3e6ae1] border-[#3e6ae1]/30 bg-blue-50">
                            Notre Parcours
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Les Étapes Clés
                        </h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3e6ae1] via-[#F37021] to-[#3e6ae1] hidden lg:block" />

                        <div className="space-y-10">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                                        <div className="inline-block group">
                                            <Card className="border border-gray-100 hover:border-[#3e6ae1]/30 hover:shadow-xl transition-all duration-300 bg-white">
                                                <CardContent className="p-6">
                                                    <div className="text-xs font-bold text-[#3e6ae1] mb-1 uppercase tracking-widest">
                                                        {milestone.year}
                                                    </div>
                                                    <h3 className="text-lg font-bold text-foreground mb-2">
                                                        {milestone.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {milestone.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="relative hidden lg:flex items-center justify-center w-12 h-12 shrink-0">
                                        <div className="w-4 h-4 rounded-full bg-[#3e6ae1] border-4 border-white shadow-lg shadow-blue-500/30 relative z-10" />
                                        <div className="absolute inset-0 rounded-full bg-[#3e6ae1]/20 animate-ping [animation-duration:3s]" />
                                    </div>

                                    <div className="flex-1 hidden lg:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 text-[#F37021] border-[#F37021]/30 bg-orange-50">
                            Nos Valeurs
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Ce Qui Nous Différencie
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className={`group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${value.hoverGlow} transition-colors`}
                            >
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>

                                    {/* Bottom accent */}
                                    <div className={`mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full ${value.accentBar}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
