import { ReactElement } from 'react';
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from '../Icons';

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
        {
            href: '/projects',
            title: 'Project',
        },
        {
            href: '/articles',
            title: 'Articles',
        },
    ],
    references: [
        {
            href: '/',
            Icon: () => <TwitterIcon />,
        },
        {
            href: '/',
            Icon: () => <GithubIcon />,
        },
        {
            href: '/',
            Icon: () => <LinkedInIcon />,
        },
        {
            href: '/',
            Icon: () => <PinterestIcon />,
        },
        {
            href: '/',
            Icon: () => <DribbbleIcon />,
        },
        {
            href: '/',
            Icon: () => <TwitterIcon />,
        },
    ],
};
export default navbarItems;
