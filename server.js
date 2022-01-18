const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const { Restaurant, Menu, Item } = require('./models/index');
const seed = require('./seed')
port = 3000
const app = express();

//used to configure handlebars library to work well with express and sequelize model

const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

app.use(express.static('public'));


app.listen(port, async() => {
    await seed()
    console.log( `Server is listening at htttp://localhost:${port}`)
})

app.get("/restaurants", async(request, response)=>{
    const rests = await Restaurant.findAll()
    response.render('restaurants',{rests});
    // response.render('restaurants',{restaurants});
})

app.get("/restaurants/:id", async(request, response)=>{
    const rest = await Restaurant.findByPk(request.params.id, {include: {
        model: Menu,
        include: Item}})
    console.log("MENUS:", rest.Menus)

    // response.json(rest)

    response.render('restaurant', {rest})

    
})

app.post("/restaurants", async(request, response)=>{
    const rest = await Restaurant.create(request.body)
    response.json(rest)
})

app.put("/restaurants/:id", async(request, response)=>{
    await Restaurant.update(
    request.body,
    {where: { id: request.params.id}})
    response.send("Updated")
})

app.delete("/restaurants/:id", async(request, response)=>{
    await Restaurant.destroy( 
    {where: { id: request.params.id}})
    response.send("Deleted")
})


app.get("/menus", async(request, response)=>{
    const menus = await Menu.findAll()
    response.render('menus',{menus});
})

app.get("/menus/:id", async(request, response)=>{
    const menu = await Menu.findByPk(request.params.id, {include: Item})
    // response.json(menu)
    response.render('menu', {menu})
})
app.get("/items", async(request, response)=>{
    const items = await Item.findAll()
    response.json(items)
})

app.get("/items/:id", async(request, response)=>{
    const item = await Item.findByPk(request.params.id)
    response.json(item)
})