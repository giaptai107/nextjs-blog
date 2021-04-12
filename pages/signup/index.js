import React, { useState } from 'react';
import authAPI from '../../lib/api/auth';
import Layout from '../../components/header';
export default function SignIn() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        repassword: "",
        email: ""
    });
    const handleChange = (e) => {
        let obj = { [e.target.name]: e.target.value };
        setForm({ ...form, ...obj });
    };
    const handleSubmit = (e) => {
        // e.preventDefault();
        authAPI
            .signIn(form)
            .then(() => {
                // Router.push('/');
                location.href = '/';
            })
    };
    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <label>Username</label>
                <input type="text" name="username" onChange={handleChange} />
                <br />
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} />
                <br />
                <label>Re-password</label>
                <input type="password" name="repassword" onChange={handleChange} />
                <br />
                <label>Email</label>
                <input type="text" name="email" onChange={handleChange} />
                <br />
                <button>Submit</button>
            </form>
        </Layout>
    )
}