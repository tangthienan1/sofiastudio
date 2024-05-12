import { Text } from '../Text';
import { TableHead, TableHeader, TableRow } from '../ui';

export const PriceTableHeader = () => {
    return (
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
    );
};
