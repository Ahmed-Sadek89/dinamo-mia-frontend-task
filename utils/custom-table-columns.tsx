import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Post } from '@/types';

export const columns: ColumnsType<Post> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 40,
        render: (text: number) => <span>{text}</span>,
    },
    {
        title: 'User ID',
        dataIndex: 'userId',
        key: 'userId',
        width: 40,
        render: (text: number) => <span>{text}</span>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: 200,
    },
    {
        title: 'Body',
        dataIndex: 'body',
        key: 'body',
        width: 300,
    }
];
