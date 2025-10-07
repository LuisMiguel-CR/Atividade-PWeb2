function sum(array) {
    return array.reduce((soma, valor) => soma += valor, 0)
}

function sumOdds(array) {
    return array.filter((i) => i & 1).reduce((soma, valor) => soma += valor, 0)
}

function product(array) {
    //mult funciona como acumulador e o 1 seria o valor incial do contador
    return array.reduce((mult, valor) => mult*valor, 1)
}

export {sum, sumOdds, product}