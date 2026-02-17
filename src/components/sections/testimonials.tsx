
"use client";

import Link from "next/link";
import { QuoteDownIcon, StarIcon, UserIcon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

const testimonials = [
    {
        quote: "HAY 2010 a réalisé l'électrification de notre zone industrielle avec un professionnalisme exemplaire. Travaux livrés dans les délais et conforme aux normes les plus strictes.",
        author: "Mohammed El Alami",
        role: "Directeur, Zone Industrielle Aïn Johra",
        initials: "ME",
        rating: 5,
    },
    {
        quote: "Une équipe compétente et réactive. Le système de climatisation fonctionne parfaitement depuis 3 ans, avec un service de maintenance impeccable.",
        author: "Fatima Bennani",
        role: "Responsable Technique, Centre Commercial",
        initials: "FB",
        rating: 5,
    },
    {
        quote: "Excellent rapport qualité-prix pour notre projet d'éclairage public. La solution LED proposée a réduit notre consommation de 60%.",
        author: "Ahmed Mansouri",
        role: "Chef de Projet, Commune de Témara",
        initials: "AM",
        rating: 5,
    },
];

export function TestimonialsSection() {
    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden" id="testimonials">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50 to-orange-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute inset-0 pattern-grid opacity-20" />

            <div className="container relative z-10 mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 text-[#3e6ae1] border-[#3e6ae1] bg-blue-50">
                        Témoignages
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#171a20] mb-6 tracking-tight">
                        La Confiance de <br />
                        <span className="text-gradient">Nos Partenaires</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#171a20] to-[#3e6ae1] flex items-center justify-center text-white font-bold text-lg shadow-md">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#171a20] text-sm md:text-base">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-xs text-gray-500 line-clamp-1">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                                    ))}
                                </div>
                                <QuoteDownIcon className="w-8 h-8 text-[#3e6ae1]/20 mb-3" />
                                <p className="text-gray-600 text-sm leading-relaxed italic">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-6">
                        Rejoignez plus de <span className="font-bold text-[#171a20]">100+ clients satisfaits</span> à travers le Maroc
                    </p>
                    <Button asChild size="lg" className="rounded-full px-8 bg-[#171a20] hover:bg-[#3e6ae1] text-white transition-colors shadow-lg">
                        <Link href="/contact">
                            Démarrer votre projet
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
