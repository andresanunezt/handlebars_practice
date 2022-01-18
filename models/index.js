

const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

Restaurant.hasMany(Menu)
Menu.hasMany(Item)
Menu.belongsTo(Restaurant)
Item.belongsTo(Menu)

module.exports = {
        Restaurant,
         Menu,
         Item
     };

