import React from 'react';

export default function ListaAreas() {
    return (
        <div className="w-max-content text-white">
            <span className="list-title d-block playfair fs-20">Áreas de Atuação</span>
            <div className="d-flex">
                <ul className="first-col">
                    <li className="area-item"><a href="#">Consultivo Cível</a></li>
                    <li className="area-item"><a href="#">Direito Empresarial</a></li>
                    <li className="area-item"><a href="#">LGPD</a></li>
                    <li className="area-item"><a href="#">Direito Administrativo</a></li>
                </ul>
                <ul>
                    <li className="area-item"><a href="#">Contencioso Civil</a></li>
                    <li className="area-item"><a href="#">Trabalhista e Previdenciário</a></li>
                    <li className="area-item"><a href="#">Direito e Saúde</a></li>
                </ul>
            </div>
        </div>
    )
}