import React from 'react';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <a href="/">
                        <img src="/img/logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navBar">
                        <div className="nav navbar-nav justify-content-between">
                            <a href="/#home" className="nav-link d-flex align-items-center">        Início</a>
                            <a href="/#sobre-nos" className="nav-link d-flex align-items-center">   Sobre Nós</a>
                            <a href="/areas" className="nav-link d-flex align-items-center">        Áreas de Atuação</a>
                            <a href="/#nossa-equipe" className="nav-link d-flex align-items-center">Nossa Equipe</a>
                            <a href="/blog" className="nav-link d-flex align-items-center">         Blog</a>
                            <a href="/#contato" className="nav-link d-flex align-items-center">     Contato</a>
                        </div>
                    </div>
                    <div id="btn-container">
                        <button className="btn rob-btn btn-primary border-radius-0">Faça uma Consulta</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}