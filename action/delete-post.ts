"use server"
import { DataInput } from "@/types";

export const createPost = async (data: DataInput) => {
    const postData = {
        ...data,
        userId: 1,
    };

    try {
        const response = await fetch(`${process.env.BACKEND_LINK}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error:", error);
    }
};
