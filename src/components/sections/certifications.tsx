import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certifications = [
    {
        icon: "⚡",
        title: "Agrément ONEE",
        description: "Travaux HTA-BT, éclairage public",
    },
    {
        icon: "🏗️",
        title: "Ministère Équipement",
        description: "Classes 1 à 5 - Secteurs J, N, O, P",
    },
    {
        icon: "🏢",
        title: "Ministère Habitat",
        description: "Qualifié pour projets immobiliers",
    },
    {
        icon: "✅",
        title: "Conformité Normes",
        description: "NM, NF, IEC internationales",
    },
];

export function CertificationsSection() {
    return (
        <section className="py-24 bg-background" id="certifications">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 text-[#31548E] border-[#31548E]/30">
                        Qualifications & Agréments
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                        Certifications Officielles
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        HAY 2010 est qualifiée et agréée pour garantir conformité, sécurité
                        et performance énergétique.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-muted/50 border-2 border-transparent hover:border-[#F37021] hover:bg-card hover:shadow-lg transition-all duration-300 text-center"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {cert.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                                {cert.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <Button asChild variant="outline" size="lg" className="border-[#31548E] text-[#31548E] hover:bg-[#31548E] hover:text-white">
                        <Link href="/qualifications">Voir Toutes les Qualifications</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
