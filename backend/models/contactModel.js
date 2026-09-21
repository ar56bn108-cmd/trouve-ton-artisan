const db = require("../config/database");

const createContact = async (artisanId, nom, email, objet, message) => {
  const [result] = await db.query(
    `
        INSERT INTO contacts (
            artisan_id,
            nom,
            email,
            objet,
            message
        )
        VALUES (?, ?, ?, ?, ?)
        `,
    [artisanId, nom, email, objet, message],
  );

  return result.insertId;
};

module.exports = {
  createContact,
};
