'use client';

import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const columnRefs = useRef([]);
  const logoRef = useRef(null);
  const copyrightRef = useRef(null);
  const gsapRef = useRef(null);

  useEffect(() => {
    // Chargement dynamique de GSAP
    const loadGSAP = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.async = true;
        script.onload = () => {
          gsapRef.current = window.gsap;
          initAnimations();
        };
        document.body.appendChild(script);
      } catch (error) {
        console.error('Erreur lors du chargement de GSAP:', error);
      }
    };

    loadGSAP();
  }, []);

  const initAnimations = () => {
    if (!gsapRef.current) return;
    
    const gsap = gsapRef.current;
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    
    // Stagger animation pour les colonnes du footer
    tl.fromTo(columnRefs.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
    );
    
    // Animation du logo
    tl.fromTo(logoRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.6 }, 
      "-=0.5"
    );
    
    // Animation du copyright
    tl.fromTo(copyrightRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.6 }, 
      "-=0.3"
    );
    
    
    
    // Animation hover pour les liens
    const links = footerRef.current.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          x: 5,
          color: "#93c5fd", // blue-300
          duration: 0.3,
          ease: "power1.out"
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          x: 0,
          color: "#f3f4f6", // gray-100
          duration: 0.3,
          ease: "power1.out"
        });
      });
    });
    
    
  };
  
  // Observer d'intersection pour déclencher l'animation au scroll
  useEffect(() => {
    if (!window.IntersectionObserver) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && gsapRef.current) {
          initAnimations();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => observer.disconnect();
  }, [gsapRef.current]);
  
  // Fonction pour remonter en haut de page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100 pt-16 pb-8 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Colonne 1: Logo et description */}
          <div ref={el => columnRefs.current[0] = el} className="space-y-4">
            <div ref={logoRef} className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-white font-bold text-xl">EventQuorum</span>
            </div>
            <p className="text-gray-300">
              Transformez vos idées en événements inoubliables. Notre équipe expérimentée vous accompagne dans la création d'expériences sur mesure qui marqueront les esprits.
            </p>
          </div>

          {/* Colonne 2: Nos services */}
          <div ref={el => columnRefs.current[1] = el} className="space-y-4">
            <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-500 pb-2 inline-block">
              Nos Services
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Organisation d'événements</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Location de matériel</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Coordination logistique</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Marketing événementiel</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Gestion des invitations</a></li>
            </ul>
          </div>

          {/* Colonne 3: Liens utiles */}
          <div ref={el => columnRefs.current[2] = el} className="space-y-4">
            <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-500 pb-2 inline-block">
              Liens Utiles
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-300 transition-colors">À propos de nous</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Témoignages clients</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Blog événementiel</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Carrières</a></li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div ref={el => columnRefs.current[3] = el} className="space-y-6">
            <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-500 pb-2 inline-block">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span>123 Avenue des Événements, 75000 Paris, France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>+33 (0)1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@eventpro.com" className="hover:text-blue-300 transition-colors">contact@eventpro.com</a>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Séparateur */}
        <div className="border-t border-gray-700 my-8"></div>
        
        {/* Copyright et politique */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div ref={copyrightRef} className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EventPro. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-300 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
      
      
      
      {/* Élément décoratif */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700"></div>
    </footer>
  );
};

export default Footer;