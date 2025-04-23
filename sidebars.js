// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

 /**
  * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation
  *
  * The sidebars can be generated from the filesystem, or explicitly defined here.
  *
  * Create as many sidebars as you want.
  *
  * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
  */
  const sidebars = {
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Introducción',
        customProps: {
          icon: 'fa-solid fa-book',
        },
        items: [
          {
            type: 'doc',
            id: 'Introducción/intro',
            label: 'Introducción al Inspector de Elementos',
          },
          {
            type: 'doc',
            id: 'Introducción/acceso-basico',
            label: 'Acceso Básico',
          },
          {
            type: 'doc',
            id: 'Introducción/ventajas',
            label: 'Ventajas',
          },
        ],
      },
      {
        type: 'category',
        label: 'HTML y CSS',
        customProps: {
          icon: 'fa-solid fa-code',
        },
        items: [
          {
            type: 'doc',
            id: 'dom',
            label: 'DOM',
          },
          {
            type: 'doc',
            id: 'modificar-html',
            label: 'Modificar HTML',
          },
          {
            type: 'doc',
            id: 'ver-cambios',
            label: 'Ver Cambios',
          },
        ],
      },
      {
        type: 'category',
        label: 'Console y JavaScript',
        customProps: {
          icon: 'fa-solid fa-terminal',
        },
        items: [
          {
            type: 'doc',
            id: 'comandos-basicos',
            label: 'Comandos Básicos',
          },
          {
            type: 'doc',
            id: 'comandos-avanzados',
            label: 'Comandos Avanzados',
          },
        ],
      },
      {
        type: 'category',
        label: 'Red (Network)',
        customProps: {
          icon: 'fa-solid fa-network-wired',
        },
        items: [
          {
            type: 'doc',
            id: 'solicitudes-http',
            label: 'Solicitudes HTTP',
          },
          {
            type: 'doc',
            id: 'errores-red',
            label: 'Errores de Red',
          },
          {
            type: 'doc',
            id: 'cargar-recursos',
            label: 'Cargar Recursos',
          },
        ],
      },
      {
        type: 'category',
        label: 'Performance',
        customProps: {
          icon: 'fa-solid fa-tachometer-alt',
        },
        items: [
          {
            type: 'doc',
            id: 'analizar-rendimiento',
            label: 'Analizar Rendimiento',
          },
          {
            type: 'doc',
            id: 'ver-tiempos-carga',
            label: 'Ver Tiempos de Carga',
          },
          {
            type: 'doc',
            id: 'optimizar-renderizado',
            label: 'Optimizar Renderizado',
          },
        ],
      },
      {
        type: 'category',
        label: 'Almacenamiento',
        customProps: {
          icon: 'fa-solid fa-database',
        },
        items: [
          {
            type: 'doc',
            id: 'cookies',
            label: 'Cookies',
          },
          {
            type: 'doc',
            id: 'localstorage',
            label: 'LocalStorage',
          },
          {
            type: 'doc',
            id: 'sessionstorage',
            label: 'SessionStorage',
          },
        ],
      },
      {
        type: 'category',
        label: 'Depuración JavaScript',
        customProps: {
          icon: 'fa-solid fa-bug',
        },
        items: [
          {
            type: 'doc',
            id: 'breakpoints',
            label: 'Breakpoints',
          },
          {
            type: 'doc',
            id: 'stack-trace',
            label: 'Stack Trace',
          },
        ],
      },
      {
        type: 'category',
        label: 'Emulación de Dispositivos',
        customProps: {
          icon: 'fa-solid fa-mobile-alt',
        },
        items: [
          {
            type: 'doc',
            id: 'simular-dispositivo',
            label: 'Simular Dispositivos',
          },
          {
            type: 'doc',
            id: 'test-responsivo',
            label: 'Testear en Diferentes Dispositivos',
          },
        ],
      },
      {
        type: 'category',
        label: 'Lighthouse',
        customProps: {
          icon: 'fa-solid fa-lightbulb',
        },
        items: [
          {
            type: 'doc',
            id: 'auditoria-lighthouse',
            label: 'Auditoría Lighthouse',
          },
          {
            type: 'doc',
            id: 'mejoras-lighthouse',
            label: 'Mejoras Lighthouse',
          },
        ],
      },
      {
        type: 'category',
        label: 'Buenas Prácticas',
        customProps: {
          icon: 'fa-solid fa-thumbs-up',
        },
        items: [
          {
            type: 'doc',
            id: 'optimizar-uso',
            label: 'Optimizar Uso',
          },
          {
            type: 'doc',
            id: 'trucos-devtools',
            label: 'Trucos DevTools',
          },
        ],
      },
    ],
  };
  
  export default sidebars;