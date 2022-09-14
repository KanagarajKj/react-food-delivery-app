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
      console.log('Enter the Details');
    } else {
      const userDetails = {
        userName:userName,
        email:email,
        password:password,
      }
      setUserDetail([...userDetail, userDetails]);
      navigate('./deals');
    }

    console.log(userDetail);
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='log-btn'>
          <button type="submit" className="login-btn">
            Log in
          </button>
        </div>
      </form>
      <div>
        {userDetail.map((person, index) => {
          return (
            <div key={index}>
              <h4>{person.userName}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Login;
