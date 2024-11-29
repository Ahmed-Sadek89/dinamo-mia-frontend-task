import React from 'react';
import { Modal, Form, Input } from 'antd';
import { DataInput } from '@/types';

interface IModalForm {
    isModalOpen: boolean,
    handleCancel: () => void,
    handleSubmit: (values: DataInput) => Promise<void>,
    modalTitle: string,
    defaultData?: DataInput
}

const ModalForm = ({ isModalOpen, handleCancel, handleSubmit, modalTitle, defaultData }: IModalForm) => {
    const [form] = Form.useForm();
    const handleOk = () => {
        form.submit();
    };
    
    return (
        <Modal
            title={modalTitle}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please enter the title' }]}
                    initialValue={defaultData && defaultData.title}
                >
                    <Input placeholder="Enter title" />
                </Form.Item>
                <Form.Item
                    name="body"
                    label="Body"
                    rules={[{ required: true, message: 'Please enter the body' }]}
                    initialValue={defaultData && defaultData.body}
                >
                    <Input.TextArea rows={4} placeholder="Enter body" />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalForm
