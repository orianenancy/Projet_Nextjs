// QuiNousSommes.tsx
'use client';

import Header from './component/header';
import Mission from './component/mission';
import Equipe from './component/equipe';
import Valeurs from './component/valeur';
import Histoire from './component/histoire';
import Head from 'next/head';


export default function QuiNousSommes() {
  
  return (
    <div className="bg-gradient-to-b min-h-screen from-white to-gray-50">
      <Head>
        <title>Qui nous sommes | EventQuorum</title>
        <meta name="description" content="Découvrez notre histoire, notre équipe et nos valeurs" />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <Mission />

        <Equipe />

        <Valeurs />

        <Histoire />
        
      </main>

      {/* Appel à l'action */}
      <div className="bg-indigo-900 text-white py-16 mb-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Prêt à travailler avec nous ?</h2>
          <p className="text-lg text-indigo-100 mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <button className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition-colors duration-300">
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
}