# 📦 Sistema de Control de Inventarios — Frontend Angular

¡Bienvenido al frontend del **Sistema de Control de Inventarios**! Una aplicación web moderna de estilo SaaS diseñada para la gestión, monitoreo y control en tiempo real de productos, stock y métricas financieras de inventarios.

Este proyecto ha sido desarrollado utilizando **Angular 19** y estilizado meticulosamente con **Bootstrap 5** y **CSS personalizado**, logrando una interfaz responsiva, fluida y con un aspecto sumamente premium.

---

## ✨ Características Principales

*   **📊 Métricas en Tiempo Real (SaaS Dashboard):** Tarjetas dinámicas que resumen los indicadores clave del almacén al instante:
    *   *Total de productos diferentes* registrados.
    *   *Stock total de existencias* acumuladas en el almacén.
    *   *Valor total financiero del inventario*, calculado automáticamente de forma dinámica.
*   **🎨 Tema Dinámico (Modo Oscuro / Claro):** Interruptor de tema integrado que interactúa con las variables globales de Bootstrap (`data-bs-theme`). Detecta automáticamente la preferencia del sistema operativo y persiste la selección del usuario mediante `localStorage`.
*   **🚥 Alertas de Disponibilidad (Badges de Stock):** Indicadores visuales automáticos basados en la cantidad de existencias:
    *   🔴 `Agotado` (0 unidades)
    *   🟡 `Stock Bajo` (< 10 unidades)
    *   🔵 `Moderado` (10 - 49 unidades)
    *   🟢 `Stock Alto` (≥ 50 unidades)
*   **💼 Gestión Completa (CRUD de Productos):**
    *   **Listado general:** Vista ordenada de productos con diseño limpio, íconos y transiciones fluidas.
    *   **Registro fácil:** Formulario de registro de nuevos productos con validaciones básicas.
    *   **Edición rápida:** Actualización de descripciones, precios o existencias.
    *   **Eliminación segura:** Retirada de productos obsoletos con actualización de métricas en caliente.
*   **✨ Estética SaaS Premium y Animaciones:**
    *   Diseño moderno usando la tipografía premium **Plus Jakarta Sans**.
    *   Barra de navegación flotante con efecto **Glassmorphic** (desenfoque de fondo y bordes semitransparentes).
    *   Entradas animadas de cascada (`fade-in-up`) para los elementos de la tabla y las tarjetas métricas.
    *   Efectos hover pulidos en todos los botones y filas de tablas para mayor retroalimentación táctil.

---

## 🛠️ Tecnologías y Herramientas

### Frontend
*   **Core:** [Angular v19.1.6](https://angular.dev/)
*   **Lenguajes:** TypeScript, HTML5, CSS3
*   **Maquetación y Estilos:** 
    *   [Bootstrap v5.3.3](https://getbootstrap.com/) (Sistema de rejilla, utilidades y tema base)
    *   [Bootstrap Icons v1.11.3](https://icons.getbootstrap.com/) (Íconos vectoriales modernos)
    *   **CSS Custom Properties (Variables CSS):** Sistema de diseño global para colores HSL dinámicos en temas claro y oscuro.
*   **Tipografía:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) vía Google Fonts.
*   **Manejo de Estado y Asincronía:** RxJS (Observables) y `HttpClient` para peticiones REST de alto rendimiento.

### Backend sugerido (Integración)
La aplicación está configurada para conectarse de forma nativa con un backend REST API desarrollado en **Java / Spring Boot** que expone la entidad `Producto`.

---

## 📂 Estructura del Proyecto Frontend

A continuación se muestra la organización de las piezas clave dentro del directorio `src/app/`:

```bash
src/app/
├── agregar-producto/        # Componente para el registro de productos
├── editar-producto/         # Componente para modificar productos existentes
├── producto-lista/          # Componente principal (Dashboard, métricas y tabla de productos)
├── app.component.html       # Estructura principal (Navbar Glassmorphic y Router Outlet)
├── app.component.ts         # Lógica del core, persistencia del tema oscuro/claro
├── app.config.ts            # Configuraciones globales de Angular (Providers, Router, etc.)
├── app.routes.ts            # Definición del enrutamiento de la aplicación
├── producto.service.ts      # Servicio de comunicación con la API REST (CRUD HTTP)
└── producto.ts              # Modelo/Clase que define la estructura del Producto
```

---

## 🚀 Guía de Inicio Rápido

Sigue estos pasos para instalar y ejecutar el proyecto localmente.

### 📋 Prerrequisitos

Asegúrate de tener instalado en tu sistema:
*   [Node.js](https://nodejs.org/) (Versión LTS recomendada)
*   [Angular CLI](https://angular.dev/tools/cli) de manera global (opcional) o correr a través de `npx`.

### 🔧 Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/DanielAsDano/Sistema-de-inventarios-frontend-con-Angular.git
    cd Sistema-de-inventarios-frontend-con-Angular
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

### 💻 Ejecutar en Entorno de Desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
npm run start
# o alternativamente: ng serve
```

Una vez que el servidor se haya iniciado, abre tu navegador favorito y navega a:
👉 **`http://localhost:4200/`**

La aplicación cuenta con *Hot Module Replacement (HMR)*, por lo que se recargará automáticamente cada vez que realices y guardes un cambio en el código fuente.

---

## 🔌 Conexión con el Backend

El servicio Angular (`producto.service.ts`) se conecta de forma predeterminada al siguiente endpoint API REST:

*   **URL Base de la API:** `http://localhost:8080/inventario-app/productos`

> [!NOTE]
> Para que el sistema funcione completamente, asegúrate de tener tu backend **Spring Boot** corriendo en el puerto `8080`. Si utilizas otro host o puerto, puedes ajustar la variable `urlBase` en `src/app/producto.service.ts`:
> ```typescript
> private urlBase = "http://localhost:8080/inventario-app/productos";
> ```

---

## 📦 Compilación para Producción

Para compilar el proyecto y generar los archivos optimizados para distribución/despliegue en producción, ejecuta:

```bash
npm run build
# o alternativamente: ng build
```

Esto compilará la aplicación y almacenará los artefactos de producción optimizados en el directorio `dist/inventario-app/`. Por defecto, Angular aplicará optimizaciones avanzadas de minificación de archivos, eliminación de código muerto (tree-shaking) y compilación anticipada (AoT) para garantizar el mejor rendimiento.

---

## 🧪 Pruebas Unitarias

Para ejecutar las pruebas unitarias automatizadas con el ejecutor de pruebas [Karma](https://karma-runner.github.io):

```bash
npm run test
# o alternativamente: ng test
```

---

## 🤝 Contribuciones

Las contribuciones, reportes de bugs y sugerencias de mejora son más que bienvenidos. Si deseas colaborar:
1. Haz un **Fork** del proyecto.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b feature/NuevaCaracteristica`).
3. Guarda tus cambios (`git commit -am 'Añade una nueva característica'`).
4. Sube la rama (`git push origin feature/NuevaCaracteristica`).
5. Abre un **Pull Request**.

---

Desarrollado con ❤️ para la gestión profesional de inventarios.
