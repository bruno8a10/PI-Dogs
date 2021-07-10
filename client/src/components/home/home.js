import React, { useEffect, useState } from "react";
import {getDogS} from "../../actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import logo from "../../img/apiDog.png";
import "./Home.css";
import Menu from "../menu/Menu";
import Cards from "../cards/Cards"
function Home(props) {

//_____________________
const [query, setQuery] = useState('');
useEffect(() => {
  async function fetchData(query) {
    await props.getDogS(query)
  }
  fetchData(query)
},[query])

const handleChange = (q) => {
  setQuery(q);
}
    return(
    <div className="Home">
          <p class="centrado">
          <img className="i" width="400" height="80" src={logo} ></img>
          </p>
        <Menu/>
        <p class="centrado">
        <section>
         <form className="form-control" >
          <input className="input-css"
          type="search"
          placeholder="Buscar..." />
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