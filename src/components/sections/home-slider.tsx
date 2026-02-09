'use client';

import { Hay2010Slider, Slide } from '@/components/Hay2010Slider';
import { useRouter } from 'next/navigation';

export function HomeSlider() {
    const router = useRouter();

    const slides: Slide[] = [
        {
            id: 0,
            title: 'Éclairage Public LED',
            subtitle: 'Solutions modernes pour les villes de demain',
            backgroundImage: '/images/street-lighting/casablanca-lighting-1.jpg',
            primaryCTA: {
                label: 'Nos Projets',
                onClick: () => router.push('/projects'),
            },
            secondaryCTA: {
                label: 'En Savoir Plus',
                onClick: () => router.push('/services'),
            },
        },
        {
            id: 1,
            title: 'Construction & Installation',
            subtitle: 'Expertise dans l\'éclairage urbain au Maroc',
            backgroundImage: '/images/street-lighting/casablanca-lighting-2.jpg',
            primaryCTA: {
                label: 'Contactez-nous',
                onClick: () => router.push('/contact'),
            },
            secondaryCTA: {
                label: 'Nos Services',
                onClick: () => router.push('/services'),
            },
        },
        {
            id: 2,
            title: 'HAY2010',
            subtitle: 'Leader en éclairage public et infrastructure urbaine',
            backgroundImage: '/images/street-lighting/casablanca-lighting-1.jpg',
            primaryCTA: {
                label: 'Découvrir',
                onClick: () => router.push('/about'),
            },
            secondaryCTA: {
                label: 'Recrutement',
                onClick: () => router.push('/recrutement'),
            },
        },
    ];

    return (
        <Hay2010Slider
            slides={slides}
            autoPlay={true}
            autoPlayInterval={6000}
            showCloseButton={false}
        />
    );
}
