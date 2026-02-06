import Link from "next/link";

export function CtaSection() {
    return (
        <section className="min-h-screen flex flex-col justify-between snap-section bg-[#171a20]">
            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-4 text-center max-w-4xl">
                    Prêt à démarrer votre projet?
                </h2>
                <p className="text-lg md:text-xl text-gray-400 text-center">
                    Étude et devis gratuits, sans engagement
                </p>
            </div>

            {/* CTA */}
            <div className="pb-24 px-6">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/contact"
                        className="py-3 px-8 bg-white text-[#171a20] text-sm font-medium text-center rounded-sm hover:bg-gray-100 transition-colors"
                    >
                        Demander un Devis Gratuit
                    </Link>
                    <a
                        href="tel:+212537281111"
                        className="py-3 px-8 border border-white/30 text-white text-sm font-medium text-center rounded-sm hover:bg-white/10 transition-colors"
                    >
                        05 37 28 11 11
                    </a>
                </div>
            </div>
        </section>
    );
}
