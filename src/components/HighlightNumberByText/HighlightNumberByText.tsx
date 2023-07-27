import { FC } from 'react';

import { HighlightContentsType } from '@/data/aboutPageData';
import AnimatedNumber from './AnimatedNumber';

type HighlightNumberByTextType = HighlightContentsType & {
    key?: string | number;
};

const HighlightNumberByText: FC<HighlightNumberByTextType> = ({ number, content, key }) => {
    return (
        <div className="flex flex-col items-end justify-center" key={key}>
            <span className="inline-block text-7xl font-bold">
                <AnimatedNumber value={number} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75">{content}</h2>
        </div>
    );
};

export default HighlightNumberByText;
