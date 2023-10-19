import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignedUsers from "./pages/SignedUsers";

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <SignedUsers />
    </div>
  );
}

export default App;
