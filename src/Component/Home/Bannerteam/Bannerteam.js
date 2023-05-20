import React from "react";
import './Bannerteam.css'
import waves from '../../../assets/waves.png'

const Bannerteam = () =>{
    return(
      <section className="banner-team">
        <div className="Banner-overlay">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h1>Let's Get Started</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        <br /> Consonantia, there live the blind texts.</p>
                        <button>Get Started</button>
                        
                </div>

            </div>
            
        </div>
        </div>
        <img src={waves} alt='red' className=" img-fluid" />
      </section>
      
    )
}

export default Bannerteam