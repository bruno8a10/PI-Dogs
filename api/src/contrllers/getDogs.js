const URLAPI = "https://api.thedogapi.com/v1/breeds?key=ec34df1f-bb5a-43c4-833d-77189fd56edb?limit=2";
const {Router}= require("express");
const { Dog, Temperament, Dog_Tem} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    const name = req.query.name;
    try{
         if(name){
           try{
            let ApiDogName = await(`http://api.thedogapi.com/v1/breeds/name=${name}`);
             console.log(ApiDogName)
             if(ApiDogName){
             return res.status(200).json(ApiDogName)    
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
             return res.send("No existe ese nombre")
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