// Controlador para manejar las operaciones CRUD de empleados
const empleadoCtrl={};
const Empleado = require('../models/Empleado');

// Función para obtener todos los empleados
empleadoCtrl.getEmpleados= async(req,res)=>{
    const empleados= await Empleado.find(); // Busca todos los empleados en la base de datos
    res.json(empleados); // Retorna la lista de empleados en formato JSON

}

// Función para crear un nuevo empleado
empleadoCtrl.createEmpleado=async(req,res)=>{
    
    // Creación de una nueva instancia del modelo Empleado con los datos del request
    const empleado=new Empleado({
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    departamento:req.body.departamento,
    sueldo:req.body.sueldo
    });
    
    const empleadoGuardado = await empleado.save(); // Guarda el empleado en la base de datos
    res.json(empleadoGuardado); // Retorna el empleado creado
}

// Función para obtener un empleado específico por ID
empleadoCtrl.getEmpleado=async(req,res)=>{
    const {id}=req.params; // Extrae el ID de los parámetros de la URL
    const empleado = await Empleado.findById(id); // Busca el empleado por ID
    res.json(empleado); // Retorna el empleado encontrado
}

// Función para actualizar un empleado existente
empleadoCtrl.editEmpleado=async(req,res)=>{
    
    const {id}=req.params; // Extrae el ID de los parámetros de la URL
    
    // Objeto con los nuevos datos del empleado
    const empleado={
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    departamento: req.body.departamento,
    sueldo: req.body.sueldo
    };
    const empleadoActualizado = await Empleado.findByIdAndUpdate(id, {$set:empleado},{new: true}); // Actualiza el empleado
    res.json(empleadoActualizado); // Retorna el empleado actualizado
    

}

// Función para eliminar un empleado
empleadoCtrl.deleteEmpleado=async(req,res)=>{
    
    await Empleado.findByIdAndDelete(req.params.id); // Elimina el empleado por ID
    res.json('status: Empleado ha sido removido'); // Confirma que el empleado fue eliminado

}

// Exportación del controlador para uso en las rutas
module.exports=empleadoCtrl;