import React from 'react';

export default function NewsLetter() {
    return (
        <div className="newsletter">
            <div>
                <span className="playfair fs-20 text-dourado d-block">Newsletter</span>
                <span className="text-white d-inline-block my-4">Inscreva-se para receber nossas últimas notícias e artigos.</span>
                <div className="input-group">
                    <input type="text" className="form-control news-input" placeholder="Insira seu E-mail" />
                    <button className="btn btn-primary news-submit" type="button">
                        <span className="fas fa-arrow-right" />
                    </button>
                </div>
            </div>
        </div>
    )
}