import React from "react";
import Data from "../../../Data";
import Servitem from "./Servitem";
import './Services.css';
import online from '../../../assets/online-world-1.svg'


const Services = () =>{
    const item = Data.serv.map((itembox)=>{
      
        return(
            <div className="col-md-4">
             <Servitem title={itembox.title} text={itembox.text}  icon={itembox.icon} />
            </div>
        )
            
    })


    return(
       <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
               <h2>OUR SERVICES</h2>
               <p>We craft digital, graphic and dimensional thinking, to create category leading brand 
                <br /> experiences that have meaning and add a value for our clients.</p>
            </div>
          </div>

          <div className="row">
                  {item}
          </div>


        <div className="row pic-section ">
         <div className="col-lg-6 col-md-6">
          <h3 className="info" >A digital web design studio creating <br /> modern & engaging online <br /> experiences</h3>
          <p className="info2"  >Separated they live in Bookmarksgrove right at the coast of the <br /> Semantics, a large language ocean. A small river named Duden <br /> flows by their place and supplies it with the necessary regelialia.</p>
          <ul>
           <li>We put a lot of effort in design.</li>
           <li>The most important ingredient of successful website.</li>
           <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
           <li>Submit Your Orgnization</li>

           <button>Learn More</button>
        </ul>
         </div>
        
        <div className="col-lg-6 col-md-6">
         <img src={online} alt='online' />

        </div>

        </div>

        </div>
       </section>
    )
} 
export default Services