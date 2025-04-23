# Depuración de JavaScript con Breakpoints

Los **breakpoints** son puntos de interrupción en el código JavaScript donde puedes pausar la ejecución del script para inspeccionar el estado actual del programa. Esto es extremadamente útil para depurar errores y entender cómo se está ejecutando tu código.

## ¿Cómo utilizar los breakpoints?
1. Abre el panel **Sources** en DevTools.
2. Navega a la pestaña **"File Navigator"** y selecciona el archivo JavaScript donde quieres poner el breakpoint.
3. Haz clic en el número de la línea donde deseas colocar el breakpoint. Verás un marcador azul en esa línea, lo que indica que el breakpoint está activo.

### Tipos de breakpoints:
- **Breakpoints de línea**: Se activan cuando la ejecución llega a esa línea de código.
- **Breakpoints condicionales**: Puedes agregar condiciones para que el breakpoint solo se active si se cumple una condición específica. Haz clic derecho en un breakpoint y selecciona **"Edit breakpoint"** para agregar una condición.
- **Breakpoints de función**: Se activan cuando se llama a una función específica. Puedes poner un breakpoint directamente sobre el nombre de la función en el código.

## ¿Cómo usar breakpoints para depurar?
1. Coloca un breakpoint en el código donde sospeches que puede haber un error.
2. Recarga la página y reproduce el comportamiento del error.
3. Cuando la ejecución se detenga en el breakpoint, puedes inspeccionar las variables, el estado del objeto `this`, y el **call stack**.

### Ejemplo:
```javascript
function calcularSuma(a, b) {
  return a + b;
}
let resultado = calcularSuma(5, 10); // Establece un breakpoint aquí
console.log(resultado);
```

## Beneficios de usar breakpoints:
- **Detección de errores**: Los breakpoints te permiten identificar exactamente en qué parte del código se produce el error.
- **Inspección en tiempo real**: Puedes inspeccionar valores de variables y objetos durante la ejecución del código.
