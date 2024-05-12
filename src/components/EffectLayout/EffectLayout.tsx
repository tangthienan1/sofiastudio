import { FC } from 'react';

import { EffectLayoutType } from './type';

export const EffectLayout: FC<EffectLayoutType> = ({ children }) => {
    return <div>{children}</div>;
};
