import React, { useEffect, useState } from "react";
import {getTemperament} from "../../actions";
import { connect } from 'react-redux'; 
import {getDogS} from "../../actions";
import "../filtro/filtro.css"
import { useDispatch, useSelector } from 'react-redux';

 function FiltroNombre(props) {
const dispatch = useDispatch();
const pFiltro = useSelector(state => state.dogs)
 //______________pase a grupal_______
function fn2(e) {
    alert("entrooo" + e.target.value)
    dispatch(getDogS(e.target.value));
}
 //___________________________________
      //treaera todo los tipos de pokemones
const [inPoke, setInPoke] = useState({
  poks: []
})
  function handlePoke (e) {
    props.getDogS(e.target.value)  
    setInPoke({
      poks:[...inPoke.poks, props.types]
    })   
  }
  	useEffect(() => {
    props.getDogS()
  	},[])
  return (
    <div>
        <select className="select-css"   name="filtro"  onChange={(e) => fn2(e)} >
          <option value="">Raza</option>
          {props.dogs && props.dogs.map(c => (
            <option value={c.name} name="c.name">{c.name}</option>
          ))}
         </select>
    </div>
  );
}
  function mapStateToProps(state){
    return {
      ...state
    }
  }
  //Actions
  function mapDispatchToProps(dispatch) {
    return {
        getDogS:(query) => dispatch(getDogS(query)),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(FiltroNombre);