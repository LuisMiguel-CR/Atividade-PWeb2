//Exercício 1
import { area_circulo } from "./modules.js";

const Ex1 = [1, 10, 20, 12, 15, 45]
console.log(`Exercício1`);

for (const raio of Ex1) {
    console.log(`Área (r = ${raio}) = ${area_circulo(raio)}`)
}


//Exercício 2
import { soma, sub, mult, div } from "./lib.js";
console.log('\nExercício 2')
const Ex2 = [[1 , 1, '+'], [1, 1, '-'], [1, 1, '*'], [1, 1, '/'], [5, 3, '+'], [10, 20, '+'], [10, 4, '-'], [5, 8, '-'], [6, 7, '*'], [12, 10, '*'], [20, 4, '/'], [10, 3, '/'], [0, 5, '+'], [5, 0, '-'], [8, 0, '*'], [0, 7, '/'], [7, 0, '/'], [-5, -3, '+'], [-10, 5, '-'], [4, -3, '*'], [-15, -3, '/'], [2.5, 3.5, '+'], [5.5, 2, '*'], [10, 5, '%'], [7, 2, '^'], [1, 1, 'soma'], ['a', 5, '+'], [5, 'b', '-'], [null, 10, '*'], [8, undefined, '/']]

function calculadora(ex) {
    if (ex[2] === '+') {
        return `${ex[0]} + ${ex[1]} = ${soma(ex[0], ex[1])}`
    } if (ex[2] === '-') {
        return `${ex[0]} - ${ex[1]} = ${sub(ex[0], ex[1])}`
    } if (ex[2] === '*') {
        return `${ex[0]} x ${ex[1]} = ${mult(ex[0], ex[1])}`
    } if (ex[2] === '/') {
        return `${ex[0]} ÷ ${ex[1]} = ${div(ex[0], ex[1])}`
    } else {
        return "Operador inválido"
    }
}

for (const operacao of Ex2) {
    console.log(calculadora(operacao))
}

//Exercício 3

import { tipo_triangulo } from "./lib.js";
console.log('\nExercício 2')

const Ex3 = [[2, 2, 2], [10, 10, 10], [3, 4, 4], [4, 3, 4], [4, 4, 3], [10, 10, 2], [3, 4, 5], [10, 11, 12], [5, 4, 2], [0, 0, 0], [3, 4, -5], [1, 1, 3], [2, 4, 2]]

for (const triangulo of Ex3) {
    console.log(`${triangulo[0]}, ${triangulo[1]}, ${triangulo[2]} = ${tipo_triangulo(triangulo[0], triangulo[1], triangulo[2])}`)
}
