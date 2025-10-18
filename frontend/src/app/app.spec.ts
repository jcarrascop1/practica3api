// Archivo de pruebas unitarias para el componente principal de la aplicación
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

// Suite de pruebas para el componente App
describe('App', () => {
  // Configuración antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App], // Importa el componente App
      providers: [provideZonelessChangeDetection()] // Proporciona detección de cambios sin zonas
    }).compileComponents();
  });

  // Prueba que verifica que el componente se crea correctamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Prueba que verifica que el título se renderiza correctamente
  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Detecta cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, frontend');
  });
});
