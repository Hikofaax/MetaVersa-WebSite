import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheckIcon, ChartBarIcon, CogIcon, UsersIcon, GlobeAltIcon, BellIcon } from '@heroicons/react/24/solid';

const features = [
  { title: 'Auto-modération avancée', description: 'Détecte et supprime automatiquement les messages offensants ou spam.', icon: <ShieldCheckIcon className="h-10 w-10 text-neonBlue" /> },
  { title: 'Analyses et statistiques', description: 'Obtenez des rapports détaillés sur les activités et l’engagement de votre serveur.', icon: <ChartBarIcon className="h-10 w-10 text-neonBlue" /> },
  { title: 'Personnalisation de commandes', description: 'Créez des commandes personnalisées adaptées à votre serveur.', icon: <CogIcon className="h-10 w-10 text-neonBlue" /> },
  { title: 'Système de rôles dynamique', description: 'Gérez les rôles des utilisateurs facilement selon leur activité.', icon: <UsersIcon className="h-10 w-10 text-neonBlue" /> },
  { title: 'Intégration d\'API', description: 'Connectez votre serveur à des services tiers pour des fonctionnalités avancées.', icon: <GlobeAltIcon className="h-10 w-10 text-neonBlue" /> },
  { title: 'Notifications personnalisées', description: 'Recevez des alertes et notifications selon les événements du serveur.', icon: <BellIcon className="h-10 w-10 text-neonBlue" /> },
];

const LandingPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://panel.riverfreez.m1x.ovh:30106/api/testimonials');
        if (!response.ok) throw new Error('Erreur lors du chargement des témoignages');
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur de chargement des témoignages:', error);
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <main className="bg-darkBg text-white font-futuristic overflow-x-hidden">
      {/* Section d'accueil */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center text-center">
        <motion.div
          className="z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold text-neonPurple neon-effect">Bienvenue sur MetaVersa</h1>
          <p className="text-2xl text-neonBlue mt-6">Le meilleur assistant pour la gestion de votre serveur.</p>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black opacity-20 blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-20 px-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-neonPink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fonctionnalités
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-lg transform hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-neonPurple mb-2">{feature.title}</h3>
              <p className="text-lg text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 px-8 bg-black bg-opacity-80">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-neonBlue"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Témoignages
        </motion.h2>
        {loading ? (
          <p className="text-center text-gray-400">Chargement des témoignages...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg backdrop-blur-lg hover:scale-105 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-indigo-200 mb-2">{testimonial.name}</h3>
                <p className="text-gray-300 mb-4">{testimonial.testimonial}</p>
                <div className="flex">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`text-xl ${testimonial.rating > starIndex ? 'text-yellow-400' : 'text-gray-600'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Call-to-Action */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <motion.h2
          className="text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Rejoignez MetaVersa dès aujourd'hui !
        </motion.h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Découvrez un monde de possibilités pour gérer et développer votre communauté.
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          onClick={() => navigate('/notFound')}
        >
          Ajouter le Bot
        </button>
      </section>
    </main>
  );
};

export default LandingPage;
