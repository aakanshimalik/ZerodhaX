import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import  Signup from "./pages/Signup";
import Home from "./pages/Home";
// import ZerodhaHome from "./pages/ZerodhaHome";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
   </div>
  );
}

export default App;