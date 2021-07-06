import {GET_DOGS, GET_TEMPERAMENT,GET_DETALLE_DOG, EMPTY_DETALLE_DOG } from "../actions"
// //==== Setear Estado Global Inicial ======//
const initialState = {
    temperament:[],
    dogs:[],
    dogDetalles:{},
    filtroTemperament:[],
    ordenarDog:[]
}
// //==== Setear Reducers ======//
function rootReducer(state = initialState, action){
    if (action.type === "FiltrarPorTemperament") {
        console.log(state)
        return {
          ...state, 
          filtroTemperament: action.payload
        }
      }
    if(action.type === "OrdenarAZ"){
    return{
        ...state,
        ordenarDog: action.payload
    }    
    }
    if(action.type === "OrdenarZA"){
        return{
        ...state,
        ordenarDog: action.payload
        }    
        }
//______________Rutas__________________
    if(action.type === GET_DOGS){
        return {
            ...state,
            dogs: action.payload
       }
    }
    if(action.type === GET_TEMPERAMENT){
        return {
            ...state,
            temperament: action.payload
       }
    }
    if(action.type === GET_DETALLE_DOG){
        return {
            ...state,
            dogDetalles: action.payload
       }
    }
    if(action.type === EMPTY_DETALLE_DOG){
        return {
            ...state,
            dogDetalles:{}
       }
    }
    return state;
}
 export default rootReducer;