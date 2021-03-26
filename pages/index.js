import Head from "next/head";
import React from "react";
import HeadContent from "../src/components/HeadContent";
import TopHeader from "../src/components/superior/TopHeader";
import FixedHeader from "../src/components/superior/FixedHeader";
import BannerSuperior from "../src/components/superior/BannerSuperior";
import MainLayout from "../src/layouts/MainLayout";


export default function Home() {
    return (
        <div className="container-fluid p-0 position-relative">
            <HeadContent title="BRC Advogados" />

            <div>AASD ASD ASD ASD </div>

        </div>
    )
}

Home.Layout = MainLayout