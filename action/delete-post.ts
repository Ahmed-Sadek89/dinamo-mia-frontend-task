"use server";

import { checkExistedPost } from "./check-existed-post";

export const deletePost = async (postId: number) => {
    try {
        const existedPost = await checkExistedPost(postId);
        if (existedPost) {
            const response = await fetch(`${process.env.BACKEND_LINK}/posts/${postId}`, {
                method: "DELETE",
            });
    
            if (!response.ok) {
                throw new Error(`Failed to delete post with ID: ${postId}`);
            }
            return true;
        }
    } catch (error) {
        console.error(`Unexpected error: ${error}`)
    }
};