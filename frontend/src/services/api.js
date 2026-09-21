const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const getArtisans = async () => {
  const response = await fetch(`${API_URL}/artisans`);

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des artisans");
  }

  return response.json();
};

export const getArtisanById = async (id) => {
  const response = await fetch(`${API_URL}/artisans/${id}`);

  if (!response.ok) {
    throw new Error("Artisan introuvable");
  }

  return response.json();
};

export const searchArtisans = async (search) => {
  const response = await fetch(
    `${API_URL}/artisans/recherche?nom=${encodeURIComponent(search)}`,
  );

  if (!response.ok) {
    throw new Error("Erreur lors de la recherche");
  }

  return response.json();
};

export const getArtisansByCategory = async (categoryId) => {
  const response = await fetch(`${API_URL}/artisans/categorie/${categoryId}`);

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des artisans de la catégorie");
  }

  return response.json();
};

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des catégories");
  }

  return response.json();
};

export const createContact = async (contact) => {
  const response = await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de l'envoi du message");
  }

  return data;
};
