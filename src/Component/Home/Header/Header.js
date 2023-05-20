import React from "react";
import './Header.css'
import waves from '../../../assets/waves.png'

const Header = () =>{
    return(
        
        <header>
         <div className="header-overlay">

         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <h2>We help startups launch their products</h2>
               <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
               <form>
                <input type='email' placeholder="email" />
                <button type='submit' >Subscribe</button>
               </form>
             </div>
           </div>
         </div>
         </div>
         <img src={waves} alt='red'  />
       

        </header>
    )
}

export default Header