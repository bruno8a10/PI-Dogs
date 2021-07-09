import React, { useEffect } from "react";
import {getDetalleDog,getTypes, emptyDetalleDog} from "../../actions";
import {connect} from 'react-redux';
import logo from "../../img/apiDog.png";
import Spinner from "../Spinner";
import "./DetalleDog";  
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
      <div className="Detalle"   translate ="no">  
        <p class="centrado">
          <img className="i" width="400" height="100" src={logo} ></img>
          </p> 
     <Menu2/>
      <div>
      <h2>Detalle Dog</h2>
       {props.dogDetalles.name ?
        <div className="forms"  >
           <h4>{props.dogDetalles.name}</h4>
          <img width = "200px" height = "200px"src={props.dogDetalles.image} alt={props.dogDetalles.name}/>
          <h4>Vida: {props.dogDetalles.life_span}</h4>
          <h4>Temperamento: {props.dogDetalles.temperament}</h4>
          {/* <h2>{props.dogDetalles.weight}</h2> */}
          {/* <h2>{props.dogDetalles.height}</h2> */}
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