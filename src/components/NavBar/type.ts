import { ThemeEnum } from '@/const';
import { LinkProps } from 'next/link';
import { ReactElement } from 'react';

export type DesktopNavbarType = {
    onDarkModeClick: () => void;
    mode: ThemeEnum;
};

export type MobileNavbarType = {
    onDarkModeClick: () => void;
    mode: ThemeEnum;
};

export type PageItemType = {
    href: string;
    title: string;
};

export type ReferenceItemType = {
    href: string;
    Icon: () => ReactElement;
};

export type NavbarItemsType = {
    pages: PageItemType[];
    references: ReferenceItemType[];
};

export type PagerNavigatorLinkType = LinkProps & {
    title?: string;
    className?: string;
    target?: string;
};

export type MobilePageNavigatorLinkType = PagerNavigatorLinkType & {
    onClick: () => void;
};

export type PopupNavbarModalType = MobileNavbarType & {
    toggleMode: () => void;
    className?: string;
};

export type SocialMediaLinkType = {
    target?: string;
    children: any;
    className?: string;
};
