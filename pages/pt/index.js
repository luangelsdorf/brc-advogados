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



export default function Home({ areas, posts, textos }) {
    console.log(textos)
    return (
        <>
            <TopHeader textos={textos} />
            <FixedHeader textos={textos} />
            <BannerSuperior title={textos.main_banner_text_1} subtitle={textos.main_banner_text_2} btn={true} />

            <div className="container-fluid p-0 position-relative home">
                <HeadContent title="BRC Advogados" page="home" />
                <img src="/img/parallax.png" className="parallax" alt=""/>

                <SobreNos textos={textos} />
                <NossaEquipe textos={textos} />
                <Parallax textos={textos} />
                <Areas textos={textos} areas={areas} />
                <Recentes textos={textos} posts={posts} />
            </div>

            <BannerInferior textos={textos} areas={areas} />
            <SubFooter areas={areas} textos={textos} />
            <Footer textos={textos} />
        </>
    )
}

export async function getStaticProps() {
    const responseAreas = await fetch(`http://localhost:1337/areas`)
    const areas = await responseAreas.json()

    const  responsePosts  = await fetch('http://localhost:1337/posts')
    const posts = await responsePosts.json()

    const  responseTextos  = await fetch('http://localhost:1337/pt-textos')
    const textos = await responseTextos.json()

    return {
        props: {
            areas, posts, textos
        },
        revalidate: 1
    }
}