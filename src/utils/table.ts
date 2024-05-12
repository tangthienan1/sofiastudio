import { PriceTableDataType } from '@/data';

export const getPriceTableData = (mileStoneTable: PriceTableDataType[]) => {
    if (!mileStoneTable.length) {
        throw new Error('PriceTableDataType is empty!');
    }

    const initialTableData: PriceTableDataType[] = [];

    for (let i = 0; i < mileStoneTable[0].numberOfHour; i++) {
        initialTableData.push({
            numberOfHour: i + 1,
            fee: mileStoneTable[0].fee,
        });
    }

    let current = 1;

    let result = [...initialTableData];

    while (current < mileStoneTable.length) {
        if (current === mileStoneTable.length - 1) {
            return (result = [...result, mileStoneTable[mileStoneTable.length - 1]]);
        }

        for (
            let i = result[result.length - 1].numberOfHour;
            i < mileStoneTable[current + 1].numberOfHour - 1;
            i++
        ) {
            result.push({
                numberOfHour: i + 1,
                fee: mileStoneTable[current].fee,
            });
        }

        current++;
    }

    return result;
};
