"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const clients = [
    { name: "Bank Al Maghrib", logo: "https://www.tgcc.ma/dataup/2021/11/BankAlmaghreb-640x400-1.png" },
    { name: "OCP", logo: "https://www.tgcc.ma/dataup/2021/11/OCP-640x400-1.png" },
    { name: "ONCF", logo: "https://www.tgcc.ma/dataup/2021/11/Oncf-1-640x400-1.png" },
    { name: "ONDA", logo: "https://www.tgcc.ma/dataup/2021/11/Onda-640x400-2.png" },
    { name: "CGI", logo: "https://www.tgcc.ma/dataup/2021/11/cgi-640x400-1.png" },
    { name: "Marjane Holding", logo: "https://www.tgcc.ma/dataup/2021/11/Marjane-640x400-1.png" },
    { name: "Carrefour", logo: "https://www.tgcc.ma/dataup/2021/10/carrefour-640x400-1.png" },
    { name: "BMCE Bank", logo: "https://www.tgcc.ma/dataup/2021/11/BMCE-640x400-1.png" },
    { name: "Casa Transport", logo: "https://www.tgcc.ma/dataup/2021/11/Casa_Ttrans-640x400-1.png" },
    { name: "Casa Aménagement", logo: "https://www.tgcc.ma/dataup/2021/11/Casa-640x400-1.png" },
    { name: "Auto Nejma", logo: "https://www.tgcc.ma/dataup/2021/11/Nejma-640x400-1.png" },
    { name: "Atlas Hospitality", logo: "https://www.tgcc.ma/dataup/2021/11/Atlas-Hospitality-640x400-1.png" },
    { name: "Alliances", logo: "https://www.tgcc.ma/dataup/2021/11/Alliances-1-640x400-1.png" },
    { name: "ALBO Construction", logo: "https://www.tgcc.ma/dataup/2021/11/actif-invest_61813b4196b46.png" },
    { name: "Holmarcom", logo: "https://www.tgcc.ma/dataup/2021/11/holmarcom-640x400-1.png" },
    { name: "MedZ", logo: "https://www.tgcc.ma/dataup/2021/11/MedZ-640x400-1.png" },
];

export function ClientsList() {
    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden">
            <div className="absolute inset-0 pattern-grid opacity-10" />

            <div className="container relative z-10 mx-auto px-6">
                <header className="mb-16 text-center max-w-3xl mx-auto">
                    <Badge variant="outline" className="mb-4 text-[#3e6ae1] border-[#3e6ae1] bg-blue-50">
                        Nos Références
                    </Badge>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#171a20] mb-6 tracking-tight"
                    >
                        Ils nous font <span className="text-gradient">Confiance</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[#5c5e62]"
                    >
                        Nous accompagnons les plus grandes institutions et entreprises marocaines dans leurs projets d'électrification, d'éclairage et de génie climatique.
                    </motion.p>
                </header>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group relative h-32 flex items-center justify-center p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                        >
                            <div className="relative w-full h-full filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
