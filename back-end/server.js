const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/bookstore', {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title, author, genre, and price
const itemSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  price: String,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);


// Get a list of all of the items in the cart.
app.get('/api/cart', async (req, res) => {
  //console.log("Get Route");
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    //console.log(error);
    res.sendStatus(500);
  }
});

// Create a new item in the cart: takes a title, author, genre, and price of an item
app.post('/api/cart', async (req, res) => {
  //console.log("Adding new item to cart with title: " + req.body.title);
  const item = new Item({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    price: req.body.price,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    //console.log(error);
    res.sendStatus(500);
  }
});

// Delete An Item
app.delete('/api/cart/:id', async (req, res) => {
  //console.log("Delete ", req.params.id);
  try {
    await Item.deleteOne({
	    _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    //console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3002, () => console.log('Server listening on port 3002!'));
