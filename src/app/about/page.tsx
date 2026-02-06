import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, History } from "lucide-react";

const milestones = [
    { year: "2004", title: "Création de HAY 2010", description: "Fondation de l'entreprise à Rabat" },
    { year: "2008", title: "Agrément ONEE", description: "Obtention de l'agrément pour travaux HTA-BT" },
    { year: "2012", title: "100 Collaborateurs", description: "Expansion significative de l'équipe" },
    { year: "2016", title: "Extension Nationale", description: "Couverture de tout le territoire marocain" },
    { year: "2020", title: "Énergies Renouvelables", description: "Lancement de la division énergie verte" },
    { year: "2024", title: "20 Ans d'Excellence", description: "Célébration de deux décennies de succès" },
];

const values = [
    {
        icon: Users,
        title: "Équipe Qualifiée",
        description: "Plus de 100 collaborateurs formés et certifiés pour garantir des prestations de qualité.",
    },
    {
        icon: Target,
        title: "Excellence Opérationnelle",
        description: "Engagement total envers la qualité, le respect des délais et la satisfaction client.",
    },
    {
        icon: Award,
        title: "Certifications",
        description: "Agréé ONEE et qualifié par le Ministère de l'Équipement pour les marchés publics.",
    },
];

export default function AboutPage() {
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
                            À Propos
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                            Plus de 20 Ans d’Excellence au Maroc
                        </h1>
                        <p className="text-xl text-white/70">
                            HAY 2010 est une entreprise marocaine spécialisée dans le génie climatique, l’électrification et l’éclairage public.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge variant="outline" className="mb-4 text-[#ED1C24] border-[#ED1C24]/30">
                                Notre Histoire
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                                Une Passion pour l’Excellence
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Fondée en 2004, HAY 2010 s’est imposée comme un acteur majeur du secteur de l’électrification et du génie climatique au Maroc. Notre engagement envers la qualité et l’innovation nous a permis de bâtir une réputation solide auprès des collectivités, industries et entreprises du secteur tertiaire.
                                </p>
                                <p>
                                    Aujourd’hui, avec plus de 100 collaborateurs qualifiés et une présence nationale, nous continuons à repousser les limites de l’excellence technique pour offrir des solutions durables et performantes à nos clients.
                                </p>
                            </div>
                        </div>

                        <Card className="overflow-hidden border-0 shadow-xl">
                            <div className="h-80 bg-gradient-to-br from-[#31548E] to-[#F37021] relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-6xl font-bold mb-2">20+</div>
                                        <div className="text-xl">Années d’Expérience</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 text-[#31548E] border-[#31548E]/30">
                            Notre Parcours
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                            Les Étapes Clés
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone) => {
                                const index = milestones.indexOf(milestone);
                                return (
                                    <div
                                        key={milestone.year}
                                        className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                            }`}
                                    >
                                        <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                                            <Card className="inline-block border-border/50 hover:border-[#F37021]/30 transition-colors">
                                                <CardContent className="p-6">
                                                    <div className="text-sm font-medium text-[#F37021] mb-1">
                                                        {milestone.year}
                                                    </div>
                                                    <h3 className="text-lg font-bold text-foreground mb-2">
                                                        {milestone.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {milestone.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        <div className="w-4 h-4 rounded-full bg-[#F37021] border-4 border-background hidden lg:block relative z-10" />

                                        <div className="flex-1 hidden lg:block" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 text-[#ED1C24] border-[#ED1C24]/30">
                            Nos Valeurs
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                            Ce Qui Nous Différencie
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <Card key={value.title} className="text-center border-border/50 hover:border-[#F37021]/30 hover:shadow-lg transition-all">
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#31548E] to-[#1a3a5c] flex items-center justify-center mx-auto mb-6">
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {value.description}
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
