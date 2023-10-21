import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
// Pages :
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisteredUsers from "./pages/RegisteredUsers";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/registration">Registeration</Link>
          </div>
        </div>
        <div>
          <Routes>
            {/* <Home /> */}
            {/* <Login /> */}
            {/* <RegisteredUsers /> */}
            <Route path="/" exact Component={Home} />
            <Route path="/login" exact Component={Login} />
            <Route path="/register" exact Component={RegisteredUsers} />
            <Route path="/registration" exact Component={Register} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
