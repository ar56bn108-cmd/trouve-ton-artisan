const artisanModel = require("../models/artisanModel");

const getArtisans = async (req, res) => {
  try {
    const artisans = await artisanModel.getAllArtisans();

    res.status(200).json(artisans);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de la récupération des artisans",
    });
  }
};

const getArtisan = async (req, res) => {
  try {
    const artisan = await artisanModel.getArtisanById(req.params.id);

    if (!artisan) {
      return res.status(404).json({
        message: "Artisan introuvable",
      });
    }

    res.status(200).json(artisan);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de la récupération de l'artisan",
    });
  }
};

const search = async (req, res) => {
  try {
    const { nom } = req.query;

    if (!nom || nom.trim() === "") {
      return res.status(400).json({
        message: "Le terme de recherche est obligatoire",
      });
    }

    const artisans = await artisanModel.searchArtisans(nom.trim());

    res.status(200).json(artisans);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de la recherche des artisans",
    });
  }
};

const getArtisansByCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const artisans = await artisanModel.getArtisansByCategory(id);

    res.status(200).json(artisans);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de la récupération des artisans",
    });
  }
};

module.exports = {
  getArtisans,
  getArtisan,
  search,
  getArtisansByCategory,
};
