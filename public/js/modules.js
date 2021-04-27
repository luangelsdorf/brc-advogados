export function formatCategories(categorias) {
    let categories = []
    categorias.map(categoria => {
        categories.push(categoria.nome)
    })
    return categories.join(', ')
}

export function filterPosts(e) {
    const value = e.target.value
    const cards = document.querySelectorAll('.post-card')


    cards.forEach(card => {
        if (card.children[0].children[0].children[1].innerHTML.includes(value)) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
}

export function hideNavigation(element) {
    let bsCollapse = new bootstrap.Collapse(element)
    bsCollapse.hide()
}