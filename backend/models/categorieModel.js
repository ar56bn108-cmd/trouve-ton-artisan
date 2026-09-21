const db = require("../config/database");

const getAllCategories = async () => {
  const [rows] = await db.query(`
        SELECT id, nom
        FROM categories
        ORDER BY nom ASC
    `);

  return rows;
};

module.exports = {
  getAllCategories,
};
