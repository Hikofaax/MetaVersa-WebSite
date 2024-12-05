// src/components/NotFound.jsx
import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1 
                    className="text-9xl font-bold text-red-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    404
                </motion.h1>
                <motion.h2 
                    className="text-2xl font-semibold mt-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Oups ! La page que vous recherchez n'existe pas.
                </motion.h2>
                <motion.p 
                    className="mt-4 text-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    Essayez de revenir à la page d'accueil ou utilisez le menu pour naviguer.
                </motion.p>
                <motion.a 
                    href="/" 
                    className="mt-6 inline-block px-6 py-2 text-lg text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    Retour à l'accueil
                </motion.a>
            </motion.div>
        </div>
    );
};

export default NotFound;