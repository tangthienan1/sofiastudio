import { cn } from '@/lib/utils';
import React, { FC, ReactNode } from 'react'

type TextProps = {
    className?: string;
    children: ReactNode
}

const Text:FC<TextProps> = ({className, children}) => {
  return (
    <p className={cn('text-base md:text-sm sm:text-xs', className)}>{children}</p>
  )
}

export default Text