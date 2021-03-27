import React from 'react';

export default function SobreNos() {
    return (
        <div className="container">
            <div className="row w-100 align-items-center">
                <div className="col-6">
                    <span className="line-title w-max-content">QUEM SOMOS</span>
                    <strong className="playfair fs-44 d-block text-escuro mb-3">O Escritório Bueno Rios & Consentino Advogados</strong>
                    <div className="sobre-nos-text">
                        <p>
                            Localizado no Coração de São Paulo, na Avenida Paulista, é formado por advogados com
                            reconhecida e comprovada capacidade jurídica originada de atuação em renomados escritórios
                            de advocacia ao longo dos anos.
                        </p>
                        <p>
                            Utilizando-se de sua sólida formação acadêmica e vasta experiência, criam soluções jurídicas
                            criativas, eficazes e individualizadas para melhor atender os interesses de seus Clientes.
                        </p>
                        <p>
                            O BRC Advogados possui como sua marca o atendimento individualizado, buscando criar
                            estratégias que se adequem às necessidades de seus clientes, buscando sempre o atendimento
                            célere, eficaz e universal.
                        </p>
                        <button className="btn btn-primary mt-4">Conheça Nossa Equipe &darr;</button>
                    </div>
                </div>

                <div className="col-6 position-relative">
                    <img src="/img/sobre-nos-img.png" alt="" className="img-fluid" />
                    <img src="/img/detalhe-lg.png" alt="" className="detalhe-lg" />
                    <img src="/img/detalhe-sm.png" alt="" className="detalhe-sm" />
                    <div className="brc-square flex-center">
                        <img src="/img/brc-vertical.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}