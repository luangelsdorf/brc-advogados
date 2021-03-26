import Head from "next/head";
import FixedHeader from "../src/components/FixedHeader";
import Banner from "../src/components/Banner";
import TopHeader from "../src/components/TopHeader";
import React from "react";
import Form from "../src/components/Form";
import FaleConosco from "../src/components/FaleConosco";


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
                    <div className="col-1" />
                    <div className="col-4" >
                        <FaleConosco />
                    </div>
                    <div className="col-1" />
                    <div className="col-5" >
                        <Form />
                    </div>
                    <div className="col-1" />
                </div>
            </div>
        </div>
    )
}
