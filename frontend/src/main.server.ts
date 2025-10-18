// Punto de entrada del servidor para Server-Side Rendering (SSR)
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// Función de bootstrap para el servidor con contexto específico
const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

// Exportación por defecto de la función de bootstrap
export default bootstrap;
