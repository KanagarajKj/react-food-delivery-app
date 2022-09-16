import React from 'react';
import Login from './Login';

const Home = () => {
  
  return (
    <section className="home">
      <div className="home-left">
        <div className="welcome-content">
          <h1>Welcome Our Last Minute Deals...</h1>
        </div>
        <div className="home-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRo6rIWiSmAexxiWJam7XOqNVohGcs8SAzdw&usqp=CAU"
            alt="Home-img"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdGgm1i--ImsixMtM_7mN5T0Qb2xI00zLeA&usqp=CAU"
            alt="Home-img"
          />
        </div>
        <div className='hot-deals'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAi4-8Ju_RMnjwT-gSLixoejnbspbESPbCHg&usqp=CAU"
            alt="icon "
          />
        </div>
      </div>

      <div className="login-component">
        <Login />
      </div>
    </section>
  );
};

export default Home;
