'use client'

import Hero from "./components/Hero";
import EventsSection from "./components/EventsSection";
import PartenersSection from "./components/PartenersSection";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { se } from "date-fns/locale";
import EventCarousel from "./components/EventCarousel";

export default function Home() {

  const headingRef = useRef(null);
  const heading2Ref = useRef(null);
  const sectionRef = useRef(null);
  const buttonref = useRef(null);

  //GSAP animation pour le titre
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        heading2Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        sectionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        buttonref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
    }
  }, []);

  return (

    

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div  className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm from-white to-blue-50">
        <h1 ref={headingRef} className="text-4xl font-bold text-center mb-8">
          Les fonctionnalités de notre application
        </h1>
        <p ref={heading2Ref} className="text-xl text-center mb-12">
          Ici sont présentées les principales fonctionnalités de notre application, conçues pour améliorer votre expérience utilisateur et répondre à vos besoins spécifiques.
        </p>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section 1 */}
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Fonctionnalité 1</h2>
            <p>Description de la première fonctionnalité de votre application.</p>
          </div>
          
          {/* Section 2 */}
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Fonctionnalité 2</h2>
            <p>Description de la deuxième fonctionnalité de votre application.</p>
          </div>
          
          {/* Section 3 */}
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Fonctionnalité 3</h2>
            <p>Description de la troisième fonctionnalité de votre application.</p>
          </div>

          {/* Section 4 */}
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Fonctionnalité 4</h2>
            <p>Description de la quatrième fonctionnalité de votre application.</p>
          </div>
          
          {/* Section 5 */}
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Fonctionnalité 5</h2>
            <p>Description de la cinquième fonctionnalité de votre application.</p>
          </div>
          
          {/* Section 6 */}
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Fonctionnalité 6</h2>
            <p>Description de la sixième fonctionnalité de votre application.</p>
          </div>
        </div>
        
        <div ref={buttonref} className="mt-12 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
            En Savoir Plus
          </button>
        </div>
      </div>
      <EventsSection />
      <PartenersSection />
      <EventCarousel />
    </main>   

  );
}
