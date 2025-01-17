import { Button } from 'antd';
import { DataInput, Post } from '@/types';
import ModalForm from './modal-form';
import useModalAction from '@/hook/use-modal-action';
import { updatePost } from '@/action/edit-post';
import { makeNotfication } from '@/utils/make-notification';

interface IUpdateBtn {
    data: Post,
    onUpdate: (updatedPost: Post) => void;
}

const UpdateBtn = ({ data, onUpdate }: IUpdateBtn) => {
    const {
        isModalOpen,
        form,
        showModal,
        closeModal,
        handleCancel
    } = useModalAction()

    const handleUpdate = async (values: DataInput) => {
        try {
            const updatedPost = await updatePost(data.id, values);
            if (updatedPost) {
                onUpdate(updatedPost);
                closeModal();
                form.resetFields();
                makeNotfication('success', `Updating post number ${data.id} success!`)
            } else {
                makeNotfication('error', `Updating post number ${data.id} failed!`, true)
            }
        } catch (error) {
            console.error("Update failed:", error);
        }
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
