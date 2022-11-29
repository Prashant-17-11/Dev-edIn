import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layouts/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile_form/CreateProfile";
import EditProfile from "./components/profile_form/EditProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utitlity/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
          <Route element={<PrivateRoute />}>
            <Route
              path='/dashboard'
              element={
                <section className='container'>
                  <Dashboard />{" "}
                </section>
              }
            />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route
              path='/create-profile'
              element={
                <section className='container'>
                  <CreateProfile />{" "}
                </section>
              }
            />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route
              path='/edit-profile'
              element={
                <section className='container'>
                  <EditProfile />{" "}
                </section>
              }
            />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
