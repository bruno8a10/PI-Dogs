import React, { useEffect, useState } from "react";
import {getTemperament} from "../../actions";
import { connect } from 'react-redux'; 
import {filtroP} from "../../actions";
import "../filtro/filtro.css"
import { useDispatch, useSelector } from 'react-redux';
 function Filtro(props) {
const dispatch = useDispatch();
const pFiltro = useSelector(state => state.dogs)
 //______________pase a grupal_______
function fn2(e) {
    alert("entrooo" + e.target.value)
    dispatch(filtroP(pFiltro, e.target.value));
}
 //___________________________________
      //treaera todo los tipos de pokemones
const [inPoke, setInPoke] = useState({
  poks: []
})
  function handlePoke (e) {
    props.getTemperament(e.target.value)  
    setInPoke({
      poks:[...inPoke.poks, props.types]
    })   
  }
  	useEffect(() => {
    props.getTemperament()
  	},[])
  return (
    <div>
        <select className="select-css"   name="filtro"  onChange={(e) => fn2(e)} >
          <option value="">Temperamento</option>
          {props.temperament && props.temperament.map(c => (
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
        getTemperament:() => dispatch(getTemperament()),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Filtro);