import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";

const projects = [
    {
        id: "temara",
        title: "Commune de Témara",
        category: "Éclairage Public",
        stats: "450 luminaires LED • 60% réduction consommation",
        description: "Rénovation complète du réseau d'éclairage public de la commune avec installation de luminaires LED haute performance et système de télégestion.",
        gradient: "from-[#31548E] to-[#00A9E0]",
        year: "2023",
    },
    {
        id: "johra",
        title: "Zone Industrielle Aïn Johra",
        category: "Électrification HTA",
        stats: "12 km réseau HTA • 8 postes de transformation",
        description: "Création d'un réseau de distribution électrique haute tension pour alimenter la nouvelle zone industrielle avec 8 postes de transformation MT/BT.",
        gradient: "from-[#1C6E3E] to-[#00A9E0]",
        year: "2022",
    },
    {
        id: "marjane",
        title: "Centre Commercial Marjane",
        category: "Génie Climatique",
        stats: "15,000 m² climatisés • Système centralisé",
        description: "Installation d'un système de climatisation centralisé VRV pour l'ensemble du centre commercial avec gestion technique centralisée.",
        gradient: "from-[#002a42] to-[#1C6E3E]",
        year: "2023",
    },
    {
        id: "rural",
        title: "Programme PERG - Région Oriental",
        category: "Électrification Rurale",
        stats: "25 villages • 2,500 foyers raccordés",
        description: "Électrification rurale dans le cadre du PERG pour raccorder les villages isolés de la région orientale au réseau national.",
        gradient: "from-[#F37021] to-[#ED1C24]",
        year: "2021",
    },
    {
        id: "hopital",
        title: "CHU Mohammed VI",
        category: "Installation Électrique",
        stats: "50,000 m² • Système de secours complet",
        description: "Installation électrique complète avec tableaux TGBT, groupes électrogènes de secours et onduleurs pour la continuité de service.",
        gradient: "from-[#31548E] to-[#F37021]",
        year: "2022",
    },
    {
        id: "solaire",
        title: "Usine Textile Casablanca",
        category: "Énergie Solaire",
        stats: "500 kWc installés • 40% autoconsommation",
        description: "Installation photovoltaïque en toiture pour réduire la facture énergétique et l'empreinte carbone de l'usine.",
        gradient: "from-yellow-500 to-orange-500",
        year: "2023",
    },
];

export default function ProjectsPage() {
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
                            Nos Réalisations
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                            Projets Réalisés avec Excellence
                        </h1>
                        <p className="text-xl text-white/70">
                            Découvrez nos réalisations en électrification, éclairage public et génie climatique à travers le Maroc.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Card
                                key={project.id}
                                id={project.id}
                                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <Badge className="absolute top-4 left-4 bg-[#F37021] text-white border-0">
                                        {project.category}
                                    </Badge>
                                    <div className="absolute top-4 right-4 text-white/60 text-sm">
                                        {project.year}
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
                                        {project.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-[#1C6E3E] mb-4">
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="text-sm font-medium">{project.stats}</span>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-4">
                                        {project.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
