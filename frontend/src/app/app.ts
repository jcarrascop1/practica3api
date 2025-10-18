// Componente principal de la aplicación Angular
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado';
import { FormsModule } from '@angular/forms';

// Decorador que define el componente principal de la aplicación
@Component({
  selector: 'app-root', // Selector CSS para usar en el HTML
  imports: [RouterOutlet,EmpleadoComponent,FormsModule], // Módulos y componentes importados
  templateUrl: './app.html', // Plantilla HTML del componente
  styleUrl: './app.css' // Archivo de estilos CSS del componente
})
export class App {
  // Título de la aplicación usando Angular signals (reactivo)
  protected readonly title = signal('frontend');
}
