import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

type PagerNavigatorLinkType = {
    title?: string;
    className?: string;
    target?: string;
};

const PageNavigatorLink: FC<LinkProps & PagerNavigatorLinkType> = ({
    href,
    title,
    className,
    ...rest
}) => {
    const router = useRouter();
    return (
        <Link className={`${className} relative group`} {...{ href }} {...rest}>
            {title}
            <span
                className={`dark:bg-light h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    router.asPath === href ? 'w-full' : 'w-0'
                }`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

export default PageNavigatorLink;
