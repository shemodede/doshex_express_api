const config = require('../config/db.config.js');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        // operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/users.model.js')(sequelize, Sequelize);
db.weight = require('../models/weight.model.js')(sequelize, Sequelize);

// db.weight.belongsToOne(db.user, {
//     through: 'user_weights',
//     foreignKey: 'userId'
// });

module.exports = db;
