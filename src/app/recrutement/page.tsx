'use client';

import { useState } from "react";
import Image from "next/image";
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
import { ArrowRight01Icon, CheckmarkCircle02Icon, ShieldBlockchainIcon, Loading03Icon, AlertCircleIcon, File01Icon } from "hugeicons-react";
import { sendRecruitmentEmail } from "./actions";
import { useRef } from "react";

export default function RecrutementPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [cvName, setCvName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const nextStep = () => setCurrentStep(Math.min(currentStep + 1, 3));
    const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1));

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        // Manual validation for required fields
        const requiredFields = ['firstname', 'lastname', 'email', 'phone'];
        for (const field of requiredFields) {
            if (!formData.get(field)) {
                setError(`Le champ ${field} est obligatoire.`);
                setIsSubmitting(false);
                return;
            }
        }

        const result = await sendRecruitmentEmail(formData);

        if (result.success) {
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setError(result.error || "Une erreur est survenue lors de l'envoi.");
        }
        setIsSubmitting(false);
    }

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-white flex items-center justify-center py-24">
                <div className="container mx-auto px-6 max-w-2xl text-center space-y-8 animate-fade-up">
                    <div className="flex justify-center">
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                            <CheckmarkCircle02Icon className="w-12 h-12 text-green-500" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-[var(--brand-primary)]">Candidature Envoyée !</h1>
                    <p className="text-xl text-neutral-600 font-light">
                        Merci pour votre intérêt pour HAY2010. Notre équipe RH examinera votre candidature et vous contactera dans les plus brefs délais.
                    </p>
                    <Button
                        onClick={() => window.location.href = '/'}
                        className="btn-tesla btn-tesla-primary h-12 px-10 rounded-sm"
                    >
                        Retour à l'accueil
                    </Button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Tesla-style Minimalist Hero with Banner Image */}
            <section className="section-fullscreen snap-section relative overflow-hidden">
                {/* Clean background with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-neutral-50"></div>

                <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full animate-fade-up">
                        {/* Left: Text Content */}
                        <div className="space-y-8 text-center lg:text-left">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--brand-primary)] leading-[1.1]">
                                Construisons l'avenir
                            </h1>

                            <p className="text-xl md:text-2xl text-neutral-600 font-light">
                                Rejoignez notre équipe et participez à des projets qui façonnent le Maroc de demain
                            </p>

                            <div className="pt-4">
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
                            <div className="grid grid-cols-3 gap-8 pt-8 max-w-lg">
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)]">30+</div>
                                    <div className="text-sm text-neutral-500 mt-1">Projets</div>
                                </div>
                                <div className="text-center lg:text-left border-x lg:border-x-0 lg:border-l border-neutral-200 lg:pl-8">
                                    <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)]">12</div>
                                    <div className="text-sm text-neutral-500 mt-1">Villes</div>
                                </div>
                                <div className="text-center lg:text-left lg:border-l border-neutral-200 lg:pl-8">
                                    <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)]">15+</div>
                                    <div className="text-sm text-neutral-500 mt-1">Années</div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Banner Image */}
                        <div className="relative w-full h-[300px] lg:h-[450px] flex items-center justify-center">
                            <div className="relative w-full h-full max-w-md mx-auto animate-float will-change-transform">
                                <Image
                                    src="/images/recruitment-banner.png"
                                    alt="Recrutement - Rejoignez HAY2010"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
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

                    {error && (
                        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-sm flex items-center gap-3 text-red-600 animate-fade-in">
                            <AlertCircleIcon className="w-5 h-5 flex-shrink-0" />
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    {/* Form content */}
                    <form onSubmit={handleSubmit} className="animate-fade-in">
                        {/* Step 1: Personal Information */}
                        <div className={`${currentStep !== 1 ? 'hidden' : ''} space-y-8`}>
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
                                            name="firstname"
                                            required
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
                                            name="lastname"
                                            required
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
                                            name="email"
                                            type="email"
                                            required
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
                                            name="phone"
                                            type="tel"
                                            required
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
                                        name="address"
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
                                            name="linkedin"
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
                                            name="website"
                                            placeholder="votre-site.com"
                                            className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-8 border-t border-neutral-200">
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    className="btn-tesla btn-tesla-primary h-11 px-8 flex items-center gap-2"
                                >
                                    Suivant <ArrowRight01Icon className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Step 2: Experience */}
                        <div className={`${currentStep !== 2 ? 'hidden' : ''} space-y-8`}>
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
                                            name="job-title"
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
                                            name="company"
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
                                            name="start-date"
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
                                            name="end-date"
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
                                        name="description"
                                        placeholder="Décrivez vos principales responsabilités..."
                                        className="min-h-[100px] border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0 resize-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm text-neutral-700">Niveau d'études</Label>
                                    <Select name="education">
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
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        className="border-2 border-dashed border-neutral-300 rounded-sm p-8 text-center hover:border-neutral-400 transition-colors cursor-pointer bg-neutral-50/50"
                                    >
                                        {cvName ? (
                                            <div className="flex items-center justify-center gap-2 text-green-600">
                                                <File01Icon className="w-5 h-5" />
                                                <span className="text-sm font-medium">{cvName}</span>
                                            </div>
                                        ) : (
                                            <>
                                                <p className="text-sm text-neutral-600">Cliquez pour sélectionner votre CV</p>
                                                <p className="text-xs text-neutral-400 mt-2">PDF uniquement</p>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            name="cv"
                                            ref={fileInputRef}
                                            accept=".pdf"
                                            className="hidden"
                                            aria-label="Choisir un fichier CV"
                                            onChange={(e) => setCvName(e.target.files?.[0]?.name || null)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between pt-8 border-t border-neutral-200">
                                <Button
                                    type="button"
                                    onClick={prevStep}
                                    variant="ghost"
                                    className="h-11 px-8 text-neutral-700 hover:bg-neutral-100"
                                >
                                    Retour
                                </Button>
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    className="btn-tesla btn-tesla-primary h-11 px-8 flex items-center gap-2"
                                >
                                    Suivant <ArrowRight01Icon className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Step 3: Final Details */}
                        <div className={`${currentStep !== 3 ? 'hidden' : ''} space-y-8`}>
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
                                            name="salary"
                                            type="number"
                                            placeholder="Ex: 8000"
                                            className="h-11 border-neutral-300 rounded-sm focus:border-[var(--brand-primary)] focus:ring-0"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm text-neutral-700">Disponibilité</Label>
                                        <Select name="availability">
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
                                                <Checkbox
                                                    id={type.toLowerCase()}
                                                    name="contract-type"
                                                    value={type}
                                                />
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
                                        name="message"
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
                                    <Checkbox id="terms" required className="mt-1" />
                                    <Label htmlFor="terms" className="text-xs text-neutral-600 cursor-pointer leading-relaxed">
                                        J'accepte les conditions générales d'utilisation et la politique de confidentialité *
                                    </Label>
                                </div>
                            </div>

                            <div className="flex justify-between pt-8 border-t border-neutral-200">
                                <Button
                                    type="button"
                                    onClick={prevStep}
                                    disabled={isSubmitting}
                                    variant="ghost"
                                    className="h-11 px-8 text-neutral-700 hover:bg-neutral-100"
                                >
                                    Retour
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-tesla btn-tesla-primary h-11 px-10 flex items-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <Loading03Icon className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <CheckmarkCircle02Icon className="w-5 h-5" />
                                    )}
                                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                                </Button>
                            </div>
                        </div>
                    </form>
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

