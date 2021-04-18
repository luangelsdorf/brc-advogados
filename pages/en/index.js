import React from "react";
import HeadContent from "../../src/components/HeadContent";
import MainLayout from "../../src/layouts/MainLayout";
import SobreNos from "../../src/components/home/SobreNos";
import NossaEquipe from "../../src/components/home/NossaEquipe";
import Parallax from "../../src/components/home/Parallax";
import Areas from "../../src/components/home/Areas";
import Recentes from "../../src/components/home/Recentes";
import TopHeader from "../../src/components/superior/TopHeader";
import FixedHeader from "../../src/components/superior/FixedHeader";
import BannerSuperior from "../../src/components/superior/BannerSuperior";
import BannerInferior from "../../src/components/inferior/BannerInferior";
import SubFooter from "../../src/components/inferior/SubFooter";
import Footer from "../../src/components/inferior/Footer";
import FixedWhats from "../../src/components/FixedWhats";



export default function Home({ areas, posts, textos, redes }) {
    return (
        <>
            <HeadContent title="BRC Advogados" page="home" />
            <FixedWhats />
            <TopHeader textos={textos} redes={redes} />
            <FixedHeader textos={textos} />
            <BannerSuperior btn_text={textos.btn_servicos} title={textos.main_banner_text_1} subtitle={textos.main_banner_text_2} btn={true} />

            <div className="container-fluid p-0 position-relative home">
                <img src="/img/parallax.png" className="parallax" loading="lazy" alt=""/>
                <SobreNos textos={textos} />
                <NossaEquipe textos={textos} />
                <Parallax textos={textos} />
                <Areas textos={textos} areas={areas} />
                <Recentes textos={textos} posts={posts} />
            </div>

            <BannerInferior textos={textos} areas={areas} />
            <SubFooter areas={areas} textos={textos} redes={redes} />
            <Footer redes={redes} textos={textos} />
        </>
    )
}

export async function getStaticProps() {
    const responseAreas = await fetch(`https://brcadv.com/api/en-areas`)
    const areas = await responseAreas.json()

    const  responsePosts  = await fetch('https://brcadv.com/api/en-posts')
    const posts = await responsePosts.json()

    const  responseTextos  = await fetch('https://brcadv.com/api/en-textos')
    const textos = await responseTextos.json()

    const resRedes = await fetch('https://brcadv.com/api/redes-sociais')
    const redes = await resRedes.json()

    return {
        props: {
            areas, posts, textos, redes
        },
        revalidate: 1
    }
}