"use client";

import { useEffect, useState, useRef } from "react";
import { Separator } from "@/components/ui/separator";

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
        <div ref={ref} className="text-5xl md:text-6xl font-bold text-gradient mb-2 tracking-tight">
            {count}{suffix}
        </div>
    );
}

export function TrustBar() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 pattern-grid opacity-30" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
                    {stats.map((stat, index) => (
                        <div key={stat.label} className="relative flex flex-col items-center text-center group">
                            {/* Divider for desktop (except last item) */}
                            {index !== stats.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                            )}

                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />

                            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-2">
                                {stat.label}
                            </p>

                            {/* Bottom accent line on hover */}
                            <div className="w-12 h-1 bg-[#3e6ae1] rounded-full mt-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg shadow-blue-500/30" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
