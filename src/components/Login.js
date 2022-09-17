import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [userDetail, setUserDetail] = useState([]);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      alert('Enter the Details');
    } else {
      const oneUser = {
        userName:userName,
        email:email,
        password:password,
      }
      setUserDetail([oneUser]);
      navigate('./deals');
    }
console.log(userDetail)
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <div className="login-title">
          <h2>Log in</h2>
        </div>
        <div className="form-control">
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            id="username"
            value={userName}
            placeholder = 'Enter Your Name'
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder= 'Enter Your Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="log-btn">
          <button type="submit" className="login-btn">
            Log in
          </button>
        </div>
      </form>
      {userName && (
        <div className="welcome-note">
          <h1>Welcome {userName}. . . !</h1>
        </div>
      )}
    </section>
  );
};

export default Login;
