// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Inspector de Elementos',
  tagline: 'Herramienta esencial para desarrollo web',
  favicon: 'img/insp.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Cargar fuentes y recursos externos
      stylesheets: [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
      ],
      
      // Barra de anuncios para mostrar info relevante
      announcementBar: {
        id: 'support_us',
        content: '🔍 Aprende a dominar el Inspector de Elementos con nuestra <a href="/docs/introduccion">guía completa</a>',
        backgroundColor: '#4285f420',
        textColor: '#e8eaed',
        isCloseable: true,
      },
      
      // Personalizar el selector de tema
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      
      // Replace with your project's social card
      image: 'img/devtools-social-card.jpg',
      
      // Configuración de la barra de navegación
      navbar: {
        title: 'Inspector de Elementos',
        logo: {
          alt: 'Inspector Logo',
          src: 'img/insp-logo.svg',
        },
        style: 'dark',
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guía',
          },
          {
            href: 'https://developer.mozilla.org/es/docs/Tools/Page_Inspector',
            label: 'MDN Web Docs',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción',
                to: '/docs/introduccion',
              },
              {
                label: 'Guía Rápida',
                to: '/docs/guia-rapida',
              },
              {
                label: 'Tutoriales',
                to: '/docs/tutoriales',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Mozilla Developer Network',
                href: 'https://developer.mozilla.org/es/docs/Tools',
              },
              {
                label: 'Chrome DevTools',
                href: 'https://developer.chrome.com/docs/devtools/',
              },
              {
                label: 'Can I Use',
                href: 'https://caniuse.com/',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Documentación del Inspector de Elementos. Construido con Docusaurus.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // He eliminado el objeto additionalLanguages que causaba el error
      },
      
      // Personalización de la barra lateral de docs
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

export default config;