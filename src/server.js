const express = require('express');
const sequelize = require('./client');
const User = require('../../models/User');
const Product = require('../../models/Product');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ✅ Get all products
app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// ✅ Get a single product
app.get('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.json(product || { error: 'Product not found' });
});

// ✅ Add a new product
app.post('/products', async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
});

// ✅ Get all users
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// ✅ Start the server
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('❌ Database connection error:', error);
  }
});
