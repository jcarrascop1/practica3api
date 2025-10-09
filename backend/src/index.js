// Punto de entrada principal del servidor
// Importación y configuración de la base de datos
require('./database');

// Importación de la aplicación Express configurada
const app= require('./app')

// Inicialización del servidor
// El servidor escucha en el puerto configurado y muestra información de inicio
app.listen(app.get('puerto'), ()=>{
 console.log('Nombre de la App',app.get('nombreApp'));
 console.log('Puerto del servidor',app.get('puerto'));
})