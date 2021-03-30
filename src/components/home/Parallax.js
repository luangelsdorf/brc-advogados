import React from 'react';

export default function Parallax() {
    return (
        <div className="container-fluid p-0 parallax-container text-white flex-center flex-column">
            <strong className="playfair fs-32 d-block">Nós estamos prontos para atender você</strong>
            <span className="d-block mt-3 mb-4">
                Converse com um de nossos advogados e encontraremos a <br />
                melhor solução possível para seu caso!
            </span>
            <a className="btn btn-secondary btn-h-50" href="#banner-inferior">Fale com Advogado</a>
        </div>
    )
}