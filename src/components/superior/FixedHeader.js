import React from 'react';
import {hideNavigation} from "../../../public/js/modules";

export default function FixedHeader({ textos }) {
    const lang = textos.lang

    function handleNavClick() {
        hideNavigation(document.getElementById('navBar'))
    }

    return (
        <header className="fixed-header">
            <nav className="navbar navbar-fixed navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <a href={`/${lang}#home`}>
                        <img src="/img/logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navBar">
                        <div className="nav navbar-nav justify-content-between">
                            <a onClick={ handleNavClick } href={`/${lang}#home`} className="nav-link d-flex align-items-center">{ textos.nb_item_1 }</a>
                            <a onClick={ handleNavClick } href={`/${lang}#sobre-nos`} className="nav-link d-flex align-items-center">{ textos.nb_item_2 }</a>
                            <a onClick={ handleNavClick } href={`/${lang}#areas-de-atuacao`} className="nav-link d-flex align-items-center">{ textos.nb_item_3 }</a>
                            <a onClick={ handleNavClick } href={`/${lang}#nossa-equipe`} className="nav-link d-flex align-items-center">{ textos.nb_item_4 }</a>
                            <a onClick={ handleNavClick } href={`/${lang}/blog`} className="nav-link d-flex align-items-center">{ textos.nb_item_5 }</a>
                            <a onClick={ handleNavClick } href="#banner-inferior" className="nav-link d-flex align-items-center">{ textos.nb_item_6 }</a>
                            {/*<button className="btn btn-primary d-flex d-lg-none w-max-content">{ textos.btn_fale }</button>*/}
                        </div>
                    </div>
                    <a className="btn btn-primary hover-claro d-none d-lg-inline-flex px-3 btn-h-40" href="#banner-inferior">{ textos.btn_fale }</a>
                </div>
            </nav>
        </header>
    )
}