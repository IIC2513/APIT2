# API Tarea 2 - Sección 1 ⭐️

Para utilizar esta API, deben ingresar al siguiente link: http://54.166.215.100:3000/docs/. Aquí, podrán encontrar toda la documentación de la API necesaria para la realización de la tarea.

## ¿Cómo correr la API?

En caso de que haya problemas con el link anterior, ustedes pueden correr la API en su computador sin problemas. Para ello, deberán seguir los siguientes pasos:

1. Clonar este repositorio APIT2 en su computador.
2. Correr el comando `npm install`: para instalar todas las dependencias mínimas necesarias para correr el programa.
3. Cambiar en el archivo `config/config.json` de la línea 1 a la 8, tal que los parámetros utilizados en development correspondan a los existentes en su computador. Específicamente, deberán cambiar el username, password y database name de la configuración tal que calce con sus datos personales.
4. Crear una base de datos en postgres con el nombre establecido en su archivo `config/config.json`. Para ello, deben utilizar el comando `createdb {databasename}`. Para esto, recuerden tener instalado Postgres.
5. Correr los comandos de Sequelize necesarios para la creación y migración de la base de datos con sus respectivas seeds. Para ello, deben correr `npx sequelize-cli db:create`, luego `npx sequelize-cli db:migrate` y, por último `npx sequelize-cli db:seed:all`.
6. Correr la aplicación en el puerto 3000 con el comando `npm start`.

