require('dotenv').config();
module.exports = {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_ROOT_USER,
    PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
    PORT: process.env.MYSQL_DOCKER_PORT,
    DB: process.env.MYSQL_DATABASE,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};