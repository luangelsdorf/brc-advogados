import Head from "next/head";
import FixedHeader from "../src/components/superior/FixedHeader";
import Banner from "../src/components/superior/Banner";
import TopHeader from "../src/components/superior/TopHeader";
import React from "react";
import Form from "../src/components/inferior/Form";
import FaleConosco from "../src/components/inferior/FaleConosco";
import NewsLetter from "../src/components/inferior/NewsLetter";
import ListaAreas from "../src/components/inferior/ListaAreas";


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

            <div className="container d-fle justify-content-center align-items-center bg-escuro">
                <div className="row">
                    <ListaAreas />
                </div>
            </div>
        </div>
    )
}
