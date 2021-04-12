import React, { useState } from 'react';
import authAPI from '../../lib/api/auth';
import Layout from '../../components/header';
export default function SignIn() {
    const [form, setForm] = useState({ username: "", password: "" });
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
                <h1>Sign in</h1>
                <label>Username</label>
                <input type="text" name="username" onChange={handleChange} />
                <br />
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} />
                <br />
                <button>Submit</button>
            </form>
        </Layout>
    )
}