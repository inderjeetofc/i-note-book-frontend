import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate()
    const [credentials, setcredentials] = useState({ email: "", password: "" })
    const handleOnChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const host = "http://localhost:3000"
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        let data = await fetch(`${host}/users/login`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
        data = await data.json()
        if (data.auth_token) {
            localStorage.removeItem('auth_token')
            localStorage.setItem('auth_token', data.auth_token)
            navigate('/')
        }
    }
    return (
        <>
            <div className='container my-3'>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" onChange={handleOnChange} placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' onChange={handleOnChange} className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </form>
            </div>
        </>
    )
}
