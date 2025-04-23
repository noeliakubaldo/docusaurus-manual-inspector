# Comandos Avanzados en la Consola

Además de los comandos básicos que vimos anteriormente, existen varios comandos avanzados en la consola que te permiten realizar tareas más complejas, como manipular objetos, controlar el flujo de ejecución o inspeccionar el estado de la aplicación en tiempo real.

## 1. **`console.group()` y `console.groupEnd()`** - Agrupar mensajes
`console.group()` te permite agrupar mensajes de la consola en un solo bloque expandible. Esto es útil cuando tienes muchas salidas y deseas organizar la información para facilitar su lectura.

**Ejemplo:**
```javascript
console.group("Datos de usuario");
console.log("Nombre: Juan");
console.log("Edad: 30");
console.groupEnd();
```

Este comando genera un bloque que puedes expandir o contraer en la consola.

## 2. **`console.count()`** - Contar cuántas veces se ha ejecutado un bloque de código
`console.count()` es útil para contar cuántas veces se ha ejecutado una porción de código. Imprime un contador que se incrementa cada vez que se llama.

**Ejemplo:**
```javascript
for (let i = 0; i < 5; i++) {
  console.count("Iteración");  // Imprime Iteración: 1, Iteración: 2, etc.
}
```

## 3. **`console.assert()`** - Realizar una comprobación de una condición
`console.assert()` permite hacer una comprobación. Si la condición es falsa, se imprime un mensaje en la consola. Si la condición es verdadera, no pasa nada.

**Ejemplo:**
```javascript
let edad = 18;
console.assert(edad >= 18, "La edad no es válida");  // Si la condición es falsa, muestra el mensaje
```

## 4. **`console.dir()`** - Inspeccionar objetos
`console.dir()` te permite inspeccionar un objeto o un elemento en detalle, mostrando sus propiedades y métodos de forma interactiva. Es muy útil cuando trabajas con objetos complejos o DOM.

**Ejemplo:**
```javascript
let usuario = {
  nombre: "Carlos",
  edad: 28,
  mostrarInfo: function() { return `${this.nombre}, ${this.edad} años`; }
};
console.dir(usuario);
```

## 5. **`console.trace()`** - Mostrar el rastro de ejecución
`console.trace()` te permite ver la **pila de llamadas** en el punto donde se invoca, lo que es muy útil para detectar problemas en el flujo de ejecución.

**Ejemplo:**
```javascript
function a() { b(); }
function b() { c(); }
function c() { console.trace("Rastro de ejecución"); }
a();  // Imprime el rastro de ejecución
```

## 6. **`console.memory`** - Inspeccionar el uso de memoria
El objeto `console.memory` te permite inspeccionar el uso de memoria del navegador. Es útil para hacer auditoría de rendimiento y detectar fugas de memoria.

**Ejemplo:**
```javascript
console.log(console.memory);  // Muestra información sobre el uso de memoria
```

## 7. **`console.timeStamp()`** - Crear un marcador de tiempo
El comando `console.timeStamp()` crea un marcador de tiempo en el registro de la consola. Esto puede ser útil para realizar un seguimiento del rendimiento o para marcar puntos específicos en la ejecución del código.

**Ejemplo:**
```javascript
console.timeStamp("Inicio proceso");
// Código
console.timeStamp("Fin proceso");
// La consola mostrará un marcador en esos puntos
```

## Conclusión
Estos comandos avanzados ofrecen un control mucho mayor sobre cómo interactúas con la consola, lo que facilita tareas complejas como depuración avanzada, análisis de rendimiento y monitoreo del flujo de ejecución. Usarlos adecuadamente te permitirá realizar pruebas más detalladas y mejorar la calidad de tu código.
