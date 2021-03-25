import Head from "next/head";
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";


export default function Home() {
    return (
        <>
            <Head>
                <title>BRC Advogados</title>
                <link rel="icon" href="/img/favicon.png"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"/>
                {/*<link rel="stylesheet" href="/css/main.css"/>*/}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" />
            </Head>

            <Banner />
        </>
    )
}
