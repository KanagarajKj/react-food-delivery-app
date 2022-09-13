import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !email) {
      console.log('Enter the Details');
    } else {
      setUser({ userName: userName, email: email });
      navigate('/deals');
    }
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_control">
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form_control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Login;
