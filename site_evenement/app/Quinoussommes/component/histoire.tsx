'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Histoire() {
    // Références pour les animations
    const historyRef = useRef(null);
    const titreRef = useRef(null);
    const anneeRef = useRef(null);
    const ligneRef = useRef(null);

    useEffect(() => {
        // Enregistrer le plugin ScrollTrigger
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        
        // Animation du header
        gsap.from(historyRef.current, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out'
        });
        }

        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: historyRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
            }
        });
        tl.fromTo(
            titreRef.current,
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(
            anneeRef.current,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8 },
            "-=0.4"
        )
        .fromTo(
            ligneRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.4"
        );


    }, []);


    return (
        <div>
            {/* Notre Histoire */}
            <section ref={historyRef}>
            <div ref={titreRef} className="animate-item text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre histoire</h2>
                <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            <div ref={anneeRef} className="relative animate-item">
                {/* Ligne de temps verticale */}
                <div ref={ligneRef} className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-200 transform -translate-x-1/2"></div>
                
                {/* Événements */}
                <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2018</h3>
                    <p className="text-gray-600">Fondation de l'entreprise avec une équipe de trois passionnés du web.</p>
                    </div>
                    <div className="hidden md:block w-4 h-4 bg-indigo-600 rounded-full border-4 border-indigo-100 z-10"></div>
                    <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-none"></div>
                    <div className="hidden md:block w-4 h-4 bg-indigo-600 rounded-full border-4 border-indigo-100 z-10"></div>
                    <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2020</h3>
                    <p className="text-gray-600">Expansion de l'équipe et ouverture de nos nouveaux bureaux.</p>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2022</h3>
                    <p className="text-gray-600">Lancement de notre service d'application mobile et récompense pour l'innovation.</p>
                    </div>
                    <div className="hidden md:block w-4 h-4 bg-indigo-600 rounded-full border-4 border-indigo-100 z-10"></div>
                    <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-none"></div>
                    <div className="hidden md:block w-4 h-4 bg-indigo-600 rounded-full border-4 border-indigo-100 z-10"></div>
                    <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Aujourd'hui</h3>
                    <p className="text-gray-600">Une équipe de professionnels dévoués, servant des clients dans toute la Côte d'Ivoire.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}