// Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <motion.header 
            className="bg-darkBg p-4 shadow-md h-20 backdrop-blur-lg border-b border-neonPink"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: 9999 }} // Ajout de la propriété z-index
        >
            <nav className="container mx-auto flex justify-between items-center h-full">
                <div className="flex items-center h-full">
                    <motion.div 
                        className="h-full flex items-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img src={logo} alt="Logo" className="h-16 w-auto" />
                    </motion.div>
                    <h1 className="text-neonBlue text-3xl font-bold ml-4">MetaVersa</h1>
                </div>
                <ul className="flex space-x-8">
                    <li>
                        <a href="/" className="text-neonPurple hover:text-neonPink transition duration-200">Accueil</a>
                    </li>
                    <li>
                        <a href="/#fonctionnalites" className="text-neonPurple hover:text-neonPink transition duration-200">Fonctionnalités</a>
                    </li>
                    <li>
                        <a href="/#temoignages" className="text-neonPurple hover:text-neonPink transition duration-200">Témoignages</a>
                    </li>
                    <li>
                        <a href="/support" className="text-neonPurple hover:text-neonPink transition duration-200">Support</a>
                    </li>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;