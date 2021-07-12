import React, { useEffect,useState } from "react";
//import {getDetalleDog,getTypes, emptyDetalleDog} from "../../actions";
import {connect} from 'react-redux';
import logo from "../../img/apiDog.png";
import "./AltaDog.css"; 
import { Link } from "react-router-dom";
import Menu2 from "../menu/Menu2";

function AltaDog(props) {
  //post
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    speed: "",
    life_span: "",
    image: "",
 })

 function handleChange(e) {
  setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

 async function handleSubmit(e) {
  e.preventDefault()
  
  await fetch('http://localhost:3001/dogAlta', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(input),
  name: "",
  height: "",
  weight: "",
  speed: "",
  life_span: "",
  image: "",
  }) 	
}


    return (
      <div  translate ="no">  
        <p className="centrado">
          <img width = "600px" height = "150px" src={logo} ></img>
          </p> 
     <Menu2/>
      <div>  
        <div className="detalle" >
        <form className="forms"  onSubmit={handleSubmit}>
           <p>Nombre</p>
           <input type="text" name="name"  onChange={handleChange}></input>
          <p>Url Imagen</p>
          <input type="text" name="image"  onChange={handleChange}></input>
          <p>Vida</p>
          <input type="text"  name="life_span"  onChange={handleChange}></input>
          <p>Peso</p>
          <input type="text"  name="height"  onChange={handleChange}></input>
          <p>Altura</p>
          <input type="text"  name="weight"  onChange={handleChange}  ></input>
          <p>Temperamento</p>
         
          <button  type="submit" className="button3">Agregar</button>
         
          </form> 
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