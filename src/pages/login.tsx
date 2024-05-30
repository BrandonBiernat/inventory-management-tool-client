import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import ErrorMessage from "../components/errorMessage";
import axios from "axios";
import { LoginResponse } from "../types/LoginResponse";

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [response, setResponse] = useState<LoginResponse>();

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setError('');
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setError('');
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(email === '' || password === '') {
            setError('Both email and password are required');
            return;
        }
        loginUser();
    }

    const loginUser = () => {
        axios.post('http://localhost:8080/api/v1/auth/login', {
            email: email,
            password: password
        })
        .then((response) => {
            setResponse(response.data);
            console.log(response);
        })
        .catch((error) => {
            if(error.response.status === 403) {
                setError('Email or password incorrect');
            } 
            console.log(error);
        });
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f0f0',
        }}>
            <div style={{
                display: 'flex',
                width: '100%',
                maxWidth: '400px',
                border: 'none',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '2px 4px 6px 0 rgba(0, 0, 0, 0.2)',
                backgroundColor: 'white'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <h1>Login</h1>
                    {error && <ErrorMessage message={error} /> }
                    <form 
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '75%',
                            alignItems: 'center',
                        }}>
                        <Input type="text" placeholder="Email" onChange={onEmailChange} />
                        <Input type="password" placeholder="Password" onChange={onPasswordChange} />
                        <div style={{
                            width: '100%',
                            textAlign: 'right',
                            marginTop: '5px'
                        }}>
                            <a 
                                href="" 
                                style={{ 
                                    color: '#007bff', 
                                    textDecoration: 'none',
                                    fontSize: '.9em'
                                }}
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <br />
                        <Button type="submit" text='Login' />
                    </form>
                    <br />
                    <br />
                    <p>
                        Don't have an account?
                        <a 
                            href=""
                            style={{ 
                                    color: '#007bff', 
                                    textDecoration: 'none',
                            }}> Sign Up</a>
                    </p>                        
                </div>
            </div>
        </div>
    );
}

export default Login;