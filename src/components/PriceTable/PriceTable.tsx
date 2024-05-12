import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatCurrency, getPriceTableData } from '@/utils';
import { PriceTableType } from './type';
import { FC } from 'react';
import { AnimatedText } from '../AnimatedText';
import { Text } from '../Text';

const tableHeaderText = 'OPEN DAILY 7:00-20:00';

export const PriceTable: FC<PriceTableType> = ({ mileStoneTable }) => {
    const table = getPriceTableData(mileStoneTable);
    const getRowColor = (numberOfHour: number) => {
        switch (numberOfHour) {
            case 2:
                return 'bg-blue';
            case 4:
                return 'bg-blue';
            case 8:
                return 'bg-blue';

            case 12:
                return 'bg-red';
        }
    };
    return (
        <>
            <AnimatedText
                text={tableHeaderText}
                className="!text-2xl !text-left xl:!text-xl lg:!text-center sm:!text-lg sm:pb-5"
            />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="min-w-fit">
                            <Text>Số giờ đặt phòng / Booking hours</Text>
                        </TableHead>
                        <TableHead>
                            <Text>Chi phí cho 1h / Fee per hour</Text>
                        </TableHead>
                        <TableHead className="text-right">
                            <Text>Thành tiền / Total amount</Text>
                        </TableHead>
                    </TableRow>
                </TableHeader>
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
                        <TableCell className="font-medium text-white">
                            Đặt thêm giờ (Extra time)
                        </TableCell>
                        <TableCell className="text-white">
                            Tính theo chi phí cho 1h (Nếu giờ sau trống nhen ^^)
                        </TableCell>
                        <TableCell className="text-right text-white">
                            {/* {formatCurrency(50)} */}1
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};
