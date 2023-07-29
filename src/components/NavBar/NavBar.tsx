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
import PageNavigator from './PageNavigatorLink';
import SocialMediaLink from './SocialMediaLink';

const NavBar = () => {
    const { mode, setMode } = useThemeSwitcher();

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light"
        >
            <nav>
                <PageNavigator href="/" title="Home" className="mr-4" />
                <PageNavigator href="/about" title="About" className="mx-4" />
                <PageNavigator href="/projects" title="Project" className="mx-4" />
                <PageNavigator href="/articles" title="Articles" className="mx-4" />
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
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
