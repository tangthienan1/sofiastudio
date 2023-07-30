import { ThemeEnum } from '@/constants';
import { motion } from 'framer-motion';
import { FC } from 'react';
import DarkModeBtn from '../DarkModeBtn';
import { MobilePageNavigatorLink } from './PageNavigatorLink';
import SocialMediaLink from './SocialMediaLink';
import navbarItems from './navbarItems';

type MobileNavbarType = {
    toggleMode: () => void;
    onDarkModeClick: () => void;
    mode: ThemeEnum;
};

const MobileNavbar: FC<MobileNavbarType> = ({ toggleMode, onDarkModeClick, mode }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md p-32  
            "
        >
            <nav className="flex items-center flex-col justify-center">
                {navbarItems.pages.map((page, index) => (
                    <MobilePageNavigatorLink
                        {...page}
                        className="mx-4"
                        onClick={toggleMode}
                        key={index}
                    />
                ))}
            </nav>
            <nav className="flex items-center justify-center flex-wrap gap-10 mt-2">
                {navbarItems.references.map(({ href, Icon }, index) => (
                    <SocialMediaLink href={href} key={index}>
                        <Icon />
                    </SocialMediaLink>
                ))}

                <DarkModeBtn onClick={onDarkModeClick} mode={mode} />
            </nav>
        </motion.div>
    );
};

export default MobileNavbar;
