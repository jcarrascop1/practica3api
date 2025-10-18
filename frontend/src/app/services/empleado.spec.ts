// Archivo de pruebas unitarias para el servicio de empleados
import { TestBed } from '@angular/core/testing';

import { EmpleadoService } from './empleado';

// Suite de pruebas para el servicio Empleado
describe('Empleado', () => {
  let service: EmpleadoService; // Instancia del servicio

  // Configuración antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configura el módulo de testing
    service = TestBed.inject(EmpleadoService); // Inyecta el servicio
  });

  // Prueba que verifica que el servicio se crea correctamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
