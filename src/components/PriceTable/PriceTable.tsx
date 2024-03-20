import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatCurrency } from '@/lib/utils';
import AnimatedText from '../AnimatedText';
import Text from '../Text';

type TableDataType = {
    numberOfHour: number;
    fee: number;
};

const tableData: TableDataType[] = [
    {
        numberOfHour: 1,
        fee: 250000,
    },
    {
        numberOfHour: 2,
        fee: 230000,
    },
    {
        numberOfHour: 3,
        fee: 230000,
    },
    {
        numberOfHour: 4,
        fee: 200000,
    },
    {
        numberOfHour: 5,
        fee: 200000,
    },
    {
        numberOfHour: 6,
        fee: 200000,
    },
    {
        numberOfHour: 7,
        fee: 200000,
    },
    {
        numberOfHour: 8,
        fee: 180000,
    },
    {
        numberOfHour: 9,
        fee: 180000,
    },
    {
        numberOfHour: 10,
        fee: 180000,
    },
    {
        numberOfHour: 11,
        fee: 180000,
    },
    {
        numberOfHour: 12,
        fee: 170000,
    },
];

const tableHeaderText = 'OPEN DAILY 7:00-20:00';

const PriceTable = () => {
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
                            Đặt thêm giờ (Extra time)
                        </TableCell>
                        <TableCell className="text-white">
                            Tính theo chi phí 1h (Nếu trống)
                        </TableCell>
                        <TableCell className="text-right text-white">
                            {/* {formatCurrency(50)} */}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default PriceTable;
