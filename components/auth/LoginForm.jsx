'use client'

import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const LoginForm = () => {

    const [error, setError] = useState('');
    const formRef = useRef();
    const { setAuth } = useAuth();
    const router = useRouter();


    // contect database for authentication
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const found = await performLogin(formData);

            if (found) {
                setAuth(found);
                router.push('/');
            } else {
                setError('Please provide a valid login credential');
            }

        } catch (err) {
            setError(err.message);
            formRef.current.reset();
        }
    }

    return (
        <>
            <form className="login-form" onSubmit={onSubmit} ref={formRef}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button
                    type="submit"
                    className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
                >
                    Login
                </button>
                {error && <p className=" text-red-400 mt-4">{error}</p>}
            </form>
        </>
    );
};

export default LoginForm;