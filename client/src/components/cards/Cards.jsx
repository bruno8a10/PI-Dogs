import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Cards.css"
import {getDogS} from "../../actions";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
function Cards(props) {
const estados = useSelector((state) => state);  
//    paginado
  const [numeroPagina, setPagina] = useState(1);
	const grupo = 8;
	const conteoFinal = numeroPagina * grupo;
	const conteoInicial = conteoFinal - grupo;
    const dogss = props.dogs.slice(conteoInicial,conteoFinal);
   const dogss2 = props.filtroTemperament.slice(conteoInicial,conteoFinal);
    useEffect(()=> {
        props.getDogS()
       },[])
    return (
    <div className="card">
       <div className="contenedor">
         ?{dogss2.length > 0 && dogss2.map(c=>
             <Card    
                 id={c.id}
                name={c.name}
                image={c.image}
                temperaments={c.temperaments}
             />    
         )}:
         {dogss && dogss.map(c=>
             <Card    
                 id={c.id}
                name={c.name}
                image={c.image}
                temperaments={c.temperaments}
             /> 
         )}
       </div>
       <div  >
             <button className="button1" onClick={() => setPagina(numeroPagina - 1)}>Anterior</button>
            <button  className="button1">{numeroPagina}</button>
            <button   className="button1" onClick={() => setPagina(numeroPagina + 1)}>Siguiente</button>
         </div>
     </div>
    )
};
function mapStateToProps(state){
    return {
        ...state
    }
    }
    function mapDispatchToProps(dispatch){
    return {
       
        getDogS: (query) => dispatch(getDogS(query))
    }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Cards)