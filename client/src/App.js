import './App.css';
import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import Detalle from "./components/detalleDog/DetalleDog";

function App() {
  return (
    <BrowserRouter>
    <Route exact path = "/" component ={LandingPage}/>
    <Route exact path = "/Home" component ={Home}/>
    <Route exact path = "/Detalle/:id" component ={Detalle}/>
</BrowserRouter>
  );
}

export default App;
