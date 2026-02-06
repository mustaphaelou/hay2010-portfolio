"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
    { value: 20, suffix: "+", label: "Années d'Expérience" },
    { value: 100, suffix: "+", label: "Collaborateurs" },
    { value: 500, suffix: "+", label: "Projets Réalisés" },
    { value: 12, suffix: "", label: "Régions Couvertes" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 2000;
                    const increment = target / (duration / 16);

                    const animate = () => {
                        start += increment;
                        if (start < target) {
                            setCount(Math.floor(start));
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                        }
                    };
                    animate();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="text-5xl md:text-6xl font-medium text-[#171a20]">
            {count}{suffix}
        </div>
    );
}

export function TrustBar() {
    return (
        <section className="min-h-screen flex items-center snap-section bg-white">
            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            <p className="mt-2 text-sm text-[#5c5e62]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
