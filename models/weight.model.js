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
    });
    return Weight;
}