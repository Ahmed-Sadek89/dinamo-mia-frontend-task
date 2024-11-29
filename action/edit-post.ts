"use server"
import { DataInput } from "@/types";
import { checkExistedPost } from "./check-existed-post";

export const updatePost = async (postId: number, body: DataInput) => {
    try {
        const checkPost = await checkExistedPost(postId);
        if (checkPost) {
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
            return data
        } 
    } catch (error) {
        console.error(`Unexpected error: ${error}`)
    }
};