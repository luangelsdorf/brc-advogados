import React from 'react';

export default function ListaAreas() {
    return (
        <div className="w-max-content text-white">
            <span className="list-title d-block playfair fs-20">Áreas de Atuação</span>
            <div className="d-flex">
                <ul className="first-col">
                    <li className="area-item"><a href="/areas-de-atuacao/consultivo-civil">Consultivo Cível</a></li>
                    <li className="area-item"><a href="/areas-de-atuacao/empresarial-propriedade-intelectual">Empresarial</a></li>
                    <li className="area-item"><a href="/areas-de-atuacao/lgpd">LGPD</a></li>
                    <li className="area-item"><a href="/areas-de-atuacao/direito-administrativo">Direito Administrativo</a></li>
                </ul>
                <ul>
                    <li className="area-item"><a href="/areas-de-atuacao/contencioso-civil">Contencioso Civil</a></li>
                    <li className="area-item"><a href="/areas-de-atuacao/trabalhista-previdenciario">Trabalhista e Previdenciário</a></li>
                    <li className="area-item"><a href="/areas-de-atuacao/direito-e-saude">Direito e Saúde</a></li>
                </ul>
            </div>
        </div>
    )
}