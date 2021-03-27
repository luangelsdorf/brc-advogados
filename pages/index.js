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
import Parallax from "../src/components/home/Parallax";
import Areas from "../src/components/home/Areas";
import PostCard from "../src/components/home/PostCard";


export default function Home() {
    return (
        <div className="container-fluid p-0 position-relative bg-white home">
            <HeadContent title="BRC Advogados" page="home" />
            <img src="/img/parallax.png" className="parallax" alt=""/>

            <div className="container bg-white">
                <div className="row">
                    <PostCard img="1" categoria="Direito Trabalhista" data="Fev 10, 2021" />
                    <PostCard img="2" categoria="Contencioso Cível" data="Fev 14, 2021" />
                    <PostCard img="3" categoria="Notícia, Previdenciário" data="Fev 17, 2021" />
                </div>
            </div>
        </div>
    )
}

Home.Layout = MainLayout