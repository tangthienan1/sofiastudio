import { FC, useState } from 'react';

import { MobileNavbarType } from './type';
import { BurgerBtn } from '../BurgerBtn';
import { PopupNavbarModal } from './PopupNavbarModal';

export const MobileNavbar: FC<MobileNavbarType> = ({ mode, onDarkModeClick }) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
    return (
        <>
            <BurgerBtn
                className="flex-col justify-center items-center hidden lg:flex"
                onClick={() => setIsBurgerOpen((prev) => !prev)}
                isOpen={isBurgerOpen}
            />
            {isBurgerOpen && (
                <PopupNavbarModal
                    onDarkModeClick={onDarkModeClick}
                    mode={mode}
                    toggleMode={() => setIsBurgerOpen((prev) => !prev)}
                    className="hidden lg:flex"
                />
            )}
        </>
    );
};
