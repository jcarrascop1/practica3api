// Configuración de rutas del servidor para Server-Side Rendering
import { RenderMode, ServerRoute } from '@angular/ssr';

// Definición de rutas del servidor con modo de renderizado
export const serverRoutes: ServerRoute[] = [
  {
    path: '**', // Ruta comodín que captura todas las rutas
    renderMode: RenderMode.Prerender // Modo de prerenderizado para todas las rutas
  }
];
