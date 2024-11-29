"use server";
import { Post } from "@/types";
import { revalidatePath } from "next/cache";

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
        console.error("Unexpected error:", error);
    }
    revalidatePath("/")
};
