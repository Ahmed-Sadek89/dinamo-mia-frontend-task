import { Button } from 'antd';
import { DataInput } from '@/types';
import ModalForm from './modal-form';
import useModalAction from '@/hook/use-modal-action';

const CreateBtn = () => {
    const {
        isModalOpen,
        form,
        showModal,
        closeModal,
        handleCancel
    } = useModalAction()

    const handleAdd = async (values: DataInput) => {
        console.log('Form created:', values);
        closeModal();
        form.resetFields();
    };

    return (
        <>
            <Button
                style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
                type="primary"
                onClick={showModal}
            >
                Create a new post
            </Button>
            <ModalForm
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleSubmit={handleAdd}
                modalTitle={`Add  a new Post`}
            />
        </>
    );
};

export default CreateBtn;
