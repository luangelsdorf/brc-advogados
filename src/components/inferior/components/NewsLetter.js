import React from 'react';

export default function NewsLetter({ textos }) {
    return (
        <div className="newsletter">
            <div>
                <span className="playfair fs-20 text-dourado d-block">{ textos.nl_title }</span>
                <span className="text-white d-inline-block my-4">{ textos.nl_text }</span>
                <div className="input-group">
                    <input type="text" className="form-control news-input" placeholder={ textos.nl_campo } />
                    <button className="btn btn-primary news-submit justify-content-center" type="button">
                        <svg height="12" width="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}