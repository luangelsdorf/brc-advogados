import React from 'react';

export default function FaleConosco({ textos }) {
    return (
        <div className="d-flex flex-column text-white">
            <span className="line-title w-max-content">{ textos.contatos_title_1 }</span>
            <strong className="playfair fs-44">{ textos.contatos_title_2 }</strong>
            <span className=" contato-text">
                {textos.contatos_text}
            </span>
            <div className="contatos-content">
                <span className="d-block text-dourado mb-3">CONTATOS</span>
                <div className="d-flex align-items-center">
                    <img src="/img/phone.svg" alt="Phone"/>
                    <span className="ps-3 pe-4">11 3192.3891</span>
                    <img src="/img/mail.svg" alt="Mail"/>
                    <span className="ps-3">contato@brcadv.com</span>
                </div>
            </div>
            <div className="local-content">
                <span className="d-block text-dourado mb-3">LOCALIZAÇÃO</span>
                <div className="d-flex align-items-center">
                    <span className="text-dourado mb-4 fas fa-map-marker-alt" />
                    <span className="ps-3">{ textos.local }</span>
                </div>
            </div>
        </div>
    )
}