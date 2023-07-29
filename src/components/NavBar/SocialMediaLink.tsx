import { LinkProps } from 'next/link';
import { FC } from 'react';

import { MotionLink } from '../common';

type SocialMediaLinkType = {
    target?: string;
    children: any;
};

const SocialMediaLink: FC<LinkProps & SocialMediaLinkType> = ({
    href = '#',
    target = '_blank',
    children,
    ...rest
}) => {
    return (
        <MotionLink
            {...{ href, target }}
            className="w-6 b"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            {...rest}
        >
            {children}
        </MotionLink>
    );
};

export default SocialMediaLink;
