import React from 'react';

export default function AreaCard(props) {
    return (
        <div className="col-4 shadow-col">
            <div className="area-card cursor-pointer bg-white">
                <img className="d-block pb-3" src={`/img/area-cards/${props.icon}.svg`} alt={props.icon} />
                <div className="text-escuro playfair fs-22">{props.title}</div>
                <div className="py-4 text-normal">{props.children}</div>
                <a href={`/areas-de-atuacao/${props.href}`} className="ler-mais">Ler Mais <span className="flecha">&rarr;</span></a>
            </div>
        </div>
    )
}