import { Post } from '@/types';
import { useState } from 'react'
import { ColumnsType, ColumnType, ColumnGroupType } from "antd/es/table";
import { columns } from '@/utils/custom-table-columns';

const useCustomTableAction = (data: Post[] | undefined) => {
    const [pageSize, setPageSize] = useState(5);
    const [searchText, setSearchText] = useState("");

    const handlePageSize = (page: number) => {
        setPageSize(page)
    }

    const handleSearchText = (text: string) => {
        setSearchText(text)
    }
    const filteredData = data?.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.body.toLowerCase().includes(searchText.toLowerCase())
    );

    function isColumnWithDataIndex(col: ColumnGroupType<Post> | ColumnType<Post>): col is ColumnType<Post> {
        return (col as ColumnType<Post>).dataIndex !== undefined;
    }
    
    const updatedColumns: ColumnsType<Post> = columns.map((col) => {
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
        return col
    });

    return {
        pageSize,
        handlePageSize,
        handleSearchText,
        filteredData,
        updatedColumns
    }
}

export default useCustomTableAction
