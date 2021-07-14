const URLAPI = "https://api.thedogapi.com/v1/breeds?key=ec34df1f-bb5a-43c4-833d-77189fd56edb";
const {Router}= require("express");
const { Dog, Temperament, Dog_Tem} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    const name = req.query.name;
    const temperament =  req.query.temperament;
    let response =[];
    let responsenombres =[];

    try{
        let ApiDog =  await axios.get(URLAPI)
        const ApiDogName = ApiDog.data;

    if(temperament){
        try{

            for(let i=0; i< ApiDogName.length;i++){
                if(ApiDogName[i].temperament.includes(temperament)){
                 const dog = {
                     id: ApiDogName[i].id,
                     name: ApiDogName[i].name,
                     life_span: ApiDogName[i].life_span,
                     weight: ApiDogName[i].weight.metric,
                     height: ApiDogName[i].height.metric,
                     temperaments: ApiDogName[i].temperament,
                     image: ApiDogName[i].image.url
                   }
                 responsenombres.push(dog);
                }
            }
            if(responsenombres.length > 0){
                return res.status(200).json(responsenombres)
               }

        }catch(err){
            return res.status(404)
        }

    }



         if(name){
           try{
               for(let i=0; i< ApiDogName.length;i++){
                   if(ApiDogName[i].name === name){
                    const dog = {
                        id: ApiDogName[i].id,
                        name: ApiDogName[i].name,
                        life_span: ApiDogName[i].life_span,
                        weight: ApiDogName[i].weight.metric,
                        height: ApiDogName[i].height.metric,
                        temperaments: ApiDogName[i].temperament,
                        image: ApiDogName[i].image.url
                      }
                    responsenombres.push(dog);
                    
                   }
               }
               if(responsenombres.length > 0){
                return res.status(200).json(responsenombres)
               }

             let BsDogName = await Dog.findAll({
                where:{
                    name:{
                        [Op.iLike]:`${name}`,
                    }
                } 
             },);

             if(BsDogName){
              return res.status(200).json(BsDogName)    
              }
              
           }catch(error){
           return res.send(error);
           }
        }
        const apiDog =  await axios.get(URLAPI)
        const dogsApi = apiDog.data;
        for(let i =0; i < dogsApi.length; i++){
            response.push({
                id: dogsApi[i].id,
                name: dogsApi[i].name,
                life_span: dogsApi[i].life_span,
                weight: dogsApi[i].weight.metric,
                height: dogsApi[i].height.metric,
                temperaments: dogsApi[i].temperament,
                image: dogsApi[i].image.url
            })
          
        }
        let bsDog=  await Dog.findAll({
            include: [Temperament]
        });
        return res.status(200).json(bsDog.concat(response))
    }catch(err){
    return res.send("Error")
}
})
module.exports = app;