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



export default function Home() {
    return (
        <>
            <TopHeader />
            <FixedHeader />
            <BannerSuperior />

            <div className="container-fluid p-0 position-relative home">
                <HeadContent title="BRC Advogados" page="home" />
                <img src="/img/parallax.png" className="parallax" alt=""/>

                <SobreNos />
                <NossaEquipe />
                <Parallax />
                <Areas />
                <Recentes />
            </div>

            <BannerInferior />
            <SubFooter />
            <Footer />
        </>
    )
}

