import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/register'
          element={
            <section className='container'>
              <Register />
            </section>
          }
        />
        <Route
          path='/login'
          element={
            <section className='container'>
              <Login />
            </section>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
