import React from 'react';

export default function NossaEquipe({ textos }) {
    return (
        <div className="container-fluid px-0 flex-center position-relative" id="nossa-equipe">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5">
                        <span className="line-title w-max-content">{ textos.ne_title_1 }</span>
                        <strong className="playfair fs-44 d-block text-escuro mb-3">{ textos.ne_title_2 }</strong>

                        <div className="mr-30">
                            <div className="mb-4">
                                <span className="text-escuro fs-24 playfair d-block">{ textos.ne_nome_1 }</span>
                                <span className="d-block nossa-equipe-text overflow-hidden" id="collapse-lucas">
                                    { textos.ne_text_1 }
                                </span>
                                <a role="button" id="expand-lucas" className="text-dourado">Saiba Mais <span className="fas fa-caret-down ps-1" /></a>
                            </div>
                            <div>
                                <span className="text-escuro fs-24 playfair d-block">{ textos.ne_nome_2 }</span>
                                <span className="d-block nossa-equipe-text overflow-hidden" id="collapse-andre">
                                    { textos.ne_text_2 }
                                </span>
                                <a role="button" id="expand-andre" className="text-dourado">Saiba Mais <span className="fas fa-caret-down ps-1" /></a>
                            </div>
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