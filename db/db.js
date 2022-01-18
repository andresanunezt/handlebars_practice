//MY ATTEMPT
// const {Sequelize, DataTypes, Model} = require('sequelize')


// const db = new Sequelize( {

// dialect: 'sqlite',
// storage: './restaurants.db',
// logging: false,

// })

// module.exports = {db, DataTypes, Model}

// MULTIVERSE:

const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './restaurants-seq.sqlite'
});

 module.exports={sequelize, DataTypes, Model};


 