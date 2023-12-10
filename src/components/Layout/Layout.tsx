import React, { FC } from 'react';
import TransitionEffect from '../TransitionEffect';

type LayoutType = {
    children: any;
    className?: string;
};

const Layout: FC<LayoutType> = ({ children, className }) => {
    return (
        <div
            className={`w-full h-full inline-block z-0 bg-light px-32 py-16  dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
        >
            <TransitionEffect />
            {children}
        </div>
    );
};

export default Layout;
