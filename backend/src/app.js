// Importación de dependencias necesarias para la configuración del servidor
const express=require('express');
const morgan=require('morgan');
const app=express();
const cors = require('cors');

// Configuración de la aplicación
//settings
app.set('puerto',process.env.PORT|| 3000); // Puerto del servidor (por defecto 3000)
app.set('nombreApp','Gestión de empleados'); // Nombre de la aplicación

// Middleware de logging para desarrollo
app.use(morgan('dev'));

// Middleware para parsear JSON en las peticiones
app.use(express.json());

// Configuración de CORS para permitir comunicación con el frontend
app.use(cors({
    origin: 'http://localhost:4200', // URL del frontend Angular
    methods: ['GET','POST','PUT','DELETE'], // Métodos HTTP permitidos
    credentials: true // Permite el envío de cookies y headers de autenticación
}));

// Configuración de rutas para la API de empleados
app.use('/api/empleados',require('./routes/empleados.routes'));

//Graphql
const expressGraphqlHTTP = require('express-graphql');
const schema = require ('./graphql/schema.js');
app.use('/graphql', expressGraphqlHTTP.graphqlHTTP({
    graphiql: true,
    schema: schema
}
));

// Exportación de la aplicación configurada
module.exports=app;

