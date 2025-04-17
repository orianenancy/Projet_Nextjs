'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        // Enregistrer le plugin ScrollTrigger
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

        }
        // Animation du header
        gsap.from(headerRef.current, {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out'
          });
    }, []);

    return (
        
        <div>
            {/* Hero Section */}
            <header 
                ref={headerRef} 
                className="relative h-96 flex items-center justify-center overflow-hidden bg-indigo-900"
              >
                <div className="absolute inset-0 opacity-70">
                  <Image 
                    src="/equipe2.jpg"
                    alt="Image d'équipe"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative z-10 text-center px-6">
                  <h1 className="text-5xl font-bold text-white mb-4">Qui nous sommes</h1>
                  <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                    Une équipe passionnée, dédiée à créer des expériences numériques exceptionnelles
                  </p>
                </div>
              </header>
        </div>
    );
}