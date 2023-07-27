import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import News from "./components/News";
import Footer from "./components/Footer";
import CreateNews from "./components/CreateNews";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Table from "./Table";
import { useState } from "react";


function App() {
  const [token,setToken]=useState(localStorage.getItem("token"))
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={token?<Navigate to="/Dashboard"/>:<Home />} />
          <Route path="/Dashboard" element={token?<Dashboard />:<Navigate to="/"/>}>
            <Route path="form" element={<Login />} />
            <Route path="createnews" element={<CreateNews />} />
            <Route path="form2" element={<Registration />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="/Footer" element={<Footer />} />
          <Route path="/CreateNews" element={<CreateNews />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={token?<Navigate to="/Dashboard"/>:<Login />} />
          <Route path="/News" element={<News />} />
        </Routes>
      </Router>
{/* <Table/> */}

       
    
    </div>
  );
}

export default App;
