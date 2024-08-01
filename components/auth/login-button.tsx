"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: 'modal' | 'redirect',
    asChild?: boolean,
}

export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {
    const { push } = useRouter()
    const onClick = () => {
        push('/auth/login')
    }

    if (mode === 'modal') {
        return (
            <span>
                Todo: Implement modal
            </span>
        )
    }
    return (
        <span onClick={onClick} className='cursor-pointer'>
            {children}
        </span>
    )
}