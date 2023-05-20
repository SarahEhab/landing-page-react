import React from "react";

const Userpro = (props) =>{
    return(
        <div className="box-user">
            <img src={props.img} alt="user" className="rounded-circle"  />
            <p>{props.text}</p>

        </div>
    )
}

export default Userpro