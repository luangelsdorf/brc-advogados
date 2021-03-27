import React from 'react';

export default function NossaEquipe() {
    return (
        <div className="container-fluid p-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5">
                        <span className="line-title w-max-content">NOSSA EQUIPE</span>
                        <strong className="playfair fs-44 d-block text-escuro mb-3">Conheça os Sócios</strong>
                        <div className="mb-4">
                            <span className="text-escuro fs-24 playfair d-block">Lucas Bueno Rios</span>
                            <span className="d-block my-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...
                        </span>
                            <a href="#" className="text-dourado">Saiba Mais <span className="fas fa-caret-down ps-1" /></a>
                        </div>
                        <div>
                            <span className="text-escuro fs-24 playfair d-block">André Consentino</span>
                            <span className="d-block my-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...
                        </span>
                            <a href="#" className="text-dourado">Saiba Mais <span className="fas fa-caret-down ps-1" /></a>
                        </div>
                    </div>


                    <div className="col-7 d-flex">
                        <div className="socio-img position-relative overflow-hidden me-2">
                            <div className="overlay-bottom grad-curto flex-center flex-column">
                                <span className="text-white fs-24 playfair d-block position-relative z-index-3">Lucas Bueno Rios</span>
                                <span className="text-dourado">Advogado</span>
                            </div>
                            <div className="overlay-bottom grad-longo" />
                            <img src="/img/foto-lucas.png" alt="Lucas" className="img-fluid" />
                        </div>
                        <div className="socio-img position-relative overflow-hidden">
                            <div className="overlay-bottom grad-curto flex-center flex-column">
                                <span className="text-white fs-24 playfair d-block position-relative z-index-3">André Consentino</span>
                                <span className="text-dourado">Advogado</span>
                            </div>
                            <div className="overlay-bottom grad-longo" />
                            <img src="/img/foto-andre.png" alt="André" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}