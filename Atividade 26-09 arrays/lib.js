//Exercício 8

function sum(nums) {
    let soma = 0
    for (const num of nums) {
        soma += num
    }
    return soma
}

function sumOdds(nums) {
    let soma = 0
    for (const num of nums) {
        if (num%2!==0) {
            soma += num
        }
    }
    return soma
}

function product(nums) {
    let mult = 1
    for (const num of nums) {
        mult  = num * mult
    }
    return mult
}

export { sum, sumOdds, product };

//Exercício 12

function utilitarios(operacao, lista, lista1, lista2) {
    switch (operacao) {
        case 'min':
            lista.sort()
            return lista[0]
        case 'max':
            lista.sort()
            lista.reverse()
            return lista[0]
        case 'range':
            lista_nova = []
            for (const i = 0; i < lista; i++ ) {
                lista_nova[i] = i
            }
            return lista_nova
        case 'zip':

    }
}