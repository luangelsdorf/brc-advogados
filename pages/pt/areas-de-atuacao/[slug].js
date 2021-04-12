import React from 'react';
import Link from "next/link";
import HeadContent from "../../../src/components/HeadContent";
import TopHeader from "../../../src/components/superior/TopHeader";
import FixedHeader from "../../../src/components/superior/FixedHeader";
import BannerSuperior from "../../../src/components/superior/BannerSuperior";
import BannerInferior from "../../../src/components/inferior/BannerInferior";
import SubFooter from "../../../src/components/inferior/SubFooter";
import Footer from "../../../src/components/inferior/Footer";
import FixedWhats from "../../../src/components/FixedWhats";

export default function AreaPage({ area, areas, textos, redes }) {
    return (
        <>
            <FixedWhats />
            <TopHeader textos={textos} redes={redes} />
            <FixedHeader textos={textos} />
            <BannerSuperior title={textos.areas_banner_text_1} subtitle={textos.areas_banner_text_2} btn={false} />

            <HeadContent page="areas" title="áreas de atuação" />
            <div className="container-fluid px-0 flex-center position-relative" id="areas-de-atuacao">
                <img className="img-fluid position-absolute z-index-1" src="/img/themis.png" alt="Desenho"/>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <strong className="d-block text-escuro playfair ps-3 fs-24 mb-4">Áreas de Atuação</strong>
                            <ul className="list-group list-group-flush">

                                {
                                    areas.map(area => {
                                        return (
                                            <li className="list-group-item" key={area.slug}>
                                                <Link scroll={false} href={`/${textos.lang}/areas-de-atuacao/${area.slug}`}>
                                                    <a className=" d-inline-flex justify-content-between align-items-center w-100" id={`${area.slug}`}>
                                                        <span>{area.titulo}</span>
                                                        <div>
                                                            <svg height="12" width="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className="col-8 flex-center flex-column">

                            <div className="flex-center flex-column">
                                <div>
                                    <strong className="d-block text-escuro playfair fs-44 mb-4">{area[0].titulo}</strong>
                                    <span className="area-text" dangerouslySetInnerHTML={{__html: area[0].descricao}} />
                                </div>
                            </div>

                            <div className="bg-dourado estamos-prontos">
                                <div className="prontos-text">
                                    <strong className="text-right d-block fs-24 text-white playfair">
                                        { textos.areas_msg }
                                    </strong>
                                </div>
                                <a href="#banner-inferior" className="btn btn-secondary btn-h-50">{ textos.btn_fale }</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <BannerInferior textos={textos} areas={areas} />
            <SubFooter areas={areas} textos={textos} redes={redes} />
            <Footer textos={textos} />
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:1337/areas')
    const resAreas = await res.json()
    const paths = resAreas.map((area) => ({
        params: { slug: area.slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:1337/areas?slug=${params.slug}`)
    const area = await res.json()

    const resAll = await fetch('http://localhost:1337/areas')
    const areas = await resAll.json()

    const resText = await fetch('http://localhost:1337/pt-textos')
    const textos = await resText.json()

    const resRedes = await fetch('http://localhost:1337/redes-sociais')
    const redes = await resRedes.json()

    return {
        props: {
            area, areas, textos, redes
        },
        revalidate: 1
    }
}