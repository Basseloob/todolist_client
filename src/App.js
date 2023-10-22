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
  const [chosenHospital, setChoosenHsopital] = useState("Welcome");

  const showHabibData = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      const data = response.data.message;
      console.log(data);
    });

    setChoosenHsopital("Al-Habib");
  };
  const showManeaData = () => {
    console.log("this is Al-Habib Hospital");
    setChoosenHsopital("Al-Manea");
  };
  const showMowasatData = () => {
    console.log("this is Al-Habib Hospital");
    setChoosenHsopital("Al-Mowasat");
  };

  return (
    <div className="body">
      <div className="App"></div>
      <header className="header">
        <div className="headerBar">
          <h1 className="header_h1">{chosenHospital}</h1>
          <button className="header_BTN">Button</button>
          {/* <button></button> */}
        </div>
      </header>

      <div className="mainSideBar">
        <div className="sideBar">
          <div className="">
            <div className="closeSideBar">
              <button>CLOSE SIDEBAR arrow BTN</button>
            </div>
          </div>

          <nav className="sideBar_List">
            <div className="habibHospital">
              <div className="habibLogo"></div>
              <div className="listSubject" onClick={showHabibData}>
                Al-Habib
              </div>

              <span></span>
            </div>
            <div className="maneaHospital">
              <div className="maneaLogo"></div>
              <div className="listSubject" onClick={showManeaData}>
                Al-Manea
              </div>
            </div>
            <div className="mowasatHospital">
              <div className="mowasatLogo"></div>
              <div className="listSubject" onClick={showMowasatData}>
                Al-Mowasat
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="main">
        <div className="mainContainer">
          <div>
            LOLOLOLOLOLOLOLOOldddddddddddddddddddddddddddddddddddddddddddddd
          </div>
          <div></div>
        </div>
      </div>
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
