import { FC } from 'react';

import { TextProps } from './type';
import { cn } from '@/utils';

export const Text: FC<TextProps> = ({ className, children }) => {
    return <p className={cn('text-base md:text-sm sm:text-xs', className)}>{children}</p>;
};
