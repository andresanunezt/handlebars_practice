const {sequelize, DataTypes, Model} = require('../db/db');

class Menu extends Model {}

Menu.init({
    name: DataTypes.STRING,
    hours: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});



module.exports = {

    Menu
}