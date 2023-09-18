const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Otras rutas...

const authenticateToken = (req, res, next) => {
  // Token predefinido (puedes cambiarlo según tus necesidades)
  const predefinedToken = 'iicapit2';

  // Obtén el token proporcionado en la solicitud (por ejemplo, en el encabezado "Authorization")
  const tokenProvided = req.headers.authorization;

  // Verifica si el token proporcionado coincide con el token predefinido
  if (tokenProvided === `Bearer ${predefinedToken}`) {
    // Si el token coincide, permite que la solicitud continúe
    next();
  } else {
    // Si el token no coincide, responde con un error 401 (No autorizado)
    res.status(401).json({ error: 'Token no válido' });
  }
};


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

router.post('/', authenticateToken, async (req, res) => {
  try {
    console.log('Ruta de productos cargada');
    console.log(req.body);
    const { name, description, stock, price, category } = req.body;
    const product = await Product.create({
      name,
      description,
      stock,
      price,
      category,
    });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
  try {
    console.log("August")
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (product) {
      const updatedProduct = await product.update(req.body);
      res.json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (product) {
      await product.destroy();
      res.json({ message: 'Producto eliminado' });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
});


module.exports = router;
