import Head from "next/head";
import React from "react";
import Footer from "../src/components/inferior/Footer";
import BannerInferior from "../src/components/inferior/BannerInferior";
import SubFooter from "../src/components/inferior/SubFooter";


export default function Home() {
    return (
        <div className="container-fluid p-0 position-relative">
            <Head>
                <title>BRC Advogados</title>
                <link rel="icon" href="/img/favicon.png"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"/>
                {/*<link rel="stylesheet" href="/css/main.css"/>*/}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" />
                <script src="https://kit.fontawesome.com/862ff8d067.js" />
            </Head>

            <BannerInferior />
            <SubFooter />
        </div>
    )
}
