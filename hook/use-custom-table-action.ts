import { Post } from '@/types';
import { useState } from 'react';

const useCustomTableAction = (data: Post[] | undefined) => {
    const [pageSize, setPageSize] = useState(5);
    const [filteredData, setFilteredData] = useState<Post[]>(data || []);

    const handlePageSize = (page: number) => {
        setPageSize(page);
    };
    
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
        handleAddNewPost,
        handleUpdateRow,
        handleDeleteRow
    };
};

export default useCustomTableAction;
