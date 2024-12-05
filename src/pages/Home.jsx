import React, { useState, useEffect } from 'react';

const Home = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isBlinking, setIsBlinking] = useState(true);
    const textLine = 'Bienvenue sur MetaVersa';

    useEffect(() => {
        if (currentIndex < textLine.length) {
            const intervalId = setInterval(() => {
                setDisplayedText(prev => prev + textLine[currentIndex]);
                setCurrentIndex(prev => prev + 1);
                setIsBlinking(false);
            }, 100);

            return () => clearInterval(intervalId);
        } else {
            setIsBlinking(true);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (currentIndex === textLine.length) {
            const blinkInterval = setInterval(() => {
                setIsBlinking(prev => !prev);
            }, 500);

            return () => clearInterval(blinkInterval);
        }
    }, [currentIndex]);

    const features = [
        { title: 'Auto-modération avancée', description: 'Détecte et supprime automatiquement les messages offensants ou spam.' },
        { title: 'Analyses et statistiques', description: 'Obtenez des rapports détaillés sur les activités et l’engagement de votre serveur.' },
        { title: 'Personnalisation de commandes', description: 'Créez des commandes personnalisées adaptées à votre serveur.' },
    ];

    return (
        <main className="bg-darkBg min-h-screen flex flex-col text-neonBlue font-futuristic">
            <section className="intro text-center py-16 px-6 flex-grow">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-4 animate-pulseNeon">
                    Bienvenue sur MetaVersa
                </h1>
                <div className="text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed text-neonPurple">
                    <span className="text-neonBlue">$ </span>
                    <span>{displayedText}</span>
                    {isBlinking && <span className="text-neonPink">|</span>}
                </div>
            </section>

            {/* Zone d'images */}
            <section className="images-section py-12 flex justify-center items-center">
                <div className="w-full max-w-5xl flex justify-around">
                    <div className="w-1/3 h-48 bg-black bg-opacity-50 rounded-lg shadow-lg animate-bounceIn"></div>
                    <div className="w-1/3 h-48 bg-black bg-opacity-50 rounded-lg shadow-lg animate-bounceIn"></div>
                </div>
            </section>

            {/* Section des Fonctionnalités */}
            <section className="features bg-lightBg py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-neonPink animate-fadeIn">Fonctionnalités</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item p-8 bg-darkBg bg-opacity-75 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105">
                                <h3 className="text-2xl font-semibold mb-4 text-neonPurple">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
