import React from 'react';
import Link from "next/link";

export default function ListaAreas({ textos, areas }) {
    return (
        <div className="text-white px-3">
            <span className="list-title d-block playfair fs-20 text-center text-lg-start">{ textos.areas_title_2 }</span>
            <div className="d-flex justify-content-center justify-content-lg-start">
                <ul className="first-col">
                    <li className="area-item">
                        <Link href={`/${textos.lang}/areas-de-atuacao/consultivo-civil`}>
                            <a>{ areas[0].titulo }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.lang}/areas-de-atuacao/direito-empresarial`}>
                            <a>{ areas[1].titulo }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.lang}/areas-de-atuacao/lgpd`}>
                            <a>{ areas[2].titulo }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.lang}/areas-de-atuacao/direito-administrativo`}>
                            <a>{ areas[3].titulo }</a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className="area-item">
                        <Link href={`/${textos.lang}/areas-de-atuacao/contencioso-civil`}>
                            <a>{ areas[4].titulo }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.lang}/areas-de-atuacao/trabalhista-previdenciario`}>
                            <a>{ areas[5].titulo }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.lang}/areas-de-atuacao/direito-e-saude`}>
                            <a>{ areas[6].titulo }</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}