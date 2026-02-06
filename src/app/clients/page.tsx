import { ClientsList } from "@/components/sections/clients-list";
import { Badge } from "@/components/ui/badge";

export default function ClientsPage() {
    return (
        <main className="min-h-screen">
            {/* Simple Hero Section */}
            <section className="pt-32 pb-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <Badge variant="outline" className="mb-6 border-[#171a20]/20 text-[#171a20]">
                            Nos Partenariats
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#171a20] mb-6 tracking-tight">
                            Ils nous font confiance
                        </h1>
                        <p className="text-xl text-[#5c5e62] leading-relaxed">
                            Nous sommes fiers de collaborer avec les leaders de l'industrie, les institutions publiques et les grands acteurs du développement au Maroc.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clients Grid */}
            <ClientsList />

            {/* Call to action section could be added here if needed, or stick to Footer */}
        </main>
    );
}
