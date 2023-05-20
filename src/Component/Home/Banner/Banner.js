import React from "react";
import './Banner.css'
import waves from '../../../assets/waves.png'
const Banner =() =>{
    return(
        <section className="Banner">
            <div className="Banner-overlay">
            <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
               <h2>Build your dream website today</h2>
               <p>But nothing the copy said could convince her and so it didn’t take long until a few 
                <br /> insidious Copy Writers ambushed her.</p>
                <button>View Plan & Pricing</button>
              </div>
            </div>
           </div>
           <img src={waves} alt='red' className=" img-fluid" />
            </div>
           
        </section>
    )
}

export default Banner