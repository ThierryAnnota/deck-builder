const dataMapper = require("../dataMapper");

const cardController = {
    card: async (req, res) => {
        try {
            const id = req.params.id;
            const card = await dataMapper.getOneCard(id);
            res.render('card', {card})
            
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = cardController;