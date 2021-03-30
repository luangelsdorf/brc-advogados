import React from 'react';

export default function PostCard(props) {
    return (
        <div className="col-4">
            <div>
                <div className="post-card-overlay">
                    <img src={`/img/card-img/${props.img}.png`} alt="Card Img"/>
                    <a href="#" className="categoria px-3">{props.categoria}</a>
                </div>
                <div className="post-card-body flex-center">
                    <div>
                        <span className="d-block text-dourado mt-4">{props.data}</span>
                        <a href="#" className="d-block playfair post-title-link fs-22 mt-4 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                        <span className="d-block mb-3">Lorem ipsum dolor sit amet, consectetur et adipiscing elit, sed do eiusmod quis tempor inunt ut labore et dolore magna aliqua...</span>
                        <a href="#" className="ler-mais">Ler Mais <span className="flecha">&rarr;</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}