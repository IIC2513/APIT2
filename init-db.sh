#!/bin/bash

# # Espera a que el servicio de la base de datos esté disponible
# until nc -z -v -w30 db 5432
# do
#   echo "Esperando que la base de datos se inicie..."
#   sleep 1
# done

# Ejecuta los comandos de Sequelize CLI
npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Inicia tu aplicación
npm start
