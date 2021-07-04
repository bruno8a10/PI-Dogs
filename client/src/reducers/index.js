// import { GET_POKEMONES} from "../actions"
// //==== Setear Estado Global Inicial ======//
// const initialState = {
//     temperament:[],
//     dogs:[],
//     dogDetalles:{},
//     filtroTemperament:[],
//     ordenarDog:[]
// }
// //==== Setear Reducers ======//
// function rootReducer(state = initialState, action){
//     if (action.type === "FiltrarPorTemperament") {
//         console.log(state)
//         return {
//           ...state, 
//           filtroTemperament: action.payload
//         }
//       }
//     if(action.type === "OrdenarAZ"){
//     return{
//         ...state,
//         ordenarDog: action.payload
//     }    
//     }
//     if(action.type === "OrdenarZA"){
//         return{
//         ...state,
//         ordenarDog: action.payload
//         }    
//         }
//      //_________________________________
//     if(action.type === GET_POKEMONES){
//         return {
//             ...state,
//             pokemones: action.payload
//        }
//     }
//     return state;
// }
// export default rootReducer;