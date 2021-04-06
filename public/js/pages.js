function homePage() {
    document.getElementById('expand-andre').addEventListener('click', () => {
        document.getElementById('collapse-andre').classList.toggle('active')
    })
    document.getElementById('expand-lucas').addEventListener('click', () => {
        document.getElementById('collapse-lucas').classList.toggle('active')
    })
}

function areasPage(active) {
    document.getElementById(active).style.color = 'rgba(214, 164, 97, 1)'
}

export { homePage, areasPage }