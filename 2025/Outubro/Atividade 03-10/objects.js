 class Exam {
    #answer
    #weight
    #exams

    constructor(answer, weight) {
        this.#answer = answer
        this.#weight = weight 
        this.#exams = []
    }

    getAnswer() {
        return this.#answer 
    }

    getWeight() {
        return this.#weight
    }

    add(exam) {
        exam.grade = Object.keys(exam.values).reduce((acc, q) => {
            return acc += (exam.values[q] == this.#answer.values[q]) ? this.#weight[q] : 0;
        }, 0)
        this.#exams.push(exam)
    }

    avg() {
        let soma = this.#exams.reduce((acc, p) => {
            return (acc += p.grade)
        }, 0)
        return soma/this.#exams.length
    }

    min(count = 1) {
        const menores = this.#exams.map((p) => p.grade)
        menores.sort((a, b) => a-b)
        return menores.slice(0, count)
    }

    max(count = 1) {
        const menores = this.#exams.map((p) => p.grade)
        menores.sort((a, b) => b-a)
        return menores.slice(0, count)
    }

    lt(valor = 0) {
        const les_than = this.#exams.map((p) => p.grade).filter((grade) => grade < valor)
        return les_than
    }

    gt(valor = 0) {
        const les_than = this.#exams.map((p) => p.grade).filter((grade) => grade > valor)
        return les_than
    }

} 

export { Exam }