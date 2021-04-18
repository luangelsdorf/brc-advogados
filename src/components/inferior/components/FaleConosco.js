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
        <>
            <span className="line-title w-max-content">{ textos.contatos_title_1 }</span>
            <div className="d-flex flex-column text-white">
                <strong className="playfair fs-44">{ textos.contatos_title_2 }</strong>
                <span className=" contato-text">
                {textos.contatos_text}
            </span>
                <div className="contatos-content">
                    <span className="d-block text-dourado mb-3">{ contato }</span>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">
                        <div>
                            <img src="/img/phone.svg" alt="Phone"/>
                            <span className="ps-3 pe-4">{ textos.phone }</span>
                        </div>
                        <div>
                            <img src="/img/mail.svg" alt="Mail"/>
                            <span className="ps-3">{ textos.email }</span>
                        </div>
                    </div>
                </div>
                <div className="local-content">
                    <span className="d-block text-dourado mb-3">{ local }</span>
                    <div className="d-flex align-items-center justify-content-center justify-content-xl-start">
                        <img src="/img/local.svg" alt="Local"/>
                        <span className="ps-3 break-spaces">{ textos.local }</span>
                    </div>
                </div>
            </div>
        </>
    )
}