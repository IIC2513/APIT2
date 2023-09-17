'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta datos en la tabla Product
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Producto 1',
        description: 'Descripción del Producto 1',
        stock: 10,
        price: 19.99,
        category: 'Electrónica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        stock: 15,
        price: 29.99,
        category: 'Ropa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Producto 3',
        description: 'Descripción del Producto 3',
        stock: 5,
        price: 9.99,
        category: 'Hogar',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Producto 4',
        description: 'Descripción del Producto 4',
        stock: 20,
        price: 49.99,
        category: 'Electrónica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los datos insertados por esta seeder
    await queryInterface.bulkDelete('Products', null, {});
  }
};
