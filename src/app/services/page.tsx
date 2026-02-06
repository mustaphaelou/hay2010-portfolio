import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Thermometer,
    Sun,
    Lightbulb,
    Zap,
    Building2,
    Settings,
    CheckCircle
} from "lucide-react";

const services = [
    {
        id: "climatique",
        icon: Thermometer,
        title: "Génie Climatique (CVC)",
        description: "Conception et installation de systèmes de chauffage, ventilation et climatisation pour bâtiments industriels et tertiaires.",
        color: "from-blue-500 to-cyan-500",
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
        icon: Sun,
        title: "Énergies Renouvelables",
        description: "Solutions photovoltaïques et efficacité énergétique pour réduire votre empreinte carbone et vos coûts d'exploitation.",
        color: "from-yellow-500 to-orange-500",
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
        icon: Lightbulb,
        title: "Éclairage Public & Urbain",
        description: "Installation et maintenance d'éclairage public LED intelligent pour communes et zones urbaines. Conformité ONEE garantie.",
        color: "from-amber-500 to-yellow-500",
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
        icon: Zap,
        title: "Électrification HTA/BT",
        description: "Réseaux de distribution électrique haute et basse tension, postes de transformation, électrification rurale.",
        color: "from-[#31548E] to-blue-500",
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
        icon: Building2,
        title: "Projets Industriels & Tertiaires",
        description: "Installations électriques complètes pour usines, entrepôts, centres commerciaux et immeubles de bureaux.",
        color: "from-gray-600 to-gray-500",
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
        icon: Settings,
        title: "Maintenance & SAV",
        description: "Contrats de maintenance préventive et curative pour garantir la performance et la durabilité de vos installations.",
        color: "from-green-500 to-emerald-500",
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

export default function ServicesPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-[#31548E] via-[#1a3a5c] to-[#0f2436] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-[#F37021]/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#31548E]/30 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                            Nos Services
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                            Solutions Complètes en Électricité & Génie Climatique
                        </h1>
                        <p className="text-xl text-white/70">
                            De la conception à la maintenance, nous vous accompagnons dans tous vos projets avec expertise et professionnalisme.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Details */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-muted-foreground mb-8">
                                        {service.description}
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[#1C6E3E] shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Visual */}
                                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                    <Card className="overflow-hidden border-0 shadow-xl">
                                        <div className={`h-80 bg-gradient-to-br ${service.color} relative`}>
                                            <div className="absolute inset-0 bg-black/10" />
                                            <div className="absolute inset-8 border-2 border-white/20 rounded-2xl" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <service.icon className="w-24 h-24 text-white/50" />
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
