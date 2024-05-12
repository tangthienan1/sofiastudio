import { FC } from 'react';

import { DarkModeBtn } from '../DarkModeBtn';
import { PageNavigatorLink } from './PageNavigatorLink';
import { SocialMediaLink } from './SocialMediaLink';
import { navbarItems } from './navbarItems';
import { DesktopNavbarType } from './type';

export const DesktopNavbar: FC<DesktopNavbarType> = ({ onDarkModeClick, mode }) => {
    return (
        <div className="w-full flex justify-between items-center lg:hidden">
            <nav className="flex gap-10 xl:gap-8">
                {navbarItems.pages.map((page, index) => (
                    <PageNavigatorLink {...page} key={index} />
                ))}
            </nav>
            <nav className="flex items-center justify-center flex-wrap gap-10 xl:gap-8">
                {navbarItems.references.map(({ href, Icon }, index) => (
                    <SocialMediaLink href={href} key={index}>
                        <Icon />
                    </SocialMediaLink>
                ))}

                <DarkModeBtn onClick={onDarkModeClick} mode={mode} />
            </nav>
        </div>
    );
};
