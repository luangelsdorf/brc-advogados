import React from 'react';

export default function TopHeader() {
    return (
        <header className="top-header" id="top-header">
            <div className="container top-bar d-flex justify-content-between text-white">
                <div className="bar-section my-2">
                    <span className="divisor position-relative fs-13 pe-4">Email: contato@brcadv.com</span>
                    <span className="fs-13 ps-4">Fone: +55 11 3192-3891</span>
                </div>
                <div className="bar-section my-2">
                    <div className="divisor position-relative fs-13 pe-4">
                        <a href="https://facebook.com" className="bar-link fab fa-facebook-f" />
                        <a href="https://linkedin.com" className="bar-link fab fa-linkedin-in px-3" />
                        <a href="https://instagram.com" className="bar-link fab fa-instagram" />
                    </div>
                    <div className="fs-13 ps-4">
                        <span className="fas fa-globe pe-2" />
                        <a href="#" className="bar-link">PT</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a href="#" className="bar-link">EN</a>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <a href="/">
                        <img src="/img/logo-extenso.svg" width="300" height="97" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarTop">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navBarTop">
                        <div className="nav navbar-nav justify-content-between text-white">
                            <a href="/#top-header" className="nav-link d-flex align-items-center">Início</a>
                            <a href="/#sobre-nos" className="nav-link d-flex align-items-center">Sobre Nós</a>
                            <a href="/areas-de-atuacao/consultivo-civel" className="nav-link d-flex align-items-center">Áreas de Atuação</a>
                            <a href="/#nossa-equipe" className="nav-link d-flex align-items-center">Nossa Equipe</a>
                            <a href="/blog" className="nav-link d-flex align-items-center">Blog</a>
                            <a href="/#banner-inferior" className="nav-link d-flex align-items-center">Contato</a>
                            <button className="btn btn-primary d-flex d-lg-none w-max-content">Faça uma Consulta Gratuita</button>
                        </div>
                    </div>
                    <a className="btn btn-primary hover-claro d-none d-lg-inline-flex px-3 btn-h-40" href="#banner-inferior">Fale com um Advogado</a>
                </div>
            </nav>
        </header>
    )
}