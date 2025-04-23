# Inspección y Gestión de SessionStorage

**SessionStorage** es similar a LocalStorage, pero los datos almacenados en SessionStorage solo están disponibles durante la duración de la sesión de navegación. Una vez que el navegador o la pestaña se cierran, los datos de SessionStorage se eliminan automáticamente.

El panel **Application** en DevTools también te permite inspeccionar y modificar el contenido de SessionStorage.

## ¿Cómo inspeccionar SessionStorage?
1. Abre el panel **Application** en DevTools.
2. En el menú lateral, selecciona **SessionStorage**.
3. Aquí podrás ver todos los pares clave-valor almacenados en SessionStorage para el dominio de la página web.

## ¿Qué puedes hacer con SessionStorage?
- **Ver datos almacenados**: Puedes examinar los pares clave-valor almacenados en SessionStorage.
- **Eliminar datos**: Puedes eliminar una clave específica haciendo clic derecho sobre ella y seleccionando **"Delete"**.
- **Modificar valores**: Haz doble clic sobre el valor de una clave para modificarlo.
- **Agregar nuevos datos**: Si deseas agregar un nuevo par clave-valor, haz clic derecho y selecciona **"Add"**.

## Beneficios de usar SessionStorage:
- **Almacenamiento temporal**: Guarda datos específicos de una sesión sin necesidad de hacer persistente la información entre sesiones.
- **Uso para formularios**: Puedes almacenar temporalmente la información de un formulario mientras el usuario navega entre páginas sin perder sus datos.
