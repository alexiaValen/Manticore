const sequelize = require('../config/connection');
const { User } = require('../models');


const userData = require('./userData.json');
console.log(userData)

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await console.log(userData)
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();