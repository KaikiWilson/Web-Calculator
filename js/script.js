const calculator = document.querySelector('.box-calculator');
const buttoms = document.querySelector('.box-lineButtoms');

buttoms.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;

        if (!action) {
            alert('number key')
        }

        if ( action === 'add' || action === 'subtract' ||
             action === 'multiply' || action === 'divide') {
                alert('operador key')
             }
    }
})



// Estacio aula:

var number1 = prompt('Insira o primeiro número: ');
var number2 = prompt('Insira o número segundo número: ')

var resultadoDivisao = divida(number1, number2)

alert(`O resultado da divisão é: ${resultadoDivisao}`)

function divida(number1, number2) {
    var resultado = 0

    resultado = number1 / number2

    return resultado
}