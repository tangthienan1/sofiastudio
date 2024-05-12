import Head from 'next/head';
import React, { FC } from 'react';

import { CustomHeadType } from './type';

export const CustomHead: FC<CustomHeadType> = ({ title, content }) => {
    return (
        <Head>
            <title>Sofia | {title}</title>
            <meta name="description" content={content} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
};
