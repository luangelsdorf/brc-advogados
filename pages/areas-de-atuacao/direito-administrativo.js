import React from 'react';
import MainLayout from "../../src/layouts/MainLayout";
import AreasLayout from "../../src/layouts/AreasLayout";
import HeadContent from "../../src/components/HeadContent";

export default function ConsultivoCivel({ areas }) {
    const pageData = areas[3]
    return (
        <MainLayout>
            <AreasLayout>
                <>
                    <HeadContent title="BRC Advogados" page="areas" />
                    <div className="flex-center flex-column">
                        <div>
                            <strong className="d-block text-escuro playfair fs-44 mb-4">{pageData.titulo}</strong>
                            <span className="area-text">{pageData.descricao}</span>
                        </div>
                    </div>
                </>
            </AreasLayout>
        </MainLayout>
    )
}

export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:1337/areas`)
    const areas = await response.json()

    return { props: { areas } }
}