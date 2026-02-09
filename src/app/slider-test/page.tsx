'use client';

import { Hay2010Slider, Slide } from '@/components/Hay2010Slider';

export default function SimpleSliderTest() {
    const slides: Slide[] = [
        {
            id: 1,
            title: 'Slide 1 - Image',
            subtitle: 'Testing with Unsplash Image',
            backgroundImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&q=80',
            primaryCTA: {
                label: 'Click Me',
                onClick: () => console.log('Slide 1 clicked'),
            },
        },
        {
            id: 2,
            title: 'Slide 2 - Another Image',
            subtitle: 'Second slide test',
            backgroundImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80',
            primaryCTA: {
                label: 'Click Me Too',
                onClick: () => console.log('Slide 2 clicked'),
            },
        },
    ];

    return (
        <main>
            <Hay2010Slider
                slides={slides}
                autoPlay={false}
                showCloseButton={false}
            />
        </main>
    );
}
