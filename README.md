# Trouve ton artisan !

## Présentation

Trouve ton artisan ! est une plateforme web permettant de rechercher des artisans de la région Auvergne-Rhône-Alpes.

L'utilisateur peut consulter les artisans, rechercher un artisan, filtrer les artisans par catégorie et consulter leur fiche détaillée.

Il peut également envoyer un message directement à un artisan grâce au formulaire de contact.

## Fonctionnalités

- Affichage des artisans
- Recherche d'un artisan
- Filtrage par catégorie
- Consultation de la fiche d'un artisan
- Affichage de la note, spécialité et localisation
- Formulaire de contact
- Page 404
- Interface responsive
- Validation des données
- Protection des requêtes SQL

## Technologies utilisées

### Frontend

- ReactJS
- Vite
- Bootstrap
- CSS

### Backend

- Node.js
- Express.js
- MySQL / MariaDB

### Outils

- Git
- GitHub
- Railway
- MySQL Workbench
- Draw.io
- Visual Studio Code

## Structure du projet

```text
trouve-ton-artisan/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
│
├── database/
│   ├── creation.sql
│   ├── alimentation.sql
│   ├── MCD_Trouve_ton_artisan.drawio
│   ├── MCD_Trouve_ton_artisan.png
│   ├── MLD_Trouve_ton_artisan.drawio
│   └── MLD_Trouve_ton_artisan.png
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

https://trouve-ton-artisan-production-e385.up.railway.app/
