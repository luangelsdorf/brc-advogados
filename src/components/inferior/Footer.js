import React from 'react';

export default function Footer({ textos }) {
    return (
        <footer className="flex-center bg-claro w-100">
            <span className="text-white fs-13">{ textos.footer_text }</span>
        </footer>
    )
}