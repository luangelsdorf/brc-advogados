import React from 'react';
import Link from "next/link";
import HeadContent from "../../../src/components/HeadContent";
import TopHeader from "../../../src/components/superior/TopHeader";
import FixedHeader from "../../../src/components/superior/FixedHeader";
import BannerSuperior from "../../../src/components/superior/BannerSuperior";
import BannerInferior from "../../../src/components/inferior/BannerInferior";
import SubFooter from "../../../src/components/inferior/SubFooter";
import Footer from "../../../src/components/inferior/Footer";

export default function AreaPage({ area, areas, textos }) {
    return (
        <>
            <TopHeader textos={textos} />
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
                                                <Link scroll={false} href={`/pt/areas/${area.slug}`}>
                                                    <a className=" d-inline-flex justify-content-between w-100" id={`${area.slug}`}>
                                                        <span>{area.titulo}</span>
                                                        <span className="fas fa-angle-right text-normal" />
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
                                        Nós estamos prontos para atender você
                                    </strong>
                                </div>
                                <a href="#banner-inferior" className="btn btn-secondary btn-h-50">Fale com um Advogado</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <BannerInferior textos={textos} areas={areas} />
            <SubFooter areas={areas} textos={textos} />
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

    return {
        props: {
            area, areas, textos
        },
        revalidate: 1
    }
}