import React from 'react';

export default function BannerSuperior({ textos, btn, post }) {
    let displayBtn
    if (btn) {
        displayBtn = 'inline-flex'
    } else {
        displayBtn = 'none'
    }

    let displayContainer
    if (post) {
        displayContainer = 'none'
    } else {
        displayContainer = 'flex'
    }

    return (
        <div className="container-fluid p-0 position-relative d-flex justify-content-center" id="banner-superior">
            <div className={`container text-white h-100 position-absolute d-${displayContainer} align-items-center top-0`}>
                <div id="banner-content">
                    <strong className="playfair fs-72 lh-96 d-block mb-4">{ textos.main_banner_text_1 }</strong>
                    <span className="lh-24 d-block mb-4">{ textos.main_banner_text_2 }</span>
                    <a href="/areas-de-atuacao/consultivo-civel" className={`btn btn-primary btn-h-50 d-${displayBtn}`}>Conheça Nossos Serviços</a>
                </div>
            </div>
        </div>
    )
}