import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer'; // Assurez-vous d'importer le composant Footer

const SubmitTestimonialPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        testimonial: '',
        rating: 0, // Propriété pour la note
    });
    const [notification, setNotification] = useState(null);
    const [loading, setLoading] = useState(false); // État pour gérer le chargement

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, rating }); // Mettez à jour la note
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Indiquer que la soumission est en cours

        const response = await fetch('http://panel.riverfreez.m1x.ovh:30106/api/testimonials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        setLoading(false); // Fin de la soumission

        if (response.ok) {
            setNotification({ type: 'success', message: 'Témoignage ajouté avec succès !' });
            setFormData({ name: '', testimonial: '', rating: 0 }); // Réinitialiser le formulaire
        } else {
            const errorResponse = await response.json();
            setNotification({ type: 'error', message: errorResponse.message || 'Erreur lors de l\'ajout du témoignage.' });
        }
    };

    return (
        <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex flex-col justify-between pt-40">
            <div className="flex flex-col items-center pt-10">
                <motion.h1
                    className="text-4xl font-extrabold text-white mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Soumettre un Avis
                </motion.h1>

                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-8 w-full max-w-lg mt-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Champ Nom */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Votre Nom"
                            className="bg-transparent appearance-none border-b border-gray-600 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none"
                        />
                    </div>

                    {/* Champ Témoignage */}
                    <div className="mb-4">
                        <textarea
                            name="testimonial"
                            value={formData.testimonial}
                            onChange={handleChange}
                            required
                            placeholder="Votre Témoignage"
                            className="bg-transparent appearance-none border-b border-gray-600 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Étoiles pour la note */}
                    <div className="mb-4 flex items-center">
                        <span className="text-white mr-2">Évaluation :</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 cursor-pointer ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                onClick={() => handleRatingChange(star)}
                            >
                                <path d="M10 15l-3.5 2.5 1.5-4.5L4 8.5h4.5L10 4l1.5 4.5H16l-3.5 4L10 15z" />
                            </svg>
                        ))}
                    </div>

                    {/* Bouton d'envoi */}
                    <motion.button
                        type="submit"
                        className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading} // Désactiver le bouton lors du chargement
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {loading ? 'Envoi...' : 'Soumettre'}
                    </motion.button>
                </motion.form>

                {/* Notification */}
                {notification && (
                    <motion.div
                        className={`mt-4 p-4 rounded-md text-white ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        {notification.message}
                    </motion.div>
                )}
            </div>
            
            <Footer />
        </main>
    );
};

export default SubmitTestimonialPage;
