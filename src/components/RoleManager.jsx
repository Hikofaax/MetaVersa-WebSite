import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal"; // Assurez-vous d'installer react-modal

const RoleManager = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Récupérer les rôles actuels et les permissions
  const fetchRolesAndPermissions = async () => {
    try {
      const rolesResponse = await axios.get("http://panel.riverfreez.m1x.ovh:30106/api/roles");
      const permissionsResponse = await axios.get("http://panel.riverfreez.m1x.ovh:30106/api/permissions");
      setRoles(rolesResponse.data);
      setPermissions(permissionsResponse.data);
      setLoading(false);
    } catch (err) {
      setError("Erreur lors du chargement des données");
      setLoading(false);
    }
  };

  const addRole = async () => {
    if (newRole.trim()) {
      try {
        const response = await axios.post("http://panel.riverfreez.m1x.ovh:30106/api/roles", {
          name: newRole,
          permissions: selectedPermissions
        });
        setRoles([...roles, response.data]);
        setNewRole("");
        setSelectedPermissions([]);
        closeModal();
      } catch (err) {
        setError("Erreur lors de l'ajout du rôle");
      }
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const togglePermission = (permissionId) => {
    if (selectedPermissions.includes(permissionId)) {
      setSelectedPermissions(selectedPermissions.filter(id => id !== permissionId));
    } else {
      setSelectedPermissions([...selectedPermissions, permissionId]);
    }
  };

  useEffect(() => {
    fetchRolesAndPermissions();
  }, []);

  if (loading) return <div className="text-center text-white">Chargement des rôles...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Gestion des Rôles</h2>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">Ajouter un Rôle</button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <h2 className="text-xl font-bold mb-4">Créer un Nouveau Rôle</h2>
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Nom du Rôle"
          className="p-2 rounded-lg text-black mb-2"
        />
        <h3 className="text-lg font-semibold">Permissions :</h3>
        <div className="mb-4">
          {permissions.map(permission => (
            <div key={permission.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedPermissions.includes(permission.id)}
                  onChange={() => togglePermission(permission.id)}
                />
                {permission.name}
              </label>
            </div>
          ))}
        </div>
        <button onClick={addRole} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Ajouter le Rôle</button>
        <button onClick={closeModal} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2">Annuler</button>
      </Modal>

      <div className="mt-6">
        <h3 className="text-2xl font-bold">Rôles Existants :</h3>
        <ul>
          {roles.map(role => (
            <li key={role.id} className="mt-2">
              <span className="font-semibold">{role.name}</span>
              <span className="text-gray-400"> - Permissions: {role.permissions.join(", ")}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoleManager;
