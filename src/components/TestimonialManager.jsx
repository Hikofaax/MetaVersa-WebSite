import React, { useEffect, useState } from "react";
import axios from "axios";

const TestimonialManager = () => {
  const [testimonials, setTestimonials] = useState([]); // État pour stocker les témoignages
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Fonction pour récupérer les témoignages depuis l'API
  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("http://panel.riverfreez.m1x.ovh:30106/api/testimonials");
      setTestimonials(response.data);
      setLoading(false);
    } catch (err) {
      setError("Erreur lors du chargement des témoignages");
      setLoading(false);
    }
  };

  // Fonction pour supprimer un témoignage
  const deleteTestimonial = async (id) => {
    // Demande de confirmation avant de supprimer le témoignage
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce témoignage ?")) {
      try {
        // Envoie la requête de suppression
        await axios.delete(`http://panel.riverfreez.m1x.ovh:30106/api/testimonials/${id}`);
        // Met à jour l'état pour supprimer le témoignage de l'affichage
        setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));
      } catch (err) {
        if (err.response) {
          // Vérifie si une réponse a été reçue et si le code d'état est 403
          if (err.response.status === 403) {
            setError("Vous n'avez pas les autorisations nécessaires pour supprimer ce témoignage.");
          } else {
            setError("Erreur lors de la suppression du témoignage");
          }
        } else {
          setError("Erreur lors de la suppression du témoignage");
        }
      }
    }
  };

  // Charger les témoignages au montage du composant
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Affichage pendant le chargement des témoignages
  if (loading) return <div className="text-center text-white">Chargement des témoignages...</div>;

  // Affichage en cas d'erreur
  if (error) return <div className="text-center text-red-500">{error}</div>;

  // Affichage des témoignages
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Gestion des Témoignages</h2>
      {testimonials.length === 0 ? (
        <p className="text-center text-gray-400">Aucun témoignage pour l'instant.</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Nom</th>
              <th className="py-2">Message</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr key={testimonial.id} className="border-t border-gray-700">
                <td className="py-2 px-4">{testimonial.name}</td>
                <td className="py-2 px-4">{testimonial.message}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => deleteTestimonial(testimonial.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TestimonialManager;
