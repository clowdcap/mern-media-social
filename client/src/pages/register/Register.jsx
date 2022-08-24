import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className="login center">
        <div className="login__wrapper">
            <div className="login__left">
                <h3 className="login__logo">José Social</h3>
                <span className="login__desc">Connect with friends and the world around you</span>
            </div>
            <div className="login__right">
                <div className="login__box">
                <input type="text" className="login__input" placeholder='Username' />
                    <input type="text" className="login__input" placeholder='E-Mail' />
                    <input type="text" className="login__input" placeholder='Password' />
                    <input type="text" className="login__input" placeholder='Password Again' />
                    <button className="login__button">Sing Up</button>
                    <button className="login__register__button">
                        Log into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register