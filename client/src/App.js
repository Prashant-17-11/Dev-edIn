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
import AddExperience from "./components/profile_form/AddExperience";
import AddEducation from "./components/profile_form/AddEducation";
import Profiles from "./components/Profiles/Profiles";
import Profile from "./components/Profile/Profile";
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
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profiles' element={<Profiles />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/create-profile' element={<CreateProfile />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/edit-profile' element={<EditProfile />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/add-experience' element={<AddExperience />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/add-education' element={<AddEducation />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
