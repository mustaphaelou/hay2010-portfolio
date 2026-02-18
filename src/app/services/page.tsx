import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    ThermometerIcon,
    Sun03Icon,
    BulbIcon,
    FlashIcon,
    Building02Icon,
    Settings01Icon,
    CheckmarkCircle01Icon,
    FileSearchIcon,
    PencilEdit01Icon,
    LegalHammerIcon,
    Shield01Icon,
} from "hugeicons-react";

const services = [
    {
        id: "climatique",
        icon: ThermometerIcon,
        title: "Génie Climatique (CVC)",
        description: "Conception et installation de systèmes de chauffage, ventilation et climatisation pour bâtiments industriels et tertiaires.",
        gradient: "from-cyan-500 to-blue-500",
        bgAccent: "bg-cyan-500/10",
        textAccent: "text-cyan-500",
        borderAccent: "border-cyan-500/30",
        features: [
            "Études thermiques et dimensionnement",
            "Installation de systèmes CVC centralisés",
            "Ventilation mécanique contrôlée (VMC)",
            "Désenfumage et extraction",
            "Chauffage industriel et tertiaire",
            "Climatisation VRV/VRF",
        ],
    },
    {
        id: "energie",
        icon: Sun03Icon,
        title: "Énergies Renouvelables",
        description: "Solutions photovoltaïques et efficacité énergétique pour réduire votre empreinte carbone et vos coûts d'exploitation.",
        gradient: "from-yellow-500 to-orange-500",
        bgAccent: "bg-orange-500/10",
        textAccent: "text-orange-500",
        borderAccent: "border-orange-500/30",
        features: [
            "Installation de panneaux photovoltaïques",
            "Systèmes d'autoconsommation",
            "Audit énergétique",
            "Bornes de recharge véhicules électriques",
            "Éclairage solaire autonome",
            "Optimisation énergétique des bâtiments",
        ],
    },
    {
        id: "eclairage",
        icon: BulbIcon,
        title: "Éclairage Public & Urbain",
        description: "Installation et maintenance d'éclairage public LED intelligent pour communes et zones urbaines. Conformité ONEE garantie.",
        gradient: "from-amber-400 to-yellow-500",
        bgAccent: "bg-yellow-500/10",
        textAccent: "text-yellow-600",
        borderAccent: "border-yellow-500/30",
        features: [
            "Éclairage public LED",
            "Éclairage architectural et décoratif",
            "Systèmes de télégestion",
            "Mise aux normes ONEE",
            "Rénovation des réseaux existants",
            "Éclairage sportif et événementiel",
        ],
    },
    {
        id: "electrification",
        icon: FlashIcon,
        title: "Électrification HTA/BT",
        description: "Réseaux de distribution électrique haute et basse tension, postes de transformation, électrification rurale.",
        gradient: "from-[#3e6ae1] to-blue-400",
        bgAccent: "bg-blue-500/10",
        textAccent: "text-[#3e6ae1]",
        borderAccent: "border-blue-500/30",
        features: [
            "Réseaux HTA aériens et souterrains",
            "Postes de transformation MT/BT",
            "Électrification rurale PERG",
            "Raccordement ONEE",
            "Lignes électriques industrielles",
            "Armoires de distribution",
        ],
    },
    {
        id: "industriel",
        icon: Building02Icon,
        title: "Projets Industriels & Tertiaires",
        description: "Installations électriques complètes pour usines, entrepôts, centres commerciaux et immeubles de bureaux.",
        gradient: "from-slate-600 to-slate-500",
        bgAccent: "bg-slate-500/10",
        textAccent: "text-slate-600",
        borderAccent: "border-slate-500/30",
        features: [
            "Tableaux généraux basse tension (TGBT)",
            "Distribution électrique industrielle",
            "Systèmes de secours et groupes électrogènes",
            "Compensation d'énergie réactive",
            "Câblage structuré et courants faibles",
            "Mise en conformité électrique",
        ],
    },
    {
        id: "maintenance",
        icon: Settings01Icon,
        title: "Maintenance & SAV",
        description: "Contrats de maintenance préventive et curative pour garantir la performance et la durabilité de vos installations.",
        gradient: "from-emerald-500 to-teal-500",
        bgAccent: "bg-emerald-500/10",
        textAccent: "text-emerald-600",
        borderAccent: "border-emerald-500/30",
        features: [
            "Maintenance préventive planifiée",
            "Interventions curatives 24/7",
            "Contrôles réglementaires",
            "Thermographie infrarouge",
            "Analyse de la qualité électrique",
            "Formation des équipes techniques",
        ],
    },
];

const processSteps = [
    {
        icon: FileSearchIcon,
        step: "01",
        title: "Étude & Diagnostic",
        description: "Analyse approfondie de vos besoins, audit technique sur site et élaboration d'un cahier des charges précis.",
    },
    {
        icon: PencilEdit01Icon,
        step: "02",
        title: "Conception & Devis",
        description: "Études techniques détaillées, plans d'exécution et devis transparent avec délais garantis.",
    },
    {
        icon: LegalHammerIcon,
        step: "03",
        title: "Réalisation",
        description: "Exécution par nos équipes certifiées, avec suivi de chantier rigoureux et respect des normes en vigueur.",
    },
    {
        icon: Shield01Icon,
        step: "04",
        title: "Réception & Maintenance",
        description: "Réception contradictoire, mise en service et contrat de maintenance pour pérenniser vos installations.",
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-28 bg-gradient-to-br from-[#171a20] via-[#1a2540] to-[#0f1a2e] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-80 h-80 bg-[#F37021]/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3e6ae1]/20 rounded-full blur-3xl" />
                    <div className="absolute inset-0 pattern-grid-dark opacity-20" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                            Nos Services
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Solutions Complètes en{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e6ae1] to-[#60a5fa]">
                                Électricité
                            </span>{" "}
                            & Génie Climatique
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            De la conception à la maintenance, nous vous accompagnons dans tous vos projets avec expertise et professionnalisme.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-14">
                        <Badge variant="outline" className="mb-4 text-[#3e6ae1] border-[#3e6ae1]/30 bg-blue-50">
                            Notre Méthode
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#171a20]">
                            Notre Processus en 4 Étapes
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Connecting line on desktop */}
                        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#3e6ae1] via-[#F37021] to-[#3e6ae1]" />

                        {processSteps.map((step, index) => (
                            <div key={step.step} className="relative flex flex-col items-center text-center group">
                                {/* Step circle */}
                                <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-[#3e6ae1] flex flex-col items-center justify-center mb-6 shadow-lg shadow-blue-500/10 group-hover:bg-[#3e6ae1] transition-colors duration-300">
                                    <step.icon className="w-7 h-7 text-[#3e6ae1] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="text-xs font-bold text-[#3e6ae1] uppercase tracking-widest mb-2">
                                    Étape {step.step}
                                </div>
                                <h3 className="text-lg font-bold text-[#171a20] mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Details */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3 group">
                                                <CheckmarkCircle01Icon className={`w-5 h-5 ${service.textAccent} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Rich Visual Panel */}
                                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                    <Card className="overflow-hidden border-0 shadow-2xl">
                                        <div className={`h-80 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                                            {/* Decorative shapes */}
                                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                                            <div className="absolute inset-6 border border-white/20 rounded-2xl" />
                                            <div className="absolute inset-10 border border-white/10 rounded-xl" />

                                            {/* Center icon */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
                                                    <service.icon className="w-20 h-20 text-white" />
                                                </div>
                                            </div>

                                            {/* Feature count badge */}
                                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-semibold border border-white/30">
                                                {service.features.length} prestations
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
