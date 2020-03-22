const Sequelize = require('sequelize');


const connection = new Sequelize('banco', 'usuarioDB', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = connection;