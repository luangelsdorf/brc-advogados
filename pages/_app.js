import '../public/css/global.css'
import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import {homePage} from "../public/js/pages";
/*import 'bootstrap/dist/css/bootstrap.min.css'*/

export default function MyApp({ Component, pageProps }) {

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = url => {
            if (url.startsWith('/areas-de-atuacao')) {
                let nome = url.slice(18)
                document.getElementById(nome).style.color = 'rgba(214, 164, 97, 1)'
                console.log(document.getElementById(nome))
            }

            if (url === '/' || url.startsWith('/#')) {
                homePage()
            }
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    const Layout = Component.Layout ? Component.Layout : React.Fragment;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>

    )
}