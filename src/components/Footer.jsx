import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="bg-darkBg p-4 text-center text-gray-400 fixed bottom-0 left-0 right-0 border-t border-neonPink"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: 9999 }} // Ajout de la propriété z-index
        >
            <p>&copy; {new Date().getFullYear()} MetaVersa. Tous droits réservés.</p>
        </motion.footer>
    );
};

export default Footer;
