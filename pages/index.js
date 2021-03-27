import Head from "next/head";
import React from "react";
import HeadContent from "../src/components/HeadContent";
import TopHeader from "../src/components/superior/TopHeader";
import FixedHeader from "../src/components/superior/FixedHeader";
import BannerSuperior from "../src/components/superior/BannerSuperior";
import MainLayout from "../src/layouts/MainLayout";
import AreaCard from "../src/components/home/AreaCard";
import SobreNos from "../src/components/home/SobreNos";
import NossaEquipe from "../src/components/home/NossaEquipe";
import Parallax from "../src/components/Parallax";
import Areas from "../src/components/home/Areas";


export default function Home() {
    return (
        <div className="container-fluid p-0 position-relative">
            <HeadContent title="BRC Advogados" page="home" />
            <img src="/img/parallax.png" className="parallax" alt=""/>

            <Areas />
        </div>
    )
}

Home.Layout = MainLayout