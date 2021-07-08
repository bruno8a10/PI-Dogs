import React from 'react';
import  "./Card.css"
import { Link } from "react-router-dom";

export default function Card({id,name, image,temperament}) {

  return (
    <div className = "movieCard" >
         <h4 >{name}</h4>
         <div>
           <Link to={`/Detalle/${id}`}>   
           <img className = "movieImage"
              width = "320px" height = "120px"
              src={image}
             alt={name}
            />
            </Link>
         </div>
         <h4 >{temperament}</h4>

    </div>
  )
    
  
};