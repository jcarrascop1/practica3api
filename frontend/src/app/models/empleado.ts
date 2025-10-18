// Interfaz que define la estructura de datos para un empleado
export interface Empleado {
    _id?: string // Identificador único del empleado en la base de datos (opcional)
    nombre: string // Nombre completo del empleado
    cargo: string // Posición o cargo que ocupa el empleado
    departamento: string // Departamento al que pertenece el empleado
    sueldo: number // Salario del empleado
    createdAt?: string // Fecha de creación del registro (opcional)
    updatedAt?: string // Fecha de última actualización del registro (opcional)
}