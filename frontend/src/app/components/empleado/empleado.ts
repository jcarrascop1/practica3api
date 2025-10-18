// Componente para la gestión de empleados
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado';
import { Empleado } from '../../models/empleado';
import { NgForm ,FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'; 

// Decorador que define el componente de empleados
@Component({
  selector: 'app-empleado', // Selector CSS para usar en el HTML
  imports: [FormsModule,CommonModule], // Módulos importados para formularios y directivas comunes
  templateUrl: './empleado.html', // Plantilla HTML del componente
  styleUrls: ['./empleado.css'] // Archivos de estilos CSS del componente
})
export class EmpleadoComponent implements OnInit {
  // Constructor que inyecta el servicio de empleados
  constructor(public empleadoService: EmpleadoService) { }
  
  // Array local para almacenar los empleados
  empleado: Empleado[] = [];
  
  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.getEmpleados(); // Carga los empleados al inicializar
  }
  
  // Método para obtener todos los empleados desde el servicio
  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
      (res: any) => {
        this.empleadoService.empleados = res; // Asigna la respuesta al array del servicio
      },
      (err: any) => {
        console.error('Error al obtener empleados:', err);
        this.empleadoService.empleados = []; // Array vacío en caso de error
      }
    );
  }
  
  // Método para agregar un nuevo empleado
  addEmpleado(form: NgForm) {
    // Crea un nuevo empleado usando los datos del formulario
    this.empleadoService.createEmpleado(form.value).subscribe(
      (res: any) => {
        this.getEmpleados(); // Recarga la lista de empleados
        form.reset(); // Limpia el formulario
        // this.resetForm(); // Resetea el empleado seleccionado
      },
      (err: any) => console.error(err) // Manejo de errores
    );
  }

  // Método para editar un empleado (cargar datos en el formulario)
  editEmpleado(empleado: Empleado) {
    // Crear una copia profunda del empleado para evitar problemas de referencia
    this.empleadoService.selectedEmpleado = {
      _id: empleado._id,
      nombre: empleado.nombre || '',
      cargo: empleado.cargo || '',
      departamento: empleado.departamento || '',
      sueldo: empleado.sueldo || 0
    };
    
  }

  // Método para eliminar un empleado
  deleteEmpleado(_id: string) {
    if (confirm('¿Está seguro de que desea eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(_id).subscribe(
        (res: any) => {
          this.getEmpleados(); // Recarga la lista de empleados
        },
        (err: any) => console.error(err) // Manejo de errores
      );
    }
  }

  // Método para actualizar un empleado
  updateEmpleado(form: NgForm) {
    this.empleadoService.updateEmpleado(this.empleadoService.selectedEmpleado).subscribe(
      (res: any) => {
        this.getEmpleados(); // Recarga la lista de empleados
        form.reset(); // Limpia el formulario
        this.resetForm(); // Resetea el empleado seleccionado
      },
      (err: any) => {
        console.error('Error al actualizar empleado:', err);
        // No resetear el formulario si hay error
      }
    );
  }

  // Método para resetear el formulario y el empleado seleccionado
  resetForm() {
    this.empleadoService.selectedEmpleado = {
      _id: undefined,
      nombre: '',
      cargo: '',
      departamento: '',
      sueldo: 0
    };
  }
}
