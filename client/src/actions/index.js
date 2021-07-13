export const GET_DOGS = "GET_DOGS";
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";
export const  GET_DETALLE_DOG = "GET_DETALLE_DOG";
export const EMPTY_DETALLE_DOG = "EMPTY_DETALLE_DOG";
export function getDogS(query){
    return function(dispatch){
        return(
            fetch(`http://localhost:3001/dog?name=${query}`
            )
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_DOGS, payload: json})
            })
        )
    }
}
export function getTemperament(){
    return function(dispatch){
        return(
            fetch("http://localhost:3001/temp"
            )
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_TEMPERAMENT, payload: json})
            })
        )
    }
}
export function getDetalleDog(id){
    return function(dispatch){
        return fetch(`http://localhost:3001/dogId/${id}`
            
        )
        .then(res => res.json())
        //despachamos el objeto al reduce
        .then(json => {
            dispatch({type:GET_DETALLE_DOG, payload: json})
        })
    }
}
export function emptyDetalleDog(num) {
    return function(dispatch) {
        dispatch({type: EMPTY_DETALLE_DOG}) 
    }
}
export function filtroP(dogs, filtro){
    console.log("soy actions, filtro : "+ filtro)
    let filtroDog = dogs.filter((e) => e.types.includes(filtro))
    return{type: "FiltrarPorTemperament", payload: filtroDog}
};
//_________ordenado por  Raza_________
export function ordenAZ(dogs){
 let  az =  dogs.sort((a,b) => a.name>b.name?1: -1)
 return {type: "OrdenarAZ", payload: az}
}
export function ordenZA(dogs){
 let  za =  dogs.sort((a,b) => a.name<b.name?1: -1)
 return {type: "OrdenarZA", payload: za}
}
//_________ordenado por  peso_________
export function ordenMax(dogs){
    let  maxP =  dogs.sort((a,b) => a.weight>b.weight?1: -1)
    return {type: "OrdenarMax", payload: maxP}
}
   export function ordenMin(dogs){
    let  minP =  dogs.sort((a,b) => a.weight<b.weight?1: -1)
    return {type: "OrdenarMin", payload: minP}
}