import { StaticImageData } from 'next/image';

export type AnimatedImageType = {
    src: StaticImageData;
    alt: string;
    className?: string;
    fill?: boolean;
};
