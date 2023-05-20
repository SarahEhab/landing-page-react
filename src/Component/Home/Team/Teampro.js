import React from "react";

const Teampro = (props) =>{
    return(
     <div className="box">
          <img src={props.img} alt='pic' />
         <h3>{props.name}</h3>
           <h6>{props.job}</h6>
     </div>
    )
}



export default Teampro