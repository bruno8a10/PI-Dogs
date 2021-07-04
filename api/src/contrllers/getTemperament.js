const URLAPI = "https://api.thedogapi.com/v1/breeds?key=ec34df1f-bb5a-43c4-833d-77189fd56edb?limit=2";
const {Router}= require("express");
const { Dog, Temperament, Dog_Tem} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    try{
        const apiDog =  await axios.get(URLAPI)
        const dogs = apiDog.data;
        // for(let i=0; i< dogs.length; i++){
        //     let arr = dogs[i].temperament.split(',')
        //     for(let j = 0;j< arr.length; j++){
        //         await Temperament.findOrCreate({
        //         where:{
        //             name: arr[j],
        //         }
        //         })
        //     }
        // }
        let temp = await Temperament.findAll();
        return res.status(200).json(temp)
    }catch(err){
    return res.send("No existe")
}
})
module.exports = app;