'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Equipe() {

    // Références pour les animations
    const teamRef = useRef(null);
    const titreRef = useRef(null);
    const membreRef = useRef(null);

    useEffect(() => {
        // Enregistrer le plugin ScrollTrigger
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        
        // Animation du header
        gsap.from(teamRef.current, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out'
        });

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: teamRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
          tl.fromTo(
              titreRef.current,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8 }
          )
          .fromTo(
            membreRef.current,
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8 },
            "-=0.4"
          );

        }
    }, []);

    const teamMembers = [
        {
          name: 'Evariste Kouassi',
          role: 'Directrice Générale',
          image: '/personne1.jpg'
        },
        {
          name: 'Chonou Oriane',
          role: 'Directeur Technique',
          image: '/personne2.jpg'
        },
        {
          name: 'Emmanuel Yao',
          role: 'Responsable Créative',
          image: '/personne1.jpg'
        },
        {
          name: 'Boris Yakoué',
          role: 'Développeur Senior',
          image: '/personne2.jpg'
        }
      ];

    return (
        <div>
            {/* Notre Équipe */}
            <section ref={teamRef} className="mb-24">
                <div ref={titreRef} className="animate-item text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre équipe</h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                </div>
                <div ref={membreRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                    <div key={index} className="animate-item bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="p-4 text-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                                <Image 
                                src={member.image}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-indigo-600">{member.role}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    )
}