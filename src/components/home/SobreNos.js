import React from 'react';

export default function SobreNos() {
    return (
        <div className="container-fluid px-0 flex-center" id="sobre-nos">
            <div className="container">
                <div className="row w-100 align-items-center">
                    <div className="col-6">
                        <span className="line-title w-max-content">QUEM SOMOS</span>
                        <strong className="playfair fs-44 d-block text-escuro mb-3 lh-60">O Escritório Bueno Rios <br /> & Consentino Advogados</strong>
                        <div className="sobre-nos-text">
                            <p>
                                Localizado no Coração de São Paulo, na Avenida Paulista, é formado por {/*<br />*/}
                                advogados com reconhecida e comprovada capacidade jurídica originada {/*<br />*/}
                                de atuação em renomados escritórios de advocacia ao longo dos anos.
                            </p>
                            <p>
                                Utilizando-se de sua sólida formação acadêmica e vasta experiência, {/*<br />*/}
                                os advogados criam soluções jurídicas criativas, eficazes e individualizadas {/*<br />*/}
                                para melhor atender os interesses de seus Clientes.
                            </p>
                            <p>
                                O BRC Advogados possui como sua marca o atendimento individualizado, {/*<br />*/}
                                buscando criar estratégias que se adequem às necessidades de seus {/*<br />*/}
                                clientes, buscando sempre o atendimento célere, eficaz e universal.
                            </p>
                            <a href="/#nossa-equipe" className="btn btn-primary btn-h-50 mt-4">Conheça Nossa Equipe &darr;</a>
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