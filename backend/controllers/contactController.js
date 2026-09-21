const contactModel = require("../models/contactModel");

const createContact = async (req, res) => {
  try {
    const { artisan_id, nom, email, objet, message } = req.body;

    if (!artisan_id || !nom || !email || !objet || !message) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Adresse email invalide",
      });
    }

    if (nom.trim().length < 2 || nom.trim().length > 100) {
      return res.status(400).json({
        message: "Le nom doit contenir entre 2 et 100 caractères",
      });
    }

    if (objet.trim().length < 2 || objet.trim().length > 255) {
      return res.status(400).json({
        message: "L'objet doit contenir entre 2 et 255 caractères",
      });
    }

    if (message.trim().length < 10 || message.trim().length > 2000) {
      return res.status(400).json({
        message: "Le message doit contenir entre 10 et 2000 caractères",
      });
    }

    const contactId = await contactModel.createContact(
      artisan_id,
      nom.trim(),
      email.trim(),
      objet.trim(),
      message.trim(),
    );

    res.status(201).json({
      message: "Votre message a bien été envoyé",
      id: contactId,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de l'envoi du message",
    });
  }
};

module.exports = {
  createContact,
};
