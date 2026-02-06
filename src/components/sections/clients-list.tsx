"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <header className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-medium text-[#171a20] mb-4"
                    >
                        Ils nous font confiance
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#5c5e62] max-w-2xl mx-auto"
                    >
                        Nous accompagnons les plus grandes institutions et entreprises marocaines dans leurs projets d'électrification, d'éclairage et de génie climatique.
                    </motion.p>
                </header>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="group relative aspect-[3/2] flex items-center justify-center p-8 bg-[#f4f4f4] rounded-sm transition-all duration-300 hover:shadow-xl hover:bg-white"
                        >
                            <div className="relative w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 pointer-events-none">
                                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#171a20]">
                                    {client.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
