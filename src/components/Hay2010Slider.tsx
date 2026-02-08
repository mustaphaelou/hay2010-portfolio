'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeft01Icon, ArrowRight01Icon, Cancel01Icon, PlayCircleIcon, PauseCircleIcon } from 'hugeicons-react';
import { Button } from '@/components/ui/button';

export interface Slide {
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

// Helper function to extract YouTube video ID from URL
function getYouTubeEmbedUrl(url: string): string {
    const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
    if (videoIdMatch && videoIdMatch[1]) {
        return `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${videoIdMatch[1]}&controls=0&showinfo=0&rel=0&modestbranding=1`;
    }
    return url;
}

interface Hay2010SliderProps {
    slides: Slide[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showCloseButton?: boolean;
    onClose?: () => void;
}

export function Hay2010Slider({
    slides,
    autoPlay = false,
    autoPlayInterval = 5000,
    showCloseButton = false,
    onClose,
}: Hay2010SliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning]);

    const nextSlide = useCallback(() => {
        goToSlide((currentSlide + 1) % slides.length);
    }, [currentSlide, slides.length, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }, [currentSlide, slides.length, goToSlide]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying || slides.length <= 1) return;

        const interval = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [isPlaying, autoPlayInterval, nextSlide, slides.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'Escape' && onClose) onClose();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [prevSlide, nextSlide, onClose]);

    const currentSlideData = slides[currentSlide];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Background Image/Video */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
                        }`}
                >
                    {slide.youtubeUrl ? (
                        <iframe
                            className="w-full h-full object-cover pointer-events-none"
                            src={getYouTubeEmbedUrl(slide.youtubeUrl)}
                            title={slide.title}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '100vw',
                                height: '100vh',
                                transform: 'translate(-50%, -50%)',
                                minWidth: '100%',
                                minHeight: '100%',
                            }}
                        />
                    ) : slide.backgroundVideo ? (
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={slide.backgroundVideo} type="video/mp4" />
                        </video>
                    ) : slide.backgroundImage ? (
                        <Image
                            src={slide.backgroundImage}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    ) : null}
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
                </div>
            ))}

            {/* Close Button */}
            {showCloseButton && onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-sm p-2 transition-all duration-300"
                    aria-label="Close"
                >
                    <Cancel01Icon className="w-5 h-5" />
                </button>
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
                <div
                    className={`max-w-4xl transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                        }`}
                >
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
                        {currentSlideData.title}
                    </h1>

                    {/* Subtitle */}
                    {currentSlideData.subtitle && (
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 font-light">
                            {currentSlideData.subtitle}
                        </p>
                    )}

                    {/* Call-to-Action Buttons */}
                    {(currentSlideData.primaryCTA || currentSlideData.secondaryCTA) && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {currentSlideData.primaryCTA && (
                                <Button
                                    onClick={currentSlideData.primaryCTA.onClick}
                                    className="bg-[#3e6ae1] hover:bg-[#2d5bd0] text-white px-8 py-6 text-base font-medium rounded-sm transition-all duration-300 min-w-[200px]"
                                >
                                    {currentSlideData.primaryCTA.label}
                                </Button>
                            )}
                            {currentSlideData.secondaryCTA && (
                                <Button
                                    onClick={currentSlideData.secondaryCTA.onClick}
                                    variant="outline"
                                    className="bg-white/95 hover:bg-white text-[#171a20] border-0 px-8 py-6 text-base font-medium rounded-sm transition-all duration-300 min-w-[200px]"
                                >
                                    {currentSlideData.secondaryCTA.label}
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 sm:p-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft01Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={isTransitioning}
                        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 sm:p-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                    >
                        <ArrowRight01Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </>
            )}

            {/* Pagination Dots */}
            {slides.length > 1 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            className={`transition-all duration-300 rounded-full ${index === currentSlide
                                ? 'bg-white w-8 h-2'
                                : 'bg-white/50 hover:bg-white/75 w-2 h-2'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Play/Pause Button (only if autoPlay is enabled) */}
            {autoPlay && slides.length > 1 && (
                <button
                    onClick={togglePlayPause}
                    className="absolute bottom-8 left-8 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-sm p-2 transition-all duration-300"
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                    {isPlaying ? (
                        <PauseCircleIcon className="w-6 h-6" />
                    ) : (
                        <PlayCircleIcon className="w-6 h-6" />
                    )}
                </button>
            )}
        </div>
    );
}
