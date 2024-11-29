import { notification } from "antd";

export const makeNotfication = (status: "success" | "error", message: string, hasDescription: boolean = false) => {
    notification[status]({
        message,
        description: hasDescription ? "You cannot update/delete posts you created that its ID is bigger than 100!": "",
        placement: 'topRight',
        duration: 3
    });
}