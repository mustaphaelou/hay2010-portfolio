


import Link from "next/link";
import { ThermometerIcon, Sun03Icon, BulbIcon, FlashIcon, Building02Icon, Settings01Icon, ArrowRight01Icon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: ThermometerIcon,
        title: "Génie Climatique",
        subtitle: "CVC & Ventilation",
        description: "Solutions complètes de climatisation, ventilation et chauffage pour grands espaces.",
        href: "/services#climatique",
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
    },
    {
        icon: Sun03Icon,
        title: "Énergies Renouvelables",
        subtitle: "Solaire & Efficacité",
        description: "Installations photovoltaïques et solutions d'efficacité énergétique durable.",
        href: "/services#energie",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
    {
        icon: BulbIcon,
        title: "Éclairage Public",
        subtitle: "LED & Télégestion",
        description: "Modernisation de l'éclairage urbain avec technologies LED et télégestion intelligente.",
        href: "/services#eclairage",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
    },
    {
        icon: FlashIcon,
        title: "Électrification",
        subtitle: "HTA/BT & Postes",
        description: "Étude et réalisation de réseaux électriques haute et basse tension.",
        href: "/services#electrification",
        color: "text-blue-600",
        bg: "bg-blue-600/10",
    },
    {
        icon: Building02Icon,
        title: "Projets Industriels",
        subtitle: "TGBT & Distribution",
        description: "Infrastructure électrique robuste pour zones industrielles et complexes.",
        href: "/services#industriel",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
    },
    {
        icon: Settings01Icon,
        title: "Maintenance",
        subtitle: "SAV & Contrats",
        description: "Service après-vente réactif et contrats de maintenance préventive.",
        href: "/services#maintenance",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
];

export function ServicesSection() {
    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden" id="services">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container relative z-10 mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 text-[#3e6ae1] border-[#3e6ae1] bg-blue-50">
                        Notre Expertise
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#171a20] mb-6 tracking-tight">
                        Solutions Complètes pour <br />
                        <span className="text-gradient">Infrastructures Modernes</span>
                    </h2>
                    <p className="text-lg text-gray-500">
                        Une approche intégrée couvrant tous les aspects techniques de vos projets,
                        de la conception à la maintenance.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[#171a20] mb-2 group-hover:text-[#3e6ae1] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">
                                    {service.subtitle}
                                </p>
                                <p className="text-gray-500 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Link */}
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center text-sm font-semibold text-[#171a20] group/link"
                                >
                                    En savoir plus
                                    <ArrowRight01Icon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1 text-[#3e6ae1]" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Button asChild size="lg" className="btn-gradient rounded-full px-8 py-6 text-lg shadow-blue-500/25">
                        <Link href="/contact">
                            Démarrer un Projet
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
