import { Button, Modal } from 'antd';
import useModalAction from '@/hook/use-modal-action';
import { deletePost } from '@/action/delete-post';
import { makeNotfication } from '@/utils/make-notification';

interface IDeleteBtn {
    id: number;
    onDetele: (postId: number) => void
}

const DeleteBtn = ({ id, onDetele }: IDeleteBtn) => {
    const {
        isModalOpen,
        showModal,
        closeModal,
        handleCancel
    } = useModalAction();

    const handleDelete = async (id: number) => {
        try {
            const res = await deletePost(id);
            if (res) {
                onDetele(id);
                closeModal();
                makeNotfication('success', `Deleting post number ${id} success!`)
            } else {
                makeNotfication('error', `Deleting post number ${id} failed!`, true)
            }
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    const handleOk = () => {
        handleDelete(id);
    };

    return (
        <>
            <Button type="default" danger onClick={showModal}>
                Delete
            </Button>
            <Modal
                title={`Are you sure to delete post number ${id}?`}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false}
                okText="Yes"
                cancelText="No"
                okButtonProps={{ danger: true }}
            >
                <p>This action cannot be undone.</p>
            </Modal>
        </>
    );
};

export default DeleteBtn;
