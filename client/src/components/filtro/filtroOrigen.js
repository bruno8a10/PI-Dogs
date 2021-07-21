import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'; 
import {filtroOrigen} from "../../actions";
import "../filtro/filtro.css"
import { useDispatch, useSelector } from 'react-redux';
 export default function FiltroOrigen(props) {
const dispatch = useDispatch();
const pFiltroOrigen = useSelector(state => state.dogs)
 //______________pase a grupal_______
function fn2(e) {
    alert("entrooo" + e.target.value)
    dispatch(filtroOrigen(pFiltroOrigen, e.target.value));
}
   //treaera todo los tipos de pokemones

 //___________________________________
      //treaera todo los tipos de pokemones
  return (
    <div>
        <select className="select-css"   name="filtroOrigen"  onChange={(e) => fn2(e)} >
          <option value="">Origen</option>
          <option value="Api">Api</option>
          <option value="Base">Base</option>
         </select>
    </div>
  );
}
