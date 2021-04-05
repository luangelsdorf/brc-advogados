import React from 'react';

export default function Qualidades({ textos }) {
    return (
        <div className="w-max-content">
            <img src="/img/logo.png" alt="Logo" className="d-block" />

            <span className="qualidades">
                { textos.footer_msg }
            </span>

            <div className="d-flex">
                <a href="https://facebook.com" className="social-btn">
                    <span className="fab fa-facebook-f" />
                </a>
                <a href="https://linkedin.com" className="social-btn mx-2">
                    <span className="fab fa-linkedin-in" />
                </a>
                <a href="https://instagram.com" className="social-btn">
                    <span className="fab fa-instagram" />
                </a>
            </div>
        </div>
    )
}