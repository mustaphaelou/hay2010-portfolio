'use client';

import { Hay2010Slider, Slide } from '@/components/Hay2010Slider';

export default function SliderDemoPage() {
    const slides: Slide[] = [
        {
            id: 0,
            title: 'YouTube Video Demo',
            subtitle: 'Testing with YouTube Background',
            youtubeUrl: 'https://www.youtube.com/watch?v=45Dg_KTPQVg',
            primaryCTA: {
                label: 'Watch More',
                onClick: () => alert('Watch More clicked!'),
            },
            secondaryCTA: {
                label: 'Learn More',
                onClick: () => alert('Learn More clicked!'),
            },
        },
        {
            id: 1,
            title: 'Full Self-Driving (Supervised)',
            subtitle: 'One-Time Purchase Ends Feb. 14',
            backgroundImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&q=80',
            primaryCTA: {
                label: 'Order Now',
                onClick: () => alert('Order Now clicked!'),
            },
            secondaryCTA: {
                label: 'Learn More',
                onClick: () => alert('Learn More clicked!'),
            },
        },
        {
            id: 2,
            title: 'Experience True Innovation',
            subtitle: 'Discover the Future of Technology',
            backgroundImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80',
            primaryCTA: {
                label: 'Explore',
                onClick: () => alert('Explore clicked!'),
            },
            secondaryCTA: {
                label: 'Demo',
                onClick: () => alert('Demo clicked!'),
            },
        },
        {
            id: 3,
            title: 'Built for Performance',
            subtitle: 'Power Meets Efficiency',
            backgroundImage: 'https://images.unsplash.com/photo-1564631027894-5bdb17618445?w=1920&q=80',
            primaryCTA: {
                label: 'Test Drive',
                onClick: () => alert('Test Drive clicked!'),
            },
            secondaryCTA: {
                label: 'Specifications',
                onClick: () => alert('Specifications clicked!'),
            },
        },
    ];

    return (
        <main>
            <Hay2010Slider
                slides={slides}
                autoPlay={true}
                autoPlayInterval={5000}
                showCloseButton={false}
            />
        </main>
    );
}
