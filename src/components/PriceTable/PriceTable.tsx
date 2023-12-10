import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatCurrency } from '@/lib/utils';
import Text from '../Text';
import AnimatedText from '../AnimatedText';

type TableDataType = {
    numberOfHour: number;
    fee: number;
};

const EXTRA_PRICE = 50000;

const tableData: TableDataType[] = [
    {
        numberOfHour: 1,
        fee: 150000,
    },
    {
        numberOfHour: 2,
        fee: 95000,
    },
    {
        numberOfHour: 3,
        fee: 95000,
    },
    {
        numberOfHour: 4,
        fee: 95000,
    },
    {
        numberOfHour: 5,
        fee: 95000,
    },
    {
        numberOfHour: 6,
        fee: 95000,
    },
    {
        numberOfHour: 7,
        fee: 95000,
    },
    {
        numberOfHour: 8,
        fee: 85000,
    },
    {
        numberOfHour: 9,
        fee: 85000,
    },
    {
        numberOfHour: 10,
        fee: 85000,
    },
    {
        numberOfHour: 11,
        fee: 85000,
    },
    {
        numberOfHour: 12,
        fee: 80000,
    },
];

const tableHeaderText = 'OPEN DAILY: 7AM-20PM';

const PriceTable = () => {
    const getRowColor = (numberOfHour: number) => {
        switch (numberOfHour) {
            case 2 || 8:
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
                            <Text>Chi phí / Fee</Text>
                        </TableHead>
                        <TableHead className="text-right">
                            <Text>Thành tiền / Total amount</Text>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.map((data, index) => (
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
                            30p đặt thêm (Extra 30m)
                        </TableCell>
                        <TableCell className="text-white">{formatCurrency(EXTRA_PRICE)}</TableCell>
                        <TableCell className="text-right text-white">
                            {formatCurrency(EXTRA_PRICE)}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default PriceTable;
