import React from 'react';

export default function FixedHeader() {
    return (
        <header className="fixed-header">
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <a href="/">
                        <img src="/img/logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navBar">
                        <div className="nav navbar-nav justify-content-between text-claro">
                            <a href="/#home" className="nav-link d-flex align-items-center">Início</a>
                            <a href="/#sobre-nos" className="nav-link d-flex align-items-center">Sobre Nós</a>
                            <a href="/areas" className="nav-link d-flex align-items-center">Áreas de Atuação</a>
                            <a href="/#nossa-equipe" className="nav-link d-flex align-items-center">Nossa Equipe</a>
                            <a href="/blog" className="nav-link d-flex align-items-center">Blog</a>
                            <a href="/#contato" className="nav-link d-flex align-items-center">Contato</a>
                            <button className="btn btn-primary d-flex d-lg-none w-max-content">Faça uma Consulta Gratuita</button>
                        </div>
                    </div>
                    <button className="btn btn-primary d-none d-lg-flex">Faça uma Consulta Gratuita</button>
                </div>
            </nav>
        </header>
    )
}