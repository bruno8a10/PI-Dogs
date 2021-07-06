import React from "react";
import "./Menu.css";  
import { Link } from "react-router-dom";
//import {ordenAZ, ordenZA} from "../../actions";
//import { useDispatch, useSelector } from 'react-redux';
export default function NavBar() {
// const dispatch = useDispatch();
// const ordenar = useSelector(state => state.pokemones)
// function AZ(){
//   dispatch(ordenAZ(ordenar));
// }
// function ZA(){
//   dispatch(ordenZA(ordenar));
// }

  return (
     <div >
     
     <nav>
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Ordenar Asc</a>
    </li>
    <li>
      <a href="#">Ordenar Des</a>
    </li>
    <li>
      <a href="#">Agregar</a>
    </li>
  </ul>
</nav>
      
    </div> 
  );
}