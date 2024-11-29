import { Button } from 'antd';
import { DataInput, Post } from '@/types';
import ModalForm from './modal-form';
import useModalAction from '@/hook/use-modal-action';

interface IUpdateBtn {
    data: Post
}

const UpdateBtn = ({ data }: IUpdateBtn) => {
    const {
        isModalOpen,
        form,
        showModal,
        closeModal,
        handleCancel
    } = useModalAction()

    const handleUpdate = async (values: DataInput) => {
        console.log('Form updated:', values);
        closeModal();
        form.resetFields();
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Edit
            </Button>
            <ModalForm
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                defaultData={{ title: data.title, body: data.body }}
                handleSubmit={handleUpdate}
                modalTitle={`Edit on Post number #${data.id}`}
            />
        </>
    );
};

export default UpdateBtn;
