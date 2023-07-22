import '@/styles/globals.css';
import { FC } from 'react';

type AppType = {
    Component: any;
    pageProps: any;
};

const App: FC<AppType> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
