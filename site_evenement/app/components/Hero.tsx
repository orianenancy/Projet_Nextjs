
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  
  useEffect(() => {
    // Animation d'entrée au chargement
    setIsVisible(true);


  }, []);

  return (
    <header className="bg-gradient-to-br mt-0 pt-15 pb-16 overflow-hidden">
      <div className="max-w-13xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-25">
          
          {/* Partie texte (gauche) */}
          <div 
            className={`w-full lg:w-1/2 transition-all duration-2000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              EventQuorum
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Découvrez une <span className="text-blue-600">nouvelle façon</span> de créer
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Notre plateforme vous offre tous les outils nécessaires pour transformer vos idées en projets concrets et innovants. Commencez dès aujourd'hui.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/decouvrir" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                Découvrir
              </Link>
              
              <Link 
                href="/demo" 
                className="px-6 py-3 border border-gray-300 hover:border-blue-500 text-gray-800 rounded-lg font-medium transition-colors hover:bg-blue-50">
                Voir la démo
              </Link>
            </div>
          </div>
          
          {/* Image (droite) */}
          <div 
            className={`w-full lg:w-1/2 transition-all duration-2000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative h-80 md:h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              {/* Remplacez ceci par votre propre image */}
              <div className="absolute inset-0 bg-blue-300 opacity-20 z-10 animate-pulse"></div>
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 relative">
                {/* Simuler une image - remplacez par votre propre image */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/30 rounded-full blur-3xl"></div>
                <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-xl"></div>
                
                {/* Quand vous aurez une vraie image, utilisez : */}
                { <Image 
                  src="/event2.avif" 
                  alt="une evenement" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  priority
                /> }
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}