import React from 'react';

export default function FaleConosco({ textos }) {
    let contato, local
    if (textos.lang === 'pt') {
        contato = 'CONTATOS'
        local = 'LOCALIZAÇÃO'
    } else {
        contato = 'CONTACT'
        local = 'LOCATION'
    }
    return (
        <div className="d-flex flex-column text-white">
            <span className="line-title w-max-content">{ textos.contatos_title_1 }</span>
            <strong className="playfair fs-44">{ textos.contatos_title_2 }</strong>
            <span className=" contato-text">
                {textos.contatos_text}
            </span>
            <div className="contatos-content">
                <span className="d-block text-dourado mb-3">{ contato }</span>
                <div className="d-flex align-items-center">
                    <img src="/img/phone.svg" alt="Phone"/>
                    <span className="ps-3 pe-4">{ textos.phone }</span>
                    <img src="/img/mail.svg" alt="Mail"/>
                    <span className="ps-3">{ textos.email }</span>
                </div>
            </div>
            <div className="local-content">
                <span className="d-block text-dourado mb-3">{ local }</span>
                <div className="d-flex align-items-center">
                    <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="text-dourado svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                    <span className="ps-3 break-spaces">{ textos.local }</span>
                </div>
            </div>
        </div>
    )
}