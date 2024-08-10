import nodeMailer from 'nodemailer';

interface EmailOptions {
    email: string;
    subject: string;
    html?: string;
}

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {

    await sendEmail({
        email,
        subject: "2FA Code",
        html: `<p>Your 2FA code: ${token}</p>`
    })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetlink = `${domain}/auth/new-password?token=${token}`;

    await sendEmail({
        email,
        subject: "Reset your password",
        html: `<p>Click <a href="${resetlink}">here<a/> to reset your password.</p>`
    })
};

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await sendEmail({
        email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here<a/> to confirm email.</p>`
    })
};

const sendEmail = async (options: EmailOptions): Promise<void> => {
    const transporter = nodeMailer.createTransport({
        service: process.env.EMAIL_SERVICE as string,
        auth: {
            user: process.env.EMAIL_USERNAME as string,
            pass: process.env.EMAIL_PASSWORD as string,
        },
    });

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        html: options.html,
    }

    await transporter.sendMail(mailOptions);
};