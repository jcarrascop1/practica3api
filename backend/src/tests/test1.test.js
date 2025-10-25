const request =require('supertest')
const app=require('../app')
const mongoose=require('../database');
beforeAll(async () => {});
afterAll(async () => {
    await mongoose.connection.close();
});

describe("GET /empleados", () => {
    test('Response 200 empleados', async() => {
        await request(app)
        .get('/api/empleados')
        .expect("Content-Type", /application\/json/)
        .expect(200)
        
        });
    test("Response 404 status code", async ()=>{
        await request(app)
        .get('/api/empleados/68e7455e32cb626358fbeff6')
        .expect("Content-Type", /application\/json/)
        .expect(404)
        
    })
});
describe("POST /empleados", () => {
    test('Response 200 empleado creado', async() => {
        const data = {
        nombre: 'Marcos',
        cargo: 'gerente',
        departamento: 'Financiero',
        sueldo: 1560
        }

        request(app)
        .post('/empleados')
        .send(data)
        .set("Aceptado", "application/json")
        .expect("Content-Type", "text/html")
        .expect(200)
        
        });
    test("Response 404 status code", async ()=>{
        const response = await request(app).post("/empleados").send({});
        expect(response.statusCode).toBe(404);
    })
});
