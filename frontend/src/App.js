import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import PostOverview from "./Pages/PostOverview";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/posts" element={<PostOverview />}></Route>
          <Route exact path="/myprofile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
