import React from 'react';
import DefaultSidebarItem from '@theme-original/DocSidebarItem';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de Font Awesome

export default function DocSidebarItem(props) {
  const { item } = props;

  // Verifica si el ítem tiene un ícono en customProps
  const iconClass = item.customProps?.icon;
  
  // Si es un ítem de categoría, añadimos una clase CSS personalizada
  if (item.type === 'category' && iconClass) {
    const clonedItem = {
      ...item,
      className: `${item.className || ''} category-with-icon-${iconClass.replace(/\s+/g, '-')}`
    };
    
    return (
      <>
        <span className="sidebar-item-icon" style={{ 
          position: 'absolute', 
          left: '12px',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          height: '32px' // Altura aproximada de los ítems del menú
        }}>
          <i className={iconClass}></i>
        </span>
        <DefaultSidebarItem {...props} item={clonedItem} />
      </>
    );
  }

  // Para elementos normales (no categorías), mantenemos el estilo original
  if (iconClass) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <i className={iconClass} style={{ marginRight: '8px' }}></i>
        <DefaultSidebarItem {...props} />
      </div>
    );
  }

  // Si no hay ícono, devolvemos el ítem normal
  return <DefaultSidebarItem {...props} />;
}