import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Workkss =(props)=>{
    return(
        <div className="boxx">
                  <FontAwesomeIcon icon={props.icon} />
                   <h3>{props.title}</h3>
                   <h6>{props.text}</h6>
                </div>
    )}

    export default Workkss
