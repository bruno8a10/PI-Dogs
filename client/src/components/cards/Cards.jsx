import React, {  useState } from "react";
import Card from "./Card";
import "./Cards.css"
import {getDogS} from "../../actions";
import { connect } from 'react-redux';

function Cards(props) {
//    paginado
  const [numeroPagina, setPagina] = useState(1);
	const grupo = 8;
	const conteoFinal = numeroPagina * grupo;
	const conteoInicial = conteoFinal - grupo;
    const dogss = props.dogs.slice(conteoInicial,conteoFinal)
    console.log(dogss)
    return (
    <div className="card">
       <div className="contenedor">
            { dogss && dogss.map(c=>
            <div>
             <Card    
                 id={c.id}
                name={c.name}
                image={c.image}
                temperament={c.temperament}
             /> 
             
           </div>
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