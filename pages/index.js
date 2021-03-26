import Head from "next/head";
import React from "react";
import HeadContent from "../src/components/HeadContent";
import TopHeader from "../src/components/superior/TopHeader";
import FixedHeader from "../src/components/superior/FixedHeader";
import BannerSuperior from "../src/components/superior/BannerSuperior";
import MainLayout from "../src/layouts/MainLayout";
import AreaCard from "../src/components/home/AreaCard";


export default function Home() {
    return (
        <div className="container-fluid p-0 position-relative">
            <HeadContent title="BRC Advogados" page="home" />

            <div className="container">
                <div className="row">
                    <AreaCard title="Consultivo Cível e Contratos" icon="contratos">
                        Atuamos na elaboração de consultas e pareceres e contratos para atender as mais diversas demandas de nossos clientes.
                    </AreaCard>
                </div>
            </div>

        </div>
    )
}

Home.Layout = MainLayout