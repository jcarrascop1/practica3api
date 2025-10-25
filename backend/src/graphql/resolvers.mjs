import Empleado from  '../models/Empleado.js';
import Departamento from  '../models/Departamento.js';


export const resolvers = {
    Query: {
        saludar(root, { name }, context) {
            console.log(context);
            return `Hola ${name}!`;
        },
        async empleados() {
            const empleados = await Empleado.find();
            return empleados;
        },
        departamento: (nombre) => {
            console.log(nombre);
            return '$(nombre)!';
        },
        async departamentos() {
            const departamentos = await Departamento.find();
            return departamentos;
        },
    },
    Mutation: {
        async createEmpleado(_, { input }) {
            const empleado=new Empleado({
                nombre: input.nombre,
                cargo: input.cargo,
                departamento:input.departamento,
                sueldo:input.sueldo
                });
                
            const empleadoGuardado = await empleado.save();
            return empleadoGuardado;
        },
        async createDepartamento(_, { input }) {
            const departamento=new Departamento({
                nombre: input.nombre,
                slogan:input.slogan
                });
                
            const departamentoGuardado = await departamento.save();
            return departamentoGuardado;
        }
    }

}