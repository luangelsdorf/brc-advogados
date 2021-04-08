import React from 'react';

export default function ListaAreas({ textos, areas }) {
    return (
        <div className="w-max-content text-white">
            <span className="list-title d-block playfair fs-20">{ textos.areas_title_2 }</span>
            <div className="d-flex">
                <ul className="first-col">
                    <li className="area-item"><a href={`/${textos.lang}/areas-de-atuacao/consultivo-civil`}>{ areas[0].titulo }</a></li>
                    <li className="area-item"><a href={`/${textos.lang}/areas-de-atuacao/empresarial-propriedade-intelectual`}>{ areas[1].titulo }</a></li>
                    <li className="area-item"><a href={`/${textos.lang}/areas-de-atuacao/lgpd`}>{ areas[2].titulo }</a></li>
                    <li className="area-item"><a href={`/${textos.lang}/areas-de-atuacao/direito-administrativo`}>{ areas[3].titulo }</a></li>
                </ul>
                <ul>
                    <li className="area-item"><a href={`/${textos.lang}/areas-de-atuacao/contencioso-civil`}>{ areas[4].titulo }</a></li>
                    <li className="area-item"><a href={`/${textos.lang}/areas-de-atuacao/trabalhista-previdenciario`}>{ areas[5].titulo }</a></li>
                    <li className="area-item"><a href={`/${textos.lang}/areas-de-atuacao/direito-e-saude`}>{ areas[6].titulo }</a></li>
                </ul>
            </div>
        </div>
    )
}