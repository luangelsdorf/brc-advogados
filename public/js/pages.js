function homePage() {
    document.getElementById('expand-andre').addEventListener('click', () => {
        document.getElementById('collapse-andre').classList.toggle('active')
    })
    document.getElementById('expand-lucas').addEventListener('click', () => {
        document.getElementById('collapse-lucas').classList.toggle('active')
    })
}

export { homePage }