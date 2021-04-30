import React from 'react';
import { hideNavigation } from "../../../public/js/modules";
import Link from "next/link";

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
                            <Link href={`/${lang}#home`}>
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center">{ textos.nb_item_1 }</a>
                            </Link>
                            <Link href={`/${lang}#sobre-nos`}>
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center">{ textos.nb_item_2 }</a>
                            </Link>
                            <Link href={`/${lang}#areas-de-atuacao`}>
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center">{ textos.nb_item_3 }</a>
                            </Link>
                            <Link href={`/${lang}#nossa-equipe`}>
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center">{ textos.nb_item_4 }</a>
                            </Link>
                            <Link href={`/${lang}/blog`}>
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center">{ textos.nb_item_5 }</a>
                            </Link>
                            <Link href="#banner-inferior">
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center">{ textos.nb_item_6 }</a>
                            </Link>
                            {/*<button className="btn btn-primary d-flex d-lg-none w-max-content">{ textos.btn_fale }</button>*/}
                        </div>
                    </div>
                    <Link href="#banner-inferior">
                        <a className="btn btn-primary d-none d-lg-inline-flex px-3 btn-h-40">{ textos.btn_fale }</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}