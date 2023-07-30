import Link from 'next/link';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

type LogoType = {
    onClick: () => void;
};
const Logo: FC<LogoType> = ({ onClick }) => {
    return (
        <motion.div className="flex items-center justify-center mt-2">
            <MotionLink
                href="/"
                className="w-16 h-16 bg-black text-light flex items-center justify-center rounded-full text-2xl
                font-bold border border-solid border-transparent dark:border-light"
                whileHover={{
                    scale: 1.25,
                    backgroundColor: [
                        '#121212',
                        '#6a3d89',
                        '#b13838',
                        '#a27d4a',
                        '#6a3d89',
                        '#121212',
                    ],
                    transition: { duration: 0.4, ease: 'easeInOut' },
                }}
                onClick={onClick}
            >
                ND
            </MotionLink>
        </motion.div>
    );
};

export default Logo;
