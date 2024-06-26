import { Table } from '@/components/ui/table';
import { FC } from 'react';
import { AnimatedText } from '../AnimatedText';
import { PriceTableBody } from './PriceTableBody';
import { PriceTableHeader } from './PriceTableHeader';
import { PriceTableType } from './type';

const tableHeaderText = 'OPEN DAILY 08:00-21:00';

export const PriceTable: FC<PriceTableType> = ({ mileStoneTable }) => {
    return (
        <>
            <AnimatedText
                text={tableHeaderText}
                className="!text-2xl !text-left xl:!text-xl lg:!text-center sm:!text-lg sm:pb-5"
            />
            <Table>
                <PriceTableHeader />
                <PriceTableBody mileStoneTable={mileStoneTable} />
            </Table>
        </>
    );
};
