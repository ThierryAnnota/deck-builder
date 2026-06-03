const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },
  async getOneCard(id) {
    const query = {
      text : 'SELECT * FROM card WHERE id = $1',
      values: [id]
    };
    const result = await database.query(query);
    return result.rows[0];
  }
};


module.exports = dataMapper;
