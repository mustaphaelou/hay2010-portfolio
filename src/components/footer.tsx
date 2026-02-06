import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-[#171a20] text-white py-12">
            <div className="container mx-auto px-6">
                {/* Main Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="HAY 2010"
                                width={120}
                                height={48}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    À Propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/qualifications" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Qualifications
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services#climatique" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Génie Climatique
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#eclairage" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Éclairage Public
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#electrification" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Électrification
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#energie" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Énergies Renouvelables
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
                            Projets
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/projects" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Réalisations
                                </Link>
                            </li>
                            <li>
                                <Link href="/zones" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Zones d’Intervention
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-gray-300">
                                Rabat, Maroc
                            </li>
                            <li>
                                <a href="tel:+212537281111" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    05 37 28 11 11
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@hay2010.ma" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    contact@hay2010.ma
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                        <p>© 2026 HAY 2010. Tous droits réservés.</p>
                        <div className="flex items-center gap-6">
                            <Link href="#" className="hover:text-white transition-colors">
                                Mentions légales
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                Confidentialité
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
