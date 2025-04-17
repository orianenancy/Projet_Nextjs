'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { UserIcon, Code2Icon, QrCodeIcon, VideoIcon, UsersIcon, BarChart3Icon } from 'lucide-react'

export default function Fonctionnalite() {
  const headingRef = useRef(null)
  const heading2Ref = useRef(null)
  const sectionRef = useRef(null)
  const buttonref = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
      )
        .fromTo(
          heading2Ref.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4',
        )
        .fromTo(
          sectionRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4',
        )
        .fromTo(
          buttonref.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4',
        )
    }
  }, [])

  const features = [
    {
      icon: <UserIcon className="w-10 h-10 text-teal-400" />,
      title: 'Inscription & Billetterie',
      items: [
        "Formulaire d'inscription",
        "Enregistrement payant ou gratuit",
        'Édition de badges',
        "Edition de liens d’accès en ligne",
      ],
    },
    {
      icon: <Code2Icon className="w-10 h-10 text-yellow-400" />,
      title: 'Site web & Appli mobile',
      items: [
        'Site web personnalisé avec URL dédiée',
        'Appli mobile en marque blanche',
        "E-mails d'invitation",
        'Programmation de campagnes',
      ],
    },
    {
      icon: <QrCodeIcon className="w-10 h-10 text-pink-400" />,
      title: 'Enregistrement sur site',
      items: [
        "Poste d’accueil (impression de badges)",
        'Solution de contrôle d’accès',
        'Notification sur site par SMS ou Slack',
      ],
    },
    {
      icon: <VideoIcon className="w-10 h-10 text-orange-300" />,
      title: 'Formats digitaux',
      items: [
        'Webinaires',
        'Visio-conférences',
        'Événements digitaux',
        'Diffusion en direct et replay',
      ],
    },
    {
      icon: <UsersIcon className="w-10 h-10 text-emerald-300" />,
      title: 'Engagement des participants',
      items: [
        'Matchmaking',
        'Networking',
        "Outils d’interactivité",
        'Génération de leads',
      ],
    },
    {
      icon: <BarChart3Icon className="w-10 h-10 text-yellow-300" />,
      title: 'Outils d’analyse de données',
      items: [
        'Tableau de bord',
        'Rapports et exports sur mesure',
        'Score d’engagement événementiel',
        'Comparatif entre événements',
      ],
    },
  ]

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 ref={headingRef} className="text-4xl font-bold text-center mb-6">
        Les fonctionnalités personnalisables <br />
        <span className="text-pink-400">préférées</span> de nos clients
      </h1>

      <p ref={heading2Ref} className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Découvrez nos modules les plus populaires, pensés pour offrir une expérience fluide et complète lors de vos événements.
      </p>

      <div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div>{feature.icon}</div>
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <ul className="text-sm leading-relaxed">
              {feature.items.map((item, i) => (
                <li key={i}>
                  <span className={i === 0 ? 'font-semibold' : ''}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div ref={buttonref} className="mt-14 text-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
          En Savoir Plus
        </button>
      </div>
    </div>
  )
}
