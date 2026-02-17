import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"; // Added separator from shadcn
import { Mail01Icon, Call02Icon, Location01Icon, ArrowRight01Icon } from "hugeicons-react";

export function Footer() {
    return (
        <footer className="relative bg-[#171a20] text-white pt-20 pb-10 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#171a20] via-[#0d0f14] to-[#171a20] z-0" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3e6ae1]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6">
                {/* Main Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="HAY 2010"
                                width={140}
                                height={56}
                                className="h-12 w-auto brightness-0 invert opacity-90"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Experts en électrification, éclairage public et génie climatique.
                            Plus de 20 ans d'excellence au service des infrastructures marocaines.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3e6ae1] transition-colors cursor-pointer flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white/50" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1 h-4 bg-[#3e6ae1] rounded-full" />
                            Services
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services#climatique" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <ArrowRight01Icon className="w-3 h-3 text-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                                    Génie Climatique
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#eclairage" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <ArrowRight01Icon className="w-3 h-3 text-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                                    Éclairage Public
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#electrification" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <ArrowRight01Icon className="w-3 h-3 text-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                                    Électrification HTA/BT
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#energie" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <ArrowRight01Icon className="w-3 h-3 text-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                                    Énergies Renouvelables
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Projets Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1 h-4 bg-[#3e6ae1] rounded-full" />
                            Entreprise
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/projects" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <ArrowRight01Icon className="w-3 h-3 text-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                                    Nos Réalisations
                                </Link>
                            </li>
                            <li>
                                <Link href="/clients" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <ArrowRight01Icon className="w-3 h-3 text-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                                    Nos Clients
                                </Link>
                            </li>
                            <li>
                                <Link href="/qualifications" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <ArrowRight01Icon className="w-3 h-3 text-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                                    Qualifications
                                </Link>
                            </li>
                            <li>
                                <Link href="/recrutement" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <ArrowRight01Icon className="w-3 h-3 text-[#3e6ae1] opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                                    Recrutement
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1 h-4 bg-[#3e6ae1] rounded-full" />
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400 group hover:text-white transition-colors">
                                <Location01Icon className="w-5 h-5 text-[#3e6ae1] shrink-0 mt-0.5" />
                                <span className="flex-1">
                                    Siège Social <br />
                                    Rabat, Maroc
                                </span>
                            </li>
                            <li>
                                <a href="tel:+212537281111" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                    <Call02Icon className="w-5 h-5 text-[#3e6ae1] group-hover:animate-bounce" />
                                    05 37 28 11 11
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@hay2010.ma" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                    <Mail01Icon className="w-5 h-5 text-[#3e6ae1]" />
                                    contact@hay2010.ma
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Separator */}
                <Separator className="bg-white/10 mb-8" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© 2026 HAY 2010. Tous droits réservés.</p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-white transition-colors relative group">
                            Mentions légales
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3e6ae1] transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors relative group">
                            Confidentialité
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3e6ae1] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}


