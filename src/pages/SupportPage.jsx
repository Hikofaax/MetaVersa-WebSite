import React from 'react';
import { motion } from 'framer-motion';

const SupportPage = () => {
    return (
        <main className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen text-white font-sans py-16 px-8 pb-40">
            <h1 className="text-5xl font-bold text-center text-primary mb-12">Support</h1>

            <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Si vous avez des questions ou besoin d'aide, vous êtes au bon endroit. Voici quelques ressources qui
                pourraient vous être utiles.
            </motion.p>

            <div className="w-full max-w-6xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {[
                    {
                        title: 'Documentation',
                        description: 'Consultez notre documentation complète pour apprendre à utiliser toutes les fonctionnalités.',
                        link: '/documentation',
                        linkText: 'Lire la documentation'
                    },
                    {
                        title: 'FAQ',
                        description: 'Trouvez les réponses aux questions les plus fréquentes sur notre bot et ses fonctionnalités.',
                        link: '/faq',
                        linkText: 'Voir la FAQ'
                    },
                    {
                        title: 'Contactez-nous',
                        description: 'Si vous avez besoin d\'une assistance directe, n\'hésitez pas à nous contacter.',
                        link: '/contact',
                        linkText: 'Contacter le support'
                    },
                    {
                        title: 'Formulaire de Témoignages',
                        description: 'Partagez votre expérience avec MetaVersa en remplissant notre formulaire de témoignages.',
                        link: '/submit-testimonial',
                        linkText: 'Lire les témoignages'
                    },
                    {
                        title: 'Ressources supplémentaires',
                        description: 'Accédez à des ressources supplémentaires pour vous aider à tirer le meilleur parti de MetaVersa.',
                        link: '/NotFound',
                        linkText: 'Voir les ressources'
                    }
                ].map((resource, index) => (
                    <motion.div
                        key={index}
                        className="support-card bg-gray-800 bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-xl relative"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-100">{resource.title}</h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">{resource.description}</p>
                        <a href={resource.link} className="text-green-400 hover:text-green-500 underline transition duration-300">{resource.linkText}</a>

                        {/* Effet de flou et lumière pour la carte */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-700 opacity-40 rounded-lg backdrop-blur-sm pointer-events-none"></div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
};

export default SupportPage;
