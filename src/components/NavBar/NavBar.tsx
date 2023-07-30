import { ThemeEnum } from '@/constants';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import {
    DribbbleIcon,
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    PinterestIcon,
    SunIcon,
    TwitterIcon,
} from '../Icons/Icons';
import Logo from '../Logo';
import SocialMediaLink from './SocialMediaLink';
import { useState } from 'react';
import BurgerBtn from '../BurgerBtn';
import { MobilePageNavigatorLink, PageNavigatorLink } from './PageNavigatorLink';
import { motion } from 'framer-motion';

const NavBar = () => {
    const { mode, setMode } = useThemeSwitcher();
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
        >
            <BurgerBtn
                className="flex-col justify-center items-center hidden lg:flex"
                onClick={() => setIsBurgerOpen((prev) => !prev)}
                isOpen={isBurgerOpen}
            />

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <PageNavigatorLink href="/" title="Home" className="mr-4" />
                    <PageNavigatorLink href="/about" title="About" className="mx-4" />
                    <PageNavigatorLink href="/projects" title="Project" className="mx-4" />
                    <PageNavigatorLink href="/articles" title="Articles" className="mx-4" />
                </nav>
                <nav className="flex items-center justify-center flex-wrap gap-10">
                    <SocialMediaLink href="/">
                        <TwitterIcon />
                    </SocialMediaLink>
                    <SocialMediaLink href="/">
                        <DribbbleIcon />
                    </SocialMediaLink>
                    <SocialMediaLink href="/">
                        <GithubIcon />
                    </SocialMediaLink>
                    <SocialMediaLink href="/">
                        <PinterestIcon />
                    </SocialMediaLink>
                    <SocialMediaLink href="/">
                        <LinkedInIcon />
                    </SocialMediaLink>

                    <button
                        onClick={() =>
                            setMode((prevMode) =>
                                prevMode === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
                            )
                        }
                        className={`ml-3 flex items-center justify-center rounded-full p-1 
                    ${mode === ThemeEnum.LIGHT ? 'bg-dark text-light' : 'bg-light text-dark'} 
                    `}
                    >
                        {mode === ThemeEnum.DARK ? (
                            <SunIcon className="fill-dark" />
                        ) : (
                            <MoonIcon className="fill-dark" />
                        )}
                    </button>
                </nav>
            </div>
            {/* Mobile Nav */}
            {isBurgerOpen && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md p-32  
            "
                >
                    <nav className="flex items-center flex-col justify-center">
                        <MobilePageNavigatorLink
                            href="/"
                            title="Home"
                            className="mr-4"
                            onClick={() => setIsBurgerOpen((prev) => !prev)}
                        />
                        <MobilePageNavigatorLink
                            href="/about"
                            title="About"
                            className="mx-4"
                            onClick={() => setIsBurgerOpen((prev) => !prev)}
                        />
                        <MobilePageNavigatorLink
                            href="/projects"
                            title="Project"
                            className="mx-4"
                            onClick={() => setIsBurgerOpen((prev) => !prev)}
                        />
                        <MobilePageNavigatorLink
                            href="/articles"
                            title="Articles"
                            className="mx-4"
                            onClick={() => setIsBurgerOpen((prev) => !prev)}
                        />
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap gap-10 mt-2">
                        <SocialMediaLink href="/">
                            <TwitterIcon />
                        </SocialMediaLink>
                        <SocialMediaLink href="/">
                            <DribbbleIcon />
                        </SocialMediaLink>
                        <SocialMediaLink href="/" className="bg-light rounded-full dark:bg-dark">
                            <GithubIcon />
                        </SocialMediaLink>
                        <SocialMediaLink href="/" className="bg-light rounded-full">
                            <PinterestIcon />
                        </SocialMediaLink>
                        <SocialMediaLink href="/">
                            <LinkedInIcon />
                        </SocialMediaLink>

                        <button
                            onClick={() =>
                                setMode((prevMode) =>
                                    prevMode === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
                                )
                            }
                            className={`ml-3 flex items-center justify-center rounded-full p-1 
                    ${mode === ThemeEnum.LIGHT ? 'bg-dark text-light' : 'bg-light text-dark'} 
                    `}
                        >
                            {mode === ThemeEnum.DARK ? (
                                <SunIcon className="fill-dark" />
                            ) : (
                                <MoonIcon className="fill-dark" />
                            )}
                        </button>
                    </nav>
                </motion.div>
            )}
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
