"use client";

import Link from "next/link";
import { QuoteDownIcon, ArrowDown01Icon } from "hugeicons-react";

const testimonials = [
    {
        quote: "HAY 2010 a réalisé l'électrification de notre zone industrielle avec un professionnalisme exemplaire. Travaux livrés dans les délais.",
        author: "Mohammed El Alami",
        role: "Directeur, Zone Industrielle Aïn Johra",
    },
    {
        quote: "Une équipe compétente et réactive. Le système de climatisation fonctionne parfaitement depuis 3 ans.",
        author: "Fatima Bennani",
        role: "Responsable Technique, Centre Commercial",
    },
    {
        quote: "Excellent rapport qualité-prix pour notre projet d'éclairage public. Nous recommandons vivement.",
        author: "Ahmed Mansouri",
        role: "Commune de Témara",
    },
];

export function TestimonialsSection() {
    return (
        <section className="min-h-screen flex flex-col justify-between snap-section bg-[#f4f4f4]">
            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20">
                <h2 className="text-4xl md:text-5xl font-medium text-[#171a20] tracking-tight mb-16 text-center">
                    Ce que disent nos clients
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.author}
                            className="bg-white p-8 rounded-sm shadow-sm"
                        >
                            <QuoteDownIcon className="w-8 h-8 text-[#5c5e62]/30 mb-6" />
                            <p className="text-[#171a20] mb-6 leading-relaxed">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div>
                                <p className="font-medium text-[#171a20]">
                                    {testimonial.author}
                                </p>
                                <p className="text-sm text-[#5c5e62]">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="pb-24 px-6">
                <div className="flex justify-center">
                    <Link
                        href="/contact"
                        className="py-3 px-8 bg-[#171a20] text-white text-sm font-medium text-center rounded-sm hover:bg-black transition-colors"
                    >
                        Devenir Client
                    </Link>
                </div>
            </div>
        </section>
    );
}
