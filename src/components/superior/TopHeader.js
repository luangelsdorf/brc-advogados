import React from 'react';
import {useRouter} from "next/router";

export default function TopHeader({ textos, redes }) {
    const lang = textos.lang
    let router = useRouter()
    let path = router.asPath.slice(3)

    let ptClass, enClass
    if (router.asPath.startsWith('/pt')) {
        ptClass = 'active'
        enClass = ''
    } else {
        ptClass = ''
        enClass = 'active'
    }

    let tel
    if (lang === 'pt') {
        tel = 'Fone'
    } else {
        tel = 'Phone'
    }
    return (
        <header className="top-header" id="home">
            <div className="container top-bar d-flex justify-content-between text-white">
                <div className="bar-section my-2">
                    <span className="divisor position-relative fs-13 pe-4">Email: { textos.email }</span>
                    <span className="fs-13 ps-4">{ tel }: { textos.phone }</span>
                </div>
                <div className="bar-section my-2">
                    <div className="divisor position-relative fs-13 pe-4">
                        <a href={redes.facebook} className="bar-link fab fa-facebook-f" />
                        <a href={redes.linkedin} className="bar-link fab fa-linkedin-in px-3" />
                        <a href={redes.instagram} className="bar-link fab fa-instagram" />
                    </div>
                    <div className="fs-13 ps-4">
                        <span className="fas fa-globe pe-2" />
                        <a href={`/pt${path}`} className={`bar-link ${ptClass}`}>PT</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a href={`/en${path}`} className={`bar-link ${enClass}`}>EN</a>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-top navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <a href={`/${lang}#home`}>
                        <img src="/img/logo-extenso.svg" width="300" height="97" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarTop">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center align-self-start" id="navBarTop">
                        <div className="nav navbar-nav justify-content-between text-white">
                            <a href="#home" className="nav-link d-flex align-items-center">{ textos.nb_item_1 }</a>
                            <a href={`/${lang}#sobre-nos`} className="nav-link d-flex align-items-center">{ textos.nb_item_2 }</a>
                            <a href={`/${lang}#areas-de-atuacao`} className="nav-link d-flex align-items-center">{ textos.nb_item_3 }</a>
                            <a href={`/${lang}#nossa-equipe`} className="nav-link d-flex align-items-center">{ textos.nb_item_4 }</a>
                            <a href={`/${lang}/blog`} className="nav-link d-flex align-items-center">{ textos.nb_item_5 }</a>
                            <a href="#banner-inferior" className="nav-link d-flex align-items-center">{ textos.nb_item_6 }</a>
                            <a className="btn btn-primary d-flex d-lg-none w-max-content" href="#banner-inferior">{ textos.btn_fale }</a>
                        </div>
                    </div>
                    <a className="btn btn-primary hover-claro d-none d-lg-inline-flex px-3 btn-h-40 align-self-start" href="#banner-inferior">{ textos.btn_fale }</a>
                </div>
            </nav>
        </header>
    )
}