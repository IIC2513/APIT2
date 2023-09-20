'use strict';
const Chance = require('chance');
const chance = new Chance();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta datos en la tabla Product
    const products = [];
    
    // Genera 60 productos aleatorios
    for (let i = 0; i < 60; i++) {
      const productName = chance.word();
      const productDescription = chance.sentence();
      const productStock = chance.integer({ min: 1, max: 50 });
      const productPrice = chance.floating({ min: 10, max: 1000, fixed: 2 });
      const productCategory = chance.pickone(['Electrónica', 'Ropa', 'Hogar', 'Deportes']);

      products.push({
        name: productName,
        description: productDescription,
        stock: productStock,
        price: productPrice,
        category: productCategory,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Products', products, {});

  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los datos insertados por esta seeder
    await queryInterface.bulkDelete('Products', null, {});
  }
};
