import { DataInput } from "@/types";

export const updatePost = async (postId: number, data:DataInput) => {
    const updatedData = {
        ...data,
        userId: 1,
    };

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error("Failed to update post");
        }

        const data = await response.json();
        console.log("Post updated:", data);
        return data
    } catch (error) {
        console.error("Error:", error);
    }
};
