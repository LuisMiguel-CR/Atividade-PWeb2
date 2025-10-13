import flags from "./bandeiras.js"

function adicionarBandeira(flags) {
    return `
    <div class="bandeira">
        <img src="${flags.image}" alt="${flags.id}">
        <h4>${flags.name}</h4>
    </div>
    `
}

const bandeiras = document.querySelector('#bandeiras')

flags.forEach((flag) => {
    const bandeira = adicionarBandeira(flag)
    bandeiras.insertAdjacentHTML('afterbegin', bandeira)
})
