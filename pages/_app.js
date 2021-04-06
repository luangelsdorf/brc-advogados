import '../public/css/global.css'
import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import {homePage} from "../public/js/pages";
/*import 'bootstrap/dist/css/bootstrap.min.css'*/

export default function MyApp({ Component, pageProps }) {

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = url => {
            if (url.startsWith('/pt/areas-de-atuacao') || url.startsWith('/en/areas-de-atuacao')) {
                //retirar estilos de ativo se houver algum
                let items = document.querySelectorAll('.list-group-item a')
                items.forEach(item => {
                    item.style.color = ''
                })

                //aplicar estilos à opção ativa
                let nome = url.slice(21)
                document.getElementById(nome).style.color = 'rgba(214, 164, 97, 1)'
            }

            if (url === '/pt' || url === '/en' || url.startsWith('/pt/#') || url.startsWith('/pt/#')) {
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