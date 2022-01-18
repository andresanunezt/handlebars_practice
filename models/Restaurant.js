const {sequelize, DataTypes, Model} = require('../db/db');

class Restaurant extends Model {}

Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});


module.exports = {

    Restaurant
}