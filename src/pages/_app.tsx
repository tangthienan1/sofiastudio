import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { montserrat } from '@/app';
import { Footer, NavBar } from '@/components';
import '@/styles/globals.css';
import { AppType } from './type';

const App: FC<AppType> = ({ Component, pageProps }) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Sofia Studio</title>
                <meta name="description" content="Sofia | Studio chụp ảnh tại Vinhome GrandPark" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.jpeg" />

                <meta property="og:image" content="/favicon.jpeg" />

                <meta property="og:description" content="test description" />

                <meta property="og:title" content="test title" />
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
