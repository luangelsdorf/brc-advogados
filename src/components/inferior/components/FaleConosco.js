import React from 'react';

export default function FaleConosco() {
    return (
        <div className="d-flex flex-column text-white">
            <span className="line-title w-max-content">CONTATOS</span>
            <strong className="playfair fs-44">Fale Conosco</strong>
            <span className=" contato-text">
                Para entrar em contato com nossos profissionais
                utilize o formulário. Nossa equipe de atendimento
                retornará a sua mensagem o mais breve possível.
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
                    <span className="ps-3">Av. Paulista, 726 - 17º andar, conjunto 1707, Bela Vista - São Paulo / SP | 01310-100</span>
                </div>
            </div>
        </div>
    )
}