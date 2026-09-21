const categorieModel = require("../models/categorieModel");

const getCategories = async (req, res) => {
  try {
    const categories = await categorieModel.getAllCategories();

    res.status(200).json(categories);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de la récupération des catégories",
    });
  }
};

module.exports = {
  getCategories,
};
