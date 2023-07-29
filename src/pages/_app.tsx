import { montserrat } from '@/app/layout';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import Head from 'next/head';
import { FC } from 'react';

type AppType = {
    Component: any;
    pageProps: any;
};

const App: FC<AppType> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Andy Tang</title>
                <meta
                    name="description"
                    content="This is Andy Tang a software developer Portfolio"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
                <NavBar />
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    );
};

export default App;
