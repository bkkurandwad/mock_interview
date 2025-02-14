import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userEmail = Cookies.get("userMail");
        setUser({
            primaryEmailAddress: {
                emailAddress: userEmail || "",
            },
        });
    }, []);

    return { user };
};