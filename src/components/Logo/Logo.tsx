import { motion } from 'framer-motion';
import { FC } from 'react';
import logo from 'public/images/ref/sofialogo-rmbg.png';

import { LogoType } from './type';
import { AnimatedImage } from '../AnimatedImage';

export const Logo: FC<LogoType> = ({ onClick }) => {
    return (
        <motion.div className="flex items-center justify-center h-full" onClick={onClick}>
            <AnimatedImage src={logo} alt="logo" className="max-h-[100%] w-full object-contain" />
        </motion.div>
    );
};
