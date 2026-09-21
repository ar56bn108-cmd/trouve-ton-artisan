const db = require("../config/database");

const getAllArtisans = async () => {
  const [rows] = await db.query(`
        SELECT
            a.id,
            a.nom,
            a.description,
            a.note,
            a.email,
            a.telephone,
            a.site_web,
            a.image,
            c.nom AS categorie,
            s.nom AS specialite,
            l.ville,
            l.code_postal
        FROM artisans a
        INNER JOIN categories c
            ON a.categorie_id = c.id
        LEFT JOIN specialites s
            ON a.id = s.artisan_id
        INNER JOIN localisations l
            ON a.localisation_id = l.id
        ORDER BY a.nom ASC
    `);

  return rows;
};

const getArtisanById = async (id) => {
  const [rows] = await db.query(
    `
        SELECT
            a.id,
            a.nom,
            a.description,
            a.note,
            a.email,
            a.telephone,
            a.site_web,
            a.image,
            c.nom AS categorie,
            s.nom AS specialite,
            l.ville,
            l.code_postal
        FROM artisans a
        INNER JOIN categories c
            ON a.categorie_id = c.id
        LEFT JOIN specialites s
            ON a.id = s.artisan_id
        INNER JOIN localisations l
            ON a.localisation_id = l.id
        WHERE a.id = ?
    `,
    [id],
  );

  return rows[0];
};

const searchArtisans = async (search) => {
  const [rows] = await db.query(
    `
        SELECT
            a.id,
            a.nom,
            a.description,
            a.note,
            a.email,
            a.telephone,
            a.site_web,
            a.image,
            c.nom AS categorie,
            s.nom AS specialite,
            l.ville,
            l.code_postal
        FROM artisans a
        INNER JOIN categories c
            ON a.categorie_id = c.id
        LEFT JOIN specialites s
            ON a.id = s.artisan_id
        INNER JOIN localisations l
            ON a.localisation_id = l.id
        WHERE
            a.nom LIKE ?
            OR c.nom LIKE ?
            OR s.nom LIKE ?
            OR l.ville LIKE ?
        ORDER BY a.nom ASC
    `,
    [`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`],
  );

  return rows;
};

const getArtisansByCategory = async (categoryId) => {
  const [rows] = await db.query(
    `
        SELECT
            a.id,
            a.nom,
            a.description,
            a.note,
            a.email,
            a.telephone,
            a.site_web,
            a.image,
            c.nom AS categorie,
            s.nom AS specialite,
            l.ville,
            l.code_postal
        FROM artisans a
        INNER JOIN categories c
            ON a.categorie_id = c.id
        LEFT JOIN specialites s
            ON a.id = s.artisan_id
        INNER JOIN localisations l
            ON a.localisation_id = l.id
        WHERE a.categorie_id = ?
        ORDER BY a.nom ASC
        `,
    [categoryId],
  );

  return rows;
};

module.exports = {
  getAllArtisans,
  getArtisanById,
  searchArtisans,
  getArtisansByCategory,
};
