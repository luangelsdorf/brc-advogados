import React from 'react';

export default function SobreNos({ textos }) {
    return (
        <div className="container-fluid px-0 flex-center" id="sobre-nos">
            <div className="container">
                <div className="row w-100 align-items-center">
                    <div className="col-6">
                        <span className="line-title w-max-content">{ textos.qs_title_1 }</span>
                        <strong className="playfair fs-44 d-block text-escuro mb-3 lh-60 break-spaces">{ textos.qs_title_2 }</strong>
                        <div className="sobre-nos-text">
                            <p className="mb-3 me-30">
                                { textos.qs_text_1 }
                            </p>
                            <p className="mb-3 me-30">
                                { textos.qs_text_2 }
                            </p>
                            <p className="mb-3 me-30">
                                { textos.qs_text_3 }
                            </p>
                            <a href="#nossa-equipe" className="btn btn-primary btn-h-50 mt-4">
                                { textos.btn_equipe } <img src="/img/icons/long-arrow-alt-down-solid.svg" className="ms-2" width="12" height="12" alt="Flecha"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-6 position-relative">
                        <img src="/img/mosaico.png" className="img-fluid" alt="Mosaico"/>
                    </div>
                </div>
            </div>
        </div>
    )
}