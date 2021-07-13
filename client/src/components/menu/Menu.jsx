import React from "react";
import "./Menu.css";  
import { Link } from "react-router-dom";
import {ordenAZ, ordenZA,ordenMax,ordenMin} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
export default function NavBar() {
const dispatch = useDispatch();
const ordenarNombre = useSelector(state => state.dogs)
const ordenarPeso = useSelector(state => state.dogs)
function AZ(){
  dispatch(ordenAZ(ordenarNombre));
}
function ZA(){
  dispatch(ordenZA(ordenarNombre));
}

function MAX(){
  dispatch(ordenMax(ordenarPeso));
}
function MIN(){
  dispatch(ordenMin(ordenarPeso));
}
  return (
     <div >
     
     <nav>
  <ul>
    <li>
      <a href="/Home">Home</a>
    </li>
    <li>
        <button  className="button4" onClick={AZ} >Ordenar A-Z</button>
    </li>
    <li>
    <button className="button4" onClick={ZA} >Ordenar Z-A</button>
    </li>
    <li>
        <button  className="button4" onClick={MAX} >Ordenar Min-Max</button>
    </li>
    <li>
    <button className="button4" onClick={MIN} >Ordenar Max-Min</button>
    </li>

    <li>
      <a href="/Alta">Agregar</a>
    </li>
  </ul>
</nav>
      
    </div> 
  );
}