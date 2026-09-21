const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const artisanRoutes = require("./routes/artisanRoutes");
const categorieRoutes = require("./routes/categorieRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "https://trouve-ton-artisan-production-e385.up.railway.app",
  }),
);

app.use(express.json({ limit: "10kb" }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    message: "Trop de requêtes. Réessayez plus tard.",
  },
});

app.use("/api", apiLimiter);

app.get("/", (req, res) => {
  res.json({
    message: "API Trouve ton artisan fonctionne !",
  });
});

app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categorieRoutes);
app.use("/api/contacts", contactRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route API introuvable",
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Une erreur interne est survenue",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
