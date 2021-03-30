import React from 'react';

export default function BannerSuperior({ title, subtitle, btn }) {
    let display
    if (btn) {
        display = 'inline-flex'
    } else {
        display = 'none'
    }

    return (
        <div className="container-fluid p-0 position-relative d-flex justify-content-center" id="banner-superior">
            <div className="container text-white h-100 position-absolute d-flex align-items-center top-0">
                <div>
                    <strong className="playfair fs-72 lh-96 d-block mb-4"> {title} </strong>
                    <span className="lh-24 d-block mb-4"> {subtitle} </span>
                    <a href="/areas-de-atuacao/consultivo-civel" className={`btn btn-primary btn-h-50 d-${display}`}>Conheça Nossos Serviços</a>
                </div>
            </div>
        </div>
    )
}