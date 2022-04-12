import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (

        <div>
            <div>
                <form className='form-container'>
                    <div>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={(e)=>setEmail(e.target.value)} type="email" name="email" id="" placeholder='Enter Email' required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={(e)=>setPassword(e.target.value)} type="password" name="password" id="" placeholder='Enter Password' required />
                        </div>
                        <input className='btn-submit' type="submit" value="Login" />
                        <p>Don't hove Account? <Link to='/register'>Create new account</Link></p>
                        <div className='or-container'>
                            <hr />
                            <p>or</p>
                            <hr />
                        </div>
                        <div className='img-container'>
                            <img width={60} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmG1gAjaWbxNjHKKSR0egQgTiOvIkOYnZeSX0_WfNr21xfC1OV6EtKDjPcFkp40IGZFA&usqp=CAU" alt="" />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;