import React from "react";
import Data from '../../../Data'
import Userpro from "./Userpro";
import './Users.css'

const Users = () =>{

    const useritem = Data.user.map((itembox) =>{
        return (
            <div className="col-lg-4 col-md-4">

                <Userpro img={itembox.img} text={itembox.text}  />

            </div>
        )
    })

    return(
     <section className="Users">
      <div className="container">

        <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>WHAT THEY'VE SAID</h2>
              <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
                <br /> wild Question Marks and devious pulvinar metus molestie sed Semikoli.</p>
            </div>
        </div>

        <div className="row">
           {useritem}
        </div>
       

      </div>
     </section>
    )
}

export default Users