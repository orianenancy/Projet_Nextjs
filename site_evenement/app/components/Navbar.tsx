// components/Navbar.jsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { link } from 'fs';



export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const titleref = useRef(null);
  const linkref = useRef(null);
  const logoref = useRef(null);

  //GSAP animation pour le titre
  useLayoutEffect(() => {
    gsap.from(titleref.current, { opacity: 0, y: 30, duration: 1 , delay: 0.3});
    gsap.from(linkref.current, { opacity: 0, x: 30, duration: 1 , delay: 0.3});
    gsap.from(logoref.current, { opacity: 0, x: -30, duration: 1 , delay: 0.3});
  }, []);

  // Effet pour détecter le défilement et changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Remplacez par votre propre logo */}
              <div ref={logoref} className="h-8 w-8 bg-blue-600 rounded-full mr-2"></div>
              <span ref={titleref} className="text-xl font-bold text-gray-900">EventQuorum</span>
            </Link>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Accueil
            </Link>
            <Link href="/Prestation" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Prestations
            </Link>
            <Link href="/Explorer" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Explorer
            </Link>
            <Link href="/Quinoussommes" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Qui sommes-nous ?
            </Link>
          </div>

          {/* Bouton CTA */}
          <div className="hidden md:flex">
            <Link ref={linkref} href="/Demande" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Demander une démo
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none">
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
            Accueil
          </Link>
          <Link href="/Prestation" className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
            Prestations
          </Link>
          <Link href="/Explorer" className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
            Explorer
          </Link>
          <Link href="/Quinoussommes" className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
            Qui sommes-nous ?
          </Link>
          <Link href="/demander_demo" className="block bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium">
            Demander une démo
          </Link>
        </div>
      </div>
    </nav>
  );
}