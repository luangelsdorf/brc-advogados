import '../public/css/global.css'
import React from "react";
/*import 'bootstrap/dist/css/bootstrap.min.css'*/

export default function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout ? Component.Layout : React.Fragment;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>

    )
}