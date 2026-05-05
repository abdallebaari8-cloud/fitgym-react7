import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">FIT<span className="text-red">GYM</span> LOGIN</h2>
        <p className="login-subtitle">Ku soo dhowow FitGym, fadlan geli xogtaada.</p>
        
        <form className="login-form">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Geli magacaaga" required />
          </div>
          
          <div className="input-group">
            <label>Age</label>
            <input type="number" placeholder="Geli da'daada" required />
          </div>
          
          <div className="input-group">
            <label>Gmail</label>
            <input type="email" placeholder="example@gmail.com" required />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="********" required />
          </div>
          
          <button type="submit" className="login-button">LOGIN</button>
          
          <div className="login-footer">
            <p>Ma haysatid account? <span className="text-red">Sign Up</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;