import React, { useEffect } from "react";
import {getDetalleDog,getTypes, emptyDetalleDog} from "../../actions";
import {connect} from 'react-redux';
import logo from "../../img/apiDog.png";
import Spinner from "../Spinner";
import "./DetalleDog.css"; 
import { Link } from "react-router-dom";
import Menu2 from "../menu/Menu2";

function DetalleDog(props) {
  //const id= data.getDetallePokemon(data.match.params.id)
  const id= props.match.params.id;
  useEffect(()=>{
    props.emptyDetalleDog()
    props.getDetalleDog(id)    
  },[id])

    return (
      <div  translate ="no">  
        <p className="centrado">
          <img width = "600px" height = "150px" src={logo} ></img>
          </p> 
     <Menu2/>
      <div>
      <p className="centrado">
      <h4 >Detalle Perro</h4>
      </p> 
       {props.dogDetalles.name ?
        <div className="detallePokemon" >
           <h4>{props.dogDetalles.name}</h4>
          <img width = "600px" height = "240px"src={props.dogDetalles.image} alt={props.dogDetalles.name}/>
          <h4>Vida: {props.dogDetalles.life_span}</h4>
          <h4>Peso: {props.dogDetalles.weight} Altura: {props.dogDetalles.height}</h4>
          <h4>Temperamento: {props.dogDetalles.temperament}</h4>
        </div>
         :<Spinner/>
       } 
      </div>
       
     </div>
      
    );
}

//===========================================//

function mapStateToProps(state){
  return {
    ...state
  }
}
//Actions
function mapDispatchToProps(dispatch) {
  return {
    emptyDetalleDog:() => dispatch(emptyDetalleDog()),
    getDetalleDog: (id) => dispatch(getDetalleDog(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetalleDog);