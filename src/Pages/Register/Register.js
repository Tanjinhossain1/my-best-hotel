import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div>

            <div>
                <div>
                    <form className='form-container'>
                        <div>
                            <div className='input-group'>
                                <label htmlFor="email">Email</label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="" placeholder='Email' required />
                            </div>
                            <div className='input-group'>
                                <label htmlFor="password">Password</label>
                                <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="" placeholder='Password' required />
                            </div>
                            <div className='input-group'>
                                <label htmlFor="confirm-password">Confirm-Password</label>
                                <input onBlur={(e) => setConfirmPassword(e.target.value)} type="password" name="password" id="" placeholder='Confirm-Password' required />
                            </div>
                            <input className='btn-submit' type="submit" value="Login" />
                            <p>Already  hove an Account? <Link to='/login'>Login</Link></p>
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
        </div>
    );
};

export default Register;