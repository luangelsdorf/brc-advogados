import React from "react";
import HeadContent from "../src/components/HeadContent";
import MainLayout from "../src/layouts/MainLayout";
import SobreNos from "../src/components/home/SobreNos";
import NossaEquipe from "../src/components/home/NossaEquipe";
import Parallax from "../src/components/home/Parallax";
import Areas from "../src/components/home/Areas";
import Recentes from "../src/components/home/Recentes";
import TopHeader from "../src/components/superior/TopHeader";
import FixedHeader from "../src/components/superior/FixedHeader";
import BannerSuperior from "../src/components/superior/BannerSuperior";
import BannerInferior from "../src/components/inferior/BannerInferior";
import SubFooter from "../src/components/inferior/SubFooter";
import Footer from "../src/components/inferior/Footer";



export default function Home({ areas }) {
    console.log(areas)
    return (
        <>
            <TopHeader />
            <FixedHeader />
            <BannerSuperior title={<span>Atendimento <br/> Ágil e Eficaz</span>} subtitle={<span>Atendimento individualizado, buscando criar estratégias <br/> que se adequem às necessidades de seus clientes</span>} btn={true} home={true} />

            <div className="container-fluid p-0 position-relative home">
                <HeadContent title="BRC Advogados" page="home" />
                <img src="/img/parallax.png" className="parallax" alt=""/>

                <SobreNos />
                <NossaEquipe />
                <Parallax />
                <Areas areas={areas} />
                <Recentes />
            </div>

            <BannerInferior areas={areas} />
            <SubFooter />
            <Footer />
        </>
    )
}

export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:1337/areas`)
    const areas = await response.json()

    return { props: { areas } }
}