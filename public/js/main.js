import { homePage } from "./pages.js";

document.addEventListener('DOMContentLoaded', () => {
    let path = window.location.pathname

    if (path === '/pt' || path === '/en' || path.startsWith('/pt/#') || path.startsWith('/en/#')) {
        homePage()
    }
})