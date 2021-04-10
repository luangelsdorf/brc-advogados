import React from 'react';

export default function Qualidades({ textos, redes }) {
    return (
        <div className="w-max-content">
            <img src="/img/logo.png" alt="Logo" className="d-block" />

            <span className="qualidades">
                { textos.footer_msg }
            </span>

            <div className="d-flex">
                <a href={redes.facebook} className="social-btn">
                    <span className="fab fa-facebook-f" />
                </a>
                <a href={redes.linkedin} className="social-btn mx-2">
                    <span className="fab fa-linkedin-in" />
                </a>
                <a href={redes.instagram} className="social-btn">
                    <span className="fab fa-instagram" />
                </a>
            </div>
        </div>
    )
}