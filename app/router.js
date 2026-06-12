const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const cardController = require('./controllers/cardController');
const deckController = require('./controllers/deckController');


router.get('/', mainController.homePage);
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchElement);
router.get('/card/:id', cardController.card);
router.get('/deck/add/:id', deckController.addCard);
router.get('/deck', deckController.deckPage);
router.get('/deck/delete/:id', deckController.deleteCard);


module.exports = router;