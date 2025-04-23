# Solicitudes HTTP

El panel **Network** de DevTools te permite ver todas las solicitudes HTTP realizadas por la página web. Estas solicitudes incluyen recursos como imágenes, archivos JavaScript, hojas de estilo CSS, fuentes, y más. Analizar estas solicitudes es fundamental para entender cómo una página carga y cómo se gestionan los recursos.

## ¿Cómo funciona el panel Network?
Cuando abres la pestaña **Network**, puedes ver un listado de todas las solicitudes que se hacen desde el navegador al servidor mientras se carga la página. Cada solicitud incluye detalles como el método (GET, POST, etc.), el estado de la solicitud, el tiempo de respuesta y el tamaño del archivo.

## Filtrado de solicitudes
Puedes filtrar las solicitudes por tipo, lo que facilita la localización de ciertos recursos. Por ejemplo, puedes filtrar por **JS**, **XHR**, **Img**, entre otros, para ver solo el tipo de recurso que te interesa.

### Ejemplo:
Cuando cargas una página, verás que el navegador realiza una solicitud para obtener el archivo `index.html`, seguido de solicitudes para cargar imágenes, archivos CSS, y scripts JavaScript.

## ¿Qué se puede analizar?
- **Tiempo de carga**: Muestra el tiempo que tardó cada solicitud.
- **Código de estado**: Informa si la solicitud fue exitosa (código 200) o falló (código 404, 500, etc.).
- **Tamaño del archivo**: Indica el tamaño de cada recurso cargado.
- **Duración**: El tiempo que tarda en completarse cada solicitud.

## Beneficios
Analizar las solicitudes HTTP es útil para:
- Diagnosticar problemas de carga de recursos.
- Verificar que todos los archivos necesarios se están cargando correctamente.
- Depurar problemas con las API al verificar las respuestas de las solicitudes de datos.
