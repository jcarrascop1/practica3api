// Configuración principal de la aplicación Angular
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient,withFetch } from '@angular/common/http';

// Configuración de la aplicación con todos los proveedores necesarios
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Manejo global de errores en el navegador
    provideZonelessChangeDetection(), // Detección de cambios sin zonas (nueva característica de Angular)
    provideRouter(routes), // Configuración del enrutador con las rutas definidas
    provideClientHydration(withEventReplay()), // Hidratación del cliente con reproducción de eventos
    provideHttpClient(withFetch()) // Cliente HTTP con fetch API nativo
  
  ]
};
