import { FACEBOOK_URL } from '@/const';

import { FacebookIcon } from '../Icons';
import { NavbarItemsType } from './type';

export const navbarItems: NavbarItemsType = {
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
