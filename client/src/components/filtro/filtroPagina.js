import React, { useEffect, useState } from "react";
import {getDogS} from "../../actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import logo from "../../img/apiDog.png";
import "./Home.css";
import Menu from "../menu/Menu";
import Filtro from "../filtro/filtro";
import Filtro2 from "../filtro/filtroNombre";

import Cards from "../cards/Cards";
import { useDispatch, useSelector } from 'react-redux';

function Home(props) {

  //const estados = useSelector((state) => state); 
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
          <img className="i" width="400" height="70" src={logo} ></img>
          </p>
        <Menu/>
        <Filtro/>
        <Filtro2/>
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