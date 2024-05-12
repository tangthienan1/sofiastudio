import { LinkProps } from 'next/link';
import { FC } from 'react';

import { MotionLink } from '../Common/common';
import { SocialMediaLinkType } from './type';

export const SocialMediaLink: FC<LinkProps & SocialMediaLinkType> = ({
    href = '#',
    target = '_blank',
    children,
    className,
    ...rest
}) => {
    return (
        <MotionLink
            {...{ href, target }}
            className={`w-6 sm:mx-1 ${className}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            {...rest}
        >
            {children}
        </MotionLink>
    );
};
