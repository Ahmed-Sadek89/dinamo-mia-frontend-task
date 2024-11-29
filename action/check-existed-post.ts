"use server"
export const checkExistedPost = async (postId: number) => {
    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/posts/${postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`post number ${postId} is not exist`);
        }
        return true
    } catch (error) {
        console.error(`Unexpected error: ${error}`)
    }
};