const express = require("express");
const router = express.Router();

const artisanController = require("../controllers/artisanController");

router.get("/", artisanController.getArtisans);
router.get("/recherche", artisanController.search);
router.get("/categorie/:id", artisanController.getArtisansByCategory);
router.get("/:id", artisanController.getArtisan);

module.exports = router;
