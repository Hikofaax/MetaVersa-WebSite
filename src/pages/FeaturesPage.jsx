import React from 'react';
import { ShieldCheckIcon, ChartBarIcon, CogIcon, UsersIcon, GlobeAltIcon, BellIcon } from '@heroicons/react/24/solid';

const features = [
    { 
        title: 'Auto-modération avancée', 
        description: 'Détecte et supprime automatiquement les messages offensants ou spam.', 
        icon: <ShieldCheckIcon className="h-8 w-8 text-indigo-400 mb-2" /> 
    },
    { 
        title: 'Analyses et statistiques', 
        description: 'Obtenez des rapports détaillés sur les activités et l’engagement de votre serveur.', 
        icon: <ChartBarIcon className="h-8 w-8 text-indigo-400 mb-2" /> 
    },
    { 
        title: 'Personnalisation de commandes', 
        description: 'Créez des commandes personnalisées adaptées à votre serveur.', 
        icon: <CogIcon className="h-8 w-8 text-indigo-400 mb-2" /> 
    },
    { 
        title: 'Système de rôles dynamique', 
        description: 'Gérez les rôles des utilisateurs facilement selon leur activité.', 
        icon: <UsersIcon className="h-8 w-8 text-indigo-400 mb-2" /> 
    },
    { 
        title: 'Intégration d\'API', 
        description: 'Connectez votre serveur à des services tiers pour des fonctionnalités avancées.', 
        icon: <GlobeAltIcon className="h-8 w-8 text-indigo-400 mb-2" /> 
    },
    { 
        title: 'Notifications personnalisées', 
        description: 'Recevez des alertes et notifications selon les événements du serveur.', 
        icon: <BellIcon className="h-8 w-8 text-indigo-400 mb-2" /> 
    },
];

const FeaturesPage = () => {
    return (
        <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex flex-col">
            <section className="text-center py-10 px-6 text-white flex-grow">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6">Fonctionnalités</h1>
                <div className="feature-list grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card bg-indigo-800 bg-opacity-70 backdrop-blur-md p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-indigo-100">{feature.title}</h3>
                            <p className="text-lg text-indigo-200 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default FeaturesPage;
