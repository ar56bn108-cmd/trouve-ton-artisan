CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);

CREATE TABLE localisations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ville VARCHAR(100) NOT NULL,
    code_postal VARCHAR(10) NOT NULL
);

CREATE TABLE artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(150) NOT NULL,
    description TEXT,
    note DECIMAL(2,1),
    email VARCHAR(255),
    telephone VARCHAR(20),
    site_web VARCHAR(255),
    image VARCHAR(255),
    categorie_id INT NOT NULL,
    localisation_id INT NOT NULL,

    CONSTRAINT fk_artisan_categorie
        FOREIGN KEY (categorie_id)
        REFERENCES categories(id),

    CONSTRAINT fk_artisan_localisation
        FOREIGN KEY (localisation_id)
        REFERENCES localisations(id)
);

CREATE TABLE specialites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(150) NOT NULL,
    artisan_id INT NOT NULL,

    CONSTRAINT fk_specialite_artisan
        FOREIGN KEY (artisan_id)
        REFERENCES artisans(id)
        ON DELETE CASCADE
);

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artisan_id INT NOT NULL,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    objet VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date_envoi DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_contact_artisan
        FOREIGN KEY (artisan_id)
        REFERENCES artisans(id)
        ON DELETE CASCADE
);