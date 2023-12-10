import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { quote, singleWord } from './AnimatedTextMotion';

type AnimatedTextType = {
    text: string;
    className?: string;
};

const AnimatedText: FC<AnimatedTextType> = ({ text, className }) => {
    return (
        <div
            className={
                'w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:p-0'
            }
        >
            <motion.h1
                className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light 
                lg:!text-7xl sm:!text-5xl xs:!text-3xl
                ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
                transition={{duration: 3}}
            >
                {text.split(' ').map((word, index) => (
                    <motion.span
                        key={word + '-' + index}
                        className="inline-block"
                        variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedText;
