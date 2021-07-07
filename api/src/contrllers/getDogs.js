const URLAPI = "https://api.thedogapi.com/v1/breeds?key=ec34df1f-bb5a-43c4-833d-77189fd56edb";
const {Router}= require("express");
const { Dog, Temperament, Dog_Tem} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    const name = req.query.name;
    try{
        let ApiDog =  await axios.get(URLAPI)
        const ApiDogName = ApiDog.data;
         if(name){
           try{
               for(let i=0; i< ApiDogName.length;i++){
                   console.log(ApiDogName[i].name)
                   if(ApiDogName[i].name == name){
                    return res.status(200).json(ApiDogName[i])
                   }
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
              return res.send("No existe Id")  
           }catch(error){
           return res.send(error);
           }
        }
        const apiDog =  await axios.get(URLAPI)
        const dogsApi = apiDog.data;
        let bsDog=  await Dog.findAll({
            include: [Temperament]
        });
        return res.status(200).json(dogsApi.concat(bsDog))
    }catch(err){
    return res.send("Error")
}
})
module.exports = app;