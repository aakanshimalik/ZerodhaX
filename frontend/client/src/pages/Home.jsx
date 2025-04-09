import React from "react";

// const Home = () => {
//   return <h1>Home PAGE</h1>;
// };

// export default Home
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies} from "react-cookie";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      try{
      const { data } = await axios.post(
        "https://zerodhaclone-ofq0.onrender.com",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      // return status
      //   ? toast(`Hello ${user}`, {
      //       position: "top-right",
      //     })
      if(status){
        window.location.href = `https://zerodhaclone-2-7eac.onrender.com?username=${user}`;
      }else{
        removeCookie("token");
        navigate("/login");
      }}catch(err){
         console.error(err);
         removeCookie("token");
         navigate("/login");
      }
        // : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        
        <div style={{height : '100vh', width:"100vw",margin: 0, padding: 0}}>
       <button onClick={Logout} style={{
        backgroundColor: "#f44336",
        color:"black",
        
        border:"none",
        borderRadius:"4px",
        cursor:"pointer"
       }}>LOGOUT</button>   
        <iframe src="https://zerodhaclone-2-7eac.onrender.com" title="Dashboard" style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding:0,
          top: 0,
          left: 0,
          position: "absolute",
        }} />
      </div>
      </div>
      <ToastContainer />

      

    </>
  );
};

export default Home;
