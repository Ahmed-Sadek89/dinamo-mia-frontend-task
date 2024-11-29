"use server";

export const deletePost = async (postId: number) => {
    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/posts/${postId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Failed to delete post with ID: ${postId}`);
        }

        console.log(`Post with ID: ${postId} deleted successfully`);
        return true;
    } catch (error) {
        console.error("Error:", error);
        return false;
    }
};