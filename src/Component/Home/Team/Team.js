import React from "react";
import './Team.css'
import Data from "../../../Data";
import Teampro from "./Teampro";
import Workkss from "./Workkss";



const Team = () =>{

    const teamitem = Data.team.map((itembox) =>{
        return(
            <div className="col-lg-3 col-md-3">
                <Teampro  img={itembox.img}  name={itembox.name} job={itembox.job} />

            </div>
        )
    })

    const workitem = Data.work.map((itembox) =>{
        return(
            <div className="col-lg-4 col-md-4">
              <Workkss icon={itembox.icon}  title={itembox.title}  text={itembox.text} />
            </div>
        )
    })

    

    return(
        <section className="Team  bg-light "  >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>BEHIND THE PEOPLE</h2>
                        <p>It is a long established fact that create category leading brand experiences a reader will be distracted by
                            <br /> the readable content of a page when looking at its layout.</p>

                    </div>
                </div>

                <div className="row">
                    {teamitem}
                </div>

                <div className="sec-work">
                    <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>WORK PROCESS</h2>
                        <p>In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web
                            <br /> copy before the Proin vitae ipsum vel ex finibus semper design starts.</p>

                    </div>
                    </div>

                    <div className="row">
                      {workitem}
                    </div>
                     
                     <button>Get Started</button>

                </div>

            </div>
        </section>
    )
}

export default Team