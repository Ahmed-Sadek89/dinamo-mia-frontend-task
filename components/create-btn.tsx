import { Button } from 'antd';
import { DataInput, Post } from '@/types';
import ModalForm from './modal-form';
import useModalAction from '@/hook/use-modal-action';
import { createPost } from '@/action/create-post';

const CreateBtn = ({ posts, onNewPost }: { posts: Post[] | undefined, onNewPost: (newPost: Post) => void }) => {
    const {
        isModalOpen,
        form,
        showModal,
        closeModal,
        handleCancel
    } = useModalAction()

    const handleAdd = async (values: DataInput) => {
        try {
            const res = await createPost(values);
            const newPost = {
                ...res,
                id: posts ? posts.length + 1 : 1,
            };
            onNewPost(newPost);
            closeModal();
            form.resetFields();
        } catch (error) {
            console.error("Error adding post:", error);
        }
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
                modalTitle={`Add a new Post`}
            />
        </>
    );
};

export default CreateBtn;
