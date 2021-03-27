import React from 'react';

export default function PostCard(props) {
    return (
        <div className="col-4">
            <div>
                <div className="post-card-overlay">
                    <img src={`/img/card-img/${props.img}.png`} alt="Card Img"/>
                    <span className="categoria">{props.categoria}</span>
                </div>
                <div className="post-card-body flex-center">
                    <div>
                        <span className="d-block text-dourado mt-4">{props.data}</span>
                        <span className="d-block playfair text-escuro fs-22 mt-4 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        <span className="d-block mb-3">Lorem ipsum dolor sit amet, consectetur et adipiscing elit, sed do eiusmod quis tempor inunt ut labore et dolore magna aliqua...</span>
                        <a href="#" className="text-dourado">Ler Mais</a>
                    </div>
                </div>
            </div>
        </div>
    )
}