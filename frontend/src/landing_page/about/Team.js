import React from "react";

function Team() {
    return ( 
        <div className="container">
        <div className="row p-3 mt-5   border-top">
            <h1 className=" mt-5 text-center">
                People
            </h1>
        </div>

        <div className="row p-3  text-muted fs-6" style={{lineHeight:"1.8", fontSize: "1.2em"}}>
           <div className="col-6 p-3 text-center">
             <img src="media/images/Aakanshi.jpg" style={{borderRadius:"100%",width:"50%"}}/>
             <h4 className="mt-5">Aakanshi Malik</h4>
             <h6>MERN Stack Developer</h6>

           </div>
           <div className="col-6 p-3 fs-5">
            <p>
            Aakanshi, a passionate MERN stack developer with a knack for building dynamic and user-friendly web applications. I thrive on transforming ideas into seamless online experiences, leveraging the power of React, Node.js, Express.js, and MongoDB.
            </p>

            {/* <p>
            Shee is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p> */}

            <p>
                Playing badminton is her zen.
            </p>

            <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a>
            </p>
            </div>
        </div>

       </div>
     );
}

export default Team;