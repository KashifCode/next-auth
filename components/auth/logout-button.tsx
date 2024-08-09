"use client";

import { logout } from "@/actions/logout";

interface LogoutProps {
    children?: React.ReactNode;
}

export const LogoutButton = ({
    children
}: LogoutProps) => {
    const onClick = () => {
        logout();
    };

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};