# Comandos Básicos en la Consola

El panel **Console** en DevTools permite ejecutar comandos JavaScript en tiempo real, lo que es esencial para depurar y verificar el comportamiento de tu código. A continuación, te mostraremos los comandos básicos más comunes para interactuar con la consola.

## 1. **`console.log()`** - Imprimir un mensaje en la consola
El comando `console.log()` es uno de los más utilizados para imprimir mensajes en la consola. Es útil para depurar y verificar el valor de las variables.

**Ejemplo:**
```javascript
let mensaje = "Hola, mundo";
console.log(mensaje);  // Imprime "Hola, mundo"
```

## 2. **`console.error()`** - Imprimir un error
`console.error()` se utiliza para imprimir errores en la consola, lo que te permite identificar y diferenciar los errores de los mensajes normales.

**Ejemplo:**
```javascript
console.error("¡Hubo un error en el script!");
```

## 3. **`console.warn()`** - Imprimir una advertencia
Este comando te permite imprimir una advertencia, lo que es útil para resaltar problemas o situaciones que podrían no ser errores, pero requieren atención.

**Ejemplo:**
```javascript
console.warn("Este método está en desuso");
```

## 4. **`console.table()`** - Imprimir datos en formato tabla
`console.table()` es una forma útil de mostrar datos complejos, como arreglos o objetos, en formato tabla.

**Ejemplo:**
```javascript
let usuarios = [
  {nombre: "Juan", edad: 30},
  {nombre: "Ana", edad: 25},
  {nombre: "Carlos", edad: 28}
];
console.table(usuarios);
```

## 5. **`console.time()` y `console.timeEnd()`** - Medir tiempo de ejecución
Estos comandos son útiles para medir el tiempo de ejecución de un bloque de código.

**Ejemplo:**
```javascript
console.time("Proceso de cálculo");
// Aquí va el código cuyo tiempo de ejecución quieres medir
console.timeEnd("Proceso de cálculo");  // Imprime el tiempo que tardó
```

## 6. **`console.clear()`** - Limpiar la consola
Si tu consola se llena de mensajes, puedes usar `console.clear()` para borrar todo el contenido y dejar la consola limpia.

**Ejemplo:**
```javascript
console.clear();  // Limpia la consola
```

## Conclusión
Estos comandos básicos son fundamentales para depurar tu código y mejorar el flujo de trabajo en el desarrollo web. Usarlos de manera adecuada te ayudará a identificar problemas de forma más eficiente y mejorar tu productividad.
