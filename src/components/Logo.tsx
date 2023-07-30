import Link from 'next/link';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

type LogoType = {
    onClick: () => void;
};
const Logo: FC<LogoType> = ({ onClick }) => {
    return (
        <motion.div className="relative flex items-center justify-center mt-2">
            <MotionLink
                href="/"
                className="z-20 w-16 h-16 bg-black text-light flex items-center justify-center rounded-full text-2xl
                font-bold border border-solid border-transparent dark:border-light"
                whileHover={{
                    scale: 1.25,
                    backgroundColor: [
                        '#121212',
                        '#FE0000',
                        '#FFF205',
                        '#01FFF4',
                        '#7CFF01',
                        '#01FFF4',
                        '#FFF205',
                        '#FE0000',
                        '#121212',
                    ],
                    transition: { duration: 1, ease: 'easeInOut' },
                }}
                onClick={onClick}
            >
                ND
            </MotionLink>
            <div className="z-10 absolute w-16 h-16 bg-red-700 rounded-full left-1 top-1" />
            <div className="z-10 absolute w-16 h-16 bg-emerald-400 rounded-full bottom-1 right-1" />
        </motion.div>
    );
};

export default Logo;
