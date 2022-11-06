import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layouts/Alert";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/register'
            element={
              <section className='container'>
                <Register />{" "}
              </section>
            }
          />
          <Route
            path='/login'
            element={
              <section className='container'>
                <Login />{" "}
              </section>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
