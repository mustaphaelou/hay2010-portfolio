# HAY2010 Full-Screen Slider

A beautiful, Tesla-inspired carousel slider component with smooth transitions, navigation controls, and auto-play functionality.

## Features

- ✨ **Full-screen slides** with smooth transitions
- 🖼️ **Support for images, videos, and YouTube** as backgrounds
- ⌨️ **Keyboard navigation** (Arrow keys, Escape)
- 🎯 **Dot pagination** with visual indicators
- ▶️ **Auto-play functionality** with play/pause control
- 📱 **Fully responsive** design
- 🎨 **Tesla-inspired aesthetics** with clean animations
- ♿ **Accessible** with ARIA labels and keyboard support

## Usage

### Basic Example

```tsx
'use client';

import { Hay2010Slider, Slide } from '@/components/Hay2010Slider';

export default function MyPage() {
    const slides: Slide[] = [
        {
            id: 1,
            title: 'Full Self-Driving (Supervised)',
            subtitle: 'One-Time Purchase Ends Feb. 14',
            backgroundImage: '/images/slide-1.jpg',
            primaryCTA: {
                label: 'Order Now',
                onClick: () => console.log('Order clicked'),
            },
            secondaryCTA: {
                label: 'Learn More',
                onClick: () => console.log('Learn More clicked'),
            },
        },
        // Add more slides...
    ];

    return <Hay2010Slider slides={slides} autoPlay={true} />;
}
```

### Using Images

You can use:
- Local images from `/public/images/`
- External URLs
- Stock photo services like [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com)

**Example with Unsplash:**
```tsx
backgroundImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&q=80'
```

### Using Videos

```tsx
{
    id: 1,
    title: 'Experience Innovation',
    backgroundVideo: '/videos/hero.mp4',
    // ... rest of config
}
```

### Using YouTube Videos

You can now use YouTube videos as backgrounds! Simply provide the YouTube URL:

```tsx
{
    id: 1,
    title: 'YouTube Video Demo',
    subtitle: 'Powered by YouTube',
    youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    primaryCTA: {
        label: 'Watch More',
        onClick: () => console.log('CTA clicked'),
    },
}
```

The component automatically:
- Extracts the video ID from any YouTube URL format
- Converts it to an embeddable iframe
- Auto-plays the video muted and looped
- Removes YouTube controls for a cleaner look


### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `Slide[]` | **required** | Array of slide objects |
| `autoPlay` | `boolean` | `false` | Enable auto-play |
| `autoPlayInterval` | `number` | `5000` | Time between slides (ms) |
| `showCloseButton` | `boolean` | `false` | Show close button |
| `onClose` | `() => void` | `undefined` | Callback when close is clicked |

### Slide Object Structure

```tsx
interface Slide {
    id: number;
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    backgroundVideo?: string;
    youtubeUrl?: string; // YouTube video URL
    primaryCTA?: {
        label: string;
        href?: string;
        onClick?: () => void;
    };
    secondaryCTA?: {
        label: string;
        href?: string;
        onClick?: () => void;
    };
}
```

## Quick Start with Free Stock Images

Here's an example using free Unsplash images for a quick demo:

```tsx
const slides: Slide[] = [
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
            onClick: () => window.location.href = '/explore',
        },
    },
    {
        id: 3,
        title: 'Built for Performance',
        subtitle: 'Power Meets Efficiency',
        backgroundImage: 'https://images.unsplash.com/photo-1564631027894-5bdb17618445?w=1920&q=80',
        primaryCTA: {
            label: 'Test Drive',
            onClick: () => window.location.href = '/test-drive',
        },
    },
];
```

## Keyboard Controls

- **Left Arrow**: Previous slide
- **Right Arrow**: Next slide
- **Escape**: Close slider (if `onClose` is provided)

## Customization

The component uses your global CSS variables:
- `--brand-accent` for primary CTA button
- `--brand-primary` for text color

You can customize the animations and transitions in the component file.

## Demo

Visit `/slider-demo` to see the component in action!
