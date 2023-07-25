import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from '../Icons/Icons';
import Logo from '../Logo';
import PageNavigator from './PageNavigatorLink';
import SocialMediaLink from './SocialMediaLink';

const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
