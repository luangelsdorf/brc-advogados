import React from 'react';
import data from '../../../src/data/data.json';
import AreaCard from "./AreaCard";

export default function Areas({ areas }) {

    return (
        <div className="container-fluid px-0 fundo-areas">
            <div className="container">
                <div className="row g-4">
                    <div className="col-8">
                        <div className="d-flex flex-column">
                            <span className="line-title w-max-content">NOSSOS SERVIÇOS</span>
                            <strong className="playfair fs-44 d-block text-escuro my-15-50">Áreas de Atuação</strong>

                            <div className="d-flex">
                                <span className="d-inline-flex pres-text mr-40">
                                    Realizando a prestação de serviços jurídicos tanto para empresas como pessoas
                                    físicas, o BRC Advogados elabora soluções de forma singularizada, estruturando
                                    operações empresariais de alta
                                </span>

                                <span className="d-inline-flex pres-text">
                                    complexidade, realizando assessoria jurídica cível, trabalhista e em LGPD, além da
                                    atuação em processos perante em todas as instâncias e tribunais espalhados pelo
                                    país.
                                </span>
                            </div>
                        </div>
                    </div>

                    {
                        areas.map(area => {
                            return (
                                <AreaCard key={area.id} title={area.titulo} icon={area.icone}>
                                    { area.descricao.substring(0, 95) + '...    ' }
                                </AreaCard>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}