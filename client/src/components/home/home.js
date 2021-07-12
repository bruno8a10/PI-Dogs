import React, { useEffect, useState } from "react";
import {getDogS} from "../../actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import logo from "../../img/apiDog.png";
import "./Home.css";
import Menu from "../menu/Menu";
import Filtro from "../filtro/filtro";
import Cards from "../cards/Cards"
function Home(props) {

const [input, setInput] = useState({
})
function handlePoke (e) {
  setInput({
    ...input,
    [e.target.name]:[...input.id, e.target.value]
  })
}
//_____________________
const [query, setQuery] = useState('');
useEffect(() => {
  async function fetchData(query) {
    await props.getDogS(query)
  }
  fetchData(query)
},[query])
//_________buscar__________
const handleChange = (q) => {
  setQuery(q);
}
const handleSubmit = (event) => {
  event.preventDefault();
}


    return(
    <div className="Home">
          <p class="centrado">
          <img className="i" width="400" height="80" src={logo} ></img>
          </p>
        <Menu/>
        <Filtro/>
        <p class="centrado">
        <section>
         <form className="form-control"  onSubmit={(e)=>handleSubmit(e)} >
          <input className="input-css"
          type="search"
          placeholder="Buscar..." 
          onChange={(e)=>handleChange(e.target.value)}/>
         </form>
        </section>
        </p>
        <Cards/>
    </div>
    )
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
    getDogS: (query) => dispatch(getDogS(query))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);