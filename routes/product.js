const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Otras rutas...

console.log('Ruta de productos cargada');

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// GET product/:id - Obtener un producto por su ID
router.get('/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

router.get('/:category/:id', async (req, res) => {
  try {
    console.log('Ruta de productos cargada');
    console.log(req.params);
    const { category, id } = req.params;
    // Realiza la búsqueda del producto por categoría e ID aquí
    const product = await Product.findOne({ where: { category, id } });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});


module.exports = router;
