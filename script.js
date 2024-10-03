// Función para calcular el factorial de un número
function calcularFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// Función para manejar el evento de envío del formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('factorialForm');
    const resultDiv = document.getElementById('result');
    const numberInput = document.getElementById('numberInput');
    
    // Evento para manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario recargue la página
        
        const numero = Number(numberInput.value); // Obtiene el valor ingresado
        
        // Verifica si es un número válido
        if (isNaN(numero) || numero < 0) {
            resultDiv.innerHTML = `<p style="color: red;">Por favor, ingresa un número válido y mayor o igual a 0.</p>`;
        } else {
            const resultadoFactorial = calcularFactorial(numero); // Calcula el factorial
            resultDiv.innerHTML = `<p>El factorial de ${numero} es ${resultadoFactorial}</p>`; // Muestra el resultado en el DOM
        }
    });
});
