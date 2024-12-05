// src/components/Features.js
import React from 'react';
import { motion } from 'framer-motion';

function Features() {
    const features = [
        { title: "Auto-Moderation", description: "Modération automatique pour maintenir le respect dans le chat." },
        { title: "Statistiques avancées", description: "Suivez les statistiques et l'engagement en temps réel." },
        { title: "Personnalisation", description: "Réglages fins pour une expérience sur mesure." },
    ];

    return (
        <section className="py-20 bg-darkBg text-center text-white">
            <h2 className="text-4xl font-semibold text-neonBlue">Fonctionnalités</h2>
            <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-neonPurple transition-shadow duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-neonPurple">{feature.title}</h3>
                        <p className="mt-2 text-gray-300">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Features;
