import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Layout = ({ children, header }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header content={header} />
            <main>
                {children}
            </main>
            <Footer content={header} />
        </>
    )
}
export default Layout;