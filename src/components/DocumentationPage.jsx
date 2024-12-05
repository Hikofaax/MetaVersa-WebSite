import React from 'react';
import { motion } from 'framer-motion';

const DocumentationPage = () => {
    return (
        <main className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen text-white font-sans py-16 px-8">
            <motion.h1
                className="text-5xl font-extrabold text-center text-primary mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Documentation de MetaVersa
            </motion.h1>

            <div className="max-w-6xl mx-auto">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                    <p className="text-lg leading-relaxed">
                        MetaVersa est votre bot Discord ultime, conçu pour offrir des fonctionnalités de modération avancées
                        et une personnalisation complète de votre serveur Discord. Cette documentation vous guidera à travers
                        l'installation, l'utilisation et les fonctionnalités de MetaVersa.
                    </p>
                </section>

                {/* Installation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Installation</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Visitez notre site web.</li>
                        <li>Cliquez sur le bouton "Ajouter MetaVersa à votre serveur".</li>
                        <li>Suivez les instructions à l'écran pour autoriser le bot sur votre serveur.</li>
                    </ol>
                </section>

                {/* Utilisation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Utilisation</h2>
                    <p className="text-lg leading-relaxed">
                        Une fois que MetaVersa est ajouté à votre serveur, vous pouvez commencer à l'utiliser pour modérer
                        et personnaliser votre serveur. Voici quelques commandes de base :
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>/help</strong> - Affiche la liste des commandes disponibles.</li>
                        <li><strong>/settings</strong> - Configurez les paramètres de modération.</li>
                        <li><strong>/customize</strong> - Personnalisez les réponses du bot.</li>
                    </ul>
                </section>

                {/* Fonctionnalités */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Fonctionnalités</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        MetaVersa offre une variété de fonctionnalités pour améliorer votre expérience sur Discord :
                    </p>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'Auto-modération',
                                description: 'Détecte et supprime automatiquement les messages offensants.',
                            },
                            {
                                title: 'Gestion des rôles',
                                description: 'Attribuez et gérez les rôles des utilisateurs facilement.',
                            },
                            {
                                title: 'Statistiques',
                                description: 'Obtenez des statistiques détaillées sur votre serveur.',
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 bg-opacity-80 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 relative"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-xl font-bold">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>

                                {/* Effet de flou et lumière pour la carte */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-700 opacity-40 rounded-lg backdrop-blur-sm pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Support */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Support</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Si vous avez des questions ou besoin d'assistance, n'hésitez pas à nous contacter via notre page de
                        <a href="/contact" className="text-indigo-400 underline"> contact</a>.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default DocumentationPage;
