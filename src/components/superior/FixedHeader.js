import React from 'react';

export default function FixedHeader() {
    return (
        <header className="fixed-header">
            <nav className="navbar navbar-fixed navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <a href="/">
                        <img src="/img/logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navBar">
                        <div className="nav navbar-nav justify-content-between text-claro">
                            <a href="#top-header" className="nav-link d-flex align-items-center">Início</a>
                            <a href="/#sobre-nos" className="nav-link d-flex align-items-center">Sobre Nós</a>
                            <a href="/areas-de-atuacao/consultivo-civel" className="nav-link d-flex align-items-center">Áreas de Atuação</a>
                            <a href="/#nossa-equipe" className="nav-link d-flex align-items-center">Nossa Equipe</a>
                            <a href="/blog" className="nav-link d-flex align-items-center">Blog</a>
                            <a href="#banner-inferior" className="nav-link d-flex align-items-center">Contato</a>
                            <button className="btn btn-primary d-flex d-lg-none w-max-content">Faça uma Consulta Gratuita</button>
                        </div>
                    </div>
                    <a className="btn btn-primary hover-claro d-none d-lg-inline-flex px-3 btn-h-40" href="#banner-inferior">Fale com um Advogado</a>
                </div>
            </nav>
        </header>
    )
}