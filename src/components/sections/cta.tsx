import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
    return (
        <section className="relative py-32 bg-[#171a20] overflow-hidden flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 noise-texture opacity-5 mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#171a20] via-[#0d0f14] to-[#171a20]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3e6ae1]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
                    Prêt à Concrétiser <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e6ae1] via-purple-500 to-orange-500 animate-shimmer bg-[length:200%_auto]">
                        Votre Vision ?
                    </span>
                </h2>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                    De l'étude technique à la réalisation finale, nous sommes le partenaire de confiance
                    pour vos projets d'infrastructure au Maroc.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-[#171a20] hover:bg-gray-100 shadow-xl shadow-white/5 transition-all hover:scale-105">
                        <Link href="/contact">
                            Demander une Étude Gratuite
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white transition-all">
                        <a href="tel:+212537281111">
                            Appeler un Expert
                        </a>
                    </Button>
                </div>

                <p className="mt-8 text-sm text-gray-500">
                    Réponse garantie sous 24h ouvrables
                </p>
            </div>
        </section>
    );
}
