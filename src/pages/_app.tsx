import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { montserrat } from '@/app/layout';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import 'swiper/css';

type AppType = {
    Component: any;
    pageProps: any;
};

const App: FC<AppType> = ({ Component, pageProps }) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Sofia Studio</title>
                <meta name="description" content="Sofia | Studio chụp ảnh tại Vinhome GrandPark" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.jpeg" />
            </Head>
            <motion.main
                className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
            >
                <NavBar />
                <AnimatePresence mode="wait">
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
                <Footer />
            </motion.main>
        </>
    );
};

export default App;
