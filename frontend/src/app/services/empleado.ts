// Servicio para manejar las operaciones HTTP relacionadas con empleados
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

// Decorador que marca la clase como un servicio inyectable
@Injectable({
  providedIn: 'root' // Proporcionado a nivel raíz de la aplicación
})
export class EmpleadoService {
  // URL base de la API REST para empleados
  URL_API = 'http://localhost:3000/api/empleados';
  
  // Array que almacena la lista de empleados
  empleados: Empleado[] = [];
  
  // Objeto que almacena el empleado seleccionado para edición
  selectedEmpleado: Empleado = {
    nombre: '',
    cargo: '',
    departamento: '',
    sueldo: 0
  }
  
  // Constructor que inyecta el HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) { }
  
  // Método para obtener todos los empleados desde la API
  getEmpleados() {
    return this.http.get<Empleado[]>(this.URL_API);
  }
  
  // Método para crear un nuevo empleado en la API
  createEmpleado(empleado: Empleado) {
    return this.http.post(this.URL_API, empleado);
  }

  // Método para actualizar un empleado existente en la API
  updateEmpleado(empleado: Empleado) {
    return this.http.put(`${this.URL_API}/${empleado._id}`, empleado);
  }

  // Método para eliminar un empleado de la API
  deleteEmpleado(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}