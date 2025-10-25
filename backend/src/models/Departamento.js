// Definición del modelo de datos para departamentos usando Mongoose
const {Schema, model}=require('mongoose');

// Esquema de la base de datos para el modelo Departamento
const departamentoSchema=new Schema({
 nombre:{type:String, required:true}, // Nombre del departamento (obligatorio)
 slogan:{type:String} // Cargo o posición del departamento
}, {
    imestamps:true, // Habilita timestamps automáticos (createdAt, updatedAt)
    versionKey:false // Desactiva el campo __v de versionado de Mongoose
})

// Exportación del modelo para uso en controladores y rutas
module.exports=model("Departamento",departamentoSchema);