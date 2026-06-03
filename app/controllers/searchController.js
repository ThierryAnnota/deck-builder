const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },
  searchElement: async (req, res) => {
    const query = req.query.element;
    console.log(query);
    const cards = await dataMapper.getCardsByElement(query);
    res.render('cardList', {
      cards, 
      title : `Liste des cartes de l'élément : ${query.toUpperCase() !== 'NULL' ? query.toUpperCase() : 'Aucun'}`});
  }

};

module.exports = searchController;