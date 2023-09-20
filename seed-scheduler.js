const cron = require('node-cron');
const { exec } = require('child_process');

console.log('Iniciando tarea programada...');

// Programa la tarea para ejecutarse todos los días a las 23:30
cron.schedule('30 23 * * *', () => {
   console.log('Ejecutando tarea programada...');
   
   // Ejecuta los comandos
   exec('npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all', (error, stdout, stderr) => {
     if (error) {
       console.error(`Error al ejecutar los comandos: ${error}`);
       return;
     }

     console.log(`stdout: ${stdout}`);
     console.error(`stderr: ${stderr}`);

     console.log('Tarea programada completada exitosamente.');
   });
});
