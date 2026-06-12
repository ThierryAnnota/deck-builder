const dataMapper = require("../dataMapper");

const deckController = {
    addCard : async (req, res) => {
        try {
            const id = req.params.id;
            if(!req.session.deck) {
                req.session.deck = [];
            }

            if(!req.session.deck.find(card => card.id === id) && req.session.deck.length < 5) {
                req.session.deck.push(await dataMapper.getOneCard(id));
            };
            res.redirect('/');
            
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`)
        }
    },
    deleteCard: (req, res) => {
        const id = req.params.id;
        const index = req.session.deck.findIndex(card => card.id === id);
        req.session.deck.splice(index, 1);
        res.redirect('/deck');
    },
    deckPage : (req, res) => {
        res.status(200).render('deck', {title: 'Mon deck', cards: req.session.deck || []});
    }
};

module.exports = deckController;