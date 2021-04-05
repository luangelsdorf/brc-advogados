import React from 'react';

export default function Parallax({ textos }) {
    return (
        <div className="container-fluid p-0 parallax-container text-white flex-center flex-column">
            <strong className="playfair fs-32 d-block">{ textos.parallax_text_1 }</strong>
            <span className="d-block text-center my-20-30" id="parallax-text">
                { textos.parallax_text_2 }
            </span>
            <a className="btn btn-secondary btn-h-50" href="#banner-inferior">Fale com um Advogado</a>
        </div>
    )
}