"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Adresse",
        content: "Rabat, Maroc",
        subContent: "Quartier Industriel",
    },
    {
        icon: Phone,
        title: "Téléphone",
        content: "05 37 28 11 11",
        subContent: "Lun-Ven 08h-18h",
    },
    {
        icon: Mail,
        title: "Email",
        content: "contact@hay2010.ma",
        subContent: "Réponse sous 24h",
    },
    {
        icon: Clock,
        title: "Horaires",
        content: "08:00 - 18:00",
        subContent: "Lundi au Vendredi",
    },
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        alert("Message envoyé avec succès!");
    };

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
                            Contact
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                            Parlons de Votre Projet
                        </h1>
                        <p className="text-xl text-white/70">
                            Notre équipe d&apos;experts est à votre disposition pour étudier vos besoins et vous proposer des solutions adaptées.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                                Demander un Devis Gratuit
                            </h2>
                            <Card className="border-border/50">
                                <CardContent className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">Prénom</Label>
                                                <Input id="firstName" placeholder="Votre prénom" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Nom</Label>
                                                <Input id="lastName" placeholder="Votre nom" required />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="votre@email.com" required />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Téléphone</Label>
                                            <Input id="phone" type="tel" placeholder="06 XX XX XX XX" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Sujet</Label>
                                            <Input id="subject" placeholder="Type de projet" required />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Décrivez votre projet..."
                                                rows={5}
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#F37021] hover:bg-[#d65f18] text-white"
                                        >
                                            {isSubmitting ? (
                                                "Envoi en cours..."
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Envoyer le Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                                Nos Coordonnées
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                {contactInfo.map((info, index) => (
                                    <Card key={index} className="border-border/50 hover:border-[#F37021]/30 transition-colors">
                                        <CardContent className="p-6">
                                            <div className="w-12 h-12 rounded-xl bg-[#31548E]/10 flex items-center justify-center mb-4">
                                                <info.icon className="w-6 h-6 text-[#31548E]" />
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-1">
                                                {info.title}
                                            </h3>
                                            <p className="text-foreground font-medium">
                                                {info.content}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {info.subContent}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <Card className="overflow-hidden border-border/50">
                                <div className="h-64 bg-gradient-to-br from-[#31548E] to-[#1a3a5c] flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                        <p className="text-lg font-medium">Rabat, Maroc</p>
                                        <p className="text-sm text-white/60">Quartier Industriel</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
