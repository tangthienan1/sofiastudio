import { StaticImageData } from 'next/image';

export type MovingImgLinkType = {
    img: StaticImageData;
    link: string;
    title: string;
    className?: string;
};
