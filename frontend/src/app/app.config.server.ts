// Configuración del servidor para Server-Side Rendering (SSR)
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

// Configuración específica para el servidor
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)) // Habilita el renderizado del lado del servidor con rutas
  ]
};

// Fusión de la configuración de la aplicación con la configuración del servidor
export const config = mergeApplicationConfig(appConfig, serverConfig);
