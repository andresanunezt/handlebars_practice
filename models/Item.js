const {sequelize, DataTypes, Model} = require('../db/db');

class Item extends Model {}

Item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});


module.exports = {
   
    Item
};

