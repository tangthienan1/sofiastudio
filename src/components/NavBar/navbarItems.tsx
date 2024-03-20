import { FACEBOOK_URL } from '@/const/links';
import { ReactElement } from 'react';
import { FacebookIcon } from '../Icons';

type PageItemType = {
    href: string;
    title: string;
};

type ReferenceItemType = {
    href: string;
    Icon: () => ReactElement;
};

type NavbarItemsType = {
    pages: PageItemType[];
    references: ReferenceItemType[];
};

const navbarItems: NavbarItemsType = {
    pages: [
        {
            href: '/',
            title: 'Home',
        },
        {
            href: '/about',
            title: 'About',
        },
        // {
        //     href: '/projects',
        //     title: 'Project',
        // },
        // {
        //     href: '/articles',
        //     title: 'Articles',
        // },
    ],
    references: [
        {
            href: FACEBOOK_URL,
            Icon: () => <FacebookIcon />,
        },
        // {
        //     href: '/',
        //     Icon: () => <PinterestIcon />,
        // },
        // {
        //     href: '/',
        //     Icon: () => <DribbbleIcon />,
        // },
        // {
        //     href: '/',
        //     Icon: () => <TwitterIcon />,
        // },
    ],
};
export default navbarItems;
