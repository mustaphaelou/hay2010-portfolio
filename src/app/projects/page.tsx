import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartLineData01Icon, ArrowRight01Icon } from "hugeicons-react";

import { projects } from "@/data/projects";

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
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    )}
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
                                        <ChartLineData01Icon className="w-4 h-4" />
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
