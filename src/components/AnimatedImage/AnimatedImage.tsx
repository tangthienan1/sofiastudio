import { StaticImageData } from 'next/image';
import { FC } from 'react';

import { MotionImage } from '../common';

type AnimatedImageType = {
    src: StaticImageData;
    alt: string;
    className?: string;
};

const AnimatedImage: FC<AnimatedImageType> = ({ src, alt, className = 'w-full h-auto' }) => {
    return (
        <MotionImage
            {...{ src, alt, className }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        />
    );
};

export default AnimatedImage;
