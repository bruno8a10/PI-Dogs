import React, { useEffect } from "react";
//import {getDetalleDog,getTypes, emptyDetalleDog} from "../../actions";
import {connect} from 'react-redux';
import logo from "../../img/apiDog.png";
import "./AltaDog.css"; 
import { Link } from "react-router-dom";
import Menu2 from "../menu/Menu2";

function AltaDog(props) {
  //const id= data.getDetallePokemon(data.match.params.id)



    return (
      <div  translate ="no">  
        <p className="centrado">
          <img width = "600px" height = "150px" src={logo} ></img>
          </p> 
     <Menu2/>
      <div>  
        <div className="detalle" >
           <p>Nombre</p>
           <input type="text"></input>
          <p>Url Imagen</p>
          <input type="text"></input>
          <p>Vida</p>
          <input type="text"></input>
          <p>Peso</p>
          <input type="text"></input>
          <p>Altura</p>
          <input type="text"></input>
          <p>Temperamento</p>
          <button  className="button3">Agregar</button>
        </div>
     
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
  return 
}
export default connect(mapStateToProps,mapDispatchToProps)(AltaDog);