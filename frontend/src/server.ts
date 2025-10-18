// Servidor Express para Angular con Server-Side Rendering (SSR)
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

// Ruta hacia la carpeta de distribución del navegador
const browserDistFolder = join(import.meta.dirname, '../browser');

// Instancia de Express y Angular Node App Engine
const app = express();
const angularApp = new AngularNodeAppEngine();


/**
 * Servir archivos estáticos desde /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y', // Cache por 1 año
    index: false, // No servir index.html automáticamente
    redirect: false, // No redirigir automáticamente
  }),
);

/**
 * Manejar todas las demás solicitudes renderizando la aplicación Angular.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Iniciar el servidor si este módulo es el punto de entrada principal.
 * El servidor escucha en el puerto definido por la variable de entorno `PORT`, o por defecto 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Manejador de solicitudes usado por Angular CLI (para dev-server y durante la compilación) o Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
