import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Vous n'avez plus besoin de "navigate" ici
import FAQManager from "./FAQManager";
import TestimonialManager from "./TestimonialManager";
import Modal from "react-modal"; // Assurez-vous d'avoir installé react-modal
import axios from "axios";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
        try {
            const response = await axios.get('http://panel.riverfreez.m1x.ovh:30106/api/admin', {
                withCredentials: true // Permet d'envoyer les cookies de session
            });

            if (response.status !== 200) {
                window.location.href = 'http://panel.riverfreez.m1x.ovh:30106/api/auth/discord'; // Redirige vers la page d'authentification
            }
        } catch (error) {
            console.error("Erreur d'authentification", error);
            setError("Vous devez être authentifié pour accéder à cette page.");
            setTimeout(() => {
                window.location.href = 'http://panel.riverfreez.m1x.ovh:30106/api/auth/discord';
            }, 2000);
        }
    };

    checkAuthentication();
}, []);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Dashboard Administrateur</h1>

      {/* Onglets de navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("faq")}
          className={`py-2 px-4 font-semibold rounded ${
            activeTab === "faq" ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          FAQ Manager
        </button>
        <button
          onClick={() => setActiveTab("testimonials")}
          className={`py-2 px-4 font-semibold rounded ${
            activeTab === "testimonials" ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Testimonial Manager
        </button>
      </div>

      {/* Contenu de l'onglet actif */}
      <div className="mt-6">
        {activeTab === null && (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Bienvenue sur le Dashboard Administrateur</h2>
            <p className="mt-2">Sélectionnez une section pour commencer la gestion du site.</p>
          </div>
        )}

        {activeTab === "faq" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Gestion des FAQ</h2>
            <FAQManager />
          </div>
        )}

        {activeTab === "testimonials" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Gestion des Témoignages</h2>
            <TestimonialManager />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
