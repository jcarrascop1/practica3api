// Configuración de la conexión a la base de datos MongoDB
const mongoose = require('mongoose');

// URI de conexión a MongoDB Atlas (base de datos en la nube)
const URI = process.env.DATABASE_URL;

// Establecimiento de la conexión con la base de datos
mongoose.connect(URI)
.then(db => console.log('database conneted')) // Mensaje de éxito cuando se conecta
.catch(err => console.error(err)); // Manejo de errores en caso de fallo de conexión

// Exportación del objeto mongoose para uso en otros módulos
module.exports=mongoose;

