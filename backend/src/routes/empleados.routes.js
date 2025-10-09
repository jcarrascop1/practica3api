// Configuración de rutas para la API de empleados
const { Router }= require('express');
const router=Router();

// Importación del controlador de empleados
const
empleado=require('../controllers/empleados.controller.js');

// Definición de rutas para operaciones CRUD de empleados
router.get('/',empleado.getEmpleados); // GET /api/empleados - Obtener todos los empleados
router.post('/', empleado.createEmpleado); // POST /api/empleados - Crear un nuevo empleado
router.get('/:id',empleado.getEmpleado); // GET /api/empleados/:id - Obtener un empleado específico
router.put('/:id',empleado.editEmpleado); // PUT /api/empleados/:id - Actualizar un empleado

router.delete('/:id', empleado.deleteEmpleado); // DELETE /api/empleados/:id - Eliminar un empleado

// Exportación del router configurado
module.exports=router;