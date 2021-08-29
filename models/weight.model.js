//const { Sequelize } = require("sequelize/types");
// const User = require('users.model.js');

module.exports = (sequelize, Sequelize) => {
    const Weight = sequelize.define("weight", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        weight: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
        // created_at: {
        //     type: 'TIMESTAMP',
        //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        //     allowNull: false
        // },
        // updated_at: {
        //     type: 'TIMESTAMP',
        //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        //     allowNull: false
        // }
    });

    //Weight.belongsTo(User, {as: 'user'});

    return Weight;
}