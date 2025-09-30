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

function utilitarios(operacao, lista) {
    switch (operacao) {
        case 'min':
            return Math.min(...lista)
        case 'max':
            return Math.max(...lista)
        case 'range':
            lista_nova = []
            if (typeof lista === 'number') {
                for (const i = 0; i < lista; i++ ) {
                lista_nova[i] = i
                }
                return lista_nova
            } if (lista.length() === 2) {
                for (const i = lista[0]; i < lista[1]; i++){
                    lista_nova.push(i)
                }
                return lista_nova
            } if (lista.length() === 3) {
                for (const i = lista[0]; i < lista[1]; i += lista[2]) {
                    lista_nova.push(i)
                }
                return lista_nova
            }
        case 'zip':
            const quant_listas = lista.length;
            if (quant_listas === 2) {
                const nova_lista = [[lista[0][0],lista[1][0]], [lista[0][1] , lista[1][1]]]
                return nova_lista

            } if (quant_listas === 3) {
                const nova_lista = [[lista[0][0], lista[1][0], lista[2][0]], [lista[0][1], lista[1][1], lista[2][1]], [lista[0][2], lista[1][2], lista[2][2]]]
                return nova_lista
            }
        case 'uniq':
            lista.sort()
            let nova_lista = []
            for (const item of lista) {
                if (nova_lista.includes(item) != true) {
                    nova_lista.push(item)
                }
            }
            return nova_lista
        case 'sortNum':
            lista.sort((a, b) => a - b)
            return lista
    }
}

export {utilitarios};

console.log(utilitarios('max', [1, 4, 2, 6, 10, 3]))