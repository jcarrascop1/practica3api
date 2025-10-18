// Archivo de pruebas unitarias para el componente de empleados
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoComponent } from './empleado';

// Suite de pruebas para el componente Empleado
describe('Empleado', () => {
  let component: EmpleadoComponent; // Instancia del componente
  let fixture: ComponentFixture<EmpleadoComponent>; // Fixture para testing

  // Configuración antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoComponent] // Importa el componente Empleado
    })
    .compileComponents(); // Compila los componentes

    fixture = TestBed.createComponent(EmpleadoComponent); // Crea el componente
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta cambios iniciales
  });

  // Prueba que verifica que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
