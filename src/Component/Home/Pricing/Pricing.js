import React from "react";
import Data from "../../../Data";
import './Pricing.css'

const Pricing = () =>{

    const itemprice = Data.pricing.map((itembox) =>{
        return(
           <div className="col-lg-4 col-md-4">
            <div className="box">
                <ul>
                  <li>{itembox.title}</li>
                  <li><h2>{itembox.price}</h2></li>
                  <li><h4>{itembox.time}</h4></li>
                  <li> Bandwidth : <span>{itembox.Bandwidth}</span></li>
                  <li>Onlinespace : <span>{itembox.Onlinespace}</span></li>
                  <li>Domain : <span>{itembox.Domain}</span></li>
                  <li>Support : <span> {itembox.Support}</span></li>
                  <li>HiddenFees : <span>{itembox.HiddenFees}</span></li>
                </ul>
              <button>Join Now</button>
            </div>
           </div>
        )
    })

    return(
        <section className="pricing">
          <div className="container">

            <div className="row">
             <div className="col-lg-12 col-md-12">
                <h2>OUR PRICING</h2>
                <p>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out
                    <br /> with amazing options.</p>
             </div>
            </div>

            <div className="row">
                {itemprice}

            </div>
          </div>
        </section>
    )
}

export default Pricing