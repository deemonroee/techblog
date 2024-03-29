const seedUser = require('./userData');
const seedPost = require('./postData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUser();
    await seedPost();
    await seedComment();

    process.exit(0);
};

seedAll();