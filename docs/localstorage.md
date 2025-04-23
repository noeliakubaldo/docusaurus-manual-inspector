# Inspección y Gestión de LocalStorage

**LocalStorage** es una forma de almacenamiento web que permite guardar datos de manera persistente en el navegador del usuario. A diferencia de las cookies, LocalStorage tiene una capacidad mucho mayor y los datos no se envían al servidor con cada solicitud HTTP.

En DevTools, puedes acceder al contenido de LocalStorage en el panel **Application**.

## ¿Cómo inspeccionar LocalStorage?
1. Abre el panel **Application** en DevTools.
2. En el menú lateral, selecciona **LocalStorage**.
3. Aquí podrás ver todos los pares clave-valor almacenados en LocalStorage para el dominio de la página web.

## ¿Qué puedes hacer con LocalStorage?
- **Ver datos almacenados**: Puedes examinar los pares clave-valor almacenados en LocalStorage.
- **Eliminar datos**: Puedes eliminar una clave específica haciendo clic derecho sobre ella y seleccionando **"Delete"**.
- **Modificar valores**: Haz doble clic sobre el valor de una clave para modificarlo.
- **Agregar nuevos datos**: Si deseas agregar un nuevo par clave-valor, haz clic derecho y selecciona **"Add"**.

## Beneficios de usar LocalStorage:
- **Guardar preferencias**: Puedes almacenar las preferencias del usuario (como el idioma o el tema oscuro) en LocalStorage para mantenerlas entre sesiones.
- **Mejorar el rendimiento**: Almacena datos en el navegador para evitar realizar solicitudes al servidor repetidamente.
