import { ChangeEvent, FormEvent, useState } from "react";
import ErrorMessage from "../components/errorMessage";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/input";
import Button from "../components/button";

const Register = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const onFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
        setError('');
    }

    const onLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
        setError('');
    }

    const onPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
        setError('');
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setError('');
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setError('');
    }

    const onConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        setError('');
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const phoneRegex = new RegExp(/^[0-9]{10}$/);
        const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(firstName === '' || lastName === '' || phoneNumber === '' || email === '' || password === '') {
            setError('All fields are required');
            return;
        } else if(confirmPassword === '') {
            setError('Please confirm password');
            return;
        } else if(!phoneRegex.test(phoneNumber)) {
            setError('Please enter a valid phone number');
            return;
        } else if(!emailRegex.test(email)) {
            setError('Please enter a valid email');
            return;
        }
        registerUser();
    }

    const registerUser = () => {
        axios.post('http://localhost:8080/api/v1/auth/register', {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }, {
            withCredentials: true
        })
        .then((response) => {
            console.log(response)
            navigate('/home');
        })
        .catch((error) => {
            setError(error.response.data);
            console.log(error);
        });
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#e6e6e6',
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
                    <h1>Sign Up</h1>
                    {error && <ErrorMessage message={error} /> }
                    <form 
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '75%',
                            alignItems: 'center',
                        }}>
                        <Input type="text" placeholder="First name" onChange={onFirstNameChange} />
                        <Input type="text" placeholder="Last name" onChange={onLastNameChange} />
                        <Input type="tel" placeholder="Phone number" onChange={onPhoneNumberChange} />
                        <Input type="text" placeholder="Email" onChange={onEmailChange} />
                        <Input type="password" placeholder="Password" onChange={onPasswordChange} />
                        <Input type="password" placeholder="Confirm password" onChange={onConfirmPasswordChange} />
                        <br />
                        <Button type="submit" text='Register' />
                    </form>
                    <br />
                    <br />
                    <p>
                        Already have an account?
                        <Link
                            to='/'
                            style={{
                                color: '#007bff', 
                                textDecoration: 'none',
                            }}> Sign In</Link>
                    </p>                        
                </div>
            </div>
        </div>
    );
}

export default Register;