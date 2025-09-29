import {it, test} from 'node:test';
import assert from 'node:assert';
import {sum, sumOdds, product} from './lib.js'

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
    
})