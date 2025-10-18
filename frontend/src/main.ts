// Punto de entrada principal de la aplicación Angular
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Inicialización de la aplicación Angular con configuración personalizada
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err)); // Manejo de errores durante el bootstrap
