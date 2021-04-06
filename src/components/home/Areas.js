import React from 'react';
import data from '../../../src/data/data.json';
import AreaCard from "./AreaCard";

export default function Areas({ areas, textos }) {

    return (
        <div className="container-fluid px-0 fundo-areas" id="areas-de-atuacao">
            <div className="container">
                <div className="row g-4">
                    <div className="col-8">
                        <div className="d-flex flex-column">
                            <span className="line-title w-max-content">{ textos.areas_title_1 }</span>
                            <strong className="playfair fs-44 d-block text-escuro my-15-50">{ textos.areas_title_2 }</strong>

                            <div className="d-flex">
                                <span className="d-inline-flex pres-text mr-40">
                                    { textos.areas_text_1 }
                                </span>

                                <span className="d-inline-flex pres-text">
                                    { textos.areas_text_2 }
                                </span>
                            </div>
                        </div>
                    </div>

                    {
                        areas.map(area => {
                            return (
                                <AreaCard
                                    key={area.id}
                                    title={area.titulo}
                                    icon={area.icone}
                                    href={`/${textos.lang}/areas-de-atuacao/${area.slug}`}
                                >
                                    { area.card_text }
                                </AreaCard>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}