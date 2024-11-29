"use server"
import { DataInput } from "@/types";

export const updatePost = async (postId: number, body: DataInput) => {
    console.log({postId, body})
    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
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