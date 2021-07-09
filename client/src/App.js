import './App.css';
import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import Detalle from "./components/detalleDog/DetalleDog";
import AltaPerro from "./components/altaDog/AltaDog"

function App() {
  return (
    <BrowserRouter>
    <Route exact path = "/" component ={LandingPage}/>
    <Route exact path = "/Home" component ={Home}/>
    <Route exact path = "/Detalle/:id" component ={Detalle}/>
    <Route exact path = "/Alta" component ={AltaPerro}/>
</BrowserRouter>
  );
}

export default App;
