# Usa una imagen base de Node.js
FROM node:14

# Crea y establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto en el que tu aplicación Express se ejecutará (asegúrate de que coincida con tu configuración)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
