'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowRight01Icon, CheckmarkCircle02Icon, ShieldBlockchainIcon } from "hugeicons-react";

export default function RecrutementPage() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep(Math.min(currentStep + 1, 3));
    const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1));

    return (
        <main className="min-h-screen bg-white">
            {/* Tesla-style Minimalist Hero */}
            <section className="section-fullscreen snap-section relative overflow-hidden">
                {/* Clean background with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white"></div>

                <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-up">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--brand-primary)] leading-[1.1]">
                            Construisons l'avenir
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto font-light">
                            Rejoignez notre équipe et participez à des projets qui façonnent le Maroc de demain
                        </p>

                        <div className="pt-8">
                            <Button
                                onClick={() => {
                                    const formSection = document.getElementById('application-form');
                                    formSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn-tesla btn-tesla-primary h-12 px-10 text-base rounded-sm"
                            >
                                Postuler maintenant
                            </Button>
                        </div>

                        {/* Minimal stats - Tesla style */}
                        <div className="grid grid-cols-3 gap-8 pt-16 max-w-xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)]">30+</div>
                                <div className="text-sm text-neutral-500 mt-1">Projets</div>
                            </div>
                            <div className="text-center border-x border-neutral-200">
                                <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)]">12</div>
                                <div className="text-sm text-neutral-500 mt-1">Villes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)]">15+</div>
                                <div className="text-sm text-neutral-500 mt-1">Années</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-neutral-300 flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-neutral-400 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Minimalist Application Form - Tesla Style */}
            <section id="application-form" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    {/* Clean header */}
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)] mb-4">
                            Candidature
                        </h2>
                        <p className="text-lg text-neutral-600 font-light">
                            CDI • CDD • Stage
                        </p>
                    </div>

                    {/* Minimal progress indicator */}
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center gap-2">
                            {[1, 2, 3].map((step) => (
                                <div key={step} className="flex items-center">
                                    <div
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${step === currentStep
                                                ? 'w-8 bg-[var(--brand-primary)]'
                                                : step < currentStep
                                                    ? 'bg-[var(--brand-primary)]'
                                                    : 'bg-neutral-300'
                                            }`}
                                    />
                                    {step < 3 && <div className="w-8 h-px bg-neutral-200 mx-1" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form content */}
                    <div className="animate-fade-in">
                        {/* Step 1: Personal Information */}
                        {currentStep === 1 && (
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-[var(--brand-primary)] mb-8">
                                        Informations personnelles
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstname" className="text-sm text-neutral-700">
                                                Prénom *
                                            </Label>
                                            <Input
                                                id="firstname"
                                                placeholder="Votre prénom"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastname" className="text-sm text-neutral-700">
                                                Nom *
                                            </Label>
                                            <Input
                                                id="lastname"
                                                placeholder="Votre nom"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm text-neutral-700">
                                                Email *
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="votre@email.com"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm text-neutral-700">
                                                Téléphone *
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+212 6XX XX XX XX"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="address" className="text-sm text-neutral-700">
                                            Adresse
                                        </Label>
                                        <Input
                                            id="address"
                                            placeholder="Votre adresse complète"
                                            className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="linkedin" className="text-sm text-neutral-700">
                                                LinkedIn
                                            </Label>
                                            <Input
                                                id="linkedin"
                                                placeholder="linkedin.com/in/..."
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="website" className="text-sm text-neutral-700">
                                                Portfolio
                                            </Label>
                                            <Input
                                                id="website"
                                                placeholder="votre-site.com"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end pt-8 border-t border-neutral-200">
                                    <Button
                                        onClick={nextStep}
                                        className="btn-tesla btn-tesla-primary h-11 px-8 flex items-center gap-2"
                                    >
                                        Suivant <ArrowRight01Icon className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Experience */}
                        {currentStep === 2 && (
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-[var(--brand-primary)] mb-8">
                                        Expérience professionnelle
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="job-title" className="text-sm text-neutral-700">
                                                Dernier poste occupé
                                            </Label>
                                            <Input
                                                id="job-title"
                                                placeholder="Ex: Ingénieur Génie Civil"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company" className="text-sm text-neutral-700">
                                                Entreprise
                                            </Label>
                                            <Input
                                                id="company"
                                                placeholder="Nom de l'entreprise"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="start-date" className="text-sm text-neutral-700">
                                                Date de début
                                            </Label>
                                            <Input
                                                id="start-date"
                                                type="date"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="end-date" className="text-sm text-neutral-700">
                                                Date de fin
                                            </Label>
                                            <Input
                                                id="end-date"
                                                type="date"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description" className="text-sm text-neutral-700">
                                            Responsabilités principales
                                        </Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Décrivez vos principales responsabilités..."
                                            className="min-h-[100px] border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0 resize-none"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-sm text-neutral-700">Niveau d'études</Label>
                                        <Select>
                                            <SelectTrigger className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0">
                                                <SelectValue placeholder="Sélectionnez votre niveau" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="bac">Baccalauréat</SelectItem>
                                                <SelectItem value="bac2">Bac +2</SelectItem>
                                                <SelectItem value="bac3">Bac +3</SelectItem>
                                                <SelectItem value="bac5">Bac +5</SelectItem>
                                                <SelectItem value="phd">Doctorat</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-sm text-neutral-700">
                                            CV (PDF, max 5Mo)
                                        </Label>
                                        <div className="border-2 border-dashed border-neutral-300 rounded-sm p-8 text-center hover:border-neutral-400 transition-colors cursor-pointer">
                                            <p className="text-sm text-neutral-600">Glissez votre CV ici ou cliquez pour sélectionner</p>
                                            <p className="text-xs text-neutral-400 mt-2">PDF uniquement</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-8 border-t border-neutral-200">
                                    <Button
                                        onClick={prevStep}
                                        variant="ghost"
                                        className="h-11 px-8 text-neutral-700 hover:bg-neutral-100"
                                    >
                                        Retour
                                    </Button>
                                    <Button
                                        onClick={nextStep}
                                        className="btn-tesla btn-tesla-primary h-11 px-8 flex items-center gap-2"
                                    >
                                        Suivant <ArrowRight01Icon className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Final Details */}
                        {currentStep === 3 && (
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-[var(--brand-primary)] mb-8">
                                        Finalisation
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="salary" className="text-sm text-neutral-700">
                                                Rémunération souhaitée (DH/mois)
                                            </Label>
                                            <Input
                                                id="salary"
                                                type="number"
                                                placeholder="Ex: 8000"
                                                className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm text-neutral-700">Disponibilité</Label>
                                            <Select>
                                                <SelectTrigger className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0">
                                                    <SelectValue placeholder="Quand pouvez-vous commencer ?" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="immediate">Immédiate</SelectItem>
                                                    <SelectItem value="1month">1 mois</SelectItem>
                                                    <SelectItem value="2months">2 mois</SelectItem>
                                                    <SelectItem value="3months">3 mois</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-sm text-neutral-700">Type de contrat</Label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {['CDI', 'CDD', 'Stage', 'Freelance'].map((type) => (
                                                <div key={type} className="flex items-center space-x-2 p-3 border border-neutral-300 rounded-sm hover:border-neutral-400 transition-colors cursor-pointer">
                                                    <Checkbox id={type.toLowerCase()} />
                                                    <Label
                                                        htmlFor={type.toLowerCase()}
                                                        className="text-sm font-normal cursor-pointer flex-1"
                                                    >
                                                        {type}
                                                    </Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm text-neutral-700">
                                            Message de motivation
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Pourquoi souhaitez-vous rejoindre HAY2010 ?"
                                            className="min-h-[120px] border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0 resize-none"
                                        />
                                    </div>

                                    {/* Privacy notice - minimal */}
                                    <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4">
                                        <div className="flex gap-3">
                                            <ShieldBlockchainIcon className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                                            <div className="text-xs text-neutral-600 leading-relaxed">
                                                Vos données sont traitées conformément à la loi 09-08.
                                                Vous disposez d'un droit d'accès et de rectification.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Checkbox id="terms" className="mt-1" />
                                        <Label htmlFor="terms" className="text-xs text-neutral-600 cursor-pointer leading-relaxed">
                                            J'accepte les conditions générales d'utilisation et la politique de confidentialité
                                        </Label>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-8 border-t border-neutral-200">
                                    <Button
                                        onClick={prevStep}
                                        variant="ghost"
                                        className="h-11 px-8 text-neutral-700 hover:bg-neutral-100"
                                    >
                                        Retour
                                    </Button>
                                    <Button className="btn-tesla btn-tesla-primary h-11 px-10 flex items-center gap-2">
                                        <CheckmarkCircle02Icon className="w-5 h-5" />
                                        Envoyer ma candidature
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Minimal trust section - Tesla style */}
            <section className="py-16 bg-neutral-50 border-t border-neutral-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-sm font-semibold text-[var(--brand-primary)]">Sécurité</div>
                            <p className="text-xs text-neutral-600">Données protégées et confidentielles</p>
                        </div>
                        <div className="space-y-2 md:border-x border-neutral-300">
                            <div className="text-sm font-semibold text-[var(--brand-primary)]">Réactivité</div>
                            <p className="text-xs text-neutral-600">Réponse sous 48h maximum</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-semibold text-[var(--brand-primary)]">Opportunités</div>
                            <p className="text-xs text-neutral-600">Postes variés et évolutifs</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
