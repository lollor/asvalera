"use client";

type EmailProps = {
    email: string;
};

export default function Email({ email }: EmailProps) {
    return (
        <p className="text-base lg:text-xl hover:underline cursor-pointer" onClick={e => window.open(`mailto:${email}`)}>{email}</p>
    )
}