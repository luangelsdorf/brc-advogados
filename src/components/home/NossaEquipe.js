import React from 'react';

export default function NossaEquipe() {
    return (
        <div className="container-fluid px-0 flex-center position-relative" id="nossa-equipe">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5">
                        <span className="line-title w-max-content">NOSSA EQUIPE</span>
                        <strong className="playfair fs-44 d-block text-escuro mb-3">Conheça os Sócios</strong>

                        <div className="mr-30">
                            <div className="mb-4">
                                <span className="text-escuro fs-24 playfair d-block">Lucas Bueno Rios</span>
                                <span className="d-block nossa-equipe-text overflow-hidden" id="collapse-lucas">
                                    Advogado formado pela Pontifícia Universidade Católica de São Paulo, especialista em
                                    Direito Processual Civil pela Coordenadoria Geral de Especialização, Aperfeiçoamento
                                    e Extensão da Pontifícia Universidade Católica de São Paulo, extensão em Propriedade
                                    Intelectual cursada na Harvard University. 10 anos de atuação em direito civil e
                                    empresarial.
                                </span>
                                <a role="button" id="expand-lucas" className="text-dourado">Saiba Mais <span className="fas fa-caret-down ps-1" /></a>
                            </div>
                            <div>
                                <span className="text-escuro fs-24 playfair d-block">André Consentino</span>
                                <span className="d-block nossa-equipe-text overflow-hidden" id="collapse-andre">
                                    Advogado formado pela Universidade Presbiteriana Mackenzie, pós graduado em Direito
                                    Administrativo pela PUC/SP, especialista em Direito Digital pela FGV/SP, possui
                                    ampla experiência no mundo da advocacia empresarial.
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