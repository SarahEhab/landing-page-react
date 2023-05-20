import React from "react";

const Blogpro = (props) =>{
    return(
        <div className="blog-box">
         <img src={props.img} alt='blog' />
         <div className="info-blog">
         <h5>{props.job}</h5>
         <h4>{props.text}</h4>
         <p>{props.des}</p>
         <button>Read More</button>
         </div>
         
        </div>
    )
}

export default Blogpro