import { ThemeEnum } from '@/const';
import { useRouter } from 'next/navigation';

import { DesktopNavbar } from './DesktopNavbar';
import { Logo } from '../Logo';
import { MobileNavbar } from './MobileNavbar';
import { useThemeSwitcher } from '@/hooks';

export const NavBar = () => {
    const router = useRouter();
    const { mode, setMode } = useThemeSwitcher();

    const onDarkModeClick = () =>
        setMode((prevMode) => (prevMode === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT));

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
        >
            <DesktopNavbar onDarkModeClick={onDarkModeClick} mode={mode} />
            <MobileNavbar onDarkModeClick={onDarkModeClick} mode={mode} />
            <div className="absolute left-[50%] top-2 translate-x-[-50%] h-full">
                <Logo onClick={() => router.push('/')} />
            </div>
        </header>
    );
};
