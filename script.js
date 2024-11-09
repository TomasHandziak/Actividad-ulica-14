function ejecutarEjercicios() {
    // Seleccionar el contenedor de resultados
    let resultados = document.getElementById('resultados');
    resultados.innerHTML = ""; // Limpiar resultados anteriores

    // Ejercicio 1: Variables y Entrada de datos
    let nombre = prompt('Ingresa tu nombre a continuación: ');
    let sueldo = prompt('Ingresa tu sueldo a continuación: ');
    resultados.innerHTML += `Hola ${nombre}, tu sueldo es de: ${sueldo}<br>`;

    // Ejercicio 2: Estructura secuencial para calcular el perímetro de un cuadrado
    let valorlado = prompt('Ingrese el lado del cuadrado en cm:');
    let perimetro = parseInt(valorlado) * 4;
    resultados.innerHTML += `Los lados del cuadrado miden ${valorlado} cm<br>`;
    resultados.innerHTML += `El perímetro del cuadrado es ${perimetro} cm<br>`;

    // Ejercicio 3: Suma y multiplicación de cuatro valores
    let v1 = parseInt(prompt('Ingrese el valor uno:'));
    let v2 = parseInt(prompt('Ingrese el valor dos:'));
    let v3 = parseInt(prompt('Ingrese el valor tres:'));
    let v4 = parseInt(prompt('Ingrese el valor cuatro:'));
    let suma1 = v1 + v2 + v3 + v4;
    let producto1 = v1 * v2 * v3 * v4;
    resultados.innerHTML += `El resultado de la suma es: ${suma1}<br>`;
    resultados.innerHTML += `El resultado de la multiplicación es: ${producto1}<br>`;

    // Ejercicio 4: Condicionales simples - Promedio de notas
    let nota1 = parseInt(prompt('Ingrese nota1:'));
    let nota2 = parseInt(prompt('Ingrese nota2:'));
    let nota3 = parseInt(prompt('Ingrese nota3:'));
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 7) {
        resultados.innerHTML += 'Promocionado<br>';
    } else {
        resultados.innerHTML += 'No promocionado<br>';
    }

    // Ejercicio 5: Condicionales anidadas - Evaluación de un número
    let num = parseInt(prompt('Ingrese un número para evaluar si es positivo, negativo o cero:'));
    if (num > 0) {
        resultados.innerHTML += 'El número es positivo<br>';
    } else if (num < 0) {
        resultados.innerHTML += 'El número es negativo<br>';
    } else {
        resultados.innerHTML += 'El número es 0<br>';
    }

    // Ejercicio 6: Switch - Traducción de palabras
    let palabra = prompt('Ingrese una palabra (casa, mesa, perro o gato):').toLowerCase();
    switch (palabra) {
        case 'casa':
            resultados.innerHTML += 'house<br>';
            break;
        case 'mesa':
            resultados.innerHTML += 'table<br>';
            break;
        case 'perro':
            resultados.innerHTML += 'dog<br>';
            break;
        case 'gato':
            resultados.innerHTML += 'cat<br>';
            break;
        default:
            resultados.innerHTML += 'No ingresó un valor correcto<br>';
    }

    // Ejercicio 7: Bucle while - Mostrar múltiplos de 11
    let valor = 11;
    let contador = 0;
    while (contador < 25) {
        resultados.innerHTML += `valor: ${contador} es: ${valor}<br>`;
        contador++;
        valor += 11;
    }

    // Ejercicio 8: Función con parámetros - Mínimo de tres números
    function obtenerMinimo(num1, num2, num3) {
        return Math.min(num1, num2, num3);
    }
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let numero3 = parseInt(prompt("Ingrese el tercer número:"));
    let resultado = obtenerMinimo(numero1, numero2, numero3);
    resultados.innerHTML += `El menor de los tres números es: ${resultado}<br>`;

    // Ejercicio 9: Estructura repetitiva for - Mostrar los números del 1 al 10
    resultados.innerHTML += 'Números del 1 al 10:<br>';
    for (let i = 1; i <= 10; i++) {
        resultados.innerHTML += i + '<br>';
    }

    // Ejercicio 10: Bucle do/while - Acumulador de suma de números hasta ingresar 0
    let suma = 0;
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un número para sumar (0 para finalizar):"));
        suma += numero;
    } while (numero !== 0);
    resultados.innerHTML += `La suma total de los números ingresados es: ${suma}<br>`;
}
