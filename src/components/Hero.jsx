// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen text-center bg-darkBg">
            <motion.div 
                className="absolute w-full h-full bg-gradient-to-b from-transparent to-darkBg" 
                animate={{ opacity: [0.8, 1, 0.8] }} 
                transition={{ duration: 3, repeat: Infinity }} 
            />
            <motion.h1 
                className="text-5xl font-bold text-neonBlue drop-shadow-md"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                Bienvenue sur MetaVersa
            </motion.h1>
            <motion.p 
                className="max-w-xl mt-6 text-xl text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
            >
                Le bot qui vous plonge dans une expérience immersive pour gérer votre serveur Discord dans le métavers.
            </motion.p>
            <div className="mt-8 space-x-4">
                <motion.button
                    className="px-6 py-3 text-lg font-semibold text-darkBg bg-neonPurple rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-neonPurple"
                    whileHover={{ scale: 1.1 }}
                >
                    Ajouter MetaVersa
                </motion.button>
                <motion.button
                    className="px-6 py-3 text-lg font-semibold text-neonBlue bg-transparent border border-neonBlue rounded-full hover:bg-neonBlue hover:text-darkBg transition-colors shadow-lg"
                    whileHover={{ scale: 1.1 }}
                >
                    Accéder au Dashboard
                </motion.button>
            </div>
        </section>
    );
}

export default Hero;
