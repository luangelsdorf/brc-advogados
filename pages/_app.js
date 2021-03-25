/*import 'bootstrap/dist/css/bootstrap.min.css'*/
import '../public/css/global.css'

export default function MyApp({ Component, pageProps }) {
    /*const Layout = Component.Layout ? Component.Layout : React.Fragment;*/
    return <Component {...pageProps} />
}