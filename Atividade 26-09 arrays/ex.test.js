import {it, test} from 'node:test';
import assert from 'node:assert';
import {sum, sumOdds, product, utilitarios} from './lib.js'

test('Teste exercício 8', () => {
    it('Deve somar os números de um vetor', () => {
        assert.strictEqual(sum([1,2,3]), 6)
        assert.strictEqual(sum([2,2,2]), 6)
        assert.strictEqual(sum([1,2,3,4,5,6]), 21)
    })

    it('Deve somar os números ímpares de um vetor', () => {
        assert.strictEqual(sumOdds([1,2,3]), 4)
        assert.strictEqual(sumOdds([2,2,2]), 0)
        assert.strictEqual(sumOdds([1,2,3,4,5,6]), 9)
    })

    it ('Deve exibir o produtório dos números de um vetor', () => {
        assert.strictEqual(product([1,2,3]), 6)
        assert.strictEqual(product([2,2,2]), 8)
        assert.strictEqual(product([1,2,3,4,5,6]), 720)
        
    })
})

test('Teste exercício 12', () => {
    it('Retornar o menor número da lista', () => {
        assert.strictEqual(utilitarios('min', [1, 4, 2, 6, 10, 3]), 1);
        assert.strictEqual(utilitarios('min', [1, 4, -1, 6, 10, 3]), -1);
    })
    it('Retornar o maior valor da lista', () => {
        assert.strictEqual(utilitarios('max', [1, 4, 2, 6, 10, 3]), 10);
    })
    it('Criar uma lista nova a partir de determinados parâmetros'), () => {
        assert.strictEqual(utilitarios('range',[10]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        assert.strictEqual(utilitarios('range',[1 ,11]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        assert.strictEqual(utilitarios('range',[0, 30, 5]), [0, 5, 10, 15, 20, 25]);
    }
    it('Concatena as listas', () => {
        assert.deepStrictEqual(utilitarios('zip',[['moe', 'larry'], [30, 40]]), [['moe', 30], ['larry', 40]]);
        assert.deepStrictEqual(utilitarios('zip', [['moe', 'larry', 'curly'] , [30, 40, 50], [true, false, false]]), [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]])
    })
    it('Remover repetições de uma lista', () => {
        assert.deepStrictEqual(utilitarios('uniq', [1, 2, 1, 4, 1, 3]), [1, 2, 3, 4])
        assert.deepStrictEqual(utilitarios('uniq', [1, 2, 1, 3, 3]), [1, 2, 3])
    })
    it('Organizar a lista em ordem crescente', () => {
        assert.deepStrictEqual(utilitarios('sortNum', [1, 3, 2]), [1, 2, 3])
        assert.deepStrictEqual(utilitarios('sortNum', [1, 2, 10, 3, 32]), [1, 2, 3, 10, 32])
    })
    })