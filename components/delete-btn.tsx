import { Button, Modal } from 'antd';
import useModalAction from '@/hook/use-modal-action';

interface IDeleteBtn {
    id: number;
}

const DeleteBtn = ({ id }: IDeleteBtn) => {
    const {
        showModal,
        closeModal,
        handleCancel
    } = useModalAction();

    const handleDelete = async (id: number) => {
        console.log('Post deleted:', id);
        closeModal();
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
                onOk={handleOk}
                onCancel={handleCancel} 
                okText="Yes"
                maskClosable={false}
                cancelText="No"
                okButtonProps={{ danger: true }}
            >
                <p>This action cannot be undone.</p>
            </Modal>
        </>
    );
};

export default DeleteBtn;
