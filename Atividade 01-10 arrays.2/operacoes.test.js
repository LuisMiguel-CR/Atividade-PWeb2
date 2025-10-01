import {it, test} from 'node:test'
import assert from 'node:assert'
import { sum, sumOdds, product } from './arrays2.js'


it('Função sum', () => {
    assert.strictEqual(sum([1,2,3]), 6)
    assert.strictEqual(sum([2,2,2]), 6)
    assert.strictEqual(sum([1,2,3,4,5,6]), 21)
})

it('Função sumOdds', () => {
    assert.strictEqual(sumOdds([1,2,3]), 4)
    assert.strictEqual(sumOdds([2,2,2]), 0)
    assert.strictEqual(sumOdds([1,2,3,4,5,6]), 9)
})

it('Função product', () => {
    assert.strictEqual(product([1,2,3]), 6)
    assert.strictEqual(product([2,2,2]), 8)
    assert.strictEqual(product([1,2,3,4,5,6]), 720)
})