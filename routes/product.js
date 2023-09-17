const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Otras rutas...

console.log('Ruta de productos cargada');

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
  try {
    console.log('Obteniendo todos los productos');
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Otras rutas...

module.exports = router;
