import { motion } from 'framer-motion';
import { FC } from 'react';

import { quote, singleWord } from './AnimatedTextMotion';
import { AnimatedTextType } from './type';

export const AnimatedText: FC<AnimatedTextType> = ({ text, className }) => {
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
                transition={{ duration: 3 }}
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
