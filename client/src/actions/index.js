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
     let arr =[]
    for(let i=0; i<dogs.length;i++){
            if(dogs[i].temperaments){
                if(dogs[i].temperaments.includes(filtro)){
                    arr.push(dogs[i])   
                }
            }
    }
    return{type: "FiltrarPorTemperament", payload: arr}
};

export function filtroOrigen(dogs, filtroOrigen){
    console.log("........................por Origen"+ filtroOrigen)
    let arrOrigen =[]
   for(let i=0; i<dogs.length;i++){
           //guarda lo de la api
           if(filtroOrigen==="Api" && dogs[i].id <265){
            arrOrigen.push(dogs[i])     
           }
           if(filtroOrigen==="Base" && dogs[i].id >265){
            arrOrigen.push(dogs[i])     
           }
   }
   return{type: "FiltrarPorOrigen", payload: arrOrigen}
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

