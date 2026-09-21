USE trouve_ton_artisan;

INSERT INTO categories (nom) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

INSERT INTO localisations (ville, code_postal) VALUES
('Lyon', '69001'),
('Villeurbanne', '69100'),
('Vénissieux', '69200'),
('Saint-Priest', '69800'),
('Bron', '69500');

INSERT INTO artisans
(nom, description, note, email, telephone, site_web, image, categorie_id, localisation_id)
VALUES
(
    'Boulangerie du Centre',
    'Boulangerie artisanale spécialisée dans les pains traditionnels, viennoiseries et pâtisseries maison.',
    4.5,
    'contact@boulangerieducentre.fr',
    '0478000001',
    'https://www.boulangerieducentre.fr',
    'boulangerie.jpg',
    1,
    1
),
(
    'Maison Gourmande',
    'Artisan pâtissier proposant des créations sucrées réalisées sur place.',
    4.8,
    'contact@maisongourmande.fr',
    '0478000002',
    'https://www.maisongourmande.fr',
    'patisserie.jpg',
    1,
    2
),
(
    'Bâti Rhône Services',
    'Entreprise spécialisée dans les travaux de rénovation et de maçonnerie.',
    4.2,
    'contact@batirhone.fr',
    '0478000003',
    'https://www.batirhone.fr',
    'batiment.jpg',
    2,
    3
),
(
    'Atelier Bois Lyonnais',
    'Fabrication artisanale de meubles et aménagements intérieurs sur mesure.',
    4.9,
    'contact@atelierboislyonnais.fr',
    '0478000004',
    'https://www.atelierboislyonnais.fr',
    'bois.jpg',
    3,
    4
),
(
    'Élec Pro Rhône',
    'Artisan électricien pour installations, dépannage et rénovation électrique.',
    4.6,
    'contact@elecprorhone.fr',
    '0478000005',
    'https://www.elecprorhone.fr',
    'electricien.jpg',
    4,
    5
);

INSERT INTO specialites (nom, artisan_id) VALUES
('Boulangerie artisanale', 1),
('Pâtisserie', 2),
('Maçonnerie', 3),
('Menuiserie', 4),
('Électricité', 5);