import { formatCurrency } from '@/utils';
import { FC } from 'react';
import { TableBody, TableCell, TableRow } from '../ui';
import { PriceTableBodyType } from './type';

export const PriceTableBody: FC<PriceTableBodyType> = ({ mileStoneTable }) => {
    // const table = getPriceTableData(mileStoneTable);
    const table = [
        {
            numberOfHour: 1,
            fee: 139000,
        },
        {
            numberOfHour: 2,
            fee: 139000,
        },
        {
            numberOfHour: 3,
            fee: 119000,
        },
        {
            numberOfHour: 4,
            fee: 119000,
        },
        {
            numberOfHour: 5,
            fee: 109000,
        },
        {
            numberOfHour: 6,
            fee: 109000,
        },
        {
            numberOfHour: 7,
            fee: 109000,
        },
        {
            numberOfHour: 8,
            fee: 99000,
        },
    ]
    const mileStoneNumberOfHoursList = mileStoneTable.map((mileStone) => mileStone.numberOfHour);
    const getRowColor = (numberOfHour: number) => {
        if (mileStoneNumberOfHoursList[0] === numberOfHour) return;
        if (mileStoneNumberOfHoursList[mileStoneNumberOfHoursList.length - 1] === numberOfHour)
            return 'bg-red';
        if (mileStoneNumberOfHoursList.includes(numberOfHour)) return 'bg-blue';
    };

    return (
        <TableBody>
            {table.map((data, index) => (
                <TableRow key={index} className={getRowColor(data.numberOfHour)}>
                    <TableCell className="font-medium">
                        {formatCurrency(data.numberOfHour)}
                    </TableCell>
                    <TableCell>{formatCurrency(data.fee)}</TableCell>
                    <TableCell className="text-right">
                        {formatCurrency(data.numberOfHour * data.fee)}
                    </TableCell>
                </TableRow>
            ))}
            <TableRow className="bg-black">
                <TableCell className="font-medium text-white">Đặt thêm giờ (Extra time)</TableCell>
                <TableCell className="text-white">
                    Tính theo chi phí cho 1h (Nếu giờ sau trống nhen ^^)
                </TableCell>
                <TableCell className="text-right text-white">
                    {/* {formatCurrency(50)} */}1
                </TableCell>
            </TableRow>
        </TableBody>
    );
};
