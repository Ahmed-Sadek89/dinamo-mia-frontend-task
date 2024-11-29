"use server";
import { Post } from "@/types";

export const getPosts = async (): Promise<Post[] | undefined> => {
    try {

        const response = await fetch(`${process.env.BACKEND_LINK}/posts`,{
            method: "GET",
            headers: {
                "Content-Type": "Application/json"
            },
        })

        const posts = await response.json();

        return posts;
        
    } catch (error) {
        throw new Error(`Unexpected error: ${error}`);
    }
};
