import React, { useState, useEffect } from 'react';

const TestimonialsPage = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://panel.riverfreez.m1x.ovh:30106/api/testimonials');
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des témoignages");
                }
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error("Erreur de chargement des témoignages:", error);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex flex-col items-center py-10">
            <h1 className="text-4xl font-extrabold text-white mb-6">Témoignages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-gray-800 bg-opacity-80 rounded-lg p-6 shadow-lg">
                        <h3 className="text-xl font-semibold text-indigo-200 mb-2">{testimonial.name}</h3>
                        <p className="text-gray-300 mb-4">{testimonial.testimonial}</p>
                        {/* Affichage des étoiles */}
                        <div className="flex">
                            {[...Array(5)].map((_, starIndex) => (
                                <span
                                    key={starIndex}
                                    className={`text-xl ${testimonial.rating > starIndex ? 'text-yellow-400' : 'text-gray-600'}`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default TestimonialsPage;
