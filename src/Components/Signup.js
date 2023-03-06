import React, { useEffect, useState } from 'react'
import './signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
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
        <div className='signupForm'>
            <div className='SignUp-subClass'>
                <h1 className='signupHeading' >Sign up</h1>
                <h3 className='signupSubheading'>Already a member?<span><Link to="/login">login</Link></span></h3>
                <input type='text' placeholder='Email' id='email' onChange={handleInput} />
                <div className='danger'>{formError.email}</div>
                <input type='password' placeholder='Password' id='password' onChange={handleInput} />
                <div className='danger'>{formError.password}</div>
                <button onClick={handleButton}>Sign Up</button>

                {
                    status && <div class="alert alert-success" role="alert">Success</div>
                }

            </div>

        </div>
    )
}

export default Signup