import React from 'react';

export default function AreaCard(props) {
    return (
        <div className="col-4">
            <a className="area-card" href="#">
                <img className="d-block pb-3" src={`/img/area-cards/${props.icon}.svg`} alt={props.icon} />
                <div className="text-escuro playfair fs-22">{props.title}</div>
                <div className="py-3 text-normal">{props.children}</div>
                <span className="text-dourado">Ler Mais</span>
            </a>
        </div>
    )
}