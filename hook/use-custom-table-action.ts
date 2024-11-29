import { Post } from '@/types';
import { useState } from 'react';
import { ColumnsType, ColumnType, ColumnGroupType } from "antd/es/table";
import { columns } from '@/utils/custom-table-columns';

const useCustomTableAction = (data: Post[] | undefined) => {
    const [pageSize, setPageSize] = useState(5);
    const [filteredData, setFilteredData] = useState<Post[]>(data || []);

    const handlePageSize = (page: number) => {
        setPageSize(page);
    };

    
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
        return col;
    });
    
    const handleAddNewPost = (newPost: Post) => {
        setFilteredData((prevData) => [newPost,...prevData ]);
    };

    const handleUpdateRow = (updatedPost: Post) => {
        const updatedData = filteredData.map((post) =>
            post.id === updatedPost.id ? { ...post, ...updatedPost } : post
        );
        setFilteredData(updatedData);
    };

    const handleDeleteRow = (postId: number) => {
        const updatedData = filteredData.filter((post) => post.id !== postId);
        setFilteredData(updatedData);
    };
    return {
        pageSize,
        handlePageSize,
        filteredData,
        updatedColumns,
        handleAddNewPost,
        handleUpdateRow,
        handleDeleteRow
    };
};

export default useCustomTableAction;
