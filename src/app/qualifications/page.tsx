import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const qualifications = [
    {
        category: "Agrément ONEE",
        icon: "⚡",
        items: [
            { title: "Travaux Haute Tension (HTA)", description: "Réseaux aériens et souterrains 22kV" },
            { title: "Travaux Basse Tension (BT)", description: "Distribution électrique 400V/230V" },
            { title: "Éclairage Public", description: "Installation et maintenance" },
            { title: "Postes de Transformation", description: "Installation MT/BT" },
        ],
    },
    {
        category: "Ministère de l'Équipement",
        icon: "🏗️",
        items: [
            { title: "Classe 1", description: "Travaux jusqu'à 5 MDH" },
            { title: "Classe 2", description: "Travaux jusqu'à 10 MDH" },
            { title: "Classe 3", description: "Travaux jusqu'à 20 MDH" },
            { title: "Classe 4", description: "Travaux jusqu'à 30 MDH" },
            { title: "Classe 5", description: "Travaux supérieurs à 30 MDH" },
        ],
    },
    {
        category: "Secteurs d'Intervention",
        icon: "📋",
        items: [
            { title: "Secteur J", description: "Électricité industrielle" },
            { title: "Secteur N", description: "Installations électriques" },
            { title: "Secteur O", description: "Éclairage public" },
            { title: "Secteur P", description: "Télécommunications" },
        ],
    },
    {
        category: "Normes & Certifications",
        icon: "✅",
        items: [
            { title: "Normes Marocaines (NM)", description: "Conformité totale" },
            { title: "Normes Françaises (NF)", description: "Équivalence reconnue" },
            { title: "Normes IEC", description: "Standards internationaux" },
            { title: "Sécurité Électrique", description: "Habilitations électriques" },
        ],
    },
];

export default function QualificationsPage() {
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
                            Qualifications
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                            Agréments & Certifications
                        </h1>
                        <p className="text-xl text-white/70">
                            HAY 2010 dispose de toutes les qualifications nécessaires pour intervenir sur vos projets en toute conformité.
                        </p>
                    </div>
                </div>
            </section>

            {/* Qualifications Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {qualifications.map((qual, index) => (
                            <Card key={index} className="border-border/50 hover:border-[#F37021]/30 hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl">{qual.icon}</div>
                                        <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                                            {qual.category}
                                        </h2>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {qual.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[#1C6E3E] shrink-0 mt-0.5" />
                                                <div>
                                                    <div className="font-medium text-foreground">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
