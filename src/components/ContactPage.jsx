import React, { useState } from 'react';
import { AtSymbolIcon, UserCircleIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [notification, setNotification] = useState(null); // État pour les notifications

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const webhookURL = 'https://discord.com/api/webhooks/1302784872632422451/4zo9vemAExP2QBT4adaKdVMTFeg3axCb0K4Ut2uunKVG7cAJj-Q5dbfihpTnFsOQrT93'; // Remplacez par votre webhook Discord

        const embed = {
            content: null,
            embeds: [
                {
                    title: 'Nouveau message de contact',
                    color: 3447003,
                    fields: [
                        {
                            name: 'Nom',
                            value: formData.name || 'Non spécifié',
                            inline: true,
                        },
                        {
                            name: 'Email',
                            value: formData.email || 'Non spécifié',
                            inline: true,
                        },
                        {
                            name: 'Message',
                            value: formData.message || 'Aucun message',
                        },
                    ],
                },
            ],
        };

        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(embed),
        });

        if (response.ok) {
            setNotification({ type: 'success', message: 'Message envoyé avec succès !' });
            setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
        } else {
            setNotification({ type: 'error', message: 'Erreur lors de l\'envoi du message.' });
        }
    };

    return (
        <main className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen flex flex-col items-center justify-center py-16 px-8">
            <motion.h1
                className="text-4xl font-extrabold text-white mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contactez-nous
            </motion.h1>

            <form onSubmit={handleSubmit} className="bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-8 w-full max-w-lg">
                {/* Champ Nom */}
                <div className="mb-4 flex items-center">
                    <UserCircleIcon className="h-6 w-6 text-gray-400 mr-2" />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre Nom"
                        className="bg-transparent appearance-none border-b border-gray-600 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-indigo-500"
                    />
                </div>
                
                {/* Champ Email */}
                <div className="mb-4 flex items-center">
                    <AtSymbolIcon className="h-6 w-6 text-gray-400 mr-2" />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Votre Email"
                        className="bg-transparent appearance-none border-b border-gray-600 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-indigo-500"
                    />
                </div>

                {/* Champ Message */}
                <div className="mb-4 flex items-start">
                    <ChatBubbleLeftIcon className="h-6 w-6 text-gray-400 mr-2" />
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Votre Message"
                        className="bg-transparent appearance-none border-b border-gray-600 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-indigo-500"
                        rows="4"
                    ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <motion.button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Envoyer
                </motion.button>
            </form>

            {/* Notification */}
            {notification && (
                <motion.div
                    className={`mt-4 p-4 rounded-md text-white ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {notification.message}
                </motion.div>
            )}
        </main>
    );
};

export default ContactPage;
