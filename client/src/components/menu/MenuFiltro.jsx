import React from "react";
import "./Menu.css";  
import { Link } from "react-router-dom";
import {ordenAZ, ordenZA,ordenMax,ordenMin} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import F1 from "../filtro/filtroNombre";
import F2 from "../filtro/filtro";
export default function NavBar() {
const dispatch = useDispatch();
const ordenarNombre = useSelector(state => state.dogs)
const ordenarPeso = useSelector(state => state.dogs)

  return (
     <div >
     
     <nav>
  <ul>
    <li>
      <a href="/Home">Home</a>
    </li>


    <li>
      <F1/>
    </li>
    <li>
      <F2/>
    </li>
  </ul>
</nav>
      
    </div> 
  );
}