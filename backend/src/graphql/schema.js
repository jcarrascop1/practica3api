const { makeExecutableSchema } = require('@graphql-tools/schema');
const { resolvers } = require('./resolvers.mjs');

const typeDefs = `

type Departamento
{
_id: ID
nombre: String
slogan: String
empleados:[Empleado]
}
type Gerente
{
_id: ID
nombre: String
email: String
}
type Empleado
{
_id: ID
nombre: String!
sueldo: Float
cargo: String
departamento: String
}
type Query {
  saludar(name: String!): String 
  empleados: [Empleado]
  departamento(nombre: String!): Departamento
  departamentos: [Departamento]
}

input EmpleadoInput
{
nombre: String!
sueldo: Float
cargo: String
departamento: String
}
input DepartamentoInput
{
nombre: String!
slogan: String
}
type Mutation
{
createEmpleado(input:EmpleadoInput):Empleado
createDepartamento(input:DepartamentoInput):Departamento
}
`;
module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})