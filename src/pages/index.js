import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// Componente de DevTools con tabs funcionales
function DevToolsSimulator() {
  const [activeTab, setActiveTab] = useState('elements');
  
  return (
    <div className={styles.inspectorWindow}>
      <div className={styles.inspectorToolbar}>
        <span 
          className={clsx(styles.inspectorTab, activeTab === 'elements' && styles.active)}
          onClick={() => setActiveTab('elements')}>
          Elements
        </span>
        <span 
          className={clsx(styles.inspectorTab, activeTab === 'console' && styles.active)}
          onClick={() => setActiveTab('console')}>
          Console
        </span>
        <span 
          className={clsx(styles.inspectorTab, activeTab === 'network' && styles.active)}
          onClick={() => setActiveTab('network')}>
          Network
        </span>
        <span 
          className={clsx(styles.inspectorTab, activeTab === 'performance' && styles.active)}
          onClick={() => setActiveTab('performance')}>
          Performance
        </span>
      </div>
      <div className={styles.inspectorContent}>
        {activeTab === 'elements' && (
          <>
            <div className={styles.htmlTree}>
              <pre>
                &lt;<span className={styles.htmlTag}>html</span>&gt;
                  &lt;<span className={styles.htmlTag}>head</span>&gt;...&lt;/<span className={styles.htmlTag}>head</span>&gt;
                  &lt;<span className={styles.htmlTag}>body</span>&gt;
                    &lt;<span className={styles.htmlTag}>div</span> <span className={styles.htmlAttr}>class</span>=<span className={styles.htmlValue}>"container"</span>&gt;
                      &lt;<span className={styles.htmlTag}>h1</span>&gt;Inspector de Elementos&lt;/<span className={styles.htmlTag}>h1</span>&gt;
                    &lt;/<span className={styles.htmlTag}>div</span>&gt;
                  &lt;/<span className={styles.htmlTag}>body</span>&gt;
                &lt;/<span className={styles.htmlTag}>html</span>&gt;
              </pre>
            </div>
            <div className={styles.cssPanel}>
              <pre>
                <span className={styles.cssSelector}>.container</span> {"{"}
                  <span className={styles.cssProp}>padding</span>: <span className={styles.cssValue}>20px</span>;
                  <span className={styles.cssProp}>margin</span>: <span className={styles.cssValue}>0 auto</span>;
                  <span className={styles.cssProp}>max-width</span>: <span className={styles.cssValue}>1200px</span>;
                {"}"}
              </pre>
            </div>
          </>
        )}
        {activeTab === 'console' && (
          <div className={styles.fullWidthPanel}>
            <pre>
              &gt; <span className={styles.consoleCommand}>document.querySelector('.container')</span><br />
              <span className={styles.consoleResult}>&lt;div class="container"&gt;...&lt;/div&gt;</span><br /><br />
              &gt; <span className={styles.consoleCommand}>console.log('Inspector de Elementos');</span><br />
              <span className={styles.consoleResult}>Inspector de Elementos</span>
            </pre>
          </div>
        )}
        {activeTab === 'network' && (
          <div className={styles.fullWidthPanel}>
            <div className={styles.networkTable}>
              <div className={styles.networkHeader}>
                <span>Nombre</span>
                <span>Estado</span>
                <span>Tipo</span>
                <span>Tamaño</span>
                <span>Tiempo</span>
              </div>
              <div className={styles.networkRow}>
                <span>index.html</span>
                <span>200</span>
                <span>html</span>
                <span>5.2 KB</span>
                <span>45 ms</span>
              </div>
              <div className={styles.networkRow}>
                <span>styles.css</span>
                <span>200</span>
                <span>css</span>
                <span>2.1 KB</span>
                <span>23 ms</span>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'performance' && (
          <div className={styles.fullWidthPanel}>
            <div className={styles.performanceGraph}>
              <div className={styles.performanceBar} style={{ height: '60%' }}>
                <span>Carga</span>
              </div>
              <div className={styles.performanceBar} style={{ height: '30%' }}>
                <span>Scripting</span>
              </div>
              <div className={styles.performanceBar} style={{ height: '10%' }}>
                <span>Renderizado</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente para las características
function FeatureItem({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="feature-item">
        <div className={styles.featureIcon}>
          <i className={icon}></i>
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

// Sección principal (hero)
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Inspector de Elementos</h1>
        <p className="hero__subtitle">La herramienta esencial para analizar y modificar HTML, CSS y JavaScript en tiempo real</p>
        <div className={styles.buttons}>
          <Link
            className="inspector-tutorial-button"
            to="/docs/Introducción/intro">
            ¡Aprende ya!
          </Link>
        </div>
        <div className={styles.inspectorPreview}>
          <DevToolsSimulator />
        </div>
      </div>
    </header>
  );
}

// Sección de características
function HomepageFeatures() {
  const features = [
    {
      title: 'Inspeccionar HTML',
      icon: 'fas fa-code',
      description: 'Visualiza y edita el árbol DOM, modifica atributos y estructura HTML en tiempo real.',
    },
    {
      title: 'Analizar CSS',
      icon: 'fas fa-paint-brush',
      description: 'Examina y modifica estilos CSS aplicados, explora la cascada y resuelve conflictos.',
    },
    {
      title: 'Depurar JavaScript',
      icon: 'fas fa-bug',
      description: 'Inspecciona eventos, establece puntos de interrupción y monitorea la ejecución del código.',
    },
    {
      title: 'Auditar Rendimiento',
      icon: 'fas fa-tachometer-alt',
      description: 'Analiza el rendimiento de carga, identifica cuellos de botella y optimiza la velocidad.',
    },
    {
      title: 'Responsive Design',
      icon: 'fas fa-mobile-alt',
      description: 'Prueba tu sitio en diferentes tamaños de pantalla y emula dispositivos móviles.',
    },
    {
      title: 'Accesibilidad',
      icon: 'fas fa-universal-access',
      description: 'Verifica la accesibilidad de tu sitio y asegura la compatibilidad con lectores de pantalla.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.featuresTitle}>Herramientas del Inspector</h2>
          </div>
        </div>
        <div className="row">
          {features.map((props, idx) => (
            <FeatureItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sección de tutoriales o ejemplos
function HomePageTutorials() {
  return (
    <section className={styles.tutorials}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.tutorialsTitle}>Aprende a utilizar el Inspector</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className={styles.tutorialCard}>
              <div className={styles.tutorialCardHeader}>
                <i className="fas fa-laptop-code"></i>
                <h3>Primeros pasos</h3>
              </div>
              <p>Aprende cómo abrir el inspector y explorar los elementos básicos de una página web.</p>
              <Link to="/docs/Introducción/introduccion" className={styles.tutorialLink}>Ver tutorial →</Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.tutorialCard}>
              <div className={styles.tutorialCardHeader}>
                <i className="fas fa-palette"></i>
                <h3>Editar estilos</h3>
              </div>
              <p>Descubre cómo modificar CSS en tiempo real y ver los cambios instantáneamente.</p>
              <Link to="/docs/ver-cambios" className={styles.tutorialLink}>Ver tutorial →</Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.tutorialCard}>
              <div className={styles.tutorialCardHeader}>
                <i className="fas fa-terminal"></i>
                <h3>Uso de la consola</h3>
              </div>
              <p>Aprende a utilizar la consola JavaScript para interactuar con tu página web.</p>
              <Link to="/docs/comandos-basicos" className={styles.tutorialLink}>Ver tutorial →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Página principal
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Inspector de Elementos"
      description="Documentación y tutoriales sobre el Inspector de Elementos del navegador">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomePageTutorials />
      </main>
    </Layout>
  );
}