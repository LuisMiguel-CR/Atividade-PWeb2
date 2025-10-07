function sum(array) {
    return array.reduce((soma, valor) => soma += valor, 0)
}

function sumOdds(array) {
    return array.filter((i) => i & 1).reduce((soma, valor) => soma += valor, 0)
}

function product(array) {
    return array.reduce((mult, valor) => mult*valor, 1)
}

export {sum, sumOdds, product}