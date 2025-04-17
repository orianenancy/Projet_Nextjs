// components/PartnersSection.jsx
"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PartnersSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const partnersRef = useRef(null);
  const frogRef = useRef(null);
  const ctaRef = useRef(null);
  const introRef = useRef(null);

  const partners = [
    { id: 1, name: "Orange CI", logo: "/logoOrange.png" },
    { id: 2, name: "Nesle", logo: "/logo_nesle.png" },
    { id: 3, name: "SucreIvoire", logo: "/logoSucreIvoire2.png" },
    { id: 4, name: "SAPH", logo: "/logoSAPH.png" },
    { id: 5, name: "Société Générale", logo: "/logoSocieteGenerale.png" },
    { id: 6, name: "NSIA Bank", logo: "/Logo-NSIA-BANK.png" },
    { id: 7, name: "Unilever", logo: "/logoUnilever2.png" },
    // Ajoute d'autres partenaires si nécessaire
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Animation en séquence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(
        headingRef.current,
        { x: 70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 }
      )
      .fromTo(
        introRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        frogRef.current,
        { y: 0, opacity: 0 },
        { 
          y: -20, 
          opacity: 1, 
          duration: 0.6,
          ease: "elastic.out(1, 0.5)"
        },
        "-=0.4"
      )
      .fromTo(
        partnersRef.current.children,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out"
        }
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "+=0.3"
      );

      
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Élément décoratif */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div  className="text-center mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ils nous font <span className="text-blue-600">confiance</span>
          </h2>
          <p ref={introRef} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec des entreprises innovantes pour créer un impact durable et mesurable.
          </p>
        </div>
        
        

        <div 
          ref={partnersRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center"
        >
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="w-full h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 group"
              title={partner.name}
            >
              <div className="relative h-16 w-32 md:h-20 md:w-40 rounded flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div ref={ctaRef} className="text-center mt-16">
          <a 
            href="/partenaires" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir tous nos partenaires
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}