const {User} = require('../models');

const userData = [
    {
        "name": "Denise Palma",
        "password": "poe123"
    },
    {
        "name": "Rauw Alejandro",
        "password": "rarauw123"
    },
    {
        "name": "Joey Tribbiani",
        "password": "nyknicks12"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;