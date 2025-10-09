// Definición del modelo de datos para empleados usando Mongoose
const {Schema, model}=require('mongoose');

// Esquema de la base de datos para el modelo Empleado
const empleadoSchema=new Schema({
 nombre:{type:String, required:true}, // Nombre del empleado (obligatorio)
 cargo:{type:String, required: true}, // Cargo o posición del empleado (obligatorio)
 departamento:{type:String, required:true}, // Departamento al que pertenece (obligatorio)
 sueldo:{type:Number, required:true} // Salario del empleado (obligatorio)
}, {
    imestamps:true, // Habilita timestamps automáticos (createdAt, updatedAt)
    versionKey:false // Desactiva el campo __v de versionado de Mongoose
})

// Exportación del modelo para uso en controladores y rutas
module.exports=model("Empleado",empleadoSchema);