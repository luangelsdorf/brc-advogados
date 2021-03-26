import React from 'react';

export default function ListaAreas() {
    return (
        <div className="w-max-content text-white">
            <span className="list-title d-block playfair fs-20">Áreas de Atuação</span>
            <div className="d-flex">
                <ul className="first-col">
                    <li><a href="#">Direito de Família</a></li>
                    <li><a href="#">Contencioso Cível</a></li>
                    <li><a href="#">Direito Trabalhista</a></li>
                    <li><a href="#">Previdenciário</a></li>
                    <li><a href="#">Direito e Saúde</a></li>
                </ul>
                <ul>
                    <li><a href="#">Propriedade Intelectual</a></li>
                    <li><a href="#">Direito Administrativo</a></li>
                    <li><a href="#">Consultivo Cível e Contratos</a></li>
                    <li><a href="#">Societário</a></li>
                    <li><a href="#">LGPD</a></li>
                </ul>
            </div>
        </div>
    )
}