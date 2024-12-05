import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQPage = () => {
    const faqs = [
        {
            question: "Qu'est-ce que MetaVersa?",
            answer: "MetaVersa est un bot Discord conçu pour fournir des fonctionnalités de modération avancées et une personnalisation complète pour les serveurs Discord.",
        },
        {
            question: "Comment puis-je ajouter MetaVersa à mon serveur?",
            answer: "Vous pouvez ajouter MetaVersa à votre serveur en utilisant le lien d'invitation disponible sur notre site web.",
        },
        {
            question: "Quels types de fonctionnalités offre MetaVersa?",
            answer: "MetaVersa propose des fonctionnalités telles que l'auto-modération, la gestion des rôles, et bien plus encore pour améliorer l'expérience de votre serveur.",
        },
        {
            question: "Y a-t-il un support disponible?",
            answer: "Oui, nous offrons un support complet via notre page de contact et notre serveur Discord.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null); // État pour suivre l'index de la FAQ ouverte

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Ouvre ou ferme la FAQ
    };

    return (
        <main className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen text-white font-sans py-16 px-8">
            <h1 className="text-5xl font-bold text-center text-primary mb-12">FAQ</h1>

            <div className="w-full max-w-6xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="faq-item bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-all duration-300 relative"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Conteneur pour la question */}
                        <div
                            onClick={() => toggleFAQ(index)}
                            className="cursor-pointer flex justify-between items-center mb-6"
                        >
                            <h2 className="text-2xl font-semibold">{faq.question}</h2>
                            <span className="text-gray-400 text-xl">
                                {openIndex === index ? '-' : '+'}
                            </span>
                        </div>

                        {/* Contenu de la réponse avec animation */}
                        {openIndex === index && (
                            <motion.p
                                className="text-gray-300 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {faq.answer}
                            </motion.p>
                        )}

                        {/* Effet de flou et lumière pour la carte */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-700 opacity-40 rounded-xl backdrop-blur-sm pointer-events-none"></div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
};

export default FAQPage;
