import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import  "../Home/Home.css"
const Albums = () => {
  return (
    <div>
      <div className="Heading_Generics">
        <span>
        <h1>THE GENERICS</h1>
        <h2>Get our Latest Album</h2>
        
        <FaRegCirclePlay  style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",width:"15%",height:"20%",marginLeft:"300px",color:"skyblue",marginTop:"-10px"}}/>
        </span>
      </div>
      <div>
        <h1>Tours</h1>
        <div>
          <div>
            <span>JUL16</span>
            <span>DETROIT, MI</span>
            <span>DTE ENERGY MUSIC THEATRE</span>
            <button>BUY TICKETS</button>
          </div>
          <div>
            <span>JUL19</span>
            <span>TORONTO,ON</span>
            <span>BUDWEISER STAGE</span>
            <button>BUY TICKETS</button>
          </div>
          <div>
            <span>JUL 22</span>
            <span>BRISTOW, VA</span>
            <span>JIGGY LUBE LIVE</span>
            <button>BUY TICKETS</button>
          </div>
          <div>
            <span>JUL 29</span>
            <span>PHOENIX, AZ</span>
            <span>AK-CHIN PAVILION</span>
            <button>BUY TICKETS</button>
          </div>
          <div>
            <span>AUG 2</span>
            <span>LAS VEGAS, NV</span>
            <span>T-MOBILE ARENA</span>
            <button>BUY TICKETS</button>
          </div>
          <div>
            <span>AUG 7</span>
            <span>CONCORD, CA</span>
            <span>CONCORD PAVILION</span>
            <button>BUY TICKETS</button>
          </div>
        </div>
      </div>
      <div>
          <div>
            <h1>The Generics</h1>
          </div>
      </div>
    </div>
  
  );
};
export default Albums;
