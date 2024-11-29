import { useState } from 'react';
import {  Form } from 'antd';

const useModalAction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        closeModal();
        form.resetFields();
    };

  return {
    isModalOpen, 
    form,
    showModal,
    closeModal,
    handleCancel
  }
}

export default useModalAction
