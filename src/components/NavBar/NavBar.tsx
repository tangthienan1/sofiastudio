import { ThemeEnum } from '@/constants';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { useState } from 'react';
import BurgerBtn from '../BurgerBtn';
import Logo from '../Logo';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const NavBar = () => {
    const { mode, setMode } = useThemeSwitcher();
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

    const onDarkModeClick = () =>
        setMode((prevMode) => (prevMode === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT));
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

            <DesktopNavbar onDarkModeClick={onDarkModeClick} mode={mode} />
            {/* Mobile Nav */}
            {isBurgerOpen && (
                <MobileNavbar
                    onDarkModeClick={() =>
                        setMode((prevMode) =>
                            prevMode === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
                        )
                    }
                    mode={mode}
                    toggleMode={() => setIsBurgerOpen((prev) => !prev)}
                />
            )}
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
