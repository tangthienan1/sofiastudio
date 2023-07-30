import React from 'react';
import Link from 'next/link';

import Layout from '../Layout';

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                    Build With <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;</span> by&nbsp;
                    <Link href="https://google.com" className="underline underline-offset-2">
                        AndyTang
                    </Link>
                </div>
                <Link
                    href="https://goole.com"
                    target="_blank"
                    className="underline underline-offset-2"
                >
                    Say Hello
                </Link>
            </Layout>
        </footer>
    );
};

export default Footer;
