import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="form-container">
            <div className="form-wrapper">
                <span className='reg-logo'>ChitChat</span>
                <span className='reg-title'>Login</span>
                <form>
              
                    <input className='wrapper-input' type='email' placeholder='Email address' required/>
                    <input className='wrapper-input' type='Password' placeholder='Password' required/>
                    
                    <button className='wrapper-btn'>Login in</button>
                    
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>

    </div>
  )
}

export default Login