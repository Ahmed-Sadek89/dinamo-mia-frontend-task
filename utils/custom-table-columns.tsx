import React from 'react';
import { Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Post } from '@/types';

export const columns: ColumnsType<Post> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 40, // Custom width for the ID column
        render: (text: number) => <span>{text}</span>,
    },
    {
        title: 'User ID',
        dataIndex: 'userId',
        key: 'userId',
        width: 40, // Custom width for the User ID column
        render: (text: number) => <span>{text}</span>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: 60, // Custom width for the Title column
    },
    {
        title: 'Body',
        dataIndex: 'body',
        key: 'body',
        width: 100, // Custom width for the Body column
    },
    {
        title: 'Action',
        key: 'action',
        width: 100, // Custom width for the Action column
        render: (_, record) => (
            <Space size="middle">
                <Button type="primary" onClick={() => handleUpdate(record)}>
                    Update
                </Button>
                <Button type="default" danger onClick={() => handleDelete(record)}>
                    Delete
                </Button>
            </Space>
        ),
    },
];

// Define handlers for update and delete actions
const handleUpdate = (record: Post) => {
    console.log('Update record:', record);
};

const handleDelete = (record: Post) => {
    console.log('Delete record:', record);
};
