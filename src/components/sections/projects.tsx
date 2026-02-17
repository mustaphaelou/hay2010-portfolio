import Link from "next/link";
import Image from "next/image";
import { ArrowRight01Icon, Location01Icon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
    {
        title: "Éclairage Public Casablanca",
        category: "Éclairage Public",
        location: "Casablanca, Maroc",
        image: "/images/street-lighting/casablanca-lighting-1.jpg",
        description: "Modernisation de l'éclairage public avec 450 luminaires LED et système de télégestion.",
        tags: ["LED", "Télégestion", "Efficacité"],
    },
    {
        title: "Zone Industrielle Aïn Johra",
        category: "Électrification HTA",
        location: "Tiflet, Maroc",
        image: "https://images.unsplash.com/photo-1563953247732-d851571d7023?auto=format&fit=crop&q=80&w=1600",
        description: "Travaux d'électrification HTA/BT et éclairage public pour la zone industrielle.",
        tags: ["HTA/BT", "Postes", "Industrie"],
    },
    {
        title: "Centre Commercial Marjane",
        category: "Génie Climatique",
        location: "Rabat, Maroc",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600",
        description: "Installation complète du système CVC et désenfumage pour le centre commercial.",
        tags: ["CVC", "Désenfumage", "Tertiaire"],
    },
    {
        title: "Extension Réseau Électrique",
        category: "Électrification",
        location: "Région Nord",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
        description: "Extension et renforcement du réseau électrique rural sur 50km.",
        tags: ["Réseau", "Rural", "Renforcement"],
    },
];

export function ProjectsSection() {
    return (
        <section className="py-24 bg-white overflow-hidden" id="projects">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-4 text-[#3e6ae1] border-[#3e6ae1] bg-blue-50">
                            Nos Réalisations
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#171a20] mb-4 tracking-tight">
                            Des Projets d'Envergure <br />
                            <span className="text-gradient">Qui Façonnent l'Avenir</span>
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Découvrez nos interventions majeures à travers le Royaume.
                        </p>
                    </div>

                    <Button asChild variant="outline" className="hidden md:flex gap-2 border-[#171a20] text-[#171a20] hover:bg-[#171a20] hover:text-white rounded-full">
                        <Link href="/projects">
                            Voir tous les projets <ArrowRight01Icon className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="flex-none w-[85vw] md:w-[400px] snap-center group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <CardContent className="p-0 relative h-[500px]">
                                {/* Image Background */}
                                <div className="absolute inset-0">
                                    {project.image.includes('placeholder') ? (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-400">Image: {project.title}</span>
                                        </div>
                                    ) : (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 mb-3 text-white/80 text-sm">
                                        <Location01Icon className="w-4 h-4 text-[#3e6ae1]" />
                                        {project.location}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-[#3e6ae1] transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-white/10 backdrop-blur-md rounded-md border border-white/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="w-full h-1 bg-[#3e6ae1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                    <Button asChild variant="outline" className="w-full gap-2 border-[#171a20] text-[#171a20] hover:bg-[#171a20] hover:text-white rounded-full">
                        <Link href="/projects">
                            Voir tous les projets <ArrowRight01Icon className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
