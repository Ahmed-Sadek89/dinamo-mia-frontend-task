import { Post } from '@/types';
import { ColumnsType, ColumnType, ColumnGroupType } from "antd/es/table";
import { columns } from '@/utils/custom-table-columns';

function isColumnWithDataIndex(col: ColumnGroupType<Post> | ColumnType<Post>): col is ColumnType<Post> {
    return (col as ColumnType<Post>).dataIndex !== undefined;
}

export const updatedColumns: ColumnsType<Post> = columns.map((col) => {
    if (isColumnWithDataIndex(col)) {
        return {
            ...col,
            sorter: (a: Post, b: Post) => {
                const valueA = a[col.dataIndex as keyof Post];
                const valueB = b[col.dataIndex as keyof Post];

                if (typeof valueA === "string" && typeof valueB === "string") {
                    return valueA.localeCompare(valueB);
                }
                return (valueA as number) - (valueB as number);
            },
        };
    }
    return col;
});