const { Client } = require('pg');

const client = new Client(process.env.PG_URL);

client.connect()
    .then(console.log("connecté à la db"))
    .catch((error) => {
        console.error("error")
    });

module.exports = client;
