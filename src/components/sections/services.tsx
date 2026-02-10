


import Link from "next/link";
import { ThermometerIcon, Sun03Icon, BulbIcon, FlashIcon, Building02Icon, Settings01Icon, ArrowDown01Icon } from "hugeicons-react";

const services = [
    {
        icon: ThermometerIcon,
        title: "Génie Climatique",
        subtitle: "CVC & Ventilation",
        href: "/services#climatique",
        bg: "from-blue-50 to-cyan-50",
    },
    {
        icon: Sun03Icon,
        title: "Énergies Renouvelables",
        subtitle: "Solaire & Efficacité",
        href: "/services#energie",
        bg: "from-amber-50 to-orange-50",
    },
    {
        icon: BulbIcon,
        title: "Éclairage Public",
        subtitle: "LED & Télégestion",
        href: "/services#eclairage",
        bg: "from-yellow-50 to-amber-50",
    },
    {
        icon: FlashIcon,
        title: "Électrification",
        subtitle: "HTA/BT & Postes",
        href: "/services#electrification",
        bg: "from-indigo-50 to-blue-50",
    },
    {
        icon: Building02Icon,
        title: "Projets Industriels",
        subtitle: "TGBT & Distribution",
        href: "/services#industriel",
        bg: "from-slate-50 to-gray-100",
    },
    {
        icon: Settings01Icon,
        title: "Maintenance",
        subtitle: "SAV & Contrats",
        href: "/services#maintenance",
        bg: "from-green-50 to-emerald-50",
    },
];

export function ServicesSection() {
    return (
        <>
            {services.map((service) => (
                <section
                    key={service.title}
                    className={`relative min-h-screen flex flex-col justify-between snap-section bg-gradient-to-b ${service.bg}`}
                >
                    {/* Content */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20">
                        <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-8 shadow-lg">
                            <service.icon className="w-10 h-10 text-[#171a20]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#171a20] tracking-tight mb-4">
                            {service.title}
                        </h2>
                        <p className="text-lg md:text-xl text-[#5c5e62] mb-2">
                            {service.subtitle}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="pb-24 px-6">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-64 py-3 px-6 bg-[#171a20] text-white text-sm font-medium text-center rounded-sm hover:bg-black transition-colors"
                            >
                                Demander un Devis
                            </Link>
                            <Link
                                href={service.href}
                                className="w-full sm:w-64 py-3 px-6 bg-white/70 backdrop-blur-sm text-[#171a20] text-sm font-medium text-center rounded-sm hover:bg-white transition-colors"
                            >
                                En savoir plus
                            </Link>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce empty:hidden">
                        {services.indexOf(service) < services.length - 1 && (
                            <ArrowDown01Icon className="w-8 h-8 text-[#5c5e62]" aria-hidden="true" />
                        )}
                    </div>
                </section>
            ))}
        </>
    );
}
