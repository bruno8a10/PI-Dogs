import React from 'react';
import  "./Card.css"
import { Link } from "react-router-dom";

export default function Card({id,name, image}) {

  return (
    <div className = "movieCard" >
         <h4 >{name}</h4>
         <div>
           <Link to={`/detalleDog/${id}`}>   
           <img className = "movieImage"
              width = "250px" height = "120px"
              src={image}
             alt={name}
            />
            </Link>
            
         </div>
         <h4 >{id}</h4>

    </div>
  )
    
  
};