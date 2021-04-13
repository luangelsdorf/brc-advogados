import React from 'react';

export default function PostCard(props) {
    return (
        <div className="col-10 col-md-6 col-xl-4">
            <div>
                <div className="post-card-overlay">
                    <img src={props.img} className="w-100 h-100 object-fit-cover" alt="Card Img"/>
                    <a href="#" className="categoria px-3">{props.categoria}</a>
                </div>
                <div className="post-card-body flex-center">
                    <div>
                        <span className="d-block text-dourado mt-4">{props.data}</span>
                        <a href={props.href} className="d-block playfair post-title-link fs-22 mt-4 mb-3">{props.title}</a>
                        <div className="mb-3" dangerouslySetInnerHTML={{__html: props.body}} />
                        <a href={props.href} className="ler-mais">Ler Mais <span className="flecha">&rarr;</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}