import Head from 'next/head';
import React, { FC } from 'react';

type CustomHeadType = {
    title: string;
    content: string;
};

const CustomHead: FC<CustomHeadType> = ({ title, content }) => {
    return (
        <Head>
            <title>Sofia | {title}</title>
            <meta name="description" content={content} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
};

export default CustomHead;
