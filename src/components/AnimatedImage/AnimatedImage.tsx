import { StaticImageData } from 'next/image';
import { FC } from 'react';

import { MotionImage } from '../common';

type AnimatedImageType = {
    src: StaticImageData;
    alt: string;
    className?: string;
    fill?: boolean
};

const AnimatedImage: FC<AnimatedImageType> = ({ src, alt, className = 'w-full h-auto', fill }) => {
    return (
        <MotionImage
            {...{ src, alt, className, fill }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
    );
};

export default AnimatedImage;
