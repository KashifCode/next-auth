"use server";

import * as z from 'zod';
import { NewPasswordSchema } from '@/schemas';
import { getPasswordResetTokenByToken } from '@/data/password-reset-token';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const newPassword = async (values: z.infer<typeof NewPasswordSchema>, token: string| null) => {
    if(!token) {
        return { error: "Missing token!" };
    }

    const validatedFields = NewPasswordSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "Invalid Passsword!"};
    }

    const { password } = validatedFields.data;

    const exisitngToken = await getPasswordResetTokenByToken(token);

    if(!exisitngToken) {
        return { error: "Invalid token!"};
    }

    const hasExpired = new Date(exisitngToken.expires) < new Date();

    if(hasExpired) {
        return { error: "Token has expired!"};
    }

    const existingUser = await getUserByEmail(exisitngToken.email);

    if(!existingUser) {
        return { error: "Email does not exist!"};
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
        where: {
            id: existingUser.id,
        },
        data: {
            password: hashedPassword,
        }
    });

    await db.passwordResetToken.delete({
        where: {
            id: exisitngToken.id,
        }
    });

    return { success: "Password updated!"};
}