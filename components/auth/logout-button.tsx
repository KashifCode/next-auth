"use client";

import { logout } from "@/actions/logout";
import { usePathname } from "next/navigation";

interface LogoutProps {
    children?: React.ReactNode;
}

export const LogoutButton = ({
    children
}: LogoutProps) => {
    const pathname = usePathname();
    
    const search = new URLSearchParams(window.location.search).toString();
    const callbackUrl = pathname + search;
    
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    const onClick = () => {
        logout(encodedCallbackUrl);
    };

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};