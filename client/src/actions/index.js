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
        console.log("soy actions, filtro : "+ filtro)
        let arr1 = dogs[i].temperaments.split(',')
        for(let j=0; j<arr1.length;j++){
            if(arr1[j] === filtro){
             console.log("siii");
             arr.push(dogs[i])
            }
            console.log("npo");
        } 
        // for(let j=0; j<dogs[i].temperaments.length;j++){
        //      if(dogs[i].temperament[j] === filtro){
        //       console.log("siii");
        //       arr.push(dogs[i])
        //      }else{
        //         console.log("npo");
        //      }
        //  }
        //  if(dogs[i].temperaments.includes(filtro)){
        //     arr.push(dogs[i]) 
        //  }


    }
    return{type: "FiltrarPorTemperament", payload: arr}
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