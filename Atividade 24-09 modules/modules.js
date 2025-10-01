//Exercício 1
function area_circulo(raio) {
    return 3.141592653589793*(raio**2)
}

export {area_circulo}

// Exercício 2
function soma(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mult(num1, num2) {
    return num1*num2
}

function div(num1, num2) {
    if (num2 != 0) {
        return num1/num2
    } else {
        return 'Não é possível executar divisões por 0'
    }
}

export {soma, sub, mult, div}

//Exercício 3

function e_triangulo(a, b, c) {
    if (a+b>c && a+c>b && c+b>a) {
        return true;
    };
};

function tipo_triangulo(a, b, c) {
    if (e_triangulo(a, b, c) === true) {
        if (a === b === c) {
            return "Triângulo equilátero"
        } if ( a===b || a===c || b===c ) {
            return "Triângulo isósceles"
        } else {
            return "Triângulo escaleno"
        }
    } else {
        return "Não é um triângulo"
    }
}

export {tipo_triangulo}
