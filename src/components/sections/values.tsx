import { Badge } from "@/components/ui/badge";
import { CheckmarkCircle01Icon } from "hugeicons-react";

const values = [
    {
        emoji: "⚡",
        title: "Qualité",
        points: [
            "Solutions innovantes et performantes",
            "Matériaux de haute qualité",
            "Respect des normes internationales",
        ],
    },
    {
        emoji: "🎯",
        title: "Efficacité",
        points: [
            "Systèmes intelligents et économes",
            "Réduction des coûts énergétiques",
            "Optimisation des performances",
        ],
    },
    {
        emoji: "🛡️",
        title: "Fiabilité",
        points: [
            "Agréé ONEE HTA-BT",
            "Qualifié Ministère Équipement",
            "Conformité totale aux normes",
        ],
    },
];

export function ValuesSection() {
    return (
        <section className="py-24 bg-background" id="values">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 text-[#31548E] border-[#31548E]/30">
                        Pourquoi Choisir HAY 2010?
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                        L’Excellence au Service de Vos Projets
                    </h2>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-[#F37021]/30 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#31548E] to-[#1a3a5c] flex items-center justify-center text-4xl animate-float group-hover:shadow-lg transition-shadow">
                                {value.emoji}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                                {value.title}
                            </h3>

                            {/* Points */}
                            <ul className="space-y-3 text-left">
                                {value.points.map((point, pointIndex) => (
                                    <li key={pointIndex} className="flex items-start gap-3">
                                        <CheckmarkCircle01Icon className="w-5 h-5 text-[#1C6E3E] shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground text-sm">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
