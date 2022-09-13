import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from './components/Home';
import Orders from './components/Orders';
import Deals from './components/Deals';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="deals"
            element={
              <ProtectedRoute user={user}>
                <Deals user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
