import React from 'react';
import data from '../../../src/data/data.json';
import AreaCard from "./AreaCard";

export default function Areas({ areas }) {

    return (
        <div className="container-fluid px-0 fundo-areas">
            <div className="container">
                <div className="row g-3">
                    <div className="col-4">
                        <span className="line-title w-max-content">NOSSOS SERVIÇOS</span>
                        <strong className="playfair fs-44 d-block text-escuro mb-3">Áreas de Atuação</strong>
                        <span>
                            Realizando a prestação de serviços jurídicos tanto para empresas como pessoas físicas, o BRC
                            Advogados elabora soluções jurídicas de forma singularizada, estruturando operações empresariais
                        </span>
                    </div>
                    <div className="col-4">
                        <div className="d-flex align-items-end h-100">
                            <span className="d-inline-flex text-2">
                                <span>
                                    de alta complexidade, realizando assessoria jurídica cível, trabalhista e em LGPD,
                                além da atuação em processos perante em todas as instâncias e tribunais espalhados
                                pelo país.
                                </span>
                            </span>
                        </div>
                    </div>

                    {
                        areas.map(area => {
                            return (
                                <AreaCard key={area.id} title={area.titulo} icon={area.icone}>
                                    { area.descricao.substring(0, 95) + '...' }
                                </AreaCard>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}