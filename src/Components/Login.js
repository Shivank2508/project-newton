import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../ContextFile';

const Login = () => {
    const localData = useContext(DataContext)
    const formObj = {
        email: '',
        password: '',
    }
    const [formState, setFormState] = useState(formObj)
    const [formError, setFormError] = useState(formObj);
    const [status, setStatus] = useState(false);

    function handleInput(e) {
        const temObj = {};
        temObj[e.target.id] = e.target.value;
        setFormState({
            ...formState, ...temObj
        })

    }
    function handleButton() {
        localData.setContextState(formState.email)
        const st = validation();
        if (st) {
            setStatus(true);
        }
    }

    function validation() {
        let errorObj = {}
        var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailPattern.test(formState.email)) {
            errorObj.email = 'Email Format is incorrect'
        }
        if (formState.password === '') {
            errorObj.password = 'Password is empty'
        }

        setFormError(errorObj)

        if (Object.keys(errorObj).length > 0) {
            return false
        } else {
            return true
        }

    }
    useEffect(() => {
        console.log(formState.email + ' ' + formState.password)
    })
    return (
        <>
            <div className='signupForm'>
                <div className='SignUp-subClass'>
                    <h1 className='signupHeading' >Login</h1>
                    <h3 className='signupSubheading'>Don't Have Account<span><Link to="/signup">Signup</Link></span></h3>
                    <input type='text' placeholder='Email' id='email' onChange={handleInput} />
                    <div className='danger'>{formError.email}</div>
                    <input type='password' placeholder='Password' id='password' onChange={handleInput} />
                    <div className='danger'>{formError.password}</div>
                    <button onClick={handleButton}>Login</button>

                    {
                        status && <div className="alert alert-success" role="alert">Success <span><Link to='/home'>home</Link></span></div>
                    }
                </div>

            </div>
        </>

    )
}

export default Login