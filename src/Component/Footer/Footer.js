import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3">
                        <h4>DORSIN</h4>
                         <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Contact us</li>
                         </ul>
                        
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <h4>Information</h4>
                         <ul>
                            <li>Terms</li>
                            <li>About us</li>
                            <li>BooksMarkers</li>
                            <li>Job</li>
                         </ul>
                        
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <h4>Support</h4>
                         <ul>
                            <li>FAQ</li>
                            <li>Contact</li>
                            <li>Careers</li>
                         </ul>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <h4>subscribe</h4>
                         <p>
                         In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.
                         </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer