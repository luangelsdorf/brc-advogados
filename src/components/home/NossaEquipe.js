import React from 'react';

export default function NossaEquipe({ textos }) {
    return (
        <div className="container-fluid px-0 flex-center position-relative" id="nossa-equipe">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-xl-5 text-center text-xl-start">
                        <span className="line-title w-max-content">{ textos.ne_title_1 }</span>
                        <strong className="playfair fs-44 d-block text-escuro mb-3">{ textos.ne_title_2 }</strong>

                        <div className="mr-30">
                            <div className="mb-4">
                                <div className="socio-img d-xl-none d-block position-relative overflow-hidden">
                                    <div className="overlay-bottom grad-curto flex-center flex-column">
                                        <span className="text-white fs-24 playfair d-block position-relative z-index-3">Lucas Bueno Rios</span>
                                        <span className="text-dourado">Advogado</span>
                                    </div>
                                    <div className="overlay-bottom grad-longo" />
                                    <img src="/img/foto-lucas.png" alt="Lucas" className="img-fluid" />
                                </div>
                                <span className="text-escuro fs-24 playfair d-none d-xl-block">{ textos.ne_nome_1 }</span>
                                <span className="d-block nossa-equipe-text overflow-hidden" id="collapse-lucas">
                                    { textos.ne_text_1 }
                                </span>
                                <a role="button" id="expand-lucas" className="text-dourado">{ textos.ne_saiba_mais } <svg width="14" height="14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></a>
                            </div>
                            <div>
                                <div className="socio-img d-xl-none d-block position-relative overflow-hidden">
                                    <div className="overlay-bottom grad-curto flex-center flex-column">
                                        <span className="text-white fs-24 playfair d-block position-relative z-index-3">André Consentino</span>
                                        <span className="text-dourado">Advogado</span>
                                    </div>
                                    <div className="overlay-bottom grad-longo" />
                                    <img src="/img/foto-andre.png" alt="André" className="img-fluid" />
                                </div>
                                <span className="text-escuro fs-24 playfair d-none d-xl-block">{ textos.ne_nome_2 }</span>
                                <span className="d-block nossa-equipe-text overflow-hidden" id="collapse-andre">
                                    { textos.ne_text_2 }
                                </span>
                                <a role="button" id="expand-andre" className="text-dourado">{ textos.ne_saiba_mais } <svg width="14" height="14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-7 d-flex">
                        <div className="socio-img d-none d-xl-block position-relative overflow-hidden me-2">
                            <div className="overlay-bottom grad-curto flex-center flex-column">
                                <span className="text-white fs-24 playfair d-block position-relative z-index-3">Lucas Bueno Rios</span>
                                <span className="text-dourado">Advogado</span>
                            </div>
                            <div className="overlay-bottom grad-longo" />
                            <img src="/img/foto-lucas.png" alt="Lucas" className="img-fluid" />
                        </div>
                        <div className="socio-img d-none d-xl-block position-relative overflow-hidden">
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