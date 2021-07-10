import React from "react";
import "./Menu.css";  
import { Link } from "react-router-dom";
import {ordenAZ, ordenZA} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
export default function NavBar() {
const dispatch = useDispatch();
const ordenar = useSelector(state => state.dogs)
function AZ(){
  dispatch(ordenAZ(ordenar));
}
function ZA(){
  dispatch(ordenZA(ordenar));
}
  return (
     <div >
     
     <nav>
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
        <button  className="button4" onClick={AZ} >Ordenar A-Z</button>
    </li>
    <li>
    <button className="button4" onClick={ZA} >Ordenar Z-A</button>
    </li>
    <li>
      <a href="/Alta">Agregar</a>
    </li>
  </ul>
</nav>
      
    </div> 
  );
}