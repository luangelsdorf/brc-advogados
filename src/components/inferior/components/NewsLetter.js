import React from 'react';

export default function NewsLetter({ textos }) {
    return (
        <div className="col-4 newsletter">
            <div>
                <span className="playfair fs-20 text-dourado d-block">{ textos.nl_title }</span>
                <span className="text-white d-inline-block my-4">{ textos.nl_text }</span>
                <div className="input-group">
                    <input type="text" className="form-control news-input" placeholder={ textos.nl_campo } />
                    <button className="btn btn-primary news-submit" type="button">
                        <span className="fas fa-arrow-right" />
                    </button>
                </div>
            </div>
        </div>
    )
}