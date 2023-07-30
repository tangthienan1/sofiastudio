import { ThemeEnum } from '@/constants';
import React, { FC } from 'react';
import { MoonIcon, SunIcon } from '../Icons';

type DarkModeBtnType = {
    onClick: () => void;
    mode: ThemeEnum
};

const DarkModeBtn: FC<DarkModeBtnType> = ({ onClick, mode }) => {
    return (
        <button
            onClick={onClick}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
                    ${mode === ThemeEnum.LIGHT ? 'bg-dark text-light' : 'bg-light text-dark'} 
                    `}
        >
            {mode === ThemeEnum.DARK ? (
                <SunIcon className="fill-dark w-6 h-auto" />
            ) : (
                <MoonIcon className="fill-dark w-6 h-auto" />
            )}
        </button>
    );
};

export default DarkModeBtn;
